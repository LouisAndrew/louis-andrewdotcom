module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ["@louisandrew3/eslint-config/base.js", "plugin:astro/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
};
