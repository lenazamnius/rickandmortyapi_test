module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'react-app',
    'eslint:recommended',
    'prettier/prettier',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      files: ['src/setup/locales/definedMessages/messages.ts'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'warn',
      },
    },
  ],
  globals: {
    JSX: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'typescript',
      },
    ],
    'no-param-reassign': 0,
    'no-console': 'warn',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-trailing-spaces': 1,
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'consistent-return': 0,
    'import/extensions': 0,
    'import/no-duplicates': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-bracket-location': [
      2,
      {
        nonEmpty: 'after-props',
        selfClosing: 'tag-aligned',
      },
    ],
    'no-unexpected-multiline': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'no-case-declarations': 0,
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-first-prop-new-line': 2,
    'react/prop-types': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'no-multi-spaces': 'error',
    'no-extra-semi': 'error',
    'keyword-spacing': 'error',
    'no-sparse-arrays': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-const': 'error',
    indent: 0,
  },
};
