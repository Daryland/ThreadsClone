import mongoose from "mongoose";

let isConnected = false; //variable to check if mongoose in connected

export const connectToDB = async () => {
  mongoose.set('strickQuery', true);

  if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
  if(isConnected) return console.log('Already connected to MongoDb');

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;

    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}