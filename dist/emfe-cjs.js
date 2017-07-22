/*!
 * EMFE.js v1.0.2
 * (c) 2014-2017 李梦龙
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

var _ = {
  has: function has(value, valueList) {
    return valueList.filter(function (val) { return val === value; }).length > 0;
  },
};

var prefixCls = 'emfe-row';

var EmfeRow = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classList,style:(_vm.rowStyle)},[_vm._t("default")],2)},
staticRenderFns: [],
  name: 'EmfeRow',
  props: {
    gutter: {
      type: [Number, String],
      default: 0,
    },
    basin: {
      type: [Number, String],
      default: 0,
    },
    type: {
      validator: function validator(value) {
        return _.has(value, ['flex']);
      },
    },
    align: {
      validator: function validator(value) {
        return _.has(value, ['top', 'middle', 'bottom']);
      },
    },
    justify: {
      validator: function validator(value) {
        return _.has(value, ['start', 'end', 'center', 'space-around', 'space-between']);
      },
    },
    className: String,
  },
  computed: {
    classList: function classList() {
      return [
        ( obj = {}, obj[("" + prefixCls)] = !this.type, obj[(prefixCls + "-" + (this.type))] = !!this.type, obj[(prefixCls + "-" + (this.align))] = !!this.type && !!this.align, obj[(prefixCls + "-" + (this.justify))] = !!this.type && !!this.justify, obj[("" + (this.className))] = !!this.className, obj ) ];
      var obj;
    },
    rowStyle: function rowStyle() {
      if (this.gutter > 48) {
        this.gutter = 48;
      }
      var gapGutter = this.gutter / 2;
      var gapBasin = this.basin / 2;
      var gutter = gapGutter > 0 ? ("margin-left: -" + gapGutter + "px;margin-right: -" + gapGutter + "px;") : '';
      var basin = gapBasin > 0 ? ("margin-top: -" + gapBasin + "px;margin-bottom: -" + gapBasin + "px;") : '';
      return ("" + gutter + basin);
    },
  },
};

var prefixCls$1 = 'emfe-col';

var EmfeCol = {
  name: 'EmfeCol',
  props: {
    span: [Number, String],
    tag: {
      type: String,
      default: 'div',
    },
    className: String,
    order: [Number, String],
    offset: [Number, String],
    pull: [Number, String],
    push: [Number, String],
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },

  computed: {
    gutter: function gutter() {
      var parent = this.$parent;
      var ref = parent.$options;
      var _componentTag = ref._componentTag;

      while (parent && _componentTag === 'row') {
        parent = parent.$parent;
      }

      return parent ? parent.gutter : 0;
    },
    basin: function basin() {
      var parent = this.$parent;
      var ref = parent.$options;
      var _componentTag = ref._componentTag;

      while (parent && _componentTag === 'row') {
        parent = parent.$parent;
      }

      return parent ? parent.basin : 0;
    },
  },
  render: function render(h) {
    var this$1 = this;

    var classList = [];
    var style = {};

    if (this.gutter) {
      if (this.gutter > 48) {
        this.gutter = 48;
      }
      style.paddingLeft = (this.gutter / 2) + "px";
      style.paddingRight = style.paddingLeft;
    }

    if (this.basin) {
      if (this.basin > 48) {
        this.basin = 48;
      }
      style.paddingTop = (this.basin / 2) + "px";
      style.paddingBottom = style.paddingTop;
    }
    // 处理排版参数
    ['span', 'offset', 'pull', 'push', 'order'].forEach(function (prop) {
      if (this$1[prop]) {
        var className1 = prefixCls$1 + "-" + prop + "-" + (this$1[prop]);
        var className2 = prefixCls$1 + "-" + (this$1[prop]);
        var className = prop !== 'span' ? className1 : className2;
        classList.push(className);
      }
    });
    // 处理自适应参数
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
      var loopPrefix = prefixCls$1 + "-" + size + "-";
      if (typeof this$1[size] === 'number') {
        classList.push(("" + loopPrefix + (this$1[size])));
      } else if (typeof this$1[size] === 'object') {
        var props = this$1[size];
        Object.keys(props).forEach(function (prop) {
          var className1 = "" + loopPrefix + prop + "-" + (props[prop]);
          var className2 = "" + loopPrefix + (props[prop]);
          var className = prop !== 'span' ? className1 : className2;
          classList.push(className);
        });
      }
    });

    classList.push(this.className);

    return h(this.tag, {
      class: [prefixCls$1, classList],
      style: style,
    }, this.$slots.default);
  },
};

/* istanbul ignore next */
EmfeRow.install = function (Vue$$1) {
  Vue$$1.component(EmfeRow.name, EmfeRow);
};
/* istanbul ignore next */
EmfeCol.install = function (Vue$$1) {
  Vue$$1.component(EmfeCol.name, EmfeCol);
};

var Grid = {
  EmfeRow: EmfeRow,
  EmfeCol: EmfeCol,
};

var prefixCls$2 = 'emfe-icon';

var EmfeIcon$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:_vm.name,on:{"click":function($event){$event.stopPropagation();_vm.click($event);}}})},
staticRenderFns: [],
  name: 'EmfeIcon',
  props: {
    className: {
      type: String,
      default: '',
    },
    type: String,
  },
  computed: {
    name: function name() {
      var icon = prefixCls$2 + "-" + (this.type);
      var newName = this.className ? (" " + (this.className) + "-icon") : '';
      return ("" + icon + newName);
    },
  },
  methods: {
    click: function click() {
      this.$emit('icon-click');
    },
  },
};

EmfeIcon$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeIcon$1.name, EmfeIcon$1);
};

// 判断参数是否是其中之一






// watch DOM change


var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
// getStyle
function getStyle (element, styleName) {
  if (!element || !styleName || !element.style) { return null; }
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch(e) {
    return element.style[styleName];
  }
}

function getElementLeft(element){
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while (current !== null){
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}

function getElementTop(element){
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null){
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

// Warn


// scrollTop animation


/* istanbul ignore next */
var trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) { return false; }
  if (cls.indexOf(' ') !== -1) { throw new Error('className should not contain space.'); }
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (("" + (el.className))).indexOf((" " + cls + " ")) > -1;
  }
}

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) { return; }
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) { continue; }

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += " clsName";
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) { return; }
  var classes = cls.split(' ');
  var curClass = " " + (el.className) + " ";

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) { continue; }

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

var enterTimer = null;
var leaveTimer = null;

var checkPosition = function (self) {
  var parentNodeHasPosition = false;
  var parentNodePosition = getStyle(self.$parent.$el, 'position');
  self.parentPositionHasFixed = parentNodePosition === 'fixed';
  self.parentPositionHasRelative = parentNodePosition === 'relative';
  self.positionStyle = self.parentPositionHasFixed ? 'fixed' : 'absolute';
  var parent = self.$el;
  // 循环查找父级有没有定位
  while (parent && parent.nodeName.toLocaleLowerCase() !== 'body') {
    parent = parent.parentNode;
    parentNodePosition = getStyle(parent, 'position');

    if (!parentNodeHasPosition) {
      parentNodeHasPosition = parentNodePosition !== 'static';
    }

    if (!self.parentPositionHasFixed) {
      self.parentPositionHasFixed = parentNodePosition === 'fixed';
    }

    if (!self.parentPositionHasRelative) {
      self.parentPositionHasRelative = parentNodePosition === 'relative';
    }
  }
  // 根据父级是否有固定定位判断悬浮窗是否有固定定位
  self.positionStyle = self.parentPositionHasFixed ? 'fixed' : 'absolute';
};

var EmfeTooltip$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-tooltip",class:_vm.tooltipName,style:(_vm.relativeStyle),on:{"mouseenter":_vm.showPopper,"mouseleave":_vm.hidePopper}},[_c('div',{ref:"reference",staticClass:"emfe-tooltip-slot",class:_vm.slotName},[_vm._t("render")],2),_vm._v(" "),_c('transition',{attrs:{"name":"fade"},on:{"enter":_vm.enter,"before-enter":_vm.beforeEnter,"after-enter":_vm.afterEnter,"before-leave":_vm.beforeLeave,"after-leave":_vm.afterLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.popperStatus),expression:"popperStatus"}],ref:"popper",staticClass:"emfe-tooltip-popper",class:_vm.popperName,style:(_vm.popperStyle)},[(_vm.arrowStatus)?_c('i',{staticClass:"emfe-tooltip-arrow",class:_vm.arrowPlacement}):_vm._e(),_vm._v(" "),_vm._t("tip")],2)])],1)},
staticRenderFns: [],
  name: 'EmfeTooltip',
  props: {
    className: {
      type: String,
      default: '',
    },
    theme: {
      validator: function validator(value) {
        return _.has(value, ['dark', 'light']);
      },
      default: 'dark',
    },
    arrowStatus: {
      type: Boolean,
      default: true,
    },
    offset: {
      type: [Number, String],
      default: 8,
    },
    delay: {
      type: [Number, String],
      default: 100,
    },
    placement: {
      validator: function validator(value) {
        return _.has(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
      },
      default: 'top',
    },
    disable: {
      type: [Boolean, String],
      default: false,
    },
  },
  data: function data() {
    return {
      popperStyle: '',
      popperStatus: false,
      setStyled: true,
      relativeStyle: '',
    };
  },
  computed: {
    tooltipName: function tooltipName() {
      return this.className ? ((this.className) + "-tooltip") : '';
    },
    slotName: function slotName() {
      return this.className ? ((this.className) + "-slot") : '';
    },
    popperName: function popperName() {
      return [( obj = {}, obj[((this.className) + "-popper")] = !!this.className, obj ), ("emfe-tooltip-" + (this.theme) + "-popper")];
      var obj;
    },
    arrowPlacement: function arrowPlacement() {
      return [("emfe-tooltip-" + (this.theme) + "-arrow"), ("emfe-tooltip-arrow-" + (this.placement)), ("emfe-tooltip-" + (this.theme) + "-arrow-" + (this.placement))];
    },
  },
  created: function created() {
    this.offsetDefault = this.offset - 0;
    this.delayDefault = this.delay - 0;
  },
  methods: {
    enter: function enter() {
      this.setPoperStyle();
    },
    beforeEnter: function beforeEnter() {
      this.$emit('before-show');
    },
    afterEnter: function afterEnter() {
      this.$emit('after-show');
    },
    beforeLeave: function beforeLeave() {
      this.$emit('before-hide');
    },
    afterLeave: function afterLeave() {
      this.$emit('after-hide');
    },
    setPoperStyle: function setPoperStyle() {
      // 只设定一次位置
      if (!this.setStyled) {
        return;
      }

      this.setStyled = false;

      var ref = this.$refs;
      var reference = ref.reference;
      var popper = ref.popper;
      var ref$1 = document.body;
      var scrollLeft = ref$1.scrollLeft;
      var scrollTop$$1 = ref$1.scrollTop;
      var clientWidth = ref$1.clientWidth;
      var clientHeight = ref$1.clientHeight;
      var popperPos = popper.getBoundingClientRect();
      var referencePos = reference.getBoundingClientRect();
      var left = referencePos.left;
      var right = referencePos.right;
      var top = referencePos.top;
      var bottom = referencePos.bottom;
      var width = referencePos.width;
      var height = referencePos.height;

      var popperLeft = 0;
      var popperTop = 0;
      // 定位检测
      checkPosition(this);
      // 如果父级没有定位
      if (this.placement.indexOf('left') > -1) {
        popperLeft = left - popperPos.width - this.offsetDefault;
      } else if (this.placement.indexOf('right') > -1) {
        popperLeft = right + this.offsetDefault;
      } else if (this.placement.indexOf('bottom') > -1) {
        popperTop = bottom + this.offsetDefault;
      } else {
        popperTop = top - popperPos.height - this.offsetDefault;
      }

      if (/left|right/g.test(this.placement)) {
        if (this.placement.indexOf('start') > -1) {
          popperTop = top;
        } else if (this.placement.indexOf('end') > -1) {
          popperTop = bottom - popperPos.height;
        } else {
          popperTop = ((height - popperPos.height) / 2) + top;
        }
      }

      if (/bottom|top/g.test(this.placement)) {
        if (this.placement.indexOf('start') > -1) {
          popperLeft = left;
        } else if (this.placement.indexOf('end') > -1) {
          popperLeft = right - popperPos.width;
        } else {
          popperLeft = ((width - popperPos.width) / 2) + left;
        }
      }
      // 如果没有固定定位，处理有滚动距离
      if (!this.parentPositionHasFixed) {
        popperTop += scrollTop$$1;
        popperLeft += scrollLeft;
      }
      // 如果父级有相对定位，并且不存在固定定位
      if (this.parentPositionHasRelative && !this.parentPositionHasFixed) {
        var elTop = getElementTop(this.$el);
        var elParentTop = getElementTop(this.$el.parentNode);
        var elLeft = getElementLeft(this.$el);
        var elParentLeft = getElementLeft(this.$el.parentNode);

        popperTop = elTop - elParentTop;
        popperLeft = elLeft - elParentLeft;

        var popperRight = popperLeft + width;
        var popperBottom = popperTop + height;
        // 如果父级没有定位
        if (this.placement.indexOf('left') > -1) {
          popperLeft -= popperPos.width + this.offsetDefault;
        } else if (this.placement.indexOf('right') > -1) {
          popperLeft = popperRight + this.offsetDefault;
        } else if (this.placement.indexOf('bottom') > -1) {
          popperTop = popperBottom + this.offsetDefault;
        } else {
          popperTop -= popperPos.height + this.offsetDefault;
        }
        // 设置右边和左边
        if (/left-end|right-end/g.test(this.placement)) {
          popperTop = popperBottom - popperPos.height;
        } else if (/(left|right)$/g.test(this.placement)) {
          popperTop += (height - popperPos.height) / 2;
        }
        // 设置上面和下面
        if (/bottom-end|top-end/g.test(this.placement)) {
          popperLeft += width - popperPos.width;
        } else if (/(bottom|top)$/g.test(this.placement)) {
          popperLeft += (width - popperPos.width) / 2;
        }
      } else {
        // 如果没有定位，超出 document 高度处理
        if (popperLeft + popperPos.width > clientWidth) {
          popperLeft = left - popperPos.width - this.offsetDefault;
        } else if (popperLeft < 0) {
          popperLeft = right + this.offsetDefault;
        }

        if (popperTop + popperPos.height > clientHeight) {
          popperTop = popperTop - height - this.offsetDefault;
        } else if (popperTop < 0) {
          var bottomOffset = /bottom/g.test(this.placement) ? height + this.offsetDefault : 0;
          popperTop = (bottom + this.offsetDefault) - bottomOffset;
        }
      } // end 如果父级有相对定位，并且不存在固定定位

      this.popperStyle = "position: " + (this.positionStyle) + "; left: " + popperLeft + "px; top: " + popperTop + "px;";
    },
    showPopper: function showPopper() {
      var this$1 = this;

      if (this.disable) {
        return;
      }
      if (this.popperStatus) {
        clearTimeout(enterTimer);
        clearTimeout(leaveTimer);
      }
      enterTimer = setTimeout(function () {
        this$1.popperStatus = true;
      }, this.delayDefault);
    },
    hidePopper: function hidePopper() {
      var this$1 = this;

      if (this.disable) {
        return;
      }
      if (!this.popperStatus) {
        clearTimeout(enterTimer);
      }
      leaveTimer = setTimeout(function () {
        this$1.popperStatus = false;
      }, this.delayDefault);
      if (!this.popperStatus) {
        clearTimeout(leaveTimer);
      }
    },
  },
};

