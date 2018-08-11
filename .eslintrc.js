module.exports = {
  env: {
    node: true
  },
  extends: ["eslint:recommended", "plugin:node/recommended"],
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    "no-process-exit": "off"
  }
};
