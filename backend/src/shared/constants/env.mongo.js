export const URI_BASE = process.env.MONGO_URI_BASE;
export const HOST = process.env.MONGO_HOST;
export const PORT = process.env.MONGO_PORT;
export const DB_NAME = process.env.MONGO_DB_NAME;
export const USER = encodeURIComponent(process.env.MONGO_USER);
export const PASSWORD = encodeURIComponent(process.env.MONGO_PASSWORD);
export const AUTH_SOURCE = process.env.MONGO_AUTH_SOURCE || "admin"; 