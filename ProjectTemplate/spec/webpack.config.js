"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [{
  entry: ["mocha!./spec/index.js"],
  devServer: {
    host: "localhost",
    port: 8080
  },
  devtool: "inline-sourcemap",
  plugins: [new HtmlWebpackPlugin({
    filename: "specs.html"
  })],
  module: {
    loaders: [{
      test: /\.js/,
      exclude: [/node_modules/],
      loader: "babel-loader"
    }]
  }
}];
