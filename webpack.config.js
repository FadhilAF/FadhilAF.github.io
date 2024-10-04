const path = require('path');

module.exports = {
  entry: {
    typewriter: './src/assets/js/typewriter.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/assets/js')
  },
  mode: 'development', // 'production', 'development' for easier debugging
};
