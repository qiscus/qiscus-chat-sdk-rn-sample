module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./app'],
      alias: {
        assets: './assets'
      }
    }]
  ],
};
