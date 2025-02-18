import { config } from "dotenv";
config();

export const email = process.env.EMAIL;
export const password = process.env.PASSWORD;
export const databaseUrl = process.env.DATABASE;
export const Port = process.env.PORT || 9999;
