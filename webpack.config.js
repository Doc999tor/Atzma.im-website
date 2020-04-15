const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const alias = {
  'project-components': path.resolve('./components-lib'),
  'project-services': path.resolve('./services')
}
module.exports = (env, args) => {
  let outputJSCK = '[id].bundle.js'
  let outputCSS = 'main.bundle.css'
  let outputJS = 'main.bundle.js'
  let devtool = 'source-map'
  let baseChunksPath = '/dist/'
  let baseBuildPath = './dist'
  if (env === 'production-p') {
    outputJSCK = '[id].bundle.min.js'
    outputCSS = 'main.bundle.min.css'
    outputJS = 'main.bundle.min.js'
    devtool = 'source-map'
  }
  if (env === 'build-public') {
    outputJSCK = '[id].bundle.min.js'
    outputCSS = 'main.bundle.min.css'
    outputJS = 'main.bundle.min.js'
    devtool = 'source-map'
    baseChunksPath = '/public/clients-details/'
    baseBuildPath = './public/clients-details'
  }
  return {
    entry: './app/main.js',
    output: {
      path: path.resolve(__dirname, baseBuildPath),
      publicPath: baseChunksPath,
      chunkFilename: outputJSCK,
      filename: outputJS
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
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.styl$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: args.mode === 'development',
                reloadAll: true
              }
            },
            'css-loader', 'stylus-loader']
        },
        {
          test: /\.(img|png|svg)$/,
          use: 'url-loader'
        }
      ]
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
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: outputCSS,
        chunkFilename: '[id].bundle.css'
      }),
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ],
    resolve: {
      alias: alias
    },
    devtool: devtool
  }
}
