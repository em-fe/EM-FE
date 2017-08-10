import EmfeInputmore from './src/EmfeInputmore.vue';
import EmfeInputmoreGroup from './src/EmfeInputmoreGroup.vue';

EmfeInputmore.install = (Vue) => {
  Vue.component(EmfeInputmore.name, EmfeInputmore);
};

EmfeInputmoreGroup.install = (Vue) => {
  Vue.component(EmfeInputmoreGroup.name, EmfeInputmoreGroup);
};

export default {
  EmfeInputmore,
  EmfeInputmoreGroup,
};
