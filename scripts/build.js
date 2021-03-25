const configFactory = require('../config/webpack.config');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = merge(configFactory, {
  output: {
    publicPath:"/blog/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'less-loader', // compiles Less to CSS
          },
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  mode: "production"
})