EmfeTooltip$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTooltip$1.name, EmfeTooltip$1);
};

var commonTransitionClass = 'emfe-gradual';

var Transition = function (name) { return (name !== 'gradual' ? {} : {
  beforeEnter: function beforeEnter(el) {
    addClass(el, commonTransitionClass);
    if (!el.dataset) { el.dataset = {}; }

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = '0';
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  },

  enter: function enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = (el.scrollHeight) + "px";
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = 'hidden';
  },

  afterEnter: function afterEnter(el) {
    // for safari: remove class then reset height is necessary
    removeClass(el, commonTransitionClass);
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  },

  beforeLeave: function beforeLeave(el) {
    if (!el.dataset) { el.dataset = {}; }
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.height = (el.scrollHeight) + "px";
    el.style.overflow = 'hidden';
  },

  leave: function leave(el) {
    if (el.scrollHeight !== 0) {
      addClass(el, commonTransitionClass);
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  },
  afterLeave: function afterLeave(el) {
    removeClass(el, commonTransitionClass);
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  },
}); };


var transitionProps = {
  name: {
    type: String,
    default: 'v',
  },
  css: {
    type: Boolean,
    default: true,
  },
  mode: String,
  type: String,
  duration: [Number, String, Object],
};

var EmfeTransition = {
  name: 'EmfeTransition',
  functional: true,
  props: transitionProps,
  render: function render(createElement, context) {
    var data = {
      props: context.props,
      on: Transition(context.props.name),
    };

    return createElement('transition', data, context.children);
  },
};

var Contant = {
  SCREEN_MD: 992,
};

var srceen = {
  screenMd: function screenMd() {
    return document.body.clientWidth > Contant.SCREEN_MD;
  },
};

var O = {
  hOwnProperty: function hOwnProperty(item, attr) {
    return Object.prototype.hasOwnProperty.call(item, attr);
  },
};

var childrenLast = -1; // 记录上一个点击的二级手风琴的索引
var childrentatus = false; // 记录二级是否打开
var screenMd = ''; // 屏幕是否大于992

var EmfeMenu$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"menu",staticClass:"emfe-menu",class:_vm.menuName},[_c('div',{staticClass:"emfe-menu-main"},[_c('button',{staticClass:"emfe-menu-main-header",on:{"click":_vm.menuToShort}},[_c('emfe-icon',{staticClass:"emfe-menu-main-sidebar",attrs:{"type":"sidebar"}})],1),_vm._v(" "),_c('ul',{staticClass:"emfe-menu-main-list"},_vm._l((_vm.datas),function(data,dataIndex){return _c('li',{staticClass:"emfe-menu-main-item"},[(data.routers)?_c('a',{staticClass:"emfe-menu-main-link",class:{'emfe-menu-main-link-on': _vm.mainIndex === dataIndex},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.tochildren(data, dataIndex);}}},[_c('emfe-tooltip',{attrs:{"placement":"right","disable":!_vm.menuShort}},[_c('emfe-icon',{staticClass:"emfe-menu-main-icon",attrs:{"type":data.icon},slot:"render"}),_vm._v(" "),_c('span',{slot:"tip"},[_vm._v(_vm._s(data.title))])],1),_vm._v(" "),_c('span',{staticClass:"emfe-menu-main-text"},[_vm._v(_vm._s(data.title))])],1):_c('a',{staticClass:"emfe-menu-main-link",class:{'emfe-menu-main-link-on': _vm.mainIndex === dataIndex},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.tochildren(data, dataIndex);}}},[_c('emfe-tooltip',{attrs:{"placement":"right","disable":!_vm.menuShort}},[_c('emfe-icon',{staticClass:"emfe-menu-main-icon",attrs:{"type":data.icon},slot:"render"}),_vm._v(" "),_c('span',{slot:"tip"},[_vm._v(_vm._s(data.title))])],1),_vm._v(" "),_c('span',{staticClass:"emfe-menu-main-text"},[_vm._v(_vm._s(data.title))])],1)])}))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.childrenDatas.length),expression:"childrenDatas.length"}],staticClass:"emfe-menu-minor"},[_c('h3',{staticClass:"emfe-menu-minor-header"},[_vm._v(_vm._s(_vm.childrenTitle))]),_vm._v(" "),_c('ul',{staticClass:"emfe-menu-minor-list"},[_vm._l((_vm.childrenDatas),function(childrenData,childrenDataIndex){return [(!childrenData.children)?_c('li',{staticClass:"emfe-menu-minor-item"},[_c('router-link',{staticClass:"emfe-menu-minor-link",attrs:{"to":childrenData.routers}},[_vm._v(_vm._s(childrenData.title))])],1):_c('li',{staticClass:"emfe-menu-minor-item",class:{'emfe-menu-minor-item-on': _vm.childrenIndex == childrenDataIndex}},[_c('span',{staticClass:"emfe-menu-minor-btn",attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.toogleChild(childrenDataIndex);}}},[_vm._v(_vm._s(childrenData.title))]),_vm._v(" "),_c('i',{staticClass:"emfe-menu-minor-arrow"}),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"gradual"}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.childrenIndex == childrenDataIndex),expression:"childrenIndex == childrenDataIndex"}],staticClass:"emfe-menu-minor-childlist"},_vm._l((childrenData.children),function(child){return _c('li',{staticClass:"emfe-menu-minor-childitem"},[_c('router-link',{staticClass:"emfe-menu-minor-childlink",attrs:{"to":child.routers}},[_vm._v(_vm._s(child.title))])],1)}))])],1)]})],2)])])},
staticRenderFns: [],
  name: 'EmfeMenu',
  data: function data() {
    return {
      childrenDatas: [],
      childrenIndex: -1,
      mainIndex: -1,
      childrenTitle: '',
      menuShort: false,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    datas: Array,
  },
  computed: {
    menuName: function menuName() {
      return [
        ( obj = {
          'emfe-menu-on': this.menuShort,
        }, obj[((this.className) + "-menu")] = !!this.className, obj ) ];
      var obj;
    },
  },
  created: function created() {
    var this$1 = this;

    var resizeHandle = function () {
      var screenMdResize = srceen.screenMd();
      if (screenMd !== screenMdResize) {
        screenMd = screenMdResize;
        this$1.menuToShort('resize');
      }
    };

    resizeHandle();
    // 刷新的时候，检测导航选中
    this.testUrl();

    window.addEventListener('resize', resizeHandle);
  },
  methods: {
    testUrl: function testUrl() {
      var this$1 = this;

      var ref = this.$route;
      var fullPath = ref.fullPath;
      var name = ref.name;
      var item = {};
      var itemIndex = -1;

      this.datas.forEach(function (data, dataNum) {
        // 如果一级导航有子节点
        if (O.hOwnProperty(data, 'children')) {
          data.children.forEach(function (dataChild, dataChildIndex) {
            // 如果二级导航有子节点
            if (O.hOwnProperty(dataChild, 'children')) {
              dataChild.children.forEach(function (dataGrandson) {
                if (fullPath === dataGrandson.routers.path || name === dataGrandson.routers.name) {
                  // 打开二级导航的折叠
                  this$1.toogleChild(dataChildIndex);
                  item = data;
                  itemIndex = dataNum;
                }
              });
            } else if (fullPath === dataChild.routers.path || name === dataChild.routers.name) {
              item = data;
              itemIndex = dataNum;
            }
          });
        } else if (O.hOwnProperty(data, 'routers') && (fullPath === data.routers.path || name === data.routers.name)) {
          this$1.mainIndex = dataNum;
        }
      });
      if (itemIndex > -1) {
        this.menuMainClick(item, itemIndex);
      }
    },
    toogleChild: function toogleChild(itemIndex) {
      var eqLast = itemIndex === childrenLast;
      this.childrenIndex = eqLast ? -1 : itemIndex;
      childrenLast = eqLast ? -1 : itemIndex;
    },
    tochildren: function tochildren(item, itemIndex) {
      if (O.hOwnProperty(item, 'routers') || O.hOwnProperty(item, 'url')) {
        this.mainIndex = itemIndex;
        this.childrenDatas = [];
        this.childrenIndex = -1;
        childrenLast = 0;
        childrentatus = false;
        this.$emit('short', this.menuShort, childrentatus);
      }

      if (O.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }

      if (O.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }

      if (O.hOwnProperty(item, 'children')) {
        this.menuMainClick(item, itemIndex);
      }
    },
    menuMainClick: function menuMainClick(item, itemIndex) {
      this.childrenDatas = item.children;
      this.childrenTitle = item.title;
      this.mainIndex = itemIndex;
      childrentatus = true;
      this.$emit('column', this.menuShort, childrentatus);
    },
    menuToShort: function menuToShort(type) {
      if (type === 'resize') {
        this.menuShort = !screenMd;
      } else {
        this.menuShort = !this.menuShort;
      }
      this.$emit('short', this.menuShort, childrentatus);
    },
  },
};

EmfeMenu$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeMenu$1.name, EmfeMenu$1);
};

var EmfeHeader$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"emfe-header"},[_c('div',{staticClass:"emfe-header-eye"},[_c('img',{attrs:{"src":_vm.logo,"height":"100%"}})]),_vm._v(" "),_c('div',{staticClass:"emfe-header-info"},[_c('span',{staticClass:"emfe-header-account"},[_vm._v("活动易首页 你好，"+_vm._s(_vm.user))]),_vm._v(" "),_c('emfe-link',{attrs:{"routers":{}},on:{"click":_vm.logout}},[_vm._v("退出账号")])],1)])},
staticRenderFns: [],
  name: 'EmfeHeader',
  props: {
    logo: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  methods: {
    logout: function logout() {
      this.$emit('logout');
    },
  },
};

EmfeHeader$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeHeader$1.name, EmfeHeader$1);
};

var EmfeFooter$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"emfe-footer"},[_vm._v(_vm._s(_vm.content))])},
staticRenderFns: [],
  name: 'EmfeFooter',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};

EmfeFooter$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeFooter$1.name, EmfeFooter$1);
};

var EmfeCopy$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-copy",class:_vm.copyName},[_c('span',{class:_vm.textName},[_vm._v("表单页面：")]),_vm._v(" "),_c('input',{ref:"copyInput",class:_vm.valueName,domProps:{"value":_vm.copyValue}}),_vm._v(" "),_c('button',{staticClass:"emfe-copy-btn",class:_vm.btnName,on:{"click":_vm.copyHandle}},[_c('emfe-icon',{class:_vm.iconName,attrs:{"type":"stick"}})],1)])},
staticRenderFns: [],
  name: 'EmfeCopy',
  props: {
    className: String,
    copyValue: String,
  },
  computed: {
    copyName: function copyName() {
      return this.className ? ((this.className) + "-copy") : '';
    },
    textName: function textName() {
      return this.className ? ((this.className) + "-text") : '';
    },
    valueName: function valueName() {
      return this.className ? ((this.className) + "-value") : '';
    },
    btnName: function btnName() {
      return this.className ? ((this.className) + "-btn") : '';
    },
    iconName: function iconName() {
      return this.className ? ((this.className) + "-icon") : '';
    },
  },
  methods: {
    copyHandle: function copyHandle() {
      var ref = this.$refs;
      var copyInput = ref.copyInput;
      copyInput.select();
      try {
        if (document.execCommand('copy', false, null)) {
          document.execCommand('Copy');
          this.$emit('copySuccess');
        } else {
          this.$emit('copyFail');
        }
      } catch (err) {
        this.$emit('copyFail');
      }
      copyInput.blur();
    },
  },
};

EmfeCopy$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeCopy$1.name, EmfeCopy$1);
};

function getError(action, option, xhr) {
  var msg = "fail to post " + action + " " + (xhr.status) + "'";
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  var xhr = new XMLHttpRequest();
  var action = option.action;

  if (xhr.upload) {
    xhr.upload.onprogress = function (e) {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100;
      }
      option.onProgress(e);
    };
  }

  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).map(function (key) {
      formData.append(key, option.data[key]);
      return key;
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function (e) {
    option.onError(e);
  };

  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) {
      option.onError(getError(action, option, xhr), getBody(xhr));
      return false;
    }

    option.onSuccess(getBody(xhr));
    return false;
  };

  xhr.open('get', action, true);

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};

  Object.keys(headers).forEach(function (header) {
    if (O.hOwnProperty(headers, header) && headers[header] !== null) {
      xhr.setRequestHeader(header, headers[header]);
    }
  });

  xhr.send(formData);
}

