import Row from './src/Row.vue';
import Col from './src/Col';

/* istanbul ignore next */
Row.install = (Vue) => {
  Vue.component(Row.name, Row);
};
/* istanbul ignore next */
Col.install = (Vue) => {
  Vue.component(Col.name, Col);
};

export default {
  Row,
  Col,
};
