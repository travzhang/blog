const configFactory = require('../config/webpack.config');
const {merge} = require('webpack-merge');

module.exports = merge(configFactory,{
  module: {
    // 这里有一点要注意，他们的解析过程是链式的，所以在use数组中下面的部分会先执行，所以他们的执行顺序其实是less-loader > css-loader > style-loader
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
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
  // externals: {'react': 'React', 'react-dom': 'ReactDOM', 'antd': 'antd', 'moment': 'moment'},
  mode: "development"
})
