/**
 * 复制 JSON 对象
 * @static
 * @since 1.0.0
 * @returns {Object} Returns {}
 * @example
 *
 * var objects = {a:1,{b:1}};
 * var shallow = _.copy(objects);
 * console.log(shallow[0] === objects[0]);
 */
 function copy(obj) {
   return JSON.parse(JSON.stringify(obj));
 }
export default copy;