var EmfeUpload$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-upload",class:_vm.uploadName},[_c('button',{staticClass:"emfe-upload-btn",class:_vm.btnName},[_vm._v("+")]),_vm._v(" "),_c('input',{staticClass:"emfe-upload-file",class:_vm.fileName,attrs:{"type":"file"},on:{"change":_vm.change}})])},
staticRenderFns: [],
  name: 'upload',
  props: {
    type: {
      validator: function validator(value) {
        return _.has(value, ['plus', 'icon']);
      },
      default: 'plus',
    },
    imageMore: {
      type: [Boolean, String],
      default: false,
    },
    imageNumber: {
      type: [Number, String],
      default: 1,
    },
    className: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      default: function default$1() {
        return {};
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
    },
    name: {
      type: String,
      default: 'file',
    },
    withCredentials: {
      type: Boolean,
      default: false,
    },
    showUploadList: {
      type: Boolean,
      default: true,
    },
    format: {
      type: Array,
      default: function default$2() {
        return [];
      },
    },
    accept: {
      type: String,
    },
    maxSize: {
      type: Number,
    },
    beforeUpload: Function,
    onProgress: {
      type: Function,
      default: function default$3() {
        return {};
      },
    },
    onSuccess: {
      type: Function,
      default: function default$4() {
        return {};
      },
    },
    onError: {
      type: Function,
      default: function default$5() {
        return {};
      },
    },
    onRemove: {
      type: Function,
      default: function default$6() {
        return {};
      },
    },
    onPreview: {
      type: Function,
      default: function default$7() {
        return {};
      },
    },
    onExceededSize: {
      type: Function,
      default: function default$8() {
        return {};
      },
    },
    onFormatError: {
      type: Function,
      default: function default$9() {
        return {};
      },
    },
    defaultFileList: {
      type: Array,
      default: function default$10() {
        return [];
      },
    },
  },
  data: function data() {
    return {
      fileList: [],
      tempIndex: 1,
    };
  },
  computed: {
    uploadName: function uploadName() {
      return [
        ("emfe-upload-" + (this.type)),
        ( obj = {}, obj[((this.className) + "-upload")] = !!this.className, obj ),
        ( obj$1 = {}, obj$1[((this.className) + "-upload-" + (this.type))] = !!this.className, obj$1 ) ];
      var obj;
      var obj$1;
    },
    btnName: function btnName() {
      return [
        [("emfe-upload-" + (this.type) + "-btn")],
        ( obj = {}, obj[((this.className) + "-upload-" + (this.type) + "-btn")] = !!this.className, obj ) ];
      var obj;
    },
    fileName: function fileName() {
      return [
        [("emfe-upload-" + (this.type) + "-file")],
        ( obj = {}, obj[((this.className) + "-upload-" + (this.type) + "-file")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    change: function change(e) {
      var this$1 = this;

      var files = e.target.files;

      if (!files) {
        return;
      }

      var postFiles = Array.prototype.slice.call(files);
      console.log(postFiles);
      postFiles.forEach(function (file) {
        this$1.postHandle(file);
      });
    },
    postHandle: function postHandle(file) {
      var this$1 = this;

      // check format
      if (this.format.length) {
        var fileFormat = file.name.split('.').pop().toLocaleLowerCase();
        var checked = this.format.some(function (item) { return item.toLocaleLowerCase() === fileFormat; });
        if (!checked) {
          this.onFormatError(file, this.fileList);
          return false;
        }
      }

      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.onExceededSize(file, this.fileList);
          return false;
        }
      }

      this.handleStart(file);

      var formData = new FormData();
      formData.append(this.name, file);

      upload({
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: file,
        data: this.data,
        filename: this.name,
        action: this.action,
        onSuccess: function (res) {
          this$1.handleSuccess(res, file);
        },
        onError: function (err, response) {
          this$1.handleError(err, response, file);
        },
      });

      return false;
    },
    handleStart: function handleStart(file) {
      file.uid = Date.now() + this.tempIndex++;
      var fileData = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true,
      };
      this.fileList.push(fileData);
    },
    handleSuccess: function handleSuccess(res, file) {
      var fileData = this.getFile(file);

      if (fileData) {
        fileData.status = 'finished';
        fileData.response = res;
        this.onSuccess(res, fileData, this.fileList);
      }
    },
    handleError: function handleError(err, response, file) {
      var fileData = this.getFile(file);
      var fileList = this.fileList;

      fileData.status = 'fail';

      fileList.splice(fileList.indexOf(fileData), 1);

      this.onError(err, response, file);
    },
    getFile: function getFile(file) {
      var fileList = this.fileList;
      var target;
      fileList.every(function (item) {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
  },
};

EmfeUpload$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeUpload$1.name, EmfeUpload$1);
};

// 记录位置 x,y
var refPos = {
  x: 0,
  y: 0,
};

var EmfeDrag$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"drag",staticClass:"emfe-drag",class:_vm.dragName,style:(_vm.dragStyle),on:{"mousedown":function($event){$event.stopPropagation();_vm.down($event);},"click":function($event){$event.stopPropagation();}}},[_vm._t("default")],2)},
staticRenderFns: [],
  name: 'EmfeDrag',
  data: function data() {
    return {
      dragStyle: '',
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    limit: { // 限制范围
      type: [String, Boolean],
      default: false,
    },
    limitPosition: {
      validator: function validator(value) {
        return _.has(value, ['center', 'top']);
      },
      default: 'top',
    },
    dragEl: { // 父元素为限制，拖拽的元素
      type: Array,
    },
    initialValue: { // 初始值
      type: Number,
      default: 0,
    },
    direction: {
      validator: function validator(value) {
        return _.has(value, ['vertical', 'horizontal', 'all']);
      },
      default: 'all',
    },
    borderSize: {// 拖拽元素的边框 | 描边
      type: Number,
      default: 0,
    },
    dragDiyStyle: {
      type: String,
      default: '',
    },
  },
  computed: {
    dragName: function dragName() {
      return this.className ? ((this.className) + "-drag") : '';
    },
  },
  // 子组件 created 获取不到，所以用 mounted
  mounted: function mounted() {
    var this$1 = this;

    this.parent = this.$el.parentNode;
    this.parentLeft = getElementLeft(this.parent);
    this.parentTop = getElementTop(this.parent);
    this.parentWidth = this.parent.clientWidth;
    this.parentHeight = this.parent.clientHeight;
    this.elWidth = this.$el.clientWidth;
    this.elHeight = this.$el.clientHeight;
    this.elCenter = (this.elWidth / 2) + this.borderSize;
    this.elCenter = this.limitPosition === 'center' ? this.elCenter : 0;
    this.dragStyle = this.dragDiyStyle;
    setTimeout(function () {
      if (this$1.dragEl && this$1.dragEl.length > 0) {
        this$1.parent = this$1.dragEl[0].parentNode;
        this$1.parentLeft = getElementLeft(this$1.parent);
        this$1.parentTop = getElementTop(this$1.parent);
        this$1.parentWidth = this$1.parent.clientWidth;
        this$1.parentHeight = this$1.parent.clientHeight;
        this$1.elWidth = this$1.dragEl[0].clientWidth;
        this$1.elHeight = this$1.dragEl[0].clientHeight;
        this$1.elCenter = (this$1.elWidth / 2) + this$1.borderSize;
        this$1.elCenter = this$1.limitPosition === 'center' ? this$1.elCenter : 0;
        this$1.parentPaddingTop = parseInt(getStyle(this$1.parent, 'paddingTop'), 10);
        this$1.parentPaddingLeft = parseInt(getStyle(this$1.parent, 'paddingLeft'), 10);
      }
    }, 0);
  },
  methods: {
    down: function down(e) {
      var this$1 = this;

      this.scrollTop = document.body.scrollTop;
      this.scrollLeft = document.body.scrollLeft;
      this.elLeft = this.$el.offsetLeft;
      this.elTop = this.$el.offsetTop;
      refPos.x = e.pageX;
      refPos.y = e.pageY;
      document.addEventListener('mousemove', this.move, false);
      document.addEventListener('mouseup', this.up, false);

      var downTop = e.clientY - this.parentTop;
      var downLeft = e.clientX - this.parentLeft;

      if (this.dragEl && this.dragEl.length > 0) {
        downTop -= this.parentPaddingTop;
        downTop += this.scrollTop;
        downTop += this.initialValue;
        downLeft -= this.parentPaddingLeft;
        downLeft += this.scrollLeft;
        downLeft += this.initialValue;
        this.dragEl.forEach(function (dragElement) {
          if (this$1.direction === 'vertical') {
            dragElement.style.top = downTop + "px";
          } else if (this$1.direction === 'horizontal') {
            dragElement.style.left = downLeft + "px";
          } else {
            dragElement.style.left = downLeft + "px";
            dragElement.style.top = downTop + "px";
          }
        });
      }
      this.$emit('beforeDrag', e, downLeft, downTop);
    },
    move: function move(e) {
      var this$1 = this;

      var disPosX = e.pageX - refPos.x;
      var disPosY = e.pageY - refPos.y;

      var elLeft = 0;
      var elTop = 0;

      if (this.dragEl && this.dragEl.length > 0) {
        elTop = e.clientY - this.parentTop;
        elTop -= this.parentPaddingTop;
        elTop += this.scrollTop;
        elTop += this.initialValue;
        elLeft = e.clientX - this.parentLeft;
        elLeft -= this.parentPaddingLeft;
        elLeft += this.scrollLeft;
        elLeft += this.initialValue;
      } else {
        elLeft = this.elLeft + disPosX;
        elTop = this.elTop + disPosY;
      }

      if (this.limit) {
        if (elLeft + this.elWidth > (this.parentWidth - this.borderSize) + this.elCenter) {
          elLeft = this.parentWidth - this.elWidth;
          elLeft += this.elCenter - this.borderSize;
        } else if (elLeft < this.borderSize - this.elCenter) {
          elLeft = this.borderSize - this.elCenter;
        }
        if (elTop + this.elHeight > (this.parentHeight - this.borderSize) + this.elCenter) {
          elTop = this.parentHeight - this.elHeight;
          elTop += this.elCenter - this.borderSize;
        } else if (elTop < this.borderSize - this.elCenter) {
          elTop = this.borderSize - this.elCenter;
        }
      }

      if (this.dragEl && this.dragEl.length > 0) {
        this.dragEl.forEach(function (dragElement) {
          if (this$1.direction === 'vertical') {
            dragElement.style.top = elTop + "px";
          } else if (this$1.direction === 'horizontal') {
            dragElement.style.left = elLeft + "px";
          } else {
            dragElement.style.left = elLeft + "px";
            dragElement.style.top = elTop + "px";
          }
        });
      } else {
        this.dragStyle = "left: " + elLeft + "px; top: " + elTop + "px";
        if (this.direction === 'vertical') {
          this.dragStyle = "top: " + elTop + "px";
        } else if (this.direction === 'horizontal') {
          this.dragStyle = "left: " + elLeft + "px;";
        }
      }
      this.$emit('drag', e, elLeft, elTop);
    },
    up: function up(e) {
      document.removeEventListener('mousemove', this.move, false);
      document.removeEventListener('mouseup', this.up, false);
      this.$emit('afterDrag', e);
    },
  },
  beforeDestroy: function beforeDestroy() {
    refPos.x = 0;
    refPos.y = 0;
  },
};

EmfeDrag$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDrag$1.name, EmfeDrag$1);
};

