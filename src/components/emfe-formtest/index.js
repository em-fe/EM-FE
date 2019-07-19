export default {
  ip(val) {
    /* eslint-disable */
    const ipPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    /* eslint-disable */
    return ipPattern.test(val);
  },
  web(val) {
    /* eslint-disable */
    // 网址
    const webPattern = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    /* eslint-disable */
    return webPattern.test(val);
  },
  card(val) {
    /* eslint-disable */
    //身份证号（18位）
    const cardPattern = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    /* eslint-disable */
    return cardPattern.test(val);
  },
  phone(val) {
    /* eslint-disable */
    //手机号
    const phonePattern = /^1[3456789]\d{9}$/;
    /* eslint-disable */
    return phonePattern.test(val);
  },
  email(val) {
    /* eslint-disable */
    //Email
    const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    /* eslint-disable */
    return emailPattern.test(val);
  },
  num(val) {
    /* eslint-disable */
    //数字
    const numPattern = /^-?\d*\.?\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  numInt(val) {
    /* eslint-disable */
    //数字
    const numPattern = /^-?\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  // 负整数
  negativeInt(val) {
    /* eslint-disable */
    //数字
    const numPattern = /^-\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  // 负数（带小数）
  negative(val) {
    /* eslint-disable */
    //数字
    const numPattern = /^-\d*\.?\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  // 正整数
  positiveInt(val) {
    /* eslint-disable */
    //数字
    const numPattern = /^\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  // 正数（带小数）
  positive(val) {
    /* eslint-disable */
    //数字
    const numPattern = /^\d*\.?\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  qq(val) {
    /* eslint-disable */
    //QQ号正则，5至11位
    const qqPattern = /^[1-9][0-9]{4,10}$/;
    /* eslint-disable */
    return qqPattern.test(val);
  },
  password(val) {
    /* eslint-disable */
    //QQ号正则，5至11位
    const pwdPattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,20}$/;
    /* eslint-disable */
    return pwdPattern.test(val);
  },
  money(val) {
    /* eslint-disable */
    //金钱正则
    const moneyPattern = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    /* eslint-disable */
    return moneyPattern.test(val);
  },
  childAccount(val) {
     /* eslint-disable */
    //子账户正则
    const childAccountPattern = /^(1[3456789][0-9]{9}):(1[345789][0-9]{9})$/;
    /* eslint-disable */
    return childAccountPattern.test(val);
  },
};
