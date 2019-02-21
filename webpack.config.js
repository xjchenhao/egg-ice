
const path = require('path');

module.exports = {
  entry: {
    // app: 'app/web/src/pages/Dashboard/index.js'
    app: 'app/web/src/index.js'
    // list: 'app/web/src/pages/list/index.jsx'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        // {
        //   loader: 'postcss-loader',
        //   options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
        //     plugins: (loader) => [
        //       require('postcss-import')({root: loader.resourcePath}),
        //       require('autoprefixer')() //CSS浏览器兼容
        //       // require('cssnano')()  //压缩css
        //     ]
        //   }
        // },
        {
          loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
        },
        {
          loader: 'sass-loader',
          options: {
            // includePaths: [
            //   path.resolve('./node_modules/bootstrap-sass/assets/stylesheets')
            // ]
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve(__dirname, './node_modules/@icedesign/theme/variables.scss')
            ]
          }
        }
      ]
    },
    {
      test: /\.js$/,
      include: path.resolve(__dirname, './app/web/src'),
      use: [
        'thread-loader',
        'babel-loader'
      ]
    }]
  }
};
