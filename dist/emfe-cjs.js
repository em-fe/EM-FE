/*!
 * EMFE.js v1.0.18
 * (c) 2014-2017 李梦龙
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));
var IScroll = _interopDefault(require('iscroll'));

var Contant = {
  SCREEN_MD: 1366,
  ISCROLL_CONFIG: {
    scrollbars: true,
    mouseWheel: true,
    click: false,
    preventDefault: true,
  },
};

var O = {
  hOwnProperty: function hOwnProperty(item, attr) {
    return Object.prototype.hasOwnProperty.call(item, attr);
  },
  empty: function empty(obj) {
    return JSON.stringify(obj) === '{}';
  },
  copy: function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  type: function type(thing) {
    if (thing === null) { return '[object Null]'; }
    // special case
    return Object.prototype.toString.call(thing);
  },
};

var childrenLast = -1; // 记录上一个点击的二级手风琴的索引

var EmfeBar$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-bar",class:_vm.barName},[_c('h3',{staticClass:"emfe-bar-header"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"emfe-bar-iscroll"},[_c('ul',{staticClass:"emfe-bar-list"},[_vm._l((_vm.datas),function(childrenData,childrenDataIndex){return [(!childrenData.children)?_c('li',{staticClass:"emfe-bar-item"},[_c('router-link',{staticClass:"emfe-bar-link",class:{' emfe-bar-link-disabled': _vm.isDisabled},attrs:{"to":childrenData.routers}},[_vm._v(_vm._s(childrenData.title))])],1):_c('li',{staticClass:"emfe-bar-item",class:{'emfe-bar-item-on': _vm.childrenIndex == childrenDataIndex}},[_c('span',{staticClass:"emfe-bar-btn",class:{' emfe-bar-btn-disabled': _vm.isDisabled},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.toogleChild(childrenDataIndex);}}},[_vm._v(_vm._s(childrenData.title))]),_vm._v(" "),_c('i',{staticClass:"emfe-bar-arrow"}),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"gradual"}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.childrenIndex == childrenDataIndex),expression:"childrenIndex == childrenDataIndex"}],staticClass:"emfe-bar-childlist"},_vm._l((childrenData.children),function(child){return _c('li',{staticClass:"emfe-bar-childitem"},[_c('router-link',{staticClass:"emfe-bar-childlink",class:{' emfe-bar-childlink-disabled': _vm.isDisabled},attrs:{"to":child.routers}},[_vm._v(_vm._s(child.title))])],1)}))])],1)]})],2)])])},
staticRenderFns: [],
  name: 'EmfeBar',
  data: function data() {
    return {
      Contant: Contant,
      childrenIndex: -1,
      isDisabled: this.disabled,
    };
  },
  props: {
    datas: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    fullpath: {
      type: String,
      required: true,
    },
    className: String,
    disabled: Boolean,
    disableRex: String,
  },
  computed: {
    barName: function barName() {
      return this.className ? ((this.className) + "-bar") : '';
    },
  },
  mounted: function mounted() {
    this.testUrl();
  },
  methods: {
    testUrl: function testUrl() {
      var this$1 = this;

      var ref = this.$route;
      var fullPath = ref.fullPath;
      var name = ref.name;

      var newFullPath = this.fullpath ? this.fullpath : fullPath;

      this.datas.forEach(function (data, dataNum) {
        // 如果一级导航有子节点
        if (O.hOwnProperty(data, 'children')) {
          data.children.forEach(function (dataChild) {
            var inChildFullPath = O.hOwnProperty(dataChild, 'routers') && O.hOwnProperty(dataChild.routers, 'path') && newFullPath.indexOf(dataChild.routers.path) > -1;
            if (inChildFullPath || name === dataChild.routers.name) {
              // 打开二级导航的折叠
              this$1.toogleChild(dataNum);
            }
          });
        }
      });
    },
    toogleChild: function toogleChild(itemIndex) {
      if (!this.isDisabled) {
        var eqLast = itemIndex === childrenLast;
        this.childrenIndex = eqLast ? -1 : itemIndex;
        childrenLast = eqLast ? -1 : itemIndex;
      }
    },
    tochildren: function tochildren(item) {
      if (O.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }

      if (O.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }
    },
  },
  watch: {
    fullpath: function fullpath(val, oldVal) {
      if (val !== oldVal) {
        this.testUrl();
      }
    },
    $route: function $route(val, oldVal) {
      if (val.name !== oldVal.name) {
        this.isDisabled = val.path.indexOf(this.disableRex) > -1;
      }
    },
    disabled: function disabled(val, oldVal) {
      if (val !== oldVal) {
        this.isDisabled = this.disabled;
      }
    },
  },
};

EmfeBar$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeBar$1.name, EmfeBar$1);
};

var childrenLast$1 = -1; // 记录上一个点击的二级手风琴的索引

var EmfeBarC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-bar-c",class:_vm.barName},[_c('ul',{staticClass:"emfe-bar-c-list"},[_vm._l((_vm.datas),function(childrenData,childrenDataIndex){return [(!childrenData.children)?_c('li',{staticClass:"emfe-bar-c-item"},[_c('router-link',{staticClass:"emfe-bar-c-link",class:{' emfe-bar-c-link-disabled': _vm.isDisabled},attrs:{"to":childrenData.routers}},[_vm._v(_vm._s(childrenData.title))])],1):_c('li',{staticClass:"emfe-bar-c-item",class:{'emfe-bar-c-item-on': _vm.childrenIndex == childrenDataIndex}},[_c('span',{staticClass:"emfe-bar-c-btn",class:{' emfe-bar-c-btn-disabled': _vm.isDisabled},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.toogleChild(childrenDataIndex);}}},[_vm._v(_vm._s(childrenData.title))]),_vm._v(" "),_c('i',{staticClass:"emfe-bar-c-arrow"}),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"gradual"}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.childrenIndex == childrenDataIndex),expression:"childrenIndex == childrenDataIndex"}],staticClass:"emfe-bar-c-childlist"},_vm._l((childrenData.children),function(child){return _c('li',{staticClass:"emfe-bar-c-childitem"},[_c('router-link',{staticClass:"emfe-bar-c-childlink",class:{' emfe-bar-c-childlink-disabled': _vm.isDisabled},attrs:{"to":child.routers}},[_vm._v(_vm._s(child.title))])],1)}))])],1)]})],2)])},
staticRenderFns: [],
  name: 'EmfeBarC',
  data: function data() {
    return {
      childrenIndex: -1,
      isDisabled: this.disabled,
    };
  },
  props: {
    datas: {
      type: Array,
      required: true,
    },
    fullpath: {
      type: String,
      required: true,
    },
    className: String,
    disabled: Boolean,
    disableRex: String,
  },
  computed: {
    barName: function barName() {
      return this.className ? ((this.className) + "-bar") : '';
    },
  },
  mounted: function mounted() {
    this.testUrl();
  },
  methods: {
    testUrl: function testUrl() {
      var this$1 = this;

      var ref = this.$route;
      var fullPath = ref.fullPath;
      var name = ref.name;

      var newFullPath = this.fullpath ? this.fullpath : fullPath;

      this.datas.forEach(function (data, dataNum) {
        // 如果一级导航有子节点
        if (O.hOwnProperty(data, 'children')) {
          data.children.forEach(function (dataChild) {
            var inChildFullPath = O.hOwnProperty(dataChild, 'routers') && O.hOwnProperty(dataChild.routers, 'path') && newFullPath.indexOf(dataChild.routers.path) > -1;
            if (inChildFullPath || name === dataChild.routers.name) {
              // 打开二级导航的折叠
              this$1.toogleChild(dataNum);
            }
          });
        }
      });
    },
    toogleChild: function toogleChild(itemIndex) {
      if (!this.isDisabled) {
        var eqLast = itemIndex === childrenLast$1;
        this.childrenIndex = eqLast ? -1 : itemIndex;
        childrenLast$1 = eqLast ? -1 : itemIndex;
      }
    },
    tochildren: function tochildren(item) {
      if (O.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }

      if (O.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }
    },
  },
  watch: {
    fullpath: function fullpath(val, oldVal) {
      if (val !== oldVal) {
        this.testUrl();
      }
    },
    $route: function $route(val, oldVal) {
      if (val.name !== oldVal.name) {
        this.isDisabled = val.path.indexOf(this.disableRex) > -1;
      }
    },
    disabled: function disabled(val, oldVal) {
      if (val !== oldVal) {
        this.isDisabled = this.disabled;
      }
    },
  },
};

EmfeBarC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeBarC$1.name, EmfeBarC$1);
};

var _ = {
  has: function has(value, valueList) {
    return valueList.filter(function (val) { return val === value; }).length > 0;
  },
  // 将数据插入到数组的某一位置
  swap: function swap(arr, index1, index2) {
    var popData = arr.splice(index2, 1)[0];
    arr.splice(index1, 0, popData);
    return arr;
  },
  // 将数组中两个对象的某一个值交换
  exchangeAttrValue: function exchangeAttrValue(obj1, obj2, attr) {
    var val = '';
    if (Array.isArray(obj1[attr])) {
      val = [];
      obj1[attr].forEach(function (obj1Val) { return val.push(obj1Val); });
    } else if (typeof obj1[attr] === 'object') {
      val = Object.assign({}, obj1[attr]);
    } else {
      val = obj1[attr];
    }
    if (Array.isArray(obj2[attr])) {
      obj1[attr] = [];
      obj2[attr].forEach(function (obj2Val) { return obj1[attr].push(obj2Val); });
    } else if (typeof obj2[attr] === 'object') {
      obj1[attr] = Object.assign({}, obj2[attr]);
    } else {
      obj1[attr] = obj2[attr];
    }
    obj2[attr] = val;
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
        ( obj = {}, obj[("" + prefixCls)] = !this.type, obj[(prefixCls + "-" + (this.type))] = !!this.type, obj[(prefixCls + "-" + (this.align))] = !!this.type && !!this.align, obj[(prefixCls + "-" + (this.justify))] = !!this.type && !!this.justify, obj[((this.className) + "-row")] = !!this.className, obj ) ];
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

    classList.push(((this.className) + "-col"));

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
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:_vm.name,on:{"click":function($event){$event.stopPropagation();_vm.clickFn($event);}}})},
staticRenderFns: [],
  name: 'EmfeIcon',
  props: {
    className: {
      type: String,
      default: '',
    },
    type: String,
    click: {
      type: Function,
      default: function () {},
    },
  },
  computed: {
    name: function name() {
      var icon = prefixCls$2 + "-" + (this.type);
      var newName = this.className ? (" " + (this.className) + "-icon") : '';
      return ("" + icon + newName);
    },
  },
  methods: {
    clickFn: function clickFn() {
      this.$emit('icon-click');
      this.click();
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
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-tooltip",class:_vm.tooltipName,style:(_vm.relativeStyle),on:{"mouseenter":_vm.showPopper,"click":_vm.clickPopper,"mouseleave":_vm.hidePopper}},[_c('div',{ref:"reference",staticClass:"emfe-tooltip-slot",class:_vm.slotName},[_vm._t("render")],2),_vm._v(" "),_c('transition',{attrs:{"name":"fade"},on:{"enter":_vm.enter,"before-enter":_vm.beforeEnter,"after-enter":_vm.afterEnter,"before-leave":_vm.beforeLeave,"after-leave":_vm.afterLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.popperStatus),expression:"popperStatus"}],ref:"popper",staticClass:"emfe-tooltip-popper",class:_vm.popperName,style:(_vm.popperStyle)},[(_vm.arrowStatus)?_c('i',{staticClass:"emfe-tooltip-arrow",class:_vm.arrowPlacement}):_vm._e(),_vm._v(" "),_vm._t("tip")],2)])],1)},
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
    styles: {
      type: Object,
      default: function default$1$$1() {
        return {};
      },
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
    types: {
      type: String,
      default: 'hover',
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

      if (O.empty(this.styles)) {
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
      } else {
        this.popperStyle = this.styles;
      }
    },
    showPopper: function showPopper() {
      var this$1 = this;

      if (this.types === 'hover') {
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
      }
    },
    hidePopper: function hidePopper() {
      var this$1 = this;

      if (this.types === 'hover') {
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
      }
    },
    clickPopper: function clickPopper() {
      var this$1 = this;

      if (this.types === 'click') {
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
      }
      this.$emit('popper', this.clickHide);
    },
    clickHide: function clickHide() {
      var this$1 = this;

      if (this.types === 'click') {
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

var srceen = {
  screenMd: function screenMd() {
    return document.body.clientWidth > Contant.SCREEN_MD;
  },
};

var childrenLast$2 = -1; // 记录上一个点击的二级手风琴的索引
var screenMd = ''; // 屏幕是否大于992

var EmfeMenu$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"menu",staticClass:"emfe-menu",class:_vm.menuName},[_c('div',{staticClass:"emfe-menu-main"},[_c('button',{staticClass:"emfe-menu-main-header",on:{"click":_vm.menuToShort}},[(_vm.menuShort)?_c('emfe-icon',{staticClass:"emfe-menu-main-sidebar",attrs:{"type":"cedaohangshouqi"},on:{"icon-click":_vm.menuToShort}}):_c('emfe-icon',{staticClass:"emfe-menu-main-sidebar",attrs:{"type":"cedaohangzhankai"},on:{"icon-click":_vm.menuToShort}})],1),_vm._v(" "),_c('div',{staticClass:"emfe-menu-iscroll"},[_c('ul',{staticClass:"emfe-menu-main-list"},_vm._l((_vm.datas),function(data,dataIndex){return _c('li',{staticClass:"emfe-menu-main-item"},[(data.routers)?_c('a',{staticClass:"emfe-menu-main-link",class:{'emfe-menu-main-link-on': _vm.mainIndex === dataIndex},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.tochildren(data);}}},[_c('emfe-tooltip',{attrs:{"className":"emfe-menu","placement":"right","disable":!_vm.menuShort}},[_c('emfe-icon',{staticClass:"emfe-menu-main-icon",attrs:{"type":data.icon},on:{"icon-click":function($event){_vm.tochildren(data);}},slot:"render"}),_vm._v(" "),_c('span',{slot:"tip"},[_vm._v(_vm._s(data.title))])],1),_vm._v(" "),_c('span',{staticClass:"emfe-menu-main-text"},[_vm._v(_vm._s(data.title))])],1):_c('a',{staticClass:"emfe-menu-main-link",class:{'emfe-menu-main-link-on': _vm.mainIndex === dataIndex},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.tochildren(data);}}},[_c('emfe-tooltip',{attrs:{"className":"emfe-menu","placement":"right","disable":!_vm.menuShort}},[_c('emfe-icon',{staticClass:"emfe-menu-main-icon",attrs:{"type":data.icon},on:{"icon-click":function($event){_vm.tochildren(data);}},slot:"render"}),_vm._v(" "),_c('span',{slot:"tip"},[_vm._v(_vm._s(data.title))])],1),_vm._v(" "),_c('span',{staticClass:"emfe-menu-main-text"},[_vm._v(_vm._s(data.title))])],1)])}))])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.childrentatus),expression:"childrentatus"}],staticClass:"emfe-menu-minor"},[_c('h3',{staticClass:"emfe-menu-minor-header"},[_vm._v(_vm._s(_vm.childrenTitle))]),_vm._v(" "),_c('div',{staticClass:"emfe-menu-minor-iscroll"},[_c('ul',{staticClass:"emfe-menu-minor-list"},[_vm._l((_vm.childrenDatas),function(childrenData,childrenDataIndex){return [(!childrenData.children)?_c('li',{staticClass:"emfe-menu-minor-item"},[_c('router-link',{staticClass:"emfe-menu-minor-link",attrs:{"to":childrenData.routers}},[_vm._v(_vm._s(childrenData.title))])],1):_c('li',{staticClass:"emfe-menu-minor-item",class:{'emfe-menu-minor-item-on': _vm.childrenIndex == childrenDataIndex}},[_c('span',{staticClass:"emfe-menu-minor-btn",attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.toogleChild(childrenDataIndex);}}},[_vm._v(_vm._s(childrenData.title))]),_vm._v(" "),_c('i',{staticClass:"emfe-menu-minor-arrow"}),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"gradual"}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.childrenIndex == childrenDataIndex),expression:"childrenIndex == childrenDataIndex"}],staticClass:"emfe-menu-minor-childlist"},_vm._l((childrenData.children),function(child){return _c('li',{staticClass:"emfe-menu-minor-childitem"},[_c('router-link',{staticClass:"emfe-menu-minor-childlink",attrs:{"to":child.routers}},[_vm._v(_vm._s(child.title))])],1)}))])],1)]})],2)])])])},
staticRenderFns: [],
  name: 'EmfeMenu',
  data: function data() {
    return {
      Contant: Contant,
      childrenDatas: [],
      childrenIndex: -1,
      mainIndex: -1,
      childrenTitle: '',
      menuShort: false,
      childrentatus: false, // 记录二级是否打开
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    datas: Array,
    fullpath: {
      type: String,
      default: '',
    },
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
      } else {
        screenMd = '';
      }
    };

    resizeHandle();

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

      var newFullPath = this.fullpath ? this.fullpath : fullPath;

      this.datas.forEach(function (data, dataNum) {
        var newDataFullPath = O.hOwnProperty(data, 'routers') && O.hOwnProperty(data.routers, 'path') && newFullPath.indexOf(data.routers.path) > -1;
        // 如果一级导航有子节点
        if (O.hOwnProperty(data, 'children')) {
          data.children.forEach(function (dataChild, dataChildIndex) {
            var inChildFullPath = O.hOwnProperty(dataChild, 'routers') && O.hOwnProperty(dataChild.routers, 'path') && newFullPath.indexOf(dataChild.routers.path) > -1;
            // 如果二级导航有子节点
            if (O.hOwnProperty(dataChild, 'children')) {
              dataChild.children.forEach(function (dataGrandson) {
                var inGrandsonFullPath = O.hOwnProperty(dataGrandson, 'routers') && O.hOwnProperty(dataGrandson.routers, 'path') && newFullPath.indexOf(dataGrandson.routers.path) > -1;
                if (inGrandsonFullPath || name === dataGrandson.routers.name) {
                  // 打开二级导航的折叠
                  this$1.toogleChild(dataChildIndex);
                  item = data;
                  itemIndex = dataNum;
                }
              });
            } else if (inChildFullPath || name === dataChild.routers.name) {
              item = data;
              itemIndex = dataNum;
            }
          });
        } else if (O.hOwnProperty(data, 'routers') && (newDataFullPath || name === data.routers.name)) {
          this$1.mainIndex = dataNum;
        }
      });
      if (itemIndex > -1) {
        this.mainIndex = itemIndex;
        this.menuMainClick(item);
      }
    },
    toogleChild: function toogleChild(itemIndex) {
      var eqLast = itemIndex === childrenLast$2;
      this.childrenIndex = eqLast ? -1 : itemIndex;
      childrenLast$2 = eqLast ? -1 : itemIndex;
    },
    tochildren: function tochildren(item) {
      if (O.hOwnProperty(item, 'routers') || O.hOwnProperty(item, 'url')) {
        this.childrenIndex = -1;
        childrenLast$2 = -1;
        this.$emit('short', this.menuShort, this.childrentatus);
      }

      if (O.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }

      if (O.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }

      if (O.hOwnProperty(item, 'children')) {
        // this.menuMainClick(item, itemIndex);
        // 默认跳转
        this.tochildren(item.children[0]);
      }
    },
    menuMainClick: function menuMainClick(item) {
      this.childrenDatas = item.children;
      this.childrenTitle = item.title;
      this.childrentatus = true;
      this.$emit('column', this.menuShort, this.childrentatus);
    },
    menuToShort: function menuToShort(type) {
      if (type === 'resize') {
        this.menuShort = !screenMd;
      } else {
        this.menuShort = !this.menuShort;
      }
      this.$emit('short', this.menuShort, this.childrentatus);
    },
  },
  watch: {
    fullpath: function fullpath(val, oldVal) {
      if (val !== oldVal) {
        this.testUrl();
      }
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

var EmfeHeaderC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"emfe-header-c"},[_c('div',{staticClass:"emfe-header-c-main"},[_c('div',{staticClass:"emfe-header-c-eye"},[_c('img',{attrs:{"src":_vm.logo,"height":"100%"}})]),_vm._v(" "),_c('div',{staticClass:"emfe-header-c-info"},[_c('span',{staticClass:"emfe-header-c-account"},[_vm._v("活动易首页 你好，"+_vm._s(_vm.user))]),_vm._v(" "),_c('emfe-link',{attrs:{"className":"emfe-header-c","routers":_vm.orderRouter},on:{"click":_vm.orderClick}},[_vm._v("我的订单")]),_vm._v(" "),_c('span',[_c('emfe-icon',{attrs:{"className":"emfe-header-c","type":"hint"}}),_vm._v(" "),_c('emfe-link',{attrs:{"className":"emfe-header-c","routers":_vm.followRouter},on:{"click":_vm.followClick}},[_vm._v("购物车 ("+_vm._s(_vm.followNum)+")")])],1),_vm._v(" "),_c('emfe-link',{staticClass:"emfe-header-c-logout",attrs:{"routers":{}},on:{"click":_vm.logout}},[_vm._v("退出")])],1)])])},
staticRenderFns: [],
  name: 'EmfeHeaderC',
  props: {
    logo: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    orderRouter: {
      type: [Object, String],
      required: true,
    },
    followRouter: {
      type: [Object, String],
      required: true,
    },
    followNum: {
      type: Number,
      required: true,
    },
  },
  methods: {
    logout: function logout() {
      this.$emit('logout');
    },
    orderClick: function orderClick() {
      this.$emit('orderClick');
    },
    followClick: function followClick() {
      this.$emit('followClick');
    },
  },
};

EmfeHeaderC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeHeaderC$1.name, EmfeHeaderC$1);
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

var EmfeFooterC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"emfe-footer-c"},[_c('img',{staticClass:"emfe-footer-c-logo",attrs:{"src":_vm.logo}}),_vm._v(" "),_c('p',{staticClass:"emfe-footer-c-text"},[_vm._v(_vm._s(_vm.content))])])},
staticRenderFns: [],
  name: 'EmfeFooterC',
  props: {
    content: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
};

EmfeFooterC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeFooterC$1.name, EmfeFooterC$1);
};

var EmfeCopy$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-copy",class:_vm.copyName},[_c('span',{class:_vm.textName},[_vm._v(_vm._s(_vm.text)+"：")]),_vm._v(" "),_c('span',{class:_vm.valueName},[_vm._v(_vm._s(_vm.copyValue))]),_vm._v(" "),_c('button',{staticClass:"emfe-copy-btn",class:_vm.btnName,on:{"click":_vm.copyHandle}},[_c('emfe-icon',{staticClass:"emfe-copy-btn-icon",class:_vm.iconName,attrs:{"type":"fuzhi"},on:{"icon-click":_vm.copyHandle}})],1)])},
staticRenderFns: [],
  name: 'EmfeCopy',
  props: {
    className: String,
    copyValue: String,
    read: [String, Boolean],
    text: {
      type: String,
      default: '表单页面',
    },
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
      // const { copyInput } = this.$refs;
      // copyInput.select();
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
      // copyInput.blur();
    },
  },
};

EmfeCopy$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeCopy$1.name, EmfeCopy$1);
};

/**
 * database64文件格式转换为2进制
 *
 * @param  {[String]} data dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
 * @param  {[String]} type [description]
 * @return {[blob]}      [description]
 */
var upload = function (data, type) {
  var newData = data.split(',')[1];
  newData = window.atob(newData);
  var ia = new Uint8Array(newData.length);
  for (var i = 0; i < newData.length; i++) {
    ia[i] = newData.charCodeAt(i);
  }
  // canvas.toDataURL 返回的默认格式就是 image/png
  return new Blob([ia], {
    type: type,
  });
};

var handler = function (event) {
  event.preventDefault();
  event.stopPropagation();
};

var openMask = function () {
  document.body.addEventListener('touchmove', handler, false);
  document.body.addEventListener('wheel', handler, false);
};

