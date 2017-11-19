const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const PACKAGE = require("./package.json");
const PACKAGE_VERSION = PACKAGE.version;

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new WebpackShellPlugin({
      onBuildStart: ['rm -rfv rbutera*.tar.gz"'],
      onBuildEnd: ["tar -zcvf rbutera-v" + PACKAGE_VERSION + ".tar.gz dist"]
    })
  ]
});