var Color = {
  // 已知 hsb 中的 s 和 b，
  // return 坐标
  offsetSB: function offsetSB(self, hsb) {
    // 点的距离
    var pointInitial = 4;
    // 计算
    var newS = hsb.s / 100;
    var scaleS = self.colorboxSize * newS;
    var iLseft = parseInt(scaleS / 2, 10);
    var newB = (100 - hsb.b) / 100;
    var scaleB = self.colorboxSize * newB;
    var iTop = parseInt(scaleB / 2, 10);

    iTop -= pointInitial;
    iLseft -= pointInitial;

    return {
      top: iTop,
      left: iLseft,
    };
  },
  // 已知 hsb 中的 h，
  // return 坐标
  offsetH: function offsetH(self, hsb) {
    var newH = hsb.h / 360;
    var sacleH = self.colorboxSize - (self.colorboxSize * newH);
    return parseInt(sacleH / 2, 10);
  },
  // 从坐标获取 hsb 中的 s 和 b
  getSB: function getSB(self, left, top) {
    var iLeft = left * 2;
    var iTop = top * 2;
    var minLeft = Math.min(self.colorboxSize, iLeft);
    var maxLeft = Math.max(0, minLeft);
    var newLeft = 100 * (self.colorboxSize - maxLeft);
    var rgLeft = parseInt(newLeft / self.colorboxSize, 10);
    var minTop = Math.min(self.colorboxSize, iTop);
    var maxTop = Math.max(0, minTop);
    var newTop = 100 * (self.colorboxSize - maxTop);
    var rgTop = parseInt(newTop / self.colorboxSize, 10);
    return {
      s: 100 - rgLeft,
      b: rgTop,
    };
  },
  getH: function getH(self, top) {
    var size = self.colorboxSize + 6;
    var iTop = top * 2;
    var newTop = size - iTop;
    var rgB = parseInt((360 * newTop) / size, 10);
    return rgB;
  },
  hsbToRgb: function hsbToRgb(hsb) {
    var rgb = {};
    var h = hsb.h;
    var s = (hsb.s * 255) / 100;
    var v = (hsb.b * 255) / 100;
    if (s === 0) {
      rgb.r = v;
      rgb.g = v;
      rgb.b = v;
    } else {
      var t1 = v;
      var t2 = ((255 - s) * v) / 255;
      var t3 = ((t1 - t2) * (h % 60)) / 60;
      if (h === 360) {
        h = 0;
      }
      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }
    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b),
    };
  },
  rgbToHex: function rgbToHex(rgb) {
    var hex = [
      rgb.r.toString(16),
      rgb.g.toString(16),
      rgb.b.toString(16) ];
    hex.forEach(function (val, nr) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join('');
  },
  hexToRgb: function hexToRgb(hex) {
    var newHex = hex.replace(/#/, '');
    var hex16 = parseInt(newHex, 16);
    return {
      r: hex16 >> 16,
      g: (hex16 & 0x00FF00) >> 8,
      b: (hex16 & 0x0000FF),
    };
  },
  rgbToHsb: function rgbToHsb(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0,
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max !== 0 ? (255 * delta) / max : 0;
    if (hsb.s !== 0) {
      if (rgb.r === max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g === max) {
        hsb.h = 2 + ((rgb.b - rgb.r) / delta);
      } else {
        hsb.h = 4 + ((rgb.r - rgb.g) / delta);
      }
    } else {
      hsb.h = -1;
    }
    hsb.h *= 60;
    if (hsb.h < 0) {
      hsb.h += 360;
    }
    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  },
};

var EmfeColor$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-color",class:_vm.colorName},[_c('div',{ref:"btn",staticClass:"emfe-color-btn",class:_vm.btnName,on:{"click":function($event){$event.stopPropagation();_vm.toggle($event);}}},[_vm._t("default")],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.colorStatus),expression:"colorStatus"}],ref:"colorbox",staticClass:"emfe-color-box",class:_vm.boxName,style:(_vm.colorBoxStyle)},[_c('emfe-drag',{style:(_vm.rgbStyle),attrs:{"className":_vm.colorDrag,"limit":"true","dragEl":_vm.colorMove,"initialValue":-6,"borderSize":2,"limitPosition":"center"},on:{"drag":_vm.dragSB,"beforeDrag":_vm.beforeDragSB}},[_c('div',{ref:"color",staticClass:"emfe-color-inner",class:_vm.innerName,style:(_vm.pointStyle)})]),_vm._v(" "),_c('emfe-drag',{attrs:{"className":_vm.hueDrag,"dragEl":_vm.hueMove,"direction":"vertical","limit":"true"},on:{"drag":_vm.dragH,"beforeDrag":_vm.beforeDragH}},[_c('span',{ref:"hueMove",staticClass:"emfe-color-hueMove",style:(_vm.hueStyle)},[_c('i',{staticClass:"emfe-color-left"}),_vm._v(" "),_c('i',{staticClass:"emfe-color-right"})])]),_vm._v(" "),_c('div',{staticClass:"emfe-color-handle"},[_c('div',{staticClass:"emfe-color-show-color"},[_c('div',{staticClass:"emfe-color-new-color",style:(_vm.newColor)}),_vm._v(" "),_c('div',{staticClass:"emfe-color-current-color",style:(_vm.oldColor)})]),_vm._v(" "),_c('div',{staticClass:"emfe-color-field"},[_c('p',{staticClass:"emfe-color-title"},[_vm._v("R")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rgb.r),expression:"rgb.r"}],staticClass:"emfe-color-inp",attrs:{"type":"tel","maxlength":"3","size":"3"},domProps:{"value":(_vm.rgb.r)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.rgb.r=$event.target.value;},_vm.rChange]}})]),_vm._v(" "),_c('div',{staticClass:"emfe-color-field"},[_c('p',{staticClass:"emfe-color-title"},[_vm._v("G")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rgb.g),expression:"rgb.g"}],staticClass:"emfe-color-inp",attrs:{"type":"tel","maxlength":"3","size":"3"},domProps:{"value":(_vm.rgb.g)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.rgb.g=$event.target.value;},_vm.gChange]}})]),_vm._v(" "),_c('div',{staticClass:"emfe-color-field"},[_c('p',{staticClass:"emfe-color-title"},[_vm._v("B")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rgb.b),expression:"rgb.b"}],staticClass:"emfe-color-inp",attrs:{"type":"tel","maxlength":"3","size":"3"},domProps:{"value":(_vm.rgb.b)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.rgb.b=$event.target.value;},_vm.bChange]}})]),_vm._v(" "),_c('div',{staticClass:"emfe-color-field"},[_c('p',{staticClass:"emfe-color-title"},[_vm._v("#")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.hex),expression:"hex"}],staticClass:"emfe-color-inp",attrs:{"type":"tel","maxlength":"6","size":"6"},domProps:{"value":(_vm.hex)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.hex=$event.target.value;},_vm.hexChange]}})]),_vm._v(" "),_vm._m(0)])],1)])},
staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"emfe-color-sub",class:_vm.subName,on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v(_vm._s(_vm.btnText))])}],
  name: 'EmfeColor',
  data: function data() {
    return {
      colorStatus: true,
      hueMove: [],
      colorMove: [],
      hsb: {
        h: 0,
        s: 100,
        b: 100,
      },
      hsbBackground: {
        h: 0,
        s: 100,
        b: 100,
      },
      pointStyle: '',
      hueStyle: '',
      colorBoxStyle: 'opacity: 0;',
      oldColor: '',
    };
  },
  props: {
    value: { // 默认的颜色
      type: String,
      default: 'ff0000',
    },
    btnText: {
      type: String,
      default: '确定',
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    colorName: function colorName() {
      return [
        ( obj = {}, obj[((this.className) + "-color")] = !!this.className, obj ) ];
      var obj;
    },
    btnName: function btnName() {
      return [
        ( obj = {}, obj[((this.className) + "-color-btn")] = !!this.className, obj ) ];
      var obj;
    },
    boxName: function boxName() {
      return [
        ( obj = {}, obj[((this.className) + "-color-box")] = !!this.className, obj ) ];
      var obj;
    },
    colorDrag: function colorDrag() {
      var name = this.className ? ("emfe-color-drag " + (this.className) + "-color") : 'emfe-color';
      return name;
    },
    innerName: function innerName() {
      return [
        ( obj = {}, obj[((this.className) + "-inner")] = !!this.className, obj ) ];
      var obj;
    },
    hueDrag: function hueDrag() {
      var name = this.className ? ("emfe-color-hue-drag " + (this.className) + "-hue") : 'emfe-color-hue';
      return name;
    },
    subName: function subName() {
      return [
        ( obj = {}, obj[((this.className) + "-sub")] = !!this.className, obj ) ];
      var obj;
    },
    rgb: function rgb() {
      return Color.hsbToRgb(this.hsb);
    },
    rgbBackground: function rgbBackground() {
      return Color.hsbToRgb(this.hsbBackground);
    },
    rgbStyle: function rgbStyle() {
      return ("background-color: rgb(" + (this.rgbBackground.r) + ", " + (this.rgbBackground.g) + ", " + (this.rgbBackground.b) + ")");
    },
    hex: function hex() {
      return Color.rgbToHex(this.rgb);
    },
    newColor: function newColor() {
      return ("background: #" + (this.hex));
    },
  },
  beforeMount: function beforeMount() {
    this.hsb = Color.rgbToHsb(Color.hexToRgb(this.value));
    this.hsbBackground = this.hsb;
  },
  mounted: function mounted() {
    var this$1 = this;

    var ref = this.$refs;
    var hueMove = ref.hueMove;
    var color = ref.color;
    var colorbox = ref.colorbox;
    var btn = ref.btn;
    var colorboxPadding = 8;
    var colorBoxLeft = btn.clientWidth + colorboxPadding;
    this.hueMove.push(hueMove);
    this.colorMove.push(color);
    this.colorboxTop = getElementTop(colorbox);
    this.colorboxLeft = getElementLeft(colorbox);
    this.colorboxSize = colorbox.clientWidth - (colorboxPadding * 2);
    this.oldColor = this.newColor;
    this.colorBoxStyle = "opacity: 0; left: " + colorBoxLeft + "px";
    setTimeout(this.close.bind(this), 0);
    setTimeout(function () {
      this$1.colorBoxStyle = "opacity: 1; left: " + colorBoxLeft + "px";
      // 定位点
      this$1.colorComputed();
    }, 10);
    // 绑定
    document.addEventListener('click', this.cancel.bind(this), false);
  },
  methods: {
    beforeDragSB: function beforeDragSB(e, left, top) {
      var sb = Color.getSB(this, left, top);
      this.hsb.s = sb.s;
      this.hsb.b = sb.b;
      this.$emit('change', this.hex);
    },
    dragSB: function dragSB(e, left, top) {
      this.beforeDragSB(e, left, top);
    },
    beforeDragH: function beforeDragH(e, left, top) {
      this.hsb.h = Color.getH(this, top);
      this.hsbBackground.h = Color.getH(this, top);
      this.$emit('change', this.hex);
    },
    dragH: function dragH(e, left, top) {
      this.beforeDragH(e, left, top);
    },
    rChange: function rChange(e) {
      var ref = e.target;
      var value = ref.value;
      this.rgb.r = parseInt(value, 10);
      this.setPoint(this.rgb);
    },
    gChange: function gChange(e) {
      var ref = e.target;
      var value = ref.value;
      this.rgb.g = parseInt(value, 10);
      this.setPoint(this.rgb);
    },
    bChange: function bChange(e) {
      var ref = e.target;
      var value = ref.value;
      this.rgb.b = parseInt(value, 10);
      this.setPoint(this.rgb);
    },
    hexChange: function hexChange(e) {
      var ref = e.target;
      var value = ref.value;
      this.setPoint(Color.hexToRgb(value));
    },
    setPoint: function setPoint(rgb) {
      this.hsb = Color.rgbToHsb(rgb);
      this.hsbBackground.h = this.hsb.h;
      this.colorComputed();
    },
    colorComputed: function colorComputed() {
      // 定位点
      var sbComputed = Color.offsetSB(this, this.hsb);
      var hComputed = Color.offsetH(this, this.hsb);
      this.pointStyle = "left: " + (sbComputed.left) + "px; top: " + (sbComputed.top) + "px;";
      this.hueStyle = "top: " + hComputed + "px;";
    },
    toggle: function toggle() {
      this.colorStatus = !this.colorStatus;
    },
    ok: function ok() {
      this.close();
      this.oldColor = this.newColor;
      this.$emit('ok', this.hex);
    },
    cancel: function cancel() {
      this.close();
      this.$emit('cancel', this.hex);
    },
    close: function close() {
      this.colorStatus = false;
    },
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.cancel);
  },
};

EmfeColor$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeColor$1.name, EmfeColor$1);
};

var prefixCls$3 = 'emfe-input-box';

var EmfeInput$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-input",class:_vm.addClass},[_c('div',{class:[_vm.classList]},[(_vm.iconOk)?_c('emfe-icon',{attrs:{"type":_vm.iconType,"className":"emfe-input-box-icon-el"}}):_vm._e(),_vm._v(" "),_c('input',_vm._b({staticClass:"emfe-input-box-input",class:{error:_vm.errOk},attrs:{"type":_vm.type},domProps:{"value":_vm.currentValue},on:{"input":_vm.change}},'input',_vm.$props))],1),_vm._v(" "),(_vm.errOk)?_c('div',{staticClass:"emfe-input-box-text"},[_vm._t("error")],2):_vm._e()])},
staticRenderFns: [],
  name: 'input',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    disabled: {
      type: [Boolean],
      default: false,
    },
    autofocus: {
      type: [Boolean],
      default: false,
    },
    errOk: {
      type: [Boolean],
      default: false,
    },
    iconOk: {
      type: [Boolean],
      default: false,
    },
    iconType: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data: function data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    classList: function classList() {
      return this.iconOk ? (prefixCls$3 + "-icon") : ("" + prefixCls$3);
    },
    addClass: function addClass() {
      return [
        ( obj = {}, obj[((this.className) + "-input")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    change: function change() {
      var val = event.target.value;
      if (val === this.currentValue) { return; }
      this.currentValue = val;
      this.$emit('change', this.currentValue);
    },
  },
};

EmfeInput$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeInput$1.name, EmfeInput$1);
};

var getDayCountOfMonth = function (year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  } else if (month === 1) {
    if (((year % 4 === 0) && (year % 100 !== 0)) || year % 400 === 0) {
      return 29;
    }
    return 28;
  }
  return 31;
};

var clearHours = function (time) {
  if ( time === void 0 ) time = '';

  var cloneDate = new Date(time);
  cloneDate.setHours(0, 0, 0, 0);
  return cloneDate.getTime();
};

var initTimeDate = function () {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};

// 日期里面只有 42 天（上月 | 本月 | 下月）
var allDays = 42;
// 年份里每页只有 10 年
var allYears = 10;

