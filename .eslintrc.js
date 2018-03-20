module.exports = {
  parser: "babel-eslint",
  extends: 'airbnb',
  rules: {
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
    "react/prop-types": 0,
    "arrow-body-style": 0,
    "react/prefer-stateless-function": 0
  }
}
