/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/database/connectDB";
import User from "@/models/User.model";
import { comparePassword, generateToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const match = await comparePassword(password, user.password);
  if (!match)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = generateToken(user);

  const { password: _, ...userData } = user.toObject(); 

  const response = NextResponse.json({
    token,
    user: {
      ...userData,
      subscriptionStatus: user.subscriptionStatus,
    },
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
