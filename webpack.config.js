var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  }
};
