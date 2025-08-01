/* eslint-disable @typescript-eslint/no-explicit-any */

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const hashPassword = (password: string) => bcrypt.hash(password, 10);
export const comparePassword = (password: string, hash: string) => bcrypt.compare(password, hash);

export const generateToken = (user: any) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    return null;
  }
};

export function getUserFromToken(token: string): { id: string } | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (typeof decoded === "string") return null;
    return decoded as { id: string };
  } catch {
    return null;
  }
}
