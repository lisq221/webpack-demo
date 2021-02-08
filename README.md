# webpack-demo
webpack入门：安装webpack、配置、安装babel

1. 生成package.json： npm init -y  默认配置

2. 安装webpack：npm i webpack webpack-cli webpack-dev-server --save-dev
--save-dev  表示仅安装于开发环境
package.json文件中有“devDependencies”一项
没有-dev，则会是“dependencies”

3.创建webpack.config.js，设置entry,mode

4.webpack打包：npx webpack

5.引入html-webpack-plugin插件： 在html文件中引入外部的资源文件，生成一个html文件入口，在dist文件夹中
   npm i html-webpack-plugin -D
  在webpack.config.js文件中：const HtmlWebpackPlugin = require('html-webpack-plugin')
  moudle.exports={  plugin:[ new HtmlWebpackPlugin ()   ]}
  然后重新nnpx webpack ，在dist文件中会有一个新的index.html，引入了src中的index.js
  
6.配置html入口文件模板：
   moudle.exports={  plugin:[ new HtmlWebpackPlugin ( {template:"./src/index.html"} )   ]}
   
7.不打包的静态文件夹：static文件夹————copy-webpack-plugin 与html-webpakc-plugin的安装相同
