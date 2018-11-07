const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const { appEntries } = require("../utils");
const packageJSON = require("../../../package.json");

const nodeVersion = packageJSON.engines.node;
const projectRoot = path.resolve(__dirname, "../../..");

const externalModules = nodeModulesPath =>
  fs
    .readdirSync(nodeModulesPath)
    .filter(f => [".bin"].indexOf(f) === -1)
    .reduce((map, mod) => Object.assign(map, { [mod]: `commonjs ${mod}` }), {});

const entries = appEntries(name => ["babel-polyfill", `./bin/${name}.js`]);

module.exports = {
  name: "server",
  target: "node",

  context: projectRoot,

  entry: entries("listTemplates", "updateTemplates"),

  resolve: {
    extensions: [".js", ".jsx"]
  },

  output: {
    path: path.resolve(projectRoot, "./bin/build"),
    filename: "[name].bundle.js",
    libraryTarget: "commonjs2"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              ["env", { targets: { node: nodeVersion } }],
              "react",
              "stage-2"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["isomorphic-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["isomorphic-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  externals: Object.assign(
    {},
    externalModules(path.resolve(projectRoot, "node_modules")),
    {
      sharp: "commonjs sharp"
    }
  ),

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.BROWSER": false,
      "process.env.BUNDLED": true
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  ]
};
