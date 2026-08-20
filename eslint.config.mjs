import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // `next lint` used to skip build output implicitly. It was removed in
  // Next 16, so running eslint directly has to be told, or it lints
  // .next/server/chunks and reports 23 errors in generated code.
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**"],
  },
  ...compat.extends("next/core-web-vitals"),
];

export default eslintConfig;
