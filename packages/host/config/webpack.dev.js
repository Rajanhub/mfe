const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;

const devConfig = {
  mode: "development",

  devServer: {
    port: 3001,
    historyApiFallback: { index: "index.html" },
  },

  output: {
    publicPath: "http://localhost:3001/",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        ui: "remote@http://localhost:3000/remoteEntry.js",
       // ui: "remote@https://d26pgl07plfe3v.cloudfront.net/remote/latest/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
