import { copyFileSync, mkdirSync } from "node:fs";

const output = process.env.NEWS_OUTPUT_DIR ?? "/output";
mkdirSync(output, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), output + "/entry.png");
