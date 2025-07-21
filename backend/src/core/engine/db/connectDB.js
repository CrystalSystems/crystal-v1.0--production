import mongoose from "mongoose";
import {
    BASE_URI,
    HOST,
    PORT,
    DB_NAME,
    USER,
    PASSWORD,
    AUTH_SOURCE,
    PRODUCTION_STATUS
} from "../../../shared/constants/index.js";

const maxRetries = 5;
const retryDelay = 2000; // ms

const orangeBox = (text) => `\x1b[48;5;202m\x1b[38;2;255;255;255m${text}\x1b[0m`;

export async function connectDB(retries = maxRetries) {
    mongoose.set("strictQuery", true);

    const mongoUri = PRODUCTION_STATUS
        ? `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}?authSource=${AUTH_SOURCE}`
        : `${BASE_URI}/${DB_NAME}`;

    const mongoLogUri = PRODUCTION_STATUS
        ? `${HOST}:${PORT}/${DB_NAME}`
        : `${BASE_URI}/${DB_NAME}`;

    console.log(`  🔌 Connecting to MongoDB at: ${mongoLogUri}...`);

    try {
        await mongoose.connect(mongoUri);
        console.log(`  ${orangeBox(`   MongoDB   `)}
  Status: ОК 
  Connected: ${mongoLogUri}`
        );
    } catch (error) {
        console.error(`  ❌ DB connection failed (${maxRetries - retries + 1}/${maxRetries}) -`, error.message);

        if (retries > 0) {
            console.log(`  🔁 Retrying in ${retryDelay / 1000}s...\n`);
            setTimeout(() => connectDB(retries - 1), retryDelay);
        } else {
            console.error("  ❌ All retry attempts failed. Exiting.\n");
            process.exit(1);
        }
    }
}
