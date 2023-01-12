module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["import"],

  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx"],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },

  rules: {
    // 禁止可导出变量let var
    "import/no-mutable-exports": "error",
    // 禁止循环引用
    "import/no-cycle": [
      2,
      {
        ignoreExternal: true, // 忽略外部模块
      },
    ],
    // 禁止引用自身
    "import/no-self-import": "error",
    // 强制导出放置最后
    "import/exports-last": "error",
    // 强制import位于顶层
    "import/first": "error",
    // 强制此风格导出 https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
    "import/group-exports": "error",
    // 限定单文件依赖10个模块
    "import/max-dependencies": [
      "warn",
      {
        max: 10,
        ignoreTypeImports: true, // 忽略类型导入
      },
    ],
    // 禁止匿名导出
    "import/no-anonymous-default-export": "error",
    // 强制导入顺序风格
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@polaris-pm/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "polaris-components",
            group: "internal",
            position: "after",
          },
          {
            pattern: "polaris-components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "hooks/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "routes/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "views/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "constants/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/*.css",
            group: "index",
            position: "before",
          },
          {
            pattern: "**/*.less",
            group: "index",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "**/*.css", "**/*.less"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        warnOnUnassignedImports: true,
      },
    ],
    // 动态导入关闭校验
    "import/dynamic-import-chunkname": [
      0,
      {
        importFunctions: [],
        webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
      },
    ],
  },
};
