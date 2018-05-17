# em-cookie
cookie的相关操作

[![em-cookie](https://img.shields.io/npm/v/em-cookie.svg?style=flat-square)](https://www.npmjs.org/package/em-cookie)
[![NPM downloads](http://img.shields.io/npm/dm/em-cookie.svg?style=flat-square)](https://npmjs.org/package/em-cookie)
[![Package Quality](http://npm.packagequality.com/shield/em-cookie.svg)](http://packagequality.com/#?package=em-cookie)
[![NPM downloads](https://img.shields.io/npm/dt/em-cookie.svg?style=flat-square)](https://npmjs.org/package/em-cookie)

1. 为什么用？

 * 减少项目之间重复的代码
 * 公共方法抽离
 * 使用方便
 * 模块化，用哪个，引哪个
 * 易于维护

2. 怎么用？
在vue中可以使用，像挂载其他ui库一样。
 ```js
 import cookie from 'em-cookie';
 Vue.use(VueCookie);
 // 普通用法
 console.log(window.$cookie.get('aaa'));
 // vue 用法
 console.log(this.$cookie.get('aaa'));
 ```

3. 安装

  * npm

  `npm install em-cookie`

  * yarn

  `yarn add em-cookie`
