export default {
  hOwnProperty: function(item, attr) {
    return Object.prototype.hasOwnProperty.call(item, attr);
  },
  //格式化参数
  formatParams: function(data, callbackName) {
    var arr = [];
    Object.keys(data).forEach(function(dataKey) {
      arr.push(encodeURIComponent(dataKey) + '=' + encodeURIComponent(data[dataKey]));
    });
    // 添加一个随机数，防止缓存
    if (!this.hOwnProperty(data, 'callback')) {
      arr.push('callback=' + callbackName);
    }
    arr.push('v=' + this.random());
    return arr.join('&');
  },
  random: function() {
    return Math.floor((Math.random() * 10000) + 500);
  },
};