var closeMask = function () {
  document.body.removeEventListener('touchmove', handler, false);
  document.body.removeEventListener('wheel', handler, false);
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

function upload$1(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  var xhr = new XMLHttpRequest();
  var action = option.action;

  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).map(function (key) { return formData.append(key, option.data[key]); });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr), getBody(xhr));
    }

    return option.onSuccess(getBody(xhr));
  };

  xhr.open('post', action, true);

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};

  // if (headers['X-Requested-With'] !== null) {
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  // }

  Object.keys(headers).forEach(function (item) {
    if (O.hOwnProperty(headers, item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  });

  xhr.send(formData);
}

var uploadJpeg = 'image/jpeg';
var pointOldLeft = 0; // 改变截取器遮罩大小

var EmfeUpload$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-upload",class:_vm.uploadName},[(_vm.type === 'icon')?[_c('emfe-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.src),expression:"!src"}],attrs:{"disabled":_vm.disabled || !_vm.canUpload,"theme":_vm.theme,"type":"shangchuan"}},[_vm._v(_vm._s(_vm.iconText))]),_vm._v(" "),_c('input',{directives:[{name:"show",rawName:"v-show",value:(!_vm.src),expression:"!src"}],ref:"upload",staticClass:"emfe-upload-file",class:_vm.fileName,attrs:{"disabled":_vm.disabled || !_vm.canUpload,"type":"file"},on:{"change":_vm.change}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.src),expression:"src"}],staticClass:"emfe-upload-icon-wrap",style:({opacity: _vm.canShow ? 1 : 0})},[_c('div',{staticClass:"emfe-upload-icon-wrap-box",class:[("emfe-upload-icon-wrap-box-" + _vm.align)]},[_c('img',{ref:"img",staticClass:"emfe-upload-icon-wrap-box-img",class:[("emfe-upload-img-" + _vm.align)],attrs:{"src":_vm.src}})]),_vm._v(" "),_c('i',{staticClass:"emfe-upload-icon-wrap-close",on:{"click":_vm.closeFn}})])]:_vm._e(),_vm._v(" "),(_vm.type === 'plus')?[_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.src),expression:"!src"}],staticClass:"emfe-upload-btn",class:_vm.btnName},[_vm._v(_vm._s(_vm.plusText))]),_vm._v(" "),_c('input',{directives:[{name:"show",rawName:"v-show",value:(!_vm.src),expression:"!src"}],ref:"uploadPlus",staticClass:"emfe-upload-file",class:_vm.fileName,attrs:{"disabled":_vm.disabled || !_vm.canUpload,"type":"file"},on:{"change":_vm.change}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.src),expression:"src"}],staticClass:"emfe-upload-plus-box",class:[("emfe-upload-plus-box-" + _vm.align)],style:({opacity: _vm.canShow ? 1 : 0}),on:{"click":_vm.closePlusFn}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.src),expression:"src"}],ref:"img",class:[("emfe-upload-img-" + _vm.align)],attrs:{"src":_vm.src}})])]:_vm._e(),_vm._v(" "),_c('emfe-modal',{attrs:{"show":_vm.interceptModal,"title":"截取器","okText":"保存","className":"form"},on:{"close":_vm.formCancel,"cancel":_vm.formCancel,"ok":_vm.formOk}},[_c('div',{staticClass:"emfe-upload-intercept-wrap",style:({'padding-top': (_vm.dragPaddingTop + "px"), 'padding-left': (_vm.dragPaddingLeft + "px")}),slot:"modal-main"},[_c('emfe-drag',{staticClass:"emfe-upload-intercept-drag",style:({ width: (_vm.dragWidth + "px"), height: (_vm.dragHeight + "px")}),attrs:{"dragEl":_vm.drag1,"initialValue":[-_vm.interceptCanvasWidth/2, -_vm.interceptCanvasHeight/2],"limit":"true"},on:{"drag":_vm.dragPosMove}},[_c('img',{ref:"previewImg",staticClass:"emfe-upload-intercept-img",style:({ width: (_vm.dragWidth + "px"), height: (_vm.dragHeight + "px")}),attrs:{"src":_vm.img}}),_vm._v(" "),_c('div',{ref:"drag1",staticClass:"emfe-upload-intercept",style:({width: (_vm.interceptCanvasWidth + "px"), height: (_vm.interceptCanvasHeight + "px"), left: (_vm.interceptLeft + "px"), top: (_vm.interceptTop + "px")})},[_c('emfe-drag',{staticClass:"emfe-upload-intercept-point emfe-upload-intercept-point-nw",attrs:{"moveEle":false},on:{"drag":_vm.nwPosMove}}),_vm._v(" "),_c('emfe-drag',{staticClass:"emfe-upload-intercept-point emfe-upload-intercept-point-ne",attrs:{"moveEle":false},on:{"drag":_vm.nePosMove}}),_vm._v(" "),_c('emfe-drag',{staticClass:"emfe-upload-intercept-point emfe-upload-intercept-point-sw",attrs:{"moveEle":false},on:{"drag":_vm.swPosMove}}),_vm._v(" "),_c('emfe-drag',{staticClass:"emfe-upload-intercept-point emfe-upload-intercept-point-se",attrs:{"moveEle":false},on:{"drag":_vm.sePosMove}})],1)])],1)])],2)},
staticRenderFns: [],
  name: 'upload',
  data: function data() {
    return {
      drag1: [],
      canUpload: true,
      src: '',
      canShow: false,
      fileList: [],
      tempIndex: 1,
      img: '',
      align: '',
      interceptModal: false, // 截取器是否显示
      interceptWidth: 360, // 截取器的宽
      interceptHeight: 400, // 截取器的搞
      interceptLeft: 0, // 截取器的左边距离
      interceptTop: 0, // 截取器的有边距离
      interceptCanvasWidth: 360, // 截取器截图的大小
      interceptCanvasHeight: 400, // 截取器截图的大小
      dragWidth: 'auto', // 拖拽的宽
      dragHeight: 400, // 拖拽的高
      dragPaddingLeft: 0,
      dragPaddingTop: 0,
      canvas: null,
      canvasContext: null,
      iconText: this.buttonText,
      plusText: '+',
    };
  },
  props: {
    type: {
      validator: function validator(value) {
        return _.has(value, ['plus', 'icon']);
      },
      default: 'plus',
    },
    disabled: Boolean,
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
      default: function default$1$$1() {
        return {};
      },
    },
    handleDatas: Object,
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
    intercept: {
      type: Array,
      default: function () { return []; },
    },
    format: {
      type: Array,
      default: function default$2() {
        return [];
      },
    },
    maxSize: {
      type: Number,
    },
    url: String,
    success: {
      type: Function,
      default: function () {},
    },
    exceededSize: {
      type: Function,
      default: function () {},
    },
    formatError: {
      type: Function,
      default: function () {},
    },
    beforeUpload: {
      type: Function,
      default: function () {},
    },
    error: {
      type: Function,
      default: function () {},
    },
    close: {
      type: Function,
      default: function () {},
    },
    buttonText: {
      type: String,
      default: '上传图片',
    },
    theme: {
      type: String,
      default: 'default',
    },
    fileType: {
      type: String,
      default: 'image',
    },
  },
  computed: {
    uploadName: function uploadName() {
      return [
        ("emfe-upload-" + (this.type)),
        ( obj = {}, obj[((this.className) + "-upload")] = !!this.className, obj ),
        ( obj$1 = {}, obj$1[((this.className) + "-upload-" + (this.type))] = !!this.className, obj$1 ),
        {
          'emfe-upload-disabled': this.disabled || !this.canUpload,
        } ];
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
        ( obj = {}, obj[((this.className) + "-upload-" + (this.type) + "-file")] = !!this.className, obj ),
        {
          'emfe-upload-file-disabled': this.disabled || !this.canUpload,
        } ];
      var obj;
    },
  },
  mounted: function mounted() {
    if (this.url) {
      this.initImg();
    }
    this.initIntercept();
  },
  methods: {
    initIntercept: function initIntercept() {
      // 有截取器
      if (this.intercept.length > 0) {
        if (this.intercept.length > 1) {
          this.interceptCanvasWidth = this.intercept[0];
          this.interceptCanvasHeight = this.intercept[1];
        } else if (this.intercept.length === 1) {
          this.interceptCanvasWidth = this.intercept[0];
          this.interceptCanvasHeight = this.intercept[0];
        }
      }
    },
    initImg: function initImg() {
      var this$1 = this;

      var imgObject = new Image();
      imgObject.src = this.url;
      imgObject.onload = function () {
        this$1.src = this$1.url;
        setTimeout(this$1.setAlign.bind(this$1), 0);
      };
    },
    openInterceptModal: function openInterceptModal() {
      openMask();
      this.interceptModal = true;
    },
    closeInterceptModal: function closeInterceptModal() {
      closeMask();
      this.interceptModal = false;
    },
    formCancel: function formCancel() {
      this.closeInterceptModal();
      this.resetInputFile();
    },
    formOk: function formOk() {
      this.initCanvas();
    },
    initCanvas: function initCanvas() {
      var this$1 = this;

      var img = new Image();
      img.src = this.img;
      img.onload = function () {
        this$1.canvas = document.createElement('canvas');
        this$1.canvasContext = this$1.canvas.getContext('2d');
        this$1.canvas.width = this$1.interceptCanvasWidth;
        this$1.canvas.height = this$1.interceptCanvasHeight;
        this$1.getImageUrl();
        this$1.postHandle(upload(this$1.clipData, uploadJpeg));
        this$1.closeInterceptModal();
      };
    },
    getImageUrl: function getImageUrl() {
      var ref = this;
      var canvasContext = ref.canvasContext;
      var previewImg = ref.previewImg;
      var clientWidth = previewImg.clientWidth;
      var clientHeight = previewImg.clientHeight;
      var left = this.interceptLeft;
      var top = this.interceptTop;
      canvasContext.drawImage(previewImg, -left, -top, clientWidth, clientHeight);
      this.clipData = this.canvas.toDataURL(uploadJpeg);
    },
    // 拖拽大方块改变截图位置
    dragPosMove: function dragPosMove(ev, left, top) {
      this.interceptLeft = left;
      this.interceptTop = top;
    },
    // 角部拖拽改变大小
    pointMoveChangeSize: function pointMoveChangeSize(ev, left, lDir, type) {
      var cWidth = this.interceptCanvasWidth;
      var cHeight = this.interceptCanvasHeight;
      var widthStep = -left;
      // 左上 || 左下
      if (type === 'nw' || type === 'sw') {
        var lChange = pointOldLeft - left;
        widthStep = lChange;
      }
      var heightStep = (cHeight * widthStep) / cWidth;
      var canWidth = this.intercept[0] < cWidth + widthStep;
      var canHeight = this.intercept[1] < cHeight + heightStep;
      // 拖动左边的，x不能超出去，拖动右边的，宽度不能超过去
      var heng = this.interceptLeft >= 0 && this.interceptLeft + cWidth <= this.dragWidth - 5;
      var shu = this.interceptLeft >= 0 && this.interceptTop + cHeight <= this.dragHeight - 5;

      if (heng && shu && canWidth && canHeight) {
        this.interceptCanvasWidth += widthStep;
        this.interceptCanvasHeight += heightStep;
      }

      if (heng && shu) {
        // 左上 || 左下
        if (type === 'nw' || type === 'sw') {
          this.interceptLeft -= widthStep;
        }
        // 左上 || 右上
        if (type === 'nw' || type === 'ne') {
          this.interceptTop -= heightStep;
        }
        pointOldLeft = left;
      }
    },
    // 左上
    nwPosMove: function nwPosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, left, lDir, 'nw');
    },
    // 右上
    nePosMove: function nePosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, this.interceptCanvasWidth - left, lDir, 'ne');
    },
    // 左下
    swPosMove: function swPosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, left, lDir, 'sw');
    },
    // 右下
    sePosMove: function sePosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, this.interceptCanvasWidth - left, lDir);
    },
    setAlign: function setAlign(res) {
      var ref = this.$refs.img;
      var clientWidth = ref.clientWidth;
      var clientHeight = ref.clientHeight;
      var width = res ? res.width : clientWidth;
      var height = res ? res.height : clientHeight;
      if (width !== 0 && height !== 0) {
        if (width > height) {
          this.align = 'horizontal';
        } else if (width < height) {
          this.align = 'vertical';
        } else {
          this.align = 'normal';
        }
      }
      this.canShow = true;
    },
    change: function change(e) {
      var this$1 = this;

      var files = e.target.files;

      if (!files) {
        return;
      }

      var postFiles = Array.prototype.slice.call(files);

      if (this.intercept.length === 0) {
        postFiles.forEach(function (file) {
          this$1.postHandle(file);
        });
      } else {
        var reader = new FileReader();
        reader.readAsDataURL(postFiles[0]);
        reader.onload = function (readerEvent) {
          this$1.img = readerEvent.target.result;
          this$1.openInterceptModal();
          setTimeout(function () {
            this$1.drag1.length = 0;
            this$1.drag1.push(this$1.$refs.drag1);
            this$1.previewImg = this$1.$refs.previewImg;
            this$1.dragWidth = this$1.previewImg.clientWidth;
            this$1.dragHeight = this$1.previewImg.clientHeight;
            this$1.dragPaddingLeft = (this$1.dragWidth - this$1.interceptWidth) / 2;
            this$1.dragPaddingTop = (this$1.dragHeight - this$1.interceptHeight) / 2;
            var imgScale = this$1.dragHeight / this$1.dragWidth;
            // 如果宽度超了
            if (this$1.dragWidth > this$1.interceptWidth) {
              this$1.dragWidth = this$1.interceptWidth;
              this$1.dragHeight = imgScale * this$1.dragWidth;
              this$1.dragPaddingLeft = (this$1.interceptWidth - this$1.dragWidth) / 2;
              this$1.dragPaddingTop = (this$1.interceptHeight - this$1.dragHeight) / 2;
            }
          }, 0);
        };
      }
    },
    postHandle: function postHandle(file) {
      var this$1 = this;

      // check format
      if (this.format.length) {
        var fileFormat = file.name.split('.').pop().toLocaleLowerCase();
        var checked = this.format.some(function (item) { return item.toLocaleLowerCase() === fileFormat; });
        if (!checked) {
          this.formatError(file, this.fileList, EmfeMessage);
          this.$emit('formatError', file, this.fileList, EmfeMessage);
          return false;
        }
      }
      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.exceededSize(file, this.fileList, EmfeMessage);
          this.$emit('exceededSize', file, this.fileList, EmfeMessage);
          return false;
        }
      }

      if (this.canUpload) {
        this.handleStart(file);
        this.beforeUpload(file, EmfeMessage);
        this.$emit('beforeUpload', file, EmfeMessage);
        this.canNotLoad();
        upload$1({
          headers: this.headers,
          withCredentials: this.withCredentials,
          file: file,
          data: this.data,
          filename: this.name,
          action: this.action,
          onSuccess: function (res) {
            if (!res.code) {
              this$1.handleSuccess(res, file);
            } else {
              this$1.handleError('上传失败', res, file);
            }
          },
          onError: function (err, response) {
            this$1.handleError(err, response, file);
          },
        });
      }

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
        if (this.fileType === 'image') {
          this.loadImg(res.url, res, fileData);
        } else {
          this.canLoad();
          this.$emit('success', res, fileData, this.fileList, EmfeMessage);
        }
      }
    },
    handleError: function handleError(err, response, file) {
      var fileData = this.getFile(file);
      var fileList = this.fileList;

      fileData.status = 'fail';
      this.canLoad();

      fileList.splice(fileList.indexOf(fileData), 1);
      this.error(err, response, file, EmfeMessage);
      this.$emit('error', err, response, file, EmfeMessage);
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
    loadImg: function loadImg(src, res, fileData) {
      var this$1 = this;

      var img = new Image();
      img.src = src;
      img.onload = function () {
        this$1.src = src;
        setTimeout(this$1.setAlign.bind(this$1, res), 0);
        this$1.canLoad();
        this$1.success(res, fileData, this$1.fileList, EmfeMessage);
        this$1.$emit('success', res, fileData, this$1.fileList, EmfeMessage);
      };
    },
    closeFn: function closeFn() {
      this.closeCommon();
    },
    closePlusFn: function closePlusFn() {
      this.closeCommon();
    },
    closeCommon: function closeCommon() {
      this.src = '';
      this.canShow = false;
      this.resetInputFile();
      this.close(EmfeMessage);
      this.$emit('close', EmfeMessage);
    },
    resetInputFile: function resetInputFile() {
      if (this.type === 'icon') {
        this.$refs.upload.value = '';
      } else {
        this.$refs.uploadPlus.value = '';
      }
      this.dragWidth = 'auto';
      this.dragHeight = 400;
      this.initIntercept();
    },
    canLoad: function canLoad() {
      this.canUpload = true;
      if (this.type === 'icon') {
        this.iconText = this.buttonText;
      } else {
        this.plusText = '+';
      }
    },
    canNotLoad: function canNotLoad() {
      this.canUpload = false;
      if (this.type === 'icon') {
        this.iconText = '上传中';
      } else {
        this.plusText = '...';
      }
    },
  },
  watch: {
    url: function url(val, oldVal) {
      if (val !== oldVal) {
        this.initImg();
      }
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
  oldX: 0,
  oldY: 0,
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
      type: [Number, Array],
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
    moveEle: {
      type: Boolean,
      default: true,
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
        // 有可能会变宽高，比如截取器
        this.elWidth = this.dragEl[0].clientWidth;
        this.elHeight = this.dragEl[0].clientHeight;
        var elEleWidth = this.$el.clientWidth;
        var elEleHeight = this.$el.clientHeight;
        downTop -= this.parentPaddingTop;
        downTop += this.scrollTop;
        downLeft -= this.parentPaddingLeft;
        downLeft += this.scrollLeft;
        if (Array.isArray(this.initialValue)) {
          downTop += this.initialValue[1];
          downLeft += this.initialValue[0];
        } else {
          downTop += this.initialValue;
          downLeft += this.initialValue;
        }
        this.dragEl.forEach(function (dragElement) {
          if (downTop < 0) {
            downTop = 0;
          } else if (downTop > elEleHeight - this$1.elHeight) {
            downTop = elEleHeight - this$1.elHeight;
          }
          console.log(downLeft, this$1.elWidth);
          if (downLeft < 0) {
            downLeft = 0;
          } else if (downLeft > elEleWidth - this$1.elWidth) {
            downLeft = elEleWidth - this$1.elWidth;
          }
          if (this$1.direction === 'vertical') {
            dragElement.style.top = downTop + "px";
          } else if (this$1.direction === 'horizontal') {
            dragElement.style.left = downLeft + "px";
          } else {
            dragElement.style.left = downLeft + "px";
            dragElement.style.top = downTop + "px";
          }
        });
      } else {
        // 有可能会变宽高，比如截取器
        this.elWidth = this.$el.clientWidth;
        this.elHeight = this.$el.clientHeight;
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
        elLeft = e.clientX - this.parentLeft;
        elLeft -= this.parentPaddingLeft;
        elLeft += this.scrollLeft;
        if (Array.isArray(this.initialValue)) {
          elTop += this.initialValue[1];
          elLeft += this.initialValue[0];
        } else {
          elTop += this.initialValue;
          elLeft += this.initialValue;
        }
      } else {
        elLeft = this.elLeft + disPosX;
        elTop = this.elTop + disPosY;
      }

      var newMovePos = this.testLimit(elLeft, elTop);

      if (this.moveEle) {
        if (this.dragEl && this.dragEl.length > 0) {
          this.dragEl.forEach(function (dragElement) {
            if (this$1.direction === 'vertical') {
              dragElement.style.top = (newMovePos[1]) + "px";
            } else if (this$1.direction === 'horizontal') {
              dragElement.style.left = (newMovePos[0]) + "px";
            } else {
              dragElement.style.left = (newMovePos[0]) + "px";
              dragElement.style.top = (newMovePos[1]) + "px";
            }
          });
        } else {
          this.dragStyle = "left: " + (newMovePos[0]) + "px; top: " + (newMovePos[1]) + "px";
          if (this.direction === 'vertical') {
            this.dragStyle = "top: " + (newMovePos[1]) + "px";
          } else if (this.direction === 'horizontal') {
            this.dragStyle = "left: " + (newMovePos[0]) + "px;";
          }
        }
      }
      this.$emit('drag', e, newMovePos[0], newMovePos[1], refPos.oldX - newMovePos[0], refPos.oldY - newMovePos[1]);
      refPos.oldX = newMovePos[0];
      refPos.oldY = newMovePos[1];

      e.stopPropagation();
      return false;
    },
    up: function up(e) {
      document.removeEventListener('mousemove', this.move, false);
      document.removeEventListener('mouseup', this.up, false);
      this.$emit('afterDrag', e);
    },
    testLimit: function testLimit(left, top) {
      var elLeft = left;
      var elTop = top;
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

      return [elLeft, elTop];
    },
  },
  watch: {
    dragDiyStyle: function dragDiyStyle(val, oldVal) {
      if (val !== oldVal) {
        this.dragStyle = val;
      }
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
var error = 'error';

var EmfeInput$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-input",class:_vm.addClass,style:(_vm.newStyle)},[_c('div',{class:[_vm.classList]},[(_vm.iconOk)?_c('emfe-icon',{attrs:{"type":_vm.iconType,"className":"emfe-input-box-icon-el"}}):_vm._e(),_vm._v(" "),_c('input',_vm._b({staticClass:"emfe-input-box-input",class:_vm.addInput,attrs:{"type":_vm.type,"placeholder":_vm.newPlaceholder,"maxlength":_vm.maxlength},domProps:{"value":_vm.currentValue},on:{"input":_vm.changeFn,"blur":_vm.blur}},'input',_vm.$props))],1),_vm._v(" "),(_vm.errOk)?_c('div',{staticClass:"emfe-input-box-text",class:_vm.addErrorText},[_vm._t("error")],2):_vm._e()])},
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
    readonly: {
      type: Boolean,
      default: false,
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
    maxlength: {
      type: [String, Number],
      default: '',
    },
    change: {
      type: Function,
      default: function () {},
    },
  },
  data: function data() {
    return {
      currentValue: this.value,
      newStyle: this.style,
      newPlaceholder: this.placeholder,
    };
  },
  computed: {
    classList: function classList() {
      return [
        ( obj = {}, obj[(prefixCls$3 + "-icon")] = this.iconOk, obj[("" + prefixCls$3)] = !this.iconOk, obj[((this.className) + "-input-box")] = !!this.className, obj ) ];
      var obj;
    },
    addClass: function addClass() {
      return [
        ( obj = {}, obj[((this.className) + "-input")] = !!this.className, obj ) ];
      var obj;
    },
    addInput: function addInput() {
      return [
        ( obj = {}, obj[("" + error)] = this.errOk, obj[((this.className) + "-input-box-input")] = !!this.className, obj ) ];
      var obj;
    },
    addErrorText: function addErrorText() {
      return [
        ( obj = {}, obj[((this.className) + "-input-box-text")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    changeFn: function changeFn() {
      var val = event.target.value;
      if (val === this.currentValue) { return; }
      this.currentValue = val;
      this.change(this.currentValue);
      this.$emit('change', this.currentValue);
      this.$emit('input', this.currentValue);
    },
    blur: function blur() {
      this.$emit('blur');
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.currentValue = val;
      }
    },
    placeholder: function placeholder(val, oldVal) {
      if (val !== oldVal) {
        this.newPlaceholder = val;
      }
    },
  },
};

EmfeInput$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeInput$1.name, EmfeInput$1);
};

var EmfeInputmore$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-inputmore",class:_vm.inputmoreName},[(_vm.icon)?_c('emfe-icon',{attrs:{"className":"emfe-inputmore","type":_vm.icon}}):_vm._e(),_vm._v(" "),_c('input',{staticClass:"emfe-inputmore-input",class:_vm.inputName,attrs:{"placeholder":_vm.newPlaceholder,"type":_vm.type},domProps:{"value":_vm.currentValue},on:{"input":_vm.input}}),_vm._v(" "),_c('button',{staticClass:"emfe-inputmore-button emfe-inputmore-button-plus",class:_vm.addName,on:{"click":_vm.plus}}),_vm._v(" "),_c('button',{staticClass:"emfe-inputmore-button emfe-inputmore-button-reduce",class:_vm.reduceName,on:{"click":_vm.reduce}})],1)},
staticRenderFns: [],
  name: 'EmfeInputmore',
  data: function data() {
    return {
      currentValue: this.value,
      newPlaceholder: this.placeholder,
      group: this.$parent.isGroup, // 如果是组合
    };
  },
  props: {
    icon: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    value: {
      type: [String, Number],
      default: '',
    },
    index: {
      type: Number,
      required: true,
    },
    className: String,
  },
  computed: {
    inputmoreName: function inputmoreName() {
      return [
        ( obj = {}, obj[((this.className) + "-inputmore")] = !!this.className, obj ) ];
      var obj;
    },
    inputName: function inputName() {
      return [
        ( obj = {
          'emfe-inputmore-input-icon': this.icon,
        }, obj[((this.className) + "-inputmore-input")] = !!this.className, obj ) ];
      var obj;
    },
    addName: function addName() {
      var hasMax = false;
      if (this.group) {
        var ref = this.$parent;
        var loops = ref.loops;
        var max = ref.max;
        hasMax = loops.length === max;
      }
      return [
        ( obj = {
          'emfe-inputmore-button-plus-disabled': !!hasMax,
        }, obj[((this.className) + "-inputmore-button-plus")] = !!this.className, obj ) ];
      var obj;
    },
    reduceName: function reduceName() {
      var hasMin = false;
      if (this.group) {
        var ref = this.$parent;
        var loops = ref.loops;
        var min = ref.min;
        hasMin = loops.length === min;
      }
      return [
        ( obj = {
          'emfe-inputmore-button-reduce-disabled': !!hasMin,
        }, obj[((this.className) + "-inputmore-button-reduce")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    input: function input(e) {
      var val = e.target.value;
      this.$emit('change', val);
      this.$emit('input', val);
    },
    reduce: function reduce() {
      if (this.group) {
        var ref = this.$parent;
        var loops = ref.loops;
        var min = ref.min;
        var now = loops[this.index];

        if (loops.length > min) {
          loops.splice(this.index, 1);
        }
        this.$emit('reduce', now, this.index, loops);
      } else {
        this.$emit('reduce', this.index);
      }
    },
    plus: function plus() {
      if (this.group) {
        var ref = this.$parent;
        var loops = ref.loops;
        var max = ref.max;
        var newLoops = ref.newLoops;

        if (loops.length < max) {
          loops.splice(this.index + 1, 0, newLoops || {
            num: '',
          });
        }
        this.$emit('plus', loops[this.index], this.index, loops);
      } else {
        this.$emit('plus', this.index);
      }
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.currentValue = val;
      }
    },
    placeholder: function placeholder(val, oldVal) {
      if (val !== oldVal) {
        this.newPlaceholder = val;
      }
    },
  },
};

var EmfeInputmoreGroup = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-inputmore-group",class:_vm.groupName},_vm._l((_vm.loops),function(data,dataIndex){return _c('div',{staticClass:"emfe-inputmore-group-wrap",on:{"click":function($event){_vm.moreClick(dataIndex);}}},[_c('emfe-inputmore',{key:dataIndex,attrs:{"className":_vm.inputmoreName,"placeholder":data.placeholder || _vm.placeholder,"icon":data.icon || _vm.icon,"type":data.type || _vm.type,"index":dataIndex},on:{"reduce":_vm.reduce,"plus":_vm.plus,"input":_vm.input},model:{value:(data.num),callback:function ($$v) {data.num=$$v;},expression:"data.num"}})],1)}))},
staticRenderFns: [],
  name: 'EmfeInputmoreGroup',
  data: function data() {
    var loops = null;
    var isObject = this.datas.every(function (data) { return !Array.isArray(data); });
    if (isObject) {
      loops = [];
      this.datas.forEach(function (data) {
        loops.push({
          num: data,
        });
      });
    } else {
      loops = this.datas;
    }
    return {
      canDelete: true,
      isGroup: true,
      isObject: isObject,
      loops: loops,
      newLoops: this.new,
      index: 0,
    };
  },
  props: {
    className: String,
    datas: {
      type: Array,
      required: true,
    },
    placeholder: String,
    new: {
      type: Object,
    },
    type: String,
    icon: String,
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: 1,
    },
    inputHandle: Function,
    plusHandle: Function,
    reduceHandle: Function,
  },
  computed: {
    groupName: function groupName() {
      return [
        ( obj = {}, obj[((this.className) + "-inputmore-group")] = !!this.className, obj ) ];
      var obj;
    },
    inputmoreName: function inputmoreName() {
      var name = this.className ? (" " + (this.className)) : '';
      return ("emfe-inputmore-group" + name);
    },
  },
  methods: {
    moreClick: function moreClick(index) {
      this.index = index;
    },
    reduce: function reduce(now, data, datas) {
      if (this.reduceHandle) {
        this.reduceHandle(now, data, datas, this.index);
      }
      this.$emit('reduce', now, data, datas, this.index);
    },
    plus: function plus(now, data, datas) {
      if (this.plusHandle) {
        this.plusHandle(now, data, datas, this.index);
      }
      this.$emit('plus', now, data, datas, this.index);
    },
    input: function input(now) {
      if (this.inputHandle) {
        this.inputHandle(now, this.index);
      }
      this.$emit('input', now, this.index);
    },
  },
};

EmfeInputmore$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeInputmore$1.name, EmfeInputmore$1);
};

EmfeInputmoreGroup.install = function (Vue$$1) {
  Vue$$1.component(EmfeInputmoreGroup.name, EmfeInputmoreGroup);
};

var EmfeInputmore = {
  EmfeInputmore: EmfeInputmore$1,
  EmfeInputmoreGroup: EmfeInputmoreGroup,
};

