const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
   mode: 'production',
   entry: './index.js',
   devtool: 'source-map',
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.s(a|c)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: [path.resolve(__dirname, 'scss')]
         }
      ]
   },
   resolve: {
      extensions: ['*', '.js']
   },
   output: {
      filename: 'bundle.[contenthash:8].js',
      path: path.resolve(__dirname, 'docs'),
      clean: true
   },
   plugins: [
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new CopyPlugin({
         patterns: [
            { from: 'images', to: 'images' }
         ]
      })
   ]
}