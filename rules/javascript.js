module.exports = {
  rules: {
    // 数组回掉返回
    "array-callback-return": [
      "error",
      {
        checkForEach: true, // foreach 不会有返回值
      },
    ],
    // 在Promise里使用async(禁止出现)
    "no-async-promise-executor": "error",
    // 循环中使用await(禁止出现) Promise.all ... https://eslint.org/docs/latest/rules/no-await-in-loop
    "no-await-in-loop": "error",
    // 类重新分配(禁止出现)
    "no-class-assign": "error",
    // -0 用于判断(禁止出现) Object.is() 例外
    "no-compare-neg-zero": "error",
    // 条件匹配 全等 即使在while() 和 do...while()中  https://eslint.org/docs/latest/rules/no-cond-assign
    "no-cond-assign": ["error", "always"],
    // 构造函数不允许返回
    "no-constructor-return": "error",
    // debugger(禁止出现)
    "no-debugger": "error",
    // alert(禁止出现)
    "no-alert": "error",
    // console
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    // 出现重复的else-if(禁止出现)
    "no-dupe-else-if": "error",
    // 出现重复的case(禁止出现)
    "no-duplicate-case": "error",
    // ! 不安全的可选链 如果出现计算 需要额外对结果判断 Number.isNaN()
    "no-unsafe-optional-chaining": "error",
    // https://eslint.org/docs/latest/rules/no-array-constructor
    "no-array-constructor": "error",
    // 箭头函数风格
    "arrow-body-style": ["error", "as-needed"],
    // 驼峰命名
    camelcase: "warn",
    // 无意义的条件返回(禁止出现)
    "consistent-return": "error",
    // 警告 单文件最多250行
    "max-lines": [
      "warn",
      {
        max: 250,
        skipComments: true, // 跳过注释
      },
    ],
    // 警告 函数嵌套最多3个
    "max-nested-callbacks": [
      "warn",
      {
        max: 3,
      },
    ],
    // 警告 函数参数最多4个
    "max-params": [
      "warn",
      {
        max: 4,
      },
    ],
  },
};
