var webpack = require('webpack')

module.exports = {
  entry:__dirname + '/app/main.js',
  output:{
    path:__dirname + '/build',
    filename:'bundle.js'
  },
  devtool:'source-map',
  module: {
    loaders: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/build',
    inline: true,
    port:8080,
    historyApiFallback: true
    // process: true
  },
  plugins: [
       new webpack.HotModuleReplacementPlugin()//热模块替换插件
   ]
}