var EmfeTel$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-tel",class:_vm.telName},[_c('div',{staticClass:"emfe-tel-prefix",class:_vm.prefixName,on:{"click":function($event){$event.stopPropagation();_vm.toggle($event);}}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.nowData.url),expression:"nowData.url"}],staticClass:"emfe-tel-prefix-piece",attrs:{"src":_vm.nowData.url,"alt":_vm.nowData.name}}),_vm._v(" "),_c('span',{staticClass:"emfe-tel-prefix-text",class:_vm.prefixTextName},[_vm._v("+"+_vm._s(_vm.nowData.prefix))]),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.flagStatus),expression:"flagStatus"}],staticClass:"emfe-tel-prefix-flag"},_vm._l((_vm.datas),function(data){return _c('li',{staticClass:"emfe-tel-prefix-label",on:{"click":function($event){$event.stopPropagation();_vm.choice(data);}}},[_c('img',{staticClass:"emfe-tel-prefix-icon",attrs:{"src":data.url,"alt":data.name}}),_vm._v(" "),_c('span',{staticClass:"emfe-tel-prefix-icon-piece"},[_vm._v(_vm._s(data.name))]),_vm._v(" "),_c('span',{staticClass:"emfe-tel-prefix-icon-tel"},[_vm._v("+"+_vm._s(data.prefix))])])}))]),_vm._v(" "),_c('input',{staticClass:"emfe-tel-input",class:_vm.inputName,attrs:{"type":_vm.type,"placeholder":_vm.placeholder},domProps:{"value":_vm.nowData.tel},on:{"input":_vm.telChange,"blur":_vm.telBlur}})])},
staticRenderFns: [],
  name: 'EmfeTel',
  data: function data() {
    var nowData = !this.value || O.empty(this.value) ? {
      tel: '请选择',
      name: '',
      prefix: '',
    } : this.value;
    return {
      flagStatus: false,
      nowData: nowData,
    };
  },
  props: {
    datas: {
      type: Array,
      required: true,
    },
    value: {
      type: Object,
      default: function () {},
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
    type: {
      type: String,
      default: 'number',
    },
    className: String,
  },
  computed: {
    telName: function telName() {
      return [
        ( obj = {}, obj[((this.className) + "-tel")] = !!this.className, obj ) ];
      var obj;
    },
    prefixName: function prefixName() {
      return [
        ( obj = {}, obj[((this.className) + "-tel-prefix")] = !!this.className, obj ) ];
      var obj;
    },
    prefixTextName: function prefixTextName() {
      return [
        ( obj = {}, obj[((this.className) + "-tel-prefix-text")] = !!this.className, obj ) ];
      var obj;
    },
    inputName: function inputName() {
      return [
        ( obj = {}, obj[((this.className) + "-tel-input")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    toggle: function toggle() {
      this.flagStatus = true;
    },
    choice: function choice(item) {
      this.nowData = item;
      this.flagStatus = false;
      this.$emit('choice', this.nowData);
      this.$emit('input', this.nowData);
    },
    telChange: function telChange(ev) {
      this.nowData.tel = ev.target.value;
      this.$emit('input', this.nowData);
    },
    close: function close() {
      this.flagStatus = false;
    },
    telBlur: function telBlur() {
      this.$emit('blur');
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
  },
};

EmfeTel$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTel$1.name, EmfeTel$1);
};

var EmfeTelC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-tel-c",class:[_vm.telName, {'emfe-tel-c-input-error': _vm.errOk}]},[_c('div',{staticClass:"emfe-tel-c-prefix",class:[_vm.prefixName, {'emfe-tel-c-input-error-right': _vm.errOk}],on:{"click":function($event){$event.stopPropagation();_vm.toggle($event);}}},[(_vm.nowData.type === 1)?_c('span',{staticClass:"emfe-tel-c-prefix-text",class:_vm.prefixTextName},[_vm._v("+"+_vm._s(_vm.nowData.prefix))]):_vm._e(),_vm._v(" "),(_vm.nowData.type === 2)?_c('span',{staticClass:"emfe-tel-c-prefix-text",class:_vm.prefixTextName},[_vm._v(_vm._s(_vm.nowData.text))]):_vm._e(),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.flagStatus),expression:"flagStatus"}],staticClass:"emfe-tel-c-prefix-flag"},[_vm._l((_vm.telDatas),function(data){return (_vm.telDatas)?_c('li',{staticClass:"emfe-tel-c-prefix-label",on:{"click":function($event){$event.stopPropagation();_vm.choice(data);}}},[_c('span',{staticClass:"emfe-tel-c-prefix-icon-tel"},[_vm._v("+"+_vm._s(data.prefix))])]):_vm._e()}),_vm._v(" "),_vm._l((_vm.idDatas),function(data){return (_vm.idDatas)?_c('li',{staticClass:"emfe-tel-c-prefix-label",on:{"click":function($event){$event.stopPropagation();_vm.choice(data);}}},[_c('span',{staticClass:"emfe-tel-c-prefix-icon-tel"},[_vm._v(_vm._s(data.text))])]):_vm._e()})],2)]),_vm._v(" "),_c('input',{staticClass:"emfe-tel-c-input",class:_vm.inputName,attrs:{"type":_vm.type,"placeholder":_vm.placeholder},domProps:{"value":_vm.nowData.tel},on:{"input":_vm.telChange,"blur":_vm.telBlur}}),_vm._v(" "),(_vm.errOk)?_c('div',{staticClass:"emfe-tel-c-error",class:_vm.addErrorText},[_vm._t("error")],2):_vm._e()])},
staticRenderFns: [],
  name: 'EmfeTelC',
  data: function data() {
    var nowData = !this.value || O.empty(this.value) ? {
      tel: '请选择',
      name: '',
      prefix: '',
    } : this.value;
    return {
      flagStatus: false,
      nowData: nowData,
    };
  },
  props: {
    telDatas: {
      type: Array,
    },
    idDatas: {
      type: Array,
    },
    value: {
      type: Object,
      default: function () {},
    },
    errOk: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
    type: {
      type: String,
      default: 'number',
    },
    className: String,
  },
  computed: {
    telName: function telName() {
      return [
        ( obj = {}, obj[((this.className) + "-tel")] = !!this.className, obj ) ];
      var obj;
    },
    prefixName: function prefixName() {
      return [
        ( obj = {}, obj[((this.className) + "-tel-prefix")] = !!this.className, obj ) ];
      var obj;
    },
    prefixTextName: function prefixTextName() {
      return [
        ( obj = {}, obj[((this.className) + "-tel-prefix-text")] = !!this.className, obj ) ];
      var obj;
    },
    inputName: function inputName() {
      return [
        ( obj = {}, obj[((this.className) + "-tel-input")] = !!this.className, obj ) ];
      var obj;
    },
    addErrorText: function addErrorText() {
      return [
        ( obj = {}, obj[((this.className) + "-tel-error")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    toggle: function toggle() {
      this.flagStatus = true;
    },
    choice: function choice(item) {
      this.nowData = item;
      this.flagStatus = false;
      this.$emit('choice', this.nowData);
      this.$emit('input', this.nowData);
    },
    telChange: function telChange(ev) {
      console.log(this.nowData);
      if (this.nowData.type === 1) {
        this.nowData.tel = ev.target.value;
      } else {
        this.nowData.card = ev.target.value;
      }
      this.$emit('input', this.nowData);
    },
    close: function close() {
      this.flagStatus = false;
    },
    telBlur: function telBlur() {
      this.$emit('blur');
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
  },
};

EmfeTelC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTelC$1.name, EmfeTelC$1);
};

var timer = null;
var go = true; // 是否可以继续获取

var EmfeSmscode$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-smscode",class:_vm.smscodeName},[(_vm.icon)?_c('emfe-icon',{attrs:{"className":"emfe-smscode","type":_vm.icon}}):_vm._e(),_vm._v(" "),_c('input',{staticClass:"emfe-smscode-input",class:_vm.codeName,attrs:{"type":"number","placeholder":_vm.placeholder,"disabled":_vm.newDisabled},domProps:{"value":_vm.nowData},on:{"input":_vm.input,"blur":_vm.blur}}),_vm._v(" "),_c('button',{staticClass:"emfe-smscode-button",class:_vm.btmName,on:{"click":_vm.clickFn}},[_vm._v(_vm._s(_vm.btnText))])],1)},
staticRenderFns: [],
  name: 'EmfeSmscode',
  data: function data() {
    var nowData = !this.value ? '' : this.value;
    return {
      nowData: nowData,
      btnText: this.title,
      allTimes: this.times,
      newDisabled: this.disabled,
      start: '',
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入验证码',
    },
    title: {
      type: String,
      default: '获取验证码',
    },
    icon: String,
    disabled: Boolean,
    errorTitle: {
      type: String,
      default: '重试',
    },
    value: {
      type: [Number, String],
    },
    times: {
      type: [Number, String],
      default: 60,
    },
    className: String,
    timeStart: {
      type: [String, Boolean],
      default: false,
    },
    click: Function,
    end: {
      type: Function,
      default: function () {},
    },
  },
  computed: {
    smscodeName: function smscodeName() {
      return [
        ( obj = {
          'emfe-smscodeicon': this.icon,
        }, obj[((this.className) + "-smscode")] = !!this.className, obj ) ];
      var obj;
    },
    codeName: function codeName() {
      return [
        ( obj = {
          'emfe-smscode-input-icon': this.icon,
        }, obj[((this.className) + "-smscode-code")] = !!this.className, obj ) ];
      var obj;
    },
    btmName: function btmName() {
      return [
        ( obj = {}, obj[((this.className) + "-smscode-button")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    resetAuto: function resetAuto() {
      this.btnText = this.errorTitle;
      this.allTimes = this.times;
      go = true;
      this.$emit('end', false);
      this.end(false);
    },
    auto: function auto() {
      var this$1 = this;

      setTimeout(function () {
        if (this$1.start) {
          if (this$1.allTimes > 1) {
            this$1.allTimes--;
            this$1.btnText = (this$1.allTimes) + "秒后重试";
            timer = setTimeout(this$1.auto.bind(this$1), 1000);
          } else {
            clearTimeout(timer);
            this$1.resetAuto();
          }
        }
      }, 500);
    },
    input: function input(ev) {
      var val = ev.target.value;
      this.$emit('change', val);
      this.$emit('input', val);
    },
    clickFn: function clickFn() {
      if (go && !this.newDisabled && !this.start) {
        go = false;
        this.auto();
        this.$emit('click');
      }
      if (this.click) {
        this.click();
      }
    },
    blur: function blur() {
      this.$emit('blur');
    },
  },
  watch: {
    title: function title(val, oldVal) {
      if (val !== oldVal) {
        this.btnText = val;
      }
    },
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
    disabled: function disabled(val, oldVal) {
      if (val !== oldVal) {
        this.newDisabled = val;
      }
    },
    timeStart: function timeStart(val, oldVal) {
      if (val !== oldVal) {
        this.start = val;
      }
    },
  },
};

EmfeSmscode$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeSmscode$1.name, EmfeSmscode$1);
};

var timer$1 = null;
var go$1 = true; // 是否可以继续获取

var EmfeSmscodeC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-smscode-c",class:_vm.smscodeName},[_c('emfe-input',{attrs:{"iconOk":_vm.iconFlg,"iconType":_vm.icon,"errOk":_vm.errOk,"placeholder":_vm.placeholder,"className":"emfe-smscode-c","value":_vm.nowData},on:{"change":_vm.change,"blur":_vm.blur}},[(_vm.errOk)?_c('div',{slot:"error"},[_vm._t("default")],2):_vm._e()]),_vm._v(" "),_c('emfe-button-c',{attrs:{"theme":"primary","className":"emfe-smscode-c"},on:{"click":_vm.clickFn}},[_vm._v(_vm._s(_vm.btnText))])],1)},
staticRenderFns: [],
  name: 'EmfeSmscodeC',
  data: function data() {
    var nowData = !this.value ? '' : this.value;
    return {
      nowData: nowData,
      btnText: this.title,
      allTimes: this.times,
      newDisabled: this.disabled,
      start: '',
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入验证码',
    },
    title: {
      type: String,
      default: '获取验证码',
    },
    iconFlg: {
      type: [Boolean, String],
      default: false,
    },
    icon: String,
    disabled: Boolean,
    errorTitle: {
      type: String,
      default: '重试',
    },
    value: {
      type: [Number, String],
    },
    times: {
      type: [Number, String],
      default: 60,
    },
    className: String,
    timeStart: {
      type: [String, Boolean],
      default: false,
    },
    click: Function,
    end: {
      type: Function,
      default: function () {},
    },
    errOk: {
      type: [String, Boolean],
      default: false,
    },
  },
  computed: {
    smscodeName: function smscodeName() {
      return [
        ( obj = {
          'emfe-smscodeicon': this.icon,
        }, obj[((this.className) + "-smscode")] = !!this.className, obj ) ];
      var obj;
    },
    codeName: function codeName() {
      return [
        ( obj = {
          'emfe-smscode-input-icon': this.icon,
        }, obj[((this.className) + "-smscode-code")] = !!this.className, obj ) ];
      var obj;
    },
    btmName: function btmName() {
      return [
        ( obj = {}, obj[((this.className) + "-smscode-button")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    resetAuto: function resetAuto() {
      this.btnText = this.errorTitle;
      this.allTimes = this.times;
      go$1 = true;
      this.$emit('end', false);
      this.end(false);
    },
    auto: function auto() {
      var this$1 = this;

      setTimeout(function () {
        if (this$1.start) {
          if (this$1.allTimes > 1) {
            this$1.allTimes--;
            this$1.btnText = (this$1.allTimes) + "秒后重试";
            timer$1 = setTimeout(this$1.auto.bind(this$1), 1000);
          } else {
            clearTimeout(timer$1);
            this$1.resetAuto();
          }
        }
      }, 500);
    },
    input: function input(ev) {
      var val = ev.target.value;
      this.$emit('change', val);
      this.$emit('input', val);
    },
    clickFn: function clickFn() {
      if (go$1 && !this.newDisabled && !this.start) {
        go$1 = false;
        this.auto();
        this.$emit('click');
      }
      if (this.click) {
        this.click();
      }
    },
    blur: function blur() {
      this.$emit('blur');
    },
    change: function change(val) {
      this.$emit('input', val);
    },
  },
  watch: {
    title: function title(val, oldVal) {
      if (val !== oldVal) {
        this.btnText = val;
      }
    },
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
    disabled: function disabled(val, oldVal) {
      if (val !== oldVal) {
        this.newDisabled = val;
      }
    },
    timeStart: function timeStart(val, oldVal) {
      if (val !== oldVal) {
        this.start = val;
      }
    },
  },
};

EmfeSmscodeC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeSmscodeC$1.name, EmfeSmscodeC$1);
};

var EmfeImgcode$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-imgcode",class:_vm.imgcodeName},[_c('input',{staticClass:"emfe-imgcode-input",class:_vm.codeName,attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":_vm.nowData},on:{"input":_vm.input}}),_vm._v(" "),_c('img',{staticClass:"emfe-imgcode-code",attrs:{"src":_vm.newSrc,"alt":"图片验证码"},on:{"click":_vm.click}})])},
staticRenderFns: [],
  name: 'emfe-imgcode',
  data: function data() {
    var nowData = !this.value ? '' : this.value;
    return {
      nowData: nowData,
      newSrc: this.src,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入验证码',
    },
    value: {
      type: [Number, String],
    },
    src: {
      type: String,
      required: true,
    },
    className: String,
  },
  computed: {
    imgcodeName: function imgcodeName() {
      return [
        ( obj = {}, obj[((this.className) + "-imgcode")] = !!this.className, obj ) ];
      var obj;
    },
    codeName: function codeName() {
      return [
        ( obj = {}, obj[((this.className) + "-imgcode-code")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    input: function input(ev) {
      var val = ev.target.value;
      this.$emit('change', val);
      this.$emit('input', val);
    },
    click: function click() {
      this.$emit('click');
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
    src: function src(val, oldVal) {
      if (val !== oldVal) {
        this.newSrc = val;
      }
    },
  },
};

EmfeImgcode$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeImgcode$1.name, EmfeImgcode$1);
};

var EmfeImgcodeC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-imgcode-c",class:_vm.imgcodeName},[_c('input',{staticClass:"emfe-imgcode-c-input",class:_vm.codeName,attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":_vm.nowData},on:{"input":_vm.input}}),_vm._v(" "),_c('img',{staticClass:"emfe-imgcode-c-code",attrs:{"src":_vm.newSrc,"alt":"图片验证码"},on:{"click":_vm.click}})])},
staticRenderFns: [],
  name: 'emfe-imgcode-c',
  data: function data() {
    var nowData = !this.value ? '' : this.value;
    return {
      nowData: nowData,
      newSrc: this.src,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入验证码',
    },
    value: {
      type: [Number, String],
    },
    src: {
      type: String,
      required: true,
    },
    className: String,
  },
  computed: {
    imgcodeName: function imgcodeName() {
      return [
        ( obj = {}, obj[((this.className) + "-imgcode")] = !!this.className, obj ) ];
      var obj;
    },
    codeName: function codeName() {
      return [
        ( obj = {}, obj[((this.className) + "-imgcode-code")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    input: function input(ev) {
      var val = ev.target.value;
      this.$emit('change', val);
      this.$emit('input', val);
    },
    click: function click() {
      this.$emit('click');
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
    src: function src(val, oldVal) {
      if (val !== oldVal) {
        this.newSrc = val;
      }
    },
  },
};

EmfeImgcodeC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeImgcodeC$1.name, EmfeImgcodeC$1);
};

var EmfeSteps$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-steps",class:_vm.stepsName},[_c('div',{staticClass:"emfe-steps-line"},_vm._l((_vm.datas),function(data,dataIndex){return _c('div',{class:{'emfe-steps-item-first': dataIndex === 0, 'emfe-steps-item-last': dataIndex === _vm.datas.length - 1, 'emfe-steps-item': dataIndex !== _vm.datas.length - 1 && dataIndex !== 0}},[(dataIndex === 0)?[(dataIndex === _vm.active)?[_c('emfe-icon',{attrs:{"className":"emfe-steps-item-first-on","type":data.icon}})]:[_c('emfe-icon',{attrs:{"className":"emfe-steps-item-first","type":data.icon}})]]:(dataIndex === _vm.datas.length - 1)?[(dataIndex === _vm.active)?[_c('emfe-icon',{attrs:{"className":"emfe-steps-item-last-on","type":data.icon}})]:[_c('emfe-icon',{attrs:{"className":"emfe-steps-item-last","type":data.icon}})]]:[(dataIndex === _vm.active)?[_c('emfe-icon',{attrs:{"className":"emfe-steps-item-on","type":data.icon}})]:[_c('emfe-icon',{attrs:{"className":"emfe-steps-item","type":data.icon}})]],_vm._v(" "),_c('span',{staticClass:"emfe-steps-item-text",class:{'emfe-steps-item-on-text': _vm.active === dataIndex}},[_vm._v(_vm._s(data.title))])],2)}))])},
staticRenderFns: [],
  name: 'EmfeSteps',
  props: {
    datas: {
      type: Array,
      required: true,
    },
    active: {
      type: Number,
      required: true,
    },
    className: String,
  },
  computed: {
    stepsName: function stepsName() {
      return [
        ( obj = {}, obj[((this.className) + "-steps")] = !!this.className, obj ) ];
      var obj;
    },
  },
};

EmfeSteps$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeSteps$1.name, EmfeSteps$1);
};

var EmfeStepsC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-steps-c",class:_vm.stepscName},[_c('div',{staticClass:"emfe-steps-c-text"},_vm._l((_vm.datas.stepsText),function(item){return _c('p',{staticClass:"emfe-steps-c-text-item"},[_vm._v(_vm._s(item.text))])})),_vm._v(" "),_c('div',{staticClass:"emfe-steps-c-main"},_vm._l((_vm.datas.allStepsNums),function(i){return _c('div',{staticClass:"emfe-steps-c-main-item",class:{'emfe-steps-c-main-flex': i !== _vm.datas.allStepsNums}},[(i >= _vm.active)?_c('p',{staticClass:"emfe-steps-c-main-item-text",class:{'emfe-steps-c-main-item-now': i === _vm.active}},[_vm._v(_vm._s(i))]):_vm._e(),_vm._v(" "),(i < _vm.active)?_c('emfe-icon',{attrs:{"type":"querentouxiang","className":"emfe-steps-c"}}):_vm._e(),_vm._v(" "),(i !== _vm.datas.allStepsNums)?_c('div',{staticClass:"emfe-steps-c-main-item-line",class:{'emfe-steps-c-main-item-line-active': i < _vm.active}}):_vm._e()],1)}))])},
staticRenderFns: [],
  name: 'EmfeSteps',
  props: {
    datas: {
      type: Object,
      required: true,
    },
    active: {
      type: Number,
      required: true,
    },
    className: String,
  },
  computed: {
    stepscName: function stepscName() {
      return [
        ( obj = {}, obj[((this.className) + "-stepsc")] = !!this.className, obj ) ];
      var obj;
    },
  },
};

EmfeStepsC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeStepsC$1.name, EmfeStepsC$1);
};

var EmfeNumber$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-number",class:_vm.numberName},[_c('button',{staticClass:"emfe-number-reduce",class:{'emfe-number-reduce-disable': _vm.reducedisable},on:{"click":_vm.reduce}}),_vm._v(" "),_c('div',{staticClass:"emfe-number-num"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.num),expression:"num"}],staticClass:"emfe-number-val",class:{'emfe-number-val-nounit': !_vm.unit},attrs:{"type":"tel","maxlength":_vm.max.length,"disabled":_vm.disabled},domProps:{"value":(_vm.num)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.num=$event.target.value;},_vm.input],"focus":_vm.focus}}),_vm._v(" "),(_vm.unit)?_c('i',{staticClass:"emfe-number-unit"},[_vm._v(_vm._s(_vm.unit))]):_vm._e()]),_vm._v(" "),_c('button',{staticClass:"emfe-number-plus",class:{'emfe-number-plus-disable': _vm.plusdisable},on:{"click":_vm.plus}})])},
staticRenderFns: [],
  name: 'EmfeNumber',
  data: function data() {
    return {
      num: this.value,
    };
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: '',
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    step: {
      type: Number,
      default: 5,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    className: String,
  },
  computed: {
    numberName: function numberName() {
      return [
        ( obj = {}, obj[((this.className) + "-number")] = !!this.className, obj ) ];
      var obj;
    },
    plusdisable: function plusdisable() {
      return this.max - this.num < this.step;
    },
    reducedisable: function reducedisable() {
      return this.num - this.min < this.step;
    },
  },
  methods: {
    toFix: function toFix() {
      var step = this.step.toString();
      var stepList = step.split('.');
      var fixNum = 0;
      if (stepList.length > 1) {
        fixNum = stepList[1].length;
      }
      return fixNum;
    },
    plus: function plus() {
      var fixNum = this.toFix();
      if (!this.plusdisable) {
        var oldNum = this.num;
        this.num += this.step;
        this.num = this.num.toFixed(fixNum) - 0;
        this.$emit('change', this.num, oldNum);
        this.$emit('input', this.num);
      }
    },
    reduce: function reduce() {
      var fixNum = this.toFix();
      if (!this.reducedisable) {
        var oldNum = this.num;
        this.num -= this.step;
        this.num = this.num.toFixed(fixNum) - 0;
        this.$emit('change', this.num, oldNum);
        this.$emit('input', this.num);
      }
    },
    input: function input(ev) {
      var ref = ev.target;
      var value = ref.value;
      if (value > this.max) {
        this.num = this.max;
      }
      if (value < this.min) {
        this.num = this.min;
      }
      this.$emit('input', this.num - 0);
    },
    focus: function focus(ev) {
      ev.target.select();
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.num = val;
      }
    },
  },
};

