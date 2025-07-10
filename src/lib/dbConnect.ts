import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://cccwithunknown:positive123456789@cluster0.whulyi1.mongodb.net/recipe_db?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGODB_URI) throw new Error("Please define the MONGODB_URI environment variable");

let cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = (global as any).mongoose || { conn: null, promise: null };
if (!(global as any).mongoose) (global as any).mongoose = cached;

export default async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
} 