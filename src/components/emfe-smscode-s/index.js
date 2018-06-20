import EmfeSmscodeS from './src/EmfeSmscodeS.vue';
import EmfeSmscodeInputS from './src/EmfeSmscodeInputS.vue';
import EmfeSmscodeButtonS from './src/EmfeSmscodeButtonS.vue';

EmfeSmscodeS.install = (Vue) => {
  Vue.component(EmfeSmscodeS.name, EmfeSmscodeS);
};

EmfeSmscodeInputS.install = (Vue) => {
  Vue.component(EmfeSmscodeInputS.name, EmfeSmscodeInputS);
};

EmfeSmscodeButtonS.install = (Vue) => {
  Vue.component(EmfeSmscodeButtonS.name, EmfeSmscodeButtonS);
};
export default {
  EmfeSmscodeS,
  EmfeSmscodeInputS,
  EmfeSmscodeButtonS,
};
