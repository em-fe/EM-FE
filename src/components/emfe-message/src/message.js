import Vue from 'vue';
import EmfeMessage from './EmfeMessage.vue';

EmfeMessage.newInstance = (properties) => {
  const props = properties || {};

  const Instance = new Vue({
    data: props,
    render(h) {
      return h(EmfeMessage, {
        props,
      });
    },
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const notification = Instance.$children[0];

  return {
    notice(noticeProps) {
      console.log('noticeProps', noticeProps);
      notification.add(noticeProps);
    },
  };
};

export default EmfeMessage;