EmfeNumber$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeNumber$1.name, EmfeNumber$1);
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
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-date",class:_vm.dateName},[(!_vm.open && !_vm.disabled)?_c('button',{staticClass:"emfe-date-btn",on:{"click":function($event){$event.stopPropagation();_vm.toggle($event);}}},[_c('span',{staticClass:"emfe-date-btn-text",class:{'emfe-date-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.date))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"rili","className":"emfe-date"},on:{"icon-click":_vm.toggle}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-date"},on:{"icon-click":_vm.cancel}})],1):_vm._e(),_vm._v(" "),(!_vm.open && _vm.disabled)?_c('button',{staticClass:"emfe-date-btn emfe-date-btn-disabled"},[_c('span',{staticClass:"emfe-date-btn-text",class:{'emfe-date-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.date))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"rili","className":"emfe-date"}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-date"}})],1):_vm._e(),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-date-box",class:{'emfe-date-box-position': !_vm.open},style:(_vm.panelstyle)},[_c('div',{staticClass:"emfe-date-header"},[_c('button',{staticClass:"emfe-date-prevyear",on:{"click":function($event){$event.stopPropagation();_vm.prevYear($event);}}},[_vm._v("<<")]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"emfe-date-prevmonth",on:{"click":function($event){$event.stopPropagation();_vm.prevMonth($event);}}},[_vm._v("<")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"emfe-date-text"},[_c('i',{staticClass:"emfe-date-text-year",on:{"click":function($event){$event.stopPropagation();_vm.yearHandle($event);}}},[_vm._v(_vm._s(_vm.year))]),_vm._v(" "),_c('em',[_vm._v("-")]),_vm._v(" "),_c('i',{staticClass:"emfe-date-text-month",on:{"click":function($event){$event.stopPropagation();_vm.monthHandle($event);}}},[_vm._v(_vm._s(_vm.month+1))])]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'month'),expression:"currentView === 'month'"}],staticClass:"emfe-date-text"},[_c('i',{staticClass:"emfe-date-text-year",on:{"click":function($event){$event.stopPropagation();_vm.yearHandle($event);}}},[_vm._v(_vm._s(_vm.year))])]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'year'),expression:"currentView === 'year'"}],staticClass:"emfe-date-text"},[_c('i',{staticClass:"emfe-date-text-yearrange",on:{"click":function($event){$event.stopPropagation();_vm.yearHandle($event);}}},[_vm._v(_vm._s(_vm.startYear)+" - "+_vm._s(_vm.years[_vm.years.length - 1]))])]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"emfe-date-nextmonth",on:{"click":function($event){$event.stopPropagation();_vm.nextMonth($event);}}},[_vm._v(">")]),_vm._v(" "),_c('button',{staticClass:"emfe-date-nextyear",on:{"click":function($event){$event.stopPropagation();_vm.nextYear($event);}}},[_vm._v(">>")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}]},[_c('div',{staticClass:"emfe-date-week"},[_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("日")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("一")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("二")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("三")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("四")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("五")]),_vm._v(" "),_c('span',{staticClass:"emfe-date-week-item"},[_vm._v("六")])]),_vm._v(" "),_c('div',{staticClass:"emfe-date-day"},[_vm._l((_vm.lastMonthDays),function(day){return _c('span',{staticClass:"emfe-date-item emfe-date-item-prev",class:{'emfe-date-item-disable': day.undo},on:{"click":function($event){$event.stopPropagation();_vm.choicePrevMonthDay(day);}}},[_vm._v(_vm._s(day.num))])}),_vm._v(" "),_vm._l((_vm.days),function(day){return _c('span',{staticClass:"emfe-date-item",class:{'emfe-date-item-disable': day.undo, 'emfe-date-today': day.today, 'emfe-date-choice': day.choice},on:{"click":function($event){$event.stopPropagation();_vm.choiceDay(day);}}},[_vm._v(_vm._s(day.num))])}),_vm._v(" "),_vm._l((_vm.nextMonthDays),function(day){return _c('span',{staticClass:"emfe-date-item emfe-date-item-prev",class:{'emfe-date-item-disable': day.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceNextMonthDay(day);}}},[_vm._v(_vm._s(day.num))])})],2)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'month'),expression:"currentView === 'month'"}],staticClass:"emfe-date-month"},_vm._l((_vm.months),function(month){return _c('span',{staticClass:"emfe-date-month-item",on:{"click":function($event){$event.stopPropagation();_vm.choiceMonth(month);}}},[_vm._v(_vm._s(month))])})),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'year'),expression:"currentView === 'year'"}],staticClass:"emfe-date-year"},_vm._l((_vm.years),function(year){return _c('span',{staticClass:"emfe-date-year-item",on:{"click":function($event){$event.stopPropagation();_vm.choiceYear(year);}}},[_vm._v(_vm._s(year))])})),_vm._v(" "),(_vm.confirm)?_c('div',{staticClass:"emfe-date-footer"},[_c('button',{staticClass:"emfe-date-ok",on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v("确定")])]):_vm._e()])])],1)},
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
    panelstyle: {
      type: Object,
      default: function () {},
    },
    format: {
      type: String,
      default: '/',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      type: false,
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
    this.initData();
  },
  methods: {
    initData: function initData() {
      if (this.value && this.value !== this.placeholder) {
        var vals = this.value.split(this.format);
        this.year = vals[0];
        this.month = vals[1] - 1;
        this.day = vals[2] - 0;
        this.day = this.day > 9 ? this.day : ("0" + (this.day));
        var month = this.month + 1 > 9 ? this.month + 1 : ("0" + (this.month + 1));
        this.date = "" + (this.year) + (this.format) + month + (this.format) + (this.day);
      } else if (this.today && !this.year) {
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth();
      }
    },
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
        this.$emit('input', this.date);
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
      this.$emit('input', this.date);
      this.$emit('cancel', this.date);
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
      }
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
  handleConputedDate: function (i, times) {
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

var EmfeDateM$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-date-m",class:_vm.buttonName},[(!_vm.open && !_vm.disabled)?_c('button',{staticClass:"emfe-date-m-btn",class:_vm.buttonName,on:{"click":_vm.toggle}},[_c('span',{staticClass:"emfe-date-m-btn-text",class:{'emfe-date-m-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.date))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"rili","className":"emfe-date-m"},on:{"icon-click":_vm.toggle}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-date-m"},on:{"icon-click":_vm.cancel}})],1):_vm._e(),_vm._v(" "),(!_vm.open && _vm.disabled)?_c('button',{staticClass:"emfe-date-m-btn emfe-date-m-btn-disabled",class:_vm.buttonName},[_c('span',{staticClass:"emfe-date-m-btn-text"},[_vm._v(_vm._s(_vm.date))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"rili","className":"emfe-date-m"}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-date-m"}})],1):_vm._e(),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-date-m-box",class:{'emfe-date-m-box-position': !_vm.open}},[(_vm.confirm)?_c('div',{staticClass:"emfe-date-m-footer"},[_c('button',{staticClass:"emfe-date-m-ok",on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v("确定")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"emfe-date-m-main"},[_c('div',{staticClass:"emfe-date-m-item"},[_c('ul',{staticClass:"emfe-date-m-list"},_vm._l((_vm.years),function(yearLoop){return _c('li',{staticClass:"emfe-date-m-list-item",class:{'emfe-date-m-list-item-on': yearLoop.num === _vm.year, 'emfe-date-m-list-item-disable': yearLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceYear(yearLoop);}}},[_vm._v(_vm._s(yearLoop.num))])}))]),_vm._v(" "),_c('div',{staticClass:"emfe-date-m-item"},[_c('ul',{staticClass:"emfe-date-m-list"},_vm._l((_vm.months),function(monthLoop){return _c('li',{staticClass:"emfe-date-m-list-item",class:{'emfe-date-m-list-item-on': monthLoop.num === _vm.month, 'emfe-date-m-list-item-disable': monthLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceMonth(monthLoop);}}},[_vm._v(_vm._s(monthLoop.num))])}))]),_vm._v(" "),_c('div',{staticClass:"emfe-date-m-item"},[_c('ul',{staticClass:"emfe-date-m-list"},_vm._l((_vm.days),function(dayLoop,dayIndex){return _c('li',{staticClass:"emfe-date-m-list-item",class:{'emfe-date-m-list-item-on': dayLoop.num === _vm.day, 'emfe-date-m-list-item-disable': dayLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceDay(dayLoop);}}},[_vm._v(_vm._s(dayLoop.num))])}))])])])])],1)},
staticRenderFns: [],
  name: 'EmfeTimeM',
  data: function data() {
    return {
      years: [],
      months: [],
      days: [],
      year: '',
      month: '',
      day: '',
      choiced: false,
      status: this.open,
    };
  },
  props: {
    format: {
      type: String,
      default: '/',
    },
    yearStart: {
      type: Number,
      default: 1920,
    },
    yearEnd: {
      type: Number,
      default: 2020,
    },
    // 默认文案
    placeholder: {
      type: String,
      default: '选择日期',
    },
    value: {
      type: String,
      default: '',
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      type: false,
    },
    // 默认显示
    open: {
      type: Boolean,
      default: false,
    },
    // 禁用年
    disabledYears: {
      type: Array,
      default: function () { return []; },
    },
    // 禁用月
    disabledMonths: {
      type: Array,
      default: function () { return []; },
    },
    // 禁用日
    disabledDays: {
      type: Array,
      default: function () { return []; },
    },
    // 一周内哪天可选
    weekChoices: {
      type: Array,
      default: function () { return []; },
    },
    className: String,
  },
  computed: {
    date: function date() {
      var date = this.placeholder;
      if (this.choiced) {
        date = "" + (this.year) + (this.format) + (this.month) + (this.format) + (this.day);
      }
      return date;
    },
    buttonName: function buttonName() {
      return [
        ( obj = {}, obj[((this.className) + "-button")] = !!this.className, obj ) ];
      var obj;
    },
  },
  mounted: function mounted() {
    var this$1 = this;

    for (var i = this.yearStart; i < this.yearEnd + 1; i++) {
      this$1.years.push(timeObject.handleConputedDate(i, this$1.disabledYears));
    }
    for (var i$1 = 1; i$1 < 13; i$1++) {
      this$1.months.push(timeObject.handleConputedDate(i$1, this$1.disabledMonths));
    }
    this.resetDays();

    this.initData();
  },
  methods: {
    initData: function initData() {
      if (this.value && this.value !== this.placeholder) {
        var dates = this.value.split(this.format);
        this.year = timeObject.zeroFill(dates[0] - 0);
        this.month = timeObject.zeroFill(dates[1] - 0);
        this.day = timeObject.zeroFill(dates[2] - 0);
        this.choiced = true;
      } else {
        this.year = '';
        this.month = '';
        this.day = '';
        this.choiced = false;
      }
    },
    setChoice: function setChoice() {
      if (!this.choiced) {
        this.year = timeObject.loopChoice(this.years, this.year);
        this.month = timeObject.loopChoice(this.months, this.month);
        this.day = timeObject.loopChoice(this.days, this.day);
        this.choiced = true;
      }
    },
    resetDays: function resetDays(year, month) {
      var this$1 = this;

      console.log(year, month, 111);
      var dateCountOfLastMonth = getDayCountOfMonth(year - 0, month - 1);
      this.days = [];
      for (var i = 1; i < dateCountOfLastMonth + 1; i++) {
        this$1.days.push(timeObject.handleConputedDate(i, this$1.disabledDays));
      }
      this.setWeekChoice();
    },
    // 设置日期可选
    setWeekChoice: function setWeekChoice() {
      var this$1 = this;

      var year = null;
      var month = null;
      if (this.years.length > 1) {
        this.years.forEach(function (y) {
          if (!y.undo && year === null) {
            year = y.num;
          }
        });
      }
      if (this.months.length > 1) {
        this.months.forEach(function (m) {
          if (!m.undo && month === null) {
            month = m.num - 0;
          }
        });
      }
      this.days.forEach(function (tday) {
        var nowYear = this$1.year ? this$1.year : year;
        var nowMonth = this$1.month ? this$1.month : month;
        var nowDate = new Date((nowYear + "/" + nowMonth + "/" + (tday.num)));
        var nowWeek = nowDate.getDay() + 1;
        tday.undo = !this$1.weekChoices.every(function (wc) { return wc !== nowWeek; });
      });
      this.day = timeObject.loopChoice(this.days, this.day);
    },
    choiceYear: function choiceYear(year) {
      if (!year.undo) {
        this.setChoice();
        this.year = year.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice', this.date);
        this.$emit('input', this.date);
      }
    },
    choiceMonth: function choiceMonth(month) {
      if (!month.undo) {
        this.setChoice();
        this.month = month.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice', this.date);
        this.$emit('input', this.date);
      }
    },
    choiceDay: function choiceDay(day) {
      if (!day.undo) {
        this.setChoice();
        this.day = day.num;
        this.$emit('choice', this.date);
        this.$emit('input', this.date);
      }
    },
    toggle: function toggle() {
      this.status = !this.status;
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.date);
          this.$emit('input', this.date);
        }
        this.status = false;
      }
    },
    ok: function ok() {
      this.close(true);
      this.$emit('ok', this.date);
      this.$emit('input', this.date);
    },
    cancel: function cancel() {
      this.choiced = false;
      this.year = '';
      this.month = '';
      this.day = '';
      this.$emit('cancel', this.date);
      this.$emit('input', this.date);
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
      }
    },
  },
};

EmfeDateM$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDateM$1.name, EmfeDateM$1);
};

var hourNum = 24;
var minuteNum = 60;
var secondNum = 60;
// const zero = '00';

var EmfeTime$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-time",class:_vm.timeName},[(!_vm.open && !_vm.disabled)?_c('button',{staticClass:"emfe-time-btn",on:{"click":_vm.toggle}},[_c('span',{staticClass:"emfe-time-btn-text",class:{'emfe-time-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.time))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"shijian","className":"emfe-time"},on:{"icon-click":_vm.toggle}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-time"},on:{"icon-click":_vm.cancel}})],1):_vm._e(),_vm._v(" "),(!_vm.open && _vm.disabled)?_c('button',{staticClass:"emfe-time-btn emfe-time-btn-disabled"},[_c('span',{staticClass:"emfe-time-btn-text"},[_vm._v(_vm._s(_vm.time))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"shijian","className":"emfe-time"}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-time"}})],1):_vm._e(),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-time-box",class:{'emfe-time-box-position': !_vm.open}},[_c('div',{staticClass:"emfe-time-main"},[_c('div',{staticClass:"emfe-time-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-time-list"},_vm._l((_vm.hours),function(hourLoop){return _c('li',{staticClass:"emfe-time-list-item",class:{'emfe-time-list-item-on': hourLoop.num === _vm.hour, 'emfe-time-list-item-disable': hourLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceHour(hourLoop);}}},[_vm._v(_vm._s(hourLoop.num))])}))]),_vm._v(" "),_c('div',{staticClass:"emfe-time-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-time-list"},_vm._l((_vm.minutes),function(minuteLoop){return _c('li',{staticClass:"emfe-time-list-item",class:{'emfe-time-list-item-on': minuteLoop.num === _vm.minute, 'emfe-time-list-item-disable': minuteLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceMinute(minuteLoop);}}},[_vm._v(_vm._s(minuteLoop.num))])}))]),_vm._v(" "),_c('div',{staticClass:"emfe-time-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-time-list"},_vm._l((_vm.seconds),function(secondLoop,secondIndex){return _c('li',{staticClass:"emfe-time-list-item",class:{'emfe-time-list-item-on': secondLoop.num === _vm.second, 'emfe-time-list-item-disable': secondLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceSecond(secondLoop);}}},[_vm._v(_vm._s(secondLoop.num))])}))])]),_vm._v(" "),(_vm.confirm)?_c('div',{staticClass:"emfe-time-footer"},[_c('button',{staticClass:"emfe-time-ok",on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v("确定")])]):_vm._e()])])],1)},
staticRenderFns: [],
  name: 'EmfeTime',
  data: function data() {
    return {
      Contant: Contant,
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
    // 可选时间
    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59',
    },
    value: {
      type: String,
      default: '',
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      type: false,
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
    this.initData();
    this.setTimeChoice();
  },
  methods: {
    initData: function initData() {
      if (this.value && this.value !== this.placeholder) {
        var vals = this.value.split(':');
        this.hour = timeObject.zeroFill(vals[0] - 0);
        this.minute = timeObject.zeroFill(vals[1] - 0);
        this.second = timeObject.zeroFill(vals[2] - 0);
        this.choiced = true;
      } else {
        this.hour = '';
        this.minute = '';
        this.second = '';
        this.choiced = false;
      }
    },
    setChoice: function setChoice() {
      if (!this.choiced) {
        this.hour = timeObject.loopChoice(this.hours, this.hour);
        this.minute = timeObject.loopChoice(this.minutes, this.minute);
        this.second = timeObject.loopChoice(this.seconds, this.second);
        this.choiced = true;
      }
    },
    // 设置时间可选
    setTimeChoice: function setTimeChoice() {
      var times = this.timeChoices.split('|');
      var startTime = times[0].split(':');
      var endTime = times[1].split(':');
      var hours = [];
      var minutes = [];
      if (this.hours.length > 1) {
        this.hours.forEach(function (h) {
          if (h.num < startTime[0] || h.num > endTime[0]) {
            h.undo = true;
          }
        });
        this.hours.forEach(function (h) {
          if (!h.undo) {
            hours.push(h.num);
          }
        });
      }
      var hour = this.hour ? this.hour : hours[0];
      var hourIsStart = hour === startTime[0];
      var hourIsEnd = hour === endTime[0];
      if (this.minutes.length > 1) {
        this.minutes.forEach(function (min) {
          min.undo = (hourIsStart && min.num < startTime[1]) || (hourIsEnd && min.num > endTime[1]);
        });
        this.minutes.forEach(function (min) {
          if (!min.undo) {
            minutes.push(min.num);
          }
        });
      }
      var minute = this.minute ? this.minute : minutes[0];
      var minuteIsStart = minute === startTime[1];
      var minuteIsEnd = minute === endTime[1];
      if (this.seconds.length > 1) {
        this.seconds.forEach(function (sec) {
          var before = hourIsStart && minuteIsStart && sec.num < startTime[2];
          var after = hourIsEnd && minuteIsEnd && sec.num > endTime[2];
          sec.undo = before || after;
        });
      }
    },
    choiceHour: function choiceHour(hour) {
      if (!hour.undo) {
        this.setChoice();
        this.hour = hour.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceMinute: function choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceSecond: function choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('input', this.time);
      }
    },
    toggle: function toggle() {
      this.status = !this.status;
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.time);
          this.$emit('input', this.time);
        }
        this.status = false;
      }
    },
    ok: function ok() {
      this.close(true);
      this.$emit('ok', this.time);
      this.$emit('input', this.time);
    },
    cancel: function cancel() {
      this.choiced = false;
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.$emit('cancel', this.time);
      this.$emit('input', this.time);
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
      }
    },
  },
};

EmfeTime$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTime$1.name, EmfeTime$1);
};

var hourNum$1 = 24;
var minuteNum$1 = 60;
var secondNum$1 = 60;

var EmfeTimeM$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-time-m",class:_vm.timeName},[(!_vm.open && !_vm.disabled)?_c('button',{staticClass:"emfe-time-m-btn",on:{"click":_vm.toggle}},[_c('span',{staticClass:"emfe-time-m-btn-text",class:{'emfe-time-m-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.time))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"shijian","className":"emfe-time-m"},on:{"icon-click":_vm.toggle}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-time-m"},on:{"icon-click":_vm.cancel}})],1):_vm._e(),_vm._v(" "),(!_vm.open && _vm.disabled)?_c('button',{staticClass:"emfe-time-m-btn emfe-time-m-btn-disabled"},[_c('span',{staticClass:"emfe-time-m-btn-text"},[_vm._v(_vm._s(_vm.time))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"shijian","className":"emfe-time-m"}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-time-m"}})],1):_vm._e(),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-time-m-box",class:{'emfe-time-m-box-position': !_vm.open}},[(_vm.confirm)?_c('div',{staticClass:"emfe-time-m-footer"},[_c('button',{staticClass:"emfe-time-m-ok",on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v("确定")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"emfe-time-m-main"},[_c('div',{staticClass:"emfe-time-m-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-time-m-list"},_vm._l((_vm.hours),function(hourLoop){return _c('li',{staticClass:"emfe-time-m-list-item",class:{'emfe-time-m-list-item-on': hourLoop.num === _vm.hour, 'emfe-time-m-list-item-disable': hourLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceHour(hourLoop);}}},[_vm._v(_vm._s(hourLoop.num))])}))]),_vm._v(" "),(_vm.exact === 'minute' || _vm.exact === 'second')?_c('div',{staticClass:"emfe-time-m-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-time-m-list"},_vm._l((_vm.minutes),function(minuteLoop){return _c('li',{staticClass:"emfe-time-m-list-item",class:{'emfe-time-m-list-item-on': minuteLoop.num === _vm.minute, 'emfe-time-m-list-item-disable': minuteLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceMinute(minuteLoop);}}},[_vm._v(_vm._s(minuteLoop.num))])}))]):_vm._e(),_vm._v(" "),(_vm.exact === 'second')?_c('div',{staticClass:"emfe-time-m-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-time-m-list"},_vm._l((_vm.seconds),function(secondLoop,secondIndex){return _c('li',{staticClass:"emfe-time-m-list-item",class:{'emfe-time-m-list-item-on': secondLoop.num === _vm.second, 'emfe-time-m-list-item-disable': secondLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceSecond(secondLoop);}}},[_vm._v(_vm._s(secondLoop.num))])}))]):_vm._e()])])])],1)},
staticRenderFns: [],
  name: 'EmfeTimeM',
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
    value: {
      type: String,
      default: '',
    },
    exact: {
      validator: function validator(value) {
        return _.has(value, ['hour', 'minute', 'second']);
      },
      default: 'second',
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      type: false,
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
    // 可选时间
    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59',
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
        ( obj = {}, obj[((this.className) + "-item")] = !!this.className, obj ),
        [("emfe-time-m-item-" + (this.exact))] ];
      var obj;
    },
    time: function time() {
      var time = this.placeholder;
      if (this.choiced) {
        if (this.exact === 'hour') {
          time = "" + (this.hour);
        } else if (this.exact === 'minute') {
          time = (this.hour) + ":" + (this.minute);
        } else {
          time = (this.hour) + ":" + (this.minute) + ":" + (this.second);
        }
      }
      return time;
    },
  },
  mounted: function mounted() {
    var this$1 = this;

    for (var i = 0; i < hourNum$1; i++) {
      this$1.hours.push(timeObject.handleConputedTime(i, this$1.disabledHours));
    }
    for (var i$1 = 0; i$1 < minuteNum$1; i$1++) {
      this$1.minutes.push(timeObject.handleConputedTime(i$1, this$1.disabledMinutes));
    }
    for (var i$2 = 0; i$2 < secondNum$1; i$2++) {
      this$1.seconds.push(timeObject.handleConputedTime(i$2, this$1.disabledSeconds));
    }
    this.initData();
    this.setTimeChoice();
  },
  methods: {
    initData: function initData() {
      if (this.value && this.value !== this.placeholder) {
        var vals = this.value.split(':');
        this.hour = timeObject.zeroFill(vals[0] - 0);
        this.minute = timeObject.zeroFill(vals[1] - 0);
        this.second = timeObject.zeroFill(vals[2] - 0);
        this.choiced = true;
      } else {
        this.hour = '';
        this.minute = '';
        this.second = '';
        this.choiced = false;
      }
    },
    setChoice: function setChoice() {
      if (!this.choiced) {
        this.hour = timeObject.loopChoice(this.hours, this.hour);
        this.minute = timeObject.loopChoice(this.minutes, this.minute);
        this.second = timeObject.loopChoice(this.seconds, this.second);
        this.choiced = true;
      }
    },
    // 设置时间可选
    setTimeChoice: function setTimeChoice() {
      var times = this.timeChoices.split('|');
      var startTime = times[0].split(':');
      var endTime = times[1].split(':');
      var hours = [];
      var minutes = [];
      if (this.hours.length > 1) {
        this.hours.forEach(function (h) {
          if (h.num < startTime[0] || h.num > endTime[0]) {
            h.undo = true;
          }
        });
        this.hours.forEach(function (h) {
          if (!h.undo) {
            hours.push(h.num);
          }
        });
      }
      var hour = this.hour ? this.hour : hours[0];
      var hourIsStart = hour === startTime[0];
      var hourIsEnd = hour === endTime[0];
      if (this.minutes.length > 1) {
        this.minutes.forEach(function (min) {
          min.undo = (hourIsStart && min.num < startTime[1]) || (hourIsEnd && min.num > endTime[1]);
        });
        this.minutes.forEach(function (min) {
          if (!min.undo) {
            minutes.push(min.num);
          }
        });
      }
      var minute = this.minute ? this.minute : minutes[0];
      var minuteIsStart = minute === startTime[1];
      var minuteIsEnd = minute === endTime[1];
      if (this.seconds.length > 1) {
        this.seconds.forEach(function (sec) {
          var before = hourIsStart && minuteIsStart && sec.num < startTime[2];
          var after = hourIsEnd && minuteIsEnd && sec.num > endTime[2];
          sec.undo = before || after;
        });
      }
    },
    choiceHour: function choiceHour(hour) {
      if (!hour.undo) {
        this.setChoice();
        this.hour = hour.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceMinute: function choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceSecond: function choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('input', this.time);
      }
    },
    toggle: function toggle() {
      this.status = !this.status;
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.time);
          this.$emit('input', this.time);
        }
        this.status = false;
      }
    },
    ok: function ok() {
      this.close(true);
      this.$emit('ok', this.time);
      this.$emit('input', this.time);
    },
    cancel: function cancel() {
      this.choiced = false;
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.$emit('cancel', this.time);
      this.$emit('input', this.time);
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
      }
    },
  },
};

EmfeTimeM$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTimeM$1.name, EmfeTimeM$1);
};

var zero = '00';
var timeZero = zero + ":" + zero + ":" + zero;
var timeText = '选择时间';
var dateText = '选择日期';

var EmfeDatetime$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-datetime"},[(!_vm.disabled)?_c('button',{staticClass:"emfe-datetime-btn",on:{"click":function($event){$event.stopPropagation();_vm.toggle($event);}}},[_c('span',{staticClass:"emfe-datetime-btn-text",class:{'emfe-datetime-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.dateTime))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"shijian","className":"emfe-datetime"},on:{"icon-click":_vm.toggle}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-datetime"},on:{"icon-click":_vm.cancel}})],1):_vm._e(),_vm._v(" "),(_vm.disabled)?_c('button',{staticClass:"emfe-datetime-btn emfe-datetime-btn-disabled"},[_c('span',{staticClass:"emfe-datetime-btn-text"},[_vm._v(_vm._s(_vm.dateTime))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"shijian","className":"emfe-datetime"}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-datetime"}})],1):_vm._e(),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-datetime-main emfe-datetime-main-position",style:(_vm.panelstyle)},[_c('div',{staticClass:"emfe-datetime-type"},[_c('emfe-date',{directives:[{name:"show",rawName:"v-show",value:(_vm.isDate),expression:"isDate"}],ref:"date",attrs:{"format":_vm.formatDate,"open":true,"confirm":false,"disabledDate":_vm.disabledDate},on:{"choice":_vm.choiceDate},model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v;},expression:"date"}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isDate),expression:"!isDate"}],staticClass:"emfe-datetime-time"},[_c('div',{staticClass:"emfe-datetime-time-header"},[_vm._v(_vm._s(_vm.date))]),_vm._v(" "),_c('emfe-time',{ref:"time",attrs:{"className":"emfe-datetime","open":true,"confirm":false,"timeChoices":_vm.timeChoices,"disabledHours":_vm.disabledHours,"disabledMinutes":_vm.disabledMinutes,"disabledSeconds":_vm.disabledSeconds},on:{"choice":_vm.choiceTime},model:{value:(_vm.time),callback:function ($$v) {_vm.time=$$v;},expression:"time"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"emfe-datetime-footer"},[_c('button',{staticClass:"emfe-datetime-settype",class:{'emfe-datetime-settype-disabled': _vm.disabledToggle},on:{"click":_vm.typeToggle}},[_vm._v(_vm._s(_vm.typeText))]),_vm._v(" "),_c('button',{staticClass:"emfe-datetime-ok",on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v("确定")])])])])],1)},
staticRenderFns: [],
  name: 'EmfeDatetime',
  data: function data() {
    var vals = this.value.split(' ');
    return {
      date: this.value ? vals[0] : '',
      time: this.value ? vals[1] : timeZero,
      choiced: !!this.value,
      isDate: true,
      typeText: timeText,
      status: false,
    };
  },
  props: {
    panelstyle: {
      type: Object,
      default: function () {},
    },
    formatDate: {
      type: String,
      default: '/',
    },
    // 默认文案
    placeholder: {
      type: String,
      default: '选择日期和时间',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      type: false,
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
    // 可选时间
    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59',
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

      if (this.date && this.date !== this.placeholder) {
        if (!this.$refs.date || this.date !== this.$refs.date.placeholder) {
          newDateTime = (this.date) + " " + (this.time);
        }
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

      this.$emit('input', newDateTime === this.placeholder ? '' : newDateTime);

      return newDateTime;
    },
    disabledToggle: function disabledToggle() {
      return !this.date && this.time === timeZero;
    },
  },
  methods: {
    choiceDate: function choiceDate() {
      this.choiced = true;
      this.$emit('choice-date', this.dateTime);
    },
    choiceTime: function choiceTime() {
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
      this.$emit('input', this.dateTime);
    },
    ok: function ok() {
      this.close(true);
      this.$emit('ok', this.dateTime);
      this.$emit('input', this.dateTime);
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.dateTime);
          this.$emit('input', this.dateTime);
        }
        this.status = false;
      }
    },
    typeToggle: function typeToggle() {
      if (!this.disabledToggle) {
        this.typeText = this.isDate ? dateText : timeText;
        this.isDate = !this.isDate;
      }
    },
    toggle: function toggle() {
      if (!this.disabled) {
        this.status = !this.status;
      }
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        var vals = this.value.split(' ');
        this.date = this.value ? vals[0] : '';
        this.time = this.value ? vals[1] : timeZero;
        this.choiced = !!this.value;
      }
    },
  },
};

EmfeDatetime$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDatetime$1.name, EmfeDatetime$1);
};

var hourNum$2 = 24;
var minuteNum$2 = 60;
var secondNum$2 = 60;

