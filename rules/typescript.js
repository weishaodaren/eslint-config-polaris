module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json", ".ts", ".d.ts"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
  },
  rules: {
    /**
     * @typescript-eslint
     */

    // 未使用的变量(禁止出现)
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    // 未使用的表达式禁止出现(禁止出现)
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    // 默认参数放置最后一位(支持可选参数) https://typescript-eslint.io/rules/default-param-last
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    // 重复的类成员(禁止出现)
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    // 空函数(禁止出现)
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    // 无意义的分号(禁止出现)
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",
    // 超出精度的数字(禁止出现)
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    // 数字常量 魔法数字(禁止出现)
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignoreNumericLiteralTypes: true, // 忽略数字联合类型
        ignoreEnums: true, // 忽略枚举
        ignoreDefaultValues: true, // 忽略默认值
        ignoreArrayIndexes: true, // 忽略数组索引
        ignore: [-1, 0, 1], // 忽略部分数字
      },
    ],
    // 变量定义前使用(禁止出现)
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    // 返回await结果(禁止出现) https://typescript-eslint.io/rules/return-await
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    // 无意义的 单独的代码块(禁止出现)
    "no-lone-blocks": "error",
    // 相邻的函数重载 写在一起
    "@typescript-eslint/adjacent-overload-signatures": "error",
    // 禁止使用 禁用类型 https://typescript-eslint.io/rules/ban-types
    "@typescript-eslint/ban-types": "error",
    // 类型导出 export type {}
    "@typescript-eslint/consistent-type-exports": "warn",
    // 类型引入 import type {}
    "@typescript-eslint/consistent-type-imports": "warn",
    // 导出空对象(禁止出现)
    "@typescript-eslint/no-useless-empty-export": "error",
    // 空的接口(禁止出现)
    "@typescript-eslint/no-empty-interface": "error",
    // 无意义的any类型(禁止出现) // TODO: 暂时warning
    "@typescript-eslint/no-explicit-any": [
      "warn",
      {
        ignoreRestArgs: true, // 忽略剩余数组
      },
    ],
    // 无意义的非空断言(禁止出现)
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    // 无意义的new关键字(禁止出现)
    "@typescript-eslint/no-misused-new": "error",
    // 可选链 非空断言连续错误使用(禁止出现)
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    // 非空断言 可选链冲突(禁止出现)
    "@typescript-eslint/no-non-null-assertion": "error",
    // 重新分配this(禁止出现)
    "@typescript-eslint/no-this-alias": "error",
    // 无意义的类型约束 <T extends any> (禁止出现)
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    // 强制promise函数 使用 async  https://typescript-eslint.io/rules/promise-function-async
    "@typescript-eslint/promise-function-async": "error",
    // 针对联合类型和交叉类型 排序友好 解决可能出现的问题 https://typescript-eslint.io/rules/sort-type-constituents
    "@typescript-eslint/sort-type-constituents": "warn",
    // 强制要求switch-case语句对联合类型的可能性都匹配
    "@typescript-eslint/switch-exhaustiveness-check": "error",
  },
};
