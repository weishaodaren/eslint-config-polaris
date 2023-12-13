module.exports = {
  plugins: ["react", "react-hooks"],
  extends: [
    "plugin:react/recommended", // https://github.com/jsx-eslint/eslint-plugin-react/#shareable-configs
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  // https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
  rules: {
    "react/prop-types": [
      2,
      {
        ignore: ['children', 'className'],
        skipUndeclared: true
       }
      ],
    // 关闭展示displayName
    "react/display-name": 'off',
    // 关闭强制使用默认值
    "react/require-default-props": 'off',
    // 关闭使用与默认类型相同的默认值(同上 SFC不使用defaultProps 推荐ES6默认参数)
    "react/default-props-match-prop-types": 'off',
    // 强制函数组件命名使用箭头函数
    "react/function-component-definition": [
      'error',
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    // 强制组件解构props
    "react/destructuring-assignment": [
      'error',
      "always",
      {
        destructureInSignature: "always", // 解构签名
      },
    ],
    // 警告 尽量不要使用inline-style
    "react/forbid-dom-props": [
      'warn',
      {
        forbid: ["style"],
      },
    ],
    // 强制使用useState结构名称如: [xxx, setXxx] = useState
    "react/hook-use-state": 'error',
    // 安全使用iframe
    "react/iframe-missing-sandbox": 'error',
    // 强制使用boolean熟悉如: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-boolean-value": 'error',
    // 保持风格统一 事件handlexXxx 传递事件onXxx
    "react/jsx-handler-names": [
      'error',
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    // 警告jsx嵌套5层
    "react/jsx-max-depth": [
      'warn',
      {
        max: 5,
      },
    ],
    // 强制jsx一行最多3个props
    "react/jsx-max-props-per-line": [
      'error',
      {
        maximum: 3,
      },
    ],
    // 强制使用Context时,使用useMemo/useCallback 减少无意义re-render
    "react/jsx-no-constructed-context-values": 'error',
    // 强制不可使用{...props}
    "react/jsx-props-no-spreading": [
      'error',
      {
        exceptions: ["Route"], // 此元素列外
      },
    ],
     // 禁止 jsx 中使用无用的引号
    'react/jsx-curly-brace-presence': ['error', 'never'],
    // 禁止出现重复的 props
    'react/jsx-no-duplicate-props': 'error',
    // 禁止使用未定义的组件
    'react/jsx-no-undef': 'error',
    // 禁止无意义的 Fragment 组件
    'react/jsx-no-useless-fragment': 'error',
    // 组件的名称必须符合 PascalCase
    'react/jsx-pascal-case': 'error',
    // 修复 React 被误报为未使用的变量的问题（仅在开启 no-unused-vars 时有效）
    'react/jsx-uses-react': 'error',
    // 修复 no-unused-vars 不检查 jsx 的问题
    'react/jsx-uses-vars': 'error',
    // 强制不可使用index作为key https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    "react/no-array-index-key": 'error',
    // TODO: 还未发布 强制数组对象类型使用默认值 https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
    "react/no-object-type-as-default-prop": 2,
    // 禁止在无状态函数组件使用this
    "react/no-this-in-sfc": 'error',
    // 禁止出现不稳定的嵌套组件 https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    "react/no-unstable-nested-components": [
      'error',
      {
        allowAsProps: true,
      },
    ],
    // 强制编写无状态纯函数组件
    "react/prefer-stateless-function": 'error',
    // 强制自闭合标签
    "react/self-closing-comp": 'error',


    /*
     * hooks
     */

    // 强制使用hooks规范
    "react-hooks/rules-of-hooks": "error",
    // 依赖警告
    "react-hooks/exhaustive-deps": "warn",
  },
};
