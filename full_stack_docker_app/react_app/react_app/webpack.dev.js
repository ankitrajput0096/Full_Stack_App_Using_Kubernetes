const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "./main.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
    hot: true,
    historyApiFallback: true, //This will make sure we are able to load the page when 
                              //doing reload of that page
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:8080')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};