/**
 * 用于判断 Object 中是否存在某一个属性
 * @static
 * @since 1.0.0
 * @returns {boolean} Returns {}
 * @example
 *
 * var shallow = _.isArray({a:1,b:2});
 * console.log(shallow); // false
 *
 * var shallow = _.isArray([]);
 * console.log(shallow); // true
 */
function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}
export default isArray;
