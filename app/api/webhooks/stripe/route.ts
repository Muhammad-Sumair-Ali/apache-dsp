/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "@/database/connectDB";
import subscriptionsModel from "@/models/subscriptions.model";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}
  
 const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature") as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    await connectDB();

    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;

      case "customer.subscription.created":
        await handleSubscriptionCreated(event.data.object as Stripe.Subscription);
        break;

      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;

      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;

      case "invoice.payment_succeeded":
        await handlePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;

      case "invoice.payment_failed":
        await handlePaymentFailed(event.data.object as Stripe.Invoice);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Webhook error:", error.message);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  try {
    const { userId, priceId, planId } = session.metadata || {};
    
    if (!userId) {
      console.error("No userId in checkout session metadata");
      return;
    }

    // Get the subscription from Stripe - handle both string and object types
    const subscriptionId = typeof session.subscription === 'string' 
      ? session.subscription 
      : (session.subscription as any)?.id;

    if (subscriptionId) {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      
      // Save subscription to database
      await saveSubscriptionToDB(subscription, userId, priceId, planId);
      
      console.log(`Checkout completed for user ${userId}`);
    }
  } catch (error: any) {
    console.error("Error handling checkout completed:", error.message);
  }
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  try {
    const { userId, priceId, planId } = subscription.metadata || {};
    
    if (!userId) {
      console.error("No userId in subscription metadata");
      return;
    }

    await saveSubscriptionToDB(subscription, userId, priceId, planId);
    console.log(`Subscription created for user ${userId}`);
  } catch (error: any) {
    console.error("Error handling subscription created:", error.message);
  }
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  try {
    const existingSubscription = await subscriptionsModel.findOne({
      stripeSubscriptionId: subscription.id,
    });

    if (existingSubscription) {
      await subscriptionsModel.findByIdAndUpdate(existingSubscription._id, {
        status: subscription.status,
         currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(),
        updatedAt: new Date(),
      });

      console.log(`Subscription updated: ${subscription.id}`);
    }
  } catch (error: any) {
    console.error("Error handling subscription updated:", error.message);
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  try {
    await subscriptionsModel.findOneAndUpdate(
      { stripeSubscriptionId: subscription.id },
      { status: "canceled", updatedAt: new Date() }
    );

    console.log(`Subscription canceled: ${subscription.id}`);
  } catch (error: any) {
    console.error("Error handling subscription deleted:", error.message);
  }
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  try {
    // Access subscription property safely
    const subscriptionId = (invoice as any).subscription;

    if (subscriptionId) {
      const subscriptionIdString = typeof subscriptionId === 'string' 
        ? subscriptionId 
        : subscriptionId.id;

      await subscriptionsModel.findOneAndUpdate(
        { stripeSubscriptionId: subscriptionIdString },
        { 
          status: "active",
          lastPaymentDate: new Date(),
          updatedAt: new Date()
        }
      );

      console.log(`Payment succeeded for subscription: ${subscriptionIdString}`);
    }
  } catch (error: any) {
    console.error("Error handling payment succeeded:", error.message);
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  try {
    // Access subscription property safely
    const subscriptionId = (invoice as any).subscription;

    if (subscriptionId) {
      const subscriptionIdString = typeof subscriptionId === 'string' 
        ? subscriptionId 
        : subscriptionId.id;

      await subscriptionsModel.findOneAndUpdate(
        { stripeSubscriptionId: subscriptionIdString },
        { 
          status: "past_due",
          updatedAt: new Date()
        }
      );

      console.log(`Payment failed for subscription: ${subscriptionIdString}`);
    }
  } catch (error: any) {
    console.error("Error handling payment failed:", error.message);
  }
}

async function saveSubscriptionToDB(
  subscription: Stripe.Subscription,
  userId: string,
  priceId?: string,
  planId?: string
) {
  try {
    // Check if subscription already exists
    const existingSubscription = await subscriptionsModel.findOne({
      stripeSubscriptionId: subscription.id,
    });

    if (existingSubscription) {
      // Update existing subscription
      await subscriptionsModel.findByIdAndUpdate(existingSubscription._id, {
        status: subscription.status,
          currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(),
        updatedAt: new Date(),
      });
    } else {
      // Get customer ID safely
      const customerId = typeof subscription.customer === 'string' 
        ? subscription.customer 
        : (subscription.customer as any)?.id || '';

      // Get price ID from subscription items
      const subscriptionPriceId = subscription.items.data[0]?.price?.id || priceId || '';

      // Create new subscription record
      await subscriptionsModel.create({
        userId,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: customerId,
        planName: planId || getPlanNameFromPrice(subscriptionPriceId),
        priceId: subscriptionPriceId,
        status: subscription.status,
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  } catch (error: any) {
    console.error("Error saving subscription to DB:", error.message);
    throw error;
  }
}

function getPlanNameFromPrice(priceId?: string): string {
  const priceToPlanMap: { [key: string]: string } = {
    "price_1Rr4zHHmC87hfyqbwbYAoqvK": "basic",
    "price_1Rr5X3HmC87hfyqb2eOu7h5J": "standard",
    "price_1Rr5YHHmC87hfyqbJDsS5rPO": "enterprise",
  };

  return priceToPlanMap[priceId || ""] || "unknown";
}