var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 入口
  entry: {
    main: './examples/esm/main',
    vendors: ['vue', 'vue-router']
  },
  // 输出
  output: {
    path: path.join(__dirname, '../examples/esm/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'vue-style-loader!css-loader',
            less: 'vue-style-loader!css-loader!less-loader'
          },
          postLoaders: {
            html: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=512&&name=[path][name].[ext]?[hash]'
      },
      { test: /\.(html|tpl)$/, loader: 'html-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      emfe: '../../src/index',
      'Vue': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    // https://stylelint.io
    new StyleLintPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../examples/esm/dist/index.html'),
      template: path.join(__dirname, '../examples/esm/index.html')
    }),
    new FriendlyErrorsPlugin()
  ]
};
