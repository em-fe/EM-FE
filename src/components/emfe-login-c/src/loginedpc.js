/* eslint-disable */
import jsonp from 'em-jsonp';
import CONSTANT from '../../../contant';

const afterLogin = (callbackUrl, inow, self, callback) => {
  let theIndex = inow;
  const urlSplit = callbackUrl[theIndex].split('?');
  const newUrl = urlSplit[0];
  let data = urlSplit[1];
  data = data.replace(/=/g, '":"').replace(/&/g, '","');
  data = JSON.parse(`{"${data}"}`);
  window.$jsonp({
    url: newUrl,
    data,
    success: (res) => {
      if (res.code === CONSTANT.AJAX_SUCCESS) {
        if (theIndex === 0) {
          callback();
        } else {
          afterLogin(callbackUrl, --theIndex, self, callback);
        }
      } else {
        self.$EmfeMessage.error({
          content: '登录失败',
        });
      }
    },
    error: () => {
      self.$EmfeMessage.error({
        content: '登录失败',
      });
    },
  });
};

export default (result, orgId, self, callback) => {
  afterLogin(result.data.call_back_url, result.data.call_back_url.length - 1, self, () => {
    window.$cookie.set(`${CONSTANT.EVENT_TOKE}?org_id=${orgId}`, `${CONSTANT.COOKIE_PERFIX_TOKEN} ${result.data.token}`, result.data.expires);
    window.$cookie.set('userInfo', result.data.real_name, result.data.expires);
    callback();
  });
};
