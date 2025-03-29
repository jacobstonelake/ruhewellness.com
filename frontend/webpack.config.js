const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production', // Change to 'production' for final build
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
            ignore: ['**/index.html'], // Already used by HtmlWebpackPlugin
          },
        },
      ],
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
