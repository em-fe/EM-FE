import EmfeCountdown from './src/EmfeCountdown.vue';

EmfeCountdown.install = (Vue) => {
  Vue.component(EmfeCountdown.name, EmfeCountdown);
};

export default EmfeCountdown;
