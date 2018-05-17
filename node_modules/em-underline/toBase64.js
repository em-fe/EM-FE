/**
 * 转成base64
 * @static
 * @since 1.0.0
 * @returns {number} Returns {}
 * @example
 *
 */
function toBase64(data) {
  var result = '';
  var length = data.length;
  var toBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var base64Pad = '=';
  var i;
  for (i = 0; i < (length - 2); i += 3) {
    result += toBase64Table[data.charCodeAt(i) >> 2];
    result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
    result += toBase64Table[
      ((data.charCodeAt(i + 1) & 0x0f) << 2) + (data.charCodeAt(i + 2) >> 6)
    ];
    result += toBase64Table[data.charCodeAt(i + 2) & 0x3f];
  }
  if (length % 3) {
    i = length - (length % 3);
    result += toBase64Table[data.charCodeAt(i) >> 2];
    if ((length % 3) === 2) {
      result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
      result += toBase64Table[(data.charCodeAt(i + 1) & 0x0f) << 2];
      result += base64Pad;
    } else {
      result += toBase64Table[(data.charCodeAt(i) & 0x03) << 4];
      result += base64Pad + base64Pad;
    }
  }
  return result;
}
export default toBase64;