var EmfeDate$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-date",class:_vm.dateName},[(!_vm.open)?_c('button',{staticClass:"emfe-date-btn",on:{"click":function($event){$event.stopPropagation();_vm.toggle($event);}}},[_c('span',{staticClass:"emfe-date-btn-text",class:{'emfe-date-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.date))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"hint","className":"emfe-date"},on:{"icon-click":_vm.toggle}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"qr","className":"emfe-date"},on:{"icon-click":_vm.cancel}})],1):_vm._e(),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-date-box",class:{'emfe-date-box-position': !_vm.open}},[_c('div',{staticClass:"emfe-date-header"},[_c('button',{staticClass:"emfe-date-prevyear",on:{"click":function($event){$event.stopPropagation();_vm.prevYear($event);}}},[_vm._v("<<")]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"emfe-date-prevmonth",on:{"click":function($event){$event.stopPropagation();_vm.prevMonth($event);}}},[_vm._v("<")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"emfe-date-text"},[_c('i',{staticClass:"emfe-date-text-year",on:{"click":function($event){$event.stopPropagation();_vm.yearHandle($event);}}},[_vm._v(_vm._s(_vm.year))]),_vm._v(" "),_c('em',[_vm._v("-")]),_vm._v(" "),_c('i',{staticClass:"emfe-date-text-month",on:{"click":function($event){$event.stopPropagation();_vm.monthHandle($event);}}},[_vm._v(_vm._s(_vm.month+1))])]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'month'),expression:"currentView === 'month'"}],staticClass:"emfe-date-text"},[_c('i',{staticClass:"emfe-date-text-year",on:{"click":function($event){$event.stopPropagation();_vm.yearHandle($event);}}},[_vm._v(_vm._s(_vm.year))])]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'year'),expression:"currentView === 'year'"}],staticClass:"emfe-date-text"},[_c('i',{staticClass:"emfe-date-text-yearrange",on:{"click":function($event){$event.stopPropagation();_vm.yearHandle($event);}}},[_vm._v(_vm._s(_vm.startYear)+" - "+_vm._s(_vm.years[_vm.years.length - 1]))])]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"emfe-date-nextmonth",on:{"click":function($event){$event.stopPropagation();_vm.nextMonth($event);}}},[_vm._v(">")]),_vm._v(" "),_c('button',{staticClass:"emfe-date-nextyear",on:{"click":function($event){$event.stopPropagation();_vm.nextYear($event);}}},[_vm._v(">>")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}]},[_c('div',{staticClass:"emfe-date-week"},[_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("日")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("一")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("二")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("三")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("四")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("五")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("六")])]),_vm._v(" "),_c('div',{staticClass:"emfe-date-day"},[_vm._l((_vm.lastMonthDays),function(day){return _c('span',{staticClass:"emfe-date-item emfe-date-item-prev",class:{'emfe-date-item-disable': day.undo},on:{"click":function($event){$event.stopPropagation();_vm.choicePrevMonthDay(day);}}},[_vm._v(_vm._s(day.num))])}),_vm._v(" "),_vm._l((_vm.days),function(day){return _c('span',{staticClass:"emfe-date-item",class:{'emfe-date-item-disable': day.undo, 'emfe-date-today': day.today, 'emfe-date-choice': day.choice},on:{"click":function($event){$event.stopPropagation();_vm.choiceDay(day);}}},[_vm._v(_vm._s(day.num))])}),_vm._v(" "),_vm._l((_vm.nextMonthDays),function(day){return _c('span',{staticClass:"emfe-date-item emfe-date-item-prev",class:{'emfe-date-item-disable': day.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceNextMonthDay(day);}}},[_vm._v(_vm._s(day.num))])})],2)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'month'),expression:"currentView === 'month'"}],staticClass:"emfe-date-month"},_vm._l((_vm.months),function(month){return _c('span',{staticClass:"emfe-date-month-item",on:{"click":function($event){$event.stopPropagation();_vm.choiceMonth(month);}}},[_vm._v(_vm._s(month))])})),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'year'),expression:"currentView === 'year'"}],staticClass:"emfe-date-year"},_vm._l((_vm.years),function(year){return _c('span',{staticClass:"emfe-date-year-item",on:{"click":function($event){$event.stopPropagation();_vm.choiceYear(year);}}},[_vm._v(_vm._s(year))])})),_vm._v(" "),(_vm.confirm)?_c('div',{staticClass:"emfe-date-footer"},[_c('button',{staticClass:"emfe-date-ok",on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v("确定")])]):_vm._e()])])],1)},
staticRenderFns: [],
  name: 'EmfeDate',
  data: function data() {
    return {
      currentView: 'date',
      today: initTimeDate(),
      startYear: null,
      year: null,
      month: null,
      day: null,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      date: this.placeholder,
      status: this.open,
    };
  },
  props: {
    format: {
      type: String,
      default: '/',
    },
    // 默认文案
    placeholder: {
      type: String,
      default: '选择日期',
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    // 默认显示
    open: {
      type: Boolean,
      default: false,
    },
    // 参数
    disabledDate: {
      type: Function,
      default: function () { return false; },
    },
    className: String,
  },
  computed: {
    dateName: function dateName() {
      return [
        ( obj = {}, obj[((this.className) + "-date")] = !!this.className, obj ) ];
      var obj;
    },
    lastMonthDays: function lastMonthDays() {
      var this$1 = this;

      var date = new Date(this.year, this.month, 1);
      var maxDaysNum = date.getDay();
      var handleMonth = date.getMonth() === 0 ? 11 : date.getMonth() - 1;
      var dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), handleMonth);
      var lastMonth = this.month - 1;
      var days = [];
      for (var i = 0; i < maxDaysNum; i++) {
        days.unshift({
          num: dateCountOfLastMonth - i,
          undo: this$1.disabledDate(new Date(this$1.year,
            lastMonth,
            dateCountOfLastMonth - i)),
        });
      }
      return days;
    },
    days: function days() {
      var this$1 = this;

      var days = [];
      var len = getDayCountOfMonth(this.year, this.month) + 1;
      var now = clearHours(new Date());
      var choiceNow = clearHours(new Date(this.date));

      for (var i = 1; i < len; i++) {
        var loopNow = new Date(this$1.year, this$1.month, i);
        days.push({
          num: i,
          undo: this$1.disabledDate(loopNow),
          today: clearHours(loopNow) === now,
          choice: clearHours(loopNow) === choiceNow,
        });
      }

      return days;
    },
    nextMonthDays: function nextMonthDays() {
      var this$1 = this;

      var days = [];
      var len = allDays - this.lastMonthDays.length - this.days.length;
      var nextMonth = this.month + 1;

      len += 1;

      for (var i = 1; i < len; i++) {
        days.push({
          num: i,
          undo: this$1.disabledDate(new Date(this$1.year,
            nextMonth,
            i)),
        });
      }

      return days;
    },
    // 年
    years: function years() {
      this.startYear = Math.floor(this.year / allYears, 10) * allYears;
      var years = [];
      for (var i = this.startYear, len = this.startYear + allYears; i < len; i++) {
        years.push(i);
      }
      return years;
    },
    choiced: function choiced() {
      return this.date !== this.placeholder;
    },
  },
  mounted: function mounted() {
    if (this.today && !this.year) {
      this.year = this.today.getFullYear();
      this.month = this.today.getMonth();
    }
  },
  methods: {
    resetDate: function resetDate() {
      this.today = new Date(this.today);
    },
    prevYear: function prevYear() {
      if (this.currentView === 'year') {
        this.year -= allYears;
      } else {
        this.year--;
        this.today.setFullYear(this.year);
        this.resetDate();
      }
    },
    nextYear: function nextYear() {
      if (this.currentView === 'year') {
        this.year += allYears;
      } else {
        this.year++;
        this.today.setFullYear(this.year);
        this.resetDate();
      }
    },
    prevMonth: function prevMonth() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
    },
    nextMonth: function nextMonth() {
      this.month++;
      if (this.month > 11) {
        this.month = 0;
        this.year++;
      }
    },
    yearHandle: function yearHandle() {
      this.currentView = 'year';
    },
    monthHandle: function monthHandle() {
      this.currentView = 'month';
    },
    choiceYear: function choiceYear(year) {
      this.monthHandle();
      this.year = year;
    },
    choiceMonth: function choiceMonth(month) {
      this.currentView = 'date';
      this.month = month - 1;
    },
    choiceDay: function choiceDay(day) {
      // 如果可选
      if (!day.undo) {
        this.day = day.num > 9 ? day.num : ("0" + (day.num));
        var month = this.month + 1 > 9 ? this.month + 1 : ("0" + (this.month + 1));
        this.date = "" + (this.year) + (this.format) + month + (this.format) + (this.day);
        // 如果有确定按钮
        if (!this.confirm) {
          this.$emit('choice', this.date);
        } else {
          this.ok();
        }
      }
    },
    choicePrevMonthDay: function choicePrevMonthDay(day) {
      this.prevMonth();
      this.choiceDay(day);
    },
    choiceNextMonthDay: function choiceNextMonthDay(day) {
      this.nextMonth();
      this.choiceDay(day);
    },
    toggle: function toggle() {
      this.status = !this.status;
    },
    ok: function ok() {
      this.close(true);
      this.$emit('ok', this.date);
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.date);
        }
        this.status = false;
      }
    },
    cancel: function cancel() {
      this.date = this.placeholder;
      this.$emit('cancel', this.date);
    },
  },
};

EmfeDate$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDate$1.name, EmfeDate$1);
};

var timeObject = {
  zeroFill: function zeroFill(time) {
    return time < 10 ? ("0" + time) : time.toString();
  },
  handleConputedTime: function (i, times) {
    var newTimes = {
      num: timeObject.zeroFill(i),
      undo: false,
    };
    if (times.length > 0) {
      times.every(function (time) {
        var newTime = timeObject.zeroFill(time);
        newTimes.undo = newTime === newTimes.num;
        return !newTimes.undo;
      });
    }
    return newTimes;
  },
  loopChoice: function (times) {
    var newUndo = true;
    times.every(function (time) {
      newUndo = time.num;
      return time.undo;
    });
    return newUndo;
  },
};

var hourNum = 24;
var minuteNum = 60;
var secondNum = 60;
// const zero = '00';

var EmfeTime$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-time",class:_vm.timeName},[(!_vm.open)?_c('button',{staticClass:"emfe-time-btn",on:{"click":_vm.toggle}},[_c('span',{staticClass:"emfe-time-btn-text",class:{'emfe-time-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.time))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"hint","className":"emfe-time"},on:{"icon-click":_vm.toggle}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"qr","className":"emfe-time"},on:{"icon-click":_vm.cancel}})],1):_vm._e(),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-time-box",class:{'emfe-time-box-position': !_vm.open}},[_c('div',{staticClass:"emfe-time-main"},[_c('div',{staticClass:"emfe-time-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-time-list"},_vm._l((_vm.hours),function(hourLoop){return _c('li',{staticClass:"emfe-time-list-item",class:{'emfe-time-list-item-on': hourLoop.num === _vm.hour, 'emfe-time-list-item-disable': hourLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceHour(hourLoop);}}},[_vm._v(_vm._s(hourLoop.num))])}))]),_vm._v(" "),_c('div',{staticClass:"emfe-time-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-time-list"},_vm._l((_vm.minutes),function(minuteLoop){return _c('li',{staticClass:"emfe-time-list-item",class:{'emfe-time-list-item-on': minuteLoop.num === _vm.minute, 'emfe-time-list-item-disable': minuteLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceMinute(minuteLoop);}}},[_vm._v(_vm._s(minuteLoop.num))])}))]),_vm._v(" "),_c('div',{staticClass:"emfe-time-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-time-list"},_vm._l((_vm.seconds),function(secondLoop,secondIndex){return _c('li',{staticClass:"emfe-time-list-item",class:{'emfe-time-list-item-on': secondLoop.num === _vm.second, 'emfe-time-list-item-disable': secondLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceSecond(secondLoop);}}},[_vm._v(_vm._s(secondLoop.num))])}))])]),_vm._v(" "),(_vm.confirm)?_c('div',{staticClass:"emfe-time-footer"},[_c('button',{staticClass:"emfe-time-ok",on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v("确定")])]):_vm._e()])])],1)},
staticRenderFns: [],
  name: 'EmfeTime',
  data: function data() {
    return {
      hours: [],
      minutes: [],
      seconds: [],
      hour: '',
      minute: '',
      second: '',
      choiced: false,
      status: this.open,
    };
  },
  props: {
    // 默认文案
    placeholder: {
      type: String,
      default: '选择时间',
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    // 默认显示
    open: {
      type: Boolean,
      default: false,
    },
    // 禁用小时
    disabledHours: {
      type: Array,
      default: function () { return []; },
    },
    // 禁用分钟
    disabledMinutes: {
      type: Array,
      default: function () { return []; },
    },
    // 禁用秒
    disabledSeconds: {
      type: Array,
      default: function () { return []; },
    },
    className: String,
  },
  computed: {
    timeName: function timeName() {
      return [
        ( obj = {}, obj[((this.className) + "-time")] = !!this.className, obj ) ];
      var obj;
    },
    itemName: function itemName() {
      return [
        ( obj = {}, obj[((this.className) + "-item")] = !!this.className, obj ) ];
      var obj;
    },
    time: function time() {
      var time = this.placeholder;
      if (this.choiced) {
        time = (this.hour) + ":" + (this.minute) + ":" + (this.second);
      }
      return time;
    },
  },
  mounted: function mounted() {
    var this$1 = this;

    for (var i = 0; i < hourNum; i++) {
      this$1.hours.push(timeObject.handleConputedTime(i, this$1.disabledHours));
    }
    for (var i$1 = 0; i$1 < minuteNum; i$1++) {
      this$1.minutes.push(timeObject.handleConputedTime(i$1, this$1.disabledMinutes));
    }
    for (var i$2 = 0; i$2 < secondNum; i$2++) {
      this$1.seconds.push(timeObject.handleConputedTime(i$2, this$1.disabledSeconds));
    }
  },
  methods: {
    setChoice: function setChoice() {
      if (!this.choiced) {
        this.hour = timeObject.loopChoice(this.hours, this.hour);
        this.minute = timeObject.loopChoice(this.minutes, this.minute);
        this.second = timeObject.loopChoice(this.seconds, this.second);
        this.choiced = true;
      }
    },
    choiceHour: function choiceHour(hour) {
      if (!hour.undo) {
        this.setChoice();
        this.hour = hour.num;
        this.$emit('choice', this.time);
      }
    },
    choiceMinute: function choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.$emit('choice', this.time);
      }
    },
    choiceSecond: function choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.$emit('choice', this.time);
      }
    },
    toggle: function toggle() {
      this.status = !this.status;
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.date);
        }
        this.status = false;
      }
    },
    ok: function ok() {
      this.close(true);
      this.$emit('ok', this.time);
    },
    cancel: function cancel() {
      this.choiced = false;
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.$emit('cancel', this.time);
    },
  },
};

EmfeTime$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTime$1.name, EmfeTime$1);
};

var zero = '00';
var timeZero = zero + ":" + zero + ":" + zero;
var timeText = '选择时间';
var dateText = '选择日期';

