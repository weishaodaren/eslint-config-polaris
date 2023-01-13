# eslint-config-polaris

This package provides Polaris's base JS .eslintrc as an extensible shared config.

## Usage

1. Install the correct versions of each package, which are listed by the command:

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

2. Add `"extends": "polaris"` to your .eslintrc
