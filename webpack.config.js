// After specifying transpiler options in babelrc, npm init and create a webpack config file
// This file exports an object with webpack custom config

const path = require("path");
const webpack = require("webpack");

module.exports = {
  // Tell webpack where to start the app and bundling
  entry: "./src/index.js",
  // As the name says, use dev mode
  mode: "development",
  // define how exported modules are transformed per set rules
  module: {
    rules: [
      {
        // Test and Exclude specify which files to apply this rule to
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] }
      },
      {
        test: /\.(css|scss)$/,
        // we can specify multiple loaders in single-line 
        // or as in above rule with single-loader and options
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  // specify extensions that webpack should resolve
  resolve: {
    modules: [path.resolve(__dirname), "node_modules"],
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  // Tells webpack where to place bundled code for server to serve from
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },
  // config for webpack-dev-server
  devServer: {
    compress: true,
    port: 9000,
  },
  // specify any custom plugins, we're only using HMR here
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
