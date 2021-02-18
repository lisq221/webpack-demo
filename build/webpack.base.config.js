//webpack基础配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        //path.resolve() 拼接路径片段，解析，最终返回绝对路径
        path: path.resolve("dist"),
        filename: "index.js" // 打包后输出文件的文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyPlugin({
            patterns: [{
                from: "static",
                to: "static"
            }]
        }),
    ],
    module: {
        rules: [{
                test: /\.js$/,
                //exclude的值可以是正则表达式，绝对路径、函数或者数组
                exclude: path.resolve("node_modules"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}