const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
const alias = {
  'project-components': path.resolve('./components-lib'),
  'project-services': path.resolve('./services')
}
module.exports = {
  entry: './app/main.js',
  output: {
    filename: isProd ? 'main.[contenthash:6].bundle.js' : 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: isProd ? '[name].[contenthash:6].chunk.js' : '[name].chunk.js'
  },
  devServer: {
    historyApiFallback: true,
    stats: {
      version: false,
      modules: false,
      assets: false,
      hash: false
    },
    port: '3000'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true
            }
          },
          'css-loader', 'stylus-loader']
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProd ? 'main.[contenthash:6].bundle.css' : 'main.bundle.css',
      chunkFilename: isProd ? '[name].[contenthash:6].chunk.css' : '[name].chunk.css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new DynamicCdnWebpackPlugin({env: 'production'}),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: alias
  },
  devtool: 'source-map'
}