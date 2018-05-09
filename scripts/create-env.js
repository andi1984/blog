const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `SENTRY_KEY=${process.env.SENTRY_KEY}\nSPOTIFY_CLIENT_ID=${
    process.env.SPOTIFY_CLIENT_ID
  }\nSPOTIFY_API_ENDPOINT=${process.env.SPOTIFY_API_ENDPOINT}\n`
);
