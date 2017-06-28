export default {
  has(value, valueList) {
    return valueList.filter(val => val === value).length > 0;
  },
};
