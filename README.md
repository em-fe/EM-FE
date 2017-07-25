# EM-FE
基于 VUE2 的 UI 库

[![npm](https://img.shields.io/npm/v/em-fe.svg)]()
[![em-fe](https://img.shields.io/npm/v/em-fe.svg?style=flat-square)](https://www.npmjs.org/package/em-fe)
[![NPM downloads](http://img.shields.io/npm/dm/em-fe.svg?style=flat-square)](https://npmjs.org/package/em-fe)
[![Package Quality](http://npm.packagequality.com/badge/em-fe.png)](http://packagequality.com/#?package=em-fe)
[![NPM downloads](https://img.shields.io/npm/dt/em-fe.svg?style=flat-square)](https://npmjs.org/package/em-fe)
[![license](https://img.shields.io/github/license/dafrok/em-fe.svg)]()

## 结构

``` bash
.
├── build/                      # webpack 配置文件
│   └── ...
├── examples/
│   ├── esm/                    # 开发运行的例子，里面会调用封装好的组件
│   │   ├── components          # 业务级组件部分
│   └── iife/                   # 打包之后文件夹运行即可看到例子
│   │   └── ...
├── src/
│   ├── components/             # emfe组件部分
│   │   └── ...
│   ├── styles/                 # emfe的scss文件部分
│   │   ├── mixin               # 公共方法代码块的封装
│   │   ├── config.scss         # 公共变量的配置
│   │   ├── emfe.scss           # 所有样式的主入口
│   │   ├── reset.scss          # 清除默认样式
│   │   └── ...
│   └── tools/                  # 工具方法部分
│   │   └── ...
│   ├── contant.js              # js常量部分
│   └── index.js                # 全局注册组件，将组件引入，并添加到emfe对象中
├── .babelrc                    # Babel 配置
├── .eslintignore               # 如果您不想被 Eslint 检测，那么请您在这里把它加上
├── .eslintrc.js                # Eslint 配置
├── .gitattributes              # git的相关配置
├── .gitignore                  # 如果您不想被 Git 控制，那么请您在这里把它加上
├── .stylelintignore            # 不被 Stylelint 检查
├── .stylelintrc                # Stylelint 配置
└── package.json                # 启动项目的命令和依赖包等信息聚集地
```

## 命令

`npm install` 安装依赖包

`npm start` 开发环境

1. 热重载
2. vue 编译

`npm run build` 打包

1. js 打包
2. scss 打包


## 看效果

1. 确定安装完依赖`npm install`之后，运行`npm start`，会自动调到[`http://localhost:8081`]

2. 确定安装完依赖`npm install`之后，运行`npm run build`，手动打开`examples/iife/index.html`

两者区别，一个是开发环境，一个是生产环境。
