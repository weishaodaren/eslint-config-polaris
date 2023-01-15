## eslint-config-polaris

> 极星代码规范 ❄️

This package provides Polaris's base JS .eslintrc as an extensible shared config.

### Installation

Install the correct versions of each package, which are listed by the command:

Which produces and runs a command like:

```sh
npm install --save-dev
    @typescript-eslint/eslint-plugin@latest
    @typescript-eslint/parser@latest
    eslint@latest
    eslint-config-prettier@latest
    eslint-plugin-import@latest
    eslint-plugin-prettier@latest
    eslint-plugin-react@latest
    eslint-plugin-react-hooks@latest
    typescript@latest
    prettier@latest
```

or use `npm-install-peers`

### Useage

In your .eslintrc

1. With Parser

```json
"parser": "@typescript-eslint/parser"
```

2. With Plugins

```json
"plugins": ["import", "@typescript-eslint", "react", "react-hooks"]
```

3. With extends

```json
"extends": "polaris"
```

### Configuration

Defaults

```json
"extends": [
  "plugin:import/recommended",
  "plugin:import/typescript",
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:react/jsx-runtime",
  "plugin:prettier/recommended",
  "prettier"
]
```
