# typescript编写axios请求库（浏览器端）

## 准备工作

### 初始化项目

TypeScript library starter：开源的TypeScript开发基础库的脚手架，快速初始化TypeScript项目，使用方式参考官网。

### 测试demo设计

axios库需要进行demo测试，这里使用自定义服务器来运行demo文件，因此需要用到webpack的node API。

添加webpack（v4）和相关的node API所需package：

- "webpack-dev-middleware": "^3.5.0"
  
  - 用于将webpack处理后的文件发送给express server（这种方式与webpack-dev-server类似，只是这里的server是自定义而非webpack提供）
    
  - 在使用时，需要接收compiler实例，指定publicPath（用于server的静态资源目录），[参考](https://webpack.docschina.org/guides/development#using-webpack-dev-middleware)
    
- "webpack-hot-middleware": "^2.24.3"
  
  - 用于将热更新功能添加到已有的server工程，只依赖于webpack-dev-middleware，而非webpack-dev-server
    
  - 连接浏览器端和webpack server，接收更新信息，其原理是订阅服务端的更新，通过webpack HMR API来执行变更。
    
  - 使用方式参考[package官网](https://www.npmjs.com/package/webpack-hot-middleware)
    

我们可以按照如下思路设计测试目录：

- 创建一个测试目录`examples`
  
- 在examples内，针对axios的各项功能创建目录，如`examples/function_1/`
  
- 在各级功能目录下，创建入口文件和入口html文件
  
  - `examples/function_1/app.ts`
    
  - `examples/function_1/index.html`
    
- 在examples中，创建express服务器启动`server.js`和webpack打包配置文件`webpack.config.js`