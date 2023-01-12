module.exports = {
  extends: ["./rules/javascript", "./rules/import", "./rules/react"].map(
    require.resolve
  ),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
