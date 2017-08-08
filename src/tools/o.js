export default {
  hOwnProperty(item, attr) {
    return Object.prototype.hasOwnProperty.call(item, attr);
  },
  empty(obj) {
    return JSON.stringify(obj) === '{}';
  },
  copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
};
