const path = require('path')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    // 入口文件配置
    // entry: './src/main.js',
    // 多页面打包-配置多入口
    entry: {
        index: './src/index.js',
        // other: './src/other.js',
    },
    // 出口文件配置项
    output: {
        // 输出的路径，webpack2起就规定必须是绝对路径
        path: path.join(__dirname, 'dist'),
        // 输出文件名字
        // filename: 'bundle.js'
        // 2. 多入口无法对应一个固定的出口, 所以修改filename为[name]变量，意为以入口之名为出口之名
        filename: '[name].js',
        publicPath: '/'   //出口文件dist的放置位置相对于根目录'/'
    },
    devServer: {
        open: true, //自动开启浏览器
        hot: true, //是否开启热模块更新
        port: 8090,
        compress: true, //是否开启压缩
        // contentBase: './public'
    },
    devtool: 'cheap-module-eval-source-map',  //开发环境中使用source-map,生产环境中不使用
    mode: 'development', // 默认为production, 可以手动设置为development, 区别就是是否进行压缩混淆
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            // 用正则匹配当前访问的文件的后缀名是  .css
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] // webpack底层调用这些包的顺序是从右到左
        },
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
        // 解决办法：esModule: false  该项默认为true，改为false即可
        // esModule: true该配置项为图片打包后的默认路径，带default对象，
        // 默认为ture，在配置项里将此项改为false即可去掉多余的defalut
        // 对象，
        {
            test: /\.(jpg|jpeg|svg|png|gif|bmp)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    // limit表示如果图片大于5KB，就以路径形式展示，小于的话就用base64格式展示
                    limit: 5 * 1024,
                    // 打包输出目录
                    outputPath: 'static',
                    esModule: false,
                    // 打包输出图片名称
                    name: '[name]-[hash:4].[ext]'
                }
            }]
        },
        {
            test: /\.(woff|woff2|eot|svg|ttf)$/,
            use: 'url-loader',
        },
        // 处理html文件中引入的img静态资源
        {
            test: /\.(htm|html)$/i,
            loader: 'html-withimg-loader'
        },
        // 一般建议在.babelrc中配置
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                // 单独在 .babelrc文件中配置
                // options: {
                //     presets: ['@babel/env'],
                //     plugins: ['@babel/plugin-proposal-class-properties']
                // }
            },
            exclude: /node_modules/  //排除node-modules依赖包的js文件
        },
            // 引入第三方库的两种方式
            // 1,将jquery库暴露到全局作用域，
            // {
            //     test: require.resolve('jquery'),
            //     use: {
            //         loader: 'expose-loader',
            //         options: {
            //             exposes: '$'
            //         }
            //     }
            // }
        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        // Single Page Application
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            minify: false,
        }),
        // 多页应用配置
        // 3. 如果用了html插件,需要手动配置多入口对应的html文件,将指定其对应的输出文件
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: './public/index.html',
        //     minify: false,
        //     chunks: ['index']
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'other.html',
        //     template: './public/other.html',
        //     minify: false,
        //     chunks: ['other']
        // }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '/src/assets'),
                    to: 'assets'
                }
            ]
        }),
        new webpack.BannerPlugin('版权所有，翻版必究!'),  //给打包的js文件加上版权注释信息
        //  2，将库自动加载到每个模块，如果每个模块都要用到这个库时
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]

}