var EmfeDatetimeM$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.close),expression:"close"}],staticClass:"emfe-datetime-m"},[(!_vm.open && !_vm.disabled)?_c('button',{staticClass:"emfe-datetime-m-btn",on:{"click":_vm.toggle}},[_c('span',{staticClass:"emfe-datetime-m-btn-text",class:{'emfe-datetime-m-btn-text-choice': _vm.choiced}},[_vm._v(_vm._s(_vm.datetime))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"rili","className":"emfe-datetime-m"},on:{"icon-click":_vm.toggle}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-datetime-m"},on:{"icon-click":_vm.cancel}})],1):_vm._e(),_vm._v(" "),(!_vm.open && _vm.disabled)?_c('button',{staticClass:"emfe-datetime-m-btn emfe-datetime-m-btn-disabled"},[_c('span',{staticClass:"emfe-datetime-m-btn-text"},[_vm._v(_vm._s(_vm.date))]),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.choiced),expression:"!choiced"}],attrs:{"type":"rili","className":"emfe-datetime-m"}}),_vm._v(" "),_c('emfe-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.choiced),expression:"choiced"}],attrs:{"type":"shanchu","className":"emfe-datetime-m"}})],1):_vm._e(),_vm._v(" "),_c('emfe-transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-datetime-m-box",class:{'emfe-datetime-m-box-position': !_vm.open}},[(_vm.confirm)?_c('div',{staticClass:"emfe-datetime-m-footer"},[_c('button',{staticClass:"emfe-datetime-m-ok",on:{"click":function($event){$event.stopPropagation();_vm.ok($event);}}},[_vm._v("确定")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"emfe-datetime-m-main"},[_c('div',{staticClass:"emfe-datetime-m-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-datetime-m-list"},_vm._l((_vm.years),function(yearLoop){return _c('li',{staticClass:"emfe-datetime-m-list-item",class:{'emfe-datetime-m-list-item-on': yearLoop.num === _vm.year, 'emfe-datetime-m-list-item-disable': yearLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceYear(yearLoop);}}},[_vm._v(_vm._s(yearLoop.num))])}))]),_vm._v(" "),_c('div',{staticClass:"emfe-datetime-m-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-datetime-m-list"},_vm._l((_vm.months),function(monthLoop){return _c('li',{staticClass:"emfe-datetime-m-list-item",class:{'emfe-datetime-m-list-item-on': monthLoop.num === _vm.month, 'emfe-datetime-m-list-item-disable': monthLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceMonth(monthLoop);}}},[_vm._v(_vm._s(monthLoop.num))])}))]),_vm._v(" "),_c('div',{staticClass:"emfe-datetime-m-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-datetime-m-list"},_vm._l((_vm.days),function(dayLoop,dayIndex){return _c('li',{staticClass:"emfe-datetime-m-list-item",class:{'emfe-datetime-m-list-item-on': dayLoop.num === _vm.day, 'emfe-datetime-m-list-item-disable': dayLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceDay(dayLoop);}}},[_vm._v(_vm._s(dayLoop.num))])}))]),_vm._v(" "),_c('div',{staticClass:"emfe-datetime-m-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-datetime-m-list"},_vm._l((_vm.hours),function(hourLoop){return _c('li',{staticClass:"emfe-datetime-m-list-item",class:{'emfe-datetime-m-list-item-on': hourLoop.num === _vm.hour, 'emfe-datetime-m-list-item-disable': hourLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceHour(hourLoop);}}},[_vm._v(_vm._s(hourLoop.num))])}))]),_vm._v(" "),(_vm.exact === 'minute' || _vm.exact === 'second')?_c('div',{staticClass:"emfe-datetime-m-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-datetime-m-list"},_vm._l((_vm.minutes),function(minuteLoop){return _c('li',{staticClass:"emfe-datetime-m-list-item",class:{'emfe-datetime-m-list-item-on': minuteLoop.num === _vm.minute, 'emfe-datetime-m-list-item-disable': minuteLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceMinute(minuteLoop);}}},[_vm._v(_vm._s(minuteLoop.num))])}))]):_vm._e(),_vm._v(" "),(_vm.exact === 'second')?_c('div',{staticClass:"emfe-datetime-m-item",class:_vm.itemName},[_c('ul',{staticClass:"emfe-datetime-m-list"},_vm._l((_vm.seconds),function(secondLoop,secondIndex){return _c('li',{staticClass:"emfe-datetime-m-list-item",class:{'emfe-datetime-m-list-item-on': secondLoop.num === _vm.second, 'emfe-datetime-m-list-item-disable': secondLoop.undo},on:{"click":function($event){$event.stopPropagation();_vm.choiceSecond(secondLoop);}}},[_vm._v(_vm._s(secondLoop.num))])}))]):_vm._e()])])])],1)},
staticRenderFns: [],
  name: 'EmfeTimeM',
  data: function data() {
    return {
      years: [],
      months: [],
      days: [],
      year: '',
      month: '',
      day: '',
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
    format: {
      type: String,
      default: '/',
    },
    exact: {
      validator: function validator(value) {
        return _.has(value, ['hour', 'minute', 'second']);
      },
      default: 'second',
    },
    yearStart: {
      type: Number,
      default: 1920,
    },
    yearEnd: {
      type: Number,
      default: 2020,
    },
    // 默认文案
    placeholder: {
      type: String,
      default: '选择日期时间',
    },
    value: {
      type: String,
      default: '',
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      type: false,
    },
    // 默认显示
    open: {
      type: Boolean,
      default: false,
    },
    // 禁用年
    disabledYears: {
      type: Array,
      default: function () { return []; },
    },
    // 禁用月
    disabledMonths: {
      type: Array,
      default: function () { return []; },
    },
    // 禁用日
    disabledDays: {
      type: Array,
      default: function () { return []; },
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
    // 一周内哪天可选
    weekChoices: {
      type: Array,
      default: function () { return []; },
    },
    // 可选时间
    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59',
    },
    className: String,
  },
  computed: {
    datetime: function datetime() {
      var datetime = this.placeholder;
      if (this.choiced) {
        if (this.exact === 'hour') {
          datetime = "" + (this.year) + (this.format) + (this.month) + (this.format) + (this.day) + " " + (this.hour);
        } else if (this.exact === 'minute') {
          datetime = "" + (this.year) + (this.format) + (this.month) + (this.format) + (this.day) + " " + (this.hour) + ":" + (this.minute);
        } else {
          datetime = "" + (this.year) + (this.format) + (this.month) + (this.format) + (this.day) + " " + (this.hour) + ":" + (this.minute) + ":" + (this.second);
        }
      }
      return datetime;
    },
    itemName: function itemName() {
      return [
        ( obj = {}, obj[((this.className) + "-item")] = !!this.className, obj ),
        [("emfe-datetime-m-item-" + (this.exact))] ];
      var obj;
    },
  },
  mounted: function mounted() {
    var this$1 = this;

    for (var i = this.yearStart; i < this.yearEnd + 1; i++) {
      this$1.years.push(timeObject.handleConputedDate(i, this$1.disabledYears));
    }
    for (var i$1 = 1; i$1 < 13; i$1++) {
      this$1.months.push(timeObject.handleConputedDate(i$1, this$1.disabledMonths));
    }
    this.resetDays();
    for (var i$2 = 0; i$2 < hourNum$2; i$2++) {
      this$1.hours.push(timeObject.handleConputedTime(i$2, this$1.disabledHours));
    }
    for (var i$3 = 0; i$3 < minuteNum$2; i$3++) {
      this$1.minutes.push(timeObject.handleConputedTime(i$3, this$1.disabledMinutes));
    }
    for (var i$4 = 0; i$4 < secondNum$2; i$4++) {
      this$1.seconds.push(timeObject.handleConputedTime(i$4, this$1.disabledSeconds));
    }
    this.initData();
    this.setTimeChoice();
  },
  methods: {
    initData: function initData() {
      if (this.value && this.value !== this.placeholder) {
        var vals = this.value.split(' ');
        var dates = vals[0].split(this.format);
        var times = vals[1].split(':');
        this.year = timeObject.zeroFill(dates[0] - 0);
        this.month = timeObject.zeroFill(dates[1] - 0);
        this.day = timeObject.zeroFill(dates[2] - 0);
        this.hour = timeObject.zeroFill(times[0] - 0);
        this.minute = timeObject.zeroFill(times[1] - 0);
        this.second = timeObject.zeroFill(times[2] - 0);
        this.choiced = true;
      } else {
        this.year = '';
        this.month = '';
        this.day = '';
        this.hour = '';
        this.minute = '';
        this.second = '';
        this.choiced = false;
      }
    },
    setChoice: function setChoice() {
      if (!this.choiced) {
        this.year = timeObject.loopChoice(this.years, this.year);
        this.month = timeObject.loopChoice(this.months, this.month);
        this.day = timeObject.loopChoice(this.days, this.day);
        this.hour = timeObject.loopChoice(this.hours, this.hour);
        this.minute = timeObject.loopChoice(this.minutes, this.minute);
        this.second = timeObject.loopChoice(this.seconds, this.second);
        this.choiced = true;
      }
    },
    resetDays: function resetDays(year, month) {
      var this$1 = this;

      var dateCountOfLastMonth = getDayCountOfMonth(year - 0, month - 1);
      this.days = [];
      for (var i = 1; i < dateCountOfLastMonth + 1; i++) {
        this$1.days.push(timeObject.handleConputedDate(i, this$1.disabledDays));
      }
      if (this.day > dateCountOfLastMonth) {
        this.day = timeObject.loopChoice(this.days, this.day);
      }
      this.setWeekChoice();
    },
    choiceYear: function choiceYear(year) {
      if (!year.undo) {
        this.setChoice();
        this.year = year.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice-date', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceMonth: function choiceMonth(month) {
      if (!month.undo) {
        this.setChoice();
        this.month = month.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice-date', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceDay: function choiceDay(day) {
      if (!day.undo) {
        this.setChoice();
        this.day = day.num;
        this.$emit('choice-date', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    // 设置日期可选
    setWeekChoice: function setWeekChoice() {
      var this$1 = this;

      var year = null;
      var month = null;
      if (this.years.length > 1) {
        this.years.forEach(function (y) {
          if (!y.undo && year === null) {
            year = y.num;
          }
        });
      }
      if (this.months.length > 1) {
        this.months.forEach(function (m) {
          if (!m.undo && month === null) {
            month = m.num - 0;
          }
        });
      }
      this.days.forEach(function (tday) {
        var nowYear = this$1.year ? this$1.year : year;
        var nowMonth = this$1.month ? this$1.month : month;
        var nowDate = new Date((nowYear + "/" + nowMonth + "/" + (tday.num)));
        var nowWeek = nowDate.getDay() + 1;
        tday.undo = !this$1.weekChoices.every(function (wc) { return wc !== nowWeek; });
      });
      this.day = timeObject.loopChoice(this.days, this.day);
    },
    // 设置时间可选
    setTimeChoice: function setTimeChoice() {
      var times = this.timeChoices.split('|');
      var startTime = times[0].split(':');
      var endTime = times[1].split(':');
      var hours = [];
      var minutes = [];
      if (this.hours.length > 1) {
        this.hours.forEach(function (h) {
          if (h.num < startTime[0] || h.num > endTime[0]) {
            h.undo = true;
          }
        });
        this.hours.forEach(function (h) {
          if (!h.undo) {
            hours.push(h.num);
          }
        });
      }
      var hour = this.hour ? this.hour : hours[0];
      var hourIsStart = hour === startTime[0];
      var hourIsEnd = hour === endTime[0];
      if (this.minutes.length > 1) {
        this.minutes.forEach(function (min) {
          min.undo = (hourIsStart && min.num < startTime[1]) || (hourIsEnd && min.num > endTime[1]);
        });
        this.minutes.forEach(function (min) {
          if (!min.undo) {
            minutes.push(min.num);
          }
        });
      }
      var minute = this.minute ? this.minute : minutes[0];
      var minuteIsStart = minute === startTime[1];
      var minuteIsEnd = minute === endTime[1];
      if (this.seconds.length > 1) {
        this.seconds.forEach(function (sec) {
          var before = hourIsStart && minuteIsStart && sec.num < startTime[2];
          var after = hourIsEnd && minuteIsEnd && sec.num > endTime[2];
          sec.undo = before || after;
        });
      }
    },
    choiceHour: function choiceHour(hour) {
      if (!hour.undo) {
        this.setChoice();
        this.hour = hour.num;
        this.setTimeChoice();
        this.$emit('choice-time', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceMinute: function choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.setTimeChoice();
        this.$emit('choice-time', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceSecond: function choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.setTimeChoice();
        this.$emit('choice-time', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    toggle: function toggle() {
      this.status = !this.status;
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.datetime);
          this.$emit('input', this.datetime);
        }
        this.status = false;
      }
    },
    ok: function ok() {
      this.close(true);
      this.$emit('ok', this.datetime);
      this.$emit('input', this.datetime);
    },
    cancel: function cancel() {
      this.choiced = false;
      this.year = '';
      this.month = '';
      this.day = '';
      this.$emit('cancel', this.datetime);
      this.$emit('input', this.datetime);
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
      }
    },
  },
};

EmfeDatetimeM$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDatetimeM$1.name, EmfeDatetimeM$1);
};

var EmfeLink$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.hasUrl || _vm.emptyRouters)?_c('a',{staticClass:"emfe-link",class:_vm.linkName,attrs:{"href":_vm.emptyRouters ? 'javascript:;' : _vm.routers.url},on:{"click":_vm.clickFn}},[_vm._t("default")],2):_c('router-link',{staticClass:"emfe-link",class:_vm.linkName,attrs:{"tag":_vm.tag,"to":_vm.routers}},[_vm._t("default")],2)},
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
    click: {
      type: Function,
      default: function () {},
    },
  },
  computed: {
    linkName: function linkName() {
      return this.className ? ((this.className) + "-link") : '';
    },
    emptyRouters: function emptyRouters() {
      return O.empty(this.routers);
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
    clickFn: function clickFn() {
      this.click();
      this.$emit('click');
    },
  },
};

EmfeLink$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeLink$1.name, EmfeLink$1);
};

var prefixCls$4 = 'switch';
var EmfeSwitch$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.switchName,attrs:{"disabled":_vm.disabled},on:{"click":_vm.toggle}},[_c('span',{staticClass:"emfe-switch-inner",class:_vm.innerClass},[(_vm.currentValue)?_vm._t("open"):_vm._e(),_vm._v(" "),(!_vm.currentValue)?_vm._t("close"):_vm._e()],2)])},
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
    value: {
      type: [Boolean, String],
      default: false,
    },
    interceptor: {
      type: Boolean,
      default: true,
    },
  },
  data: function data() {
    return {
      currentValue: this.value,
      interceptorDefault: this.interceptor,
    };
  },
  computed: {
    switchName: function switchName() {
      return [
        ("emfe-" + prefixCls$4),
        ( obj = {}, obj[((this.className) + "-" + prefixCls$4)] = !!this.className, obj[(prefixCls$4 + "-checked")] = !!this.currentValue, obj[(prefixCls$4 + "-disabled")] = !!this.disabled, obj ) ];
      var obj;
    },
    innerClass: function innerClass() {
      return [
        ( obj = {}, obj[((this.className) + "-" + prefixCls$4 + "-inner")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    toggle: function toggle() {
      if (!this.disabled) {
        if (this.interceptorDefault) {
          this.changeValue();
        }
        this.$emit('toggle', this.currentValue);
      }
    },
    changeValue: function changeValue() {
      this.currentValue = !this.currentValue;
    },
  },
  watch: {
    interceptor: function interceptor(val, oldVal) {
      if (val !== oldVal) {
        this.changeValue();
      }
    },
  },
};

EmfeSwitch$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeSwitch$1.name, EmfeSwitch$1);
};

var prefixCls$5 = 'title';

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
        ( obj = {}, obj[((this.className) + "-" + prefixCls$5)] = !!this.className, obj ) ];
      var obj;
    },
  },
};

EmfeTitle$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTitle$1.name, EmfeTitle$1);
};

var prefixCls$6 = 'title-c';

var EmfeTitleC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-title-c",class:_vm.titleName},[_c('div',{staticClass:"emfe-title-c-panel"},[_vm._t("default")],2)])},
staticRenderFns: [],
  name: 'EmfeTitleC',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    titleName: function titleName() {
      return [
        ( obj = {}, obj[((this.className) + "-" + prefixCls$6)] = !!this.className, obj ) ];
      var obj;
    },
  },
};

EmfeTitleC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTitleC$1.name, EmfeTitleC$1);
};

var EmfeRadio = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"emfe-radio clearfix",class:[{'emfe-radio-checked': _vm.status},_vm.labelClass]},[_c('i',{staticClass:"emfe-radio-img",class:{'emfe-radio-img-checked': _vm.status, 'emfe-radio-img-disabled': _vm.disabled}}),_vm._v(" "),_c('input',{staticClass:"emfe-radio-input",class:_vm.inputClass,attrs:{"type":"radio","name":_vm.name,"disabled":_vm.disabled},on:{"change":_vm.changeFn}}),_vm._v(" "),_c('span',{staticClass:"emfe-radio-text",class:_vm.textClass},[_vm._t("default")],2),_vm._v(" "),(_vm.slideShow)?_c('div',{staticClass:"emfe-radio-slide"},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-radio-slide-wrap"},[_vm._t("slide")],2)])],1):_vm._e()])},
staticRenderFns: [],
    name: 'EmfeRadio',
    data: function data() {
      return {
        status: this.statu,
      };
    },
    props: {
      slideShow: {
        type: Boolean,
        default: false,
      },
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
      statu: {
        tyep: Boolean,
        default: false,
      },
      className: {
        type: String,
        default: '',
      },
      inline: String,
      change: Function,
    },
    computed: {
      labelClass: function labelClass() {
        // return this.className ? `${this.className}-radio` : '';
        return [
          ( obj = {
            'emfe-radio-inline': this.inline,
          }, obj[((this.className) + "-radio")] = !!this.className, obj ) ];
        var obj;
      },
      inputClass: function inputClass() {
        return this.className ? ((this.className) + "-radio-input") : '';
      },
      textClass: function textClass() {
        return this.className ? ((this.className) + "-radio-input-text") : '';
      },
    },
    methods: {
      changeFn: function changeFn() {
        var this$1 = this;

        var index = 0;
        this.$parent.$children.forEach(function (element) {
          element.status = this$1.index === element.index;
          if (element.status) {
            index = element.index;
          }
        });
        if (this.change) {
          this.change(index);
        }
        this.$emit('change', index);
      },
    },
    watch: {
      statu: function statu(val, oldVal) {
        if (val !== oldVal) {
          this.status = val;
        }
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

var EmfeRadioC = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"emfe-radio-c clearfix",class:[{'emfe-radio-c-checked': _vm.status},_vm.labelClass]},[_c('i',{staticClass:"emfe-radio-c-img",class:{'emfe-radio-c-img-checked': _vm.status, 'emfe-radio-c-img-disabled': _vm.disabled}}),_vm._v(" "),_c('input',{staticClass:"emfe-radio-c-input",class:_vm.inputClass,attrs:{"type":"radio","name":_vm.name,"disabled":_vm.disabled},on:{"change":_vm.changeFn}}),_vm._v(" "),_c('span',{staticClass:"emfe-radio-c-text",class:_vm.textClass},[_vm._t("default")],2),_vm._v(" "),(_vm.slideShow)?_c('div',{staticClass:"emfe-radio-c-slide"},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status),expression:"status"}],staticClass:"emfe-radio-c-slide-wrap"},[_vm._t("slide")],2)])],1):_vm._e()])},
staticRenderFns: [],
    name: 'EmfeRadioC',
    data: function data() {
      return {
        status: this.statu,
      };
    },
    props: {
      slideShow: {
        type: Boolean,
        default: false,
      },
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
      statu: {
        tyep: Boolean,
        default: false,
      },
      className: {
        type: String,
        default: '',
      },
      inline: String,
      change: Function,
    },
    computed: {
      labelClass: function labelClass() {
        // return this.className ? `${this.className}-radio` : '';
        return [
          ( obj = {
            'emfe-radio-inline': this.inline,
          }, obj[((this.className) + "-radio")] = !!this.className, obj ) ];
        var obj;
      },
      inputClass: function inputClass() {
        return this.className ? ((this.className) + "-radio-input") : '';
      },
      textClass: function textClass() {
        return this.className ? ((this.className) + "-radio-input-text") : '';
      },
    },
    methods: {
      changeFn: function changeFn() {
        var this$1 = this;

        var index = 0;
        this.$parent.$children.forEach(function (element) {
          element.status = this$1.index === element.index;
          if (element.status) {
            index = element.index;
          }
        });
        if (this.change) {
          this.change(index);
        }
        this.$emit('change', index);
      },
    },
    watch: {
      statu: function statu(val, oldVal) {
        if (val !== oldVal) {
          this.status = val;
        }
      },
    },
  };

var EmfeRadioGroupC = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-radio-group-c"},[_vm._t("default")],2)},
staticRenderFns: [],
    name: 'EmfeRadioGroupC',
  };

/* istanbul ignore next */
EmfeRadioC.install = function (Vue$$1) {
  Vue$$1.component(EmfeRadioC.name, EmfeRadioC);
};
/* istanbul ignore next */
EmfeRadioGroupC.install = function (Vue$$1) {
  Vue$$1.component(EmfeRadioGroupC.name, EmfeRadioGroupC);
};

var RadioC = {
  EmfeRadioC: EmfeRadioC,
  EmfeRadioGroupC: EmfeRadioGroupC,
};

var EmfeButton = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.buttonName,attrs:{"disabled":_vm.disabled},on:{"click":function($event){$event.stopPropagation();_vm.change($event);}}},[(_vm.type)?_c('emfe-icon',{staticClass:"emfe-button-icon",attrs:{"type":_vm.type}}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"emfe-button-text",class:_vm.textName},[_vm._t("default")],2)],1)},
staticRenderFns: [],
  name: 'EmfeButton',
  data: function data() {
    return {
      status: false,
    };
  },
  props: {
    theme: {
      validator: function validator(value) {
        return _.has(value, ['default', 'primary']);
      },
    },
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
    group: Boolean,
  },
  created: function created() {
    this.status = this.statu;
  },
  computed: {
    buttonName: function buttonName() {
      var group = this.group ? '-group-button' : '';
      var btnName = this.className ? group : '-button';
      return [
        ("emfe-button" + group),
        ( obj = {}, obj[("emfe-button-" + (this.theme))] = !!this.theme, obj[((this.className) + "-button" + btnName)] = !!this.className, obj[("emfe-button" + group + "-on")] = !!this.status, obj ) ];
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
  watch: {
    statu: function statu(val, oldVal) {
      if (val !== oldVal) {
        this.status = val;
      }
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

var EmfeButtonC = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.buttonName,attrs:{"disabled":_vm.disabled},on:{"click":function($event){$event.stopPropagation();_vm.change($event);}}},[(_vm.type)?_c('emfe-icon',{staticClass:"emfe-button-icon",attrs:{"type":_vm.type}}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"emfe-button-c-text",class:_vm.textName},[_vm._t("default")],2)],1)},
staticRenderFns: [],
  name: 'EmfeButtonC',
  data: function data() {
    return {
      status: false,
    };
  },
  props: {
    theme: {
      validator: function validator(value) {
        return _.has(value, ['default', 'primary']);
      },
    },
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
    group: Boolean,
  },
  created: function created() {
    this.status = this.statu;
  },
  computed: {
    buttonName: function buttonName() {
      var group = this.group ? '-group-button' : '';
      var btnName = this.className ? group : '-button';
      return [
        ("emfe-button-c" + group),
        ( obj = {}, obj[("emfe-button-c-" + (this.theme))] = !!this.theme, obj[((this.className) + "-button-c" + btnName)] = !!this.className, obj[("emfe-button-c" + group + "-on")] = !!this.status, obj ) ];
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
  watch: {
    statu: function statu(val, oldVal) {
      if (val !== oldVal) {
        this.status = val;
      }
    },
  },
};

var EmfeButtonGroupC = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-button-group-c"},[_vm._t("default")],2)},
staticRenderFns: [],
    name: 'EmfeButtonGroupC',
  };

/* istanbul ignore next */
EmfeButtonC.install = function (Vue$$1) {
  Vue$$1.component(EmfeButtonC.name, EmfeButtonC);
};
/* istanbul ignore next */
EmfeButtonGroupC.install = function (Vue$$1) {
  Vue$$1.component(EmfeButtonGroupC.name, EmfeButtonGroupC);
};

var ButtonC = {
  EmfeButtonC: EmfeButtonC,
  EmfeButtonGroupC: EmfeButtonGroupC,
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

var EmfePaginationC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-pagination-c"},[_c('ul',[(_vm.pageCount > 1)?_c('li',{staticClass:"emfe-pagination-c-item",class:{disabled: _vm.curPage == 1},on:{"click":_vm.prevPage}},[_vm._v("上一页")]):_vm._e(),_vm._v(" "),_c('li',{staticClass:"emfe-pagination-c-item",class:{'emfe-pagination-c-item-on': _vm.curPage == 1},on:{"click":function($event){_vm.page(1);}}},[_vm._v("1")]),_vm._v(" "),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.curPage > 5 && _vm.pageCount > 10),expression:"curPage > 5 && pageCount > 10"}],staticClass:"emfe-pagination-c-item"},[_vm._v("...")]),_vm._v(" "),_vm._l((_vm.middlePages),function(item,index){return _c('li',{staticClass:"emfe-pagination-c-item",class:{'emfe-pagination-c-item-on': _vm.curPage == index+_vm.offset},on:{"click":function($event){_vm.page(index+_vm.offset);}}},[_vm._v(_vm._s(index+_vm.offset))])}),_vm._v(" "),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.curPage < _vm.bigLimit && _vm.pageCount > 10),expression:"curPage < bigLimit && pageCount > 10"}],staticClass:"emfe-pagination-c-item"},[_vm._v("...")]),_vm._v(" "),(_vm.pageCount > 1)?_c('li',{staticClass:"emfe-pagination-c-item",class:{'emfe-pagination-c-item-on': _vm.curPage == _vm.pageCount},on:{"click":function($event){_vm.page(_vm.pageCount);}}},[_vm._v(_vm._s(_vm.pageCount))]):_vm._e(),_vm._v(" "),(_vm.pageCount > 1)?_c('li',{staticClass:"emfe-pagination-c-item",class:{disabled: _vm.curPage == _vm.pageCount},on:{"click":_vm.nextPage}},[_vm._v("下一页")]):_vm._e()],2)])},
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

EmfePaginationC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfePaginationC$1.name, EmfePaginationC$1);
};

