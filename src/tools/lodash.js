export default {
  has(value, valueList) {
    return valueList.filter(val => val === value).length > 0;
  },
  swap(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
  },
};
