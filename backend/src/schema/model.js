import mongoose from "mongoose";
import portfolioSchema from "./portfolioSchema.js";

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
