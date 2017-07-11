import O from '../../../tools/o';

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

export default function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  const xhr = new XMLHttpRequest();
  const action = option.action;

  if (xhr.upload) {
    xhr.upload.onprogress = (e) => {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100;
      }
      option.onProgress(e);
    };
  }

  const formData = new FormData();

  if (option.data) {
    Object.keys(option.data).map((key) => {
      formData.append(key, option.data[key]);
      return key;
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = (e) => {
    option.onError(e);
  };

  xhr.onload = () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      option.onError(getError(action, option, xhr), getBody(xhr));
      return false;
    }

    option.onSuccess(getBody(xhr));
    return false;
  };

  xhr.open('get', action, true);

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  const headers = option.headers || {};

  Object.keys(headers).forEach((header) => {
    if (O.hOwnProperty(headers, header) && headers[header] !== null) {
      xhr.setRequestHeader(header, headers[header]);
    }
  });

  xhr.send(formData);
}
