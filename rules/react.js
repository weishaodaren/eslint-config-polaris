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
    // 关闭展示displayName
    "react/display-name": 0,
    // 强制使用默认值
    "react/require-default-props": 2,
    // 强制使用与默认类型相同的默认值
    "react/default-props-match-prop-types": 2,
    // 强制函数组件命名使用箭头函数
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    // 强制组件解构props
    "react/destructuring-assignment": [
      2,
      "always",
      {
        destructureInSignature: "always", // 解构签名
      },
    ],
    // 警告 尽量不要使用inline-style
    "react/forbid-dom-props": [
      1,
      {
        forbid: ["style"],
      },
    ],
    // 强制使用useState结构名称如: [xxx, setXxx] = useState
    "react/hook-use-state": 2,
    // 安全使用iframe
    "react/iframe-missing-sandbox": 1,
    // 强制使用boolean熟悉如: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-boolean-value": 2,
    // 保持风格统一 事件handlexXxx 传递事件onXxx
    "react/jsx-handler-names": [
      2,
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    // 警告jsx嵌套5层
    "react/jsx-max-depth": [
      1,
      {
        max: 5,
      },
    ],
    // 强制jsx一行最多3个props
    "react/jsx-max-props-per-line": [
      2,
      {
        maximum: 3,
      },
    ],
    // 强制使用Context时,使用useMemo/useCallback 减少无意义re-render
    "react/jsx-no-constructed-context-values": 2,
    // 强制不可使用{...props}
    "react/jsx-props-no-spreading": [
      2,
      {
        exceptions: ["Route"], // 此元素列外
      },
    ],
    // 强制不可使用index作为key https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    "react/no-array-index-key": 2,
    // TODO: 还未发布 强制数组对象类型使用默认值 https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
    // "react/no-object-type-as-default-prop": 2,
    // 禁止在无状态函数组件使用this
    "react/no-this-in-sfc": 2,
    // 禁止出现不稳定的嵌套组件 https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    "react/no-unstable-nested-components": [
      2,
      {
        allowAsProps: true,
      },
    ],
    // 强制编写无状态纯函数组件
    "react/prefer-stateless-function": 2,
    // 强制自闭合标签
    "react/self-closing-comp": 2,

    /*
     * hooks
     */

    // 强制使用hooks规范
    "react-hooks/rules-of-hooks": "error",
    // 依赖警告
    "react-hooks/exhaustive-deps": "warn",
  },
};
