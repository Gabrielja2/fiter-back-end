import "dotenv/config";

export const MONGO_URL = process.env.MONGO_URL as string;
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const JWT_EXPIRE_IN_SECONDS = Number(process.env.JWT_EXPIRE_IN_SECONDS);