var EmfeDatetime$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-datetime"},[_c('button',{staticClass:"emfe-datetime-btn",on:{"click":function($event){$event.stopPropagation();_vm.toggle($event);}}},[_c('span',{staticClass:"emfe-datetime-btn-text",class:{'emfe-datetime-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.dateTime))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"hint","className":"emfe-datetime"},on:{"icon-click":_vm.toggle}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"qr","className":"emfe-datetime"},on:{"icon-click":_vm.cancel}})],1),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-datetime-main emfe-datetime-main-position"},[_c('div',{staticClass:"emfe-datetime-type"},[_c('emfe-date',{directives:[{name:"show",rawName:"v-show",value:(_vm.isDate),expression:"isDate"}],ref:"date",attrs:{"format":_vm.formatDate,"open":true,"confirm":false,"disabledDate":_vm.disabledDate},on:{"choice":_vm.choiceDate}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isDate),expression:"!isDate"}],staticClass:"emfe-datetime-time"},[_c('div',{staticClass:"emfe-datetime-time-header"},[_vm._v(_vm._s(_vm.date))]),_vm._v(" "),_c('emfe-time',{ref:"time",attrs:{"className":"emfe-datetime","open":true,"confirm":false,"disabledHours":_vm.disabledHours,"disabledMinutes":_vm.disabledMinutes,"disabledSeconds":_vm.disabledSeconds},on:{"choice":_vm.choiceTime}})],1)],1),_vm._v(" "),_c('div',{staticClass:"emfe-datetime-footer"},[_c('button',{staticClass:"emfe-datetime-settype",on:{"click":_vm.typeToggle}},[_vm._v(_vm._s(_vm.typeText))]),_vm._v(" "),_c('button',{staticClass:"emfe-datetime-ok",on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v("确定")])])])])],1)},
staticRenderFns: [],
  name: 'EmfeDatetime',
  data: function data() {
    return {
      date: '',
      time: timeZero,
      choiced: false,
      isDate: true,
      typeText: timeText,
      status: false,
    };
  },
  props: {
    formatDate: {
      type: String,
      default: '/',
    },
    // 默认文案
    placeholder: {
      type: String,
      default: '选择日期和时间',
    },
    // 参数
    disabledDate: {
      type: Function,
      default: function () { return false; },
    },
    // 禁用小时
    disabledHours: {
      type: Array,
      default: function () { return []; },
    },
    // 禁用分钟
    disabledMinutes: {
      type: Array,
      default: function () { return []; },
    },
    // 禁用秒
    disabledSeconds: {
      type: Array,
      default: function () { return []; },
    },
  },
  computed: {
    dateTime: function dateTime() {
      var newDateTime = this.placeholder;

      if (this.date) {
        newDateTime = (this.date) + " " + (this.time);
      }

      if (!this.date && this.time !== timeZero) {
        var today = initTimeDate();
        var day = today.getDate();
        this.date = (today.getFullYear()) + "/" + (today.getMonth() + 1) + "/" + day;

        this.$refs.date.choiceDay({
          num: day,
          undo: false,
        });
        newDateTime = (this.date) + " " + (this.time);
      }
      return newDateTime;
    },
  },
  methods: {
    choiceDate: function choiceDate(date) {
      this.date = date;
      this.choiced = true;
      this.$emit('choice-date', this.dateTime);
    },
    choiceTime: function choiceTime(time) {
      this.time = time;
      this.choiced = true;
      this.$emit('choice-time', this.dateTime);
    },
    cancel: function cancel() {
      this.date = '';
      this.time = timeZero;
      this.choiced = false;
      // 让日期组件恢复初始状态
      this.$refs.date.cancel();
      // 让日期组件恢复初始状态
      this.$refs.time.cancel();
      this.$emit('cancel', this.dateTime);
    },
    ok: function ok() {
      this.close(true);
      this.$emit('ok', this.dateTime);
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.dateTime);
        }
        this.status = false;
      }
    },
    typeToggle: function typeToggle() {
      this.typeText = this.isDate ? dateText : timeText;
      this.isDate = !this.isDate;
      if (!this.date && this.time === timeZero) {
        var today = initTimeDate();
        var day = today.getDate();
        this.date = (today.getFullYear()) + "/" + (today.getMonth() + 1) + "/" + day;
      }
    },
    toggle: function toggle() {
      this.status = !this.status;
    },
  },
};

EmfeDatetime$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDatetime$1.name, EmfeDatetime$1);
};

var EmfeLink$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.hasUrl || _vm.emptyRouters)?_c('a',{staticClass:"emfe-link",class:_vm.linkName,attrs:{"href":_vm.emptyRouters ? 'javascript:;' : _vm.routers.url},on:{"click":_vm.click}},[_vm._t("default")],2):_c('router-link',{staticClass:"emfe-link",class:_vm.linkName,attrs:{"tag":_vm.tag,"to":_vm.routers}},[_vm._t("default")],2)},
staticRenderFns: [],
  name: 'emfe-link',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    routers: {
      type: Object,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    linkName: function linkName() {
      return this.className ? ((this.className) + "-link") : '';
    },
    emptyRouters: function emptyRouters() {
      return JSON.stringify(this.routers) === '{}';
    },
    hasUrl: function hasUrl() {
      var emptyJson = true;
      if (!this.emptyRouters) {
        emptyJson = O.hOwnProperty(this.routers, 'url');
      }
      return emptyJson;
    },
  },
  methods: {
    click: function click() {
      this.$emit('click');
    },
  },
};

EmfeLink$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeLink$1.name, EmfeLink$1);
};

var prefixCls$4 = 'emfe-switch';
var EmfeSwitch$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.switchName,attrs:{"disabled":_vm.disabled},on:{"click":_vm.toggle}},[_c('span',{class:_vm.innerClass},[(_vm.currentValue)?_vm._t("open"):_vm._e(),_vm._v(" "),(!_vm.currentValue)?_vm._t("close"):_vm._e()],2)])},
staticRenderFns: [],
  name: 'EmfeSwitch',
  props: {
    className: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: function data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    switchName: function switchName() {
      return [
        ("" + prefixCls$4),
        ( obj = {}, obj[(prefixCls$4 + "-" + (this.className))] = !!this.className, obj[(prefixCls$4 + "-checked")] = !!this.currentValue, obj[(prefixCls$4 + "-disabled")] = !!this.disabled, obj ) ];
      var obj;
    },
    innerClass: function innerClass() {
      return [
        (prefixCls$4 + "-inner"),
        ( obj = {}, obj[(prefixCls$4 + "-" + (this.className) + "-inner")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    toggle: function toggle() {
      if (!this.disabled) {
        var checked = !this.currentValue;
        this.currentValue = checked;
        this.$emit('toggle', checked);
      }
    },
  },
};

EmfeSwitch$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeSwitch$1.name, EmfeSwitch$1);
};

var prefixCls$5 = 'emfe-title';

var EmfeTitle$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-title",class:_vm.titleName},[_c('div',{staticClass:"emfe-title-panel"},[_vm._t("default")],2)])},
staticRenderFns: [],
  name: 'EmfeTitle',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    titleName: function titleName() {
      return [
        ( obj = {}, obj[(prefixCls$5 + "-" + (this.className))] = !!this.className, obj ) ];
      var obj;
    },
  },
};

EmfeTitle$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTitle$1.name, EmfeTitle$1);
};

var EmfeRadio = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"emfe-radio clearfix",class:{'emfe-radio-checked': _vm.status}},[_c('input',{staticClass:"emfe-radio-input",attrs:{"type":"radio","name":_vm.name,"disabled":_vm.disabled},on:{"change":_vm.change}}),_vm._v(" "),_c('span',{staticClass:"emfe-radio-text"},[_vm._t("default")],2)])},
staticRenderFns: [],
    name: 'EmfeRadio',
    data: function data() {
      return {
        status: false,
      };
    },
    props: {
      index: {
        tyep: String,
        required: true,
      },
      name: {
        type: String,
      },
      disabled: {
        type: Boolean,
      },
    },
    methods: {
      change: function change() {
        var this$1 = this;

        this.$parent.$children.forEach(function (element) {
          element.status = this$1.index === element.index;
        });
      },
    },
  };

var EmfeRadioGroup = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-radio-group"},[_vm._t("default")],2)},
staticRenderFns: [],
    name: 'EmfeRadioGroup',
  };

/* istanbul ignore next */
EmfeRadio.install = function (Vue$$1) {
  Vue$$1.component(EmfeRadio.name, EmfeRadio);
};
/* istanbul ignore next */
EmfeRadioGroup.install = function (Vue$$1) {
  Vue$$1.component(EmfeRadioGroup.name, EmfeRadioGroup);
};

var Radio = {
  EmfeRadio: EmfeRadio,
  EmfeRadioGroup: EmfeRadioGroup,
};

var prefixCls$6 = 'emfe-button';
var EmfeButton = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"emfe-button",class:_vm.buttonName,attrs:{"disabled":_vm.disabled},on:{"click":function($event){$event.stopPropagation();_vm.change($event);}}},[(_vm.type)?_c('emfe-icon',{staticClass:"emfe-button-icon",attrs:{"type":_vm.type}}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"emfe-button-text",class:_vm.textName},[_vm._t("default")],2)],1)},
staticRenderFns: [],
  name: 'EmfeButton',
  data: function data() {
    return {
      status: false,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    index: {
      tyep: String,
    },
    statu: {
      tyep: Boolean,
    },
  },
  created: function created() {
    this.status = this.statu;
  },
  computed: {
    buttonName: function buttonName() {
      return [
        ( obj = {}, obj[(prefixCls$6 + "-" + (this.className))] = !!this.className, obj[(prefixCls$6 + "-on")] = !!this.status, obj ) ];
      var obj;
    },
    textName: function textName() {
      return [
        ( obj = {}, obj[((this.className) + "-button-text")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    change: function change() {
      var this$1 = this;

      var index = this.index ? this.index : 0;
      this.$parent.$children.forEach(function (element) {
        if (this$1.index) {
          element.status = this$1.index === element.index;
        }
      });
      this.$emit('click', index);
    },
  },
};

var EmfeButtonGroup = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-button-group"},[_vm._t("default")],2)},
staticRenderFns: [],
    name: 'EmfeButtonGroup',

  };

/* istanbul ignore next */
EmfeButton.install = function (Vue$$1) {
  Vue$$1.component(EmfeButton.name, EmfeButton);
};
/* istanbul ignore next */
EmfeButtonGroup.install = function (Vue$$1) {
  Vue$$1.component(EmfeButtonGroup.name, EmfeButtonGroup);
};

var Button = {
  EmfeButton: EmfeButton,
  EmfeButtonGroup: EmfeButtonGroup,
};

var EmfePagination$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-pagination"},[_c('ul',[(_vm.pageCount > 1)?_c('li',{staticClass:"emfe-pagination-item",class:{disabled: _vm.curPage == 1},on:{"click":_vm.prevPage}},[_vm._v("上一页")]):_vm._e(),_vm._v(" "),_c('li',{staticClass:"emfe-pagination-item",class:{'emfe-pagination-item-on': _vm.curPage == 1},on:{"click":function($event){_vm.page(1);}}},[_vm._v("1")]),_vm._v(" "),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.curPage > 5 && _vm.pageCount > 10),expression:"curPage > 5 && pageCount > 10"}],staticClass:"emfe-pagination-item"},[_vm._v("...")]),_vm._v(" "),_vm._l((_vm.middlePages),function(item,index){return _c('li',{staticClass:"emfe-pagination-item",class:{'emfe-pagination-item-on': _vm.curPage == index+_vm.offset},on:{"click":function($event){_vm.page(index+_vm.offset);}}},[_vm._v(_vm._s(index+_vm.offset))])}),_vm._v(" "),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.curPage < _vm.bigLimit && _vm.pageCount > 10),expression:"curPage < bigLimit && pageCount > 10"}],staticClass:"emfe-pagination-item"},[_vm._v("...")]),_vm._v(" "),(_vm.pageCount > 1)?_c('li',{staticClass:"emfe-pagination-item",class:{'emfe-pagination-item-on': _vm.curPage == _vm.pageCount},on:{"click":function($event){_vm.page(_vm.pageCount);}}},[_vm._v(_vm._s(_vm.pageCount))]):_vm._e(),_vm._v(" "),(_vm.pageCount > 1)?_c('li',{staticClass:"emfe-pagination-item",class:{disabled: _vm.curPage == _vm.pageCount},on:{"click":_vm.nextPage}},[_vm._v("下一页")]):_vm._e()],2)])},
staticRenderFns: [],
  props: ['pageCount'],
  data: function data() {
    return {
      curPage: 1,
    };
  },
  computed: {
    middlePages: function middlePages() {
      var num;
      if (this.pageCount <= 2) {
        num = 0;
      } else if (this.pageCount > 2 && this.pageCount <= 10) {
        num = this.pageCount - 2;
      } else {
        num = this.curPage > 999 ? 2 : 5;
      }
      return num;
    },
    bigLimit: function bigLimit() {
      return this.middlePages > 5 ? this.pageCount - 6 : this.pageCount - 3;
    },
    offset: function offset() {
      var curNum;
      if (this.curPage <= 5) {
        curNum = 2;
      } else if (this.curPage >= this.bigLimit) {
        curNum = this.bigLimit - 2;
      } else {
        curNum = this.middlePages > 5 ? this.curPage - 3 : this.curPage - 2;
      }
      return curNum;
    },
  },
  methods: {
    page: function page(indexPage) {
      this.$emit('togglePage', indexPage);
      this.curPage = indexPage;
    },
    prevPage: function prevPage() {
      if (this.curPage !== 1) {
        this.page(this.curPage - 1);
      }
    },
    nextPage: function nextPage() {
      if (this.curPage !== this.pageCount) {
        this.page(this.curPage + 1);
      }
    },
  },
};

EmfePagination$1.install = function (Vue$$1) {
  Vue$$1.component(EmfePagination$1.name, EmfePagination$1);
};

var EmfeSelect$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-select"},[_c('input',{staticClass:"emfe-input-box-input",attrs:{"type":"text","readonly":"","placeholder":_vm.selectText},domProps:{"value":_vm.checkVals},on:{"click":_vm.inpcheck}}),_vm._v(" "),(_vm.flagCheck)?_c('div',{staticClass:"emfe-select-flag"},[(_vm.seleStu==='newList')?_c('div',{staticClass:"emfe-select-custab"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newListVal),expression:"newListVal"}],staticClass:"emfe-input-box-input",attrs:{"type":"text","placeholder":_vm.addText},domProps:{"value":(_vm.newListVal)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newListVal=$event.target.value;}}}),_c('span',{staticClass:"emfe-select-custab-btn",on:{"click":_vm.newListBtn}},[_vm._v("保存")])]):_vm._e(),_vm._v(" "),_vm._l((_vm.checkList),function(item){return (_vm.type==='radio')?_c('label',{staticClass:"emfe-select-label"},[_c('span',{staticClass:"emfe-select-text"},[_vm._v(_vm._s(item.name))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkVals),expression:"checkVals"}],staticClass:"emfe-checkout-box-input",attrs:{"disabled":item.disabled,"type":"radio"},domProps:{"value":item.name,"checked":_vm._q(_vm.checkVals,item.name)},on:{"__c":function($event){_vm.checkVals=item.name;}}})]):_vm._e()}),_vm._v(" "),_vm._l((_vm.checkList),function(item){return (_vm.type==='checkbox')?_c('label',{staticClass:"emfe-select-label"},[_c('span',{staticClass:"emfe-select-text"},[_vm._v(_vm._s(item.name))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkVals),expression:"checkVals"}],staticClass:"emfe-checkout-box-input",attrs:{"disabled":item.disabled,"type":"checkbox"},domProps:{"value":item.name,"checked":Array.isArray(_vm.checkVals)?_vm._i(_vm.checkVals,item.name)>-1:(_vm.checkVals)},on:{"__c":function($event){var $$a=_vm.checkVals,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=item.name,$$i=_vm._i($$a,$$v);if($$c){$$i<0&&(_vm.checkVals=$$a.concat($$v));}else{$$i>-1&&(_vm.checkVals=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.checkVals=$$c;}}}})]):_vm._e()}),_vm._v(" "),_vm._l((_vm.checkList),function(item){return (_vm.type==='default')?_c('label',{staticClass:"emfe-select-label emfe-select-delabel",attrs:{"disabled":item.disabled},on:{"click":_vm.spanTxt}},[_vm._v(_vm._s(item.name))]):_vm._e()})],2):_vm._e()])},
staticRenderFns: [],
  name: 'Select',
  props: {
    type: {
      type: String,
      default: '',
    },
    seleStu: {
      type: String,
      default: '',
    },
    datas: {
      type: Array,
      required: true,
    },
    selectText: {
      type: String,
      default: '请选择标签',
    },
    addText: {
      type: String,
      default: '添加标签',
    },
  },
  data: function data() {
    return {
      checkList: [],
      checkVals: [],
      flagCheck: false,
      newListVal: '',
    };
  },
  methods: {
    inpcheck: function inpcheck() {
      this.checkList = this.datas;
      this.flagCheck = this.checkList.length > 0;
    },
    newListBtn: function newListBtn() {
      var newdata = this.newListVal;
      this.$emit('addDataCheck', newdata);
      this.$emit('addDataRadio', newdata);
    },
    spanTxt: function spanTxt(e) {
      this.checkVals = e.target.innerHTML;
    },
    close: function close() {
      this.checkList = [];
      this.flagCheck = false;
    },
  },
};

EmfeSelect$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeSelect$1.name, EmfeSelect$1);
};

