module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  plugins: ['flowtype'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  globals: {
    __DEV__: true,
    __DEVTOOLS__: true,
  },
  rules: {
    semi: [2, 'never'],
    'max-len': 'off',
    'linebreak-style': 'off',
    'template-curly-spacing': 'off',
    'object-curly-spacing': 'off',
    'global-require': 'off',
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: ['children']
      }
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any']
      }
    ],
    // a11y removed rule, ignore them
    "jsx-a11y/href-no-hash": 'off',

    // Automatically convert pure class to function by
    // babel-plugin-transform-react-pure-class-to-function
    // https://github.com/kriasoft/react-starter-kit/pull/961
    'react/prefer-stateless-function': 'off',

    // Allow js files to use jsx syntax, too
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  settings: {
    allowParens: true,
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
