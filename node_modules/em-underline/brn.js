/**
 * <br>|<br />|<br/> -> \n
 * @static
 * @since 1.0.9
 * @returns {string} Returns {}
 * @example
 *
 * brn
 */
 function brn(value) {
   return value.replace(/<br \/>|<br\/>|<br>/g, '\n');;
 }
export default brn;