var prefixCls$7 = 'emfe-modal';
var EmfeModal$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"emfe-modal"},[_c('div',{staticClass:"emfe-modal-mask"}),_vm._v(" "),_c('div',{staticClass:"emfe-modal-wrap",style:({width: (_vm.width + "px")})},[_c('div',{staticClass:"emfe-modal-header"},[_c('div',{staticClass:"emfe-modal-header-inner"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"emfe-modal-header-close",on:{"click":_vm.closeModal}},[_vm._v("＋")])]),_vm._v(" "),_c('div',{staticClass:"emfe-modal-main"},[_vm._t("modal-main")],2),_vm._v(" "),_c('div',{staticClass:"emfe-modal-footer"},[_c('div',{staticClass:"emfe-modal-btn emfe-modal-btn-cancel",on:{"click":_vm.cancel}},[_vm._v("取消")]),_vm._v(" "),_c('div',{staticClass:"emfe-modal-btn emfe-modal-btn-ok",on:{"click":_vm.ok}},[_vm._v("确定")])])])]):_vm._e()},
staticRenderFns: [],
  name: 'EmfeModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 440,
    },
    title: String,
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    mainName: function mainName() {
      return [
        ( obj = {}, obj[(prefixCls$7 + "-main-" + (this.className))] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    cancel: function cancel() {
      this.$emit('cancel');
    },
    ok: function ok() {
      this.$emit('ok');
    },
    closeModal: function closeModal() {
      this.$emit('close');
    },
  },
};

EmfeModal$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeModal$1.name, EmfeModal$1);
};

var prefixCls$8 = 'emfe-checkout';
var EmfeCheckout$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-checkout",class:{'emfe-checkout-inline': _vm.inline}},[_c('div',{staticClass:"emfe-checkout-box"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.state),expression:"state"}],staticClass:"emfe-checkout-box-input",attrs:{"type":"checkbox","disabled":_vm.disable},domProps:{"checked":Array.isArray(_vm.state)?_vm._i(_vm.state,null)>-1:(_vm.state)},on:{"change":_vm.alocked,"__c":function($event){var $$a=_vm.state,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$c){$$i<0&&(_vm.state=$$a.concat($$v));}else{$$i>-1&&(_vm.state=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.state=$$c;}}}}),_vm._v(" "),_c('span',{staticClass:"emfe-checkout-box-span"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),(_vm.slideShow)?_c('div',{staticClass:"emfe-checkout-slide"},[_c('transition',{attrs:{"name":"fade"}},[(_vm.state)?_c('div',{staticClass:"emfe-checkout-slide-wrap"},[_c('div',{staticClass:"emfe-checkout-slide-wrap-open"},[_vm._t("slide")],2)]):_vm._e()])],1):_vm._e()])},
staticRenderFns: [],
  name: 'EmfeCheckout',
  data: function data() {
    return {
      state: false,
    };
  },
  props: {
    slideShow: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    inline: {
      type: String,
      default: '',
    },
  },
  computed: {
    slideName: function slideName() {
      return [
        ( obj = {}, obj[(prefixCls$8 + "-slide-" + (this.className))] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    alocked: function alocked() {
      this.state = this.state === true;
    },
  },
};

EmfeCheckout$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeCheckout$1.name, EmfeCheckout$1);
};

var EmfeDrop$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('emfe-drag',{attrs:{"className":_vm.className,"dragDiyStyle":_vm.posStyle},on:{"drag":_vm.drag}},[_vm._t("default")],2)},
staticRenderFns: [],
  name: 'EmfeDrop',
  props: {
    className: {
      type: String,
      default: '',
    },
    posStyle: {
      type: String,
      default: '',
    },
  },
  mounted: function mounted() {
  },
  methods: {
    drag: function drag(e, left, top) {
      this.$el.style.zIndex = 99;
      this.disY = e.clientX - this.$el.offsetLeft;
      console.log(this.disY);
      console.log(left);
      console.log(top);
    },
  },
};

EmfeDrop$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDrop$1.name, EmfeDrop$1);
};

var prefixCls$9 = 'emfe-box';

var EmfeTable = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-box"},[_c('div',{class:_vm.className},[(_vm.columns.length)?_c('table',{staticClass:"emfe-box-table",class:[_vm.classTable, _vm.classAdd],attrs:{"width":_vm.width}},[_vm._t("head"),_vm._v(" "),_c('tbody',[_vm._t("body")],2)],2):_vm._e(),_vm._v(" "),(!_vm.columns.length)?_c('div',{staticClass:"emfe-box-nothing"},[_vm._v("没有数据")]):_vm._e()])])},
staticRenderFns: [],
  name: 'EmfeTable',
  data: function data() {
    return {
      percen: (this.columns.length / 10) * 100,
      newObject: {},
    };
  },
  props: {
    type: {
      type: [String, Boolean],
      default: false,
    },
    columns: {
      type: Array,
      default: function default$1() {
        return [];
      },
    },
    data: {
      type: Array,
      default: function default$2() {
        return [];
      },
    },
    classAddName: {
      type: String,
      default: '',
    },
  },
  computed: {
    className: function className() {
      return this.type && this.columns.length > 0 ? (prefixCls$9 + "-overflow") : (prefixCls$9 + "-fixed");
    },
    classAdd: function classAdd() {
      return this.classAddName ? ((this.classAddName) + "-table") : '';
    },
    classTable: function classTable() {
      return this.type && this.columns.length > 0 ? (prefixCls$9 + "-overflow-table") : (prefixCls$9 + "-fixed-table");
    },
    width: function width() {
      return this.type && this.columns.length > 10 ? ((this.percen) + "%") : '100%';
    },
  },
};

var EmfeTableHead = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',{staticClass:"emfe-box-table-head",class:_vm.classHead},[_c('tr',{staticClass:"emfe-box-table-head-tr",class:_vm.classTr},[(this.$parent.columns[0].type == 'selection')?[_c('th',{staticClass:"emfe-box-table-head-tr-th",class:_vm.classTh},[_vm._t("default")],2)]:_vm._e(),_vm._v(" "),_vm._l((this.$parent.columns),function(item,index){return _c('th',{staticClass:"emfe-box-table-head-tr-th",class:_vm.classTh},[_c('div',[_vm._v(_vm._s(item.title))])])})],2)])},
staticRenderFns: [],
  name: 'EmfeTableHead',
  data: function data() {
    return {
      className: this.$parent.className,
      classAdd: this.$parent.classAdd,
    };
  },
  computed: {
    classHead: function classHead() {
      return [
        ((this.className) + "-table-head"),
        ( obj = {}, obj[((this.$parent.classAdd) + "-thead")] = !!this.classAdd, obj ) ];
      var obj;
    },
    classTr: function classTr() {
      return [
        ((this.className) + "-table-head-tr"),
        ( obj = {}, obj[((this.$parent.classAdd) + "-thead-tr")] = !!this.classAdd, obj ) ];
      var obj;
    },
    classTh: function classTh() {
      return [
        ((this.className) + "-table-head-tr-th"),
        ( obj = {}, obj[((this.$parent.classAdd) + "-thead-tr-th")] = !!this.classAdd, obj ) ];
      var obj;
    },
  },
};

var EmfeTableBody = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',{staticClass:"emfe-box-table-tr",class:_vm.classTr,on:{"click":function($event){_vm.jump(_vm.ind);}}},[(this.$parent.columns[0].type == 'selection')?[_c('td',{staticClass:"emfe-box-table-tr-td",class:_vm.classTd},[_c('div',[_vm._t("default")],2)])]:_vm._e(),_vm._v(" "),_vm._l((_vm.column),function(list,index){return (!_vm.dataList[list.key].text=="")?_c('td',{staticClass:"emfe-box-table-tr-td",class:_vm.classTd,attrs:{"rowspan":_vm.dataList[list.key].row ? _vm.rowSpan[list.key]:0}},[_c('div',[_vm._v(_vm._s(_vm.dataList[list.key].text))])]):_vm._e()})],2)},
staticRenderFns: [],
  name: 'EmfeTableBody',
  data: function data() {
    return {
      className: this.$parent.className,
      classAdd: this.$parent.classAdd,
      column: this.$parent.columns,
      data: this.$parent.data,
      current: 0,
    };
  },
  props: {
    dataList: {
      type: Object,
      default: function default$1() {
        return {};
      },
    },
    ind: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    classTr: function classTr() {
      return [
        ((this.className) + "-table-body-tr"),
        ( obj = {}, obj[((this.$parent.classAdd) + "-tbody-tr")] = !!this.classAdd, obj ) ];
      var obj;
    },
    classTd: function classTd() {
      return [
        ((this.className) + "-table-body-tr-td"),
        ( obj = {}, obj[((this.$parent.classAdd) + "-tbody-tr-td")] = !!this.classAdd, obj ) ];
      var obj;
    },
    rowSpan: function rowSpan() {
      var this$1 = this;

      for (var o = 0; o < this.column.length; o++) {
        for (var i = 0; i < this.data.length; i++) {
          if (this$1.data[i][this$1.column[o].key].row) {
            this$1.current++;
            this$1.$parent.newObject[this$1.column[o].key] = this$1.current;
          }
        }
      }
      var arrList = Object.keys(this.$parent.newObject);
      for (var j = arrList.length; j > 0; j--) {
        var li = this$1.$parent.newObject[arrList[j]] - this$1.$parent.newObject[arrList[j - 1]];
        this$1.$parent.newObject[arrList[j]] = li;
      }
      return this.$parent.newObject;
    },
  },
  methods: {
    jump: function jump(i) {
      this.$emit('jump', i);
    },
  },
};

/* istanbul ignore next */
EmfeTable.install = function (Vue$$1) {
  Vue$$1.component(EmfeTable.name, EmfeTable);
};
/* istanbul ignore next */
EmfeTableHead.install = function (Vue$$1) {
  Vue$$1.component(EmfeTableHead.name, EmfeTableHead);
};
/* istanbul ignore next */
EmfeTableBody.install = function (Vue$$1) {
  Vue$$1.component(EmfeTableBody.name, EmfeTableBody);
};

var Table = {
  EmfeTable: EmfeTable,
  EmfeTableHead: EmfeTableHead,
  EmfeTableBody: EmfeTableBody,
};

