import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import mongoose from "mongoose";

// Directly hardcode your MongoDB URI here:
const MONGODB_URI = "mongodb+srv://cccwithunknown:positive123456789@cluster0.whulyi1.mongodb.net/recipe_db?retryWrites=true&w=majority&appName=Cluster0";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Connect to MongoDB with Mongoose (only if not already connected)
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
    }

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const user = new User({ email, password: hashedPassword });
    await user.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Error creating user", error });
  }
} 