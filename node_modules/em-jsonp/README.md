# em-jsonp
jsonp前端跨域

[![em-jsonp](https://img.shields.io/npm/v/em-jsonp.svg?style=flat-square)](https://www.npmjs.org/package/em-jsonp)
[![NPM downloads](http://img.shields.io/npm/dm/em-jsonp.svg?style=flat-square)](https://npmjs.org/package/em-jsonp)
[![Package Quality](http://npm.packagequality.com/shield/em-jsonp.svg)](http://packagequality.com/#?package=em-jsonp)
[![NPM downloads](https://img.shields.io/npm/dt/em-jsonp.svg?style=flat-square)](https://npmjs.org/package/em-jsonp)


1. window挂载 $jsonp
2. 支持VUE2

### 使用方法

```js
window.$jsonp({
  url: 'http://test.com',
  success: (res) => {

  },
  error: () => {

  },
});
```

### 参数 params

* url: string 请求地址
* callback: string 回调的方法名 默认 callback
* success: function 请求成功的回调
* error: function 请求失败的回调
* data: string 附加参数
* time: number 超时时间
