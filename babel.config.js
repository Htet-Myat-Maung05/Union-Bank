module.exports = {
  presets: ['module:@react-native/babel-preset'],
  "plugins": [
    'react-native-worklets/plugin',
    '@babel/plugin-transform-export-namespace-from',
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "@": "./src"
      }
    }]
  ]
};
