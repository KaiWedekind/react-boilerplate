const webpack = require('webpack');
const path = require("path");

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist/assets');

module.exports = {
  entry: [`${APP_DIR}/index.js`],
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: {
            loader: "json-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "autoprefixer-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "autoprefixer-loader" },
            { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}