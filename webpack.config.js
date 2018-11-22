// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//const env = readEnv(path.resolve(process.cwd(), '.env'));
const localIdentName = "[name]__[local]___[hash:base64:5]";
// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, "dist"),
  JS: path.resolve(__dirname, "client/js"),
  SRC: path.resolve(__dirname, "client")
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, "app.js"),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        MANDRILL_API_KEY: JSON.stringify(process.env.MANDRILL_API_KEY)
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              minimize: true,
              localIdentName
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: "expanded",
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              minimize: true,
              localIdentName
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: "expanded",
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ai)$/,
        use: ["file-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3300",
        secure: false
      }
    }
  }
};
