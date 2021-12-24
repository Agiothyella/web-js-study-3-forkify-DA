const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: 'js/script.bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'assets/[name].[hash][ext]',
    clean: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.bundle.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 2 },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        generator: {
          filename: 'assets/svg/[name][ext]',
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', {}],
            ],
          },
        },
      }),
    ],
  },
};
