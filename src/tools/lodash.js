export default {
  has(value, valueList) {
    return valueList.filter(val => val === value).length > 0;
  },
  // 将数据插入到数组的某一位置
  swap(arr, index1, index2) {
    const popData = arr.splice(index2, 1)[0];
    arr.splice(index1, 0, popData);
    return arr;
  },
  // 将数组中两个对象的某一个值交换
  exchangeAttrValue(obj1, obj2, attr) {
    let val = '';
    if (Array.isArray(obj1[attr])) {
      val = [];
      obj1[attr].forEach(obj1Val => val.push(obj1Val));
    } else if (typeof obj1[attr] === 'object') {
      val = Object.assign({}, obj1[attr]);
    } else {
      val = obj1[attr];
    }
    if (Array.isArray(obj2[attr])) {
      obj1[attr] = [];
      obj2[attr].forEach(obj2Val => obj1[attr].push(obj2Val));
    } else if (typeof obj2[attr] === 'object') {
      obj1[attr] = Object.assign({}, obj2[attr]);
    } else {
      obj1[attr] = obj2[attr];
    }
    obj2[attr] = val;
  },
};
