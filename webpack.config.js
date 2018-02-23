const webpack = require('webpack');
const path = require('path');

module.exports = {
  externals: {
    jquery: {
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
      root: '$'
    }
  },
  entry: path.resolve(__dirname + '/src/plugin.js'),
  output: {
    path: path.resolve(__dirname + '/example/'),
    filename: 'vue-bootstrap-switch.js',
    libraryTarget: 'window',
    library: 'VueBootstrapSwitch'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: []
};