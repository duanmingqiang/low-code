const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    devServer: {
        static: '../dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/i,
                use: ['vue-loader']
            },
            {
                test: /\.(t|j|mj)s$/,
                include: path.resolve(
                    __dirname,
                    '../node_modules/element-plus'
                ),
                resolve: {
                    fullySpecified: false,
                },
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.ts', 'tsx']
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: '低代码平台',
            template: path.resolve(__dirname, '../index.html')
        })
    ]
}