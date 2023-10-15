import path from "path";
import { buildConfig } from "payload/config";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export default buildConfig({
  editor: lexicalEditor({}),
  collections: [
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
  // Configure the Postgres adapter here
  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
