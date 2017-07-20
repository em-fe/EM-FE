import EmfeRadio from './src/EmfeRadio.vue';
import EmfeRadioGroup from './src/EmfeRadioGroup.vue';

/* istanbul ignore next */
EmfeRadio.install = (Vue) => {
  Vue.component(EmfeRadio.name, EmfeRadio);
};
/* istanbul ignore next */
EmfeRadioGroup.install = (Vue) => {
  Vue.component(EmfeRadioGroup.name, EmfeRadioGroup);
};

export default {
  EmfeRadio,
  EmfeRadioGroup,
};
