require('babel-polyfill');
const DEBUG = !process.argv.includes('--release');

const webpack = require("webpack");

module.exports = {
  entry:{
    'characterHeight':'./src/js/main.js',
    'vender/lib':'./src/js/lib.js'
  },
  output:{
    path:__dirname+'/www/js/',
    filename:'[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module:{
    loaders:[
    {
      test:'/\.js$/',
      exclude:'/node_modules/',
      loader:'babel-loader',
      query:{
        presets:['es2015']
      }
    }]
  },
  devServer:{
    contentBase:'www',
    port:3000,
    inline:true
  },
  resolve:{
    extensions:['.js','.es6'],
    modules:[__dirname,'node_modules']
  },
  devtool:DEBUG ?  'source-map':false
}
