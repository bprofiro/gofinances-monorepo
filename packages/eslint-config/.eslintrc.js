module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect',
    },
  }
}
