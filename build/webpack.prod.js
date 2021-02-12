const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpack = require('webpack')
const assetsPublicPath = '/Admin/'   //配置二级目录
module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'none', //生产环境下一般不用souce-map
    // publicPath: assetsPublicPath,  //二级目录
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: 'false'// DefinePlugin会解析定义的环境变量表达式, 当成JS执行
        })
    ]
})