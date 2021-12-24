const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
  },

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: 'js/script.bundle.[contenthash].js',
    path: path.resolve(__dirname, './src'),
    publicPath: '/',
    assetModuleFilename: 'img/[name][ext]',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      scriptLoading: 'defer',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
