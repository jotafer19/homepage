const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./src",
    watchFiles: {
      paths: ["src/*.html", "src/**/*.php", "public/**/*"],
    },
    open: {
      app: {
        name: "google-chrome",
      },
    },
  },
});
