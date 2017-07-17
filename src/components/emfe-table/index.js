import EmfeTable from './src/EmfeTable.vue';
import EmfeTableHead from './src/EmfeTableHead.vue';
import EmfeTableBody from './src/EmfeTableBody.vue';

/* istanbul ignore next */
EmfeTable.install = (Vue) => {
  Vue.component(EmfeTable.name, EmfeTable);
};
/* istanbul ignore next */
EmfeTableHead.install = (Vue) => {
  Vue.component(EmfeTableHead.name, EmfeTableHead);
};
/* istanbul ignore next */
EmfeTableBody.install = (Vue) => {
  Vue.component(EmfeTableBody.name, EmfeTableBody);
};

export default {
  EmfeTable,
  EmfeTableHead,
  EmfeTableBody,
};
