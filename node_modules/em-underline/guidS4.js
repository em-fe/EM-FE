/**
 * 4位随机数
 * @static
 * @since 1.0.3
 * @returns {string} Returns {}
 * @example
 *
 * var shallow = _.guidS4(objects);
 * console.log(shallow); // 359b
 */
 function guidS4() {
   return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
 }
export default guidS4;
