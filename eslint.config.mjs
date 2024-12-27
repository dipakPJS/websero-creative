import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable or relax specific ESLint rules for production builds
      "no-console": "off", // Allows console statements
      "no-debugger": "off", // Allows debugger statements
      "@next/next/no-img-element": "off", // Disables Next.js img element rule
    },
  },
];

export default eslintConfig;
