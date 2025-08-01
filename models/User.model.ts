import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String},
    firstName: { type: String},
    lastName: { type: String},
    companyName: { type: String, required: true },
    jobFunction: { type: String },
    jobTitle: { type: String, required: true },

    stripeCustomerId: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
