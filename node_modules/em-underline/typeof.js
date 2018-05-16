/**
 * 判断某数据是什么类型
 * @static
 * @since 1.0.8
 * @returns {string} Returns {}
 * @example
 *
 * var shallow = _.typeOf({a:1,b:2});
 * console.log(shallow); // 'object'
 *
 * var shallow = _.typeOf([]);
 * console.log(shallow); // 'array'
 */
function typeOfFn(obj) {
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object',
  };
  return map[toString.call(obj)];
 }

export default typeOfFn;
