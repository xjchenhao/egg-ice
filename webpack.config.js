module.exports = {
  entry: {
    app: 'app/web/src/pages/Dashboard/index.js'
    // list: 'app/web/src/pages/list/index.jsx'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    }]
  }
};
