module.exports = {
  extends: [
    "./rules/javascript",
    "./rules/typescript",
    "./rules/import",
    "./rules/react",
    "./rules/prettier",
    "./rules/css.js"
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {},
};
