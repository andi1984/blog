var path = require('path');

module.exports = {
  entry: {
    index: './themes/andi/src/js/index.js',
    single: './themes/andi/src/js/single.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'themes', 'andi', 'static')
  },
  resolveLoader: {
    modules: ['node_modules']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  }
};
