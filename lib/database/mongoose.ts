import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// nextjs calls server on every action, so cache connections
let cached: MongooseConnection = (global as any).mongoose //eslint-disable-line @typescript-eslint/no-explicit-any

if (!cached) {
  cached = (global as any).mongoose = { //eslint-disable-line @typescript-eslint/no-explicit-any
    conn: null, promise: null
  }
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error('Missing mongodb_url')
  
  cached.promise = cached.promise || mongoose.connect(MONGODB_URL, { dbName: 'wok-hei', bufferCommands: false })
  
  cached.conn = await cached.promise;
  return cached.conn;
}