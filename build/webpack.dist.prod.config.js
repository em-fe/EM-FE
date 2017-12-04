var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var CompressionWebpackPlugin = require('compression-webpack-plugin')
var webpackBaseConfig = require('./webpack.base.config.js');
var pkg = require('../package.json');

process.env.NODE_ENV = 'production';

var oTime = new Date();
var oAllTime = oTime.getFullYear() + '-' + (oTime.getMonth()+1) + '-' + oTime.getDate() + ' ' + oTime.getHours() + ':' + oTime.getMinutes() + ':' + oTime.getSeconds();

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'emfe.min.js',
        library: 'emfe',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // 注入内容
        new webpack.BannerPlugin('@ auther 李梦龙\n@ version '+ pkg.version +'\n@ time '+ oAllTime),
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CompressionWebpackPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.js$'
          ),
          threshold: 10240,
          minRatio: 0.8
        })
    ]
});
