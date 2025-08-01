"use client";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

const stripe_key = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
const stripe_key_ssr = process.env.STRIPE_SECRET_KEY;

if (!stripe_key) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}
if (!stripe_key_ssr) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

export const stripe = new Stripe(stripe_key, {
  apiVersion: "2025-07-30.basil",
});
export const stripeSSR = new Stripe(stripe_key_ssr, {
  apiVersion: "2025-07-30.basil",
});

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
