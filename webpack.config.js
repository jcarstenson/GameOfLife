const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
};
