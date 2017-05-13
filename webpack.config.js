var path = require('path');

module.exports = {
  entry: './themes/andi/src/js/index.js',
  output: {
    filename: 'bundle.js',
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
