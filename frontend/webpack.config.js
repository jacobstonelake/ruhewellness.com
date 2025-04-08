const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
require('dotenv').config(); // Load .env at build time

module.exports = {
  mode: 'production', // or 'development' depending on the script
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_SITE_KEY': JSON.stringify(process.env.REACT_APP_SITE_KEY),
    }),
  ],
  devServer: {
    static: { directory: path.resolve(__dirname, 'public') },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: [{ context: ['/api'], target: 'http://localhost:5000', changeOrigin: true }],
  },
};
