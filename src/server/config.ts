import dotenv from "dotenv";

dotenv.config({});

const env = process.env;
export const PORT=env.PORT as string;
export const POSTGRES_DATABASE_URL=env.POSTGRES_DATABASE_URL as string;
export const NODE_ENV=env.NODE_ENV as string;
export const CLIENT_URL=env.CLIENT_URL as string;
export const PAYSTACK_TRANSACTION_INI_URL=env.PAYSTACK_TRANSACTION_INI_URL as string;
export const PAYSTACK_TRANSACTION_VERIFY_BASE_URL=env.PAYSTACK_TRANSACTION_VERIFY_BASE_URL as string;
export const PAYSTACK_CALLBACK_URL=env.PAYSTACK_CALLBACK_URL as string;
export const PAYSTACK_SECRET_KEY=env.PAYSTACK_SECRET_KEY as string;
export const PAYSTACK_SUCCESS_STATUS=env.PAYSTACK_SUCCESS_STATUS as string;