import mongoose from "mongoose";

let portfolioSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name field is required"],
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
  },
  message: {
    type: String,
    required: [true, "Message field is required"],
  },
});

export default portfolioSchema;
