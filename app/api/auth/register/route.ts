import { connectDB } from "@/database/connectDB";
import { hashPassword } from "@/lib/auth";
import User from "@/models/User.model";
import { NextResponse } from "next/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

export async function POST(req: Request) {
  try {
    await connectDB();

    const {
      email,
      password,
      firstName,
      fullName,
      lastName,
      companyName,
      jobFunction,
      jobTitle,
      priceId,
    } = await req.json();

    if (!email || !password || !companyName || !jobTitle) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists." },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);

    // Create Stripe Customer
    const stripeCustomer = await stripe.customers.create({ email });

    let subscriptionData = undefined;
    if (priceId) {
      const subscription = await stripe.subscriptions.create({
        customer: stripeCustomer.id,
        items: [{ price: priceId }],
        payment_behavior: "default_incomplete",
        expand: ["latest_invoice.payment_intent"],
        trial_period_days: 30,
      });

      subscriptionData = {
        planId: priceId,
        status: subscription.status,
        subscriptionId: subscription.id,
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
      };
    }

    // Create User
    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      fullName,
      lastName,
      companyName,
      jobFunction,
      jobTitle,
      stripeCustomerId: stripeCustomer.id,
      subscription: subscriptionData,
    });

    return NextResponse.json({ success: true, userId: newUser._id });
  } catch (err) {
    console.error("Register Error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