var EmfeSelect$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"emfe-documentclick",rawName:"v-emfe-documentclick",value:(_vm.closeFn),expression:"closeFn"}],staticClass:"emfe-select",class:_vm.selectName},[_c('input',{staticClass:"emfe-select-input",class:[_vm.inputName, {'emfe-select-input-error': _vm.errOk}],attrs:{"type":"text","disabled":_vm.newDisabled,"readonly":"","placeholder":_vm.selectText},domProps:{"value":_vm.checkVal},on:{"click":_vm.inpcheck}}),_vm._v(" "),(_vm.errOk)?_c('div',{staticClass:"emfe-select-error",class:_vm.addErrorText},[_vm._t("error")],2):_vm._e(),_vm._v(" "),(_vm.flagCheck)?_c('div',{staticClass:"emfe-select-flag"},[(_vm.seleStu==='newList')?_c('div',{staticClass:"emfe-select-custab"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newListVal),expression:"newListVal"}],staticClass:"emfe-select-input",attrs:{"type":"text","placeholder":_vm.addText},domProps:{"value":(_vm.newListVal)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newListVal=$event.target.value;}}}),_vm._v(" "),_c('span',{staticClass:"emfe-select-custab-btn",on:{"click":_vm.newListBtn}},[_vm._v("保存")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"emfe-select-flag-scroll"},[_vm._l((_vm.checkList),function(item,itemIndex){return (_vm.type==='checkbox')?_c('label',{key:item.id,staticClass:"emfe-select-label",class:{'emfe-select-label-disabled': item.disabled}},[_c('span',{staticClass:"emfe-select-text"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('div',{staticClass:"emfe-select-checkout-box"},[_c('i',{staticClass:"emfe-select-checkout-inner",class:{'emfe-select-checkout-inner-checked': item.checked}}),_vm._v(" "),_c('input',{key:item.id,staticClass:"emfe-select-checkout-status",attrs:{"disabled":item.disabled,"type":"checkbox"},on:{"change":function($event){_vm.getdata(item);}}})])]):_vm._e()}),_vm._v(" "),_vm._l((_vm.checkList),function(item){return (_vm.type==='default')?_c('label',{staticClass:"emfe-select-label emfe-select-delabel",attrs:{"disabled":item.disabled},on:{"click":function($event){_vm.spanTxt(item);}}},[_c('span',{class:{'emfe-select-label-disabled': item.disabled}},[_vm._v(_vm._s(item.name))])]):_vm._e()}),_vm._v(" "),_vm._l((_vm.checkList),function(item){return (_vm.type==='icon')?_c('div',{staticClass:"emfe-select-label emfe-select-delabel",class:{'disabled': item.disabled},attrs:{"disabled":item.disabled},on:{"click":function($event){_vm.spanTxt(item);}}},[_c('img',{staticClass:"emfe-select-icon",attrs:{"src":item.icon,"alt":item.name}}),_vm._v(" "),_c('span',{staticClass:"emfe-select-icon-piece"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('span',{staticClass:"emfe-select-icon-tel"},[_vm._v(_vm._s(item.tel))])]):_vm._e()})],2)]):_vm._e()])},
staticRenderFns: [],
  name: 'Select',
  data: function data() {
    return {
      checkList: [],
      flagCheck: false,
      checkVal: this.checkVals,
      newListVal: '',
      newDisabled: this.disabled,
      checkedNow: -1,
    };
  },
  props: {
    type: {
      validator: function validator(value) {
        return _.has(value, ['default', 'checkbox', 'icon']);
      },
    },
    seleStu: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    datas: {
      type: Array,
      required: true,
    },
    addText: {
      type: String,
      default: '添加标签',
    },
    selectText: {
      type: String,
      default: '选择标签',
    },
    errOk: {
      type: [Boolean],
      default: false,
    },
    checkVals: {
      type: Array,
      default: function default$1$$1() {
        return [];
      },
    },
    className: String,
    getDefData: Function,
    close: Function,
  },
  computed: {
    selectName: function selectName() {
      return [
        ( obj = {}, obj[((this.className) + "-select")] = !!this.className, obj ) ];
      var obj;
    },
    inputName: function inputName() {
      return [
        ( obj = {}, obj[((this.className) + "-select-input")] = !!this.className, obj ) ];
      var obj;
    },
    addErrorText: function addErrorText() {
      return [
        ( obj = {}, obj[((this.className) + "-select-error")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    inpcheck: function inpcheck() {
      var this$1 = this;

      this.checkList = this.datas;
      this.checkList.forEach(function (cl) {
        if (!O.hOwnProperty(cl, 'checked')) {
          cl.checked = false;
        }
        if (this$1.checkVals.length > 0) {
          this$1.checkVals.forEach(function (cVal) {
            if (cl.name === cVal) {
              cl.checked = true;
            }
          });
        }
      });
      this.flagCheck = this.checkList.length > 0;
    },
    newListBtn: function newListBtn() {
      var newdata = this.newListVal;
      this.$emit('addDataCheck', newdata, this.datas);
      this.$emit('addDataRadio', newdata, this.datas);
      this.newListVal = '';
    },
    spanTxt: function spanTxt(item) {
      if (item.disabled !== 'disabled') {
        this.checkVal = item.name;
        this.flagCheck = false;
        this.$emit('getDefData', this.checkVal, item, this.datas);
        if (this.getDefData) {
          this.getDefData(this.checkVal, item, this.datas);
        }
      }
    },
    closeFn: function closeFn() {
      this.checkList = [];
      this.flagCheck = false;
      if (this.close) {
        this.close();
      }
    },
    getdata: function getdata(item) {
      var va = this.checkVal;
      var iNow = va.indexOf(item.name);
      var hasItem = iNow !== -1;
      item.checked = !hasItem;
      if (hasItem) {
        this.checkVals.splice(iNow, 1);
      } else {
        this.checkVals.push(item.name);
      }
      if (hasItem) {
        this.$emit('delopt', item.name, item, this.datas);
      } else {
        this.$emit('checkedopt', item.name, item, this.datas);
      }
      this.$emit('getAllData', va, item);
    },
  },
  watch: {
    checkVals: function checkVals(val, oldVal) {
      if (val !== oldVal) {
        this.checkVal = val;
      }
    },
    disabled: function disabled(val, oldVal) {
      if (val !== oldVal) {
        this.newDisabled = val;
      }
    },
  },
};

EmfeSelect$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeSelect$1.name, EmfeSelect$1);
};

var EmfeModal$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"emfe-modal"},[_c('div',{staticClass:"emfe-modal-mask"}),_vm._v(" "),_c('div',{staticClass:"emfe-modal-wrap",style:({width: (_vm.width + "px")})},[_c('div',{staticClass:"emfe-modal-header"},[_c('div',{staticClass:"emfe-modal-header-inner"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"emfe-modal-header-close",on:{"click":_vm.closeModal}},[_vm._v("＋")])]),_vm._v(" "),_c('div',{staticClass:"emfe-modal-main",class:_vm.mainName},[_vm._t("modal-main")],2),_vm._v(" "),_c('div',{staticClass:"emfe-modal-footer"},[(_vm.cancelFlg)?_c('div',{staticClass:"emfe-modal-btn emfe-modal-btn-cancel",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.cancelText))]):_vm._e(),_vm._v(" "),(_vm.okFlg)?_c('div',{staticClass:"emfe-modal-btn emfe-modal-btn-ok",on:{"click":_vm.ok}},[_vm._v(_vm._s(_vm.okText))]):_vm._e()])])]):_vm._e()},
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
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    cancelFlg: {
      type: [String, Boolean],
      default: true,
    },
    okFlg: {
      type: [String, Boolean],
      default: true,
    },
  },
  computed: {
    mainName: function mainName() {
      return [
        ( obj = {}, obj[((this.className) + "-modal-main")] = !!this.className, obj ) ];
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

var EmfeModalC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"emfe-modal-c"},[_c('div',{staticClass:"emfe-modal-c-mask"}),_vm._v(" "),_c('div',{staticClass:"emfe-modal-c-wrap",style:({width: (_vm.width + "px")})},[_c('div',{staticClass:"emfe-modal-c-header"},[_c('div',{staticClass:"emfe-modal-c-header-inner"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"emfe-modal-c-header-close",on:{"click":_vm.closeModal}},[_vm._v("＋")])]),_vm._v(" "),_c('div',{staticClass:"emfe-modal-c-main",class:_vm.mainName},[_vm._t("modal-main")],2),_vm._v(" "),_c('div',{staticClass:"emfe-modal-c-footer"},[(_vm.cancelFlg)?_c('div',{staticClass:"emfe-modal-c-btn emfe-modal-c-btn-cancel",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.cancelText))]):_vm._e(),_vm._v(" "),(_vm.okFlg)?_c('div',{staticClass:"emfe-modal-c-btn emfe-modal-c-btn-ok",on:{"click":_vm.ok}},[_vm._v(_vm._s(_vm.okText))]):_vm._e()])])]):_vm._e()},
staticRenderFns: [],
  name: 'EmfeModalC',
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
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    cancelFlg: {
      type: [String, Boolean],
      default: true,
    },
    okFlg: {
      type: [String, Boolean],
      default: true,
    },
  },
  computed: {
    mainName: function mainName() {
      return [
        ( obj = {}, obj[((this.className) + "-modal-main")] = !!this.className, obj ) ];
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

EmfeModalC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeModalC$1.name, EmfeModalC$1);
};

var EmfeCheckout$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-checkout",class:_vm.checkoutName},[_c('label',{staticClass:"emfe-checkout-box"},[_c('i',{staticClass:"emfe-checkout-inner",class:_vm.innerName}),_vm._v(" "),(_vm.stop)?_c('input',{staticClass:"emfe-checkout-status",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.disable},domProps:{"checked":_vm.checkoutStatus},on:{"click":function($event){$event.stopPropagation();_vm.click($event);},"change":_vm.alocked}}):_c('input',{staticClass:"emfe-checkout-status",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.disable},domProps:{"checked":_vm.checkoutStatus},on:{"change":_vm.alocked}}),_vm._v(" "),_c('span',{staticClass:"emfe-checkout-text",class:_vm.textName},[_vm._v(_vm._s(_vm.newtitle))])]),_vm._v(" "),(_vm.slideShow)?_c('div',{staticClass:"emfe-checkout-slide"},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.checkoutStatus),expression:"checkoutStatus"}],staticClass:"emfe-checkout-slide-wrap",class:_vm.openName},[_vm._t("slide")],2)])],1):_vm._e()])},
staticRenderFns: [],
  name: 'EmfeCheckout',
  data: function data() {
    return {
      checkoutStatus: this.value,
      newtitle: this.title,
    };
  },
  props: {
    slideShow: {
      type: Boolean,
      default: false,
    },
    stop: {
      type: Boolean,
      default: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    className: String,
    disable: {
      type: Boolean,
      default: false,
    },
    title: String,
    inline: String,
    change: Function,
    index: [Number, String],
    name: String,
  },
  computed: {
    innerName: function innerName() {
      return [
        {
          'emfe-checkout-inner-disable': this.disable, 'emfe-checkout-inner-checked': this.checkoutStatus,
        } ];
    },
    checkoutName: function checkoutName() {
      return [
        ( obj = {
          'emfe-checkout-inline': this.inline,
        }, obj[((this.className) + "-checkout")] = !!this.className, obj ) ];
      var obj;
    },
    openName: function openName() {
      return [
        ( obj = {}, obj[((this.className) + "-slide-wrap-open")] = !!this.className, obj ) ];
      var obj;
    },
    textName: function textName() {
      return [
        ( obj = {}, obj[((this.className) + "-text")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    alocked: function alocked(e) {
      this.setValue(e.target.checked);
      this.$emit('input', this.checkoutStatus);
      this.$emit('checked', this.checkoutStatus, this.title, this.index);
      if (this.change) {
        this.change(this.checkoutStatus, this.title, this.index);
      }
    },
    setValue: function setValue(checked) {
      if ( checked === void 0 ) checked = this.value;

      this.checkoutStatus = checked;
    },
    click: function click() {
      this.$emit('click', this.checkoutStatus);
    },
  },
  watch: {
    title: function title(val, oldVal) {
      if (val !== oldVal) {
        this.newtitle = val;
      }
    },
    value: function value() {
      this.setValue();
    },
  },
};

EmfeCheckout$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeCheckout$1.name, EmfeCheckout$1);
};

var EmfeCheckoutC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-checkout-c",class:_vm.checkoutName},[_c('label',{staticClass:"emfe-checkout-c-box"},[_c('i',{staticClass:"emfe-checkout-c-inner",class:_vm.innerName}),_vm._v(" "),(_vm.stop)?_c('input',{staticClass:"emfe-checkout-c-status",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.disable},domProps:{"checked":_vm.checkoutStatus},on:{"click":function($event){$event.stopPropagation();},"change":_vm.alocked}}):_c('input',{staticClass:"emfe-checkout-c-status",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.disable},domProps:{"checked":_vm.checkoutStatus},on:{"change":_vm.alocked}}),_vm._v(" "),_c('span',{staticClass:"emfe-checkout-c-text",class:_vm.textName},[_vm._v(_vm._s(_vm.newtitle))])]),_vm._v(" "),(_vm.slideShow)?_c('div',{staticClass:"emfe-checkout-c-slide"},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.checkoutStatus),expression:"checkoutStatus"}],staticClass:"emfe-checkout-c-slide-wrap",class:_vm.openName},[_vm._t("slide")],2)])],1):_vm._e()])},
staticRenderFns: [],
  name: 'EmfeCheckoutC',
  data: function data() {
    return {
      checkoutStatus: this.value,
      newtitle: this.title,
    };
  },
  props: {
    slideShow: {
      type: Boolean,
      default: false,
    },
    stop: {
      type: Boolean,
      default: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    className: String,
    disable: {
      type: Boolean,
      default: false,
    },
    title: String,
    inline: String,
    change: Function,
    index: [Number, String],
    name: String,
  },
  computed: {
    innerName: function innerName() {
      return [
        {
          'emfe-checkout-c-inner-disable': this.disable, 'emfe-checkout-c-inner-checked': this.checkoutStatus,
        } ];
    },
    checkoutName: function checkoutName() {
      return [
        ( obj = {
          'emfe-checkout-inline': this.inline,
        }, obj[((this.className) + "-checkout")] = !!this.className, obj ) ];
      var obj;
    },
    openName: function openName() {
      return [
        ( obj = {}, obj[((this.className) + "-slide-wrap-open")] = !!this.className, obj ) ];
      var obj;
    },
    textName: function textName() {
      return [
        ( obj = {}, obj[((this.className) + "-text")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    alocked: function alocked(e) {
      this.setValue(e.target.checked);
      this.$emit('input', this.checkoutStatus);
      this.$emit('checked', this.checkoutStatus, this.title, this.index);
      if (this.change) {
        this.change(this.checkoutStatus, this.title, this.index);
      }
    },
    setValue: function setValue(checked) {
      if ( checked === void 0 ) checked = this.value;

      this.checkoutStatus = checked;
    },
  },
  watch: {
    title: function title(val, oldVal) {
      if (val !== oldVal) {
        this.newtitle = val;
      }
    },
    value: function value() {
      this.setValue();
    },
  },
};

EmfeCheckoutC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeCheckoutC$1.name, EmfeCheckoutC$1);
};

// 记录位置 x,y
var refPos$1 = {
  y: 0,
  x: 0,
};
// // 占位 边框 1 px
var hrBorderSize = 1;
// 其他常量
var otherConstant = 0;

// 上一个虚拟框的索引
var lastHrIndex = -1;

// 每个拖拽的宽度
var dragWidth = -1;

var EmfeDrop$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-drop",class:_vm.className},[_vm._l((_vm.datas),function(item,index){return [(item.hrStatus)?_c('div',{staticClass:"emfe-drop-hr",class:[(_vm.className + "-drag")],style:({width: item.style.width})}):_vm._e(),_vm._v(" "),_c('span',{key:index,ref:"hits",refInFor:true,class:[(_vm.className + "-drag")],style:(item.style),attrs:{"index":index},on:{"mousedown":function($event){$event.stopPropagation();_vm.down($event, index, item);}}},[_vm._v(_vm._s(item.title))])]}),_vm._v(" "),(_vm.lastHrStatus)?_c('div',{staticClass:"emfe-drop-hr"}):_vm._e()],2)},
staticRenderFns: [],
  name: 'EmfeDrop',
  data: function data() {
    return {
      datas: [],
      lastHrStatus: false, // 如果碰到最后一个最后一个分割线显示
      lastHit: -1,
      lastDrag: -1,
    };
  },
  props: {
    opationsData: {
      type: Array,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    swap: {
      type: Function,
      default: function () {},
    },
  },
  mounted: function mounted() {
    this.handleData();
  },
  methods: {
    handleData: function handleData() {
      var this$1 = this;

      this.opationsData.forEach(function (od, odIndex) {
        var newOd = {
          title: od.title,
          style: {},
          hrStatus: false,
          index: odIndex,
        };
        this$1.datas.push(newOd);
      });
    },
    testHit: function testHit(one, two) {
      var hit = false;
      var twoTop = getElementTop(two) - this.scrollTop;
      var twoBottom = twoTop + two.clientHeight;
      var oneTop = getElementTop(one) - this.scrollTop;
      var oneBottom = oneTop + one.clientHeight;

      var twoLeft = getElementLeft(two) - this.scrollLeft;
      var twoRight = twoLeft + two.clientWidth;
      var oneLeft = getElementLeft(one) - this.scrollLeft;
      var oneRight = oneLeft + one.clientWidth;
      if (oneTop <= twoBottom && oneBottom >= twoTop
      && oneLeft <= twoRight && oneRight >= twoLeft) {
        hit = true;
      }
      return hit;
    },
    down: function down(e, index, item) {
      this.scrollTop = document.body.scrollTop;
      this.scrollLeft = document.body.scrollLeft;
      this.elTop = (e.target.offsetTop - otherConstant);
      this.elLeft = (e.target.offsetLeft - otherConstant);
      refPos$1.y = e.pageY;
      refPos$1.x = e.pageX;
      dragWidth = e.target.clientWidth + (hrBorderSize * 2);
      document.addEventListener('mousemove', this.move, false);
      document.addEventListener('mouseup', this.up, false);
      item.style = {
        width: (dragWidth + "px"),
        position: 'absolute',
        left: ((this.elLeft) + "px"),
        top: ((this.elTop) + "px"),
      };
      item.hrStatus = true;
      this.lastDrag = index;
      this.$emit('down', this.datas[this.lastDrag], this.opationsData[this.lastDrag]);
      return false;
    },
    move: function move(e) {
      var this$1 = this;

      var ref = this.$refs;
      var hits = ref.hits;
      var ref$1 = this.datas[this.lastDrag];
      var index = ref$1.index;
      var style = ref$1.style;
      var disPosY = e.pageY - refPos$1.y;
      var disPosX = e.pageX - refPos$1.x;
      style.top = (this.elTop + disPosY) + "px";
      style.left = (this.elLeft + disPosX) + "px";
      hits.forEach(function (hit, hitIndex) {
        if (hitIndex !== index) {
          var isHit = this$1.testHit(hits[index], hit);
          if (isHit) {
            this$1.getHitIndex(hitIndex);
            this$1.moveDragHr();
          }
        }
      });
      this.$emit('move', this.datas[this.lastDrag], this.opationsData[this.lastDrag]);
      e.preventDefault();
      return false;
    },
    up: function up() {
      document.removeEventListener('mousemove', this.move, false);
      document.removeEventListener('mouseup', this.up, false);
      this.swapData();
      // 之所以不用 this.datas[lastHrIndex].hrStatus = false
      // 是因为连续拖拽碰撞，会出问题，有的虚线不隐藏
      this.datas.forEach(function (data) {
        data.hrStatus = false;
        data.style = {};
      });
      this.lastHrStatus = false;
      this.lastHit = -1;
      this.lastDrag = -1;
      lastHrIndex = -1;
      this.$emit('up');
    },
    getHitIndex: function getHitIndex(hitIndex) {
      this.lastHit = hitIndex;
    },
    // 移动拖拽的虚线框
    moveDragHr: function moveDragHr() {
      var hrIndex = this.lastDrag < this.lastHit ? 1 : 0;
      this.lastHrStatus = false;
      this.datas[this.lastDrag].hrStatus = false;
      if (lastHrIndex > -1 && lastHrIndex < this.datas.length) {
        this.datas[lastHrIndex].hrStatus = false;
      }
      lastHrIndex = this.lastHit + hrIndex;
      if (lastHrIndex < this.datas.length) {
        this.datas[lastHrIndex].hrStatus = true;
      } else {
        this.lastHrStatus = true;
      }
    },
    swapData: function swapData() {
      if (this.lastHit > -1) {
        var ref = this;
        var opationsData = ref.opationsData;
        var datas = ref.datas;
        var lastHit = ref.lastHit;
        var lastDrag = ref.lastDrag;
        _.exchangeAttrValue(datas[lastDrag], datas[lastHit], 'index');
        _.swap(this.datas, this.lastHit, this.lastDrag);
        _.swap(opationsData, lastHit, lastDrag);
        this.$emit('swap', datas[lastDrag], lastHit, lastDrag, opationsData[lastDrag]);
        this.swap(datas[lastDrag], lastHit, lastDrag, opationsData[lastDrag]);
      }
    },
    plus: function plus(index) {
      var obj = {
        other: false,
        hrStatus: false,
        style: {},
      };
      this.datas.splice(index + 1, 0, obj);
      this.opationsData.splice(index + 1, 0, '');
      this.$emit('plus', this.datas[index], index);
    },
    minus: function minus(index, item) {
      if (!this.clickFlg && item.other) {
        this.clickFlg = true;
      }
      this.datas.splice(index, 1);
      this.opationsData.splice(index, 1);
      this.$emit('minus', this.datas[index], index);
    },
    otherPlus: function otherPlus() {
      var obj = {
        hrStatus: false,
        other: true,
        style: {},
        noPlus: true,
      };
      if (this.clickFlg) {
        this.datas.splice(this.datas.length, 0, obj);
        this.opationsData.splice(this.datas.length, 0, '');
      }
      this.clickFlg = false;
      this.$emit('otherplus', this.datas[this.datas.length - 1], this.datas.length - 1);
    },
  },
};

EmfeDrop$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDrop$1.name, EmfeDrop$1);
};

var EmfeTable = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-box"},[(_vm.columns.length)?_c('table',{staticClass:"emfe-box-table",class:[_vm.classAdd]},[_vm._t("head"),_vm._v(" "),_c('tbody',[_vm._t("body")],2)],2):_vm._e(),_vm._v(" "),(!_vm.data.length)?_c('div',{staticClass:"emfe-box-nothing"},[_vm._v(_vm._s(_vm.nothingText))]):_vm._e()])},
staticRenderFns: [],
  name: 'EmfeTable',
  data: function data() {
    return {
      newObject: {},
    };
  },
  props: {
    border: {
      type: String,
      default: '',
    },
    columns: {
      type: Array,
      default: function default$1$$1() {
        return [];
      },
    },
    data: {
      type: Array,
      default: function default$2() {
        return [];
      },
    },
    nothingText: {
      type: String,
      default: '尚未收集到数据',
    },
    classAddName: {
      type: String,
      default: '',
    },
  },
  computed: {
    classAdd: function classAdd() {
      return this.classAddName ? ((this.classAddName) + "-table") : '';
    },
  },
};

var EmfeTableHead = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',{staticClass:"emfe-box-table-head",class:_vm.classHead},[_c('tr',{staticClass:"emfe-box-table-head-tr",class:_vm.classTr},[_vm._l((this.$parent.columns),function(item,index){return _c('th',{staticClass:"emfe-box-table-head-tr-th",class:[_vm.classTh, {'emfe-box-table-head-tr-th-checked': _vm.checked === index}],on:{"click":function($event){_vm.jump(index);}}},[_c('div',{staticClass:"emfe-box-table-head-tr-th-div"},[_vm._v(_vm._s(item.title))])])})],2)])},
staticRenderFns: [],
  name: 'EmfeTableHead',
  data: function data() {
    return {
      classAdd: this.$parent.classAdd,
      border: this.$parent.border,
    };
  },
  props: {
    checked: {
      type: Number,
      default: -1,
    },
  },
  created: function created() {
    console.log(this.border);
  },
  computed: {
    classHead: function classHead() {
      return [
        ( obj = {}, obj[((this.$parent.classAdd) + "-thead")] = !!this.classAdd, obj ) ];
      var obj;
    },
    classTr: function classTr() {
      return [
        ( obj = {}, obj[((this.$parent.classAdd) + "-thead-tr")] = !!this.classAdd, obj ) ];
      var obj;
    },
    classTh: function classTh() {
      return [
        ( obj = {
          border: ("" + (this.border)),
        }, obj[((this.$parent.classAdd) + "-thead-tr-th")] = !!this.classAdd, obj ) ];
      var obj;
    },
  },
  methods: {
    jump: function jump(index) {
      this.$emit('thJump', index);
    },
  },
};

var EmfeTableBody = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',{staticClass:"emfe-box-table-tr",class:_vm.classTr,on:{"click":function($event){_vm.jump(_vm.ind);}}},[_vm._l((_vm.dataSlice),function(list,index){return (!_vm.dataList[list.key].hebing)?_c('td',{staticClass:"emfe-box-table-tr-td",class:[_vm.classTd, {'emfe-box-table-tr-td-checked': _vm.checked === index}],attrs:{"rowspan":_vm.dataList[list.key].row ? _vm.rowSpan[list.key]:0}},[(_vm.dataList[list.key].slot==='a')?_vm._t("a"):_vm._e(),_vm._v(" "),(_vm.dataList[list.key].slot==='b')?_vm._t("b"):_vm._e(),_vm._v(" "),(_vm.dataList[list.key].slot==='c')?_vm._t("c"):_vm._e(),_vm._v(" "),(_vm.dataList[list.key].slot==='d')?_vm._t("d"):_vm._e(),_vm._v(" "),(_vm.dataList[list.key].slot==='e')?_vm._t("e"):_vm._e(),_vm._v(" "),(_vm.dataList[list.key].slot==='f')?_vm._t("f"):_vm._e(),_vm._v(" "),(_vm.dataList[list.key].slot==='g')?_vm._t("g"):_vm._e(),_vm._v(" "),(_vm.dataList[list.key].slot==='h')?_vm._t("h"):_vm._e(),_vm._v(" "),(_vm.dataList[list.key].slot==='i')?_vm._t("i"):_vm._e(),_vm._v(" "),(!_vm.dataList[list.key].slot)?_c('div',{staticClass:"emfe-box-table-tr-td-div"},[_vm._v(_vm._s(_vm.dataList[list.key].text))]):_vm._e()],2):_vm._e()})],2)},
staticRenderFns: [],
  name: 'EmfeTableBody',
  data: function data() {
    return {
      className: this.$parent.className,
      classAdd: this.$parent.classAdd,
      column: this.$parent.columns,
      data: this.$parent.data,
      border: this.$parent.border,
      current: 0,
      columnCopy: [],
    };
  },
  props: {
    dataList: {
      type: Object,
      default: function default$1$$1() {
        return {};
      },
    },
    ind: {
      type: Number,
      default: 0,
    },
    checked: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    dataSlice: function dataSlice() {
      if (this.$parent.columns[0].type === 'selection') {
        return this.column.slice(1, this.column.length);
      }
      return this.column;
    },
    classTr: function classTr() {
      return [
        ( obj = {}, obj[((this.$parent.classAdd) + "-tbody-tr")] = !!this.classAdd, obj ) ];
      var obj;
    },
    classTd: function classTd() {
      return [
        ( obj = {
          border: ("" + (this.border)),
        }, obj[((this.$parent.classAdd) + "-tbody-tr-td")] = !!this.classAdd, obj ) ];
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

var EmfeTextarea$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{ref:"textarea",staticClass:"emfe-textarea",class:_vm.textereaName,on:{"input":_vm.change,"blur":_vm.blur}},[_vm._v(_vm._s(_vm.value))])},
staticRenderFns: [],
  name: 'EmfeTextarea',
  props: {
    className: {
      type: String,
      default: '',
    },
    value: String,
  },
  computed: {
    textereaName: function textereaName() {
      return ( obj = {}, obj[((this.className) + "-textarea")] = !!this.className, obj );
      var obj;
    },
  },
  methods: {
    change: function change(val) {
      this.$emit('input', val.target.value);
    },
    blur: function blur(val) {
      this.$emit('blur', val.target.value);
    },
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.$refs.textarea.value = val;
      }
    },
  },
};

EmfeTextarea$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeTextarea$1.name, EmfeTextarea$1);
};

var EmfeDatapanel$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-datapanel",class:_vm.datapanelName},[_c('div',{staticClass:"emfe-datapanel-box"},[_c('div',{staticClass:"emfe-datapanel-title"},[_c('span',{staticClass:"emfe-datapanel-title-text"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('emfe-tooltip',{attrs:{"styles":_vm.styles,"theme":_vm.theme,"placement":_vm.placement}},[(_vm.iconFlg)?_c('emfe-icon',{attrs:{"type":_vm.type,"className":"emfe-datapanel-mark"},slot:"render"}):_vm._e(),_vm._v(" "),_c('div',{slot:"tip"},[_vm._t("tipText")],2)],1)],1),_vm._v(" "),_c('div',{staticClass:"emfe-datapanel-main"},[_c('span',{staticClass:"emfe-datapanel-main-content"},[_vm._v(_vm._s(_vm.contentText))]),_vm._v(" "),(_vm.companyText)?_c('span',{staticClass:"emfe-datapanel-main-company"},[_vm._v(_vm._s(_vm.companyText))]):_vm._e()])])])},
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
      type: [String, Number],
      default: '',
    },
    companyText: {
      type: String,
      default: '',
    },
    iconFlg: {
      type: [String, Boolean],
    },
    theme: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    styles: {
      type: Object,
      default: function default$1$$1() {
        return {};
      },
    },
    type: {
      type: String,
      default: 'set',
    },
  },
  computed: {
    datapanelName: function datapanelName() {
      return [
        ( obj = {}, obj[((this.className) + "-datapanel")] = !!this.className, obj ) ];
      var obj;
    },
  },
};

EmfeDatapanel$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeDatapanel$1.name, EmfeDatapanel$1);
};

var prefixCls$7 = 'emfe-tag';
var EmfeTag = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-tag",class:_vm.classList,on:{"click":_vm.activeClass}},[(_vm.type)?_c('emfe-icon',{attrs:{"type":_vm.type,"className":"icon-page"}}):_vm._e(),_vm._v(" "),_vm._t("default"),_vm._v(" "),(!!_vm.skin)?_c('span'):_vm._e()],2)},
staticRenderFns: [],
  name: 'EmfeTag',
  props: {
    disable: {
      type: [String, Boolean],
      default: false,
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
      type: [String, Number],
      required: true,
    },
  },
  data: function data() {
    return {
      activeOk: this.active,
      className: this.$parent.className,
      addName: this.$parent.addClass,
      skin: this.$parent.skin,
    };
  },
  computed: {
    classList: function classList() {
      return [
        ( obj = {}, obj[(prefixCls$7 + "-" + (this.className) + "-disable")] = this.disable, obj[(prefixCls$7 + "-" + (this.className))] = !this.disable, obj[(prefixCls$7 + "-" + (this.className) + "-active")] = this.activeOk && !this.skin, obj[(prefixCls$7 + "-" + (this.className) + "-" + (this.skin))] = !!this.skin, obj[(prefixCls$7 + "-" + (this.className) + "-" + (this.skin) + "-active")] = this.activeOk && !!this.skin, obj[((this.addName) + "-tag")] = !!this.addName, obj ) ];
      var obj;
    },
  },
  methods: {
    activeClass: function activeClass() {
      if (this.disable) {
        return;
      }
      this.$parent.getIndex(this.index);
      this.$emit('tag', this.index, this.activeOk);
    },
  },
  watch: {
    active: function active(val, oldVal) {
      if (val !== oldVal) {
        this.activeOk = this.active;
      }
    },
  },
};

