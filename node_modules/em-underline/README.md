# em-underline
工具集

[![em-underline](https://img.shields.io/npm/v/em-underline.svg?style=flat-square)](https://www.npmjs.org/package/em-underline)
[![NPM downloads](http://img.shields.io/npm/dm/em-underline.svg?style=flat-square)](https://npmjs.org/package/em-underline)
[![Package Quality](http://npm.packagequality.com/shield/em-underline.svg)](http://packagequality.com/#?package=em-underline)
[![NPM downloads](https://img.shields.io/npm/dt/em-underline.svg?style=flat-square)](https://npmjs.org/package/em-underline)

1. 为什么用？

 * 减少项目之间重复的代码
 * 公共方法抽离
 * 使用方便
 * 模块化，用哪个，引哪个
 * 易于维护

2. 怎么用？

  * 引用某一方法
 ```
 import isArray from 'em-underline/isArray';
 console.log(isArray([]));
 ```

  * 全部引用
 ```
 import _ from 'em-underline';
 console.log(_.isArray([]));
 ```

3. 安装

  * npm

  `npm install em-underline`

  * yarn

  `yarn add em-underline`
