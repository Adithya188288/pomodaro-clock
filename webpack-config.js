const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
      index:'./js/index.js',
      timer:'./js/timer.js'
    },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules:[
        {
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader']
        }
   ]
},
  mode:'development',
  plugins: [new HtmlWebpackPlugin({
    title: 'Pomodaro Clock',
    template: './template/index.html'
  }), new MiniCssExtractPlugin({
      filename:'index.css'
  })],
};