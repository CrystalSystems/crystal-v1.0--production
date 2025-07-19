import {
  SERVER_PORT,
  APP_MODE,
  CORS_ORIGIN,
  COOKIE_SECURE_STATUS
} from "../../../shared/constants/index.js";

const redBox = (text) => `\x1b[41m\x1b[38;2;255;255;255m${text}\x1b[0m`;
const orangeBox = (text) => `\x1b[48;5;202m\x1b[38;2;255;255;255m${text}\x1b[0m`;
// const greenBox = (text) => `\x1b[42m\x1b[38;2;255;255;255m${text}\x1b[0m`;

export async function startServer(app) {

  console.log(`\n  🚀 Initializing server on port: ${SERVER_PORT}...\n`);

  app.listen(SERVER_PORT, (error) =>
    error
      ? (console.error("❌ Server error -", error), process.exit(1))
      : console.log(`\n  🔥 Server OK

  ${redBox(`   🔥 Roast 🔥   `)}

  Port: ${SERVER_PORT}
  Mode: ${orangeBox(` ${APP_MODE} `)}

  ${orangeBox(`   CORS   `)}
  Origin: ${CORS_ORIGIN}

  ${orangeBox(`   Cookie   `)}
  Secure: ${COOKIE_SECURE_STATUS}
    `
      )
  );
}