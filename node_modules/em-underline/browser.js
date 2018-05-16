export default {
  /**
   * 浏览器判断是否是手机
   * @static
   * @since 1.0.0
   * @returns {Object<booean>} Returns {isMobile是否是手机, os是否是ios}
   * @example
   *
   * _.versions()
   * // => Logs {isMobile: true, os: true} // 是一个ios手机
   */
  versions: function() {
    var ua = navigator.userAgent;
    var isAndroid = /Android/i.test(ua);
    var isBlackBerry = /BlackBerry/i.test(ua);
    var isWindowPhone = /IEMobile/i.test(ua);
    var isIOS = /iPhone|iPad|iPod/i.test(ua);
    var isMobile = isAndroid || isBlackBerry || isWindowPhone || isIOS;
    var os = 'pc';
    if (isAndroid) os = 'android';
    if (isBlackBerry) os = 'BlackBerry';
    if (isWindowPhone) os = 'WindowPhone';
    if (isIOS) os = 'IOS';
    return {
      isMobile: isMobile,
      os: os,
    };
  },
};
