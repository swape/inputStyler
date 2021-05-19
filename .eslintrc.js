module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi: 0,
    quotes: ['error', 'single'],
    'space-before-function-paren': 0,
    'vue/require-v-for-key': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/max-attributes-per-line': 0,
    'no-prototype-builtins': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/order-in-components': 0,
    'vue/require-prop-types': 0,
    'vue/attribute-hyphenation': 'warn',
    'vue/html-quotes': 'warn',
    'vue/attributes-order': 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-spacing': 0

  }
};
