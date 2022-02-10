const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "psmAdminPortal",
    publicPath: "auto",
  },
  devServer: {
    // proxy: require("./proxy.conf")
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({

      name: "psmAdminPortal",
      library: { type: "var", name: "psmAdminPortal" },
      filename: "remoteEntry.js",
      exposes: {
        './AdminPortalApp': "./src/main.single-spa.ts",
      },
      shared: share(
        {
        "@angular/core": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "@angular/platform-browser": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "@angular/platform-browser-dynamic": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "single-spa": {
          singleton: true,
          eager: true
        },
        "single-spa-angular": {
          singleton: true,
          eager: true
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