var prefixCls$10 = 'emfe-textarea';
var EmfeTextarea$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-textarea"},[_c('textarea',{staticClass:"emfe-textarea-wrap",class:_vm.textereaName})])},
staticRenderFns: [],
  name: 'EmfeTextarea',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    textereaName: function textereaName() {
      return [
        ( obj = {}, obj[(prefixCls$10 + "-" + (this.className))] = !!this.className, obj ) ];
      var obj;
    },
  },
};

EmfeTextarea$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTextarea$1.name, EmfeTextarea$1);
};

var prefixCls$11 = 'emfe-datapanel';
var EmfeDatapanel$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-datapanel"},[_c('div',{staticClass:"emfe-datapanel-title"},[_c('span',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('emfe-tooltip',{attrs:{"placement":"right-end"}},[_c('emfe-icon',{attrs:{"type":"hint","className":"emfe-datapanel-mark"},slot:"render"}),_vm._v(" "),_c('div',{slot:"tip"},[_vm._t("tipText")],2)],1)],1),_vm._v(" "),_c('div',{staticClass:"emfe-datapanel-main"},[_vm._v("\n    "+_vm._s(_vm.contentText)+"\n  ")])])},
staticRenderFns: [],
  name: 'EmfeDatapanel',
  props: {
    className: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    contentText: {
      type: String,
      default: '',
    },
  },
  computed: {
    textereaName: function textereaName() {
      return [
        ( obj = {}, obj[(prefixCls$11 + "-" + (this.className))] = !!this.className, obj ) ];
      var obj;
    },
  },
};

EmfeDatapanel$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDatapanel$1.name, EmfeDatapanel$1);
};

var prefixCls$12 = 'emfe-tag';
var EmfeTag = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-tag",class:_vm.classList,on:{"click":_vm.activeClass}},[(!!_vm.type)?_c('emfe-icon',{attrs:{"type":_vm.type,"className":"icon-page"}}):_vm._e(),_vm._v(" "),_vm._t("default"),_vm._v(" "),(!!_vm.skin)?_c('span'):_vm._e()],2)},
staticRenderFns: [],
  name: 'EmfeTag',
  props: {
    disable: {
      type: [String, Boolean],
      default: false,
    },
    skin: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    active: {
      type: [Boolean, String],
      default: false,
    },
    index: {
      type: String,
      required: true,
    },
  },
  data: function data() {
    return {
      activeOk: this.active,
      className: this.$parent.className,
    };
  },
  computed: {
    classList: function classList() {
      return [
        ( obj = {}, obj[(prefixCls$12 + "-" + (this.className) + "-disable")] = this.disable, obj[(prefixCls$12 + "-" + (this.className))] = !this.disable, obj[(prefixCls$12 + "-" + (this.className) + "-active")] = this.activeOk && !this.skin, obj[(prefixCls$12 + "-" + (this.className) + "-" + (this.skin))] = !!this.skin, obj[(prefixCls$12 + "-" + (this.className) + "-" + (this.skin) + "-active")] = this.activeOk && !!this.skin, obj ) ];
      var obj;
    },
  },
  methods: {
    activeClass: function activeClass() {
      if (this.disable) {
        return;
      }
      this.$parent.getIndex(this.index);
      this.$emit('tag', this.index);
    },
  },
};

var EmfeTagParent = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)},
staticRenderFns: [],
  name: 'EmfeTagParent',
  props: {
    className: {
      type: String,
      required: true,
    },
  },
  data: function data() {
    return {
      childrens: [],
    };
  },
  methods: {
    getIndex: function getIndex(index) {
      if (this.className === 'default') {
        this.$children.forEach(function (element, eleIndex) {
          element.activeOk = parseInt(index, 10) === eleIndex;
        });
      } else if (this.className === 'checket') {
        this.$children[index].activeOk = true;
      } else if (this.className === 'screen') {
        this.$children[index].activeOk = !this.$children[index].activeOk;
      }
    },
  },
};

/* istanbul ignore next */
EmfeTag.install = function (Vue$$1) {
  Vue$$1.component(EmfeTag.name, EmfeTag);
};

/* istanbul ignore next */
EmfeTagParent.install = function (Vue$$1) {
  Vue$$1.component(EmfeTagParent.name, EmfeTagParent);
};

var Tag = {
  EmfeTag: EmfeTag,
  EmfeTagParent: EmfeTagParent,
};

var EmfePanel$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-panel",class:_vm.classList},_vm._l((_vm.data),function(key,value){return _c('div',{staticClass:"emfe-panel-box",class:_vm.boxName},[_c('div',{staticClass:"emfe-panel-box-left",class:_vm.leftName},[_vm._v(_vm._s(value))]),_vm._v(" "),_c('div',{staticClass:"emfe-panel-box-right",class:_vm.rightName},[_vm._v(_vm._s(key.cont)),(!!_vm.type)?_c('emfe-icon',{attrs:{"type":_vm.type,"className":"emfe-panel-box"},on:{"icon-click":_vm.iconClick}}):_vm._e(),_vm._v(" "),(!!_vm.switchType&&key.switchOk)?_c('emfe-switch',{on:{"toggle":_vm.toggle}},[_c('span',{slot:"open"},[_vm._v("ON")]),_vm._v(" "),_c('span',{slot:"close"},[_vm._v("OFF")])]):_vm._e()],1)])}))},
staticRenderFns: [],
  name: 'panel',
  props: {
    className: {
      type: String,
      default: '',
    },
    data: {
      type: Object,
      default: function default$1() {
        return {};
      },
    },
    type: {
      type: String,
      default: '',
    },
    switchType: {
      type: [String, Boolean],
      default: false,
    },
  },
  methods: {
    toggle: function toggle(status) {
      this.$emit('switch-toogle', status);
    },
    iconClick: function iconClick() {
      this.$emit('icon-click');
    },
  },
  computed: {
    classList: function classList() {
      return [
        ( obj = {}, obj[((this.className) + "-panel")] = !!this.className, obj ) ];
      var obj;
    },
    boxName: function boxName() {
      return [
        ( obj = {}, obj[((this.className) + "-panel-box")] = !!this.className, obj ) ];
      var obj;
    },
    leftName: function leftName() {
      return [
        ( obj = {}, obj[((this.className) + "-panel-box-left")] = !!this.className, obj ) ];
      var obj;
    },
    rightName: function rightName() {
      return [
        ( obj = {}, obj[((this.className) + "-panel-box-right")] = !!this.className, obj ) ];
      var obj;
    },
  },
};

EmfePanel$1.install = function (Vue$$1) {
  Vue$$1.component(EmfePanel$1.name, EmfePanel$1);
};

var EmfeHottip$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-hottip"},[_c('a',{staticClass:"emfe-hottip-btn",attrs:{"href":"javascript:;"},on:{"click":_vm.change}},[_c('i',{staticClass:"emfe-icon-financial icon-page-icon",class:{'emfe-hottip-deg' : _vm.showInfo}})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showInfo),expression:"showInfo"}]},[_vm._t("no1")],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showInfo),expression:"!showInfo"}]},[_vm._t("no2")],2)])},
staticRenderFns: [],
  name: 'hottip',
  data: function data() {
    return {
      showInfo: false,
    };
  },
  methods: {
    change: function change() {
      this.showInfo = !this.showInfo;
      this.$emit('change', this.showInfo);
    },
  },
};

EmfeHottip$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeHottip$1.name, EmfeHottip$1);
};

var EmfeCrumb$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-crumb"},[_c('div',{staticClass:"emfe-crumb-left"},[_c('emfe-link',{attrs:{"className":_vm.linkName,"routers":_vm.routers},on:{"click":_vm.click}},[_vm._v(_vm._s(_vm.linkText))]),_vm._v(" "),(_vm.title)?_c('span',{staticClass:"emfe-crumb-left-txt"},[_vm._v(_vm._s(_vm.title))]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"emfe-crumb-right"},[_vm._t("default")],2)])},
staticRenderFns: [],
  name: 'EmfeCrumb',
  props: {
    routers: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      required: true,
    },
  },
  computed: {
    linkName: function linkName() {
      return this.title ? 'emfe-crumb-title' : 'emfe-crumb';
    },
  },
  methods: {
    click: function click() {
      this.$emit('click');
    },
  },
};

EmfeCrumb$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeCrumb$1.name, EmfeCrumb$1);
};

var seed = 0;
var now = Date.now();

function getUuid() {
  return ("ivuNotification_" + now + "_" + (seed++));
}

var EmfeMessage$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"emfe-message-box",attrs:{"tag":"div","name":"fade"}},_vm._l((_vm.notices),function(notice,noticeIndex){return _c('div',{key:noticeIndex,staticClass:"emfe-message-main",class:[("emfe-message-" + (notice.type))],style:(notice.style)},[_c('p',{staticClass:"emfe-message-text"},[_vm._v(_vm._s(notice.content))])])}))},
staticRenderFns: [],
  name: 'emfe-message',
  data: function data() {
    return {
      notices: [],
    };
  },
  methods: {
    add: function add(notice) {
      var name = notice.name || getUuid();
      // 继承一下参数
      var newNotice = Object.assign({
        content: '',
        name: name,
        type: 'info',
        style: {},
        close: function close() {},
      }, notice);
      // 添加到队列中
      this.notices.push(newNotice);
      // 自动关闭
      setTimeout(this.close.bind(this, name), notice.delayTime);
    },
    close: function close(name) {
      var this$1 = this;

      this.notices.every(function (notice, noticeIndex) {
        this$1.notices.splice(noticeIndex, 1);
        notice.close();
        return notice.name !== name;
      });
    },
  },
};

EmfeMessage$1.newInstance = function (props) {
  if ( props === void 0 ) props = {};

  var Instance = new Vue({
    data: props,
    render: function render(h) {
      return h(EmfeMessage$1, {
        props: props,
      });
    },
  });

  var component = Instance.$mount();
  document.body.appendChild(component.$el);
  var notification = Instance.$children[0];

  return {
    notice: function notice(noticeProps) {
      notification.add(noticeProps);
    },
  };
};

var prefixKey = 'emfe_message_key_';

var messageInstance;
var delayTime = 5000;
var style = {};
var close = function () {};

function getMessageInstance() {
  messageInstance = messageInstance || EmfeMessage$1.newInstance();
  return messageInstance;
}

function notice(params) {
  var instance = getMessageInstance();
  params.name = "" + prefixKey + name;
  params.delayTime = params.delayTime || delayTime;
  params.style = params.style || style;
  params.close = params.close || close;

  instance.notice(params);
}

var EmfeMessage = {
  info: function info(params) {
    params.type = 'info';
    return notice(params);
  },
  success: function success(params) {
    params.type = 'success';
    return notice(params);
  },
  warning: function warning(params) {
    params.type = 'warning';
    return notice(params);
  },
  error: function error(params) {
    params.type = 'error';
    return notice(params);
  },
  config: function config(params) {
    if (params.delayTime) {
      delayTime = params.delayTime;
    }
    if (params.style) {
      style = params.style;
    }
    if (params.close) {
      close = params.close;
    }
  },
};

var emfeDocumentclick = {
  bind: function bind(el, binding) {
    var documentHandler = function (e) {
      if (!el.contains(e.target) && binding.expression) {
        binding.value(e);
      }
    };
    el.emfeDocumentClick = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  unbind: function unbind(el) {
    document.removeEventListener('click', el.emfeDocumentClick);
    delete el.emfeDocumentClick;
  },
};

// 组件
// 服务
// 指令
var emfeCpt = {
  EmfeCol: Grid.EmfeCol,
  EmfeRow: Grid.EmfeRow,
  EmfeIcon: EmfeIcon$1,
  EmfeTooltip: EmfeTooltip$1,
  EmfeTransition: EmfeTransition,
  EmfeModal: EmfeModal$1,
  EmfeMenu: EmfeMenu$1,
  EmfeHeader: EmfeHeader$1,
  EmfeFooter: EmfeFooter$1,
  EmfeCopy: EmfeCopy$1,
  EmfeUpload: EmfeUpload$1,
  EmfeDrag: EmfeDrag$1,
  EmfeColor: EmfeColor$1,
  EmfeInput: EmfeInput$1,
  EmfeButton: Button.EmfeButton,
  EmfeButtonGroup: Button.EmfeButtonGroup,
  EmfeSwitch: EmfeSwitch$1,
  EmfeTitle: EmfeTitle$1,
  EmfeRadio: Radio.EmfeRadio,
  EmfeRadioGroup: Radio.EmfeRadioGroup,
  EmfeTable: Table.EmfeTable,
  EmfeTableHead: Table.EmfeTableHead,
  EmfeTableBody: Table.EmfeTableBody,
  EmfeDate: EmfeDate$1,
  EmfeTime: EmfeTime$1,
  EmfeDatetime: EmfeDatetime$1,
  EmfePagination: EmfePagination$1,
  EmfeSelect: EmfeSelect$1,
  EmfeCheckout: EmfeCheckout$1,
  EmfeDrop: EmfeDrop$1,
  EmfeLink: EmfeLink$1,
  EmfeTextarea: EmfeTextarea$1,
  EmfeDatapanel: EmfeDatapanel$1,
  EmfeTag: Tag.EmfeTag,
  EmfeTagParent: Tag.EmfeTagParent,
  EmfePanel: EmfePanel$1,
  EmfeCrumb: EmfeCrumb$1,
  EmfeHottip: EmfeHottip$1,
};

var emfeDir = {
  emfeDocumentclick: emfeDocumentclick,
};

//, opts = {}
var install = function (Vue$$1) {
  if (install.installed) { return; }

  Object.keys(emfeCpt).forEach(function (key) {
    Vue$$1.component(key, emfeCpt[key]);
  });

  Object.keys(emfeDir).forEach(function (key) {
    Vue$$1.directive(key, emfeDir[key]);
  });

  Vue$$1.prototype.$EmfeMessage = EmfeMessage;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  version: '1.0.0',
  install: install,
};

module.exports = index;
