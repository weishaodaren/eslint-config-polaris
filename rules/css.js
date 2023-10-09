module.exports = {
  mode: 'jit',
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: [],
  rules: {
    'at-rule-no-unknown': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'prettier/prettier': [
      true,
      {
        singleQuote: true,
        endOfLine: 'auto', // refer: https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier
      },
    ],
  },
};
