import astro from "eslint-plugin-astro";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astro.parser,
      // sourceType: "module",
      // ecmaVersion: 2021,
      // ecmaFeatures: {
      //   globalReturn: false,
      //   impliedStrict: false,
      //   jsx: false,
      // },
    },
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-unsafe-inline-scripts": "error",
    },
  },
];
