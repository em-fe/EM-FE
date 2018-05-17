/**
 * 滚动到某个位置，支持动画
 * @static
 * @since 1.0.9
 * @param {object} 参数
    el： 滚动的原生节点对象
    from： 从哪个位置，默认是 0
    to：滚动到某个位置
    time： 用多少毫秒，默认是 500 ms
 * @returns {} Returns undefined
 * @example
 *
 * url http://underline.com?underline=lee
 * _.scrollTop({
    el: document.getElementById('el'),
    from: 0,
    to: 100,
   });
 */
 function scrollTop(params) {
   if (!window.requestAnimationFrame) {
     window.requestAnimationFrame = (
       window.webkitRequestAnimationFrame ||
       window.mozRequestAnimationFrame ||
       window.msRequestAnimationFrame ||
       function (callback) {
         return window.setTimeout(callback, 1000/60);
       }
     );
   }
   var el = params.el || null;
   var from = params.from || 0;
   var to = params.to || 0;
   var duration = params.time || 500;
   var difference = Math.abs(from - to);
   var step = Math.ceil(difference / duration * 50);

   function scroll(start, end, step) {
     if (start === end) return;

     var d = (start + step > end) ? end : start + step;
     if (start > end) {
       d = (start - step < end) ? end : start - step;
     }

     if (el === window) {
       window.scrollTo(d, d);
     } else {
       el.scrollTop = d;
     }
     window.requestAnimationFrame(function() {
       scroll(d, end, step);
     });
   }
   scroll(from, to, step);
 }
export default scrollTop;
