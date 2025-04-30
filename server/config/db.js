import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
   
  } catch (error) {
    console.error(`❌ Connection Error: ${error.message}`);
    console.log("HI123")
    process.exit(1);
  }
};

export default connectDB;