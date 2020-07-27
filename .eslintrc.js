module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  plugins: ["react"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "comma-dangle": ["error", "always-multiline"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "arrow-parens": ["error", "as-needed"],
  },
};
