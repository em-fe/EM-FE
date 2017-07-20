import EmfeCheckout from './src/EmfeCheckout.vue';

EmfeCheckout.install = (Vue) => {
  Vue.component(EmfeCheckout.name, EmfeCheckout);
};

export default EmfeCheckout;
