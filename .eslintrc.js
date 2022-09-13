module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    'no-console': 1,
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  parserOptions: {
    ecmaVersion: 6,
  },
};
