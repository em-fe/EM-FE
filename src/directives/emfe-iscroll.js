import IScroll from 'iscroll';
import O from '../tools/o';

export default {
  inserted(el, binding, vnode) {
    let callBack;
    let iscrollOptions = binding.value;
    // 判断输入参数
    const vtype = binding.value ? O.type(binding.value) : undefined;
    switch (vtype) {
      case '[object Array]':
        callBack = binding.value[0];
        iscrollOptions = binding.value[1];
        break;
      case '[object Function]':
        callBack = binding.value;
        break;
      case '[object Object]':
        iscrollOptions = binding.value;
        break;
      default:
        break;
    }
    // 使用vnode绑定iscroll是为了让iscroll对象能够夸状态传递，避免iscroll重复建立
    vnode.scroll = new IScroll(el, iscrollOptions);
    // 如果指令传递函数进来，把iscroll实例传递出去
    if (callBack) callBack(vnode.scroll);
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    // 将scroll绑定到新的vnode上
    vnode.scroll = oldVnode.scroll;
    // 使用settimeout让refresh跳到事件流结尾，保证refresh时数据已经更新完毕
    vnode.scroll.refresh();
  },
  unbind(el, binding, vnode, oldVnode) {
    /**
     * 解除绑定时要把iscroll销毁
     */
    vnode.scroll = oldVnode.scroll;
    vnode.scroll.destroy();
    vnode.scroll = null;
  },
};
