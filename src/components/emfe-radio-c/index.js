import EmfeRadioC from './src/EmfeRadioC.vue';
import EmfeRadioGroupC from './src/EmfeRadioGroupC.vue';

/* istanbul ignore next */
EmfeRadioC.install = (Vue) => {
  Vue.component(EmfeRadioC.name, EmfeRadioC);
};
/* istanbul ignore next */
EmfeRadioGroupC.install = (Vue) => {
  Vue.component(EmfeRadioGroupC.name, EmfeRadioGroupC);
};

export default {
  EmfeRadioC,
  EmfeRadioGroupC,
};
