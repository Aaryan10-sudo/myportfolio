import mongoose from "mongoose";
import { databaseUrl } from "../utils/constant.js";
let connectDB = () => {
  mongoose.connect(databaseUrl);
  console.log("Connected to DB");
};
export default connectDB;
