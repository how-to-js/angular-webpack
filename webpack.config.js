const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main",
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader", "angular2-template-loader"],
      },
      {
        test: /\.html$/,
        use: ["raw-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
