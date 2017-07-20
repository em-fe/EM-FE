import EmfeButton from './src/EmfeButton.vue';
import EmfeButtonGroup from './src/EmfeButtonGroup.vue';

/* istanbul ignore next */
EmfeButton.install = (Vue) => {
  Vue.component(EmfeButton.name, EmfeButton);
};
/* istanbul ignore next */
EmfeButtonGroup.install = (Vue) => {
  Vue.component(EmfeButtonGroup.name, EmfeButtonGroup);
};

export default {
  EmfeButton,
  EmfeButtonGroup,
};
