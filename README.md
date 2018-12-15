# vue-pc-frame

> vue-pc-frame
> Vue@2.5 + Webpack@3.6 + vuex + axios + scss + spritesImage
> 一套 PC 端通用脚手架

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
# npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Project directory
## 项目目录结构

```shell
├──build
|  ├──build.js // 生产环境构建
|  ├──check-version.js // node&npm版本检测
|  ├──utils.js // css相关loader引入的工具函数
|  ├──vue-loader.conf.js // css-loader引入
|  ├──webpack.base.conf.js // webpack基础配置
|  ├──webpack.dev.conf.js // webpack(dev环境)配置
|  └──webpack.prod.conf.js // webpack(build环境)配置
├──config // 环境参数定义
├──node_modules
├──src
|  ├──assets // 静态资源目录 img
|  ├──base // 公共资源
|  |  ├──js
|  |  ├──scss
|  |  ├──utils
|  |  └──...
|  ├──components // 公共组件
|  ├──config // 默认配置
|  ├──mixins // 混入
|  ├──router // 路由
|  ├──service // 服务 接口
|  ├──store // vuex状态管理
|  └──views // 多页面入口
|        └──...
├──staic // 静态文件生成目录
└──package.json // gulp、dev、build打包入口,项目说明,模块依赖
```
