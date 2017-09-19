import EmfeButtonC from './src/EmfeButtonC.vue';
import EmfeButtonGroupC from './src/EmfeButtonGroupC.vue';

/* istanbul ignore next */
EmfeButtonC.install = (Vue) => {
  Vue.component(EmfeButtonC.name, EmfeButtonC);
};
/* istanbul ignore next */
EmfeButtonGroupC.install = (Vue) => {
  Vue.component(EmfeButtonGroupC.name, EmfeButtonGroupC);
};

export default {
  EmfeButtonC,
  EmfeButtonGroupC,
};
