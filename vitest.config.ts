/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vitest/config";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    include: ["core/**/*.test.tsx"],
    environment: "happy-dom",
    globals: true,
    setupFiles: [path.resolve(__dirname, "tests/setup.ts")],
  },
});
