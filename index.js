module.exports = {
  extends: [
    "./rules/javascript",
    "./rules/import",
    "./rules/react",
    "./rules/typescript",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
