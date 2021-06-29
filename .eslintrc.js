module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/prop-types': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      0,
      'always'
    ],
    'semi-style': ['error', 'last'],
    'comma-spacing': [
      'error',
      { 'before': false, 'after': true }
    ],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'key-spacing': [
      'error',
      {'afterColon': true, 'beforeColon': false}
    ],
    'block-spacing': [
      'error',
      'always'
    ],
    'no-sparse-arrays': 'error',
    'object-curly-spacing': [
      'error',
      'always',
      { 'objectsInObjects': true }
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'semi-spacing': 'error',
    'arrow-parens': [
      'error',
      'always'
    ],
    'brace-style': 'error',
    'camelcase': 'warn',
    'no-whitespace-before-property': 'error',
    'no-duplicate-imports': 'error',
    'prefer-arrow-callback': 'error',
    'func-call-spacing': ['error', 'never'],
    'no-multi-spaces': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-after-keywords': ['error', 'never']
  }
};
