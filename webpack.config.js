const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack'); // Import the webpack module
const path = require('path');

module.exports = {
  entry: '/src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'webpack.bundle.js',
    clean: true,
  },
  target: 'web',
  devServer: {
    port: 6600,
    static: {
      directory: path.join(__dirname, 'src/images'),
      watch: true,
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: './' },
      ],
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true), 
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false), 
    }),
  ],
};
