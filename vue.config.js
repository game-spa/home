module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      disableHostCheck: true,
      sockPort: 8081,
      sockHost: "localhost",
      https: false,
      port: 8081,
    },
    externals: ["vue", "vue-router", /^@game-spa\/.+/],
  },
  filenameHashing: false,
};