var EmfeTagParent = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classNames},[_vm._t("default")],2)},
staticRenderFns: [],
  name: 'EmfeTagParent',
  props: {
    className: {
      type: String,
      required: true,
    },
    addClass: {
      type: String,
      default: '',
    },
    skin: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: function default$1$$1() {
        return [];
      },
    },
  },
  data: function data() {
    return {
      childrens: [],
    };
  },
  computed: {
    classNames: function classNames() {
      return [
        ( obj = {}, obj[("" + (this.addClass))] = !!this.addClass, obj ) ];
      var obj;
    },
  },
  methods: {
    getIndex: function getIndex(index) {
      if (this.className === 'default') {
        this.$children.forEach(function (element, eleIndex) {
          element.activeOk = parseInt(index, 10) === eleIndex;
        });
      } else if (this.className === 'checket') {
        this.$children[index].activeOk = true;
      } else if (this.className === 'screen' && this.skin === 'blue') {
        this.$children[index].activeOk = !this.$children[index].activeOk;
      } else if (this.className === 'screen' && this.skin === 'yellow') {
        this.data.splice(index, 1);
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
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-panel",class:_vm.classList},_vm._l((_vm.data),function(item,index){return _c('div',{staticClass:"emfe-panel-box",class:_vm.boxName},[_c('div',{staticClass:"emfe-panel-box-left",class:_vm.leftName},[_vm._v(_vm._s(item.text))]),_vm._v(" "),_c('div',{staticClass:"emfe-panel-box-right",class:_vm.rightName},[_vm._v(_vm._s(item.cont)),(!!_vm.type)?_c('emfe-icon',{attrs:{"type":_vm.type,"className":"emfe-panel-box"},on:{"icon-click":function($event){_vm.iconClick(index);}}}):_vm._e(),_vm._v(" "),(item.switchOk)?_c('emfe-switch',{attrs:{"value":_vm.switchType},on:{"toggle":_vm.toggle}},[_c('span',{slot:"open"},[_vm._v("ON")]),_vm._v(" "),_c('span',{slot:"close"},[_vm._v("OFF")])]):_vm._e()],1)])}))},
staticRenderFns: [],
  name: 'panel',
  props: {
    className: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: function default$1$$1() {
        return [];
      },
    },
    type: {
      type: String,
      default: '',
    },
    switchType: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle: function toggle(status) {
      this.$emit('switch-toogle', status);
    },
    iconClick: function iconClick(index) {
      this.$emit('icon-click', index);
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

var EmfePanelC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-panel-c"},[_c('div',{staticClass:"emfe-panel-c-logobox"},[_c('emfe-upload',{attrs:{"className":"emfe-panel-c","action":_vm.uploadAction},on:{"success":_vm.uploadSuccess}})],1),_vm._v(" "),_c('div',{staticClass:"emfe-panel-c-infobox"},[_c('div',{staticClass:"emfe-panel-c-infobox-about"},[_c('span',{staticClass:"emfe-panel-c-infobox-about-text"},[_vm._v("早上好，李根")]),_vm._v(" "),_c('span',{staticClass:"emfe-panel-c-infobox-about-text"},[_c('img',{staticClass:"emfe-panel-c-infobox-about-img",attrs:{"src":_vm.memberlogo}}),_vm._v("黄金会员")]),_vm._v(" "),_c('span',{staticClass:"emfe-panel-c-infobox-about-text"},[_vm._v("成长值"),_c('em',{staticClass:"emfe-panel-c-infobox-about-text-em"},[_vm._v(_vm._s(_vm.growth))])]),_vm._v(" "),_c('span',{staticClass:"emfe-panel-c-infobox-about-text"},[_vm._v("积分"),_c('em',{staticClass:"emfe-panel-c-infobox-about-text-em"},[_vm._v(_vm._s(_vm.integral))])]),_vm._v(" "),_c('span',{staticClass:"emfe-panel-c-infobox-about-text"},[_vm._v("余额"),_c('em',{staticClass:"emfe-panel-c-infobox-about-text-em"},[_vm._v("￥"+_vm._s(_vm.balance))])])]),_vm._v(" "),_c('div',{staticClass:"emfe-panel-c-infobox-info"},[_c('span',{staticClass:"emfe-panel-c-infobox-about-text"},[_vm._v("账号：+8618618468079")]),_vm._v(" "),_c('emfe-link',{attrs:{"className":"emfe-panel-c","routers":_vm.telRouters}},[_c('emfe-icon',{attrs:{"type":"hint","className":"emfe-panel-c"}})],1),_vm._v(" "),_c('emfe-link',{attrs:{"className":"emfe-panel-c","routers":_vm.infoRouters}},[_c('emfe-icon',{attrs:{"type":"hint","className":"emfe-panel-c"}})],1),_vm._v(" "),_c('emfe-link',{attrs:{"className":"emfe-panel-c","routers":_vm.walletRouters}},[_c('emfe-icon',{attrs:{"type":"hint","className":"emfe-panel-c"}})],1)],1)])])},
staticRenderFns: [],
  name: 'EmfePanelC',
  data: function data() {
    return {
      logo: '',
    };
  },
  props: {
    memberlogo: {
      type: String,
      required: true,
    },
    growth: {
      type: Number,
      required: true,
    },
    integral: {
      type: Number,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    telRouters: {
      type: Object,
      required: true,
    },
    infoRouters: {
      type: Object,
      required: true,
    },
    walletRouters: {
      type: Object,
      required: true,
    },
    uploadAction: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggle: function toggle(status) {
      this.$emit('switch-toogle', status);
    },
    iconClick: function iconClick(index) {
      this.$emit('icon-click', index);
    },
    uploadSuccess: function uploadSuccess(res) {
      console.log(res);
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

EmfePanelC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfePanelC$1.name, EmfePanelC$1);
};

var prefixCls$8 = 'emfe-slide';
var EmfeSlide$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-slide",class:_vm.slideName},[_c('div',{staticClass:"emfe-slide-main"},[_c('div',{staticClass:"emfe-slide-describe"},[_vm._v(_vm._s(_vm.slideLeft))]),_vm._v(" "),_c('div',{staticClass:"emfe-slide-progress"},[_c('progress',{ref:"slideBar",staticClass:"emfe-slide-progress-bar",attrs:{"value":_vm.moveValue,"max":_vm.maxPercent}}),_vm._v(" "),_c('emfe-drag',{attrs:{"className":"emfe-slide-progress","limit":"true","limitPosition":"center","dragDiyStyle":_vm.progress,"direction":"horizontal"},on:{"drag":_vm.drag}},[_c('span',{staticClass:"emfe-slide-progress-drag-left"}),_vm._v(" "),_c('span',{staticClass:"emfe-slide-progress-drag-right"})])],1),_vm._v(" "),_c('div',{staticClass:"emfe-slide-describe"},[_vm._v(_vm._s(_vm.slideRight))])])])},
staticRenderFns: [],
  name: 'EmfeSlide',
  data: function data() {
    return {
      progress: '',
      movePercent: '',
      moveValue: '',
      slideBarWidth: 0,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    percent: {
      type: Number,
      default: '',
    },
    maxPercent: {
      type: String,
      default: '',
    },
    slideWidth: String,
    slideLeft: {
      type: String,
      default: '',
    },
    slideRight: {
      type: String,
      default: '',
    },
  },
  computed: {
    slideName: function slideName() {
      return [
        ( obj = {}, obj[(prefixCls$8 + "-" + (this.className))] = !!this.className, obj ) ];
      var obj;
    },
  },
  mounted: function mounted() {
    var ref = this.$refs;
    var slideBar = ref.slideBar;
    this.slideBarWidth = this.slideWidth ? this.slideWidth : slideBar.clientWidth;
    var slideBarL = ((this.slideBarWidth / this.maxPercent) * this.percent) - 26;
    this.progress = "left: " + slideBarL + "px";
    this.movePercent = (this.percent) + "%";
    this.moveValue = this.percent;
    this.BarW = this.$children[0].$el.clientWidth;
  },
  methods: {
    drag: function drag(ev, left) {
      var iLeft = left + (this.BarW / 2);
      var iScale = iLeft / this.slideBarWidth;
      var moveLeft = Math.round(iScale * this.maxPercent);
      this.moveValue = moveLeft;
      this.movePercent = moveLeft + "%";
      this.$emit('change', moveLeft);
    },
  },
};

EmfeSlide$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeSlide$1.name, EmfeSlide$1);
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

var EmfeCrumbC$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-crumb-c"},[_c('span',{staticClass:"emfe-crumb-c-title"},[_vm._v("您的位置：")]),_vm._v(" "),_vm._l((_vm.datas),function(data){return [_c('span',{staticClass:"emfe-crumb-c-title"},[_vm._v(_vm._s(data))]),_vm._v(" "),_c('i',{staticClass:"emfe-crumb-c-format"},[_vm._v(_vm._s(_vm.format))])]}),_vm._v(" "),_c('emfe-link',{attrs:{"className":"emfe-crumb-c","routers":_vm.routers},on:{"click":_vm.click}},[_vm._v(_vm._s(_vm.linkText))])],2)},
staticRenderFns: [],
  name: 'EmfeCrumbC',
  props: {
    routers: {
      type: Object,
      required: true,
    },
    format: {
      type: String,
      default: '>',
    },
    datas: {
      type: Array,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  },
  methods: {
    click: function click() {
      this.$emit('click');
    },
  },
};

EmfeCrumbC$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeCrumbC$1.name, EmfeCrumbC$1);
};

var EmfeEdit$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-edit",class:_vm.editBox},_vm._l((_vm.oneList),function(one,index){return _c('div',{key:index,staticClass:"emfe-edit-wrap"},[_c('div',{staticClass:"emfe-edit-left",on:{"click":function($event){_vm.openTwoList(index);}}},[_c('div',{ref:"inputFocus",refInFor:true,staticClass:"emfe-edit-left-one",class:{'emfe-edit-left-one-open': _vm.openFlg === index}},[_c('emfe-input',{attrs:{"className":"emfe-edit-left-one"},model:{value:(one.name),callback:function ($$v) {one.name=$$v;},expression:"one.name"}})],1),_vm._v(" "),_vm._l((one.sub_choices),function(two,ind){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.openFlg === index),expression:"openFlg === index"}],staticClass:"emfe-edit-left-two"},[_c('div',{staticClass:"emfe-edit-left-two-text"},[_c('emfe-input',{attrs:{"className":"emfe-edit-left-two"},model:{value:(two.name),callback:function ($$v) {two.name=$$v;},expression:"two.name"}})],1),_vm._v(" "),_c('div',{staticClass:"emfe-edit-left-two-btn",on:{"click":function($event){_vm.addTwoList(index, ind);}}},[_vm._v("+")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.twoReduceFlg),expression:"twoReduceFlg"}],staticClass:"emfe-edit-left-two-btn",on:{"click":function($event){_vm.reduceTwoList(index, ind);}}},[_vm._v("-")])])})],2),_vm._v(" "),_c('div',{staticClass:"emfe-edit-right"},[_c('div',{staticClass:"emfe-edit-right-btn",on:{"click":function($event){_vm.addOneList(index);}}},[_vm._v("+")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.oneReduceFlg),expression:"oneReduceFlg"}],staticClass:"emfe-edit-right-btn",staticStyle:{"line-height":"11px"},on:{"click":function($event){_vm.reduceOneList(index);}}},[_vm._v("-")])])])}))},
staticRenderFns: [],
  name: 'EmfeEdit',
  data: function data() {
    return {
      oneReduceFlg: true,
      twoReduceFlg: true,
      openFlg: -1,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    oneList: {
      type: Array,
    },
    addOneObj: {
      type: Object,
    },
    addTwoObj: {
      type: Object,
    },
  },
  computed: {
    editBox: function editBox() {
      return [
        ( obj = {}, obj[((this.className) + "-edit")] = !!this.className, obj ) ];
      var obj;
    },
  },
  methods: {
    openTwoList: function openTwoList(index) {
      this.openFlg = index;
    },
    addOneList: function addOneList(index) {
      var this$1 = this;

      var newAddObj = O.copy(this.addOneObj);
      this.oneList.splice(index + 1, 0, newAddObj);
      this.openTwoList(index + 1);
      this.oneReduceFlg = true;
      setTimeout(function () {
        this$1.$refs.inputFocus[index + 1].querySelector('input').focus();
      }, 0);
    },
    reduceOneList: function reduceOneList(index) {
      if (this.oneList.length >= 2) {
        this.oneList.splice(index, 1);
      }
      if (this.oneList.length <= 1) {
        this.oneReduceFlg = false;
      }
    },
    addTwoList: function addTwoList(index, ind) {
      this.oneList[index].sub_choices.splice(ind + 1, 0, O.copy(this.addTwoObj));
      this.twoReduceFlg = true;
    },
    reduceTwoList: function reduceTwoList(index, ind) {
      if (this.oneList[index].sub_choices.length >= 2) {
        this.oneList[index].sub_choices.splice(ind, 1);
      }
      if (this.oneList[index].sub_choices.length <= 1) {
        this.twoReduceFlg = false;
      }
    },
  },
};

EmfeEdit$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeEdit$1.name, EmfeEdit$1);
};

// 记录位置 x,y
var refPos$2 = {
  y: 0,
};
// 距下边距 16 px
var itemMarginBottom = 16;
// 占位 边框 1 px
var hrBorderSize$1 = 1;
// 其他常量
var otherConstant$1 = (itemMarginBottom / 2) - hrBorderSize$1;
// 上一个虚拟框的索引
var lastHrIndex$1 = -1;

var EmfeOpations$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"dragBox",staticClass:"emfe-opations",class:_vm.opationsName},[_vm._l((_vm.datas),function(item,index){return [(item.hrStatus)?_c('div',{staticClass:"emfe-opations-hr"}):_vm._e(),_vm._v(" "),_c('div',{key:index,ref:"hits",refInFor:true,staticClass:"emfe-opations-main",style:(item.style)},[_c('i',{staticClass:"emfe-opations-icon emfe-opations-radio"}),_vm._v(" "),_c('emfe-input',{attrs:{"placeholder":item.other && !_vm.clickFlg ? _vm.otherPlaceholder : _vm.dataPlaceholder,"className":"emfe-opations"},model:{value:(_vm.opationsData[index]),callback:function ($$v) {var $$exp = _vm.opationsData, $$idx = index;if (!Array.isArray($$exp)){_vm.opationsData[index]=$$v;}else{$$exp.splice($$idx, 1, $$v);}},expression:"opationsData[index]"}}),_vm._v(" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(!item.noPlus),expression:"!item.noPlus"}],staticClass:"emfe-opations-icon emfe-opations-plus",class:{'emfe-opations-margin-right': !_vm.minusFlg},on:{"click":function($event){_vm.plus(index);}}}),_vm._v(" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.minusFlg),expression:"minusFlg"}],staticClass:"emfe-opations-icon emfe-opations-minus",class:{'emfe-opations-margin-left': item.noPlus},on:{"click":function($event){_vm.minus(index, item);}}}),_vm._v(" "),_c('i',{staticClass:"emfe-opations-icon emfe-opations-drag",on:{"mousedown":function($event){$event.stopPropagation();_vm.down($event, index, item);}}})],1)]}),_vm._v(" "),(_vm.lastHrStatus)?_c('div',{staticClass:"emfe-opations-hr"}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"emfe-opations-operation"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.clickFlg),expression:"clickFlg"}],staticClass:"emfe-opations-operation-other",on:{"click":_vm.otherPlus}},[_vm._v("其他选项")])])],2)},
staticRenderFns: [],
  name: 'EmfeOpations',
  data: function data() {
    return {
      clickFlg: !this.other,
      datas: [],
      lastHrStatus: false, // 如果碰到最后一个最后一个分割线显示
      lastHit: -1,
      lastDrag: -1,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    dataPlaceholder: {
      type: String,
      default: '选项',
    },
    otherPlaceholder: {
      type: String,
      default: '其他',
    },
    opationsData: {
      type: Array,
      required: true,
    },
    other: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    opationsName: function opationsName() {
      return [
        ( obj = {}, obj[((this.className) + "-opations")] = !!this.className, obj ) ];
      var obj;
    },
    minusFlg: function minusFlg() {
      return this.datas.length >= 2 + (this.clickFlg ? 0 : 1);
    },
  },
  mounted: function mounted() {
    this.handleData();
  },
  methods: {
    handleData: function handleData() {
      var this$1 = this;

      this.opationsData.forEach(function (od, odIndex) {
        var newOd = {
          style: {},
          hrStatus: false,
          index: odIndex,
          other: odIndex === this$1.opationsData.length - 1,
          noPlus: this$1.other && odIndex === this$1.opationsData.length - 1,
        };
        this$1.datas.push(newOd);
      });
    },
    testHit: function testHit(one, two) {
      var hit = false;
      var twoTop = getElementTop(two) - this.scrollTop;
      var twoBottom = twoTop + two.clientHeight;
      var oneTop = getElementTop(one) - this.scrollTop;
      var oneBottom = oneTop + one.clientHeight;
      if (oneTop <= twoBottom && oneBottom >= twoTop) {
        hit = true;
      }
      return hit;
    },
    down: function down(e, index, item) {
      this.scrollTop = document.body.scrollTop;
      this.elTop = (e.target.offsetTop - otherConstant$1);
      refPos$2.y = e.pageY;
      document.addEventListener('mousemove', this.move, false);
      document.addEventListener('mouseup', this.up, false);
      item.style = {
        position: 'absolute',
        left: 0,
        top: ((this.elTop) + "px"),
      };
      item.hrStatus = true;
      this.lastDrag = index;
      this.$emit('down', this.datas[this.lastDrag], this.opationsData[this.lastDrag]);
      return false;
    },
    move: function move(e) {
      var this$1 = this;

      var ref = this.$refs;
      var dragBox = ref.dragBox;
      // 因为创建出来的元素 $refs 不更新，并不是自适应的
      var hits = dragBox.querySelectorAll('.emfe-opations-main');
      var ref$1 = this.datas[this.lastDrag];
      var index = ref$1.index;
      var style = ref$1.style;
      var disPosY = e.pageY - refPos$2.y;
      style.top = (this.elTop + disPosY) + "px";
      hits.forEach(function (hit, hitIndex) {
        if (hitIndex !== index) {
          var isHit = this$1.testHit(hits[index], hit);
          if (isHit) {
            this$1.getHitIndex(hitIndex);
            this$1.moveDragHr();
          }
        }
      });
      this.$emit('move', this.datas[this.lastDrag], this.opationsData[this.lastDrag]);
      e.preventDefault();
      return false;
    },
    up: function up() {
      document.removeEventListener('mousemove', this.move, false);
      document.removeEventListener('mouseup', this.up, false);
      this.swapData();
      // 之所以不用 this.datas[lastHrIndex].hrStatus = false
      // 是因为连续拖拽碰撞，会出问题，有的虚线不隐藏
      this.datas.forEach(function (data) {
        data.hrStatus = false;
        data.style = {};
      });
      this.lastHrStatus = false;
      this.lastHit = -1;
      this.lastDrag = -1;
      lastHrIndex$1 = -1;
      this.$emit('up');
    },
    getHitIndex: function getHitIndex(hitIndex) {
      this.lastHit = hitIndex;
    },
    // 移动拖拽的虚线框
    moveDragHr: function moveDragHr() {
      var hrIndex = this.lastDrag < this.lastHit ? 1 : 0;
      this.lastHrStatus = false;
      this.datas[this.lastDrag].hrStatus = false;
      if (lastHrIndex$1 > -1 && lastHrIndex$1 < this.datas.length) {
        this.datas[lastHrIndex$1].hrStatus = false;
      }
      lastHrIndex$1 = this.lastHit + hrIndex;
      if (lastHrIndex$1 < this.datas.length) {
        this.datas[lastHrIndex$1].hrStatus = true;
      } else {
        this.lastHrStatus = true;
      }
    },
    swapData: function swapData() {
      if (this.lastHit > -1) {
        var ref = this;
        var opationsData = ref.opationsData;
        var datas = ref.datas;
        var lastHit = ref.lastHit;
        var lastDrag = ref.lastDrag;
        _.exchangeAttrValue(datas[lastDrag], datas[lastHit], 'index');
        _.swap(this.datas, this.lastHit, this.lastDrag);
        _.swap(opationsData, lastHit, lastDrag);
        this.updataIndex();
        this.$emit('swap', datas[lastDrag], lastHit, lastDrag, opationsData[lastDrag]);
      }
    },
    plus: function plus(index) {
      var obj = {
        other: false,
        hrStatus: false,
        style: {},
        noPlus: false,
        index: index + 1,
      };
      this.datas.splice(index + 1, 0, obj);
      this.opationsData.splice(index + 1, 0, '');
      // 多次添加的时候 index 永远是点击的那个所以更新下 index
      this.updataIndex();
      this.$emit('plus', this.datas[index], index);
    },
    minus: function minus(index, item) {
      if (!this.clickFlg && item.other) {
        this.clickFlg = true;
      }
      this.datas.splice(index, 1);
      this.opationsData.splice(index, 1);
      this.$emit('minus', this.datas[index], index);
    },
    otherPlus: function otherPlus() {
      var obj = {
        hrStatus: false,
        other: true,
        style: {},
        noPlus: true,
      };
      if (this.clickFlg) {
        this.datas.splice(this.datas.length, 0, obj);
        this.opationsData.splice(this.datas.length, 0, '');
      }
      this.clickFlg = false;
      this.$emit('otherplus', this.datas[this.datas.length - 1], this.datas.length - 1);
    },
    updataIndex: function updataIndex() {
      // 多次添加的时候 index 永远是点击的那个所以更新下 index
      this.datas.forEach(function (data, dIndex) {
        data.index = dIndex;
      });
    },
  },
  watch: {
    other: function other(val, oldVal) {
      if (val !== oldVal) {
        this.clickFlg = !val;
      }
    },
    opationsData: function opationsData(val, oldVal) {
      if (val !== oldVal) {
        this.handleData();
      }
    },
  },
};

EmfeOpations$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeOpations$1.name, EmfeOpations$1);
};

var timer$2 = null;

var EmfeCountdown$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-countdown",class:_vm.className ? [(_vm.className + "-countdown")] : ''},[_vm._l((_vm.hour),function(newHour){return _c('span',{staticClass:"emfe-countdown-time",class:_vm.className ? [(_vm.className + "-countdown-time")] : ''},[_vm._v(_vm._s(newHour))])}),_vm._v(" "),_c('span',{staticClass:"emfe-countdown-symbol",class:_vm.className ? [(_vm.className + "-countdown-symbol")] : ''},[_vm._v(":")]),_vm._v(" "),_vm._l((_vm.minute),function(min){return _c('span',{staticClass:"emfe-countdown-time",class:_vm.className ? [(_vm.className + "-countdown-time")] : ''},[_vm._v(_vm._s(min))])}),_vm._v(" "),_c('span',{staticClass:"emfe-countdown-symbol",class:_vm.className ? [(_vm.className + "-countdown-symbol")] : ''},[_vm._v(":")]),_vm._v(" "),_vm._l((_vm.second),function(sec){return _c('span',{staticClass:"emfe-countdown-time",class:_vm.className ? [(_vm.className + "-countdown-time")] : ''},[_vm._v(_vm._s(sec))])})],2)},
staticRenderFns: [],
  name: 'emfe-countdown',
  data: function () { return ({
    newTime: '',
    step: 0,
  }); },
  props: {
    time: {
      type: String,
      required: true,
    },
    className: String,
    end: {
      type: Function,
      default: function () {},
    },
  },
  computed: {
    hour: function hour() {
      var day = Math.floor(this.step / 1000 / 60 / 60 / 24) * 24;
      var hour = timeObject.zeroFill(Math.floor((this.step / 1000 / 60 / 60) % 24) + day);
      return hour.toString();
    },
    minute: function minute() {
      var minute = timeObject.zeroFill(Math.floor((this.step / 1000 / 60) % 60));
      return minute.toString();
    },
    second: function second() {
      var second = timeObject.zeroFill(Math.floor((this.step / 1000) % 60));
      return second.toString();
    },
  },
  created: function created() {
    this.handleTime();
    setTimeout(this.handleTime, 1000);
  },
  methods: {
    handleTime: function handleTime() {
      this.newTime = new Date(this.time);
      var now = new Date();
      var newTimeMsec = this.newTime.getTime();
      var nowMsec = now.getTime();
      this.step = newTimeMsec - nowMsec;
      if (!this.step) {
        clearTimeout(timer$2);
        this.$emit('end');
        this.end();
      } else {
        timer$2 = setTimeout(this.handleTime, 1000);
      }
    },
  },
};

EmfeCountdown$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeCountdown$1.name, EmfeCountdown$1);
};

// https://github.com/ElemeFE/element/blob/dev/packages/upload/src/ajax.js

function getError$1(action, option, xhr) {
  var msg = "fail to post " + action + " " + (xhr.status) + "'";
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = action;
  return err;
}

