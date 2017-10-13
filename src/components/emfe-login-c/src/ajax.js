import O from '../../../tools/o';

// https://github.com/ElemeFE/element/blob/dev/packages/upload/src/ajax.js

function getError(action, option, xhr) {
  const msg = `fail to post ${action} ${xhr.status}'`;
  const err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = action;
  return err;
}

function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

/* eslint-disable no-bitwise */
const guidS4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
const getGuid = () => (guidS4() + guidS4() + guidS4() +
guidS4() + guidS4() + guidS4() + guidS4() + guidS4());
const guid = window.$cookie.get('X-Session-Id') || getGuid();
window.$cookie.set('X-Session-Id', guid);

export default function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  const xhr = new XMLHttpRequest();
  const action = option.action;

  // if (xhr.upload) {
  //   xhr.upload.onprogress = function progress(e) {
  //     if (e.total > 0) {
  //       e.percent = (e.loaded / e.total) * 100;
  //     }
  //     option.onProgress(e);
  //   };
  // }

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr), getBody(xhr));
    }

    return option.onSuccess(getBody(xhr));
  };
  if (option.type === 'POST') {
    xhr.open('post', action, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  } else {
    xhr.open('get', action, true);
  }

  xhr.setRequestHeader('X-Session-Id', guid);

  const headers = option.headers || {};

  // if (headers['X-Requested-With'] !== null) {
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  // }

  Object.keys(headers).forEach((item) => {
    if (O.hOwnProperty(headers, item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  });

  // for (const item in headers) {
  //   if (O.hOwnProperty(headers, item) && headers[item] !== null) {
  //     xhr.setRequestHeader(item, headers[item]);
  //   }
  // }
  if (option.type === 'POST') {
    xhr.send(option.data);
  } else {
    xhr.send();
  }
}
