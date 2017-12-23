const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const workboxPlugin = require("workbox-webpack-plugin");
const STATIC_FOLDER = path.resolve(__dirname, "themes", "andi", "static");

module.exports = {
  entry: {
    index: "./themes/andi/src/js/index.js",
    single: "./themes/andi/src/js/single.js"
  },
  output: {
    filename: "[name].js",
    path: STATIC_FOLDER
  },
  resolveLoader: {
    modules: ["node_modules"]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    }),
    new workboxPlugin({
      globDirectory: STATIC_FOLDER,
      globPatterns: ["**/*.{html,js,css}"],
      swDest: path.join(STATIC_FOLDER, "sw.js"),
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  }
};
