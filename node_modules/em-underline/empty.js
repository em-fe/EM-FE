import typeofFn from './typeof.js';
/**
 * 判断是否为空, [],{},''
 * @static
 * @since 1.0.8
 * @returns {boolean} Returns {}
 * @example
 *
 * var shallow1 = _.empty({});
 * console.log(shallow1); // true
 *
 * var shallow2 = _.empty([]);
 * console.log(shallow2); // true
 *
 * var shallow3 = _.empty('');
 * console.log(shallow3); // true
 */
function empty(obj) {
  var t = typeofFn(obj);
  var isEmpty = false;

  if (t === 'array' || t === 'string') {
    isEmpty = obj.length === 0;
  } else if ( t === 'object') {
    isEmpty = JSON.stringify(obj) === '{}';
  }

  return isEmpty;
}
export default empty;
