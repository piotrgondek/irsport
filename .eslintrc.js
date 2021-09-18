module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.d.ts'],
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'cypress',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 'no-unused-vars': 'off', // because of '@typescript-eslint/no-unused-vars'
    // 'no-undef': 'off', // because of '@typescript-eslint/no-unused-vars'
    // '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-use-before-define': 'off', // because of '@typescript-eslint/no-use-before-define'
    // '@typescript-eslint/no-use-before-define': ['error'],
    // 'no-shadow': 'off', // because of '@typescript-eslint/no-shadow'
    // '@typescript-eslint/no-shadow': ['error'],
    // 'max-len': ['error', { code: 120 }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};
