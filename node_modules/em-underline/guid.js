import guidS4 from './guidS4.js';
/**
 * 生成32位码
 * @static
 * @since 1.0.3
 * @returns {string} Returns {}
 * @example
 *
 * var shallow = _.guid();
 * console.log(shallow); // 359b53bab8ff1b0b1f7f9a32ac20c2aa
 */
 function guid(obj) {
   return guidS4() + guidS4() + guidS4() +
   guidS4() + guidS4() + guidS4() + guidS4() + guidS4();
 }
export default guid;
