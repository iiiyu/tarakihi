/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-sort-json", "@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "^[./]",
    "",
    "<TYPES>",
    "<TYPES>^[./]"
  ],
  printWidth: 120,
  trailingComma: "es5",
  singleQuote: true,
  tabWidth: 2,
  semi: false,
};

export default config;
