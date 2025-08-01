/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}
  
 const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'subscription']
    });

    if (!session) {
      return NextResponse.json(
        { error: "Session not found" },
        { status: 404 }
      );
    }

    // Get plan name from metadata or line items
    const planName = session.metadata?.planId || 'Unknown Plan';
    const amount = session.amount_total || 0;

    return NextResponse.json({
      sessionId: session.id,
      customerEmail: session.customer_details?.email,
      planName,
      amount,
      status: session.status,
      subscriptionId: session.subscription,
      paymentStatus: session.payment_status,
    });

  } catch (err: any) {
    console.error("Error retrieving checkout session:", err?.message || err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}