function getBody$1(xhr) {
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

function upload$2(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  var xhr = new XMLHttpRequest();
  var action = option.action;

  // if (xhr.upload) {
  //   xhr.upload.onprogress = function progress(e) {
  //     if (e.total > 0) {
  //       e.percent = (e.loaded / e.total) * 100;
  //     }
  //     option.onProgress(e);
  //   };
  // }

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError$1(action, option, xhr), getBody$1(xhr));
    }

    return option.onSuccess(getBody$1(xhr));
  };
  if (option.type === 'POST') {
    xhr.open('post', action, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  } else {
    xhr.open('get', action, true);
  }

  var headers = option.headers || {};

  // if (headers['X-Requested-With'] !== null) {
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  // }

  Object.keys(headers).forEach(function (item) {
    if (O.hOwnProperty(headers, item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  });

  // for (const item in headers) {
  //   if (O.hOwnProperty(headers, item) && headers[item] !== null) {
  //     xhr.setRequestHeader(item, headers[item]);
  //   }
  // }
  if (option.type === 'POST') {
    xhr.send(option.data);
  } else {
    xhr.send();
  }
}

var EmfeLogin$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"emfe-login",class:_vm.loginName},[_c('div',{staticClass:"emfe-login-mask"}),_vm._v(" "),_c('div',{staticClass:"emfe-login-wrap"},[_c('div',{staticClass:"emfe-login-header"},[_c('div',{staticClass:"emfe-login-header-inner"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"emfe-login-header-close",on:{"click":_vm.close}},[_vm._v("＋")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.weixin),expression:"!weixin"}],staticClass:"emfe-login-main"},[_c('emfe-tel',{attrs:{"className":"emfe-login","datas":_vm.telsData,"placeholder":"请输入手机号"},model:{value:(_vm.telNow),callback:function ($$v) {_vm.telNow=$$v;},expression:"telNow"}}),_vm._v(" "),_c('div',{staticClass:"emfe-login-main-tips"},[_vm._v(_vm._s(_vm.telError))]),_vm._v(" "),_c('emfe-input',{attrs:{"className":"emfe-login","type":"password","placeholder":"请输入密码"},model:{value:(_vm.data.password),callback:function ($$v) {_vm.data.password=$$v;},expression:"data.password"}}),_vm._v(" "),_c('div',{staticClass:"emfe-login-main-tips emfe-login-main-tips-two"},[_vm._v(_vm._s(_vm.pwdError))]),_vm._v(" "),_c('emfe-imgcode',{directives:[{name:"show",rawName:"v-show",value:(_vm.codeNow),expression:"codeNow"}],attrs:{"className":"emfe-login","src":_vm.imgSrc},on:{"click":_vm.imgClick},model:{value:(_vm.imgNow),callback:function ($$v) {_vm.imgNow=$$v;},expression:"imgNow"}}),_vm._v(" "),_c('emfe-button',{attrs:{"theme":"primary","className":"emfe-login"},on:{"click":_vm.login}},[_vm._v("登录")]),_vm._v(" "),_c('div',{staticClass:"emfe-login-handle"},[_c('emfe-checkout',{attrs:{"className":"emfe-login-handle","title":"下次自动登录"},model:{value:(_vm.autoLogin),callback:function ($$v) {_vm.autoLogin=$$v;},expression:"autoLogin"}}),_vm._v(" "),_c('emfe-link',{attrs:{"className":"emfe-login-handle","routers":{}},on:{"click":_vm.forgot}},[_vm._v("忘记密码？")]),_vm._v(" "),_c('emfe-link',{attrs:{"className":"emfe-login-handle-child","routers":{}},on:{"click":_vm.register}},[_vm._v("注册登录")])],1),_vm._v(" "),_c('emfe-titleline',{attrs:{"title":"微信登录"}}),_vm._v(" "),_c('div',{staticClass:"emfe-login-type"},[_c('img',{attrs:{"src":_vm.weixinLogo,"alt":"微信"},on:{"click":_vm.toggleType}})])],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.weixin),expression:"weixin"}],staticClass:"emfe-login-weixin"},[_vm._m(0),_vm._v(" "),_c('emfe-titleline',{attrs:{"title":"账户登录"}}),_vm._v(" "),_c('div',{staticClass:"emfe-login-type"},[_c('img',{attrs:{"src":_vm.accountLogo,"alt":"账号登录"},on:{"click":_vm.toggleType}})])],1)])]):_vm._e()},
staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-login-weixin-code",attrs:{"id":"login_weixin"}},[_c('img',{staticClass:"emfe-login-weixin-code-img",attrs:{"src":"https://static.evente.cn/evente/img/flag/v1/zg.jpg","alt":"微信登录"}})])}],
  name: 'EmfeLogin',
  data: function data() {
    return {
      title: '登录',
      telNow: {
        name: ' ',
        tel: '',
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
      },
      telsData: [
        {
          name: '中国',
          tel: '',
          prefix: '86',
          url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
        },
        {
          name: '香港',
          tel: '',
          prefix: '852',
          url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg',
        } ],
      data: {
        code: '',
        phone: '',
        password: '',
        auto_login: 1,
      },
      telError: '',
      pwdError: '',
      telFlg: false,
      pwdFlg: false,
      imgNow: '',
      imgSrc: 'https://static.evente.cn/evente/img/flag/v1/mlxy.jpg',
      codeNow: false,
      autoLogin: false,
      weixinLogo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAwIDQwIDQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NS4xICg0MzUwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i55m75b2VLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzOC4wMDAwMDAsIC02MjcuMDAwMDAwKSIgZmlsbD0iIzRDQkQ2MyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05NjAuNjM5MzcyLDY0Ni45ODM2NDYgQzk2MC4xODM0MTUsNjQ2Ljk4MzY0NiA5NTkuNzI3MTc3LDY0Ny40MDcxNzUgOTU5LjcyNzE3Nyw2NDcuOTI4NjkgQzk1OS43MjcxNzcsNjQ4LjM1MjA3OSA5NjAuMTgzMTM0LDY0OC43NzU0NjggOTYwLjYzOTM3Miw2NDguNzc1NDY4IEM5NjEuMzI0MDEsNjQ4Ljc3NTQ2OCA5NjEuODEyNjc2LDY0OC4zNTE5MzggOTYxLjgxMjY3Niw2NDcuOTI4NjkgQzk2MS44MTI2NzYsNjQ3LjQwNzMxNSA5NjEuMzI0MDEsNjQ2Ljk4MzY0NiA5NjAuNjM5MzcyLDY0Ni45ODM2NDYgTDk2MC42MzkzNzIsNjQ2Ljk4MzY0NiBaIE05NTcuNjQxODE4LDY0Mi41ODQ1MjkgQzk1OC4zNTg3NDMsNjQyLjU4NDUyOSA5NTguODE0ODQxLDY0Mi4xMjg1NzEgOTU4LjgxNDg0MSw2NDEuNDQ0MDc0IEM5NTguODE0ODQxLDY0MC43Mjc0MjkgOTU4LjM1ODc0Myw2NDAuMzAzNjE5IDk1Ny42NDE4MTgsNjQwLjMwMzYxOSBDOTU2Ljk1NzQ2MSw2NDAuMzAzNjE5IDk1Ni4zMDU2NzIsNjQwLjcyNzQyOSA5NTYuMzA1NjcyLDY0MS40NDQwNzQgQzk1Ni4zMDU2NzIsNjQyLjEyODcxMiA5NTYuOTU3NDYxLDY0Mi41ODQ1MjkgOTU3LjY0MTgxOCw2NDIuNTg0NTI5IEw5NTcuNjQxODE4LDY0Mi41ODQ1MjkgWiBNOTU4LjAwMDIxMSw2MjcgQzk0Ni45NTQ2MTgsNjI3IDkzOCw2MzUuOTU0MTk3IDkzOCw2NDYuOTk5Nzg5IEM5MzgsNjU4LjA0NTgwMyA5NDYuOTU0NjE4LDY2NyA5NTguMDAwMjExLDY2NyBDOTY5LjA0NTgwMyw2NjcgOTc4LDY1OC4wNDU4MDMgOTc4LDY0Ni45OTk3ODkgQzk3OC4wMDAxNCw2MzUuOTU0MTk3IDk2OS4wNDYwODQsNjI3IDk1OC4wMDAyMTEsNjI3IEw5NTguMDAwMjExLDYyNyBaIE05NTQuMjIwMTczLDY1Mi4wNjcxMiBDOTUzLjAxNDU4Miw2NTIuMDY3MTIgOTUyLjEzNDY3NCw2NTEuODcxNTY5IDk1MC45OTM5MzksNjUxLjU0NTMyNCBMOTQ3LjcwMjg0OSw2NTMuMjA3NTc0IEw5NDguNjQ4MTc0LDY1MC40MDUxNSBDOTQ2LjMzNDQxNSw2NDguNzc2MTcgOTQ0Ljk2NTg0Miw2NDYuNzIzMDk5IDk0NC45NjU4NDIsNjQ0LjIxMzc5IEM5NDQuOTY1ODQyLDYzOS43ODIyNDUgOTQ5LjEzNjg0LDYzNi4zOTM0NDkgOTU0LjIyMDE3Myw2MzYuMzkzNDQ5IEM5NTguNzE2ODU1LDYzNi4zOTM0NDkgOTYyLjcyNTQzMiw2MzkuMDY1MzE5IDk2My41MDcyMTQsNjQyLjg0NTc3NyBDOTYzLjE4MTM5LDY0Mi43ODAwNzkgOTYyLjg4Nzk5NCw2NDIuNzQ3NjUxIDk2Mi42Mjc0NDcsNjQyLjc0NzY1MSBDOTU4LjE5NTYyMSw2NDIuNzQ3NjUxIDk1NC43NzQyNTcsNjQ2LjA3MTQ1IDk1NC43NzQyNTcsNjUwLjA3OTMyNiBDOTU0Ljc3NDI1Nyw2NTAuNzYzODIzIDk1NC44NzE5NjIsNjUxLjM4Mjc2MyA5NTUuMDM0ODA0LDY1Mi4wMzQ4MzIgQzk1NC43NzQzOTcsNjUyLjA2NzEyIDk1NC40ODEwMDEsNjUyLjA2NzEyIDk1NC4yMjAxNzMsNjUyLjA2NzEyIEw5NTQuMjIwMTczLDY1Mi4wNjcxMiBaIE05NjcuODA4NjI2LDY1NS4yNjAzNjQgTDk2OC40NjAyNzQsNjU3LjYwNjY5MSBMOTY1Ljk4MzUzMyw2NTYuMjA1NjkgQzk2NS4wMzg3Nyw2NTYuNDAwOTU5IDk2NC4xMjYyOTQsNjU2LjY5NDIxNSA5NjMuMTgxMzksNjU2LjY5NDIxNSBDOTU4LjgxNDg0MSw2NTYuNjk0MjE1IDk1NS4zNjA5MDksNjUzLjY5NjUyMSA5NTUuMzYwOTA5LDY0OS45ODE3NjEgQzk1NS4zNjA5MDksNjQ2LjI2NzAwMSA5NTguODE0ODQxLDY0My4yNjkxNjYgOTYzLjE4MTM5LDY0My4yNjkxNjYgQzk2Ny4zMTk4MTksNjQzLjI2OTE2NiA5NzEuMDM0Mjk5LDY0Ni4yNjcwMDEgOTcxLjAzNDI5OSw2NDkuOTgxNzYxIEM5NzEuMDM0NDM5LDY1Mi4wNjcxMiA5NjkuNjMzMTU3LDY1My45MjQzNTkgOTY3LjgwODYyNiw2NTUuMjYwMzY0IEw5NjcuODA4NjI2LDY1NS4yNjAzNjQgWiBNOTUxLjE4OTc3LDY0MC4zMDM0NzkgQzk1MC41MDU0MTMsNjQwLjMwMzQ3OSA5NDkuNzg4NzY5LDY0MC43MjcyODkgOTQ5Ljc4ODc2OSw2NDEuNDQzOTM0IEM5NDkuNzg4NzY5LDY0Mi4xMjg0MzEgOTUwLjUwNTQxMyw2NDIuNTg0ODA5IDk1MS4xODk3Nyw2NDIuNTg0ODA5IEM5NTEuODQxNTU5LDY0Mi41ODQ4MDkgOTUyLjM2Mjc5Myw2NDIuMTI4NDMxIDk1Mi4zNjI3OTMsNjQxLjQ0MzkzNCBDOTUyLjM2Mjc5Myw2NDAuNzI3Mjg5IDk1MS44NDE1NTksNjQwLjMwMzQ3OSA5NTEuMTg5NzcsNjQwLjMwMzQ3OSBMOTUxLjE4OTc3LDY0MC4zMDM0NzkgWiBNOTY1Ljc1NTQxNCw2NDYuOTgzNjQ2IEM5NjUuMjY2NzQ4LDY0Ni45ODM2NDYgOTY0Ljg0MzA3OSw2NDcuNDA3MTc1IDk2NC44NDMwNzksNjQ3LjkyODY5IEM5NjQuODQzMDc5LDY0OC4zNTIwNzkgOTY1LjI2Njc0OCw2NDguNzc1NDY4IDk2NS43NTU0MTQsNjQ4Ljc3NTQ2OCBDOTY2LjQwNzIwMyw2NDguNzc1NDY4IDk2Ni44OTU4NjksNjQ4LjM1MTkzOCA5NjYuODk1ODY5LDY0Ny45Mjg2OSBDOTY2Ljg5NTg2OSw2NDcuNDA3MzE1IDk2Ni40MDcyMDMsNjQ2Ljk4MzY0NiA5NjUuNzU1NDE0LDY0Ni45ODM2NDYgTDk2NS43NTU0MTQsNjQ2Ljk4MzY0NiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
      accountLogo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAwIDQwIDQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NS4xICg0MzUwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlvq7kv6HmiavnoIEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MzguMDAwMDAwLCAtNjY2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2NC4wMDAwMDAsIDYzNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzQuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTQiIGZpbGw9IiMxOTk2RjkiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LjQ3MjM2MTgsMTAgQzIyLjI3OTczMiwxMCAyNC41NTQ0Mzg4LDEyLjIzNzg1NTkgMjQuNTU0NDM4OCwxNC45OTgzMjUgQzI0LjU1NDQzODgsMTcuNzU4Nzk0IDIyLjI3OTczMiwxOS45OTY2NDk5IDE5LjQ3MjM2MTgsMTkuOTk2NjQ5OSBDMTYuNjY0OTkxNiwxOS45OTY2NDk5IDE0LjM5MDI4NDcsMTcuNzU4Nzk0IDE0LjM5MDI4NDcsMTQuOTk4MzI1IEMxNC4zOTAyODQ3LDEyLjIzNzg1NTkgMTYuNjY0OTkxNiwxMCAxOS40NzIzNjE4LDEwIFogTTE3LjU2NjE2NDEsMjEuNjY0OTkxNiBMMjEuODAwNjcsMjEuNjY0OTkxNiBDMjUuNDI1NDYwNiwyMS42NjQ5OTE2IDI4LjM2NjgzNDIsMjQuNTU2MTEzOSAyOC4zNjY4MzQyLDI4LjEyMzk1MzEgTDI4LjM2NjgzNDIsMjguNTM5MzYzNSBDMjguMzY2ODM0MiwyOS45NDYzOTg3IDI1LjQyNTQ2MDYsMzAgMjEuODAwNjcsMzAgTDE3LjU2NjE2NDEsMzAgQzEzLjk0MTM3MzUsMzAgMTEsMzAgMTEsMjguNTM5MzYzNSBMMTEsMjguMTIzOTUzMSBDMTEsMjQuNTU2MTEzOSAxMy45NDEzNzM1LDIxLjY2NDk5MTYgMTcuNTY2MTY0MSwyMS42NjQ5OTE2IEwxNy41NjYxNjQxLDIxLjY2NDk5MTYgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
      weixin: false,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    show: {
      type: [Boolean, String],
      default: false,
    },
    referrerUrl: {
      type: String,
    },
    action: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      default: function default$1$$1() {
        return {};
      },
    },
    forgotName: {
      type: String,
      required: true,
    },
    registerName: {
      type: String,
      required: true,
    },
    loginClose: {
      type: Function,
      default: function () {},
    },
  },
  computed: {
    loginName: function loginName() {
      return this.className ? ((this.className) + "-login") : '';
    },
  },
  methods: {
    close: function close() {
      this.loginClose(false);
    },
    imgClick: function imgClick() {
      this.imgSrc = 'https://static.evente.cn/evente/img/flag/v1/de.jpg';
    },
    login: function login() {
      var this$1 = this;

      if (this.autoLogin) {
        this.data.auto_login = 2;
      }
      this.data.phone = this.telNow.tel;
      this.data.code = this.telNow.prefix;
      if (this.data.phone === '') {
        this.telFlg = false;
        this.telError = '请输入手机号';
      } else if (this.$EmfeFormTest.phone(this.data.phone)) {
        this.telError = '';
        this.telFlg = true;
      } else {
        this.telFlg = false;
        this.telError = '请输入正确手机号';
      }
      if (this.data.password === '') {
        this.pwdError = '请输入密码';
        this.pwdFlg = false;
      } else if (this.$EmfeFormTest.password(this.data.password)) {
        this.pwdError = '';
        this.pwdFlg = true;
      } else {
        this.pwdError = '账号密码不匹配';
        this.pwdFlg = false;
      }
      if (this.telFlg && this.pwdFlg) {
        upload$2({
          headers: this.headers,
          type: 'POST',
          data: JSON.stringify(this.data),
          action: this.action,
          onSuccess: function (res) {
            if (res.code === 10000) {
              window.location.href = this$1.referrerUrl;
              var Rtoken = res.data.token;
              var autoData = "Bearer " + Rtoken;
              var callBack = res.data.call_back_url;
              callBack.forEach(function (url) {
                upload$2({
                  headers: this$1.headers,
                  type: 'GET',
                  action: url,
                });
              });
              window.$cookie.set('Authorization', autoData, res.data.expires);
            } else if (res.code === 2012023) {
              this$1.telError = res.message;
              this$1.codeNow = true;
            } else {
              this$1.telError = res.message;
            }
          },
          onError: function (err, response) {
            console.log(err, response);
          },
        });
      }
    },
    forgot: function forgot() {
      this.$router.push({ name: this.forgotName });
    },
    register: function register() {
      this.$router.push({ name: this.registerName });
    },
    toggleType: function toggleType() {
      this.weixin = !this.weixin;
      if (this.weixin) {
        var obj = new window.WxLogin({
          id: 'login_weixin',
          appid: 'wx0fc7f448c3ed4e4e',
          scope: 'snsapi_login',
          redirect_uri: 'http%3a%2f%2f192.168.1.184%3a8180%2fweixin',
          state: 'login',
          style: '',
          href: '',
        });
        console.log(obj);
      }
    },
  },
};

EmfeLogin$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeLogin$1.name, EmfeLogin$1);
};

var EmfeTitleLine = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emfe-titleline"},[_vm._v(_vm._s(_vm.title))])},
staticRenderFns: [],
  name: 'emfe-titleline',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};

EmfeTitleLine.install = function (Vue$$1) {
  Vue$$1.component(EmfeTitleLine.name, EmfeTitleLine);
};

/* eslint-disable */
var EmfeIscroll$1 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scrollView",class:_vm.wrapperClass,style:(_vm.wrapperStyle)},[_c('div',{ref:"scroller",class:_vm.scrollerClass,style:(_vm.scrollerStyle)},[_vm._t("default")],2)])},
staticRenderFns: [],
  name: 'EmfeIscroll',
  props: {
    options: {
      type: Object,
      default: function () {},
    },
    wrapperClass: {
      type: [Array, Object],
      default: function () {},
    },
    wrapperStyle: {
      type: Object,
      default: function () {},
    },
    scrollerClass: {
      type: [Array, Object],
      default: function () {},
    },
    scrollerStyle: {
      type: Object,
      default: function () {},
    },
  },
  methods: {
    registPullEvents: function registPullEvents() {
      var this$1 = this;

      var ref = this;
      var iscroll = ref.iscroll;
      iscroll.on('scrollEnd', function (e) {
        if (iscroll.y <= iscroll.maxScrollY) {
          this$1.$emit('pullUp', e, iscroll);
        } else if (iscroll.y >= 0) {
          this$1.$emit('pullDown', e, iscroll);
        }
      });
    },
    zoom: function zoom() {
      var arguments$1 = arguments;
      var this$1 = this;

      this.$nextTick(function () { return this$1.iscroll.zoom.apply(this$1.iscroll, arguments$1); });
    },
    goToPage: function goToPage() {
      var arguments$1 = arguments;
      var this$1 = this;

      this.$nextTick(function () { return this$1.iscroll.goToPage.apply(this$1.iscroll, arguments$1); });
    },
    next: function next() {
      var arguments$1 = arguments;
      var this$1 = this;

      this.$nextTick(function () { return this$1.iscroll.next.apply(this$1.iscroll, arguments$1); });
    },
    prev: function prev() {
      var arguments$1 = arguments;
      var this$1 = this;

      this.$nextTick(function () { return this$1.iscroll.prev.apply(this$1.iscroll, arguments$1); });
    },
    scrollToElement: function scrollToElement() {
      var arguments$1 = arguments;
      var this$1 = this;

      this.$nextTick(function () { return this$1.iscroll.scrollToElement.apply(this$1.iscroll, arguments$1); });
    },
    scrollBy: function scrollBy() {
      var arguments$1 = arguments;
      var this$1 = this;

      this.$nextTick(function () { return this$1.iscroll.scrollBy.apply(this$1.iscroll, arguments$1); });
    },
    scrollTo: function scrollTo() {
      var arguments$1 = arguments;
      var this$1 = this;

      this.$nextTick(function () { return this$1.iscroll.scrollTo.apply(this$1.iscroll, arguments$1); });
    },
    refresh: function refresh() {
      var arguments$1 = arguments;
      var this$1 = this;

      this.$nextTick(function () { return this$1.iscroll.refresh.apply(this$1.iscroll, arguments$1); });
    },
  },
  beforeDestroy: function beforeDestroy() {
    this.iscroll && this.iscroll.destroy();
    this.iscroll = null;
  },
  mounted: function mounted() {
    var this$1 = this;

    var events = [
      'beforeScrollStart',
      'scrollCancel',
      'scrollStart',
      'scrollEnd',
      'scroll',
      'flick',
      'zoomStart',
      'zoomEnd' ];
    setTimeout(function () {
      var key;
      var value;
      var attributes = this$1.$refs.scrollView.attributes;
      this$1.$refs.scrollView.scrollTop = 0;
      for (key in attributes) {
        value = attributes[key];
        if (value instanceof global.Attr && value.name.indexOf('data-v-') > -1) {
          this$1.$refs.scroller.attributes.setNamedItem(document.createAttribute(value.name));
        }
      }
      try {
        global.location.hash && this$1.iscroll.scrollToElement(global.location.hash, 0);
      } catch (e) {
      }
    }, 0);
    this.$nextTick(function () {
      this$1.iscroll = new IScroll(this$1.$refs.scrollView, this$1.options);
      events.forEach(function (event) {
        this$1.iscroll.on(event, function () { return this$1.$emit(event, this$1.iscroll); });
      });
      this$1.registPullEvents();
    });
  },
};
/* eslint-disable */

EmfeIscroll$1.install = function (Vue$$1) {
  Vue$$1.component(EmfeIscroll$1.name, EmfeIscroll$1);
};

var EmfeFormTest = {
  ip: function ip(val) {
    /* eslint-disable */
    var ipPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    /* eslint-disable */
    return ipPattern.test(val);
  },
  web: function web(val) {
    /* eslint-disable */
    // 网址
    var webPattern = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    /* eslint-disable */
    return webPattern.test(val);
  },
  card: function card(val) {
    /* eslint-disable */
    //身份证号（18位）
    var cardPattern = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    /* eslint-disable */
    return cardPattern.test(val);
  },
  phone: function phone(val) {
    /* eslint-disable */
    //手机号
    var phonePattern = /^1[34578]\d{9}$/;
    /* eslint-disable */
    return phonePattern.test(val);
  },
  email: function email(val) {
    /* eslint-disable */
    //Email
    var emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    /* eslint-disable */
    return emailPattern.test(val);
  },
  num: function num(val) {
    /* eslint-disable */
    //数字
    var numPattern = /^-?\d*\.?\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  num: function num(val) {
    /* eslint-disable */
    //数字
    var numPattern = /^-?\d*\.?\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  numInt: function numInt(val) {
    /* eslint-disable */
    //数字
    var numPattern = /^-?\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  // 负整数
  negativeInt: function negativeInt(val) {
    /* eslint-disable */
    //数字
    var numPattern = /^-\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  // 负数（带小数）
  negative: function negative(val) {
    /* eslint-disable */
    //数字
    var numPattern = /^-\d*\.?\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  // 正整数
  positiveInt: function positiveInt(val) {
    /* eslint-disable */
    //数字
    var numPattern = /^\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  // 正数（带小数）
  positive: function positive(val) {
    /* eslint-disable */
    //数字
    var numPattern = /^\d*\.?\d+$/;
    /* eslint-disable */
    return numPattern.test(val);
  },
  qq: function qq(val) {
    /* eslint-disable */
    //QQ号正则，5至11位
    var qqPattern = /^[1-9][0-9]{4,10}$/;
    /* eslint-disable */
    return qqPattern.test(val);
  },
  password: function password(val) {
    /* eslint-disable */
    //QQ号正则，5至11位
    var pwdPattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,20}$/;
    /* eslint-disable */
    return pwdPattern.test(val);
  },
  money: function money(val) {
    /* eslint-disable */
    //金钱正则
    var moneyPattern = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    /* eslint-disable */
    return moneyPattern.test(val);
  },
  childAccount: function childAccount(val) {
     /* eslint-disable */
    //子账户正则
    var childAccountPattern = /^(1[34578][0-9]{9}):(1[34578][0-9]{9})$/;
    /* eslint-disable */
    return childAccountPattern.test(val);
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

var emfeDocumentfocus = {
  inserted: function inserted(el, value) {
    if (value.value) {
      el.focus();
    }
  },
};

// 组件
// 服务
// 指令
var emfeCpt = {
  EmfeCol: Grid.EmfeCol,
  EmfeRow: Grid.EmfeRow,
  EmfeBar: EmfeBar$1,
  EmfeBarC: EmfeBarC$1,
  EmfeIcon: EmfeIcon$1,
  EmfeTooltip: EmfeTooltip$1,
  EmfeTransition: EmfeTransition,
  EmfeModal: EmfeModal$1,
  EmfeModalC: EmfeModalC$1,
  EmfeMenu: EmfeMenu$1,
  EmfeHeader: EmfeHeader$1,
  EmfeHeaderC: EmfeHeaderC$1,
  EmfeFooter: EmfeFooter$1,
  EmfeFooterC: EmfeFooterC$1,
  EmfeCopy: EmfeCopy$1,
  EmfeUpload: EmfeUpload$1,
  EmfeDrag: EmfeDrag$1,
  EmfeColor: EmfeColor$1,
  EmfeInput: EmfeInput$1,
  EmfeInputmore: EmfeInputmore.EmfeInputmore,
  EmfeInputmoreGroup: EmfeInputmore.EmfeInputmoreGroup,
  EmfeNumber: EmfeNumber$1,
  EmfeTel: EmfeTel$1,
  EmfeTelC: EmfeTelC$1,
  EmfeSmscode: EmfeSmscode$1,
  EmfeSmscodeC: EmfeSmscodeC$1,
  EmfeImgcode: EmfeImgcode$1,
  EmfeImgcodeC: EmfeImgcodeC$1,
  EmfeSteps: EmfeSteps$1,
  EmfeStepsC: EmfeStepsC$1,
  EmfeButton: Button.EmfeButton,
  EmfeButtonGroup: Button.EmfeButtonGroup,
  EmfeButtonC: ButtonC.EmfeButtonC,
  EmfeButtonGroupC: ButtonC.EmfeButtonGroupC,
  EmfeSwitch: EmfeSwitch$1,
  EmfeTitle: EmfeTitle$1,
  EmfeTitleC: EmfeTitleC$1,
  EmfeRadio: Radio.EmfeRadio,
  EmfeRadioGroup: Radio.EmfeRadioGroup,
  EmfeRadioC: RadioC.EmfeRadioC,
  EmfeRadioGroupC: RadioC.EmfeRadioGroupC,
  EmfeTable: Table.EmfeTable,
  EmfeTableHead: Table.EmfeTableHead,
  EmfeTableBody: Table.EmfeTableBody,
  EmfeDate: EmfeDate$1,
  EmfeDateM: EmfeDateM$1,
  EmfeTime: EmfeTime$1,
  EmfeTimeM: EmfeTimeM$1,
  EmfeDatetime: EmfeDatetime$1,
  EmfeDatetimeM: EmfeDatetimeM$1,
  EmfePagination: EmfePagination$1,
  EmfePaginationC: EmfePaginationC$1,
  EmfeSelect: EmfeSelect$1,
  EmfeCheckout: EmfeCheckout$1,
  EmfeCheckoutC: EmfeCheckoutC$1,
  EmfeDrop: EmfeDrop$1,
  EmfeLink: EmfeLink$1,
  EmfeTextarea: EmfeTextarea$1,
  EmfeDatapanel: EmfeDatapanel$1,
  EmfeTag: Tag.EmfeTag,
  EmfeTagParent: Tag.EmfeTagParent,
  EmfePanel: EmfePanel$1,
  EmfePanelC: EmfePanelC$1,
  EmfeSlide: EmfeSlide$1,
  EmfeCrumb: EmfeCrumb$1,
  EmfeCrumbC: EmfeCrumbC$1,
  EmfeHottip: EmfeHottip$1,
  EmfeEdit: EmfeEdit$1,
  EmfeOpations: EmfeOpations$1,
  EmfeCountdown: EmfeCountdown$1,
  EmfeLogin: EmfeLogin$1,
  EmfeTitleline: EmfeTitleLine,
  EmfeIscroll: EmfeIscroll$1,
};

var emfeDir = {
  emfeDocumentclick: emfeDocumentclick,
  emfeDocumentfocus: emfeDocumentfocus,
};

var install = function (Vue$$1) {
  if (install.installed) { return; }

  Object.keys(emfeCpt).forEach(function (key) {
    Vue$$1.component(key, emfeCpt[key]);
  });

  Object.keys(emfeDir).forEach(function (key) {
    Vue$$1.directive(key, emfeDir[key]);
  });

  Vue$$1.prototype.$EmfeMessage = EmfeMessage;
  Vue$$1.prototype.$EmfeFormTest = EmfeFormTest;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  version: '1.0.0',
  install: install,
  EmfeMessage: EmfeMessage,
  EmfeFormTest: EmfeFormTest,
};

module.exports = index;
