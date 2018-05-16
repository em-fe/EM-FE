/**
 * 获取一段区间的随机数，并包括这段区间的值
 * @static
 * @since 1.0.0
 * @returns {number} Returns {}
 * @example
 *
 * var shallow = _.random();
 * console.log(shallow); // 返回 500-10000 之间的随机数
 *
 * var shallow = _.random(1, 20);
 * console.log(shallow); // 返回 1-20 之间的随机数
 */
function random(min, max) {
  var newMin = min || 500;
  var newMax = max || 10000;
  return Math.floor((Math.random() * newMax) + newMin);
}
export default random;
