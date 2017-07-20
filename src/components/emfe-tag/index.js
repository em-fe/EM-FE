import EmfeTag from './src/EmfeTag.vue';
import EmfeTagParent from './src/EmfeTagParent.vue';

/* istanbul ignore next */
EmfeTag.install = (Vue) => {
  Vue.component(EmfeTag.name, EmfeTag);
};

/* istanbul ignore next */
EmfeTagParent.install = (Vue) => {
  Vue.component(EmfeTagParent.name, EmfeTagParent);
};

export default {
  EmfeTag,
  EmfeTagParent,
};
