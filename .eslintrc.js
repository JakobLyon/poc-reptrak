const upperCamelCaseExp = "((d)|([A-Z0-9][a-z0-9]+))*([A-Z])?";

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "sort-imports-es6-autofix",
    "filenames"
  ],
  rules: {
    "filenames/match-exported": 2,
    "filenames/match-regex": [2, upperCamelCaseExp, true],
    "filenames/no-index": 0,
    "prefer-arrow-callback": 2,
    "react/forbid-prop-types": [
      2,
      { checkContextTypes: true, checkChildContextTypes: true }
    ],
    "no-empty-function": "error",
    "react/jsx-sort-default-props": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-tag-spacing": 2,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
    "react/no-access-state-in-setstate": 2,
    "react/no-deprecated": 0,
    "react/no-multi-comp": "error",
    "react/no-string-refs": "error",
    "react/no-unused-prop-types": "error",
    "react/prop-types": "error",
    "react/sort-comp": 2,
    "react/sort-prop-types": 2,
    "import/order": 0,
    "sort-imports-es6-autofix/sort-imports-es6": 2,
    "jsx-a11y/no-autofocus": 0,
    "react/jsx-no-literals": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "import/prefer-default-export": 0
  },
};