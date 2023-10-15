/** @type {import('next').NextConfig} */
const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

module.exports = withPayload(
  {
    // Next config
  },
  {
    // Point to Payload config (Required)
    configPath: path.resolve(__dirname, "./payload/payload.config.ts"),
  }
);
