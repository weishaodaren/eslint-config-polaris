module.exports = {
  extends: ["plugin:prettier/recommended", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        proseWrap: "never",
        quoteProps: "as-needed",
        bracketSpacing: true,
        htmlWhitespaceSensitivity: "css",
        endOfLine: "auto",
        jsxBracketSameLine: true,
        embeddedLanguageFormatting: "off",
        arrowParens: "avoid",
      },
    ],
  },
};
