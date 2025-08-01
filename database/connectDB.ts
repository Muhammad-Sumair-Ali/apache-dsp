/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

let isConnecting = false;
let connectionRetries = 0;
const MAX_RETRIES = 3;

export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    console.log("Using existing database connection");
    return;
  }
  
  if (isConnecting) {
    console.log("Database connection in progress, waiting...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    return connectDB();
  }
  
  const mongoUrl = process.env.MONGODB_URI;
  
  if (!mongoUrl) {
    console.error("MONGODB_URI environment variable is not set");
    throw new Error("MONGODB_URI environment variable is not set");
  }
  
  try {
    isConnecting = true;
    console.log(`Connecting to MongoDB (attempt ${connectionRetries + 1}/${MAX_RETRIES + 1})...`);
    
    await mongoose.connect(mongoUrl, {
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 60000,
      maxPoolSize: 10,
      retryWrites: true,
      retryReads: true
    });
    
    isConnecting = false;
    connectionRetries = 0;
    
    console.log("Connected to MongoDB successfully");
    
    mongoose.connection.on('error', (err:any) => {
      console.error('MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected');
    });
    
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed due to app termination');
      process.exit(0);
    });
    
  } catch (error) {
    isConnecting = false;
    connectionRetries++;
    
    console.error("MongoDB connection error:", error);
    
    if (connectionRetries <= MAX_RETRIES) {
      console.log(`Retrying connection in 5 seconds...`);
      await new Promise(resolve => setTimeout(resolve, 5000));
      return connectDB();
    }
    
    throw new Error(`Failed to connect to MongoDB after ${MAX_RETRIES + 1} attempts`);
  }
}