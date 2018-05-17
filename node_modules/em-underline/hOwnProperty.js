/**
 * 用于判断 Object 中是否存在某一个属性
 * @static
 * @since 1.0.0
 * @returns {boolean} Returns {}
 * @example
 *
 * var shallow = _.hOwnProperty({a:1,b:2}, 'a');
 * console.log(shallow); // true
 *
 * var shallow = _.hOwnProperty({a:1,b:2}, 'c');
 * console.log(shallow); // false
 */
function hOwnProperty(item, attr) {
  return Object.prototype.hasOwnProperty.call(item, attr);
}
 export default hOwnProperty;
