/**
 * \n -> <br>
 * @static
 * @since 1.0.9
 * @returns {string} Returns {}
 * @example
 *
 * brn
 */
 function nbr(value) {
   return value.replace(/\n/g, '<br>');;
 }
export default nbr;
