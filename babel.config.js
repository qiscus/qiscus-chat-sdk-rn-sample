module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'macros',
    ['module-resolver', {
      root: ['./app'],
      alias: {
        assets: './assets'
      }
    }]
  ],
};
