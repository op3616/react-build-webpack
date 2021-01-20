const webpack = require("webpack");
const path = require("path");
const paths = require("./paths");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    path: paths.outputPath,
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                mode: "local",
                localIdentName: "[local]__[hash:base64:5]",
                exportLocalsConvention: "camelCase",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    contentBase: paths.outputPath,
    hot: true,
    port: 3000,
    open: true,
    compress: true,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "inline-source-map",
};
