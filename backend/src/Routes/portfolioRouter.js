import { Router } from "express";
import { portfolioController } from "../Controller/portfolioController.js";

export const portfolioRouter = Router();
portfolioRouter.route("/").post(portfolioController);
