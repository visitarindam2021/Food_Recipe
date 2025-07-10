import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (mongoose.connection.readyState === 0) {
          await mongoose.connect("mongodb+srv://cccwithunknown:positive123456789@cluster0.whulyi1.mongodb.net/recipe_db?retryWrites=true&w=majority&appName=Cluster0");
        }
        const user = await User.findOne({ email: credentials?.email });
        if (user && await bcrypt.compare(credentials!.password, user.password)) {
          return { id: user._id.toString(), email: user.email };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
}); 