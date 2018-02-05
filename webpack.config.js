const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const workboxPlugin = require("workbox-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: "[name].css"
});
const THEME_FOLDER = path.resolve(__dirname, "themes", "andi");
const STATIC_FOLDER = path.resolve(THEME_FOLDER, "static");

module.exports = [
  {
    context: THEME_FOLDER,
    entry: {
      index: "./src/js/index.js",
      single: "./src/js/single.js"
    },
    output: {
      filename: "[name].js",
      path: STATIC_FOLDER
    },
    resolveLoader: {
      modules: ["node_modules"]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: "src/sw-registration.js", to: "." },
        { from: "src/icons", to: "./icons"}
      ]),
      new webpack.optimize.ModuleConcatenationPlugin(),
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
  },
  {
    entry: {
      main: "./themes/andi/src/sass/main.scss"
    },
    output: {
      filename: "[name].css",
      path: STATIC_FOLDER
    },
    resolveLoader: {
      modules: ["node_modules"]
    },
    plugins: [extractSass],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [
              {
                loader: "css-loader" // translates CSS into CommonJS
              },
              {
                loader: "postcss-loader" // compile CSS to being autoprefixed
              },
              {
                loader: "sass-loader" // compiles Sass to CSS
              }
            ],
            fallback: "style-loader"
          })
        }
      ]
    }
  }
];
