import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Hardcode your MongoDB URI here:
const MONGODB_URI = "mongodb+srv://cccwithunknown:positive123456789@cluster0.whulyi1.mongodb.net/recipe_db?retryWrites=true&w=majority&appName=Cluster0";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Connect to MongoDB with Mongoose (only if not already connected)
        if (mongoose.connection.readyState === 0) {
          await mongoose.connect(MONGODB_URI);
        }
        console.log("Login attempt for:", credentials?.email);

        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          console.log("User not found");
          return null;
        }
        const passwordMatch = await bcrypt.compare(credentials!.password, user.password);
        if (!passwordMatch) {
          console.log("Password does not match");
          return null;
        }
        console.log("Login successful for:", user.email);
        return { id: user._id.toString(), email: user.email };
      }
    })
  ],
  session: { strategy: "jwt" },
  secret: "your-very-long-random-secret", // You can hardcode your secret here
});