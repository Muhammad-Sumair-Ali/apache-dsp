/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "@/database/connectDB";
import User from "@/models/User.model";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}
  
 const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

interface RequestBody {
  userId: string;
  priceId: string;
  planId?: string;
  customerInfo?: {
    fullName?: string;
    email?: string;
    address?: string;
    country?: string;
    vatNumber?: string;
    phone?: string;
  };
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await req.json();
    const { userId, priceId, planId, customerInfo } = body;

    if (!userId || !priceId) {
      return NextResponse.json(
        { error: "Missing parameters" },
        { status: 400 }
      );
    }

    await connectDB();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    let customerId = user.stripeCustomerId;

    // Create or update Stripe customer
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: customerInfo?.email || user.email,
        name: customerInfo?.fullName,
        phone: customerInfo?.phone,
        address: customerInfo?.address
          ? {
              line1: customerInfo.address,
              country: customerInfo.country,
            }
          : undefined,
        metadata: {
          userId: user._id.toString(),
          vatNumber: customerInfo?.vatNumber || "",
        },
      });

      customerId = customer.id;
      user.stripeCustomerId = customerId;
      await user.save();
    } else if (customerInfo) {
      // Update existing customer
      await stripe.customers.update(customerId, {
        email: customerInfo.email || user.email,
        name: customerInfo.fullName,
        phone: customerInfo.phone,
        address: customerInfo.address
          ? {
              line1: customerInfo.address,
              country: customerInfo.country,
            }
          : undefined,
        metadata: {
          userId: user._id.toString(),
          vatNumber: customerInfo.vatNumber || "",
        },
      });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      metadata: {
        userId: user._id.toString(),
        priceId,
        planId: planId || "",
      },
      subscription_data: {
        metadata: {
          userId: user._id.toString(),
          priceId,
          planId: planId || "",
        },
      },
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    });

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    });

  } catch (err: any) {
    console.error("Stripe Checkout Error:", err?.message || err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}