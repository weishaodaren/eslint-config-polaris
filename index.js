export default  {
  extends: [
    "./rules/javascript",
    "./rules/typescript",
    "./rules/import",
    "./rules/react",
    "./rules/prettier",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {},
};
