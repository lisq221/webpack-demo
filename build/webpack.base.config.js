//webpack基础配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js" // 打包后输出文件的文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyPlugin({ patterns: [{ from: "static", to: "static" }] })
    ]

}