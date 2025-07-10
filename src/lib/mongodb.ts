import { MongoClient } from "mongodb";

const uri = "mongodb+srv://cccwithunknown:positive123456789@cluster0.whulyi1.mongodb.net/recipe_db?retryWrites=true&w=majority&appName=Cluster0";

const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise; 