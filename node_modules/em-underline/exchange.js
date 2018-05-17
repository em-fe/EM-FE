/**
 * 检查数组中是否存在某值
 * @static
 * @since 1.0.2
 * @returns {boolean} Returns {}
 * @example
 *
 * var o1 = {a:1};
 * var o2 = {a:2};
 * _.exchange(o1, o2, 'a');
 * console.log(o1); // {a:2}
 * console.log(o2); // {a:1}
 *
 * var o1 = {a:[1]};
 * var o2 = {a:[2]};
 * _.exchange(o1, o2, 'a');
 * console.log(o1); // {a:[2]}
 * console.log(o2); // {a:[1]}
 *
 * var o1 = {a:{c:{d:2222}}};
 * var o2 = {a:{a:{c:{d:6666}}}};
 * _.exchange(o1, o2, 'a');
 * console.log(o1); // {a:{c:{d:6666}}}
 * console.log(o2); // {a:{c:{d:2222}}}
 */
 function exchange(obj1, obj2, attr) {
   var val = '';
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
 }
export default exchange;
