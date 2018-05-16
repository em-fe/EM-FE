/**
 * 检查数组中是否存在某值
 * @static
 * @since 1.0.2
 * @returns {boolean} Returns {}
 * @example
 *
 * var objects = [1,2,3,4];
 * var shallow = _.has(1, objects);
 * console.log(shallow); // true
 */
 function has(value, valueList) {
   return valueList.filter(val => val === value).length > 0;
 }
export default has;
