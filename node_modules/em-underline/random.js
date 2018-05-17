/**
 * 获取一段区间的随机数，并包括这段区间的值
 * @static
 * @since 1.0.11
 * @param min {Number} 最小数
 * @param max {Number} 最小数
 * @param floor {Boolean} 是否保留整数，默认保留
 * @returns {Number} Returns {}
 * @example
 *
 * var shallow = _.random();
 * console.log(shallow); // 返回 500-10000 之间的随机数
 *
 * var shallow = _.random(1, 20);
 * console.log(shallow); // 返回 1-20 之间的随机数
 */
function random(min, max, floor) {
  var newMin = typeof min === undefined ? 500 : min;
  var newMax = typeof max === undefined ? 10000 : max;
  var isFloor = typeof floor === undefined ? true : floor;
  var num = (Math.random() * newMax) + newMin;
  return  isFloor ? Math.floor(num) : num;
}
export default random;
