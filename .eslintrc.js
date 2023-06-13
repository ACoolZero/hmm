module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    curly: 'off',
    'prettier/prettier': ['error', {printWidth: 120}],
    'react/no-unstable-nested-components': [{allowAsProps: true}],
  },
};
