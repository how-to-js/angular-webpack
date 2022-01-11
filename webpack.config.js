module.exports = {
  entry: "./src/main",
  mode: "development",
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
