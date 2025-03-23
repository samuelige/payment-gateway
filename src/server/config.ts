import dotenv from "dotenv";

dotenv.config({});

const env = process.env;
export const PORT=env.PORT as string;
export const POSTGRES_DB=env.POSTGRES_DB as string;
export const NODE_ENV=env.NODE_ENV as string;
export const CLIENT_URL=env.CLIENT_URL as string;