import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  stripeSubscriptionId: { type: String, required: true },
  stripeCustomerId: { type: String, required: true },
  planName: String,
  priceId: String,
  status: String,
  currentPeriodStart: Date,
  currentPeriodEnd: Date,
});

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", subscriptionSchema);
