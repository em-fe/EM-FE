import Message from './src/message';

const prefixCls = 'emfe-message';
const prefixKey = 'emfe_message_key_';

let messageInstance;
let name = 1;

function getMessageInstance() {
  messageInstance = messageInstance || Message.newInstance({
    prefixCls,
  });
  return messageInstance;
}

function notice(params) {
  const instance = getMessageInstance();
  params.name = `${prefixKey}${name}`;

  instance.notice(params);

  // 用于手动消除
  return (() => {
    const target = name++;

    return () => {
      instance.remove(`${prefixKey}${target}`);
    };
  })();
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
  config() {
    console.log('config');
  },
};
