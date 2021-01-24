// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  outputDir: "../public",
  indexPath: "../views/index.html",
  devServer: {
    proxy: {
      "/api": {
        target: "http://admin.test",
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["js/*", "css/*", "fonts/*", "img/*"]
      })
    ]
  }
};
