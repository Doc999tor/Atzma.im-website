module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["standard", "standard-react"],
  "globals": {
    ComboDatePicker: false,
    ReactRouterDOM: false,
    PropTypes: false,
    ReactDOM: false,
    config: false,
    Swiper: false,
    moment: false,
    React: false
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [2,2],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-unused-vars": [
      "warn",
      {
        "varsIgnorePattern": "config",
        "args": "after-used",
        "vars": "all"
      }
    ],
    "arrow-parens": ["error", "as-needed"],
    "camelcase": "warn",
    "vars-on-top": 1,
    "no-console": 1
  }
};
