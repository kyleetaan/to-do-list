const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/initialize-website.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
};