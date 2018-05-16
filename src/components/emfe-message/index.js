import Message from './src/message';

const prefixKey = 'emfe_message_key_';

let messageInstance;
let delayTime = 5000;
let style = {};
let close = () => {};

function getMessageInstance() {
  messageInstance = messageInstance || Message.newInstance();
  return messageInstance;
}

function notice(params) {
  const instance = getMessageInstance();
  params.name = `${prefixKey}${name}`;
  params.delayTime = params.delayTime || delayTime;
  params.style = params.style || style;
  params.close = params.close || close;

  instance.notice(params);
}

export default {
  info(params) {
    params.type = 'info';
    return notice(params);
  },
  success(params) {
    params.type = 'success';
    return notice(params);
  },
  warning(params) {
    params.type = 'warning';
    return notice(params);
  },
  error(params) {
    params.type = 'error';
    return notice(params);
  },
  config(params) {
    if (params.delayTime) {
      delayTime = params.delayTime;
    }
    if (params.style) {
      style = params.style;
    }
    if (params.close) {
      close = params.close;
    }
  },
};
