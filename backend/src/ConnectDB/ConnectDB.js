import mongoose from "mongoose";
import { database } from "../utils/constant.js";

export const connectDB = () => {
  mongoose.connect(database);
  console.log(`MongoDB connected...`);
};
