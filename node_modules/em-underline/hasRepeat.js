/**
 * 是否有一样的
 * @static
 * @since 1.0.2
 * @returns {boolean} Returns {}
 * @example
 *
 * var objects = [1,2,3,4,1];
 * var shallow = _.hasRepeat(objects);
 * console.log(shallow); // true
 */
function hasRepeat(arrays) {
  var isRepeat = false;
  var len = arrays.length;
  if (len > 1) {
    for (var i = 0; i < len; i++) {
      if (arrays.every(function(as){return arrays[i] === as;})) {
        isRepeat = true;
        break;
      }
    }
  }
  return isRepeat;
}
export default hasRepeat;
