import express, { json } from "express";
import cors from "cors";

import { portfolioRouter } from "./src/Routes/portfolioRouter.js";
import { Port } from "./src/utils/constant.js";
import { connectDB } from "./src/ConnectDB/ConnectDB.js";
const app = express();
let port = Port;
connectDB();
app.use(json());
app.use(cors());
app.use("/portfolio", portfolioRouter);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
