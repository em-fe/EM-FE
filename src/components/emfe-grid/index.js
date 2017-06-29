import EmfeRow from './src/EmfeRow.vue';
import EmfeCol from './src/EmfeCol';

/* istanbul ignore next */
EmfeRow.install = (Vue) => {
  Vue.component(EmfeRow.name, EmfeRow);
};
/* istanbul ignore next */
EmfeCol.install = (Vue) => {
  Vue.component(EmfeCol.name, EmfeCol);
};

export default {
  EmfeRow,
  EmfeCol,
};
