module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'plugins': [
      'prettier',
      'react',
      'react-native'
    ],
    'env': {
      'jest': true,
    },
    'parserOptions': {
      'ecmaFeatures': {
        'jsx': true
      }
    },
    'rules': {
      "indent": ["error", 4],
      "react-native/no-unused-styles": 2,
      "react-native/split-platform-components": 2,
      "react-native/no-inline-styles": 2,
      "react-native/no-color-literals": 2,
      "react-native/no-raw-text": 2,
    },
    'globals': {
      "fetch": false
    }
  }