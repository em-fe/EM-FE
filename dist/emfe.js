/*!
 * @ name em-fe
 * @ version 2.0.1
 * @ time 2018-5-22 10:5:59
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("emfe", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["emfe"] = factory(require("vue"));
	else
		root["emfe"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_152__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(78);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(45);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(46);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  has: function has(value, valueList) {
    return valueList.filter(function (val) {
      return val === value;
    }).length > 0;
  },
  swap: function swap(arr, index1, index2) {
    var popData = arr.splice(index2, 1)[0];
    arr.splice(index1, 0, popData);
    return arr;
  },
  exchangeAttrValue: function exchangeAttrValue(obj1, obj2, attr) {
    var val = '';
    if (Array.isArray(obj1[attr])) {
      val = [];
      obj1[attr].forEach(function (obj1Val) {
        return val.push(obj1Val);
      });
    } else if ((0, _typeof3.default)(obj1[attr]) === 'object') {
      val = (0, _assign2.default)({}, obj1[attr]);
    } else {
      val = obj1[attr];
    }
    if (Array.isArray(obj2[attr])) {
      obj1[attr] = [];
      obj2[attr].forEach(function (obj2Val) {
        return obj1[attr].push(obj2Val);
      });
    } else if ((0, _typeof3.default)(obj2[attr]) === 'object') {
      obj1[attr] = (0, _assign2.default)({}, obj2[attr]);
    } else {
      obj1[attr] = obj2[attr];
    }
    obj2[attr] = val;
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  hOwnProperty: function hOwnProperty(item, attr) {
    return Object.prototype.hasOwnProperty.call(item, attr);
  },
  empty: function empty(obj) {
    return (0, _stringify2.default)(obj) === '{}';
  },
  copy: function copy(obj) {
    return JSON.parse((0, _stringify2.default)(obj));
  },
  type: function type(thing) {
    if (thing === null) return '[object Null]';

    return Object.prototype.toString.call(thing);
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SCREEN_MD: 1366,
  ISCROLL_CONFIG: {
    scrollbars: true,
    mouseWheel: true,
    click: true,
    preventDefault: true,
    fadeScrollbars: true
  },
  EVENT_TOKE: 'Authorization',
  COOKIE_PERFIX_TOKEN: 'Bearer',

  AJAX_SUCCESS: 10000,

  LOGIN_ERROR: 2011000,

  LOGIN_CODE_ERROR: 2012023,

  IMAGE_CODE_ERROR: 8003002,
  IMG_CODE_ERROR: 8003004
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(15)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(19)
  , IE8_DOM_DEFINE = __webpack_require__(39)
  , toPrimitive    = __webpack_require__(25)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43)
  , defined = __webpack_require__(26);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oneOf = oneOf;
exports.camelcaseToHyphen = camelcaseToHyphen;
exports.getScrollBarSize = getScrollBarSize;
exports.getStyle = getStyle;
exports.getElementLeft = getElementLeft;
exports.getElementTop = getElementTop;
exports.warnProp = warnProp;
exports.scrollTop = scrollTop;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
function oneOf(value, validList) {
  for (var i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

function camelcaseToHyphen(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

var cached = void 0;
function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

var MutationObserver = exports.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
function getStyle(element, styleName) {
  if (!element || !styleName || !element.style) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
}

function getElementLeft(element) {
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}

function getElementTop(element) {
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1);
}
exports.firstUpperCase = firstUpperCase;
function warnProp(component, prop, correctType, wrongType) {
  correctType = firstUpperCase(correctType);
  wrongType = firstUpperCase(wrongType);
  console.error('[iView warn]: Invalid prop: type check failed for prop ' + prop + '. Expected ' + correctType + ', got ' + wrongType + '. (found in component: ' + component + ')');
}

function typeOf(obj) {
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}

function deepCopy(data) {
  var t = typeOf(data);
  var o = void 0;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (var i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (var _i in data) {
      o[_i] = deepCopy(data[_i]);
    }
  }
  return o;
}

exports.deepCopy = deepCopy;
function scrollTop(el) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var to = arguments[2];
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }
  var difference = Math.abs(from - to);
  var step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) return;

    var d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(function () {
      return scroll(d, end, step);
    });
  }
  scroll(from, to, step);
}

function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  var parent = context.$parent;
  var name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}
exports.findComponentUpward = findComponentUpward;

function findComponentDownward(context, componentName) {
  var childrens = context.$children;
  var children = null;

  if (childrens.length) {
    childrens.forEach(function (child) {
      var name = child.$options.name;
      if (name === componentName) {
        children = child;
      }
    });

    for (var i = 0; i < childrens.length; i++) {
      var child = childrens[i];
      var name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}

exports.findComponentDownward = findComponentDownward;

function findComponentsDownward(context, componentName) {
  var components = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var childrens = context.$children;

  if (childrens.length) {
    childrens.forEach(function (child) {
      var name = child.$options.name;
      var childs = child.$children;

      if (name === componentName) components.push(child);
      if (childs.length) {
        var findChilds = findComponentsDownward(child, componentName, components);
        if (findChilds) components.concat(findChilds);
      }
    });
  }
  return components;
}

exports.findComponentsDownward = findComponentsDownward;

var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return ('' + el.className).indexOf(' ' + cls + ' ') > -1;
  }
}

function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' clsName';
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(7)
  , core      = __webpack_require__(6)
  , ctx       = __webpack_require__(57)
  , hide      = __webpack_require__(14)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(9)
  , createDesc = __webpack_require__(21);
module.exports = __webpack_require__(8) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(42)
  , enumBugKeys = __webpack_require__(30);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(29)('wks')
  , uid        = __webpack_require__(22)
  , Symbol     = __webpack_require__(7).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var timeObject = {
  zeroFill: function zeroFill(time) {
    return time < 10 ? '0' + time : time.toString();
  },

  handleConputedDate: function handleConputedDate(i, times, type, enabledDate, self, enable) {
    var newTimes = {
      num: timeObject.zeroFill(i),
      undo: false
    };
    if (times.length > 0) {
      times.every(function (time) {
        var newTime = timeObject.zeroFill(time);
        newTimes.undo = newTime === newTimes.num;
        return !newTimes.undo;
      });
    }
    if (enable) {
      var startDate = enabledDate.startDate[type];
      var endDate = enabledDate.endDate[type];
      var newYear = self.year - 0;
      var newMonth = self.month - 0;
      var startYear = enabledDate.startDate.year;
      var endYear = enabledDate.endDate.year;
      if (type === 'year') {
        newTimes.undo = newTimes.num >= startDate && newTimes.num <= endDate;
        newTimes.undo = !newTimes.undo;
      } else if (type === 'month') {
        if (newYear === startYear) {
          newTimes.undo = newTimes.num < startDate;
        } else if (newYear === endYear) {
          newTimes.undo = newTimes.num > endDate;
        } else {
          newTimes.undo = false;
        }
      } else {
        var startMonth = enabledDate.startDate.month;
        var endMonth = enabledDate.endDate.month;
        if (newYear === startYear && newMonth === startMonth) {
          newTimes.undo = newTimes.num <= startDate;
        } else if (newYear === endYear && newMonth === endMonth) {
          newTimes.undo = newTimes.num >= endDate;
        }
        newTimes.undo = !newTimes.undo;
      }
    }
    return newTimes;
  },
  handleConputedTime: function handleConputedTime(i, times) {
    var newTimes = {
      num: timeObject.zeroFill(i),
      undo: false
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
  loopChoice: function loopChoice(times, pertime) {
    var newUndo = true;
    if (pertime) {
      newUndo = pertime;
      var perIndex = times.findIndex(function (time) {
        return time.num === pertime;
      });
      if (perIndex > -1) {
        var iNowTime = times[perIndex];
        if (iNowTime.undo) {
          times.every(function (time) {
            newUndo = time.num;
            return time.undo;
          });
        }
      }
    } else {
      times.every(function (time) {
        newUndo = time.num;
        return time.undo;
      });
    }
    return newUndo;
  }
};

exports.default = timeObject;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDayCountOfMonth = exports.getDayCountOfMonth = function getDayCountOfMonth(year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  } else if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    }
    return 28;
  }
  return 31;
};

var clearHours = exports.clearHours = function clearHours() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var cloneDate = new Date(time);
  cloneDate.setHours(0, 0, 0, 0);
  return cloneDate.getTime();
};

var initTimeDate = exports.initTimeDate = function initTimeDate() {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};

var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(date) {
  var temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(29)('keys')
  , uid    = __webpack_require__(22);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f
  , has = __webpack_require__(10)
  , TAG = __webpack_require__(17)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(17);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(7)
  , core           = __webpack_require__(6)
  , LIBRARY        = __webpack_require__(34)
  , wksExt         = __webpack_require__(37)
  , defineProperty = __webpack_require__(9).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(15)(function(){
  return Object.defineProperty(__webpack_require__(40)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20)
  , document = __webpack_require__(7).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(9)
  , anObject = __webpack_require__(19)
  , getKeys  = __webpack_require__(16);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(10)
  , toIObject    = __webpack_require__(11)
  , arrayIndexOf = __webpack_require__(59)(false)
  , IE_PROTO     = __webpack_require__(28)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(44);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(84);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(95);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(34)
  , $export        = __webpack_require__(13)
  , redefine       = __webpack_require__(48)
  , hide           = __webpack_require__(14)
  , has            = __webpack_require__(10)
  , Iterators      = __webpack_require__(35)
  , $iterCreate    = __webpack_require__(88)
  , setToStringTag = __webpack_require__(36)
  , getPrototypeOf = __webpack_require__(90)
  , ITERATOR       = __webpack_require__(17)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(19)
  , dPs         = __webpack_require__(41)
  , enumBugKeys = __webpack_require__(30)
  , IE_PROTO    = __webpack_require__(28)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(40)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(89).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(42)
  , hiddenKeys = __webpack_require__(30).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE0IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMS4wMDIwMTc2IDcuMDEyNDI0NjMgNi43ODkzNDQyOCA3LjAxMjQyNDYzIDYuNzg5MzQ0MjggMTIuODAxNzAzMiAxLjAwMjAxNzYgMTIuODAxNzAzMiI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IuS4u+aOp+WItuWPsCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5LjAwMDAwMCwgLTM4Ny4wMDAwMDApIj4KICAgICAgICA8ZyBpZD0i5bem6YGT6IiqIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNTguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAwMDAwMCwgMzI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjE4MTgxOCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgLTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljc4OTM0NDI4LDkuOTA3MDYzOTMgQzUuNzg5MzQ0MjgsMTEuNTA1MDQ2MyA0LjQ5MjY0MDQ3LDEyLjgwMTcwMzIgMi44OTQ2NTgwNiwxMi44MDE3MDMyIEMxLjI5NjU4MTgyLDEyLjgwMTcwMzIgLTIuODE1MjQ5MjdlLTA1LDExLjUwNTA0NjMgLTIuODE1MjQ5MjdlLTA1LDkuOTA3MDYzOTMgQy0yLjgxNTI0OTI3ZS0wNSw4LjMwODk4NzY4IDEuMjk2NTgxODIsNy4wMTI0MjQ2MyAyLjg5NDY1ODA2LDcuMDEyNDI0NjMgTDUuNzg5MzQ0MjgsNy4wMTI0MjQ2MyBMNS43ODkzNDQyOCw5LjkwNzA2MzkzIFoiIGlkPSJGaWxsLTEiIGZpbGw9IiM1OUI4RTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuMTgxODE4MTgsOS45MDkwOTA5MSBDNi4xODE4MTgxOCwxMS41MTUwNTEzIDcuNDg0ODkwOTcsMTIuODE4MTgxOCA5LjA5MDg4NTUxLDEyLjgxODE4MTggQzEwLjY5Njg4MDEsMTIuODE4MTgxOCAxMiwxMS41MTUwNTEzIDEyLDkuOTA5MDkwOTEgQzEyLDguMzAzMDM2MiAxMC42OTY4ODAxLDcgOS4wOTA4ODU1MSw3IEw2LjE4MTgxODE4LDcgTDYuMTgxODE4MTgsOS45MDkwOTA5MSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjMzVERUM0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljc4OTM0NDI4LDMuNzIxMDI3NTcgQzUuNzg5MzQ0MjgsMi4xMjI5OTgyNCA0LjQ5MjY0MDQ3LDAuODI2Mzg4MjcgMi44OTQ2NTgwNiwwLjgyNjM4ODI3IEMxLjI5NjU4MTgyLDAuODI2Mzg4MjcgLTIuODE1MjQ5MjdlLTA1LDIuMTIyOTk4MjQgLTIuODE1MjQ5MjdlLTA1LDMuNzIxMDI3NTcgQy0yLjgxNTI0OTI3ZS0wNSw1LjMxOTA1Njg5IDEuMjk2NTgxODIsNi42MTU2NjY4NiAyLjg5NDY1ODA2LDYuNjE1NjY2ODYgTDUuNzg5MzQ0MjgsNi42MTU2NjY4NiBMNS43ODkzNDQyOCwzLjcyMTAyNzU3IFoiIGlkPSJGaWxsLTYiIGZpbGw9IiNGMzZBNUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuMTg2MDE3NiwzLjcyMTAyNzU3IEM2LjE4NjAxNzYsMi4xMjI5OTgyNCA3LjQ4MjYyNzU3LDAuODI2Mzg4MjcgOS4wODA2NTY4OSwwLjgyNjM4ODI3IEMxMC42Nzg2ODYyLDAuODI2Mzg4MjcgMTEuOTc1MzQzMSwyLjEyMjk5ODI0IDExLjk3NTM0MzEsMy43MjEwMjc1NyBDMTEuOTc1MzQzMSw1LjMxOTA1Njg5IDEwLjY3ODY4NjIsNi42MTU2NjY4NiA5LjA4MDY1Njg5LDYuNjE1NjY2ODYgTDYuMTg2MDE3Niw2LjYxNTY2Njg2IEw2LjE4NjAxNzYsMy43MjEwMjc1NyBaIiBpZD0iRmlsbC05IiBmaWxsPSIjRkVDRjM3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = __webpack_require__(151);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixKey = 'emfe_message_key_';

var messageInstance = void 0;
var delayTime = 5000;
var style = {};
var close = function close() {};

function getMessageInstance() {
  messageInstance = messageInstance || _message2.default.newInstance();
  return messageInstance;
}

function notice(params) {
  var instance = getMessageInstance();
  params.name = '' + prefixKey + name;
  params.delayTime = params.delayTime || delayTime;
  params.style = params.style || style;
  params.close = params.close || close;

  instance.notice(params);
}

exports.default = {
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
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperties = __webpack_require__(54);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _emCookie = __webpack_require__(65);

var _emCookie2 = _interopRequireDefault(_emCookie);

var _index = __webpack_require__(66);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(71);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(75);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(109);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(113);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(117);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(118);

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(122);

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__(126);

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__(130);

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__(134);

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__(138);

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__(142);

var _index26 = _interopRequireDefault(_index25);

var _index27 = __webpack_require__(146);

var _index28 = _interopRequireDefault(_index27);

var _index29 = __webpack_require__(158);

var _index30 = _interopRequireDefault(_index29);

var _index31 = __webpack_require__(163);

var _index32 = _interopRequireDefault(_index31);

var _index33 = __webpack_require__(168);

var _index34 = _interopRequireDefault(_index33);

var _index35 = __webpack_require__(172);

var _index36 = _interopRequireDefault(_index35);

var _index37 = __webpack_require__(179);

var _index38 = _interopRequireDefault(_index37);

var _index39 = __webpack_require__(183);

var _index40 = _interopRequireDefault(_index39);

var _index41 = __webpack_require__(187);

var _index42 = _interopRequireDefault(_index41);

var _index43 = __webpack_require__(191);

var _index44 = _interopRequireDefault(_index43);

var _index45 = __webpack_require__(195);

var _index46 = _interopRequireDefault(_index45);

var _index47 = __webpack_require__(199);

var _index48 = _interopRequireDefault(_index47);

var _index49 = __webpack_require__(203);

var _index50 = _interopRequireDefault(_index49);

var _index51 = __webpack_require__(207);

var _index52 = _interopRequireDefault(_index51);

var _index53 = __webpack_require__(211);

var _index54 = _interopRequireDefault(_index53);

var _index55 = __webpack_require__(215);

var _index56 = _interopRequireDefault(_index55);

var _index57 = __webpack_require__(219);

var _index58 = _interopRequireDefault(_index57);

var _index59 = __webpack_require__(223);

var _index60 = _interopRequireDefault(_index59);

var _index61 = __webpack_require__(227);

var _index62 = _interopRequireDefault(_index61);

var _index63 = __webpack_require__(231);

var _index64 = _interopRequireDefault(_index63);

var _index65 = __webpack_require__(235);

var _index66 = _interopRequireDefault(_index65);

var _index67 = __webpack_require__(239);

var _index68 = _interopRequireDefault(_index67);

var _index69 = __webpack_require__(243);

var _index70 = _interopRequireDefault(_index69);

var _index71 = __webpack_require__(247);

var _index72 = _interopRequireDefault(_index71);

var _index73 = __webpack_require__(251);

var _index74 = _interopRequireDefault(_index73);

var _index75 = __webpack_require__(255);

var _index76 = _interopRequireDefault(_index75);

var _index77 = __webpack_require__(259);

var _index78 = _interopRequireDefault(_index77);

var _index79 = __webpack_require__(266);

var _index80 = _interopRequireDefault(_index79);

var _index81 = __webpack_require__(273);

var _index82 = _interopRequireDefault(_index81);

var _index83 = __webpack_require__(280);

var _index84 = _interopRequireDefault(_index83);

var _index85 = __webpack_require__(287);

var _index86 = _interopRequireDefault(_index85);

var _index87 = __webpack_require__(291);

var _index88 = _interopRequireDefault(_index87);

var _index89 = __webpack_require__(295);

var _index90 = _interopRequireDefault(_index89);

var _index91 = __webpack_require__(299);

var _index92 = _interopRequireDefault(_index91);

var _index93 = __webpack_require__(303);

var _index94 = _interopRequireDefault(_index93);

var _index95 = __webpack_require__(307);

var _index96 = _interopRequireDefault(_index95);

var _index97 = __webpack_require__(311);

var _index98 = _interopRequireDefault(_index97);

var _index99 = __webpack_require__(315);

var _index100 = _interopRequireDefault(_index99);

var _index101 = __webpack_require__(319);

var _index102 = _interopRequireDefault(_index101);

var _index103 = __webpack_require__(329);

var _index104 = _interopRequireDefault(_index103);

var _index105 = __webpack_require__(333);

var _index106 = _interopRequireDefault(_index105);

var _index107 = __webpack_require__(337);

var _index108 = _interopRequireDefault(_index107);

var _index109 = __webpack_require__(344);

var _index110 = _interopRequireDefault(_index109);

var _index111 = __webpack_require__(348);

var _index112 = _interopRequireDefault(_index111);

var _index113 = __webpack_require__(352);

var _index114 = _interopRequireDefault(_index113);

var _index115 = __webpack_require__(356);

var _index116 = _interopRequireDefault(_index115);

var _index117 = __webpack_require__(360);

var _index118 = _interopRequireDefault(_index117);

var _index119 = __webpack_require__(364);

var _index120 = _interopRequireDefault(_index119);

var _index121 = __webpack_require__(368);

var _index122 = _interopRequireDefault(_index121);

var _index123 = __webpack_require__(372);

var _index124 = _interopRequireDefault(_index123);

var _index125 = __webpack_require__(376);

var _index126 = _interopRequireDefault(_index125);

var _index127 = __webpack_require__(385);

var _index128 = _interopRequireDefault(_index127);

var _index129 = __webpack_require__(390);

var _index130 = _interopRequireDefault(_index129);

var _index131 = __webpack_require__(398);

var _index132 = _interopRequireDefault(_index131);

var _index133 = __webpack_require__(402);

var _index134 = _interopRequireDefault(_index133);

var _index135 = __webpack_require__(408);

var _index136 = _interopRequireDefault(_index135);

var _index137 = __webpack_require__(412);

var _index138 = _interopRequireDefault(_index137);

var _index139 = __webpack_require__(418);

var _index140 = _interopRequireDefault(_index139);

var _index141 = __webpack_require__(52);

var _index142 = _interopRequireDefault(_index141);

var _index143 = __webpack_require__(422);

var _index144 = _interopRequireDefault(_index143);

var _emfeDocumentclick = __webpack_require__(423);

var _emfeDocumentclick2 = _interopRequireDefault(_emfeDocumentclick);

var _emfeDocumentfocus = __webpack_require__(424);

var _emfeDocumentfocus2 = _interopRequireDefault(_emfeDocumentfocus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emfeCpt = {
  EmfeCol: _index6.default.EmfeCol,
  EmfeRow: _index6.default.EmfeRow,
  EmfeBar: _index2.default,
  EmfeBarC: _index4.default,
  EmfeIcon: _index8.default,
  EmfeTooltip: _index10.default,
  EmfeTransition: _index12.default,
  EmfeModal: _index92.default,
  EmfeModalC: _index94.default,
  EmfeMenu: _index14.default,
  EmfeHeader: _index16.default,
  EmfeHeaderC: _index18.default,
  EmfeHeaderCNew: _index20.default,
  EmfeFooter: _index22.default,
  EmfeFooterC: _index24.default,
  EmfeCopy: _index26.default,
  EmfeUpload: _index28.default,
  EmfeDrag: _index30.default,
  EmfeColor: _index32.default,
  EmfeInput: _index34.default,
  EmfeInputmore: _index36.default.EmfeInputmore,
  EmfeInputmoreGroup: _index36.default.EmfeInputmoreGroup,
  EmfeNumber: _index56.default,
  EmfeTel: _index38.default,
  EmfeTelC: _index40.default,
  EmfeSmscode: _index42.default,
  EmfeSmscodeC: _index44.default,
  EmfeImgcode: _index46.default,
  EmfeImgcodeC: _index48.default,
  EmfeSteps: _index50.default,
  EmfeStepsC: _index52.default,
  EmfeStepsB: _index54.default,
  EmfeButton: _index82.default.EmfeButton,
  EmfeButtonGroup: _index82.default.EmfeButtonGroup,
  EmfeButtonC: _index84.default.EmfeButtonC,
  EmfeButtonGroupC: _index84.default.EmfeButtonGroupC,
  EmfeSwitch: _index72.default,
  EmfeTitle: _index74.default,
  EmfeTitleC: _index76.default,
  EmfeRadio: _index78.default.EmfeRadio,
  EmfeRadioGroup: _index78.default.EmfeRadioGroup,
  EmfeRadioC: _index80.default.EmfeRadioC,
  EmfeRadioGroupC: _index80.default.EmfeRadioGroupC,
  EmfeTable: _index102.default.EmfeTable,
  EmfeTableHead: _index102.default.EmfeTableHead,
  EmfeTableBody: _index102.default.EmfeTableBody,
  EmfeDate: _index58.default,
  EmfeDateM: _index60.default,
  EmfeTime: _index62.default,
  EmfeTimeM: _index64.default,
  EmfeDatetime: _index66.default,
  EmfeDatetimeM: _index68.default,
  EmfePagination: _index86.default,
  EmfePaginationC: _index88.default,
  EmfePage: _index86.default,
  EmfePageC: _index88.default,
  EmfeSelect: _index90.default,
  EmfeCheckout: _index96.default,
  EmfeCheckoutC: _index98.default,
  EmfeDrop: _index100.default,
  EmfeLink: _index70.default,
  EmfeTextarea: _index104.default,
  EmfeDatapanel: _index106.default,
  EmfeTag: _index108.default.EmfeTag,
  EmfeTagParent: _index108.default.EmfeTagParent,
  EmfePanel: _index110.default,
  EmfePanelC: _index112.default,
  EmfeSlide: _index114.default,
  EmfeCrumb: _index118.default,
  EmfeCrumbC: _index120.default,
  EmfeHottip: _index116.default,
  EmfeEdit: _index122.default,
  EmfeOpations: _index124.default,
  EmfeCountdown: _index126.default,
  EmfeLogin: _index128.default,
  EmfeLoginC: _index130.default,
  EmfeTitleline: _index132.default,
  EmfeIscroll: _index134.default,
  EmfeChangecount: _index136.default,
  EmfeSwiper: _index138.default,
  EmfeHeaderActive: _index140.default
};

var emfeDir = {
  emfeDocumentclick: _emfeDocumentclick2.default,
  emfeDocumentfocus: _emfeDocumentfocus2.default
};

var install = function install(Vue) {
  if (install.installed) return;

  (0, _keys2.default)(emfeCpt).forEach(function (key) {
    Vue.component(key, emfeCpt[key]);
  });

  (0, _keys2.default)(emfeDir).forEach(function (key) {
    Vue.directive(key, emfeDir[key]);
  });

  if (!Vue.prototype.$EmfeMessage) {
    (0, _defineProperties2.default)(Vue.prototype, {
      $EmfeMessage: {
        get: function get() {
          return _index142.default;
        }
      }
    });
  }
  if (!Vue.prototype.$EmfeFormTest) {
    (0, _defineProperties2.default)(Vue.prototype, {
      $EmfeFormTest: {
        get: function get() {
          return _index144.default;
        }
      }
    });
  }
  Vue.use(_emCookie2.default);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.default = {
  version: '1.0.0',
  install: install,
  EmfeMessage: _index142.default,
  EmfeFormTest: _index144.default
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperties(T, D){
  return $Object.defineProperties(T, D);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperties: __webpack_require__(41)});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(58);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11)
  , toLength  = __webpack_require__(60)
  , toIndex   = __webpack_require__(61);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
module.exports = __webpack_require__(6).Object.keys;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(31)
  , $keys    = __webpack_require__(16);

__webpack_require__(64)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(13)
  , core    = __webpack_require__(6)
  , fails   = __webpack_require__(15);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var VueCookies = {
  // install of Vue
  install: function(Vue) {
    if (!Vue.prototype.$cookie) {
      Object.defineProperties(Vue.prototype, {
        $cookie: {
          get: function() {
            return VueCookies;
          },
        },
      });
    }
  },
  get: function(key) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  set: function(key, value, expireTimes, path, domain, secure) {
    if (!key) {
      throw new Error("cookie name is not find in first argument")
    }else if(/^(?:expires|max\-age|path|domain|secure)$/i.test(key)){
      throw new Error("cookie key name illegality ,Cannot be set to ['expires','max-age','path','domain','secure']\t","current key name: "+key);
    }
    var _expires = "; max-age="; // default expire time for 1 day
    if (expireTimes) {
      switch (expireTimes.constructor) {
        case Number:
          if(expireTimes === Infinity || expireTimes === -1) _expires = "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
          else _expires = "; max-age=" + expireTimes;
          break;
        case String:
          if (/^(?:\d{1,}(y|m|d|h|min|s))$/i.test(expireTimes)) {
            // get capture number group
            var _expireTime = expireTimes.replace(/^(\d{1,})(?:y|m|d|h|min|s)$/i, "$1");
            // get capture type group , to lower case
            switch (expireTimes.replace(/^(?:\d{1,})(y|m|d|h|min|s)$/i, "$1").toLowerCase()) {
              // Frequency sorting
              case 'm':  _expires = "; max-age=" + +_expireTime * 259200; break; // 60 * 60 * 24 * 30
              case 'd':  _expires = "; max-age=" + +_expireTime * 86400; break; // 60 * 60 * 24
              case 'h': _expires = "; max-age=" + +_expireTime * 3600; break; // 60 * 60
              case 'min':  _expires = "; max-age=" + +_expireTime * 60; break; // 60
              case 's': _expires = "; max-age=" + _expireTime; break;
              case 'y': _expires = "; max-age=" + +_expireTime * 31104000; break; // 60 * 60 * 24 * 30 * 12
              default: new Error("unknown exception of 'set operation'");
            }
          } else {
            _expires = "; expires=" + expireTimes;
          }
          break;
        case Date:
          _expires = "; expires=" + expireTimes.toUTCString();
          break;
      }
    }
      document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + _expires + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "; path=/") + (secure ? "; secure" : "");
    return this;
  },
  remove: function(key, path, domain) {
    if (!key || !this.isKey(key)) {
      return false;
    }
    document.cookie = encodeURIComponent(key) + "=; expires="+ new Date() +"" + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "; path=/");
    return true;
  },
  isKey: function(key) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function() {
    var _keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var _index = 0; _index < _keys.length; _index++) {
      _keys[_index] = decodeURIComponent(_keys[_index]);
    }
    return _keys;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (VueCookies);

if(typeof window!=='undefined' && !window.$cookie){
  window.$cookie = VueCookies;
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeBar = __webpack_require__(67);

var _EmfeBar2 = _interopRequireDefault(_EmfeBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeBar2.default.install = function (Vue) {
  Vue.component(_EmfeBar2.default.name, _EmfeBar2.default);
};

exports.default = _EmfeBar2.default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(70),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var childrenLast = -1;exports.default = {
  name: 'EmfeBar',
  data: function data() {
    return {
      Contant: _contant2.default,
      childrenIndex: -1,
      isDisabled: this.disabled,
      newDatas: [],
      activeUrl: '',
      minorStatus: [] };
  },

  props: {
    datas: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    fullpath: {
      type: String,
      required: true
    },
    className: String,
    disabled: Boolean,
    disableRex: String,
    accordion: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    barName: function barName() {
      return this.className ? this.className + '-bar' : '';
    }
  },
  mounted: function mounted() {
    this.handle(this.datas);
  },

  methods: {
    handle: function handle(val) {
      var _this = this;

      this.newDatas = val;

      this.minorStatus = [];
      val.forEach(function (data) {
        if (data.children) {
          data.children.forEach(function () {
            _this.minorStatus.push(false);
          });
        }
      });
    },
    testUrl: function testUrl() {
      var _this2 = this;

      var _$route = this.$route,
          fullPath = _$route.fullPath,
          name = _$route.name;

      var newFullPath = this.fullpath ? this.fullpath : fullPath;
      this.newDatas.forEach(function (data, dataNum) {
        if (_o2.default.hOwnProperty(data, 'children')) {
          data.children.forEach(function (dataChild) {
            var inChildFullPath = _o2.default.hOwnProperty(dataChild, 'routers') && _o2.default.hOwnProperty(dataChild.routers, 'path') && newFullPath.indexOf(dataChild.routers.path) > -1;
            if (inChildFullPath || _o2.default.hOwnProperty(dataChild, 'routers') && _o2.default.hOwnProperty(dataChild.routers, 'name') && name === dataChild.routers.name) {
              _this2.toogleChild(dataNum);
            }
          });
        }
      });
      this.activeUrl = window.location.href;
    },
    toogleChild: function toogleChild(itemIndex) {
      if (!this.isDisabled) {
        this.canTestUrl = false;
        var eqLast = itemIndex === childrenLast;
        this.childrenIndex = eqLast ? -1 : itemIndex;
        childrenLast = eqLast ? -1 : itemIndex;
        this.minorStatus.splice(itemIndex, 1, !this.minorStatus[itemIndex]);
      }
    },
    tochildren: function tochildren(item) {
      if (_o2.default.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }
      if (_o2.default.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }
    },
    headerClick: function headerClick(event) {
      this.$emit('click', event);
    }
  },
  watch: {
    fullpath: function fullpath(val, oldVal) {
      if (val !== oldVal) {
        this.testUrl();
      }
    },
    datas: function datas(val, oldVal) {
      if (val !== oldVal) {
        this.handle(val);
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
    }
  }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(6)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-bar",
      class: _vm.barName
    }, [_c('h3', {
      staticClass: "emfe-bar-header",
      on: {
        "click": function click($event) {
          _vm.headerClick($event);
        }
      }
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
      staticClass: "emfe-bar-iscroll"
    }, [_c('ul', {
      staticClass: "emfe-bar-list"
    }, [_vm._l(_vm.newDatas, function (childrenData, childrenDataIndex) {
      return [!childrenData.children ? _c('li', {
        staticClass: "emfe-bar-item"
      }, [!childrenData.url ? _c('router-link', {
        staticClass: "emfe-bar-link",
        class: {
          ' emfe-bar-link-disabled': _vm.isDisabled
        },
        attrs: {
          "to": childrenData.routers
        }
      }, [_vm._v(_vm._s(childrenData.title))]) : _c('a', {
        staticClass: "emfe-bar-link",
        attrs: {
          "href": childrenData.url,
          "target": "_blank"
        }
      }, [_vm._v(_vm._s(childrenData.title))])], 1) : _c('li', {
        staticClass: "emfe-bar-item",
        class: {
          'emfe-bar-item-on': _vm.accordion ? _vm.childrenIndex == childrenDataIndex : _vm.minorStatus[childrenDataIndex]
        }
      }, [_c('span', {
        staticClass: "emfe-bar-btn",
        class: {
          ' emfe-bar-btn-disabled': _vm.isDisabled
        },
        attrs: {
          "href": "javascript:;"
        },
        on: {
          "click": function click($event) {
            _vm.toogleChild(childrenDataIndex);
          }
        }
      }, [_vm._v(_vm._s(childrenData.title))]), _vm._v(" "), _c('i', {
        staticClass: "emfe-bar-arrow",
        on: {
          "click": function click($event) {
            _vm.toogleChild(childrenDataIndex);
          }
        }
      }), _vm._v(" "), _c('emfe-transition', {
        attrs: {
          "name": "gradual"
        }
      }, [_c('ul', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.accordion ? _vm.childrenIndex == childrenDataIndex : _vm.minorStatus[childrenDataIndex],
          expression: "accordion ? childrenIndex == childrenDataIndex : minorStatus[childrenDataIndex]"
        }],
        staticClass: "emfe-bar-childlist"
      }, _vm._l(childrenData.children, function (child) {
        return _c('li', {
          staticClass: "emfe-bar-childitem"
        }, [!child.url ? _c('router-link', {
          staticClass: "emfe-bar-childlink",
          class: {
            ' emfe-bar-childlink-disabled': _vm.isDisabled
          },
          attrs: {
            "to": child.routers
          }
        }, [_vm._v(_vm._s(child.title))]) : _c('a', {
          staticClass: "emfe-bar-childlink",
          class: {
            'router-link-exact-active router-link-active': _vm.activeUrl === child.url
          },
          attrs: {
            "href": child.url,
            "target": "_blank"
          }
        }, [_vm._v(_vm._s(child.title))])], 1);
      }))])], 1)];
    })], 2)])]);
  }, staticRenderFns: [] };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeBarC = __webpack_require__(72);

var _EmfeBarC2 = _interopRequireDefault(_EmfeBarC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeBarC2.default.install = function (Vue) {
  Vue.component(_EmfeBarC2.default.name, _EmfeBarC2.default);
};

exports.default = _EmfeBarC2.default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(74),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var childrenLast = -1;exports.default = {
  name: 'EmfeBarC',
  data: function data() {
    return {
      childrenIndex: -1,
      isDisabled: this.disabled,
      barStatus: [],
      newDatas: [],
      childrenIconIndex: -1
    };
  },

  props: {
    datas: {
      type: Array,
      required: true
    },
    fullpath: {
      type: String,
      required: true
    },
    className: String,
    disabled: Boolean,
    disableRex: String
  },
  computed: {
    barName: function barName() {
      return this.className ? this.className + '-bar' : '';
    }
  },
  mounted: function mounted() {
    this.handle(this.datas);
    this.testUrl();
  },

  methods: {
    handle: function handle(val) {
      var _this = this;

      this.newDatas = val;
      this.newDatas.forEach(function () {
        _this.barStatus.push(true);
      });
    },
    testUrl: function testUrl() {
      var _this2 = this;

      var _$route = this.$route,
          fullPath = _$route.fullPath,
          name = _$route.name;


      var newFullPath = this.fullpath ? this.fullpath : fullPath;

      this.newDatas.forEach(function (data, dataNum) {
        if (_o2.default.hOwnProperty(data, 'children')) {
          data.children.forEach(function (dataChild) {
            var inChildFullPath = _o2.default.hOwnProperty(dataChild, 'routers') && _o2.default.hOwnProperty(dataChild.routers, 'path') && newFullPath.indexOf(dataChild.routers.path) > -1;
            if (inChildFullPath || name === dataChild.routers.name) {
              _this2.childrenIconIndex = dataNum;
              _this2.toogleChild(dataNum);
            }
          });
        }
      });
    },
    toogleChild: function toogleChild(itemIndex) {
      if (!this.isDisabled) {
        this.barStatus.splice(itemIndex, 1, !this.barStatus[itemIndex]);
        var eqLast = itemIndex === childrenLast;
        this.childrenIndex = eqLast ? -1 : itemIndex;
        childrenLast = eqLast ? -1 : itemIndex;
      }
    },
    tochildren: function tochildren(item) {
      if (_o2.default.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }

      if (_o2.default.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }
    }
  },
  watch: {
    fullpath: function fullpath(val, oldVal) {
      if (val !== oldVal) {
        this.testUrl();
      }
    },
    datas: function datas(val, oldVal) {
      if (val !== oldVal) {
        this.handle(val);
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
    }
  }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-bar-c",
      class: _vm.barName
    }, [_c('ul', {
      staticClass: "emfe-bar-c-list"
    }, [_vm._l(_vm.newDatas, function (childrenData, childrenDataIndex) {
      return [!childrenData.children ? _c('li', {
        staticClass: "emfe-bar-c-item"
      }, [_c('div', {
        staticClass: "emfe-bar-c-parentbox"
      }, [_c('emfe-icon', {
        class: {
          'emfe-bar-c-icon-light': childrenDataIndex == _vm.childrenIconIndex
        },
        attrs: {
          "type": childrenData.icon,
          "className": "emfe-bar-c"
        }
      }), _vm._v(" "), _c('router-link', {
        staticClass: "emfe-bar-c-link",
        class: {
          ' emfe-bar-c-link-disabled': _vm.isDisabled
        },
        attrs: {
          "to": childrenData.routers
        }
      }, [_vm._v(_vm._s(childrenData.title))])], 1)]) : _c('li', {
        staticClass: "emfe-bar-c-item",
        class: {
          'emfe-bar-c-item-on': _vm.childrenIndex == childrenDataIndex
        }
      }, [_c('div', {
        staticClass: "emfe-bar-c-parentbox"
      }, [_c('emfe-icon', {
        class: {
          'emfe-bar-c-icon-light': childrenDataIndex == _vm.childrenIconIndex
        },
        attrs: {
          "type": childrenData.icon,
          "className": "emfe-bar-c"
        }
      }), _vm._v(" "), _c('span', {
        staticClass: "emfe-bar-c-btn",
        class: {
          ' emfe-bar-c-btn-disabled': _vm.isDisabled
        },
        attrs: {
          "href": "javascript:;"
        },
        on: {
          "click": function click($event) {
            _vm.toogleChild(childrenDataIndex);
          }
        }
      }, [_vm._v(_vm._s(childrenData.title))]), _vm._v(" "), _c('i', {
        staticClass: "emfe-bar-c-arrow"
      })], 1), _vm._v(" "), _c('emfe-transition', {
        attrs: {
          "name": "gradual"
        }
      }, [_c('ul', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.childrenIndex == childrenDataIndex,
          expression: "childrenIndex == childrenDataIndex"
        }],
        staticClass: "emfe-bar-c-childlist"
      }, _vm._l(childrenData.children, function (child) {
        return _c('li', {
          staticClass: "emfe-bar-c-childitem"
        }, [child.routers.url ? _c('a', {
          staticClass: "emfe-bar-c-childlink",
          class: {
            ' emfe-bar-c-childlink-disabled': _vm.isDisabled
          },
          attrs: {
            "href": child.routers.url
          }
        }, [_vm._v(_vm._s(child.title))]) : _c('router-link', {
          staticClass: "emfe-bar-c-childlink",
          class: {
            ' emfe-bar-c-childlink-disabled': _vm.isDisabled
          },
          attrs: {
            "to": child.routers
          }
        }, [_vm._v(_vm._s(child.title))])], 1);
      }))])], 1)];
    })], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeRow = __webpack_require__(76);

var _EmfeRow2 = _interopRequireDefault(_EmfeRow);

var _EmfeCol = __webpack_require__(108);

var _EmfeCol2 = _interopRequireDefault(_EmfeCol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeRow2.default.install = function (Vue) {
  Vue.component(_EmfeRow2.default.name, _EmfeRow2.default);
};

_EmfeCol2.default.install = function (Vue) {
  Vue.component(_EmfeCol2.default.name, _EmfeCol2.default);
};

exports.default = {
  EmfeRow: _EmfeRow2.default,
  EmfeCol: _EmfeCol2.default
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(107),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'emfe-row';

exports.default = {
  name: 'EmfeRow',
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    },
    basin: {
      type: [Number, String],
      default: 0
    },
    type: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['flex']);
      }
    },
    align: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['top', 'middle', 'bottom']);
      }
    },
    justify: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['start', 'end', 'center', 'space-around', 'space-between']);
      }
    },
    className: String
  },
  computed: {
    classList: function classList() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, '' + prefixCls, !this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type, !!this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.align, !!this.type && !!this.align), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.justify, !!this.type && !!this.justify), (0, _defineProperty3.default)(_ref, this.className + '-row', !!this.className), _ref)];
    },
    rowStyle: function rowStyle() {
      if (this.gutter > 48) {
        this.gutter = 48;
      }
      var gapGutter = this.gutter / 2;
      var gapBasin = this.basin / 2;
      var gutter = gapGutter > 0 ? 'margin-left: -' + gapGutter + 'px;margin-right: -' + gapGutter + 'px;' : '';
      var basin = gapBasin > 0 ? 'margin-top: -' + gapBasin + 'px;margin-bottom: -' + gapBasin + 'px;' : '';
      return '' + gutter + basin;
    }
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperty: __webpack_require__(9).f});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
module.exports = __webpack_require__(6).Object.assign;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(83)});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(16)
  , gOPS     = __webpack_require__(33)
  , pIE      = __webpack_require__(23)
  , toObject = __webpack_require__(31)
  , IObject  = __webpack_require__(43)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(15)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
__webpack_require__(91);
module.exports = __webpack_require__(37).f('iterator');

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(87)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(47)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27)
  , defined   = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(49)
  , descriptor     = __webpack_require__(21)
  , setToStringTag = __webpack_require__(36)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(17)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7).document && document.documentElement;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(10)
  , toObject    = __webpack_require__(31)
  , IE_PROTO    = __webpack_require__(28)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);
var global        = __webpack_require__(7)
  , hide          = __webpack_require__(14)
  , Iterators     = __webpack_require__(35)
  , TO_STRING_TAG = __webpack_require__(17)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(93)
  , step             = __webpack_require__(94)
  , Iterators        = __webpack_require__(35)
  , toIObject        = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(47)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
__webpack_require__(104);
__webpack_require__(105);
__webpack_require__(106);
module.exports = __webpack_require__(6).Symbol;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(7)
  , has            = __webpack_require__(10)
  , DESCRIPTORS    = __webpack_require__(8)
  , $export        = __webpack_require__(13)
  , redefine       = __webpack_require__(48)
  , META           = __webpack_require__(98).KEY
  , $fails         = __webpack_require__(15)
  , shared         = __webpack_require__(29)
  , setToStringTag = __webpack_require__(36)
  , uid            = __webpack_require__(22)
  , wks            = __webpack_require__(17)
  , wksExt         = __webpack_require__(37)
  , wksDefine      = __webpack_require__(38)
  , keyOf          = __webpack_require__(99)
  , enumKeys       = __webpack_require__(100)
  , isArray        = __webpack_require__(101)
  , anObject       = __webpack_require__(19)
  , toIObject      = __webpack_require__(11)
  , toPrimitive    = __webpack_require__(25)
  , createDesc     = __webpack_require__(21)
  , _create        = __webpack_require__(49)
  , gOPNExt        = __webpack_require__(102)
  , $GOPD          = __webpack_require__(103)
  , $DP            = __webpack_require__(9)
  , $keys          = __webpack_require__(16)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(23).f  = $propertyIsEnumerable;
  __webpack_require__(33).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(34)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(22)('meta')
  , isObject = __webpack_require__(20)
  , has      = __webpack_require__(10)
  , setDesc  = __webpack_require__(9).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(15)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(16)
  , toIObject = __webpack_require__(11);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16)
  , gOPS    = __webpack_require__(33)
  , pIE     = __webpack_require__(23);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(44);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11)
  , gOPN      = __webpack_require__(50).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(23)
  , createDesc     = __webpack_require__(21)
  , toIObject      = __webpack_require__(11)
  , toPrimitive    = __webpack_require__(25)
  , has            = __webpack_require__(10)
  , IE8_DOM_DEFINE = __webpack_require__(39)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 104 */
/***/ (function(module, exports) {



/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('asyncIterator');

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('observable');

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      class: _vm.classList,
      style: _vm.rowStyle
    }, [_vm._t("default")], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(46);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'emfe-col';

exports.default = {
  name: 'EmfeCol',
  props: {
    span: [Number, String],
    tag: {
      type: String,
      default: 'div'
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
    xl: [Number, Object]
  },

  computed: {
    gutter: function gutter() {
      var parent = this.$parent;
      var _componentTag = parent.$options._componentTag;


      while (parent && _componentTag === 'row') {
        parent = parent.$parent;
      }

      return parent ? parent.gutter : 0;
    },
    basin: function basin() {
      var parent = this.$parent;
      var _componentTag = parent.$options._componentTag;


      while (parent && _componentTag === 'row') {
        parent = parent.$parent;
      }

      return parent ? parent.basin : 0;
    }
  },
  render: function render(h) {
    var _this = this;

    var classList = [];
    var style = {};

    if (this.gutter) {
      if (this.gutter > 48) {
        this.gutter = 48;
      }
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    if (this.basin) {
      if (this.basin > 48) {
        this.basin = 48;
      }
      style.paddingTop = this.basin / 2 + 'px';
      style.paddingBottom = style.paddingTop;
    }

    ['span', 'offset', 'pull', 'push', 'order'].forEach(function (prop) {
      if (_this[prop]) {
        var className1 = prefixCls + '-' + prop + '-' + _this[prop];
        var className2 = prefixCls + '-' + _this[prop];
        var className = prop !== 'span' ? className1 : className2;
        classList.push(className);
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
      var loopPrefix = prefixCls + '-' + size + '-';
      if (typeof _this[size] === 'number') {
        classList.push('' + loopPrefix + _this[size]);
      } else if ((0, _typeof3.default)(_this[size]) === 'object') {
        var props = _this[size];
        (0, _keys2.default)(props).forEach(function (prop) {
          var className1 = '' + loopPrefix + prop + '-' + props[prop];
          var className2 = '' + loopPrefix + props[prop];
          var className = prop !== 'span' ? className1 : className2;
          classList.push(className);
        });
      }
    });

    if (this.className) {
      classList.push(this.className + '-col');
    }

    return h(this.tag, {
      class: [prefixCls, classList],
      style: style
    }, this.$slots.default);
  }
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeIcon = __webpack_require__(110);

var _EmfeIcon2 = _interopRequireDefault(_EmfeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeIcon2.default.install = function (Vue) {
  Vue.component(_EmfeIcon2.default.name, _EmfeIcon2.default);
};

exports.default = _EmfeIcon2.default;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(112),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var prefixCls = 'emfe-icon';

exports.default = {
  name: 'EmfeIcon',
  props: {
    className: {
      type: String,
      default: ''
    },
    type: String,
    click: {
      type: Function,
      default: function _default() {}
    },
    stop: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    name: function name() {
      var icon = prefixCls + '-' + this.type;
      var newName = this.className ? ' ' + this.className + '-icon' : '';
      return '' + icon + newName;
    }
  },
  methods: {
    clickFn: function clickFn(event) {
      this.$emit('icon-click');
      this.$emit('click');
      this.click();
      if (this.stop && event) {
        event.stopPropagation();
      }
    }
  }
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('i', {
      class: _vm.name,
      on: {
        "click": function click($event) {
          _vm.clickFn($event);
        }
      }
    });
  }, staticRenderFns: [] };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTooltip = __webpack_require__(114);

var _EmfeTooltip2 = _interopRequireDefault(_EmfeTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTooltip2.default.install = function (Vue) {
  Vue.component(_EmfeTooltip2.default.name, _EmfeTooltip2.default);
};

exports.default = _EmfeTooltip2.default;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(116),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _assist = __webpack_require__(12);

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enterTimer = null;
var leaveTimer = null;

var checkPosition = function checkPosition(self) {
  var parentNodeHasPosition = false;
  var parentNodePosition = (0, _assist.getStyle)(self.$parent.$el, 'position');
  self.parentPositionHasFixed = parentNodePosition === 'fixed';
  self.parentPositionHasRelative = parentNodePosition === 'relative';
  self.positionStyle = self.parentPositionHasFixed ? 'fixed' : 'absolute';
  var parent = self.$el;

  while (parent && parent.nodeName.toLocaleLowerCase() !== 'body') {
    parent = parent.parentNode;
    parentNodePosition = (0, _assist.getStyle)(parent, 'position');

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

  self.positionStyle = self.parentPositionHasFixed ? 'fixed' : 'absolute';
};

exports.default = {
  name: 'EmfeTooltip',
  props: {
    className: {
      type: String,
      default: ''
    },
    theme: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['dark', 'light']);
      },

      default: 'dark'
    },
    arrowStatus: {
      type: Boolean,
      default: true
    },
    offset: {
      type: [Number, String],
      default: 8
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    delay: {
      type: [Number, String],
      default: 100
    },
    placement: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
      },

      default: 'top'
    },
    disable: {
      type: [Boolean, String],
      default: false
    },
    types: {
      type: String,
      default: 'hover'
    }
  },
  data: function data() {
    return {
      popperStyle: '',
      popperStatus: false,
      setStyled: true,
      relativeStyle: ''
    };
  },

  computed: {
    tooltipName: function tooltipName() {
      return this.className ? this.className + '-tooltip' : '';
    },
    slotName: function slotName() {
      return this.className ? this.className + '-slot' : '';
    },
    popperName: function popperName() {
      return [(0, _defineProperty3.default)({}, this.className + '-popper', !!this.className), 'emfe-tooltip-' + this.theme + '-popper'];
    },
    arrowPlacement: function arrowPlacement() {
      return ['emfe-tooltip-' + this.theme + '-arrow', 'emfe-tooltip-arrow-' + this.placement, 'emfe-tooltip-' + this.theme + '-arrow-' + this.placement, (0, _defineProperty3.default)({}, this.className + '-arrow', !!this.className)];
    }
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
      if (!this.setStyled) {
        return;
      }

      if (_o2.default.empty(this.styles)) {
        this.setStyled = false;

        var _$refs = this.$refs,
            reference = _$refs.reference,
            popper = _$refs.popper;
        var _document$body = document.body,
            scrollLeft = _document$body.scrollLeft,
            scrollTop = _document$body.scrollTop;
        var _window = window,
            innerWidth = _window.innerWidth,
            innerHeight = _window.innerHeight;

        var popperPos = popper.getBoundingClientRect();
        var referencePos = reference.getBoundingClientRect();
        var left = referencePos.left,
            right = referencePos.right,
            top = referencePos.top,
            bottom = referencePos.bottom,
            width = referencePos.width,
            height = referencePos.height;


        var popperLeft = 0;
        var popperTop = 0;

        checkPosition(this);

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
            popperTop = (height - popperPos.height) / 2 + top;
          }
        }

        if (/bottom|top/g.test(this.placement)) {
          if (this.placement.indexOf('start') > -1) {
            popperLeft = left;
          } else if (this.placement.indexOf('end') > -1) {
            popperLeft = right - popperPos.width;
          } else {
            popperLeft = (width - popperPos.width) / 2 + left;
          }
        }

        if (!this.parentPositionHasFixed) {
          popperTop += scrollTop;
          popperLeft += scrollLeft;
        }

        if (this.parentPositionHasRelative && !this.parentPositionHasFixed) {
          var elTop = (0, _assist.getElementTop)(this.$el);
          var elParentTop = (0, _assist.getElementTop)(this.$el.parentNode);
          var elLeft = (0, _assist.getElementLeft)(this.$el);
          var elParentLeft = (0, _assist.getElementLeft)(this.$el.parentNode);

          popperTop = elTop - elParentTop;
          popperLeft = elLeft - elParentLeft;

          var popperRight = popperLeft + width;
          var popperBottom = popperTop + height;

          if (this.placement.indexOf('left') > -1) {
            popperLeft -= popperPos.width + this.offsetDefault;
          } else if (this.placement.indexOf('right') > -1) {
            popperLeft = popperRight + this.offsetDefault;
          } else if (this.placement.indexOf('bottom') > -1) {
            popperTop = popperBottom + this.offsetDefault;
          } else {
            popperTop -= popperPos.height + this.offsetDefault;
          }

          if (/left-end|right-end/g.test(this.placement)) {
            popperTop = popperBottom - popperPos.height;
          } else if (/(left|right)$/g.test(this.placement)) {
            popperTop += (height - popperPos.height) / 2;
          }

          if (/bottom-end|top-end/g.test(this.placement)) {
            popperLeft += width - popperPos.width;
          } else if (/(bottom|top)$/g.test(this.placement)) {
            popperLeft += (width - popperPos.width) / 2;
          }
        } else {
          if (popperLeft + popperPos.width > innerWidth) {
            popperLeft = left - popperPos.width - this.offsetDefault;
          } else if (popperLeft < 0) {
            popperLeft = right + this.offsetDefault;
          }

          if (popperTop + popperPos.height > innerHeight) {
            popperTop = popperTop - height - this.offsetDefault;
          } else if (popperTop < 0) {
            var bottomOffset = /bottom/g.test(this.placement) ? height + this.offsetDefault : 0;
            popperTop = bottom + this.offsetDefault - bottomOffset;
          }
        }

        this.popperStyle = 'position: ' + this.positionStyle + '; left: ' + popperLeft + 'px; top: ' + popperTop + 'px;';
      } else {
        this.popperStyle = this.styles;
      }
    },
    showPopper: function showPopper() {
      var _this = this;

      if (this.types === 'hover') {
        if (this.disable) {
          return;
        }
        if (this.popperStatus) {
          clearTimeout(enterTimer);
          clearTimeout(leaveTimer);
        }
        enterTimer = setTimeout(function () {
          _this.popperStatus = true;
        }, this.delayDefault);
      }
    },
    hidePopper: function hidePopper() {
      var _this2 = this;

      if (this.types === 'hover') {
        if (this.disable) {
          return;
        }
        if (!this.popperStatus) {
          clearTimeout(enterTimer);
        }
        leaveTimer = setTimeout(function () {
          _this2.popperStatus = false;
        }, this.delayDefault);
        if (!this.popperStatus) {
          clearTimeout(leaveTimer);
        }
      }
    },
    clickPopper: function clickPopper() {
      var _this3 = this;

      if (this.types === 'click') {
        if (this.disable) {
          return;
        }
        if (this.popperStatus) {
          clearTimeout(enterTimer);
          clearTimeout(leaveTimer);
        }
        enterTimer = setTimeout(function () {
          _this3.popperStatus = true;
        }, this.delayDefault);
      }
      this.$emit('popper', this.clickHide);
    },
    clickHide: function clickHide() {
      var _this4 = this;

      if (this.types === 'click') {
        if (this.disable) {
          return;
        }
        if (!this.popperStatus) {
          clearTimeout(enterTimer);
        }
        leaveTimer = setTimeout(function () {
          _this4.popperStatus = false;
        }, this.delayDefault);
        if (!this.popperStatus) {
          clearTimeout(leaveTimer);
        }
      }
    }
  }
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-tooltip",
      class: _vm.tooltipName,
      style: _vm.relativeStyle,
      on: {
        "mouseenter": _vm.showPopper,
        "click": _vm.clickPopper,
        "mouseleave": _vm.hidePopper
      }
    }, [_c('div', {
      ref: "reference",
      staticClass: "emfe-tooltip-slot",
      class: _vm.slotName
    }, [_vm._t("render")], 2), _vm._v(" "), _c('transition', {
      attrs: {
        "name": "fade"
      },
      on: {
        "enter": _vm.enter,
        "before-enter": _vm.beforeEnter,
        "after-enter": _vm.afterEnter,
        "before-leave": _vm.beforeLeave,
        "after-leave": _vm.afterLeave
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.popperStatus,
        expression: "popperStatus"
      }],
      ref: "popper",
      staticClass: "emfe-tooltip-popper",
      class: _vm.popperName,
      style: _vm.popperStyle
    }, [_vm.arrowStatus ? _c('i', {
      staticClass: "emfe-tooltip-arrow",
      class: _vm.arrowPlacement
    }) : _vm._e(), _vm._v(" "), _vm._t("tip")], 2)])], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(12);

var commonTransitionClass = 'emfe-gradual';

var Transition = function Transition(name) {
  return name !== 'gradual' ? {} : {
    beforeEnter: function beforeEnter(el) {
      (0, _assist.addClass)(el, commonTransitionClass);
      if (!el.dataset) el.dataset = {};

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = '0';
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },
    enter: function enter(el) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
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
      (0, _assist.removeClass)(el, commonTransitionClass);
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave: function beforeLeave(el) {
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
    },
    leave: function leave(el) {
      if (el.scrollHeight !== 0) {
        (0, _assist.addClass)(el, commonTransitionClass);
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },
    afterLeave: function afterLeave(el) {
      (0, _assist.removeClass)(el, commonTransitionClass);
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  };
};

var transitionProps = {
  name: {
    type: String,
    default: 'v'
  },
  css: {
    type: Boolean,
    default: true
  },
  mode: String,
  type: String,
  duration: [Number, String, Object]
};

exports.default = {
  name: 'EmfeTransition',
  functional: true,
  props: transitionProps,
  render: function render(createElement, context) {
    var data = {
      props: context.props,
      on: Transition(context.props.name)
    };

    return createElement('transition', data, context.children);
  }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeMenu = __webpack_require__(119);

var _EmfeMenu2 = _interopRequireDefault(_EmfeMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeMenu2.default.install = function (Vue) {
  Vue.component(_EmfeMenu2.default.name, _EmfeMenu2.default);
};

exports.default = _EmfeMenu2.default;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(121),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeMenu',
  data: function data() {
    return {
      Contant: _contant2.default,
      indexs: []
    };
  },

  props: {
    className: {
      type: String,
      default: ''
    },
    datas: Array,
    header: {
      type: Object
    }
  },
  mounted: function mounted() {
    this.testUrl(this.datas);
  },

  methods: {
    testUrl: function testUrl(val) {
      var _this = this;

      var href = window.location.href;

      val.forEach(function (data, dataIndex) {
        data.forEach(function (menu, menuIndex) {
          if (href.indexOf(menu.path) > -1) {
            _this.indexs.push(dataIndex, menuIndex);
          }
        });
      });

      if (_o2.default.hOwnProperty(this.header, 'path') && href.indexOf(this.header.path) > -1) {
        this.indexs.push('header');
      }
    },
    goToPath: function goToPath(item) {
      if (_o2.default.hOwnProperty(item, 'path')) {
        window.location.href = item.path;
      }
    }
  },
  watch: {
    datas: function datas(val) {
      this.testUrl(val);
    }
  }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      ref: "menu",
      staticClass: "emfe-menu"
    }, [_c('h3', {
      staticClass: "emfe-menu-header",
      class: {
        'emfe-menu-header-on': _vm.indexs[0] === 'header'
      }
    }, [_vm.header.router ? _c('router-link', {
      staticClass: "emfe-menu-header-link",
      attrs: {
        "to": _vm.header.router,
        "exact-active-class": "emfe-menu-header-on"
      }
    }, [_c('emfe-icon', {
      attrs: {
        "className": "emfe-menu",
        "type": _vm.header.icon
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-menu-header-text"
    }, [_vm._v(_vm._s(_vm.header.name))])], 1) : _c('div', {
      staticClass: "emfe-menu-header-link",
      on: {
        "click": function click($event) {
          _vm.goToPath(_vm.header);
        }
      }
    }, [_c('emfe-icon', {
      attrs: {
        "className": "emfe-menu",
        "type": _vm.header.icon
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-menu-header-text"
    }, [_vm._v(_vm._s(_vm.header.name))])], 1)], 1), _vm._v(" "), _vm._l(_vm.datas, function (menu, menuIndex) {
      return _c('ul', {
        key: menuIndex,
        staticClass: "emfe-menu-list"
      }, [_vm._l(menu, function (item, itemIndex) {
        return [item.router ? _c('router-link', {
          staticClass: "emfe-menu-list-li",
          attrs: {
            "to": item.router,
            "tag": "li",
            "exact-active-class": "emfe-menu-list-li-on"
          }
        }, [item.icon === 'yingxiaogongju' ? _c('img', {
          staticClass: "emfe-menu-list-li-img",
          attrs: {
            "src": __webpack_require__(51),
            "alt": ""
          }
        }) : _c('emfe-icon', {
          attrs: {
            "className": "emfe-menu",
            "type": item.icon
          }
        }), _vm._v(" "), _c('span', {
          staticClass: "emfe-menu-text"
        }, [_vm._v(_vm._s(item.name))])], 1) : _c('li', {
          staticClass: "emfe-menu-list-li",
          class: {
            'emfe-menu-list-li-on': _vm.indexs.length == 2 && menuIndex === _vm.indexs[0] && itemIndex === _vm.indexs[1]
          },
          on: {
            "click": function click($event) {
              _vm.goToPath(item);
            }
          }
        }, [item.icon === 'yingxiaogongju' ? _c('img', {
          staticClass: "emfe-menu-list-li-img",
          attrs: {
            "src": __webpack_require__(51),
            "alt": ""
          }
        }) : _c('emfe-icon', {
          attrs: {
            "className": "emfe-menu",
            "type": item.icon
          }
        }), _vm._v(" "), _c('span', {
          staticClass: "emfe-menu-text"
        }, [_vm._v(_vm._s(item.name))])], 1)];
      })], 2);
    })], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeHeader = __webpack_require__(123);

var _EmfeHeader2 = _interopRequireDefault(_EmfeHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeHeader2.default.install = function (Vue) {
  Vue.component(_EmfeHeader2.default.name, _EmfeHeader2.default);
};

exports.default = _EmfeHeader2.default;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(125),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeHeader',
  data: function data() {
    return {
      lightImg: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NHB4IiB2aWV3Qm94PSIwIDAgNTUgNTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7mtLvliqggKDIpPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuS4u+aOp+WItuWPsOmAieaLqea0u+WKqOW8ueeqly1jb3B5LTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MjEuMDAwMDAwLCAtMzA0LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSLmoLflvI8tY29weS00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjkuMDAwMDAwLCAxMzQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OC4wMDAwMDAsIDE3MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iua0u+WKqC0oMikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc0LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMy45Nzc0MjQ4LDExLjk2NjQwODYgQzM1LjY5NDk3ODIsMTEuMzI3NTg1NCAzNy41MTQ5Nzk2LDEwLjk5MDA1NDQgMzkuMzg5MDE0OCwxMC45OTAwNTQ0IEM0MS4zMTEyNDgxLDEwLjk5MDA1NDQgNDMuMTg1NzE1NiwxMS4zMzk2MTY5IDQ0LjkzOTA3NTQsMTIuMDE0NjA2NyBDNDQuOTc1Mzg2MSwxMS42NDY4ODg5IDQ0Ljk5OTM3NzEsMTEuMjY3MjExNiA0NC45OTkzNzcxLDEwLjg4NzYwNjQgQzQ0Ljk5OTM3NzEsNC44NzkyNjczNyA0MC4xMDAyNDMzLDAuMDA0MTI0NTU4MDIgMzQuMDU1OTUzOCwwLjAwNDEyNDU1ODAyIEMzMC44NTU3ODU4LDAuMDA0MTI0NTU4MDIgMjcuOTgxMjYxMywxLjM3MjExNTUgMjUuOTgwMzU0OCwzLjU0NzUxNTA3IEMyNy42NzM3NzMxLDQuNDgxNzIyODkgMjkuMjQwODI0NSw1LjY5Mjk0Mzg3IDMwLjYyNjUzODUsNy4xNjMzMTA4NiBDMzEuOTg4NjkzOCw4LjU5NzUxMTE1IDMzLjEwOTQ5ODMsMTAuMjE4ODg0NSAzMy45Nzc0MjQ4LDExLjk2NjQwODYgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTguMjkwOTE3Miw0My4wMDE5NjQ4IEwyMS42ODk5Mjk1LDQzLjAwMTk2NDggTDIwLjMzNDA0MjEsMzkuMTY5MzEzNSBDMjguNDA5MjA4OCwzNy42NDQ0ODA1IDM0LjU0Mzc3MDcsMzAuMTY1NzAyNSAzNC41NDM3NzA3LDIxLjE2ODU3NTYgQzM0LjU0Mzc3MDcsMTEuMDc0NDkxMiAyNi44MTgyMzg1LDIuODg0NDg0NyAxNy4yODQ2NjQzLDIuODg0NDg0NyBDNy43NTA4NzQwMiwyLjg5MDY4MDU1IDAuMDI1MTk3Nzk0LDExLjA3NDQ5MTIgMC4wMjUxOTc3MjM2LDIxLjE2ODU3NTYgQzAuMDI1MTk3NzIzNiwzMC4wODE1NTM5IDYuMDQ1NTY4MjQsMzcuNTA1ODY1OSAxNC4wMTIzMDcyLDM5LjEyMTA0MzMgTDEyLjg3OTM5OTIsNDMuMDAxOTY0OCBMMTUuODI2MzI4OSw0My4wMDE5NjQ4IEwxNS4zMzgwNzk4LDQ0LjY2NTA1MjIgQzE1LjAyNDc1Niw0NS43MTk3MTkzIDE1LjMzODA3OTgsNDYuODIyNTEyNSAxNi4xNjk2MjM1LDQ3LjYyNDA4NTUgQzE2LjUyNTA5MzcsNDcuOTY3NDUyIDE2LjU5MTU5MTIsNDguNDY3NjYwNiAxNi4zMzgyODA5LDQ4Ljg3NzUyNDggTDE0LjA5MDQwNCw1Mi40MzMwMTg4IEMxMy43NzExMDA1LDUyLjkzOTEzNTEgMTMuOTcwMDg4OSw1My41ODQyMjYzIDE0LjU0MjM0MjUsNTMuODY3MjE5MiBDMTQuNzIyNzA0Myw1My45NTQ0NTM1IDE0LjkyMDQ0MTksNTMuOTk5ODE4MSAxNS4xMjA3OTIsNTMuOTk5OTI2MSBDMTUuNTMwNzI4Miw1My45OTk5MjYxIDE1LjkzNDQ2ODUsNTMuODA2OTE3NSAxNi4xNTc1MTk5LDUzLjQ2MzU1MDkgTDE4LjQwNTMyNDcsNDkuOTEzODkyNSBDMTkuMTcwNjU5MSw0OC43MDg2NTEzIDE4Ljk3MTgxNDgsNDcuMjE0MTQ5MyAxNy45MTcyMTk2LDQ2LjIwMTkxNjYgQzE3LjYzOTk5MDQsNDUuOTMwNTk1IDE3LjUzMTM0NjUsNDUuNTU2OTY5NSAxNy42Mzk5OTA0LDQ1LjIwMTQyNzMgTDE4LjI5MDkxNzIsNDMuMDAxOTY0OCBaIE0xNS42NjM2NTEyLDEwLjI3Mjk5MDMgQzE1LjYzOTQ0NDEsMTAuMjc4ODk4IDEzLjAwNTgzODIsMTAuOTExODEzNSAxMC43MDM5OTk2LDEyLjgxNTk2MzYgQzcuNTg4MDUyMjYsMTUuNDAxMjI3MyA2LjQ5NzY1MDgyLDE4Ljk0NDkwNiA3LjQ2MTYxMzI3LDIzLjM0NDA0NzIgQzcuNjMwNTU4ODUsMjQuMTIxNDg1MSA3LjE0MjMwOTcyLDI0Ljg5ODg1MDkgNi4zNTg3NDgwMywyNS4wNjc1MDgzIEM2LjI1MDUzNjQsMjUuMDkxNTcxNCA2LjE0ODAxNjMxLDI1LjEwMzYwMjkgNi4wNDU2NDAzMywyNS4xMDM2MDI5IEM1LjM4MjY4MTk4LDI1LjEwMzYwMjkgNC43ODU5MzMwNSwyNC42NDU3NTY4IDQuNjM1Mjg2OTIsMjMuOTcwNjk0OSBDMy4xMTY2NDk4NSwxNy4wNjQ1MzA4IDYuMDkzNjIyMzMsMTIuODg4MjI0NyA4Ljg1MzY2NzIzLDEwLjU5ODQxNzYgQzExLjYyNTg4NzgsOC4zMDIyNzA2MiAxNC42NjMxNjIsNy41NDI4NDQwNSAxNS4wMDA2OTI5LDcuNDY0NTMxMSBDMTUuNzc4MTMwOCw3LjI3NzcxODM0IDE2LjU1NTQ5NjYsNy43NjU4MjM0MyAxNi43MzYxODU2LDguNTQzMjYxMjIgQzE2LjkxNjgwMjUsOS4zMjA3NzExIDE2LjQ0MTAxNzEsMTAuMDkyMzAxMyAxNS42NjM2NTEyLDEwLjI3Mjk5MDMgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTQuMDIxMDcxMywyOC4wOTg4NzQ5IEM1NC4wMjEwNzEzLDE5LjUyMzQyNzUgNDcuNDcwMzc3NCwxMi41NjkwNjUzIDM5LjM4OTAxNDgsMTIuNTY5MDY1MyBDMzcuNzE5NTE1NCwxMi41NjkwNjUzIDM2LjExNjcyOTcsMTIuODY0MjMzNyAzNC42MjgxMzU0LDEzLjQxMjY0MDUgQzM1LjYwNDQ4OTYsMTUuODM1MjI2NSAzNi4xMTY3Mjk3LDE4LjQ2MjYzNjUgMzYuMTE2NzI5NywyMS4xNzQ0ODMzIEMzNi4xMTY3Mjk3LDI2LjQ2NTc1ODEgMzQuMTcwMjE3MiwzMS40Mzc1MTM0IDMwLjYzMjczNDQsMzUuMTg1NjU1OCBDMjkuNzY1MTY4MiwzNi4xMDE3MDgzIDI4LjgzMDc0NDIsMzYuOTE1MzEyOCAyNy44NDI1NzQ3LDM3LjYyNjU0MTMgQzI5Ljk1MTc2NDgsNDAuNTAxMDY1OCAzMi45OTUxNjI5LDQyLjU3NDA4OTQgMzYuNDg0Mzc1NSw0My4zMjExOTYzIEwzNS45MzAwNjExLDQ1Ljc2MjA4MTcgTDM3LjQ1NDUzMzgsNDUuNzYyMDgxNyBMMzcuNDU0NTMzOCw0NS43Njc5MTc0IEwzNy4zMjc4Nzg2LDQ2LjIwMTkxNjYgQzM3LjA4MTEyNDQsNDcuMDM5MzY4IDM3LjMyNzg3ODYsNDcuOTE5MTgxOSAzNy45OTA5ODExLDQ4LjU2NDIwMSBDMzguMTM1NzE5NSw0OC42OTY2MTk3IDM4LjE1OTQyMjQsNDguOTA3NjM5NiAzOC4wNTcxOTA1LDQ5LjA2NDQwOTYgTDM2LjQ3ODQ2NzgsNTEuNTQxMTczNSBDMzYuMTU4ODc2MSw1Mi4wNDcyMTc4IDM2LjM1NzcyMDMsNTIuNjkyMzA4OSAzNi45MzA0NzgzLDUyLjk3NTMwMTggQzM3LjExMDgwMSw1My4wNjI2NTU0IDM3LjMwODU2MDgsNTMuMTA4MDQ5OCAzNy41MDg5Mjc4LDUzLjEwODA4MDcgQzM3LjkxODQzMTcsNTMuMTA4MDgwNyAzOC4zMjIxLDUyLjkxNSAzOC41NDUxNTE0LDUyLjU3MTYzMzUgTDQwLjExNzk2NjQsNTAuMDg4NzQ1OCBDNDAuNzI2NzQ2OCw0OS4xMjQ0MjMxIDQwLjU2OTkwNDksNDcuOTM3NDgxMyAzOS43MzI0NTM0LDQ3LjEzMDAwMDcgQzM5LjYyNDAyNTcsNDcuMDI3MzM2NSAzOS41Njk4NDc4LDQ2Ljg3MDc4MjYgMzkuNjExOTIyMSw0Ni43MjYwNDQyIEwzOS44OTUyMDMyLDQ1Ljc2MjA4MTcgTDQxLjM2NTcxNDIsNDUuNzYyMDgxNyBMNDAuNzYzMDU3NSw0My41NjIyNTkgQzQ4LjE5OTU0NTEsNDIuODIwOTE1NiA1NC4wMjEwNzEzLDM2LjE3OTk0OTIgNTQuMDIxMDcxMywyOC4wOTg4NzQ5IFogTTQyLjk2MjczNjMsMzguNTg0NTk2MSBDNDIuNzgzMzYzOCwzOC42NjAwMTg2IDQyLjU5MDc1ODQsMzguNjk4OTM2NSA0Mi4zOTYxNzQyLDM4LjY5OTA3NTYgQzQxLjgzNTY2MzksMzguNjk5MDc1NiA0MS4yOTk2NDg5LDM4LjM2Nzc0MDYgNDEuMDY0NTY2LDM3LjgxOTI2MTcgQzQwLjc1MTE3MDEsMzcuMDgzODk4MiA0MS4wOTQ0NjQ3LDM2LjIzNDQxNTIgNDEuODI5OTAwMiwzNS45MjEwMTk0IEM0NC40NjM1MDYyLDM0LjgwMDE0MjkgNDYuMzc5NDcxNiwzMi42NDI3NTQ2IDQ2Ljk2NDI2MTEsMzAuMTQ3NzYzNCBDNDcuMTQ1MDk0MSwyOS4zNzAzMjU1IDQ3LjkyODY1NTgsMjguODc2MzEyNyA0OC42OTk3NTM3LDI5LjA2MzEyNTUgQzQ5LjQ3NzE5MTYsMjkuMjQzODE0NCA0OS45NjU0NDA3LDMwLjAyMTE4MDIgNDkuNzg0NTM1NiwzMC43OTg2MTgxIEM0OC45OTQ4NTAxLDM0LjE5NzU1ODMgNDYuNDQ1NjgxLDM3LjEwODAzMzMgNDIuOTYyNzM2MywzOC41ODQ1OTYxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
      eventImg: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTFweCIgaGVpZ2h0PSI0NnB4IiB2aWV3Qm94PSIwIDAgNTEgNDYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLkuLvmjqfliLblj7DpgInmi6nmtLvliqjlvLnnqpctY29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzkzLjAwMDAwMCwgLTMwNC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0i5qC35byPLWNvcHktNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzY5LjAwMDAwMCwgMTM0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzUxLjAwMDAwMCwgMTcwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA1LjczNjg3NywzMy43NTg1ODkyIEw5OC4zMzk5ODg0LDI5Ljc0MDYyMDcgTDkwLjkzOTI3MzEsMzMuNzU4NTg5MiBMOTIuNTI3MzI3MywyNS41NzcyMzk5IEw4Ni4zNjY0NDIsMTkuODgzMjA0NSBMOTQuNzQ2Nzc2NSwxOC44NDIzNTkyIEw5OC4zMzk5ODg0LDExLjMwMzg4NDggTDEwMS45MjkzNzQsMTguODQyMzU5MiBMMTEwLjMwOTcwOCwxOS44ODMyMDQ1IEwxMDQuMTQ4ODIzLDI1LjU3NzIzOTkgTDEwNS43MzY4NzcsMzMuNzU4NTg5MiBaIE0xMTguNTEwMTkxLDIyLjk4NjYwNjkgQzExOC41MTAxOTEsMTkuNTg4NTUzNCAxMjAuNjc2MDY3LDE2LjcxMDkyMjUgMTIzLjY4MzgwMywxNS42NTQ3NzA5IEwxMjMuNjYwODQ0LDIuNTU2MTkzMyBDMTIzLjY2MDg0NCwxLjE0NDE2NDM4IDEyMi41MjgxNTksMCAxMjEuMTI3NjEsMCBMNzUuNTY3NjczMywwIEM3NC4xNjcxMjQyLDAgNzMuMDM0NDM5NywxLjE0NDE2NDM4IDczLjAzNDQzOTcsMi41NTYxOTMzIEw3MywxNS42NTQ3NzA5IEM3Ni4wMDc3MzY0LDE2LjcxMDkyMjUgNzguMTY5Nzg2MiwxOS41ODg1NTM0IDc4LjE2OTc4NjIsMjIuOTg2NjA2OSBDNzguMTY5Nzg2MiwyNi4zODA4MzM2IDc2LjAwNzczNjQsMjkuMjYyMjkxIDczLDMwLjMxODQ0MjggTDczLjAzNDQzOTcsNDMuNDQzODA2OCBDNzMuMDM0NDM5Nyw0NC44NTU4MzU3IDc0LjE2NzEyNDIsNDYgNzUuNTY3NjczMyw0NiBMMTIxLjEyNzYxLDQ2IEMxMjIuNTI4MTU5LDQ2IDEyMy42NjA4NDQsNDQuODU1ODM1NyAxMjMuNjYwODQ0LDQzLjQ0MzgwNjggTDEyMy42ODM4MDMsMzAuMzE4NDQyOCBDMTIwLjY3NjA2NywyOS4yNjIyOTEgMTE4LjUxMDE5MSwyNi4zODA4MzM2IDExOC41MTAxOTEsMjIuOTg2NjA2OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
      isMask: false
    };
  },

  props: {
    logo: {
      type: String,
      default: 'https://static2.evente.cn/static/img/logo2017.svg'
    },
    user: {
      type: String,
      required: true
    },
    className: String,
    home: Function,
    showMask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    headerName: function headerName() {
      return [(0, _defineProperty3.default)({}, this.className + '-header', !!this.className)];
    }
  },
  methods: {
    logout: function logout() {
      this.$emit('logout');
    },
    goIndex: function goIndex() {
      if (this.showMask) {
        this.isMask = true;
      } else {
        this.$emit('goIndex');
      }
    },
    closeMask: function closeMask() {
      this.isMask = false;
    },
    goAccount: function goAccount() {
      this.$emit('goAccount');
    },
    eventeFun: function eventeFun() {
      this.$emit('goEvente');
    },
    lightFun: function lightFun() {
      this.$emit('goLight');
    },
    goHome: function goHome() {
      if (this.home) {
        this.home();
      } else {
        window.open('https://www.evente.cn/');
        this.$emit('goHome');
      }
    }
  }
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('header', {
      staticClass: "emfe-header",
      class: _vm.headerName
    }, [_c('div', {
      staticClass: "emfe-header-eye"
    }, [_c('img', {
      staticClass: "emfe-header-eye-img",
      attrs: {
        "src": _vm.logo,
        "height": "100%"
      },
      on: {
        "click": _vm.goHome
      }
    })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-info"
    }, [_c('div', {
      staticClass: "emfe-header-index"
    }, [_c('emfe-button', {
      attrs: {
        "theme": "primary"
      },
      on: {
        "click": _vm.goIndex
      }
    }, [_vm._v("免费发活动")])], 1), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-account"
    }, [_c('span', {
      staticClass: "emfe-header-info-hello"
    }, [_vm._v(" 你好，"), _c('span', {
      staticClass: "emfe-header-info-text",
      on: {
        "click": _vm.goAccount
      }
    }, [_vm._v(_vm._s(_vm.user))])])]), _vm._v(" "), _c('span', {
      staticClass: "emfe-header-info-text emfe-header-signout",
      on: {
        "click": _vm.logout
      }
    }, [_vm._v("退出")])]), _vm._v(" "), _vm.isMask ? _c('div', {
      staticClass: "emfe-header-mask"
    }, [_c('div', {
      staticClass: "emfe-header-mask-box"
    }, [_c('img', {
      staticClass: "emfe-header-mask-box-close",
      attrs: {
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5SZWN0YW5nbGUgOTMgQ29weSAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IuWGheWuuSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuS4u+aOp+WItuWPsOmAieaLqea0u+WKqOW8ueeqly1jb3B5LTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NzcuMDAwMDAwLCAtMTQ0LjAwMDAwMCkiIGZpbGw9IiNDQ0NDQ0MiPgogICAgICAgICAgICA8ZyBpZD0i5qC35byPLWNvcHktNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzY5LjAwMDAwMCwgMTM0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02MTQuMTk5NjQzLDE1LjAxNDg4MzUgTDYxNy43MjI5NCwxOC41MzgxODEgQzYxOC4wNTAzNjQsMTguODY1NjA1MSA2MTguMDUyODc2LDE5LjM5Mzk1MjQgNjE3LjcyMzQ1NywxOS43MjMzNzIgQzYxNy4zOTYzMTgsMjAuMDUwNTEwOCA2MTYuODY3NzQ4LDIwLjA1MjMzNzggNjE2LjUzODI2NiwxOS43MjI4NTU3IEw2MTMuMDE0OTY4LDE2LjE5OTU1ODEgTDYwOS40NjE0NiwxOS43NTMwNjU2IEM2MDkuMTM0MDM2LDIwLjA4MDQ4OTcgNjA4LjYwNTY4OSwyMC4wODMwMDE2IDYwOC4yNzYyNywxOS43NTM1ODIgQzYwNy45NDkxMzEsMTkuNDI2NDQzMSA2MDcuOTQ3MzA0LDE4Ljg5Nzg3MzIgNjA4LjI3Njc4NiwxOC41NjgzOTEgTDYxMS44MzAyOTMsMTUuMDE0ODgzNSBMNjA4LjI0NjU3NiwxMS40MzExNjU5IEM2MDcuOTE5MTUyLDExLjEwMzc0MTkgNjA3LjkxNjY0LDEwLjU3NTM5NDYgNjA4LjI0NjA2LDEwLjI0NTk3NSBDNjA4LjU3MzE5OCw5LjkxODgzNjExIDYwOS4xMDE3NjgsOS45MTcwMDkxMiA2MDkuNDMxMjUsMTAuMjQ2NDkxMyBMNjEzLjAxNDk2OCwxMy44MzAyMDg4IEw2MTYuNTY4NDc2LDEwLjI3NjcwMTMgQzYxNi44OTU5LDkuOTQ5Mjc3MjYgNjE3LjQyNDI0Nyw5Ljk0Njc2NTM1IDYxNy43NTM2NjYsMTAuMjc2MTg1IEM2MTguMDgwODA1LDEwLjYwMzMyMzggNjE4LjA4MjYzMiwxMS4xMzE4OTM3IDYxNy43NTMxNSwxMS40NjEzNzU5IEw2MTQuMTk5NjQzLDE1LjAxNDg4MzUgWiIgaWQ9IlJlY3RhbmdsZS05My1Db3B5LTIiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
      },
      on: {
        "click": _vm.closeMask
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "emfe-header-mask-box-title"
    }, [_vm._v("选择发布的活动类型")]), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-mask-box-modal"
    }, [_c('div', {
      staticClass: "emfe-header-mask-box-modal-light",
      on: {
        "click": _vm.lightFun
      }
    }, [_c('img', {
      staticClass: "emfe-header-mask-box-modal-light-img",
      attrs: {
        "src": _vm.lightImg
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "emfe-header-mask-box-modal-light-title"
    }, [_vm._v("轻活动")]), _vm._v(" "), _c('p', {
      staticClass: "emfe-header-mask-box-modal-light-content"
    }, [_vm._v("俱乐部、户外、会议沙龙、亲子等活动")]), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-mask-box-modal-light-mask"
    })]), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-mask-box-modal-light",
      on: {
        "click": _vm.eventeFun
      }
    }, [_c('img', {
      staticClass: "emfe-header-mask-box-modal-light-img",
      attrs: {
        "src": _vm.eventImg
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "emfe-header-mask-box-modal-light-title"
    }, [_vm._v("演出赛事")]), _vm._v(" "), _c('p', {
      staticClass: "emfe-header-mask-box-modal-light-content"
    }, [_vm._v("专业的票务活动、演唱会、剧院、音乐节、赛事等")]), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-mask-box-modal-light-mask"
    })])])])]) : _vm._e()]);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-header-controller"
    }, [_c('span', {
      staticClass: "emfe-header-controller-text"
    }, [_vm._v("专业的活动应用平台")])]);
  }] };

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeHeaderC = __webpack_require__(127);

var _EmfeHeaderC2 = _interopRequireDefault(_EmfeHeaderC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeHeaderC2.default.install = function (Vue) {
  Vue.component(_EmfeHeaderC2.default.name, _EmfeHeaderC2.default);
};

exports.default = _EmfeHeaderC2.default;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(129),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeHeaderC',
  props: {
    user: {
      type: String
    },
    orderRouter: {
      type: [Object, String]
    },
    followRouter: {
      type: [Object, String]
    },
    loginFlg: {
      type: Boolean,
      required: true
    },
    integral: {
      type: Object,
      required: true
    }
  },
  watch: {
    loginFlg: function loginFlg(val, oldVal) {
      if (val !== oldVal) {
        this.loginFlg = val;
      }
    }
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
    integralClick: function integralClick() {
      this.$emit('integralClick');
    },
    login: function login() {
      this.$emit('login');
    }
  }
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('header', {
      staticClass: "emfe-header-c"
    }, [_c('div', {
      staticClass: "emfe-header-c-main"
    }, [_c('div', {
      staticClass: "emfe-header-c-info"
    }, [_c('span', {
      staticClass: "emfe-header-c-account"
    }, [_vm._v("你好，\n        "), _vm.loginFlg ? _c('span', [_vm._v(_vm._s(_vm.user))]) : _vm._e(), _vm._v(" "), !_vm.loginFlg ? _c('emfe-link', {
      staticClass: "emfe-header-c-logout",
      attrs: {
        "routers": {}
      },
      on: {
        "click": _vm.login
      }
    }, [_vm._v("请登录")]) : _vm._e()], 1), _vm._v(" "), _vm.loginFlg ? _c('emfe-link', {
      attrs: {
        "className": "emfe-header-c",
        "routers": {}
      },
      on: {
        "click": _vm.orderClick
      }
    }, [_vm._v("我的订单")]) : _vm._e(), _vm._v(" "), _vm.loginFlg ? _c('emfe-link', {
      staticClass: "emfe-header-c-logout",
      attrs: {
        "routers": {}
      },
      on: {
        "click": _vm.logout
      }
    }, [_vm._v("退出")]) : _vm._e()], 1)])]);
  }, staticRenderFns: [] };

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeHeaderCNew = __webpack_require__(131);

var _EmfeHeaderCNew2 = _interopRequireDefault(_EmfeHeaderCNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeHeaderCNew2.default.install = function (Vue) {
  Vue.component(_EmfeHeaderCNew2.default.name, _EmfeHeaderCNew2.default);
};

exports.default = _EmfeHeaderCNew2.default;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(133),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeHeaderActive',
  data: function data() {
    return {
      src: '',
      erweimaSrc: ''
    };
  },

  props: {
    user: {
      type: String
    },
    loginFlg: {
      type: Boolean,
      required: true
    },
    imgLogo: {
      type: String
    }
  },
  created: function created() {
    var url = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzhweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgNzggMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2dvPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iu+8iDPmlLnvvInmnInlm74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MTAuMDAwMDAwLCAtMjEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0yNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTAuMDAwMDAwLCA0OC41MDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMi40ODI1OTYxMywwLjM0MDQyNjAyNyBDMi41NzM3MzU3LDAuNDEzNjM1OTI1IDQuNzM2ODI2NDgsMi4xNTgxNjY3OSA2LjM5NzIxNzY1LDQuNzU0Njc3ODUgQzYuNzgwOTgwOTYsNS4zNTQ5OTkwMiA2LjUxMjc4NDY1LDYuMTAyMzUwMDYgNS43OTc2NTA2Nyw2LjQyNTA4MzY5IEM1LjU3NjYyNDU3LDYuNTI0NTI3MTQgNS4zMzg3NTE5Nyw2LjU3MjI2NjA5IDUuMTA0MjQ4NjcsNi41NzIyNjYwOSBDNC41ODAzMjI0OCw2LjU3MjI2NjA5IDQuMDczMjQyNzksNi4zMzY0NjkyMSAzLjgwODQxNTc5LDUuOTIxNjEzMTIgQzIuMzY3NTM0NTMsMy42Njg3MzEwMyAwLjQ3NDgzMDA5OCwyLjE0MTk5OTYxIDAuNDU1OTYyMDE3LDIuMTI2NTk1MDIgQy0wLjEzMTgxMjQxNiwxLjY1NjgzMTUxIC0wLjE1NDIxODI2MywwLjg3NTYyMDg4NyAwLjQwNTU5MDk3OCwwLjM4MjY3NDIzOSBDMC42OTQ1MDg0NzYsMC4xMjgxMTczMjIgMS4wODEzMDQxNSwwIDEuNDY5NjE2LDAgQzEuODMzMzMxOTcsMCAyLjE5ODM5NTY1LDAuMTEyNzEyNzM5IDIuNDgyNTk2MTMsMC4zNDA0MjYwMjcgWiBNMi40ODgyNzI1OCw4LjA1MzQ4NDQyIEMzLjgxNzAzMTk5LDkuMjU1NTY1ODIgNC44NDY1ODA0NiwxMC42NTc3MzggNS41NDg2MTQyNCwxMi4yMjIyNzA2IEM2LjIyNzkwMzk1LDEzLjczNjc4MDUgNi41NzIyNjYwOSwxNS4zMzY5OTQ4IDYuNTcyMjY2MDksMTYuOTc3NjcxMiBDNi41NzIyNjYwOSwxOC42MTkwMzA0IDYuMjI3OTAzOTUsMjAuMjE5NDE1NSA1LjU0ODYxNDI0LDIxLjczMzU4MzkgQzQuODQ2NTgwNDYsMjMuMjk3OTQ1OCAzLjgxNzAzMTk5LDI0LjcwMDgwMDkgMi40ODgyNzI1OCwyNS45MDI4ODIzIEMyLjIwMzA0NTAzLDI2LjE2MDY3ODUgMS44MzYyNzU3NiwyNi4yODkwNjQ0IDEuNDY5MzM4MDIsMjYuMjg5MDY0NCBDMS4wODQwMzY1NCwyNi4yODkwNjQ0IDAuNjk5MjQwNDgyLDI2LjE0NzE5MTEgMC40MTA4MTE5MTUsMjUuODY1NDkzMyBDLTAuMTUxNzI0ODc2LDI1LjMxNjI2NzkgLTAuMTM0NTQwNDY0LDI0LjQ0MjMyMTggMC40NTAwNjY1MDMsMjMuOTEzNDEyOCBDMi41MDMyNjY4MiwyMi4wNTY1OTc0IDMuNjM0MDY4NTQsMTkuNTkyODUxMiAzLjYzNDA2ODU0LDE2Ljk3NzY3MTIgQzMuNjM0MDY4NTQsMTQuMzYyNDkxMSAyLjUwMzI2NjgyLDExLjg5OTc2OTMgMC40NTAwNjY1MDMsMTAuMDQyNjEyNCBDLTAuMTM0NTQwNDY0LDkuNTEzODc0MTggLTAuMTUxNzI0ODc2LDguNjM5NzU3MzIgMC40MTA4MTE5MTUsOC4wOTA1MzE5NSBDMC42OTg5MDM1MzIsNy44MDkwMDQ4NiAxLjA4NDAzNjU0LDcuNjY3NjQzNzggMS40NjkzMzgwMiw3LjY2NzY0Mzc4IEMxLjgzNjI3NTc2LDcuNjY3NjQzNzggMi4yMDMwNDUwMyw3Ljc5NTY4ODI0IDIuNDg4MjcyNTgsOC4wNTM0ODQ0MiBaIE0zOS4zMjE3OTQxLDguNjU4NDkxNzIgQzM5LjU0OTI0OTEsOS4xNDk4NzM0OCAzOS40MjMxNzExLDkuNzE1MTM2MDUgMzkuMDAyNTY4MSwxMC4wOTEzMTY2IEwyMS4zNzQ0NjQ3LDI0LjIwODAwNTYgQzE5Ljg3MjUwNzEsMjUuNTUwMjU2MyAxNy44NzU4NDM1LDI2LjI4OTA2NDQgMTUuNzUxMjE1MSwyNi4yODkwNjQ0IEMxMy42MjcxMDEzLDI2LjI4OTA2NDQgMTEuNjI5OTIzMSwyNS41NTAyNTYzIDEwLjEyNzc5NCwyNC4yMDgwMDU2IEM3LjAyNjc5MDI1LDIxLjQzNzA2MiA3LjAyNjc5MDI1LDE2LjkyODg0NTEgMTAuMTI3Nzk0LDE0LjE1ODM5NzQgQzExLjMxODI0NDYsMTMuMDk0NDgwNyAxMi43OTczODgxLDEyLjQ0NzQwMzggMTQuMzQxNTQzMiwxMi4yMDEyOTk3IEwxNC4zNDE1NDMyLDEwLjU3MjQ1MSBMOS4xNjM1OTc2MywxMC41NzI0NTEgQzguMzM3NjU4MiwxMC41NzI0NTEgNy42Njc2NDM3OCw5Ljk3Mzk2NjgxIDcuNjY3NjQzNzgsOS4yMzU2NTQ1NSBDNy42Njc2NDM3OCw4LjQ5ODE2ODcxIDguMzM3NjU4Miw3Ljg5OTM1NCA5LjE2MzU5NzYzLDcuODk5MzU0IEwxNC4zNDE1NDMyLDcuODk5MzU0IEwxNC4zNDE1NDMyLDMuNzU5ODggTDEwLjk2OTY4NjIsMy43NTk4OCBDMTAuMTQzNDAzNywzLjc1OTg4IDkuNDczNTYwNzgsMy4xNjE1NjExMyA5LjQ3MzU2MDc4LDIuNDIzMDgzNiBDOS40NzM1NjA3OCwxLjczNTE4MjE5IDEwLjA1NTIzNDgsMS4xNjk3NTQzNCAxMC44MDI5NTQ1LDEuMDk1Mzc3NjggTDIwLjg5MjYyMzgsMS4wOTUzNzc2OCBDMjEuNjM5ODI4OCwxLjE2OTc1NDM0IDIyLjIyMTg0NTksMS43MzUxODIxOSAyMi4yMjE4NDU5LDIuNDIzMDgzNiBDMjIuMjIxODQ1OSwzLjE2MTU2MTEzIDIxLjU1MjAwMywzLjc1OTg4IDIwLjcyNjA2MzYsMy43NTk4OCBMMjAuMDIxMzk5MiwzLjc1OTg4IEwxNy4zNTQyMDY2LDMuNzU5ODggTDE3LjM1NDIwNjYsNy44OTkzNTQgTDIzLjE5NzUzNTEsNy44OTkzNTQgQzI0LjAyMzY0NjEsNy44OTkzNTQgMjQuNjkzNjYwNSw4LjQ5ODE2ODcxIDI0LjY5MzY2MDUsOS4yMzU2NTQ1NSBDMjQuNjkzNjYwNSw5Ljk3Mzk2NjgxIDI0LjAyMzY0NjEsMTAuNTcyNDUxIDIzLjE5NzUzNTEsMTAuNTcyNDUxIEwxNy4zNTQyMDY2LDEwLjU3MjQ1MSBMMTcuMzU0MjA2NiwxMi4yMzU1MTI5IEMxNy40NTE5ODE0LDEyLjI1MDU1MzYgMTcuNTA0OTg1NiwxMi4yNjExMzE2IDE3LjUwNDk4NTYsMTIuMjYxMTMxNiBDMTguOTIzMjM0MiwxMi41NDU3NDYyIDIwLjI3MjUyNTksMTMuMTczMzE5OSAyMS4zNzQ0NjQ3LDE0LjE1ODM5NzQgTDIzLjI3NTc1NDksMTUuMzk5ODI2NCBDMjMuODUwMjI0NSwxNS45MTMwMjUzIDIzLjg1MDIyNDUsMTYuNzQ1MjE3NCAyMy4yNzU3NTQ5LDE3LjI1ODc0NjkgQzIyLjcwMTI4NTMsMTcuNzcyMTExMSAyMS43Njk2ODA1LDE3Ljc3MjExMTEgMjEuMTk1NTU0LDE3LjI1ODc0NjkgTDE5LjI5NDQzNTIsMTYuMDE3MzE3OSBDMTcuMzQwNDgzOCwxNC4yNzExMTkzIDE0LjE2MTc3NDgsMTQuMjcxNDQ5OSAxMi4yMDgxNjY1LDE2LjAxNzMxNzkgQzEwLjI1NDM4NjYsMTcuNzYyNjkgMTAuMjU0Mzg2NiwyMC42MDMzODI0IDEyLjIwODE2NjUsMjIuMzQ5MDg1MSBDMTMuMTU0Njk0OCwyMy4xOTQ4MzAzIDE0LjQxMjczMDEsMjMuNjYwMjYyOSAxNS43NTEyMTUxLDIzLjY2MDI2MjkgQzE3LjA4OTUyODYsMjMuNjYwMjYyOSAxOC4zNDc5MDY5LDIzLjE5NDgzMDMgMTkuMjk0NDM1MiwyMi4zNDkwODUxIEwzNC40MTE3ODU3LDEwLjQ3NjA5MTkgTDI4LjQ2NDY3ODcsMTAuNDc2MDkxOSBDMjcuNjUyMjkwNSwxMC40NzYwOTE5IDI2Ljk5MzU5NzQsOS44ODc2ODk4OSAyNi45OTM1OTc0LDkuMTYxNzczNzQgQzI2Ljk5MzU5NzQsOC40MzU2OTIzMiAyNy42NTIyOTA1LDcuODQ3NDU1NjMgMjguNDY0Njc4Nyw3Ljg0NzQ1NTYzIEwzNy45NjI1NTM0LDcuODQ3NDU1NjMgQzM4LjU1NzYwNzIsNy44NDc0NTU2MyAzOS4wOTM4MjQ1LDguMTY3NDQwNTIgMzkuMzIxNzk0MSw4LjY1ODQ5MTcyIFogTTQ3LjE4MDQyOCwzLjk4Mjk2MjE2IEM1MC4xNTY3NjMzLDMuOTgyOTYyMTYgNTIuNTc4MTI4OCw2LjQwMzE4OTk4IDUyLjU3ODEyODgsOS4zNzgyNTY2MyBMNTIuNTc4MTI4OCwxMS4wOTc5NTQyIEw1Mi41NzgxMjg4LDE5LjA4NzkzNjEgTDUyLjU3ODEyODgsMjEuMzIzNDQxOSBDNTIuNTc4MTI4OCwyNC4wNjEyOTczIDUwLjE3NTExMDgsMjYuMjg5MDY0NCA0Ny4yMjA2NTc5LDI2LjI4OTA2NDQgTDQ2LjY5MjI4MzUsMjYuMjg5MDY0NCBDNDUuODgxNDU4NSwyNi4yODkwNjQ0IDQ1LjIyNDMxNDksMjUuNjgwMDUzOSA0NS4yMjQzMTQ5LDI0LjkyODM4MDIgQzQ1LjIyNDMxNDksMjQuMTc3MjExMiA0NS44ODE0NTg1LDIzLjU2ODAzMjUgNDYuNjkyMjgzNSwyMy41NjgwMzI1IEw0Ny4yMjA2NTc5LDIzLjU2ODAzMjUgQzQ4LjU1NTgxNzUsMjMuNTY4MDMyNSA0OS42NDIzNTk5LDIyLjU2MTE0NjQgNDkuNjQyMzU5OSwyMS4zMjM0NDE5IEw0OS42NDIzNTk5LDE5LjA4NzkzNjEgTDQ5LjYxOTgwNDMsMTkuMDg3OTM2MSBMNDkuNjE5ODA0Myw5LjM3ODI1NjYzIEM0OS42MTk4MDQzLDguMDMzNzIzIDQ4LjUyNTM1MDUsNi45Mzk4NTk0MyA0Ny4xODA0MjgsNi45Mzk4NTk0MyBMNDYuMTc5NTYzMyw2LjkzOTg1OTQzIEw0Ni4xNzk1NjMzLDcuNDY5OTY3NzIgTDQ2LjE3OTU2MzMsMTEuMDk2MTAzNiBDNDYuMTc5NTYzMywxMy42NTI5MzgyIDQ1LjY0Mzk1MDksMTYuMTQ3MDIxMSA0NC41ODg4ODUzLDE4LjUwOTM3NjEgQzQzLjkwNTE0NjMsMjAuMDM4MTI3IDQzLjAyNDgwMjgsMjEuNDYyNTcyMiA0MS45NjAxNDI2LDIyLjc2NzU3MDcgQzQxLjQ2MjA2NjgsMjMuMzc4NTk5OSA0MC45MjM1OTI4LDIzLjk2MzM4NDYgNDAuMzQ1NzMwNywyNC41MjAwNzQgQzQwLjI1MDk2MzMsMjQuNjExNzYyIDQwLjE1NTUyMjYsMjQuNzAzMjgxOCA0MC4wNTgzOTg3LDI0Ljc5MzQ1NTggQzM5LjAxNzY0MDgsMjUuNzU3Nzc4NCAzNy42MzQzNCwyNi4yODg4OTYxIDM2LjE2MjUsMjYuMjg4ODk2MSBDMzQuNjkxMTY0OSwyNi4yODg4OTYxIDMzLjMwNzUyNzUsMjUuNzU3Nzc4NCAzMi4yNjY3Njk2LDI0Ljc5MzQ1NTggTDI4LjkwOTY4MTUsMjIuMjYwMDA1OCBDMjguMzM2NTMyNSwyMS43Mjg1NTE3IDI4LjMzNjUzMjUsMjAuODY3MTg4OCAyOC45MDk2ODE1LDIwLjMzNTkwMjkgQzI5LjQ4Mjk5ODksMTkuODA0Nzg1MiAzMC40MTI2NjE5LDE5LjgwNDc4NTIgMzAuOTg1NjQyNiwyMC4zMzU5MDI5IEwzNC4zNDI1NjIzLDIyLjg2OTE4NDYgQzM0LjgyOTAyMzcsMjMuMzE5NTQ5NSAzNS40NzUyMjYxLDIzLjU2ODAzMjUgMzYuMTYyNSwyMy41NjgwMzI1IEMzNi44NDk5NDIyLDIzLjU2ODAzMjUgMzcuNDk2NjQ5NiwyMy4zMTk1NDk1IDM3Ljk4MjI2OTMsMjIuODY5MTg0NiBDMzguNjAzNzI3OCwyMi4yOTM0ODQ2IDM5LjE2Njc3NzQsMjEuNjc5OTMxOCAzOS42NzU3OTQzLDIxLjAzNjI2NDkgQzM5LjY4NTcyNTUsMjEuMDIzODE1NSAzOS42OTUxNTE4LDIxLjAxMTE5NzkgMzkuNzA1MDgzLDIwLjk5ODc0ODUgQzM5Ljc0Mjk1NjMsMjAuOTQxODg1MSAzOS43ODUwMzc3LDIwLjg4ODA0OTkgMzkuODMwNDg1NiwyMC44Mzc0MTEyIEM0MC4wMDkwNzkyLDIwLjYwNDc0MjMgNDAuMTgxNjEzMSwyMC4zNjg3MDg3IDQwLjM0NTg5OSwyMC4xMjg2Mzc0IEM0Mi4xNzg0NjExLDE3LjQ0NzQ3NzIgNDMuMTI4MzIzMSwxNC4zMTYxMjAzIDQzLjI0MzI4OTUsMTEuMDk2MTAzNiBMNDMuMjQzMjg5NSw2LjkzOTg1OTQzIEw0MS43Nzk4NjU4LDYuOTM5ODU5NDMgQzQwLjk2Mjk4MTEsNi45Mzk4NTk0MyA0MC4zMDA3ODc3LDYuMjc3ODU0OTUgNDAuMzAwNzg3Nyw1LjQ2MTQxMDggQzQwLjMwMDc4NzcsNC42NDQ3OTg0MSA0MC45NjI5ODExLDMuOTgyOTYyMTYgNDEuNzc5ODY1OCwzLjk4Mjk2MjE2IEw0My4yNDMyODk1LDMuOTgyOTYyMTYgTDQzLjI0MzI4OTUsMi4xMzg3NzA3NyBMNDMuMjQzMjg5NSwxLjM2MDg1MjQxIEM0My4yNDMyODk1LDAuNjA5MTc4NzExIDQzLjkwMDkzODEsMCA0NC43MTE0MjY0LDAgQzQ1LjUyMjQxOTcsMCA0Ni4xNzk1NjMzLDAuNjA5MTc4NzExIDQ2LjE3OTU2MzMsMS4zNjA4NTI0MSBMNDYuMTc5NTYzMywxLjUxMzc3Nzk3IEw0Ni4xNzk1NjMzLDIuMTM4NzcwNzcgTDQ2LjE3OTU2MzMsMy45ODI5NjIxNiBMNDcuMTgwNDI4LDMuOTgyOTYyMTYgWiBNMjkuODYxMjk3MiwzLjI4NjEzMzA1IEMyOS4wOTgzMDc2LDMuMjg2MTMzMDUgMjguNDc5ODE5NywyLjc5NTc2MjQ1IDI4LjQ3OTgxOTcsMi4xOTA4MjMwOCBDMjguNDc5ODE5NywxLjU4NTc0ODI4IDI5LjA5ODMwNzYsMS4wOTUzNzc2OCAyOS44NjEyOTcyLDEuMDk1Mzc3NjggTDM4LjA1MjExOTEsMS4wOTUzNzc2OCBDMzguODE1MTA4NywxLjA5NTM3NzY4IDM5LjQzMzU5NjYsMS41ODU3NDgyOCAzOS40MzM1OTY2LDIuMTkwODIzMDggQzM5LjQzMzU5NjYsMi43OTU3NjI0NSAzOC44MTUxMDg3LDMuMjg2MTMzMDUgMzguMDUyMTE5MSwzLjI4NjEzMzA1IEwyOS44NjEyOTcyLDMuMjg2MTMzMDUgWiBNNzMuMzM5ODA2MywxMi45MjI1Njc3IEM3NS43MDczODI2LDEyLjkyMjU2NzcgNzcuNjMzNDMxNywxNC45MDE3MTAyIDc3LjYzMzQzMTcsMTcuMzMzMzYzOSBMNzcuNjMzNDMxNywyMS43MzM5ODM2IEM3Ny42MzM0MzE3LDI0LjE2NjMxNTcgNzUuNzA3MzgyNiwyNi4xNDQ3Nzk4IDczLjMzOTgwNjMsMjYuMTQ0Nzc5OCBMNzEuMTMzNjU1NiwyNi4xNDQ3Nzk4IEM3MC40MDc0MDUyLDI2LjE0NDc3OTggNjkuODE2MDA2MywyNS41Mzc1ODcyIDY5LjgxNjAwNjMsMjQuNzkwODA4MiBDNjkuODE2MDA2MywyNC4wNDQzNjg0IDcwLjQwNzQwNTIsMjMuNDM3MTc1OCA3MS4xMzM2NTU2LDIzLjQzNzE3NTggTDczLjMzOTgwNjMsMjMuNDM3MTc1OCBDNzQuMjU0MjIxNiwyMy40MzcxNzU4IDc0Ljk5ODEzMzEsMjIuNjcyOTI3MiA3NC45OTgxMzMxLDIxLjczMzk4MzYgTDc0Ljk5ODEzMzEsMTcuMzMzMzYzOSBDNzQuOTk4MTMzMSwxNi4zOTQyNTA2IDc0LjI1NDIyMTYsMTUuNjMwNjgwNSA3My4zMzk4MDYzLDE1LjYzMDY4MDUgTDcyLjA5NTI3NzIsMTUuNjMwNjgwNSBDNzEuOTI5MDY0OSwxNi4wODEzMjYgNjkuODk4Njk5OCwyMS40MTAyMDQxIDY1LjM5MjgxMTIsMjUuNzc2MDU0NSBDNjUuMTQ3MzcxNiwyNi4wMTM2NzM3IDY0LjgyNTY3NTcsMjYuMTQ0Nzc5OCA2NC40ODg5NTk2LDI2LjE0NDc3OTggQzY0LjEyMjAzODEsMjYuMTQ0Nzc5OCA2My43ODE1MjU2LDI1Ljk5Mzk5OTMgNjMuNTI5OTc4OSwyNS43MTk3NDUgQzYzLjAzMjAwMjIsMjUuMTc2NjYzOCA2My4wNTYyNjU2LDI0LjMxODExMzkgNjMuNTg0OTQyOSwyMy44MDY0MDk5IEM2Ni42NDYyNTM0LDIwLjg0MDE1NTQgNjguNDcxNzgyOCwxNy4zMDUyMDkxIDY5LjIyNzU3ODQsMTUuNjMwNjgwNSBMNjUuMTM5Nzc5LDE1LjYzMDY4MDUgQzYzLjk1MjE5NDUsMTcuNjA0NTY1MiA2MS4zNzU2NTYxLDIxLjQxMjU3ODYgNTcuNjIxNjAxNywyNC40MTU0NjgyIEM1Ny4zODgyMTEzLDI0LjYwMjIwNTQgNTcuMTA5MSwyNC43MDA5MTY2IDU2LjgxMzMxOCwyNC43MDA5MTY2IEM1Ni40MDM0ODE3LDI0LjcwMDkxNjYgNTYuMDIzODUwOCwyNC41MTA0NDggNTUuNzcyNzk5MywyNC4xNzg4NjY2IEM1NS41NTY1NzQ3LDIzLjg5MzI0ODcgNTUuNDYxNTAxOSwyMy41Mzg3NzAzIDU1LjUwNDkxMTksMjMuMTc5ODgyMiBDNTUuNTQ4MzIxOSwyMi44MjA4MjQ0IDU1LjcyNTU5MywyMi41MDA3NzYzIDU2LjAwMzIxODcsMjIuMjc5MTAwMSBDNTguNjY0NDMxMywyMC4xNDk4NTU1IDYwLjcwMTIzMzYsMTcuNTMzODM5MiA2MS45ODUwNDYyLDE1LjYzMDY4MDUgTDU3LjYzMjY2MDUsMTUuNjMwNjgwNSBDNTcuMDY5OTgxNSwxNi4xNjY0Njg2IDU2LjQ1Njk2MDIsMTYuNjc4ODUxIDU1LjgwMzMzNDgsMTcuMTIxMDE2MSBDNTUuNTg3NDQwNCwxNy4yNjcyMTcyIDU1LjMzNzcwOTIsMTcuMzQzODc5NSA1NS4wODAzODU1LDE3LjM0Mzg3OTUgQzU0LjYzNDg5NjksMTcuMzQzODc5NSA1NC4yMjMwNzk5LDE3LjExNjI2NzEgNTMuOTc4MzAwNSwxNi43MzQ0ODIgQzUzLjc4NTE4MzksMTYuNDMyNDEyMiA1My43MTc4NDA3LDE2LjA3MTMxOTIgNTMuNzg4NDg1MSwxNS43MTcxOCBDNTMuODU5NjI0NiwxNS4zNjI1MzIxIDU0LjA2MDgyOSwxNS4wNTgwODc3IDU0LjM1NDc5NTMsMTQuODU5MzA4NSBDNTYuMDg3Mzk3NywxMy42ODcxNTU0IDU3LjUzODc0MzIsMTEuODM2NzQ0NSA1OC4zNDEyNDk5LDEwLjY4NjY0MDQgQzU3LjA0OTY3OTUsOS45ODMyODA2OCA1Ni4xNjc0NTAzLDguNTg3OTI0OTggNTYuMTY3NDUwMyw2Ljk4NDI5MjA2IEw1Ni4xNjc0NTAzLDQuMjEyOTE1ODUgQzU2LjE2NzQ1MDMsMS45MDM1NDg3NSA1Ny45OTU2MjA3LDAuMDI0MzA0NjY0IDYwLjI0MzAzNTYsMC4wMjQzMDQ2NjQgTDcxLjgyMDYyMjUsMC4wMjQzMDQ2NjQgQzc0LjA2ODIwMjUsMC4wMjQzMDQ2NjQgNzUuODk2ODY4LDEuOTAzNTQ4NzUgNzUuODk2ODY4LDQuMjEyOTE1ODUgTDc1Ljg5Njg2OCw2Ljk4NDI5MjA2IEM3NS44OTY4NjgsOS4yOTMzMTk5NCA3NC4wNjgyMDI1LDExLjE3MTg4NTYgNzEuODIwNjIyNSwxMS4xNzE4ODU2IEw2MS4yMDAzNjU3LDExLjE3MTg4NTYgQzYxLjAzNTgwMzksMTEuNDQzNTk1OCA2MC42MjE2NzYxLDEyLjEwMzAyNzMgNjAuMDA5NjQ1MSwxMi45MjI1Njc3IEw3My4zMzk4MDYzLDEyLjkyMjU2NzcgWiBNNTguODAyMjUzOCw2Ljk4NDI5MjA2IEM1OC44MDIyNTM4LDcuODAwNDQwMyA1OS40NDg0NTE2LDguNDY0OTYgNjAuMjQzMDM1Niw4LjQ2NDk2IEw3MS44MjA2MjI1LDguNDY0OTYgQzcyLjYxNTM3MTUsOC40NjQ5NiA3My4yNjE4OTk0LDcuODAwNDQwMyA3My4yNjE4OTk0LDYuOTg0MjkyMDYgTDczLjI2MTg5OTQsNC4yMTI5MTU4NSBDNzMuMjYxODk5NCwzLjM5NjU5OCA3Mi42MTUzNzE1LDIuNzMxNzM5MDggNzEuODIwNjIyNSwyLjczMTczOTA4IEw2MC4yNDMwMzU2LDIuNzMxNzM5MDggQzU5LjQ0ODQ1MTYsMi43MzE3MzkwOCA1OC44MDIyNTM4LDMuMzk2NTk4IDU4LjgwMjI1MzgsNC4yMTI5MTU4NSBMNTguODAyMjUzOCw0LjI0NDQ2MjczIEw2OS43NjcxNDk1LDQuMjQ0NDYyNzMgQzcwLjQ5MzU2NDksNC4yNDQ0NjI3MyA3MS4wODQ3OTg4LDQuODUxODI0OTIgNzEuMDg0Nzk4OCw1LjU5ODI2NDc0IEM3MS4wODQ3OTg4LDYuMzQ1MzgyOTkgNzAuNDkzNTY0OSw2Ljk1MjIzNjM2IDY5Ljc2NzE0OTUsNi45NTIyMzYzNiBMNTguODAyMjUzOCw2Ljk1MjIzNjM2IEw1OC44MDIyNTM4LDYuOTg0MjkyMDYgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1My42NzM1MDYsIDAuMDAwMDAwKSI+PC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
    this.src = this.imgLogo ? this.imgLogo : url;
    this.erweimaSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXCAYAAAEGz+n6AAAAAXNSR0IArs4c6QAAMSJJREFUeAHN3Qe0XVXVL/CV5NIFFMWuXIgVxS42lIgFxd67Yu+996jYeyexgF3E3rEAggqiInbFi8GKdAgBAoTs9//N6zrZnFxQvvG+N94aY2efs/cqc801y3/Otc5Na5emfOtb35pL/eGa17zm8Mc//nHw+QEPeMBw+ctffnjd6143bLLJJsNee+01LFq0aFi8+eabt1ve8pbtJje5SXvZy17WzjzzzHab29ymnXPOOW1mZqb94Ac/aKecckq7xS1u0WbOPffctnr16rZkyZJ24oknth122KGtW7eunXTSSe28885rt771rdu73/3udq973au1733ve3PXuta1huOOO26YnZ0dvv71rw8XXnjhoJx66qnD7373u2HNmjX1feb8889vf/vb39qRRx7Zrna1q7Vly5a1LT95cttx6yXtmL22bn/961/bD3/4w5aOmoo1we2333444YQThvXr1w83/fIpwyuPnu/tSle6Uk34yle+8rAY8S960Yva/e9//3bjG9+4nXzyye3g3Ze0+6z/Q1uxYkX75z//2cKJ9ohHPKI1rMMWdKE1ww6Z9PCvf/1r2GyzzYaQWez0fpHKX/jCF5Z+97vfbd/5znfazW52s/bJT36y3fnOd26//e1v2y9/+cuGYz5Xz4sXL65F0TMOuLte//rX16L4bC6XZrGbFRve/OY3F12YaZSs3rDNNtsMW2yxxZAFqndPeMIThhm0KZlM++Y3v9kuuOCCtssuu9Qq4v+f/vSnEodf/epXra1atWp42tOeVqv3kY98pHpJ5SETGm5+85sPe+yxx3DGGWcM1qEZ1qTWrl073Pe+961lPfvss+uOhIMOOqgmi5WLsSvsa6QvYlok7Xno2rpn9dqee+5ZkheZaSRusJTXuMY1hk984hPV485fOqXunluwa1/72vV9SR4sf/SjH9223nrr9tnPfraFzrbPHkurZ2J6/PHHl7gapVj30pe+tJj+4Ac/uFhnYpe5zGWGP//5z0Okcbjc5S5XTFhy2mmnLacVBOZGN7pRy9K3NGqHH354izy0293udu1d73pXzWmyKBagL/Ouu+5ai4JTUbdaGLSXbFj3LMBgNSmuz9G54alPferw97//vb7ToIjwcNZZZ9Va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';
  },

  watch: {
    loginFlg: function loginFlg(val, oldVal) {
      if (val !== oldVal) {
        this.loginFlg = val;
      }
    }
  },
  methods: {
    logout: function logout() {
      this.$emit('logout');
    },
    myRegis: function myRegis() {
      this.$emit('myRegis');
    },
    release: function release() {
      this.$emit('release');
    },
    organizer: function organizer() {
      this.$emit('organizer');
    },
    login: function login() {
      this.$emit('login');
    }
  }
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('header', {
      staticClass: "emfe-header-c-new"
    }, [_c('div', {
      staticClass: "emfe-header-c-new-main"
    }, [_c('div', {
      staticClass: "emfe-header-c-new-eye"
    }, [_c('img', {
      staticClass: "emfe-header-c-new-eye-img",
      attrs: {
        "src": _vm.src
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-c-new-info"
    }, [_c('emfe-link', {
      attrs: {
        "className": "emfe-header-c-new",
        "routers": {}
      },
      on: {
        "click": _vm.myRegis
      }
    }, [_vm._v("我的报名")]), _vm._v(" "), _c('emfe-link', {
      attrs: {
        "className": "emfe-header-c-new",
        "routers": {}
      },
      on: {
        "click": _vm.organizer
      }
    }, [_vm._v("主办方管理")]), _vm._v(" "), _c('emfe-tooltip', {
      staticStyle: {
        "position": "relative"
      },
      attrs: {
        "styles": {
          'left': '-28px',
          'top': '50px',
          'position': 'absolute'
        },
        "theme": "light",
        "placement": "bottom"
      }
    }, [_c('emfe-link', {
      attrs: {
        "className": "emfe-header-c-new",
        "routers": {}
      },
      slot: "render"
    }, [_vm._v("下载App")]), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-c-new-erweima",
      slot: "tip"
    }, [_c('img', {
      staticClass: "emfe-header-c-new-erweima-img",
      attrs: {
        "src": _vm.erweimaSrc,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "emfe-header-c-new-erweima-text"
    }, [_vm._v("扫一扫，下载App")])])], 1), _vm._v(" "), _c('emfe-button', {
      attrs: {
        "className": "emfe-header-c-new",
        "theme": "default",
        "type": "fabu"
      },
      on: {
        "click": _vm.release
      }
    }, [_vm._v("免费发活动")]), _vm._v(" "), _vm.loginFlg ? _c('emfe-link', {
      staticClass: "emfe-header-c-new-logout",
      attrs: {
        "routers": {}
      },
      on: {
        "click": _vm.logout
      }
    }, [_vm._v("退出")]) : _vm._e()], 1)])]);
  }, staticRenderFns: [] };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeFooter = __webpack_require__(135);

var _EmfeFooter2 = _interopRequireDefault(_EmfeFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeFooter2.default.install = function (Vue) {
  Vue.component(_EmfeFooter2.default.name, _EmfeFooter2.default);
};

exports.default = _EmfeFooter2.default;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(136),
  /* template */
  __webpack_require__(137),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeFooter',
  props: {
    content: {
      type: String,
      required: true
    },
    className: String
  },
  computed: {
    footerName: function footerName() {
      return [(0, _defineProperty3.default)({}, this.className + '-footer', !!this.className)];
    }
  }
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('footer', {
      staticClass: "emfe-footer",
      class: _vm.footerName
    }, [_vm._v(_vm._s(_vm.content))]);
  }, staticRenderFns: [] };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeFooterC = __webpack_require__(139);

var _EmfeFooterC2 = _interopRequireDefault(_EmfeFooterC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeFooterC2.default.install = function (Vue) {
  Vue.component(_EmfeFooterC2.default.name, _EmfeFooterC2.default);
};

exports.default = _EmfeFooterC2.default;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(140),
  /* template */
  __webpack_require__(141),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeFooterC',
  props: {
    content: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      defalut: ''
    }
  }
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('footer', {
      staticClass: "emfe-footer-c"
    }, [_vm.logo ? _c('img', {
      staticClass: "emfe-footer-c-logo",
      attrs: {
        "src": _vm.logo
      }
    }) : _vm._e(), _vm._v(" "), _c('p', {
      staticClass: "emfe-footer-c-text"
    }, [_vm._v(_vm._s(_vm.content))])]);
  }, staticRenderFns: [] };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeCopy = __webpack_require__(143);

var _EmfeCopy2 = _interopRequireDefault(_EmfeCopy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeCopy2.default.install = function (Vue) {
  Vue.component(_EmfeCopy2.default.name, _EmfeCopy2.default);
};

exports.default = _EmfeCopy2.default;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(145),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeCopy',
  props: {
    className: String,
    copyValue: String,
    read: {
      type: [String, Boolean],
      default: true
    },
    text: {
      type: String,
      default: '表单页面：'
    },
    title: {
      type: String,
      default: '复制网址'
    }
  },
  computed: {
    copyName: function copyName() {
      return this.className ? this.className + '-copy' : '';
    },
    textName: function textName() {
      return this.className ? this.className + '-text' : '';
    },
    valueName: function valueName() {
      return this.className ? this.className + '-value' : '';
    },
    btnName: function btnName() {
      return this.className ? this.className + '-btn' : '';
    },
    iconName: function iconName() {
      return this.className ? this.className + '-icon' : '';
    }
  },
  methods: {
    copyHandle: function copyHandle() {
      var copyInput = this.$refs.copyInput;

      copyInput.select();
      try {
        if (document.execCommand('copy', false, null)) {
          document.execCommand('Copy');
          this.$emit('copySuccess');
          this.$emit('success');
        } else {
          this.$emit('copyFail');
          this.$emit('error');
        }
      } catch (err) {
        this.$emit('copyFail');
        this.$emit('error');
      }
      copyInput.blur();
    }
  }
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-copy",
      class: _vm.copyName
    }, [_vm.text ? _c('span', {
      class: _vm.textName
    }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), _c('input', {
      ref: "copyInput",
      staticClass: "emfe-copy-input",
      class: _vm.valueName,
      attrs: {
        "readonly": _vm.read
      },
      domProps: {
        "value": _vm.copyValue
      }
    }), _vm._v(" "), _c('a', {
      staticClass: "emfe-copy-btn",
      class: _vm.btnName,
      attrs: {
        "title": _vm.title
      },
      on: {
        "click": _vm.copyHandle
      }
    }, [_c('emfe-icon', {
      staticClass: "emfe-copy-btn-icon",
      class: _vm.iconName,
      attrs: {
        "type": "fuzhi"
      },
      on: {
        "icon-click": _vm.copyHandle
      }
    })], 1)]);
  }, staticRenderFns: [] };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeUpload = __webpack_require__(147);

var _EmfeUpload2 = _interopRequireDefault(_EmfeUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeUpload2.default.install = function (Vue) {
  Vue.component(_EmfeUpload2.default.name, _EmfeUpload2.default);
};

exports.default = _EmfeUpload2.default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(157),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _upload = __webpack_require__(149);

var _upload2 = _interopRequireDefault(_upload);

var _assist = __webpack_require__(12);

var _body = __webpack_require__(150);

var _index = __webpack_require__(52);

var _index2 = _interopRequireDefault(_index);

var _ajax = __webpack_require__(156);

var _ajax2 = _interopRequireDefault(_ajax);

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uploadJpeg = 'image/jpeg';
var pointOldLeft = 0;
var nenwTopOld = 0;
var iconBoxHeight = 70;
var iconBoxWidth = 118;
var firstDot = false;exports.default = {
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
      interceptModal: false,
      interceptWidth: 360,
      interceptHeight: 400,
      interceptLeft: 0,
      interceptTop: 0,
      interceptCanvasWidth: 360,
      interceptCanvasHeight: 400,
      dragWidth: 'auto',
      dragHeight: 400,
      dragPaddingLeft: 0,
      dragPaddingTop: 0,
      canvas: null,
      canvasContext: null,
      iconText: this.buttonText,
      plusText: '+'
    };
  },

  props: {
    type: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['plus', 'icon']);
      },

      default: 'plus'
    },
    disabled: Boolean,
    className: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    data: {
      type: Object
    },
    name: {
      type: String,
      default: 'file'
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    intercept: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    interceptSync: {
      type: Boolean,
      default: true
    },
    format: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxSize: {
      type: Number
    },
    url: String,
    success: {
      type: Function,
      default: function _default() {}
    },
    exceededSize: {
      type: Function,
      default: function _default() {}
    },
    formatError: {
      type: Function,
      default: function _default() {}
    },
    beforeUpload: {
      type: Function,
      default: function _default() {}
    },
    error: {
      type: Function,
      default: function _default() {}
    },
    close: {
      type: Function,
      default: function _default() {}
    },
    buttonText: {
      type: String,
      default: '上传图片'
    },
    theme: {
      type: String,
      default: 'default'
    },
    fileType: {
      type: String,
      default: 'image'
    }
  },
  computed: {
    uploadName: function uploadName() {
      return ['emfe-upload-' + this.type, (0, _defineProperty3.default)({}, this.className + '-upload', !!this.className), (0, _defineProperty3.default)({}, this.className + '-upload-' + this.type, !!this.className), {
        'emfe-upload-disabled': this.disabled || !this.canUpload
      }, (0, _defineProperty3.default)({}, this.className + '-upload-disabled', (this.disabled || !this.canUpload) && !!this.className)];
    },
    iconName: function iconName() {
      return this.className ? this.className + '-upload-icon-btn' : '';
    },
    btnName: function btnName() {
      return [['emfe-upload-' + this.type + '-btn'], (0, _defineProperty3.default)({}, this.className + '-upload-' + this.type + '-btn', !!this.className)];
    },
    imageName: function imageName() {
      return [['emfe-upload-' + this.type + '-image'], (0, _defineProperty3.default)({}, this.className + '-upload-' + this.type + '-image', !!this.className)];
    },
    imgName: function imgName() {
      return [['emfe-upload-' + this.type + '-image'], (0, _defineProperty3.default)({}, this.className + '-upload-' + this.type + '-img', !!this.className)];
    },
    fileName: function fileName() {
      return [['emfe-upload-' + this.type + '-file'], (0, _defineProperty3.default)({}, this.className + '-upload-' + this.type + '-file', !!this.className), {
        'emfe-upload-file-disabled': this.disabled || !this.canUpload
      }];
    }
  },
  mounted: function mounted() {
    if (this.url) {
      this.initImg(this.url);
    }
    this.initIntercept();
  },

  methods: {
    initIntercept: function initIntercept() {
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
    initImg: function initImg(val) {
      var _this = this;

      if (val) {
        var imgObject = new Image();
        imgObject.src = val;
        imgObject.onload = function () {
          _this.src = _this.url;
          setTimeout(_this.setAlign.bind(_this), 0);
        };
      } else {
        this.src = '';
      }
    },
    openInterceptModal: function openInterceptModal() {
      (0, _body.openMask)();
      this.interceptModal = true;
    },
    closeInterceptModal: function closeInterceptModal() {
      (0, _body.closeMask)();
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
      var _this2 = this;

      var img = new Image();
      img.src = this.img;
      img.onload = function () {
        _this2.canvas = document.createElement('canvas');
        _this2.canvasContext = _this2.canvas.getContext('2d');
        _this2.canvas.width = _this2.interceptCanvasWidth;
        _this2.canvas.height = _this2.interceptCanvasHeight;
        _this2.getImageUrl();
        _this2.postHandle((0, _upload2.default)(_this2.clipData, uploadJpeg));
        _this2.closeInterceptModal();
      };
    },
    getImageUrl: function getImageUrl() {
      var canvasContext = this.canvasContext,
          previewImg = this.previewImg;
      var clientWidth = previewImg.clientWidth,
          clientHeight = previewImg.clientHeight;

      var left = this.interceptLeft;
      var top = this.interceptTop;
      canvasContext.drawImage(previewImg, -left, -top, clientWidth, clientHeight);
      this.clipData = this.canvas.toDataURL(uploadJpeg);
    },
    dragPosMove: function dragPosMove(ev, left, top) {
      this.interceptLeft = left;
      this.interceptTop = top;
      if (this.interceptLeft < 5) {
        this.interceptLeft = 2.5;
      }
    },
    pointMoveChangeSize: function pointMoveChangeSize(ev, left, mouseLeft, top, mouseTop, lDir, type) {
      var cWidth = this.interceptCanvasWidth;
      var cHeight = this.interceptCanvasHeight;
      var widthStep = -left;
      var heightStep = -top;

      if (type === 'top') {
        var lChangeTop = 5 + mouseTop;
        heightStep = nenwTopOld - lChangeTop;
        nenwTopOld = lChangeTop;

        if (firstDot) {
          firstDot = false;
          heightStep = lChangeTop > 0 ? 1 : -1;
        }
      } else if (type === 'right') {
        var lChange = left - (cWidth - 5);
        widthStep = lChange;

        if (firstDot) {
          firstDot = false;
          widthStep = lChange > 0 ? 1 : -1;
        }
      } else if (type === 'bottom') {
        var _lChangeTop = top - (cHeight - 5);
        heightStep = _lChangeTop;

        if (firstDot) {
          firstDot = false;
          heightStep = _lChangeTop > 0 ? 1 : -1;
        }
      } else if (type === 'left') {
        var _lChange = pointOldLeft - left;
        widthStep = _lChange;

        if (firstDot) {
          firstDot = false;
          widthStep = _lChange > 0 ? 1 : -1;
        }
      } else if (type === 'sw') {
        var _lChange2 = pointOldLeft - left;
        var _lChangeTop2 = top - (cHeight - 5);
        widthStep = _lChange2;
        heightStep = _lChangeTop2;

        if (firstDot) {
          firstDot = false;
          widthStep = _lChange2 > 0 ? 1 : -1;
          heightStep = _lChangeTop2 > 0 ? 1 : -1;
        }
      } else if (type === 'nw') {
        var _lChange3 = pointOldLeft - left;
        widthStep = _lChange3;
        var _lChangeTop3 = 5 + mouseTop;
        heightStep = nenwTopOld - _lChangeTop3;
        nenwTopOld = _lChangeTop3;

        if (firstDot) {
          firstDot = false;
          widthStep = _lChange3 > 0 ? 1 : -1;
          heightStep = _lChangeTop3 > 0 ? 1 : -1;
        }
      } else if (type === 'ne') {
        var _lChangeTop4 = 5 + mouseTop;
        heightStep = nenwTopOld - _lChangeTop4;
        nenwTopOld = _lChangeTop4;

        if (firstDot) {
          firstDot = false;
          heightStep = _lChangeTop4 > 0 ? 1 : -1;
        }
      }

      if (this.interceptSync) {
        heightStep = cHeight * widthStep / cWidth;
      }

      var canWidth = this.intercept[0] < cWidth + widthStep;
      var canHeight = this.intercept[1] < cHeight + heightStep;

      var heng = mouseLeft + this.interceptLeft <= this.dragWidth - 5;
      var shu = mouseTop + this.interceptTop <= this.dragHeight - 5;

      if (this.interceptSync) {
        if (heng && shu && canWidth && canHeight && (0, _assist.getElementLeft)(this.$refs.previewImg) < ev.clientX - 3 && (0, _assist.getElementTop)(this.$refs.previewImg) < ev.clientY - 3) {
          this.interceptCanvasWidth += widthStep;
          this.interceptCanvasHeight += heightStep;
        }
      } else {
        if (heng && canWidth && (this.interceptLeft > 2.5 || type === 'se' || type === 'right')) {
          this.interceptCanvasWidth += widthStep;
        }

        if (shu && canHeight && (this.interceptLeft > 2.5 || type === 'se') && this.interceptTop >= 0) {
          this.interceptCanvasHeight += heightStep;
        }
      }

      if (this.interceptSync) {
        if (heng && shu && (0, _assist.getElementLeft)(this.$refs.previewImg) < ev.clientX - 3 && (0, _assist.getElementTop)(this.$refs.previewImg) < ev.clientY - 3 && canWidth && canHeight) {
          if (type === 'nw' || type === 'sw') {
            this.interceptLeft -= widthStep;
            if (this.interceptLeft < 5) {
              this.interceptLeft = 2.5;
            }
          }

          if (type === 'nw' || type === 'ne') {
            this.interceptTop -= heightStep;
            if (this.interceptTop < 5) {
              this.interceptTop = 2.5;
            }
          }
          pointOldLeft = left;
        }
      } else {
        if (canWidth && (type === 'nw' || type === 'sw' || type === 'left')) {
          this.interceptLeft -= widthStep;
          if (this.interceptLeft < 5) {
            this.interceptLeft = 2.5;
          }
          pointOldLeft = left;
        }

        if (canHeight && (type === 'nw' || type === 'ne' || type === 'top') && (this.interceptLeft > 2.5 || type === 'se') && this.interceptTop > 2.5) {
          this.interceptTop -= heightStep;
        }
      }
    },
    upDot: function upDot() {
      firstDot = true;
    },
    nwPosMove: function nwPosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, left, left, top, top, lDir, 'nw');
    },
    nePosMove: function nePosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, this.interceptCanvasWidth - left, left, this.interceptCanvasHeight - top, top, lDir, 'ne');
    },
    swPosMove: function swPosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, left, left, top, top, lDir, 'sw');
    },
    sePosMove: function sePosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, this.interceptCanvasWidth - left, left, this.interceptCanvasHeight - top, top, lDir, 'se');
    },
    topPosMove: function topPosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, left, left, top, top, lDir, 'top');
    },
    rightPosMove: function rightPosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, left, left, top, top, lDir, 'right');
    },
    bottomPosMove: function bottomPosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, left, left, top, top, lDir, 'bottom');
    },
    leftPosMove: function leftPosMove(ev, left, top, lDir) {
      this.pointMoveChangeSize(ev, left, left, top, top, lDir, 'left');
    },
    setAlign: function setAlign(res) {
      var _$refs$img = this.$refs.img,
          clientWidth = _$refs$img.clientWidth,
          clientHeight = _$refs$img.clientHeight;

      var width = res ? res.width : clientWidth;
      var height = res ? res.height : clientHeight;
      if (width !== 0 && height !== 0) {
        if (width > height) {
          var newImgScale = iconBoxWidth / width;

          if (height * newImgScale > iconBoxHeight) {
            this.align = 'vertical';
          } else {
            this.align = 'horizontal';
          }
        } else if (width < height) {
          this.align = 'vertical';
        } else {
          this.align = 'normal';
        }
      }
      this.canShow = true;
    },
    change: function change(e) {
      var _this3 = this;

      var files = e.target.files;

      if (!files) {
        return;
      }

      var postFiles = Array.prototype.slice.call(files);

      if (this.intercept.length === 0) {
        postFiles.forEach(function (file) {
          _this3.postHandle(file);
        });
      } else {
        var reader = new FileReader();
        reader.readAsDataURL(postFiles[0]);
        reader.onload = function (readerEvent) {
          var myImage = new Image();
          myImage.src = readerEvent.target.result;

          myImage.onload = function () {
            _this3.openInterceptModal();
            _this3.img = readerEvent.target.result;
            setTimeout(function () {
              _this3.drag1.length = 0;
              _this3.drag1.push(_this3.$refs.drag1);
              _this3.previewImg = _this3.$refs.previewImg;
              _this3.dragWidth = _this3.previewImg.clientWidth;
              _this3.dragHeight = _this3.previewImg.clientHeight;
              _this3.dragPaddingLeft = (_this3.dragWidth - _this3.interceptWidth) / 2;
              _this3.dragPaddingTop = (_this3.dragHeight - _this3.interceptHeight) / 2;
              var imgScale = _this3.dragHeight / _this3.dragWidth;

              if (_this3.dragWidth > _this3.interceptWidth) {
                _this3.dragWidth = _this3.interceptWidth;
                _this3.dragHeight = imgScale * _this3.dragWidth;
                _this3.dragPaddingLeft = (_this3.interceptWidth - _this3.dragWidth) / 2;
                _this3.dragPaddingTop = (_this3.interceptHeight - _this3.dragHeight) / 2;
              }

              var interceptCanvasScale = _this3.interceptCanvasWidth / _this3.interceptCanvasHeight;
              if (_this3.dragWidth < _this3.interceptCanvasWidth) {
                _this3.interceptCanvasWidth = _this3.dragWidth;
                _this3.interceptCanvasHeight = interceptCanvasScale / _this3.interceptCanvasWidth;
              }

              if (_this3.dragHeight < _this3.interceptCanvasHeight) {
                _this3.interceptCanvasHeight = _this3.dragHeight;
                _this3.interceptCanvasWidth = interceptCanvasScale / _this3.interceptCanvasHeight;
              }

              _this3.interceptLeft = (_this3.dragWidth - _this3.intercept[0]) / 2;
              _this3.interceptTop = (_this3.dragHeight - _this3.intercept[1]) / 2;
            }, 0);
          };
        };
      }
    },
    postHandle: function postHandle(file) {
      var _this4 = this;

      if (this.format.length) {
        var fileFormat = file.name.split('.').pop().toLocaleLowerCase();
        var checked = this.format.some(function (item) {
          return item.toLocaleLowerCase() === fileFormat;
        });
        if (!checked) {
          this.formatError(file, this.fileList, _index2.default);
          this.$emit('formatError', file, this.fileList, _index2.default);
          return false;
        }
      }

      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.exceededSize(file, this.fileList, _index2.default);
          this.$emit('exceededSize', file, this.fileList, _index2.default);
          return false;
        }
      }

      if (this.canUpload) {
        this.handleStart(file);
        this.beforeUpload(file, _index2.default);
        this.$emit('beforeUpload', file, _index2.default);
        this.canNotLoad();
        (0, _ajax2.default)({
          headers: this.headers,
          withCredentials: this.withCredentials,
          file: file,
          data: this.data,
          filename: this.name,
          action: this.action,
          onSuccess: function onSuccess(res) {
            if (res.code === _contant2.default.AJAX_SUCCESS) {
              _this4.handleSuccess(res.data, file);
            } else {
              _this4.handleError('上传失败', res, file);
            }
          },
          onError: function onError(err, response) {
            _this4.handleError(err, response, file);
          }
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
        showProgress: true
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
          this.success(res, fileData, this.fileList, _index2.default);
          this.$emit('success', res, fileData, this.fileList, _index2.default);
        }
      }
    },
    handleError: function handleError(err, response, file) {
      var fileData = this.getFile(file);
      var fileList = this.fileList;

      fileData.status = 'fail';
      this.canLoad();
      this.resetInputFile();

      fileList.splice(fileList.indexOf(fileData), 1);
      this.error(err, response, file, _index2.default);
      this.$emit('error', err, response, file, _index2.default);
    },
    getFile: function getFile(file) {
      var fileList = this.fileList;
      var target = void 0;
      fileList.every(function (item) {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    loadImg: function loadImg(src, res, fileData) {
      var _this5 = this;

      var img = new Image();
      img.src = src;
      img.onload = function () {
        _this5.src = src;
        setTimeout(_this5.setAlign.bind(_this5, res), 0);
        _this5.canLoad();
        _this5.success(res, fileData, _this5.fileList, _index2.default);
        _this5.$emit('success', res, fileData, _this5.fileList, _index2.default);
      };
    },
    closeFn: function closeFn() {
      this.closeCommon();
    },
    closePlusFn: function closePlusFn() {
      if (!this.disabled) {
        this.closeCommon();
      }
    },
    closeCommon: function closeCommon() {
      this.src = '';
      this.canShow = false;
      this.resetInputFile();
      this.close(_index2.default);
      this.$emit('close', _index2.default);
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
        this.plusText = '···';
      }
    }
  },
  watch: {
    url: function url(val, oldVal) {
      if (val !== oldVal) {
        this.initImg(val);
      }
    }
  }
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data, type) {
  var newData = data.split(',')[1];
  newData = window.atob(newData);
  var ia = new Uint8Array(newData.length);
  for (var i = 0; i < newData.length; i++) {
    ia[i] = newData.charCodeAt(i);
  }

  return new Blob([ia], {
    type: type
  });
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var handler = exports.handler = function handler(event) {
  event.preventDefault();
  event.stopPropagation();
};

var openMask = exports.openMask = function openMask() {
  document.body.addEventListener('touchmove', handler, false);
  document.body.addEventListener('wheel', handler, false);
};

var closeMask = exports.closeMask = function closeMask() {
  document.body.removeEventListener('touchmove', handler, false);
  document.body.removeEventListener('wheel', handler, false);
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(152);

var _vue2 = _interopRequireDefault(_vue);

var _EmfeMessage = __webpack_require__(153);

var _EmfeMessage2 = _interopRequireDefault(_EmfeMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeMessage2.default.newInstance = function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var Instance = new _vue2.default({
    data: props,
    render: function render(h) {
      return h(_EmfeMessage2.default, {
        props: props
      });
    }
  });

  var component = Instance.$mount();
  document.body.appendChild(component.$el);
  var notification = Instance.$children[0];

  return {
    notice: function notice(noticeProps) {
      notification.add(noticeProps);
    }
  };
};

exports.default = _EmfeMessage2.default;

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_152__;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(155),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(45);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var seed = 0;
var now = Date.now();

function getUuid() {
  return 'ivuNotification_' + now + '_' + seed++;
}

exports.default = {
  name: 'emfe-message',
  data: function data() {
    return {
      notices: []
    };
  },

  methods: {
    add: function add(notice) {
      var name = notice.name || getUuid();

      var newNotice = (0, _assign2.default)({
        content: '',
        name: name,
        type: 'info',
        style: {},
        close: function close() {}
      }, notice);

      this.notices.push(newNotice);

      setTimeout(this.close.bind(this, name), notice.delayTime);
    },
    close: function close(name) {
      var _this = this;

      this.notices.every(function (notice, noticeIndex) {
        _this.notices.splice(noticeIndex, 1);
        notice.close();
        return notice.name !== name;
      });
    }
  }
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('transition-group', {
      staticClass: "emfe-message-box",
      attrs: {
        "tag": "div",
        "name": "fade"
      }
    }, _vm._l(_vm.notices, function (notice, noticeIndex) {
      return _c('div', {
        key: noticeIndex,
        staticClass: "emfe-message-main",
        class: ["emfe-message-" + notice.type],
        style: notice.style
      }, [_c('p', {
        staticClass: "emfe-message-text"
      }, [_vm._v(_vm._s(notice.content))])]);
    }));
  }, staticRenderFns: [] };

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

exports.default = upload;

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getError(action, option, xhr) {
  var msg = 'fail to post ' + action + ' ' + xhr.status + '\'';
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

  var formData = new FormData();

  if (option.data) {
    (0, _keys2.default)(option.data).map(function (key) {
      return formData.append(key, option.data[key]);
    });
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

  (0, _keys2.default)(headers).forEach(function (item) {
    if (_o2.default.hOwnProperty(headers, item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  });

  xhr.send(formData);
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-upload",
      class: _vm.uploadName
    }, [_vm.type === 'icon' ? [_c('emfe-button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.src,
        expression: "!src"
      }],
      attrs: {
        "disabled": _vm.disabled || !_vm.canUpload,
        "theme": _vm.theme,
        "type": "shangchuan",
        "className": _vm.iconName
      }
    }, [_vm._v(_vm._s(_vm.iconText))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.src,
        expression: "!src"
      }],
      ref: "upload",
      staticClass: "emfe-upload-file",
      class: _vm.fileName,
      attrs: {
        "disabled": _vm.disabled || !_vm.canUpload,
        "type": "file"
      },
      on: {
        "change": _vm.change
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.src,
        expression: "src"
      }],
      staticClass: "emfe-upload-icon-wrap",
      style: {
        opacity: _vm.canShow ? 1 : 0
      }
    }, [_c('div', {
      staticClass: "emfe-upload-icon-wrap-box",
      class: ["emfe-upload-icon-wrap-box-" + _vm.align, _vm.imageName]
    }, [_c('img', {
      ref: "img",
      staticClass: "emfe-upload-icon-wrap-box-img",
      class: ["emfe-upload-img-" + _vm.align, _vm.imgName],
      attrs: {
        "src": _vm.src
      }
    })]), _vm._v(" "), _c('i', {
      staticClass: "emfe-upload-icon-wrap-close",
      on: {
        "click": _vm.closeFn
      }
    })])] : _vm._e(), _vm._v(" "), _vm.type === 'plus' ? [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.src,
        expression: "!src"
      }],
      staticClass: "emfe-upload-btn",
      class: _vm.btnName
    }, [_vm._v(_vm._s(_vm.plusText))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.src,
        expression: "!src"
      }],
      ref: "uploadPlus",
      staticClass: "emfe-upload-file",
      class: _vm.fileName,
      attrs: {
        "disabled": _vm.disabled || !_vm.canUpload,
        "type": "file"
      },
      on: {
        "change": _vm.change
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.src,
        expression: "src"
      }],
      staticClass: "emfe-upload-plus-box",
      class: ["emfe-upload-plus-box-" + _vm.align, _vm.imageName, {
        'emfe-upload-plus-box-disabled': _vm.disabled
      }],
      style: {
        opacity: _vm.canShow ? 1 : 0
      }
    }, [_c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.src,
        expression: "src"
      }],
      ref: "img",
      class: ["emfe-upload-img-" + _vm.align, _vm.imgName],
      attrs: {
        "src": _vm.src
      }
    }), _vm._v(" "), _c('i', {
      class: ['emfe-upload-plus-close', {
        'emfe-upload-plus-box-disabled': _vm.disabled
      }],
      on: {
        "click": _vm.closePlusFn
      }
    })])] : _vm._e(), _vm._v(" "), _c('emfe-modal', {
      attrs: {
        "show": _vm.interceptModal,
        "title": "截取器",
        "okText": "保存",
        "className": "form"
      },
      on: {
        "close": _vm.formCancel,
        "cancel": _vm.formCancel,
        "ok": _vm.formOk
      }
    }, [_c('div', {
      staticClass: "emfe-upload-intercept-wrap",
      style: {
        'padding-top': _vm.dragPaddingTop + "px",
        'padding-left': _vm.dragPaddingLeft + "px"
      },
      slot: "modal-main"
    }, [_c('emfe-drag', {
      staticClass: "emfe-upload-intercept-drag",
      style: {
        width: _vm.dragWidth + "px",
        height: _vm.dragHeight + "px"
      },
      attrs: {
        "dragEl": _vm.drag1,
        "initialValue": [-_vm.interceptCanvasWidth / 2, -_vm.interceptCanvasHeight / 2],
        "limit": "true",
        "padding": [_vm.dragPaddingLeft, _vm.dragPaddingTop]
      },
      on: {
        "drag": _vm.dragPosMove
      }
    }, [_c('img', {
      ref: "previewImg",
      staticClass: "emfe-upload-intercept-img",
      style: {
        width: _vm.dragWidth + "px",
        height: _vm.dragHeight + "px"
      },
      attrs: {
        "src": _vm.img
      }
    }), _vm._v(" "), _c('div', {
      ref: "drag1",
      staticClass: "emfe-upload-intercept",
      style: {
        width: _vm.interceptCanvasWidth + "px",
        height: _vm.interceptCanvasHeight + "px",
        left: _vm.interceptLeft + "px",
        top: _vm.interceptTop + "px"
      }
    }, [_c('emfe-drag', {
      staticClass: "emfe-upload-intercept-point emfe-upload-intercept-point-nw",
      attrs: {
        "moveEle": false
      },
      on: {
        "drag": _vm.nwPosMove,
        "afterDrag": _vm.upDot
      }
    }), _vm._v(" "), _c('emfe-drag', {
      staticClass: "emfe-upload-intercept-point emfe-upload-intercept-point-ne",
      attrs: {
        "moveEle": false
      },
      on: {
        "drag": _vm.nePosMove,
        "afterDrag": _vm.upDot
      }
    }), _vm._v(" "), _c('emfe-drag', {
      staticClass: "emfe-upload-intercept-point emfe-upload-intercept-point-sw",
      attrs: {
        "moveEle": false
      },
      on: {
        "drag": _vm.swPosMove,
        "afterDrag": _vm.upDot
      }
    }), _vm._v(" "), _c('emfe-drag', {
      staticClass: "emfe-upload-intercept-point emfe-upload-intercept-point-se",
      attrs: {
        "moveEle": false
      },
      on: {
        "drag": _vm.sePosMove,
        "afterDrag": _vm.upDot
      }
    }), _vm._v(" "), _c('emfe-drag', {
      staticClass: "emfe-upload-intercept-point emfe-upload-intercept-point-se",
      attrs: {
        "moveEle": false
      },
      on: {
        "drag": _vm.sePosMove,
        "afterDrag": _vm.upDot
      }
    }), _vm._v(" "), !_vm.interceptSync ? _c('emfe-drag', {
      staticClass: "emfe-upload-intercept-point emfe-upload-intercept-point-top",
      attrs: {
        "moveEle": false
      },
      on: {
        "drag": _vm.topPosMove,
        "afterDrag": _vm.upDot
      }
    }) : _vm._e(), _vm._v(" "), !_vm.interceptSync ? _c('emfe-drag', {
      staticClass: "emfe-upload-intercept-point emfe-upload-intercept-point-right",
      attrs: {
        "moveEle": false
      },
      on: {
        "drag": _vm.rightPosMove,
        "afterDrag": _vm.upDot
      }
    }) : _vm._e(), _vm._v(" "), !_vm.interceptSync ? _c('emfe-drag', {
      staticClass: "emfe-upload-intercept-point emfe-upload-intercept-point-bottom",
      attrs: {
        "moveEle": false
      },
      on: {
        "drag": _vm.bottomPosMove,
        "afterDrag": _vm.upDot
      }
    }) : _vm._e(), _vm._v(" "), !_vm.interceptSync ? _c('emfe-drag', {
      staticClass: "emfe-upload-intercept-point emfe-upload-intercept-point-left",
      attrs: {
        "moveEle": false
      },
      on: {
        "drag": _vm.leftPosMove,
        "afterDrag": _vm.upDot
      }
    }) : _vm._e()], 1)])], 1)])], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeDrag = __webpack_require__(159);

var _EmfeDrag2 = _interopRequireDefault(_EmfeDrag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeDrag2.default.install = function (Vue) {
  Vue.component(_EmfeDrag2.default.name, _EmfeDrag2.default);
};

exports.default = _EmfeDrag2.default;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(162),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(12);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _ie = __webpack_require__(161);

var _ie2 = _interopRequireDefault(_ie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refPos = {
  x: 0,
  y: 0,
  oldX: 0,
  oldY: 0
};

exports.default = {
  name: 'EmfeDrag',
  data: function data() {
    return {
      dragStyle: ''
    };
  },

  props: {
    className: {
      type: String,
      default: ''
    },
    limit: {
      type: [String, Boolean],
      default: false
    },
    limitPosition: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['center', 'top']);
      },

      default: 'top'
    },
    dragEl: {
      type: Array
    },
    initialValue: {
      type: [Number, Array],
      default: 0
    },
    direction: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['vertical', 'horizontal', 'all']);
      },

      default: 'all'
    },
    borderSize: {
      type: Number,
      default: 0
    },
    dragDiyStyle: {
      type: String,
      default: ''
    },
    moveEle: {
      type: Boolean,
      default: true
    },
    padding: {
      type: Array,
      default: function _default() {
        return [0, 0];
      }
    }
  },
  computed: {
    dragName: function dragName() {
      return this.className ? this.className + '-drag' : '';
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.parent = this.$el.parentNode;
    this.parentLeft = (0, _assist.getElementLeft)(this.parent);
    this.parentTop = (0, _assist.getElementTop)(this.parent);
    this.parentWidth = this.parent.clientWidth;
    this.parentHeight = this.parent.clientHeight;
    this.elWidth = this.$el.clientWidth;
    this.elHeight = this.$el.clientHeight;
    this.elCenter = this.elWidth / 2 + this.borderSize;
    this.elCenter = this.limitPosition === 'center' ? this.elCenter : 0;
    this.dragStyle = this.dragDiyStyle;
    setTimeout(function () {
      if (_this.dragEl && _this.dragEl.length > 0) {
        _this.parent = _this.dragEl[0].parentNode;
        _this.parentLeft = (0, _assist.getElementLeft)(_this.parent);
        _this.parentTop = (0, _assist.getElementTop)(_this.parent);

        _this.parentWidth = _this.parent.clientWidth;
        _this.parentHeight = _this.parent.clientHeight;
        _this.elWidth = _this.dragEl[0].clientWidth;
        _this.elHeight = _this.dragEl[0].clientHeight;
        _this.elCenter = _this.elWidth / 2 + _this.borderSize;
        _this.elCenter = _this.limitPosition === 'center' ? _this.elCenter : 0;
        _this.parentPaddingTop = parseInt((0, _assist.getStyle)(_this.parent, 'paddingTop'), 10);
        _this.parentPaddingLeft = parseInt((0, _assist.getStyle)(_this.parent, 'paddingLeft'), 10);
      }
    }, 0);
  },

  methods: {
    down: function down(e) {
      var _this2 = this;

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

      if ((0, _ie2.default)()) {
        downTop -= this.padding[1];
        downLeft -= this.padding[0];
      }

      if (this.dragEl && this.dragEl.length > 0) {
        this.parentPaddingTop = parseInt((0, _assist.getStyle)(this.parent, 'paddingTop'), 10);
        this.parentPaddingLeft = parseInt((0, _assist.getStyle)(this.parent, 'paddingLeft'), 10);

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
          } else if (downTop > elEleHeight - _this2.elHeight) {
            downTop = elEleHeight - _this2.elHeight;
          }
          if (downLeft < 0) {
            downLeft = 0;
          } else if (downLeft > elEleWidth - _this2.elWidth) {
            downLeft = elEleWidth - _this2.elWidth;
          }
          if (_this2.direction === 'vertical') {
            dragElement.style.top = downTop + 'px';
          } else if (_this2.direction === 'horizontal') {
            dragElement.style.left = downLeft + 'px';
          } else {
            dragElement.style.left = downLeft + 'px';
            dragElement.style.top = downTop + 'px';
          }
        });
      } else {
        this.elWidth = this.$el.clientWidth;
        this.elHeight = this.$el.clientHeight;
      }

      this.$emit('beforeDrag', e, downLeft, downTop);
    },
    move: function move(e) {
      var _this3 = this;

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

      if ((0, _ie2.default)()) {
        elTop -= this.padding[1];
        elLeft -= this.padding[0];
        this.parentHeight = this.parent.clientHeight;
      }

      var newMovePos = this.testLimit(elLeft, elTop);

      if (this.moveEle) {
        if (this.dragEl && this.dragEl.length > 0) {
          this.dragEl.forEach(function (dragElement) {
            if (_this3.direction === 'vertical') {
              dragElement.style.top = newMovePos[1] + 'px';
            } else if (_this3.direction === 'horizontal') {
              dragElement.style.left = newMovePos[0] + 'px';
            } else {
              dragElement.style.left = newMovePos[0] + 'px';
              dragElement.style.top = newMovePos[1] + 'px';
            }
          });
        } else {
          this.dragStyle = 'left: ' + newMovePos[0] + 'px; top: ' + newMovePos[1] + 'px';
          if (this.direction === 'vertical') {
            this.dragStyle = 'top: ' + newMovePos[1] + 'px';
          } else if (this.direction === 'horizontal') {
            this.dragStyle = 'left: ' + newMovePos[0] + 'px;';
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
        if (elLeft + this.elWidth > this.parentWidth - this.borderSize + this.elCenter) {
          elLeft = this.parentWidth - this.elWidth;
          elLeft += this.elCenter - this.borderSize;
        } else if (elLeft < this.borderSize - this.elCenter) {
          elLeft = this.borderSize - this.elCenter;
        }
        if (elTop + this.elHeight > this.parentHeight - this.borderSize + this.elCenter) {
          elTop = this.parentHeight - this.elHeight;
          elTop += this.elCenter - this.borderSize;
        } else if (elTop < this.borderSize - this.elCenter) {
          elTop = this.borderSize - this.elCenter;
        }
      }

      return [elLeft, elTop];
    }
  },
  watch: {
    dragDiyStyle: function dragDiyStyle(val, oldVal) {
      if (val !== oldVal) {
        this.dragStyle = val;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    refPos.x = 0;
    refPos.y = 0;
  }
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return !!window.ActiveXObject || 'ActiveXObject' in window;
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      ref: "drag",
      staticClass: "emfe-drag",
      class: _vm.dragName,
      style: _vm.dragStyle,
      on: {
        "mousedown": function mousedown($event) {
          $event.stopPropagation();
          _vm.down($event);
        },
        "click": function click($event) {
          $event.stopPropagation();
        }
      }
    }, [_vm._t("default")], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeColor = __webpack_require__(164);

var _EmfeColor2 = _interopRequireDefault(_EmfeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeColor2.default.install = function (Vue) {
  Vue.component(_EmfeColor2.default.name, _EmfeColor2.default);
};

exports.default = _EmfeColor2.default;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(167),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assist = __webpack_require__(12);

var _color = __webpack_require__(166);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeColor',
  data: function data() {
    return {
      colorStatus: true,
      hueMove: [],
      colorMove: [],
      hsb: {
        h: 0,
        s: 100,
        b: 100
      },
      hsbBackground: {
        h: 0,
        s: 100,
        b: 100
      },
      pointStyle: '',
      hueStyle: '',
      colorBoxStyle: 'opacity: 0;',
      oldColor: ''
    };
  },

  props: {
    value: {
      type: String,
      default: 'ff0000'
    },
    btnText: {
      type: String,
      default: '打开'
    },
    subText: {
      type: String,
      default: '确定'
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    colorName: function colorName() {
      return [(0, _defineProperty3.default)({}, this.className + '-color', !!this.className)];
    },
    btnName: function btnName() {
      return [(0, _defineProperty3.default)({}, this.className + '-color-btn', !!this.className)];
    },
    boxName: function boxName() {
      return [(0, _defineProperty3.default)({}, this.className + '-color-box', !!this.className)];
    },
    colorDrag: function colorDrag() {
      var name = this.className ? 'emfe-color-drag ' + this.className + '-color' : 'emfe-color';
      return name;
    },
    innerName: function innerName() {
      return [(0, _defineProperty3.default)({}, this.className + '-inner', !!this.className)];
    },
    hueDrag: function hueDrag() {
      var name = this.className ? 'emfe-color-hue-drag ' + this.className + '-hue' : 'emfe-color-hue';
      return name;
    },
    subName: function subName() {
      return [(0, _defineProperty3.default)({}, this.className + '-sub', !!this.className)];
    },
    rgb: function rgb() {
      return _color2.default.hsbToRgb(this.hsb);
    },
    rgbBackground: function rgbBackground() {
      return _color2.default.hsbToRgb(this.hsbBackground);
    },
    rgbStyle: function rgbStyle() {
      return 'background-color: rgb(' + this.rgbBackground.r + ', ' + this.rgbBackground.g + ', ' + this.rgbBackground.b + ')';
    },
    hex: function hex() {
      return _color2.default.rgbToHex(this.rgb);
    },
    newColor: function newColor() {
      return 'background: #' + this.hex;
    }
  },
  beforeMount: function beforeMount() {
    this.hsb = _color2.default.rgbToHsb(_color2.default.hexToRgb(this.value));
    this.hsbBackground = this.hsb;
  },
  mounted: function mounted() {
    var _this = this;

    var _$refs = this.$refs,
        hueMove = _$refs.hueMove,
        color = _$refs.color,
        colorbox = _$refs.colorbox,
        btn = _$refs.btn;

    var colorboxPadding = 8;
    var colorBoxLeft = btn.clientWidth + colorboxPadding;
    this.hueMove.push(hueMove);
    this.colorMove.push(color);
    this.colorboxTop = (0, _assist.getElementTop)(colorbox);
    this.colorboxLeft = (0, _assist.getElementLeft)(colorbox);
    this.colorboxSize = colorbox.clientWidth - colorboxPadding * 2;
    this.oldColor = this.newColor;
    this.colorBoxStyle = 'opacity: 0; left: ' + colorBoxLeft + 'px';
    setTimeout(this.close.bind(this), 0);
    setTimeout(function () {
      _this.colorBoxStyle = 'opacity: 1; left: ' + colorBoxLeft + 'px';

      _this.colorComputed();
    }, 10);

    document.addEventListener('click', this.cancel.bind(this), false);
  },

  methods: {
    beforeDragSB: function beforeDragSB(e, left, top) {
      var sb = _color2.default.getSB(this, left, top);
      this.hsb.s = sb.s;
      this.hsb.b = sb.b;
      this.$emit('change', this.hex);
      this.$emit('input', this.hex);
    },
    dragSB: function dragSB(e, left, top) {
      this.beforeDragSB(e, left, top);
    },
    beforeDragH: function beforeDragH(e, left, top) {
      this.hsb.h = _color2.default.getH(this, top);
      this.hsbBackground.h = _color2.default.getH(this, top);
      this.$emit('change', this.hex);
      this.$emit('input', this.hex);
    },
    dragH: function dragH(e, left, top) {
      this.beforeDragH(e, left, top);
    },
    rChange: function rChange(e) {
      var value = e.target.value;

      this.rgb.r = parseInt(value, 10);
      this.setPoint(this.rgb);
    },
    gChange: function gChange(e) {
      var value = e.target.value;

      this.rgb.g = parseInt(value, 10);
      this.setPoint(this.rgb);
    },
    bChange: function bChange(e) {
      var value = e.target.value;

      this.rgb.b = parseInt(value, 10);
      this.setPoint(this.rgb);
    },
    hexChange: function hexChange(e) {
      var value = e.target.value;

      this.setPoint(_color2.default.hexToRgb(value));
    },
    setPoint: function setPoint(rgb) {
      this.hsb = _color2.default.rgbToHsb(rgb);
      this.hsbBackground.h = this.hsb.h;
      this.colorComputed();
    },
    colorComputed: function colorComputed() {
      var sbComputed = _color2.default.offsetSB(this, this.hsb);
      var hComputed = _color2.default.offsetH(this, this.hsb);
      this.pointStyle = 'left: ' + sbComputed.left + 'px; top: ' + sbComputed.top + 'px;';
      this.hueStyle = 'top: ' + hComputed + 'px;';
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
      this.$emit('close', this.hex);
    },
    close: function close() {
      this.colorStatus = false;
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.cancel);
  }
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offsetSB: function offsetSB(self, hsb) {
    var pointInitial = 4;

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
      left: iLseft
    };
  },
  offsetH: function offsetH(self, hsb) {
    var newH = hsb.h / 360;
    var sacleH = self.colorboxSize - self.colorboxSize * newH;
    return parseInt(sacleH / 2, 10);
  },
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
      b: rgTop
    };
  },
  getH: function getH(self, top) {
    var size = self.colorboxSize + 6;
    var iTop = top * 2;
    var newTop = size - iTop;
    var rgB = parseInt(360 * newTop / size, 10);
    return rgB;
  },
  hsbToRgb: function hsbToRgb(hsb) {
    var rgb = {};
    var h = hsb.h;
    var s = hsb.s * 255 / 100;
    var v = hsb.b * 255 / 100;
    if (s === 0) {
      rgb.r = v;
      rgb.g = v;
      rgb.b = v;
    } else {
      var t1 = v;
      var t2 = (255 - s) * v / 255;
      var t3 = (t1 - t2) * (h % 60) / 60;
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
      b: Math.round(rgb.b)
    };
  },
  rgbToHex: function rgbToHex(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
    hex.forEach(function (val, nr) {
      if (val.length === 1) {
        hex[nr] = '0' + val;
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
      b: hex16 & 0x0000FF
    };
  },
  rgbToHsb: function rgbToHsb(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max !== 0 ? 255 * delta / max : 0;
    if (hsb.s !== 0) {
      if (rgb.r === max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g === max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
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
  }
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-color",
      class: _vm.colorName
    }, [_c('div', {
      ref: "btn",
      staticClass: "emfe-color-btn",
      class: _vm.btnName
    }, [_c('emfe-button', {
      on: {
        "click": _vm.toggle
      }
    }, [_vm._v(_vm._s(_vm.btnText))])], 1), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.colorStatus,
        expression: "colorStatus"
      }],
      ref: "colorbox",
      staticClass: "emfe-color-box",
      class: _vm.boxName,
      style: _vm.colorBoxStyle
    }, [_c('emfe-drag', {
      style: _vm.rgbStyle,
      attrs: {
        "className": _vm.colorDrag,
        "limit": "true",
        "dragEl": _vm.colorMove,
        "initialValue": -6,
        "borderSize": 2,
        "limitPosition": "center"
      },
      on: {
        "drag": _vm.dragSB,
        "beforeDrag": _vm.beforeDragSB
      }
    }, [_c('div', {
      ref: "color",
      staticClass: "emfe-color-inner",
      class: _vm.innerName,
      style: _vm.pointStyle
    })]), _vm._v(" "), _c('emfe-drag', {
      attrs: {
        "className": _vm.hueDrag,
        "dragEl": _vm.hueMove,
        "direction": "vertical",
        "limit": "true"
      },
      on: {
        "drag": _vm.dragH,
        "beforeDrag": _vm.beforeDragH
      }
    }, [_c('span', {
      ref: "hueMove",
      staticClass: "emfe-color-hueMove",
      style: _vm.hueStyle
    }, [_c('i', {
      staticClass: "emfe-color-left"
    }), _vm._v(" "), _c('i', {
      staticClass: "emfe-color-right"
    })])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-color-handle"
    }, [_c('div', {
      staticClass: "emfe-color-show-color"
    }, [_c('div', {
      staticClass: "emfe-color-new-color",
      style: _vm.newColor
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-color-current-color",
      style: _vm.oldColor
    })]), _vm._v(" "), _c('div', {
      staticClass: "emfe-color-field"
    }, [_c('p', {
      staticClass: "emfe-color-title"
    }, [_vm._v("R")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.rgb.r,
        expression: "rgb.r"
      }],
      staticClass: "emfe-color-inp",
      attrs: {
        "type": "tel",
        "maxlength": "3",
        "size": "3"
      },
      domProps: {
        "value": _vm.rgb.r
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.rgb.r = $event.target.value;
        }, _vm.rChange]
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "emfe-color-field"
    }, [_c('p', {
      staticClass: "emfe-color-title"
    }, [_vm._v("G")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.rgb.g,
        expression: "rgb.g"
      }],
      staticClass: "emfe-color-inp",
      attrs: {
        "type": "tel",
        "maxlength": "3",
        "size": "3"
      },
      domProps: {
        "value": _vm.rgb.g
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.rgb.g = $event.target.value;
        }, _vm.gChange]
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "emfe-color-field"
    }, [_c('p', {
      staticClass: "emfe-color-title"
    }, [_vm._v("B")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.rgb.b,
        expression: "rgb.b"
      }],
      staticClass: "emfe-color-inp",
      attrs: {
        "type": "tel",
        "maxlength": "3",
        "size": "3"
      },
      domProps: {
        "value": _vm.rgb.b
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.rgb.b = $event.target.value;
        }, _vm.bChange]
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "emfe-color-field"
    }, [_c('p', {
      staticClass: "emfe-color-title"
    }, [_vm._v("#")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.hex,
        expression: "hex"
      }],
      staticClass: "emfe-color-inp",
      attrs: {
        "type": "tel",
        "maxlength": "6",
        "size": "6"
      },
      domProps: {
        "value": _vm.hex
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.hex = $event.target.value;
        }, _vm.hexChange]
      }
    })]), _vm._v(" "), _vm._m(0)])], 1)]);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('button', {
      staticClass: "emfe-color-sub",
      class: _vm.subName,
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.ok($event);
        }
      }
    }, [_vm._v(_vm._s(_vm.subText))]);
  }] };

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeInput = __webpack_require__(169);

var _EmfeInput2 = _interopRequireDefault(_EmfeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeInput2.default.install = function (Vue) {
  Vue.component(_EmfeInput2.default.name, _EmfeInput2.default);
};

exports.default = _EmfeInput2.default;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(170),
  /* template */
  __webpack_require__(171),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'emfe-input-box';
var error = 'error';

exports.default = {
  name: 'emfe-input',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    disabled: {
      type: [Boolean],
      default: false
    },
    autofocus: {
      type: [Boolean],
      default: false
    },
    errOk: {
      type: [Boolean],
      default: false
    },
    iconOk: {
      type: [Boolean],
      default: false
    },
    iconType: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    maxlength: {
      type: [String, Number],
      default: ''
    },
    focus: {
      type: Function,
      default: function _default() {}
    },
    blur: {
      type: Function,
      default: function _default() {}
    },
    change: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      newStyle: this.style,
      newPlaceholder: this.placeholder
    };
  },

  computed: {
    classList: function classList() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-icon', this.iconOk), (0, _defineProperty3.default)(_ref, '' + prefixCls, !this.iconOk), (0, _defineProperty3.default)(_ref, this.className + '-input-box', !!this.className), _ref)];
    },
    addClass: function addClass() {
      return [(0, _defineProperty3.default)({}, this.className + '-input', !!this.className)];
    },
    addInput: function addInput() {
      var _ref3;

      return [(_ref3 = {}, (0, _defineProperty3.default)(_ref3, '' + error, this.errOk), (0, _defineProperty3.default)(_ref3, this.className + '-input-box-input', !!this.className), _ref3)];
    },
    addErrorText: function addErrorText() {
      return [(0, _defineProperty3.default)({}, this.className + '-input-box-text', !!this.className)];
    }
  },
  methods: {
    changeFn: function changeFn(evt) {
      var val = evt.target.value;
      if (val === this.currentValue) return;
      this.currentValue = val.trim();
      this.change(this.currentValue);
      this.$emit('change', this.currentValue);
      this.$emit('input', this.currentValue);
    },
    blurFn: function blurFn() {
      this.$emit('blur');
      this.blur();
    },
    focusFn: function focusFn() {
      this.$emit('focus');
      this.focus();
    },
    keyUp: function keyUp() {
      this.$emit('keyup');
    }
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
    }
  }
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-input",
      class: _vm.addClass,
      style: _vm.newStyle
    }, [_c('div', {
      class: [_vm.classList]
    }, [_vm.iconOk ? _c('emfe-icon', {
      attrs: {
        "type": _vm.iconType,
        "className": "emfe-input-box-icon-el"
      }
    }) : _vm._e(), _vm._v(" "), _c('input', _vm._b({
      staticClass: "emfe-input-box-input",
      class: _vm.addInput,
      attrs: {
        "type": _vm.type,
        "placeholder": _vm.newPlaceholder,
        "maxlength": _vm.maxlength
      },
      domProps: {
        "value": _vm.currentValue
      },
      on: {
        "input": function input($event) {
          _vm.changeFn($event);
        },
        "blur": _vm.blurFn,
        "focus": _vm.focusFn,
        "keyup": _vm.keyUp
      }
    }, 'input', _vm.$props))], 1), _vm._v(" "), _vm.errOk ? _c('div', {
      staticClass: "emfe-input-box-text",
      class: _vm.addErrorText
    }, [_vm._t("error")], 2) : _vm._e()]);
  }, staticRenderFns: [] };

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeInputmore = __webpack_require__(173);

var _EmfeInputmore2 = _interopRequireDefault(_EmfeInputmore);

var _EmfeInputmoreGroup = __webpack_require__(176);

var _EmfeInputmoreGroup2 = _interopRequireDefault(_EmfeInputmoreGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeInputmore2.default.install = function (Vue) {
  Vue.component(_EmfeInputmore2.default.name, _EmfeInputmore2.default);
};

_EmfeInputmoreGroup2.default.install = function (Vue) {
  Vue.component(_EmfeInputmoreGroup2.default.name, _EmfeInputmoreGroup2.default);
};

exports.default = {
  EmfeInputmore: _EmfeInputmore2.default,
  EmfeInputmoreGroup: _EmfeInputmoreGroup2.default
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(175),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeInputmore',
  data: function data() {
    return {
      currentValue: this.value,
      focus: false,
      newPlaceholder: this.placeholder,
      group: this.$parent.isGroup };
  },

  props: {
    icon: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: {
      type: [String, Number],
      default: ''
    },
    index: {
      type: Number,
      required: true
    },
    className: String
  },
  computed: {
    inputmoreName: function inputmoreName() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, this.className + '-inputmore', !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-inputmore-foucs', this.focus), _ref)];
    },
    inputName: function inputName() {
      var _ref2;

      return [(_ref2 = {}, (0, _defineProperty3.default)(_ref2, this.className + '-inputmore-input', !!this.className), (0, _defineProperty3.default)(_ref2, 'emfe-inputmore-input-icon', this.icon), _ref2)];
    },
    addName: function addName() {
      var _ref3;

      var hasMax = false;
      if (this.group) {
        var _$parent = this.$parent,
            loops = _$parent.loops,
            max = _$parent.max;

        hasMax = loops.length === max;
      }
      return [(_ref3 = {}, (0, _defineProperty3.default)(_ref3, this.className + '-inputmore-button-plus', !!this.className), (0, _defineProperty3.default)(_ref3, 'emfe-inputmore-button-plus-disabled', !!hasMax), _ref3)];
    },
    reduceName: function reduceName() {
      var _ref4;

      var hasMin = false;
      if (this.group) {
        var _$parent2 = this.$parent,
            loops = _$parent2.loops,
            min = _$parent2.min;

        hasMin = loops.length === min;
      }
      return [(_ref4 = {}, (0, _defineProperty3.default)(_ref4, this.className + '-inputmore-button-reduce', !!this.className), (0, _defineProperty3.default)(_ref4, 'emfe-inputmore-button-reduce-disabled', !!hasMin), _ref4)];
    }
  },
  methods: {
    input: function input(e) {
      var val = e.target.value;
      this.$emit('change', val);
      this.$emit('input', val);
    },
    reduce: function reduce() {
      if (this.group) {
        var _$parent3 = this.$parent,
            loops = _$parent3.loops,
            min = _$parent3.min;

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
        var _$parent4 = this.$parent,
            loops = _$parent4.loops,
            max = _$parent4.max,
            newLoops = _$parent4.newLoops;


        if (loops.length < max) {
          loops.splice(this.index + 1, 0, newLoops || {
            num: ''
          });
        }
        this.$emit('plus', loops[this.index], this.index, loops);
      } else {
        this.$emit('plus', this.index);
      }
    }
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
    }
  }
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-inputmore",
      class: _vm.inputmoreName
    }, [_vm.icon ? _c('emfe-icon', {
      attrs: {
        "className": _vm.className ? _vm.className : 'emfe-inputmore',
        "type": _vm.icon
      }
    }) : _vm._e(), _vm._v(" "), _c('input', {
      staticClass: "emfe-inputmore-input",
      class: _vm.inputName,
      attrs: {
        "placeholder": _vm.newPlaceholder,
        "type": _vm.type
      },
      domProps: {
        "value": _vm.currentValue
      },
      on: {
        "input": _vm.input,
        "focus": function focus($event) {
          _vm.focus = true;
        },
        "blur": function blur($event) {
          _vm.focus = false;
        }
      }
    }), _vm._v(" "), _c('button', {
      staticClass: "emfe-inputmore-button emfe-inputmore-button-plus",
      class: _vm.addName,
      on: {
        "click": _vm.plus
      }
    }), _vm._v(" "), _c('button', {
      staticClass: "emfe-inputmore-button emfe-inputmore-button-reduce",
      class: _vm.reduceName,
      on: {
        "click": _vm.reduce
      }
    })], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(178),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeInputmoreGroup',
  data: function data() {
    var loops = null;
    var isObject = this.datas.every(function (data) {
      return !Array.isArray(data);
    });
    if (isObject) {
      loops = [];
      this.datas.forEach(function (data) {
        loops.push({
          num: data
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
      index: 0
    };
  },

  props: {
    className: String,
    datas: {
      type: Array,
      required: true
    },
    placeholder: String,
    new: {
      type: Object
    },
    type: String,
    icon: String,
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: 1
    },
    inputHandle: Function,
    plusHandle: Function,
    reduceHandle: Function
  },
  computed: {
    groupName: function groupName() {
      return [(0, _defineProperty3.default)({}, this.className + '-inputmore-group', !!this.className)];
    },
    wrapName: function wrapName() {
      return [(0, _defineProperty3.default)({}, this.className + '-inputmore-group-wrap', !!this.className)];
    },
    inputmoreName: function inputmoreName() {
      var name = this.className ? ' ' + this.className : '';
      return 'emfe-inputmore-group' + name;
    }
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
    }
  }
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-inputmore-group",
      class: _vm.groupName
    }, _vm._l(_vm.loops, function (data, dataIndex) {
      return _c('div', {
        staticClass: "emfe-inputmore-group-wrap",
        attrs: {
          "className": _vm.wrapName
        },
        on: {
          "click": function click($event) {
            _vm.moreClick(dataIndex);
          }
        }
      }, [_c('emfe-inputmore', {
        key: dataIndex,
        attrs: {
          "className": _vm.inputmoreName,
          "placeholder": data.placeholder || _vm.placeholder,
          "icon": data.icon || _vm.icon,
          "type": data.type || _vm.type,
          "index": dataIndex
        },
        on: {
          "reduce": _vm.reduce,
          "plus": _vm.plus,
          "input": _vm.input
        },
        model: {
          value: data.num,
          callback: function callback($$v) {
            data.num = $$v;
          },
          expression: "data.num"
        }
      })], 1);
    }));
  }, staticRenderFns: [] };

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTel = __webpack_require__(180);

var _EmfeTel2 = _interopRequireDefault(_EmfeTel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTel2.default.install = function (Vue) {
  Vue.component(_EmfeTel2.default.name, _EmfeTel2.default);
};

exports.default = _EmfeTel2.default;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(182),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeTel',
  data: function data() {
    var nowData = !this.value || _o2.default.empty(this.value) ? {
      tel: '请选择',
      name: '',
      prefix: ''
    } : this.value;
    return {
      flagStatus: false,
      nowData: nowData
    };
  },

  props: {
    datas: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      default: function _default() {}
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'number'
    },
    className: String,
    errOk: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    telName: function telName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel', !!this.className)];
    },
    prefixName: function prefixName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-prefix', !!this.className)];
    },
    prefixTextName: function prefixTextName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-prefix-text', !!this.className)];
    },
    inputName: function inputName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-input', !!this.className)];
    },
    addErrorText: function addErrorText() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-error', !!this.className)];
    },
    prefixFlagName: function prefixFlagName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-prefix-flag', !!this.className)];
    }
  },
  methods: {
    toggle: function toggle() {
      if (!this.disabled) {
        this.flagStatus = true;
      }
    },
    choice: function choice(item) {
      this.nowData = item;
      this.flagStatus = false;
      this.$emit('choice', this.nowData);
      this.$emit('change', this.nowData);
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
    telFocus: function telFocus() {
      this.$emit('focus');
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    }
  }
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      directives: [{
        name: "emfe-documentclick",
        rawName: "v-emfe-documentclick",
        value: _vm.close,
        expression: "close"
      }],
      staticClass: "emfe-tel",
      class: [_vm.telName, {
        'emfe-tel-input-error': _vm.errOk
      }]
    }, [_c('div', {
      staticClass: "emfe-tel-prefix",
      class: [_vm.prefixName, {
        'emfe-tel-input-error-right': _vm.errOk,
        'emfe-tel-input-disabled': _vm.disabled
      }],
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.toggle($event);
        }
      }
    }, [_c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.nowData.url,
        expression: "nowData.url"
      }],
      staticClass: "emfe-tel-prefix-piece",
      attrs: {
        "src": _vm.nowData.url,
        "alt": _vm.nowData.name
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-tel-prefix-text",
      class: _vm.prefixTextName
    }, [_vm._v("+" + _vm._s(_vm.nowData.prefix))]), _vm._v(" "), _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.flagStatus,
        expression: "flagStatus"
      }],
      staticClass: "emfe-tel-prefix-flag",
      class: _vm.prefixFlagName
    }, _vm._l(_vm.datas, function (data) {
      return _c('li', {
        staticClass: "emfe-tel-prefix-label",
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choice(data);
          }
        }
      }, [_c('img', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: data.url,
          expression: "data.url"
        }],
        staticClass: "emfe-tel-prefix-icon",
        attrs: {
          "src": data.url,
          "alt": data.name
        }
      }), _vm._v(" "), _c('span', {
        staticClass: "emfe-tel-prefix-icon-piece",
        class: {
          'emfe-tel-prefix-icon-piece-padding': !data.url
        }
      }, [_vm._v(_vm._s(data.name))]), _vm._v(" "), _c('span', {
        staticClass: "emfe-tel-prefix-icon-tel"
      }, [_vm._v("+" + _vm._s(data.prefix))])]);
    }))]), _vm._v(" "), _c('input', {
      staticClass: "emfe-tel-input",
      class: [_vm.inputName, {
        'emfe-tel-input-disabled': _vm.disabled
      }],
      attrs: {
        "type": _vm.type,
        "placeholder": _vm.placeholder,
        "disabled": _vm.disabled
      },
      domProps: {
        "value": _vm.nowData.tel
      },
      on: {
        "input": _vm.telChange,
        "blur": _vm.telBlur,
        "focus": _vm.telFocus
      }
    }), _vm._v(" "), _vm.errOk ? _c('div', {
      staticClass: "emfe-tel-error",
      class: _vm.addErrorText
    }, [_vm._t("error")], 2) : _vm._e()]);
  }, staticRenderFns: [] };

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTelC = __webpack_require__(184);

var _EmfeTelC2 = _interopRequireDefault(_EmfeTelC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTelC2.default.install = function (Vue) {
  Vue.component(_EmfeTelC2.default.name, _EmfeTelC2.default);
};

exports.default = _EmfeTelC2.default;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(185),
  /* template */
  __webpack_require__(186),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeTelC',
  data: function data() {
    var nowData = !this.value || _o2.default.empty(this.value) ? {
      tel: '请选择',
      name: '',
      prefix: ''
    } : this.value;
    return {
      flagStatus: false,
      nowData: nowData
    };
  },

  props: {
    telDatas: {
      type: Array
    },
    idDatas: {
      type: Array
    },
    value: {
      type: Object,
      default: function _default() {}
    },
    errOk: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'number'
    },
    className: String
  },
  computed: {
    telName: function telName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-c', !!this.className)];
    },
    prefixName: function prefixName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-c-prefix', !!this.className)];
    },
    prefixTextName: function prefixTextName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-c-prefix-text', !!this.className)];
    },
    inputName: function inputName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-c-input', !!this.className)];
    },
    addErrorText: function addErrorText() {
      return [(0, _defineProperty3.default)({}, this.className + '-tel-c-error', !!this.className)];
    }
  },
  methods: {
    toggle: function toggle() {
      this.flagStatus = true;
    },
    choice: function choice(item) {
      this.nowData = item;
      this.flagStatus = false;
      this.$emit('choice', this.nowData);
      this.$emit('change', this.nowData);
      this.$emit('input', this.nowData);
    },
    telChange: function telChange(ev) {
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
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    }
  }
};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      directives: [{
        name: "emfe-documentclick",
        rawName: "v-emfe-documentclick",
        value: _vm.close,
        expression: "close"
      }],
      staticClass: "emfe-tel-c",
      class: [_vm.telName, {
        'emfe-tel-c-input-error': _vm.errOk
      }]
    }, [_c('div', {
      staticClass: "emfe-tel-c-prefix",
      class: [_vm.prefixName, {
        'emfe-tel-c-input-error-right': _vm.errOk
      }],
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.toggle($event);
        }
      }
    }, [_vm.nowData.type === 1 ? _c('span', {
      staticClass: "emfe-tel-c-prefix-text",
      class: _vm.prefixTextName
    }, [_vm._v("+" + _vm._s(_vm.nowData.prefix))]) : _vm._e(), _vm._v(" "), _vm.nowData.type === 2 ? _c('span', {
      staticClass: "emfe-tel-c-prefix-text",
      class: _vm.prefixTextName
    }, [_vm._v(_vm._s(_vm.nowData.text))]) : _vm._e(), _vm._v(" "), _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.flagStatus,
        expression: "flagStatus"
      }],
      staticClass: "emfe-tel-c-prefix-flag"
    }, [_vm._l(_vm.telDatas, function (data) {
      return _vm.telDatas ? _c('li', {
        staticClass: "emfe-tel-c-prefix-label",
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choice(data);
          }
        }
      }, [_c('span', {
        staticClass: "emfe-tel-c-prefix-icon-tel"
      }, [_vm._v("+" + _vm._s(data.prefix))])]) : _vm._e();
    }), _vm._v(" "), _vm._l(_vm.idDatas, function (data) {
      return _vm.idDatas ? _c('li', {
        staticClass: "emfe-tel-c-prefix-label",
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choice(data);
          }
        }
      }, [_c('span', {
        staticClass: "emfe-tel-c-prefix-icon-tel"
      }, [_vm._v(_vm._s(data.text))])]) : _vm._e();
    })], 2)]), _vm._v(" "), _vm.nowData.type === 1 ? _c('input', {
      staticClass: "emfe-tel-c-input",
      class: _vm.inputName,
      attrs: {
        "type": _vm.type,
        "placeholder": _vm.placeholder
      },
      domProps: {
        "value": _vm.nowData.tel
      },
      on: {
        "input": _vm.telChange,
        "blur": _vm.telBlur
      }
    }) : _vm._e(), _vm._v(" "), _vm.nowData.type === 2 ? _c('input', {
      staticClass: "emfe-tel-c-input",
      class: _vm.inputName,
      attrs: {
        "type": _vm.type,
        "placeholder": _vm.placeholder
      },
      domProps: {
        "value": _vm.nowData.card
      },
      on: {
        "input": _vm.telChange,
        "blur": _vm.telBlur
      }
    }) : _vm._e(), _vm._v(" "), _vm.errOk ? _c('div', {
      staticClass: "emfe-tel-c-error",
      class: _vm.addErrorText
    }, [_vm._t("error")], 2) : _vm._e()]);
  }, staticRenderFns: [] };

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeSmscode = __webpack_require__(188);

var _EmfeSmscode2 = _interopRequireDefault(_EmfeSmscode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeSmscode2.default.install = function (Vue) {
  Vue.component(_EmfeSmscode2.default.name, _EmfeSmscode2.default);
};

exports.default = _EmfeSmscode2.default;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(189),
  /* template */
  __webpack_require__(190),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timer = null;
var go = true;exports.default = {
  name: 'EmfeSmscode',
  data: function data() {
    var nowData = !this.value ? '' : this.value;
    return {
      nowData: nowData,
      btnText: this.title,
      allTimes: this.times,
      newDisabled: this.disabled,
      start: '',
      disableds: false
    };
  },

  props: {
    placeholder: {
      type: String,
      default: '请输入验证码'
    },
    title: {
      type: String,
      default: '获取验证码'
    },
    icon: String,
    disabled: Boolean,
    errorTitle: {
      type: String,
      default: '重试'
    },
    type: {
      type: String,
      default: 'number'
    },
    maxlength: {
      type: Number,
      default: Infinity
    },
    value: {
      type: [Number, String]
    },
    times: {
      type: [Number, String],
      default: 60
    },
    className: String,
    timeStart: {
      type: [String, Boolean],
      default: false
    },
    click: Function,
    change: {
      type: Function,
      default: function _default() {}
    },
    end: {
      type: Function,
      default: function _default() {}
    },
    errOk: {
      type: Boolean,
      default: false
    },
    goauto: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    smscodeName: function smscodeName() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, this.className + '-smscode', !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-smscodeicon', this.icon), _ref)];
    },
    codeName: function codeName() {
      var _ref2;

      return [(_ref2 = {}, (0, _defineProperty3.default)(_ref2, this.className + '-smscode-code', !!this.className), (0, _defineProperty3.default)(_ref2, 'emfe-smscode-input-icon', this.icon), _ref2)];
    },
    btmName: function btmName() {
      var _ref3;

      return [(_ref3 = {}, (0, _defineProperty3.default)(_ref3, this.className + '-smscode-button', !!this.className), (0, _defineProperty3.default)(_ref3, this.className + '-smscode-button-disableds', !!this.className && this.disableds), _ref3)];
    }
  },
  mounted: function mounted() {
    this.start = this.timeStart;
  },

  methods: {
    resetAuto: function resetAuto() {
      this.resetCode();
      this.$emit('end', false);
      this.end(false);
    },
    auto: function auto() {
      var _this = this;

      setTimeout(function () {
        if (_this.start) {
          if (_this.allTimes > 1) {
            _this.allTimes--;
            _this.btnText = _this.allTimes + '\u79D2\u540E\u91CD\u8BD5';
            _this.disableds = true;
            timer = setTimeout(_this.auto.bind(_this), 1000);
          } else {
            clearTimeout(timer);
            _this.resetAuto();
          }
        }
      }, 500);
    },
    input: function input(ev) {
      var val = ev.target.value;
      this.$emit('change', val);
      this.change(val);
      this.$emit('input', val);
    },
    clickFn: function clickFn() {
      if (go && !this.newDisabled && !this.start) {
        go = false;
        this.auto();
        this.$emit('click');
        if (this.click) {
          this.click();
        }
      } else {
        go = true;
      }
    },
    blur: function blur() {
      this.$emit('blur');
    },
    focus: function focus() {
      this.$emit('focus');
    },
    resetCode: function resetCode() {
      this.disableds = false;
      this.btnText = this.title;
      this.allTimes = this.times;
      go = true;
    }
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
        this.resetCode();

        if (this.goauto) {
          this.auto();
        }
      }
    }
  }
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-smscode",
      class: [_vm.smscodeName, {
        'emfe-smscode-input-error': _vm.errOk
      }]
    }, [_vm.icon ? _c('emfe-icon', {
      attrs: {
        "className": "emfe-smscode",
        "type": _vm.icon
      }
    }) : _vm._e(), _vm._v(" "), _c('input', {
      staticClass: "emfe-smscode-input",
      class: _vm.codeName,
      attrs: {
        "type": _vm.type,
        "maxlength": _vm.maxlength,
        "placeholder": _vm.placeholder,
        "disabled": _vm.newDisabled
      },
      domProps: {
        "value": _vm.nowData
      },
      on: {
        "input": _vm.input,
        "blur": _vm.blur,
        "focus": _vm.focus
      }
    }), _vm._v(" "), _c('button', {
      staticClass: "emfe-smscode-button",
      class: _vm.btmName,
      attrs: {
        "disabled": _vm.newDisabled
      },
      on: {
        "click": _vm.clickFn
      }
    }, [_vm._v(_vm._s(_vm.btnText))]), _vm._v(" "), _vm.errOk ? _c('div', {
      staticClass: "emfe-smscode-error"
    }, [_vm._t("error")], 2) : _vm._e()], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeSmscodeC = __webpack_require__(192);

var _EmfeSmscodeC2 = _interopRequireDefault(_EmfeSmscodeC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeSmscodeC2.default.install = function (Vue) {
  Vue.component(_EmfeSmscodeC2.default.name, _EmfeSmscodeC2.default);
};

exports.default = _EmfeSmscodeC2.default;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(194),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timer = null;
var go = true;exports.default = {
  name: 'EmfeSmscodeC',
  data: function data() {
    var nowData = !this.value ? '' : this.value;
    return {
      nowData: nowData,
      btnText: this.title,
      allTimes: this.times,
      newDisabled: this.disabled,
      start: '',
      disableds: false
    };
  },

  props: {
    placeholder: {
      type: String,
      default: '请输入验证码'
    },
    title: {
      type: String,
      default: '获取验证码'
    },
    iconFlg: {
      type: [Boolean, String],
      default: false
    },
    icon: String,
    disabled: Boolean,
    errorTitle: {
      type: String,
      default: '重试'
    },
    value: {
      type: [Number, String]
    },
    times: {
      type: [Number, String],
      default: 60
    },
    className: String,
    timeStart: {
      type: [String, Boolean],
      default: false
    },
    click: Function,
    end: {
      type: Function,
      default: function _default() {}
    },
    errOk: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    smscodeName: function smscodeName() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, this.className + '-smscode', !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-smscodeicon', this.icon), _ref)];
    },
    codeName: function codeName() {
      var _ref2;

      return [(_ref2 = {}, (0, _defineProperty3.default)(_ref2, this.className + '-smscode-code', !!this.className), (0, _defineProperty3.default)(_ref2, 'emfe-smscode-input-icon', this.icon), _ref2)];
    },
    btmName: function btmName() {
      return [(0, _defineProperty3.default)({}, this.className + '-smscode-button', !!this.className)];
    }
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
      var _this = this;

      setTimeout(function () {
        if (_this.start) {
          if (_this.allTimes > 1) {
            _this.allTimes--;
            _this.btnText = _this.allTimes + '\u79D2\u540E\u91CD\u8BD5';
            _this.disableds = true;
            timer = setTimeout(_this.auto.bind(_this), 1000);
          } else {
            _this.disableds = false;
            clearTimeout(timer);
            _this.resetAuto();
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
    change: function change(val) {
      this.$emit('input', val);
    }
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
    }
  }
};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-smscode-c",
      class: _vm.smscodeName
    }, [_c('emfe-input', {
      attrs: {
        "errOk": _vm.errOk,
        "iconOk": _vm.iconFlg,
        "iconType": _vm.icon,
        "placeholder": _vm.placeholder,
        "className": "emfe-smscode-c",
        "value": _vm.nowData
      },
      on: {
        "change": _vm.change,
        "blur": _vm.blur
      }
    }, [_c('div', {
      slot: "error"
    }, [_vm._t("error")], 2)]), _vm._v(" "), _c('emfe-button-c', {
      attrs: {
        "theme": "primary",
        "disabled": _vm.disableds,
        "className": "emfe-smscode-c"
      },
      on: {
        "click": _vm.clickFn
      }
    }, [_vm._v(_vm._s(_vm.btnText))])], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeImgcode = __webpack_require__(196);

var _EmfeImgcode2 = _interopRequireDefault(_EmfeImgcode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeImgcode2.default.install = function (Vue) {
  Vue.component(_EmfeImgcode2.default.name, _EmfeImgcode2.default);
};

exports.default = _EmfeImgcode2.default;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(197),
  /* template */
  __webpack_require__(198),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'emfe-imgcode',
  data: function data() {
    var nowData = !this.value ? '' : this.value;
    return {
      nowData: nowData,
      newSrc: this.src
    };
  },

  props: {
    placeholder: {
      type: String,
      default: '请输入验证码'
    },
    value: {
      type: [Number, String]
    },
    src: {
      type: String,
      required: true
    },
    className: String
  },
  computed: {
    imgcodeName: function imgcodeName() {
      return [(0, _defineProperty3.default)({}, this.className + '-imgcode', !!this.className)];
    },
    codeName: function codeName() {
      return [(0, _defineProperty3.default)({}, this.className + '-imgcode-code', !!this.className)];
    }
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
    blur: function blur() {
      this.$emit('blur');
    }
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
    }
  }
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-imgcode",
      class: _vm.imgcodeName
    }, [_c('input', {
      staticClass: "emfe-imgcode-input",
      class: _vm.codeName,
      attrs: {
        "type": "text",
        "placeholder": _vm.placeholder
      },
      domProps: {
        "value": _vm.nowData
      },
      on: {
        "input": _vm.input,
        "blur": _vm.blur
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "emfe-imgcode-code",
      attrs: {
        "src": _vm.newSrc,
        "alt": "图片验证码"
      },
      on: {
        "click": _vm.click
      }
    })]);
  }, staticRenderFns: [] };

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeImgcodeC = __webpack_require__(200);

var _EmfeImgcodeC2 = _interopRequireDefault(_EmfeImgcodeC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeImgcodeC2.default.install = function (Vue) {
  Vue.component(_EmfeImgcodeC2.default.name, _EmfeImgcodeC2.default);
};

exports.default = _EmfeImgcodeC2.default;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(202),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'emfe-imgcode-c',
  data: function data() {
    var nowData = !this.value ? '' : this.value;
    return {
      nowData: nowData,
      newSrc: this.src
    };
  },

  props: {
    placeholder: {
      type: String,
      default: '请输入验证码'
    },
    value: {
      type: [Number, String]
    },
    src: {
      type: String,
      required: true
    },
    className: String
  },
  computed: {
    imgcodeName: function imgcodeName() {
      return [(0, _defineProperty3.default)({}, this.className + '-imgcode', !!this.className)];
    },
    codeName: function codeName() {
      return [(0, _defineProperty3.default)({}, this.className + '-imgcode-code', !!this.className)];
    }
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
    blur: function blur() {
      this.$emit('blur');
    }
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
    }
  }
};

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-imgcode-c",
      class: _vm.imgcodeName
    }, [_c('input', {
      staticClass: "emfe-imgcode-c-input",
      class: _vm.codeName,
      attrs: {
        "type": "text",
        "placeholder": _vm.placeholder
      },
      domProps: {
        "value": _vm.nowData
      },
      on: {
        "input": _vm.input,
        "blur": _vm.blur
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "emfe-imgcode-c-code",
      attrs: {
        "src": _vm.newSrc,
        "alt": "图片验证码"
      },
      on: {
        "click": _vm.click
      }
    })]);
  }, staticRenderFns: [] };

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeSteps = __webpack_require__(204);

var _EmfeSteps2 = _interopRequireDefault(_EmfeSteps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeSteps2.default.install = function (Vue) {
  Vue.component(_EmfeSteps2.default.name, _EmfeSteps2.default);
};

exports.default = _EmfeSteps2.default;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(206),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeSteps',
  props: {
    datas: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    },
    className: String
  },
  computed: {
    stepsName: function stepsName() {
      return [(0, _defineProperty3.default)({}, this.className + '-steps', !!this.className)];
    }
  }
};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-steps",
      class: _vm.stepsName
    }, [_c('div', {
      staticClass: "emfe-steps-line"
    }, _vm._l(_vm.datas, function (data, dataIndex) {
      return _c('div', {
        key: dataIndex,
        class: {
          'emfe-steps-item-first': dataIndex === 0, 'emfe-steps-item-last': dataIndex === _vm.datas.length - 1, 'emfe-steps-item': dataIndex !== _vm.datas.length - 1 && dataIndex !== 0
        }
      }, [dataIndex === 0 ? [dataIndex === _vm.active ? [_c('emfe-icon', {
        attrs: {
          "className": "emfe-steps-item-first-on",
          "type": data.icon
        }
      })] : [_c('emfe-icon', {
        attrs: {
          "className": "emfe-steps-item-first",
          "type": data.icon
        }
      })]] : dataIndex === _vm.datas.length - 1 ? [dataIndex === _vm.active ? [_c('emfe-icon', {
        attrs: {
          "className": "emfe-steps-item-last-on",
          "type": data.icon
        }
      })] : [_c('emfe-icon', {
        attrs: {
          "className": "emfe-steps-item-last",
          "type": data.icon
        }
      })]] : [dataIndex === _vm.active ? [_c('emfe-icon', {
        attrs: {
          "className": "emfe-steps-item-on",
          "type": data.icon
        }
      })] : [_c('emfe-icon', {
        attrs: {
          "className": "emfe-steps-item",
          "type": data.icon
        }
      })]], _vm._v(" "), _c('span', {
        staticClass: "emfe-steps-item-text",
        class: {
          'emfe-steps-item-on-text': _vm.active === dataIndex
        }
      }, [_vm._v(_vm._s(data.title))])], 2);
    }))]);
  }, staticRenderFns: [] };

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeStepsC = __webpack_require__(208);

var _EmfeStepsC2 = _interopRequireDefault(_EmfeStepsC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeStepsC2.default.install = function (Vue) {
  Vue.component(_EmfeStepsC2.default.name, _EmfeStepsC2.default);
};

exports.default = _EmfeStepsC2.default;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(209),
  /* template */
  __webpack_require__(210),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeStepsC',
  props: {
    datas: {
      type: Object,
      required: true
    },
    active: {
      type: Number,
      required: true
    },
    className: String
  },
  computed: {
    stepscName: function stepscName() {
      return [(0, _defineProperty3.default)({}, this.className + '-stepsc', !!this.className)];
    },
    textName: function textName() {
      return [(0, _defineProperty3.default)({}, 'emfe-steps-c-' + this.datas.textPosition, !!this.datas)];
    },
    boxName: function boxName() {
      return [(0, _defineProperty3.default)({}, 'emfe-steps-c-main-' + this.datas.textPosition, !!this.datas)];
    }
  }
};

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-steps-c",
      class: _vm.stepscName
    }, [_vm.datas.textPosition === 'top' || _vm.datas.textPosition !== 'bottom' ? _c('div', {
      staticClass: "emfe-steps-c-text",
      class: _vm.textName
    }, _vm._l(_vm.datas.stepsText, function (item, index) {
      return _c('p', {
        key: index,
        staticClass: "emfe-steps-c-text-top"
      }, [_vm._v(_vm._s(item.text))]);
    })) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "emfe-steps-c-main",
      class: _vm.boxName
    }, _vm._l(_vm.datas.allStepsNums, function (i) {
      return _c('div', {
        key: i,
        staticClass: "emfe-steps-c-main-item",
        class: {
          'emfe-steps-c-main-flex': i !== _vm.datas.allStepsNums
        }
      }, [i >= _vm.active ? _c('p', {
        staticClass: "emfe-steps-c-main-item-text",
        class: {
          'emfe-steps-c-main-item-now': i === _vm.active
        }
      }, [_vm._v(_vm._s(i))]) : _vm._e(), _vm._v(" "), i < _vm.active ? _c('emfe-icon', {
        attrs: {
          "type": "querentouxiang",
          "className": "emfe-steps-c"
        }
      }) : _vm._e(), _vm._v(" "), i !== _vm.datas.allStepsNums ? _c('div', {
        staticClass: "emfe-steps-c-main-item-line",
        class: {
          'emfe-steps-c-main-item-line-active': i < _vm.active
        }
      }) : _vm._e()], 1);
    })), _vm._v(" "), _vm.datas.textPosition === 'bottom' ? _c('div', {
      staticClass: "emfe-steps-c-text",
      class: _vm.textName
    }, _vm._l(_vm.datas.stepsText, function (item, index) {
      return _c('div', {
        key: index,
        staticClass: "emfe-steps-c-text-item"
      }, [_c('div', {
        staticClass: "emfe-steps-c-text-item-bottom"
      }, [_c('p', {
        staticClass: "emfe-steps-c-text-bottom-name",
        class: {
          'emfe-steps-c-text-bottom-name-not': index >= _vm.active
        }
      }, [_vm._v(_vm._s(item.text))]), _vm._v(" "), item.describe && index < _vm.active ? _c('p', {
        staticClass: "emfe-steps-c-text-bottom-describe"
      }, _vm._l(item.describe, function (describeItem) {
        return _c('span', {
          staticClass: "emfe-steps-c-text-bottom-describe-item"
        }, [_vm._v(_vm._s(describeItem))]);
      })) : _vm._e()])]);
    })) : _vm._e()]);
  }, staticRenderFns: [] };

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeStepsB = __webpack_require__(212);

var _EmfeStepsB2 = _interopRequireDefault(_EmfeStepsB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeStepsB2.default.install = function (Vue) {
  Vue.component(_EmfeStepsB2.default.name, _EmfeStepsB2.default);
};

exports.default = _EmfeStepsB2.default;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(213),
  /* template */
  __webpack_require__(214),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeStepsC',
  props: {
    datas: {
      type: Object,
      required: true
    },
    active: {
      type: Number,
      required: true
    },
    className: String
  },
  computed: {
    stepscName: function stepscName() {
      return [(0, _defineProperty3.default)({}, this.className + '-stepsb', !!this.className)];
    }
  }
};

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-steps-b",
      class: _vm.stepscName
    }, [_c('div', {
      staticClass: "emfe-steps-b-main"
    }, _vm._l(_vm.datas.allStepsNums, function (i) {
      return _c('div', {
        key: i,
        staticClass: "emfe-steps-b-main-item",
        class: {
          'emfe-steps-b-main-flex': i !== _vm.datas.allStepsNums
        }
      }, [i >= _vm.active ? _c('p', {
        staticClass: "emfe-steps-b-main-item-text",
        class: {
          'emfe-steps-b-main-item-now': i === _vm.active
        }
      }, [_vm._v(_vm._s(i))]) : _vm._e(), _vm._v(" "), i < _vm.active ? _c('emfe-icon', {
        attrs: {
          "type": "querentouxiang",
          "className": "emfe-steps-b"
        }
      }) : _vm._e(), _vm._v(" "), i !== _vm.datas.allStepsNums ? _c('div', {
        staticClass: "emfe-steps-b-main-item-line",
        class: {
          'emfe-steps-b-main-item-line-active': i < _vm.active
        }
      }) : _vm._e()], 1);
    })), _vm._v(" "), _c('div', {
      staticClass: "emfe-steps-b-text"
    }, _vm._l(_vm.datas.stepsText, function (item, index) {
      return _c('p', {
        key: index,
        staticClass: "emfe-steps-b-text-item"
      }, [_vm._v(_vm._s(item.text))]);
    }))]);
  }, staticRenderFns: [] };

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeNumber = __webpack_require__(216);

var _EmfeNumber2 = _interopRequireDefault(_EmfeNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeNumber2.default.install = function (Vue) {
  Vue.component(_EmfeNumber2.default.name, _EmfeNumber2.default);
};

exports.default = _EmfeNumber2.default;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(217),
  /* template */
  __webpack_require__(218),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeNumber',
  data: function data() {
    return {
      num: this.value
    };
  },

  props: {
    value: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ''
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    step: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: true
    },
    isClick: {
      type: Boolean,
      default: true
    },
    className: String
  },
  computed: {
    numberName: function numberName() {
      return [(0, _defineProperty3.default)({}, this.className + '-number', !!this.className)];
    },
    plusdisable: function plusdisable() {
      return this.max - this.num < this.step;
    },
    reducedisable: function reducedisable() {
      return this.num - this.min < this.step;
    }
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
      if (this.isClick) {
        var fixNum = this.toFix();
        if (!this.plusdisable) {
          this.num = this.num - 0;
          var oldNum = this.num;
          this.num += this.step;
          this.num = this.num.toFixed(fixNum) - 0;
          this.$emit('change', this.num, oldNum);
          this.$emit('input', this.num);
          this.$emit('plus');
        }
      }
    },
    reduce: function reduce() {
      if (this.isClick) {
        var fixNum = this.toFix();
        if (!this.reducedisable) {
          this.num = this.num - 0;
          var oldNum = this.num;
          this.num -= this.step;
          this.num = this.num.toFixed(fixNum) - 0;
          this.$emit('change', this.num, oldNum);
          this.$emit('input', this.num);
          this.$emit('reduce');
        }
      }
    },
    input: function input(ev) {
      var value = ev.target.value;

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
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.num = val;
      }
    },
    isClick: function isClick(val) {
      this.isClick = val;
    }
  }
};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-number",
      class: _vm.numberName
    }, [_c('button', {
      staticClass: "emfe-number-reduce",
      class: {
        'emfe-number-reduce-disable': _vm.reducedisable
      },
      on: {
        "click": _vm.reduce
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-number-num"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.num,
        expression: "num"
      }],
      staticClass: "emfe-number-val",
      class: {
        'emfe-number-val-nounit': !_vm.unit
      },
      attrs: {
        "type": "tel",
        "maxlength": _vm.max.length,
        "disabled": _vm.disabled
      },
      domProps: {
        "value": _vm.num
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.num = $event.target.value;
        }, _vm.input],
        "focus": _vm.focus
      }
    }), _vm._v(" "), _vm.unit ? _c('i', {
      staticClass: "emfe-number-unit"
    }, [_vm._v(_vm._s(_vm.unit))]) : _vm._e()]), _vm._v(" "), _c('button', {
      staticClass: "emfe-number-plus",
      class: {
        'emfe-number-plus-disable': _vm.plusdisable
      },
      on: {
        "click": _vm.plus
      }
    })]);
  }, staticRenderFns: [] };

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeDate = __webpack_require__(220);

var _EmfeDate2 = _interopRequireDefault(_EmfeDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeDate2.default.install = function (Vue) {
  Vue.component(_EmfeDate2.default.name, _EmfeDate2.default);
};

exports.default = _EmfeDate2.default;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(221),
  /* template */
  __webpack_require__(222),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _date = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allDays = 42;

var allYears = 10;

exports.default = {
  name: 'EmfeDate',
  data: function data() {
    return {
      currentView: 'date',
      today: (0, _date.initTimeDate)(),
      startYear: null,
      year: null,
      month: null,
      day: null,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      date: this.placeholder,
      status: this.open
    };
  },

  props: {
    panelstyle: {
      type: Object,
      default: function _default() {}
    },
    format: {
      type: String,
      default: '/'
    },
    value: {
      type: String,
      default: ''
    },
    disabled: (0, _defineProperty3.default)({
      type: Boolean
    }, 'type', false),

    placeholder: {
      type: String,
      default: '选择日期'
    },
    confirm: {
      type: Boolean,
      default: true
    },

    open: {
      type: Boolean,
      default: false
    },

    disabledDate: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    className: String
  },
  computed: {
    dateName: function dateName() {
      return [(0, _defineProperty3.default)({}, this.className + '-date', !!this.className)];
    },
    lastMonthDays: function lastMonthDays() {
      var date = new Date(this.year, this.month, 1);
      var maxDaysNum = date.getDay();
      var handleMonth = date.getMonth() === 0 ? 11 : date.getMonth() - 1;
      var dateCountOfLastMonth = (0, _date.getDayCountOfMonth)(date.getFullYear(), handleMonth);
      var lastMonth = this.month - 1;
      var days = [];
      for (var i = 0; i < maxDaysNum; i++) {
        days.unshift({
          num: dateCountOfLastMonth - i,
          undo: this.disabledDate(new Date(this.year, lastMonth, dateCountOfLastMonth - i))
        });
      }
      return days;
    },
    days: function days() {
      var days = [];
      var len = (0, _date.getDayCountOfMonth)(this.year, this.month) + 1;
      var now = (0, _date.clearHours)(new Date());
      var choiceNow = (0, _date.clearHours)(new Date(this.date));

      for (var i = 1; i < len; i++) {
        var loopNow = new Date(this.year, this.month, i);
        days.push({
          num: i,
          undo: this.disabledDate(loopNow),
          today: (0, _date.clearHours)(loopNow) === now,
          choice: (0, _date.clearHours)(loopNow) === choiceNow
        });
      }

      return days;
    },
    nextMonthDays: function nextMonthDays() {
      var days = [];
      var len = allDays - this.lastMonthDays.length - this.days.length;
      var nextMonth = this.month + 1;

      len += 1;

      for (var i = 1; i < len; i++) {
        days.push({
          num: i,
          undo: this.disabledDate(new Date(this.year, nextMonth, i))
        });
      }

      return days;
    },
    years: function years() {
      this.startYear = Math.floor(this.year / allYears, 10) * allYears;
      var years = [];
      for (var i = this.startYear, len = this.startYear + allYears; i < len; i++) {
        years.push(i);
      }
      return years;
    },
    choiced: function choiced() {
      return this.date && this.date !== this.placeholder;
    }
  },
  mounted: function mounted() {
    this.initData(this.value);
  },

  methods: {
    initData: function initData(value) {
      if (value && value !== this.placeholder) {
        var vals = value.split(this.format);
        this.year = vals[0];
        this.month = vals[1] - 1;
        this.day = vals[2] - 0;
        this.day = this.day > 9 ? this.day : '0' + this.day;
        var month = this.month + 1 > 9 ? this.month + 1 : '0' + (this.month + 1);
        this.date = '' + this.year + this.format + month + this.format + this.day;
      } else if (this.today && !this.year) {
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth();
      } else {
        this.date = '';
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
      if (!day.undo) {
        this.day = day.num > 9 ? day.num : '0' + day.num;
        var month = this.month + 1 > 9 ? this.month + 1 : '0' + (this.month + 1);
        this.date = '' + this.year + this.format + month + this.format + this.day;
        this.$emit('input', this.date);

        if (!this.confirm) {
          this.ok();
          this.$emit('choice', this.date);
          this.$emit('change', this.date);
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
      this.$emit('ok', this.date === this.placeholder ? '' : this.date);
      this.$emit('input', this.date === this.placeholder ? '' : this.date);
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.date === this.placeholder ? '' : this.date);
          this.$emit('input', this.date === this.placeholder ? '' : this.date);
        }
        this.status = false;
      }
    },
    cancel: function cancel() {
      this.date = this.placeholder;
      this.$emit('input', '');
      this.$emit('cancel', '');
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData(val);
      }
    }
  }
};

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      directives: [{
        name: "emfe-documentclick",
        rawName: "v-emfe-documentclick",
        value: _vm.close,
        expression: "close"
      }],
      staticClass: "emfe-date",
      class: _vm.dateName
    }, [!_vm.open && !_vm.disabled ? _c('button', {
      staticClass: "emfe-date-btn",
      on: {
        "click": _vm.toggle
      }
    }, [_c('span', {
      staticClass: "emfe-date-btn-text",
      class: {
        'emfe-date-btn-text-choice': _vm.choiced
      }
    }, [_vm._v(_vm._s(_vm.date))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "rili",
        "className": "emfe-date"
      },
      on: {
        "icon-click": _vm.toggle
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-date"
      },
      on: {
        "icon-click": _vm.cancel
      }
    })], 1) : _vm._e(), _vm._v(" "), !_vm.open && _vm.disabled ? _c('button', {
      staticClass: "emfe-date-btn emfe-date-btn-disabled"
    }, [_c('span', {
      staticClass: "emfe-date-btn-text",
      class: {
        'emfe-date-btn-text-choice': _vm.choiced
      }
    }, [_vm._v(_vm._s(_vm.date))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "rili",
        "className": "emfe-date"
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-date"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c('emfe-transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.status,
        expression: "status"
      }],
      staticClass: "emfe-date-box",
      class: {
        'emfe-date-box-position': !_vm.open
      },
      style: _vm.panelstyle
    }, [_c('div', {
      staticClass: "emfe-date-header"
    }, [_c('button', {
      staticClass: "emfe-date-prevyear",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.prevYear($event);
        }
      }
    }, [_vm._v("<<")]), _vm._v(" "), _c('button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentView === 'date',
        expression: "currentView === 'date'"
      }],
      staticClass: "emfe-date-prevmonth",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.prevMonth($event);
        }
      }
    }, [_vm._v("<")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentView === 'date',
        expression: "currentView === 'date'"
      }],
      staticClass: "emfe-date-text"
    }, [_c('i', {
      staticClass: "emfe-date-text-year",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.yearHandle($event);
        }
      }
    }, [_vm._v(_vm._s(_vm.year))]), _vm._v(" "), _c('em', [_vm._v("-")]), _vm._v(" "), _c('i', {
      staticClass: "emfe-date-text-month",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.monthHandle($event);
        }
      }
    }, [_vm._v(_vm._s(_vm.month + 1))])]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentView === 'month',
        expression: "currentView === 'month'"
      }],
      staticClass: "emfe-date-text"
    }, [_c('i', {
      staticClass: "emfe-date-text-year",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.yearHandle($event);
        }
      }
    }, [_vm._v(_vm._s(_vm.year))])]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentView === 'year',
        expression: "currentView === 'year'"
      }],
      staticClass: "emfe-date-text"
    }, [_c('i', {
      staticClass: "emfe-date-text-yearrange",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.yearHandle($event);
        }
      }
    }, [_vm._v(_vm._s(_vm.startYear) + " - " + _vm._s(_vm.years[_vm.years.length - 1]))])]), _vm._v(" "), _c('button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentView === 'date',
        expression: "currentView === 'date'"
      }],
      staticClass: "emfe-date-nextmonth",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.nextMonth($event);
        }
      }
    }, [_vm._v(">")]), _vm._v(" "), _c('button', {
      staticClass: "emfe-date-nextyear",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.nextYear($event);
        }
      }
    }, [_vm._v(">>")])]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentView === 'date',
        expression: "currentView === 'date'"
      }]
    }, [_c('div', {
      staticClass: "emfe-date-week"
    }, [_c('span', {
      staticClass: "emfe-date-week-item"
    }, [_vm._v("日")]), _vm._v(" "), _c('span', {
      staticClass: "emfe-date-week-item"
    }, [_vm._v("一")]), _vm._v(" "), _c('span', {
      staticClass: "emfe-date-week-item"
    }, [_vm._v("二")]), _vm._v(" "), _c('span', {
      staticClass: "emfe-date-week-item"
    }, [_vm._v("三")]), _vm._v(" "), _c('span', {
      staticClass: "emfe-date-week-item"
    }, [_vm._v("四")]), _vm._v(" "), _c('span', {
      staticClass: "emfe-date-week-item"
    }, [_vm._v("五")]), _vm._v(" "), _c('span', {
      staticClass: "emfe-date-week-item"
    }, [_vm._v("六")])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-date-day"
    }, [_vm._l(_vm.lastMonthDays, function (day) {
      return _c('span', {
        staticClass: "emfe-date-item emfe-date-item-prev",
        class: {
          'emfe-date-item-disable': day.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choicePrevMonthDay(day);
          }
        }
      }, [_vm._v(_vm._s(day.num))]);
    }), _vm._v(" "), _vm._l(_vm.days, function (day) {
      return _c('span', {
        staticClass: "emfe-date-item",
        class: {
          'emfe-date-item-disable': day.undo, 'emfe-date-today': day.today, 'emfe-date-choice': day.choice
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceDay(day);
          }
        }
      }, [_vm._v(_vm._s(day.num))]);
    }), _vm._v(" "), _vm._l(_vm.nextMonthDays, function (day) {
      return _c('span', {
        staticClass: "emfe-date-item emfe-date-item-prev",
        class: {
          'emfe-date-item-disable': day.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceNextMonthDay(day);
          }
        }
      }, [_vm._v(_vm._s(day.num))]);
    })], 2)]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentView === 'month',
        expression: "currentView === 'month'"
      }],
      staticClass: "emfe-date-month"
    }, _vm._l(_vm.months, function (month) {
      return _c('span', {
        staticClass: "emfe-date-month-item",
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceMonth(month);
          }
        }
      }, [_vm._v(_vm._s(month))]);
    })), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentView === 'year',
        expression: "currentView === 'year'"
      }],
      staticClass: "emfe-date-year"
    }, _vm._l(_vm.years, function (year) {
      return _c('span', {
        staticClass: "emfe-date-year-item",
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceYear(year);
          }
        }
      }, [_vm._v(_vm._s(year))]);
    })), _vm._v(" "), _vm.confirm ? _c('div', {
      staticClass: "emfe-date-footer"
    }, [_c('button', {
      staticClass: "emfe-date-ok",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.ok($event);
        }
      }
    }, [_vm._v("确定")])]) : _vm._e()])])], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeDateM = __webpack_require__(224);

var _EmfeDateM2 = _interopRequireDefault(_EmfeDateM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeDateM2.default.install = function (Vue) {
  Vue.component(_EmfeDateM2.default.name, _EmfeDateM2.default);
};

exports.default = _EmfeDateM2.default;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(225),
  /* template */
  __webpack_require__(226),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _date = __webpack_require__(24);

var _time = __webpack_require__(18);

var _time2 = _interopRequireDefault(_time);

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeTimeM',
  data: function data() {
    return {
      Contant: _contant2.default,
      canSetNow: true,
      years: [],
      months: [],
      days: [],
      year: '',
      month: '',
      day: '',
      choiced: false,
      status: this.open
    };
  },

  props: {
    enabledDate: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    format: {
      type: String,
      default: '/'
    },
    yearStart: {
      type: Number,
      default: 1920
    },
    yearEnd: {
      type: Number,
      default: 2020
    },

    placeholder: {
      type: String,
      default: '选择日期'
    },
    value: {
      type: String,
      default: ''
    },
    confirm: {
      type: Boolean,
      default: true
    },
    disabled: (0, _defineProperty3.default)({
      type: Boolean
    }, 'type', false),

    open: {
      type: Boolean,
      default: false
    },

    disabledYears: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledMonths: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    weekChoices: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    className: String
  },
  computed: {
    date: function date() {
      var date = this.placeholder;
      if (this.choiced) {
        date = '' + this.year + this.format + this.month + this.format + this.day;
      }
      return date;
    },
    dateName: function dateName() {
      return [(0, _defineProperty3.default)({}, this.className + '-date', !!this.className)];
    },
    buttonName: function buttonName() {
      return [(0, _defineProperty3.default)({}, this.className + '-date-button', !!this.className)];
    },
    boxName: function boxName() {
      return [(0, _defineProperty3.default)({}, this.className + '-date-box', !!this.className)];
    }
  },
  mounted: function mounted() {
    this.resetDays();
    this.initData();
  },

  methods: {
    refreshIscroll: function refreshIscroll() {
      var _this = this;

      setTimeout(function () {
        (0, _keys2.default)(_this.$refs).forEach(function (iscroll) {
          if (_this.$refs[iscroll].refresh) {
            _this.$refs[iscroll].refresh();
          }
        });
      }, 0);
    },
    setNow: function setNow() {
      var now = new Date();
      var dayNow = now.getDate();
      var monthNow = now.getMonth();
      var yearNow = now.getFullYear();
      var month = this.months[monthNow];
      var year = this.years.find(function (iYear) {
        return iYear.num - 0 === yearNow;
      });
      var day = this.days[dayNow - 1];
      this.year = year.num;
      this.month = month.num;
      this.day = day.num;

      this.year = _time2.default.loopChoice(this.years, this.year);
      this.month = _time2.default.loopChoice(this.months, this.month);
      this.day = _time2.default.loopChoice(this.days, this.day);
      this.choiced = true;
    },
    scrollEle: function scrollEle(doScroll) {
      var _this2 = this;

      var _$refs = this.$refs,
          listItem1 = _$refs.listItem1,
          listItem2 = _$refs.listItem2,
          listItem3 = _$refs.listItem3;


      var years = this.years.filter(function (yearData) {
        return !yearData.undo;
      });
      var months = this.months.filter(function (monthData) {
        return !monthData.undo;
      });
      var days = this.days.filter(function (dayData) {
        return !dayData.undo;
      });

      var yearIndex = years.findIndex(function (yearData) {
        return yearData.num === _this2.year;
      }) - 2;
      var monthIndex = months.findIndex(function (monthData) {
        return monthData.num === _this2.month;
      }) - 2;
      var dayIndex = days.findIndex(function (dayData) {
        return dayData.num === _this2.day;
      }) - 2;

      if (listItem1 && doScroll === 'year') {
        setTimeout(function () {
          _this2.$refs.iscroll1.scrollToElement(listItem1[yearIndex < 0 ? 0 : yearIndex]);
        }, 0);
      }
      if (listItem2 && doScroll === 'month') {
        setTimeout(function () {
          _this2.$refs.iscroll2.scrollToElement(listItem2[monthIndex < 0 ? 0 : monthIndex]);
        }, 0);
      }
      if (listItem3 && doScroll === 'day') {
        setTimeout(function () {
          _this2.$refs.iscroll3.scrollToElement(listItem3[dayIndex < 0 ? 0 : dayIndex]);
        }, 0);
      }
    },
    initData: function initData() {
      if (this.value && this.value !== this.placeholder) {
        var dates = this.value.split(this.format);
        this.year = _time2.default.zeroFill(dates[0] - 0);
        this.month = _time2.default.zeroFill(dates[1] - 0);
        this.day = _time2.default.zeroFill(dates[2] - 0);
        this.choiced = true;
        this.canSetNow = false;
      } else {
        this.year = '';
        this.month = '';
        this.day = '';
        this.choiced = false;
      }
    },
    setChoice: function setChoice() {
      if (!this.choiced) {
        this.year = _time2.default.loopChoice(this.years, this.year);
        this.month = _time2.default.loopChoice(this.months, this.month);
        this.day = _time2.default.loopChoice(this.days, this.day);
        this.choiced = true;
      }
    },
    splitEnabledDate: function splitEnabledDate() {
      if (this.enabledDate.length > 1) {
        var startDate = this.enabledDate[0].split('/');
        var endDate = this.enabledDate[1].split('/');
        return {
          startDate: {
            year: startDate[0] - 0,
            month: startDate[1] - 0,
            day: startDate[2] - 0
          },
          endDate: {
            year: endDate[0] - 0,
            month: endDate[1] - 0,
            day: endDate[2] - 0
          }
        };
      }
      return {
        startDate: {
          year: this.yearStart,
          month: 13,
          day: (0, _date.getDayCountOfMonth)()
        },
        endDate: {
          year: this.yearEnd,
          month: 13,
          day: (0, _date.getDayCountOfMonth)()
        }
      };
    },
    resetDays: function resetDays() {
      var enabledDate = this.splitEnabledDate();
      this.years = [];
      for (var i = this.yearEnd; i > this.yearStart - 1; i--) {
        this.years.push(_time2.default.handleConputedDate(i, this.disabledYears, 'year', enabledDate, this, this.enabledDate.length > 1));
      }

      this.months = [];
      for (var _i = 1; _i < 13; _i++) {
        this.months.push(_time2.default.handleConputedDate(_i, this.disabledMonths, 'month', enabledDate, this, this.enabledDate.length > 1));
      }

      var dateCountOfLastMonth = (0, _date.getDayCountOfMonth)(this.year - 0, this.month - 1);
      this.days = [];
      for (var _i2 = 1; _i2 < dateCountOfLastMonth + 1; _i2++) {
        this.days.push(_time2.default.handleConputedDate(_i2, this.disabledDays, 'day', enabledDate, this, this.enabledDate.length > 1));
      }
      this.setWeekChoice();
    },
    setWeekChoice: function setWeekChoice() {
      var _this3 = this;

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

      var enabledDate = this.splitEnabledDate();
      var startMonth = enabledDate.startDate.month;
      var endMonth = enabledDate.endDate.month;
      var newYear = this.year - 0;
      var newMonth = this.month - 0;
      var startYear = enabledDate.startDate.year;
      var endYear = enabledDate.endDate.year;
      var startDate = enabledDate.startDate.day;
      var endDate = enabledDate.endDate.day;

      this.days.forEach(function (tday) {
        var nowYear = _this3.year ? _this3.year : year;
        var nowMonth = _this3.month ? _this3.month : month;
        var nowDate = new Date(nowYear + '/' + nowMonth + '/' + tday.num);
        var nowWeek = nowDate.getDay() + 1;
        tday.undo = !_this3.weekChoices.every(function (wc) {
          return wc !== nowWeek;
        });
        if (newYear === startYear && newMonth === startMonth) {
          tday.undo = tday.num < startDate;
        } else if (newYear === endYear && newMonth === endMonth) {
          tday.undo = tday.num > endDate;
        }
      });
      this.day = _time2.default.loopChoice(this.days, this.day);
      this.$emit('input', this.date);
    },
    choiceYear: function choiceYear(year) {
      var _this4 = this;

      if (!year.undo) {
        this.setChoice();
        this.year = year.num;
        this.resetDays();
        setTimeout(function () {
          _this4.month = _time2.default.loopChoice(_this4.months, _this4.month);
          _this4.refreshIscroll();
          _this4.scrollAll();
          _this4.$emit('choice', _this4.date);
          _this4.$emit('change', _this4.date);
          _this4.$emit('input', _this4.date);
        }, 0);
      }
    },
    choiceMonth: function choiceMonth(month) {
      var _this5 = this;

      if (!month.undo) {
        this.setChoice();
        this.month = month.num;
        this.resetDays();
        setTimeout(function () {
          _this5.refreshIscroll();
          _this5.scrollAll();
          _this5.$emit('choice', _this5.date);
          _this5.$emit('change', _this5.date);
          _this5.$emit('input', _this5.date);
        }, 0);
      }
    },
    choiceDay: function choiceDay(day) {
      if (!day.undo) {
        this.setChoice();
        this.day = day.num;
        this.$emit('choice', this.date);
        this.$emit('change', this.date);
        this.$emit('input', this.date);
      }
    },
    toggle: function toggle() {
      var _this6 = this;

      this.status = !this.status;
      if (this.canSetNow) {
        this.setNow();
        this.resetDays();
      }
      setTimeout(function () {
        _this6.month = _time2.default.loopChoice(_this6.months, _this6.month);
        _this6.day = _time2.default.loopChoice(_this6.days, _this6.day);
        _this6.refreshIscroll();
        _this6.scrollAll();
      });
    },
    scrollAll: function scrollAll() {
      this.scrollEle('year');
      this.scrollEle('month');
      this.scrollEle('day');
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
      this.canSetNow = false;
      this.close(true);
      this.$emit('ok', this.date);
      this.$emit('input', this.date);
    },
    cancel: function cancel() {
      this.canSetNow = true;
      this.choiced = false;
      this.year = '';
      this.month = '';
      this.day = '';
      this.$emit('cancel', this.date);
      this.$emit('input', this.date);
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
        this.resetDays();
      }
    }
  }
};

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      directives: [{
        name: "emfe-documentclick",
        rawName: "v-emfe-documentclick",
        value: _vm.close,
        expression: "close"
      }],
      staticClass: "emfe-date-m",
      class: _vm.dateName
    }, [!_vm.open && !_vm.disabled ? _c('button', {
      staticClass: "emfe-date-m-btn",
      class: _vm.buttonName,
      on: {
        "click": _vm.toggle
      }
    }, [_c('span', {
      staticClass: "emfe-date-m-btn-text",
      class: {
        'emfe-date-m-btn-text-choice': _vm.choiced
      }
    }, [_vm._v(_vm._s(_vm.date))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "rili",
        "className": "emfe-date-m"
      },
      on: {
        "icon-click": _vm.toggle
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-date-m"
      },
      on: {
        "icon-click": _vm.cancel
      }
    })], 1) : _vm._e(), _vm._v(" "), !_vm.open && _vm.disabled ? _c('button', {
      staticClass: "emfe-date-m-btn emfe-date-m-btn-disabled",
      class: _vm.buttonName
    }, [_c('span', {
      staticClass: "emfe-date-m-btn-text"
    }, [_vm._v(_vm._s(_vm.date))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "rili",
        "className": "emfe-date-m"
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-date-m"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c('emfe-transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.status,
        expression: "status"
      }],
      staticClass: "emfe-date-m-box",
      class: {
        'emfe-date-m-box-position': !_vm.open, boxName: _vm.boxName
      }
    }, [_vm.confirm ? _c('div', {
      staticClass: "emfe-date-m-footer"
    }, [_c('button', {
      staticClass: "emfe-date-m-ok",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.ok($event);
        }
      }
    }, [_vm._v("确定")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "emfe-date-m-main"
    }, [_c('emfe-iscroll', {
      ref: "iscroll1",
      staticClass: "emfe-date-m-item",
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-date-m-list",
      attrs: {
        "id": "list1"
      }
    }, _vm._l(_vm.years, function (yearLoop) {
      return !yearLoop.undo ? _c('li', {
        ref: "listItem1",
        refInFor: true,
        staticClass: "emfe-date-m-list-item",
        class: {
          'emfe-date-m-list-item-on': yearLoop.num === _vm.year, 'emfe-date-m-list-item-disable': yearLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceYear(yearLoop);
          }
        }
      }, [_vm._v(_vm._s(yearLoop.num))]) : _vm._e();
    }))]), _vm._v(" "), _c('emfe-iscroll', {
      ref: "iscroll2",
      staticClass: "emfe-date-m-item",
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-date-m-list"
    }, _vm._l(_vm.months, function (monthLoop) {
      return !monthLoop.undo ? _c('li', {
        ref: "listItem2",
        refInFor: true,
        staticClass: "emfe-date-m-list-item",
        class: {
          'emfe-date-m-list-item-on': monthLoop.num === _vm.month, 'emfe-date-m-list-item-disable': monthLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceMonth(monthLoop);
          }
        }
      }, [_vm._v(_vm._s(monthLoop.num))]) : _vm._e();
    }))]), _vm._v(" "), _c('emfe-iscroll', {
      ref: "iscroll3",
      staticClass: "emfe-date-m-item",
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-date-m-list"
    }, _vm._l(_vm.days, function (dayLoop, dayIndex) {
      return !dayLoop.undo ? _c('li', {
        ref: "listItem3",
        refInFor: true,
        staticClass: "emfe-date-m-list-item",
        class: {
          'emfe-date-m-list-item-on': dayLoop.num === _vm.day, 'emfe-date-m-list-item-disable': dayLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceDay(dayLoop);
          }
        }
      }, [_vm._v(_vm._s(dayLoop.num))]) : _vm._e();
    }))])], 1)])])], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTime = __webpack_require__(228);

var _EmfeTime2 = _interopRequireDefault(_EmfeTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTime2.default.install = function (Vue) {
  Vue.component(_EmfeTime2.default.name, _EmfeTime2.default);
};

exports.default = _EmfeTime2.default;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(229),
  /* template */
  __webpack_require__(230),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _time = __webpack_require__(18);

var _time2 = _interopRequireDefault(_time);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hourNum = 24;
var minuteNum = 60;
var secondNum = 60;
exports.default = {
  name: 'EmfeTime',
  data: function data() {
    return {
      Contant: _contant2.default,
      canSetNow: true,
      hours: [],
      minutes: [],
      seconds: [],
      hour: '',
      minute: '',
      second: '',
      choiced: false,
      status: this.open
    };
  },

  props: {
    placeholder: {
      type: String,
      default: '选择时间'
    },

    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59'
    },
    value: {
      type: String,
      default: ''
    },
    exact: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['hour', 'minute', 'second']);
      },

      default: 'second'
    },
    confirm: {
      type: Boolean,
      default: true
    },
    disabled: (0, _defineProperty3.default)({
      type: Boolean
    }, 'type', false),

    open: {
      type: Boolean,
      default: false
    },
    invisibleDisable: Boolean,
    disabledHours: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledMinutes: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledSeconds: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    className: String
  },
  computed: {
    timeName: function timeName() {
      return [(0, _defineProperty3.default)({}, this.className + '-time', !!this.className)];
    },
    itemName: function itemName() {
      return [(0, _defineProperty3.default)({}, this.className + '-item', !!this.className), ['emfe-time-item-' + this.exact]];
    },
    time: function time() {
      var time = this.placeholder;
      if (this.choiced) {
        if (this.exact === 'hour') {
          time = '' + this.hour;
        } else if (this.exact === 'minute') {
          time = this.hour + ':' + this.minute;
        } else {
          time = this.hour + ':' + this.minute + ':' + this.second;
        }
      }
      return time;
    }
  },
  mounted: function mounted() {
    for (var i = 0; i < hourNum; i++) {
      this.hours.push(_time2.default.handleConputedTime(i, this.disabledHours));
    }
    for (var _i = 0; _i < minuteNum; _i++) {
      this.minutes.push(_time2.default.handleConputedTime(_i, this.disabledMinutes));
    }
    for (var _i2 = 0; _i2 < secondNum; _i2++) {
      this.seconds.push(_time2.default.handleConputedTime(_i2, this.disabledSeconds));
    }
    this.initData();
    this.setTimeChoice();
  },

  methods: {
    refreshIscroll: function refreshIscroll() {
      var _this = this;

      (0, _keys2.default)(this.$refs).forEach(function (iscroll) {
        if (_this.$refs[iscroll].refresh) {
          _this.$refs[iscroll].refresh();
        }
      });
    },
    setNow: function setNow() {
      var now = new Date();
      var hourNow = now.getHours();
      var hour = this.hours[hourNow];
      this.hour = hour.undo ? _time2.default.loopChoice(this.hours, hour.num) : hour.num;
    },
    scrollEle: function scrollEle(doScroll) {
      var _this2 = this;

      var _$refs = this.$refs,
          listItem1 = _$refs.listItem1,
          listItem2 = _$refs.listItem2,
          listItem3 = _$refs.listItem3;


      var hours = this.hours.filter(function (hourData) {
        return !hourData.undo;
      });
      var minutes = this.minutes.filter(function (minuteData) {
        return !minuteData.undo;
      });
      var seconds = this.seconds.filter(function (secondData) {
        return !secondData.undo;
      });

      var hourIndex = hours.findIndex(function (hourData) {
        return hourData.num === _this2.hour;
      }) - 2;
      var minuteIndex = minutes.findIndex(function (minuteData) {
        return minuteData.num === _this2.minute;
      }) - 2;
      var secondIndex = seconds.findIndex(function (secondData) {
        return secondData.num === _this2.second;
      }) - 2;

      if (listItem1 && doScroll === 'hour') {
        this.$refs.iscroll1.scrollToElement(listItem1[hourIndex < 0 ? 0 : hourIndex]);
      }

      if (listItem2 && doScroll === 'minute') {
        this.$refs.iscroll2.scrollToElement(listItem2[minuteIndex < 0 ? 0 : minuteIndex]);
      }

      if (listItem3 && doScroll === 'second') {
        this.$refs.iscroll3.scrollToElement(listItem3[secondIndex < 0 ? 0 : secondIndex]);
      }
    },
    initData: function initData() {
      if (this.value && this.value !== this.placeholder) {
        var vals = this.value.split(':');
        this.hour = _time2.default.zeroFill(vals[0] - 0);
        this.minute = _time2.default.zeroFill(vals[1] - 0);
        this.second = _time2.default.zeroFill(vals[2] - 0);
        this.choiced = true;
      } else {
        this.hour = '';
        this.minute = '';
        this.second = '';
        this.choiced = false;
      }
    },
    setChoice: function setChoice(noSetTime) {
      if (!this.choiced) {
        if (noSetTime !== 'hour') {
          this.hour = _time2.default.loopChoice(this.hours, this.hour);
        }
        if (noSetTime !== 'minute') {
          this.minute = _time2.default.loopChoice(this.minutes, this.minute);
        }
        if (noSetTime !== 'second') {
          this.second = _time2.default.loopChoice(this.seconds, this.second);
        }
        this.choiced = true;
      }
    },
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
          min.undo = min.undo || hourIsStart && min.num < startTime[1] || hourIsEnd && min.num > endTime[1];
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
          sec.undo = sec.undo || before || after;
        });
      }
    },
    choiceHour: function choiceHour(hour) {
      if (!hour.undo) {
        this.setChoice();
        this.hour = hour.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('change', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceMinute: function choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('change', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceSecond: function choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('change', this.time);
        this.$emit('input', this.time);
      }
    },
    toggle: function toggle() {
      this.status = !this.status;
      this.refreshIscroll();
      if (this.canSetNow) {
        this.setNow();
      }
      this.setChoice('hour');
      this.scrollEle('hour');
      if (this.exact === 'minute' || this.exact === 'second') {
        this.scrollEle('minute');
      }
      if (this.exact === 'second') {
        this.scrollEle('second');
      }
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.time === this.placeholder ? '' : this.time);
          this.$emit('input', this.time === this.placeholder ? '' : this.time);
        }
        this.status = false;
      }
    },
    ok: function ok() {
      this.canSetNow = false;
      this.close(true);
      this.$emit('ok', this.time === this.placeholder ? '' : this.time);
      this.$emit('input', this.time === this.placeholder ? '' : this.time);
    },
    cancel: function cancel() {
      this.canSetNow = true;
      this.choiced = false;
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.$emit('cancel', '');
      this.$emit('input', '');
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
      }
    }
  }
};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      directives: [{
        name: "emfe-documentclick",
        rawName: "v-emfe-documentclick",
        value: _vm.close,
        expression: "close"
      }],
      staticClass: "emfe-time",
      class: _vm.timeName
    }, [!_vm.open && !_vm.disabled ? _c('button', {
      staticClass: "emfe-time-btn",
      on: {
        "click": _vm.toggle
      }
    }, [_c('span', {
      staticClass: "emfe-time-btn-text",
      class: {
        'emfe-time-btn-text-choice': _vm.choiced
      }
    }, [_vm._v(_vm._s(_vm.time))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "shijian",
        "className": "emfe-time"
      },
      on: {
        "icon-click": _vm.toggle
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-time"
      },
      on: {
        "icon-click": _vm.cancel
      }
    })], 1) : _vm._e(), _vm._v(" "), !_vm.open && _vm.disabled ? _c('button', {
      staticClass: "emfe-time-btn emfe-time-btn-disabled"
    }, [_c('span', {
      staticClass: "emfe-time-btn-text"
    }, [_vm._v(_vm._s(_vm.time))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "shijian",
        "className": "emfe-time"
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-time"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c('emfe-transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.status,
        expression: "status"
      }],
      staticClass: "emfe-time-box",
      class: {
        'emfe-time-box-position': !_vm.open
      }
    }, [_c('div', {
      staticClass: "emfe-time-main"
    }, [_c('emfe-iscroll', {
      ref: "iscroll1",
      staticClass: "emfe-time-item",
      class: _vm.itemName,
      style: {
        width: _vm.exact === 'hour' ? '100%' : _vm.exact === 'minute' ? '50%' : '33.33333%'
      },
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-time-list"
    }, _vm._l(_vm.hours, function (hourLoop) {
      return _vm.invisibleDisable || !hourLoop.undo ? _c('li', {
        ref: "listItem1",
        refInFor: true,
        staticClass: "emfe-time-list-item",
        class: {
          'emfe-time-list-item-on': hourLoop.num === _vm.hour, 'emfe-time-list-item-disable': hourLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceHour(hourLoop);
          }
        }
      }, [_vm._v(_vm._s(hourLoop.num))]) : _vm._e();
    }))]), _vm._v(" "), _vm.exact === 'minute' || _vm.exact === 'second' ? _c('emfe-iscroll', {
      ref: "iscroll2",
      staticClass: "emfe-time-item",
      class: _vm.itemName,
      style: {
        width: _vm.exact === 'minute' ? '50%' : '33.33333%'
      },
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-time-list"
    }, _vm._l(_vm.minutes, function (minuteLoop) {
      return _vm.invisibleDisable || !minuteLoop.undo ? _c('li', {
        ref: "listItem2",
        refInFor: true,
        staticClass: "emfe-time-list-item",
        class: {
          'emfe-time-list-item-on': minuteLoop.num === _vm.minute, 'emfe-time-list-item-disable': minuteLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceMinute(minuteLoop);
          }
        }
      }, [_vm._v(_vm._s(minuteLoop.num))]) : _vm._e();
    }))]) : _vm._e(), _vm._v(" "), _vm.exact === 'second' ? _c('emfe-iscroll', {
      ref: "iscroll3",
      staticClass: "emfe-time-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-time-list"
    }, _vm._l(_vm.seconds, function (secondLoop, secondIndex) {
      return _vm.invisibleDisable || !secondLoop.undo ? _c('li', {
        ref: "listItem3",
        refInFor: true,
        staticClass: "emfe-time-list-item",
        class: {
          'emfe-time-list-item-on': secondLoop.num === _vm.second, 'emfe-time-list-item-disable': secondLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceSecond(secondLoop);
          }
        }
      }, [_vm._v(_vm._s(secondLoop.num))]) : _vm._e();
    }))]) : _vm._e()], 1), _vm._v(" "), _vm.confirm ? _c('div', {
      staticClass: "emfe-time-footer"
    }, [_c('button', {
      staticClass: "emfe-time-ok",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.ok($event);
        }
      }
    }, [_vm._v("确定")])]) : _vm._e()])])], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTimeM = __webpack_require__(232);

var _EmfeTimeM2 = _interopRequireDefault(_EmfeTimeM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTimeM2.default.install = function (Vue) {
  Vue.component(_EmfeTimeM2.default.name, _EmfeTimeM2.default);
};

exports.default = _EmfeTimeM2.default;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(233),
  /* template */
  __webpack_require__(234),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _time = __webpack_require__(18);

var _time2 = _interopRequireDefault(_time);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hourNum = 24;
var minuteNum = 60;
var secondNum = 60;

exports.default = {
  name: 'EmfeTimeM',
  data: function data() {
    return {
      Contant: _contant2.default,
      canSetNow: true,
      hours: [],
      minutes: [],
      seconds: [],
      hour: '',
      minute: '',
      second: '',
      choiced: false,
      status: this.open
    };
  },

  props: {
    placeholder: {
      type: String,
      default: '选择时间'
    },
    value: {
      type: String,
      default: ''
    },
    exact: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['hour', 'minute', 'second']);
      },

      default: 'second'
    },
    confirm: {
      type: Boolean,
      default: true
    },
    disabled: (0, _defineProperty3.default)({
      type: Boolean
    }, 'type', false),

    open: {
      type: Boolean,
      default: false
    },

    disabledHours: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledMinutes: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledSeconds: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59'
    },
    className: String
  },
  computed: {
    timeName: function timeName() {
      return [(0, _defineProperty3.default)({}, this.className + '-time', !!this.className)];
    },
    itemName: function itemName() {
      return [(0, _defineProperty3.default)({}, this.className + '-item', !!this.className), ['emfe-time-m-item-' + this.exact]];
    },
    time: function time() {
      var time = this.placeholder;
      if (this.choiced) {
        if (this.exact === 'hour') {
          time = '' + this.hour;
        } else if (this.exact === 'minute') {
          time = this.hour + ':' + this.minute;
        } else {
          time = this.hour + ':' + this.minute + ':' + this.second;
        }
      }
      return time;
    }
  },
  mounted: function mounted() {
    for (var i = 0; i < hourNum; i++) {
      this.hours.push(_time2.default.handleConputedTime(i, this.disabledHours));
    }
    for (var _i = 0; _i < minuteNum; _i++) {
      this.minutes.push(_time2.default.handleConputedTime(_i, this.disabledMinutes));
    }
    for (var _i2 = 0; _i2 < secondNum; _i2++) {
      this.seconds.push(_time2.default.handleConputedTime(_i2, this.disabledSeconds));
    }
    this.initData();
    this.setTimeChoice();
  },

  methods: {
    refreshIscroll: function refreshIscroll() {
      var _this = this;

      (0, _keys2.default)(this.$refs).forEach(function (iscroll) {
        if (_this.$refs[iscroll].refresh) {
          _this.$refs[iscroll].refresh();
        }
      });
    },
    setNow: function setNow() {
      var now = new Date();
      var hourNow = now.getHours();
      var hour = this.hours[hourNow];
      this.hour = hour.undo ? _time2.default.loopChoice(this.hours, hour.num) : hour.num;
    },
    scrollEle: function scrollEle(doScroll) {
      var _this2 = this;

      var _$refs = this.$refs,
          listItem1 = _$refs.listItem1,
          listItem2 = _$refs.listItem2,
          listItem3 = _$refs.listItem3;


      var hours = this.hours.filter(function (hourData) {
        return !hourData.undo;
      });
      var minutes = this.minutes.filter(function (minuteData) {
        return !minuteData.undo;
      });
      var seconds = this.seconds.filter(function (secondData) {
        return !secondData.undo;
      });

      var hourIndex = hours.findIndex(function (hourData) {
        return hourData.num === _this2.hour;
      }) - 2;
      var minuteIndex = minutes.findIndex(function (minuteData) {
        return minuteData.num === _this2.minute;
      }) - 2;
      var secondIndex = seconds.findIndex(function (secondData) {
        return secondData.num === _this2.second;
      }) - 2;

      if (listItem1 && doScroll === 'hour') {
        this.$refs.iscroll1.scrollToElement(listItem1[hourIndex < 0 ? 0 : hourIndex]);
      }

      if (listItem2 && doScroll === 'minute') {
        this.$refs.iscroll2.scrollToElement(listItem2[minuteIndex < 0 ? 0 : minuteIndex]);
      }

      if (listItem3 && doScroll === 'second') {
        this.$refs.iscroll3.scrollToElement(listItem3[secondIndex < 0 ? 0 : secondIndex]);
      }
    },
    initData: function initData() {
      if (this.value && this.value !== this.placeholder) {
        var vals = this.value.split(':');
        this.hour = _time2.default.zeroFill(vals[0] - 0);
        this.minute = _time2.default.zeroFill(vals[1] - 0);
        this.second = _time2.default.zeroFill(vals[2] - 0);
        this.choiced = true;
      } else {
        this.hour = '';
        this.minute = '';
        this.second = '';
        this.choiced = false;
      }
    },
    setChoice: function setChoice(noSetTime) {
      if (!this.choiced) {
        if (noSetTime !== 'hour') {
          this.hour = _time2.default.loopChoice(this.hours, this.hour);
        }
        if (noSetTime !== 'minute') {
          this.minute = _time2.default.loopChoice(this.minutes, this.minute);
        }
        if (noSetTime !== 'second') {
          this.second = _time2.default.loopChoice(this.seconds, this.second);
        }
        this.choiced = true;
      }
    },
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
          min.undo = hourIsStart && min.num < startTime[1] || hourIsEnd && min.num > endTime[1];
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
        this.$emit('change', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceMinute: function choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('change', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceSecond: function choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('change', this.time);
        this.$emit('input', this.time);
      }
    },
    toggle: function toggle() {
      this.status = !this.status;
      this.refreshIscroll();
      if (this.canSetNow) {
        this.setNow();
      }
      this.setChoice('hour');
      this.scrollEle('hour');
      if (this.exact === 'minute' || this.exact === 'second') {
        this.scrollEle('minute');
      }
      if (this.exact === 'second') {
        this.scrollEle('second');
      }
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
      this.canSetNow = false;
      this.close(true);
      this.$emit('ok', this.time);
      this.$emit('input', this.time);
    },
    cancel: function cancel() {
      this.canSetNow = true;
      this.choiced = false;
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.$emit('cancel', this.time);
      this.$emit('input', this.time);
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
      }
    }
  }
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      directives: [{
        name: "emfe-documentclick",
        rawName: "v-emfe-documentclick",
        value: _vm.close,
        expression: "close"
      }],
      staticClass: "emfe-time-m",
      class: _vm.timeName
    }, [!_vm.open && !_vm.disabled ? _c('button', {
      staticClass: "emfe-time-m-btn",
      on: {
        "click": _vm.toggle
      }
    }, [_c('span', {
      staticClass: "emfe-time-m-btn-text",
      class: {
        'emfe-time-m-btn-text-choice': _vm.choiced
      }
    }, [_vm._v(_vm._s(_vm.time))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "shijian",
        "className": "emfe-time-m"
      },
      on: {
        "icon-click": _vm.toggle
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-time-m"
      },
      on: {
        "icon-click": _vm.cancel
      }
    })], 1) : _vm._e(), _vm._v(" "), !_vm.open && _vm.disabled ? _c('button', {
      staticClass: "emfe-time-m-btn emfe-time-m-btn-disabled"
    }, [_c('span', {
      staticClass: "emfe-time-m-btn-text"
    }, [_vm._v(_vm._s(_vm.time))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "shijian",
        "className": "emfe-time-m"
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-time-m"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c('emfe-transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.status,
        expression: "status"
      }],
      staticClass: "emfe-time-m-box",
      class: {
        'emfe-time-m-box-position': !_vm.open
      }
    }, [_vm.confirm ? _c('div', {
      staticClass: "emfe-time-m-footer"
    }, [_c('button', {
      staticClass: "emfe-time-m-ok",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.ok($event);
        }
      }
    }, [_vm._v("确定")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "emfe-time-m-main"
    }, [_c('emfe-iscroll', {
      ref: "iscroll1",
      staticClass: "emfe-time-m-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-time-m-list"
    }, _vm._l(_vm.hours, function (hourLoop) {
      return !hourLoop.undo ? _c('li', {
        ref: "listItem1",
        refInFor: true,
        staticClass: "emfe-time-m-list-item",
        class: {
          'emfe-time-m-list-item-on': hourLoop.num === _vm.hour, 'emfe-time-m-list-item-disable': hourLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceHour(hourLoop);
          }
        }
      }, [_vm._v(_vm._s(hourLoop.num))]) : _vm._e();
    }))]), _vm._v(" "), _vm.exact === 'minute' || _vm.exact === 'second' ? _c('emfe-iscroll', {
      ref: "iscroll2",
      staticClass: "emfe-time-m-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-time-m-list"
    }, _vm._l(_vm.minutes, function (minuteLoop) {
      return !minuteLoop.undo ? _c('li', {
        ref: "listItem2",
        refInFor: true,
        staticClass: "emfe-time-m-list-item",
        class: {
          'emfe-time-m-list-item-on': minuteLoop.num === _vm.minute, 'emfe-time-m-list-item-disable': minuteLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceMinute(minuteLoop);
          }
        }
      }, [_vm._v(_vm._s(minuteLoop.num))]) : _vm._e();
    }))]) : _vm._e(), _vm._v(" "), _vm.exact === 'second' ? _c('emfe-iscroll', {
      ref: "iscroll3",
      staticClass: "emfe-time-m-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-time-m-list"
    }, _vm._l(_vm.seconds, function (secondLoop, secondIndex) {
      return !secondLoop.undo ? _c('li', {
        ref: "listItem3",
        refInFor: true,
        staticClass: "emfe-time-m-list-item",
        class: {
          'emfe-time-m-list-item-on': secondLoop.num === _vm.second, 'emfe-time-m-list-item-disable': secondLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceSecond(secondLoop);
          }
        }
      }, [_vm._v(_vm._s(secondLoop.num))]) : _vm._e();
    }))]) : _vm._e()], 1)])])], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeDatetime = __webpack_require__(236);

var _EmfeDatetime2 = _interopRequireDefault(_EmfeDatetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeDatetime2.default.install = function (Vue) {
  Vue.component(_EmfeDatetime2.default.name, _EmfeDatetime2.default);
};

exports.default = _EmfeDatetime2.default;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(237),
  /* template */
  __webpack_require__(238),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _date = __webpack_require__(24);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zero = '00';
var timeZero = zero + ':' + zero + ':' + zero;
var timeText = '选择时间';
var dateText = '选择日期';

exports.default = {
  name: 'EmfeDatetime',
  data: function data() {
    return {
      date: '',
      time: timeZero,
      choiced: false,
      isDate: true,
      typeText: timeText,
      status: false
    };
  },

  props: {
    panelstyle: {
      type: Object,
      default: function _default() {}
    },
    formatDate: {
      type: String,
      default: '/'
    },

    placeholder: {
      type: String,
      default: '选择日期和时间'
    },
    value: {
      type: String,
      default: ''
    },
    disabled: Boolean,

    disabledDate: {
      type: Function,
      default: function _default() {
        return false;
      }
    },

    disabledHours: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59'
    },
    invisibleDisable: Boolean,
    disabledMinutes: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledSeconds: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    exact: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['hour', 'minute', 'second']);
      },

      default: 'second'
    }
  },
  computed: {
    dateTime: function dateTime() {
      var newDateTime = this.placeholder;

      if (this.date && this.date !== this.placeholder) {
        if (!this.$refs.date || this.date !== this.$refs.date.placeholder) {
          if (this.time === timeZero) {
            if (this.exact === 'hour') {
              this.time = zero;
            }
            if (this.exact === 'minute') {
              this.time = zero + ':' + zero;
            }
          }
          newDateTime = this.date + ' ' + this.time;
        }
      }

      if (!this.date && this.time !== timeZero) {
        var today = (0, _date.initTimeDate)();
        var day = today.getDate();
        this.date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + day;

        this.$refs.date.choiceDay({
          num: day,
          undo: false
        });
        newDateTime = this.date + ' ' + this.time;
      }

      this.$emit('input', newDateTime === this.placeholder ? '' : newDateTime);

      return newDateTime;
    },
    disabledToggle: function disabledToggle() {
      return !this.date && this.time === timeZero;
    }
  },
  mounted: function mounted() {
    this.initData(this.value);
  },

  methods: {
    initData: function initData(dataVal) {
      if (dataVal && dataVal !== this.placeholder) {
        var vals = dataVal.split(' ');
        this.date = dataVal ? vals[0] : '';
        this.time = dataVal ? vals[1] : timeZero;
        this.choiced = !!dataVal;
      }
    },
    choiceDate: function choiceDate() {
      this.choiced = true;
      this.$emit('change', this.dateTime);
      this.$emit('choice-date', this.dateTime);
    },
    choiceTime: function choiceTime() {
      this.choiced = true;
      this.$emit('change', this.dateTime);
      this.$emit('choice-time', this.dateTime);
    },
    cancel: function cancel() {
      this.date = '';
      this.time = timeZero;
      this.choiced = false;

      this.$emit('cancel', '');
      this.$emit('input', '');
    },
    ok: function ok() {
      this.close(true);
      this.$emit('ok', this.dateTime === this.placeholder ? '' : this.dateTime);
      this.$emit('input', this.dateTime === this.placeholder ? '' : this.dateTime);
    },
    close: function close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.dateTime === this.placeholder ? '' : this.dateTime);
          this.$emit('input', this.dateTime === this.placeholder ? '' : this.dateTime);
        }
        this.status = false;
      }
    },
    typeToggle: function typeToggle() {
      if (!this.disabledToggle) {
        this.typeText = this.isDate ? dateText : timeText;
        this.isDate = !this.isDate;

        var time = this.$refs.time;

        time.refreshIscroll();
        time.scrollEle('hour');
        if (this.exact === 'minute' || this.exact === 'second') {
          time.scrollEle('minute');
        }
        if (this.exact === 'second') {
          time.scrollEle('second');
        }
      }
    },
    toggle: function toggle() {
      if (!this.disabled) {
        this.status = !this.status;
      }
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData(val);
      }
    }
  }
};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      directives: [{
        name: "emfe-documentclick",
        rawName: "v-emfe-documentclick",
        value: _vm.close,
        expression: "close"
      }],
      staticClass: "emfe-datetime"
    }, [!_vm.disabled ? _c('button', {
      staticClass: "emfe-datetime-btn",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.toggle($event);
        }
      }
    }, [_c('span', {
      staticClass: "emfe-datetime-btn-text",
      class: {
        'emfe-datetime-btn-text-choice': _vm.choiced
      }
    }, [_vm._v(_vm._s(_vm.dateTime))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "shijian",
        "className": "emfe-datetime"
      },
      on: {
        "icon-click": _vm.toggle
      }
    })], 1) : _vm._e(), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-datetime"
      },
      on: {
        "icon-click": _vm.cancel
      }
    }), _vm._v(" "), _vm.disabled ? _c('button', {
      staticClass: "emfe-datetime-btn emfe-datetime-btn-disabled"
    }, [_c('span', {
      staticClass: "emfe-datetime-btn-text"
    }, [_vm._v(_vm._s(_vm.dateTime))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "shijian",
        "className": "emfe-datetime"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c('emfe-transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.status,
        expression: "status"
      }],
      staticClass: "emfe-datetime-main emfe-datetime-main-position",
      style: _vm.panelstyle
    }, [_c('div', {
      staticClass: "emfe-datetime-type"
    }, [_c('emfe-date', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.isDate,
        expression: "isDate"
      }],
      ref: "date",
      attrs: {
        "format": _vm.formatDate,
        "open": true,
        "confirm": false,
        "disabledDate": _vm.disabledDate
      },
      on: {
        "choice": _vm.choiceDate
      },
      model: {
        value: _vm.date,
        callback: function callback($$v) {
          _vm.date = $$v;
        },
        expression: "date"
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.isDate,
        expression: "!isDate"
      }],
      staticClass: "emfe-datetime-time"
    }, [_c('div', {
      staticClass: "emfe-datetime-time-header"
    }, [_vm._v(_vm._s(_vm.date))]), _vm._v(" "), _c('emfe-time', {
      ref: "time",
      attrs: {
        "className": "emfe-datetime",
        "invisibleDisable": _vm.invisibleDisable,
        "open": true,
        "confirm": false,
        "exact": _vm.exact,
        "timeChoices": _vm.timeChoices,
        "disabledHours": _vm.disabledHours,
        "disabledMinutes": _vm.disabledMinutes,
        "disabledSeconds": _vm.disabledSeconds
      },
      on: {
        "choice": _vm.choiceTime
      },
      model: {
        value: _vm.time,
        callback: function callback($$v) {
          _vm.time = $$v;
        },
        expression: "time"
      }
    })], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "emfe-datetime-footer"
    }, [_c('button', {
      staticClass: "emfe-datetime-settype",
      class: {
        'emfe-datetime-settype-disabled': _vm.disabledToggle
      },
      on: {
        "click": _vm.typeToggle
      }
    }, [_vm._v(_vm._s(_vm.typeText))]), _vm._v(" "), _c('button', {
      staticClass: "emfe-datetime-ok",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.ok($event);
        }
      }
    }, [_vm._v("确定")])])])])], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeDatetimeM = __webpack_require__(240);

var _EmfeDatetimeM2 = _interopRequireDefault(_EmfeDatetimeM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeDatetimeM2.default.install = function (Vue) {
  Vue.component(_EmfeDatetimeM2.default.name, _EmfeDatetimeM2.default);
};

exports.default = _EmfeDatetimeM2.default;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(241),
  /* template */
  __webpack_require__(242),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _date = __webpack_require__(24);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _time = __webpack_require__(18);

var _time2 = _interopRequireDefault(_time);

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hourNum = 24;
var minuteNum = 60;
var secondNum = 60;

exports.default = {
  name: 'EmfeTimeM',
  data: function data() {
    return {
      Contant: _contant2.default,
      canSetNow: true,
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
      status: this.open
    };
  },

  props: {
    format: {
      type: String,
      default: '/'
    },
    exact: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['hour', 'minute', 'second']);
      },

      default: 'second'
    },
    yearStart: {
      type: Number,
      default: 1920
    },
    yearEnd: {
      type: Number,
      default: 2020
    },

    placeholder: {
      type: String,
      default: '选择日期时间'
    },
    value: {
      type: String,
      default: ''
    },
    confirm: {
      type: Boolean,
      default: true
    },
    disabled: (0, _defineProperty3.default)({
      type: Boolean
    }, 'type', false),

    open: {
      type: Boolean,
      default: false
    },

    disabledYears: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledMonths: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledHours: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledMinutes: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    disabledSeconds: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    weekChoices: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59'
    },
    className: String
  },
  computed: {
    datetime: function datetime() {
      var datetime = this.placeholder;
      if (this.choiced) {
        if (this.exact === 'hour') {
          datetime = '' + this.year + this.format + this.month + this.format + this.day + ' ' + this.hour;
        } else if (this.exact === 'minute') {
          datetime = '' + this.year + this.format + this.month + this.format + this.day + ' ' + this.hour + ':' + this.minute;
        } else {
          datetime = '' + this.year + this.format + this.month + this.format + this.day + ' ' + this.hour + ':' + this.minute + ':' + this.second;
        }
      }
      return datetime;
    },
    itemName: function itemName() {
      return [(0, _defineProperty3.default)({}, this.className + '-item', !!this.className), ['emfe-datetime-m-item-' + this.exact]];
    }
  },
  mounted: function mounted() {
    for (var i = this.yearEnd; i > this.yearStart - 1; i--) {
      this.years.push(_time2.default.handleConputedDate(i, this.disabledYears));
    }
    for (var _i = 1; _i < 13; _i++) {
      this.months.push(_time2.default.handleConputedDate(_i, this.disabledMonths));
    }
    this.resetDays();
    for (var _i2 = 0; _i2 < hourNum; _i2++) {
      this.hours.push(_time2.default.handleConputedTime(_i2, this.disabledHours));
    }
    for (var _i3 = 0; _i3 < minuteNum; _i3++) {
      this.minutes.push(_time2.default.handleConputedTime(_i3, this.disabledMinutes));
    }
    for (var _i4 = 0; _i4 < secondNum; _i4++) {
      this.seconds.push(_time2.default.handleConputedTime(_i4, this.disabledSeconds));
    }
    this.initData();
    this.setTimeChoice();
  },

  methods: {
    refreshIscroll: function refreshIscroll() {
      var _this = this;

      (0, _keys2.default)(this.$refs).forEach(function (iscroll) {
        if (_this.$refs[iscroll].refresh) {
          _this.$refs[iscroll].refresh();
        }
      });
    },
    setNow: function setNow() {
      var now = new Date();
      var hourNow = now.getHours();
      var minuteNow = now.getMinutes();
      var secondNow = now.getSeconds();
      var dayNow = now.getDate();
      var monthNow = now.getMonth();
      var yearNow = now.getFullYear();
      var hour = this.hours[hourNow];
      var minute = this.minutes[minuteNow];
      var second = this.seconds[secondNow];
      var month = this.months[monthNow];
      var year = this.years.find(function (iYear) {
        return iYear.num - 0 === yearNow;
      });
      var day = this.days[dayNow - 1];
      this.hour = hour.undo ? _time2.default.loopChoice(this.hours, hour.num) : hour.num;
      this.minute = minute.undo ? _time2.default.loopChoice(this.minutes, minute.num) : minute.num;
      this.second = second.undo ? _time2.default.loopChoice(this.seconds, second.num) : second.num;
      this.year = year.num;
      this.month = month.num;
      this.day = day.num;
      this.choiced = true;
    },
    scrollEle: function scrollEle(doScroll) {
      var _this2 = this;

      var _$refs = this.$refs,
          listItem1 = _$refs.listItem1,
          listItem2 = _$refs.listItem2,
          listItem3 = _$refs.listItem3,
          listItem4 = _$refs.listItem4,
          listItem5 = _$refs.listItem5,
          listItem6 = _$refs.listItem6;


      var years = this.years.filter(function (yearData) {
        return !yearData.undo;
      });
      var months = this.months.filter(function (monthData) {
        return !monthData.undo;
      });
      var days = this.days.filter(function (dayData) {
        return !dayData.undo;
      });

      var hours = this.hours.filter(function (hourData) {
        return !hourData.undo;
      });
      var minutes = this.minutes.filter(function (minuteData) {
        return !minuteData.undo;
      });
      var seconds = this.seconds.filter(function (secondData) {
        return !secondData.undo;
      });

      var yearIndex = years.findIndex(function (yearData) {
        return yearData.num === _this2.year;
      }) - 2;
      var monthIndex = months.findIndex(function (monthData) {
        return monthData.num === _this2.month;
      }) - 2;
      var dayIndex = days.findIndex(function (dayData) {
        return dayData.num === _this2.day;
      }) - 2;

      var hourIndex = hours.findIndex(function (hourData) {
        return hourData.num === _this2.hour;
      }) - 2;
      var minuteIndex = minutes.findIndex(function (minuteData) {
        return minuteData.num === _this2.minute;
      }) - 2;
      var secondIndex = seconds.findIndex(function (secondData) {
        return secondData.num === _this2.second;
      }) - 2;
      if (listItem1 && doScroll === 'year') {
        this.$refs.iscroll1.scrollToElement(listItem1[yearIndex < 0 ? 0 : yearIndex]);
      }
      if (listItem2 && doScroll === 'month') {
        this.$refs.iscroll2.scrollToElement(listItem2[monthIndex < 0 ? 0 : monthIndex]);
      }
      if (listItem3 && doScroll === 'day') {
        this.$refs.iscroll3.scrollToElement(listItem3[dayIndex < 0 ? 0 : dayIndex]);
      }

      if (listItem4 && doScroll === 'hour') {
        this.$refs.iscroll4.scrollToElement(listItem4[hourIndex < 0 ? 0 : hourIndex]);
      }
      if (listItem5 && doScroll === 'minute') {
        this.$refs.iscroll5.scrollToElement(listItem5[minuteIndex < 0 ? 0 : minuteIndex]);
      }
      if (listItem6 && doScroll === 'second') {
        this.$refs.iscroll6.scrollToElement(listItem6[secondIndex < 0 ? 0 : secondIndex]);
      }
    },
    initData: function initData() {
      if (this.value && this.value !== this.placeholder) {
        var vals = this.value.split(' ');
        var dates = vals[0].split(this.format);
        var times = vals[1].split(':');
        this.year = _time2.default.zeroFill(dates[0] - 0);
        this.month = _time2.default.zeroFill(dates[1] - 0);
        this.day = _time2.default.zeroFill(dates[2] - 0);
        this.hour = _time2.default.zeroFill(times[0] - 0);
        this.minute = _time2.default.zeroFill(times[1] - 0);
        this.second = _time2.default.zeroFill(times[2] - 0);
        this.choiced = true;
        this.canSetNow = false;
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
        this.year = _time2.default.loopChoice(this.years, this.year);
        this.month = _time2.default.loopChoice(this.months, this.month);
        this.day = _time2.default.loopChoice(this.days, this.day);
        this.hour = _time2.default.loopChoice(this.hours, this.hour);
        this.minute = _time2.default.loopChoice(this.minutes, this.minute);
        this.second = _time2.default.loopChoice(this.seconds, this.second);
        this.choiced = true;
      }
    },
    resetDays: function resetDays(year, month) {
      var dateCountOfLastMonth = (0, _date.getDayCountOfMonth)(year - 0, month - 1);
      this.days = [];
      for (var i = 1; i < dateCountOfLastMonth + 1; i++) {
        this.days.push(_time2.default.handleConputedDate(i, this.disabledDays));
      }
      if (this.day > dateCountOfLastMonth) {
        this.day = _time2.default.loopChoice(this.days, this.day);
      }
      this.setWeekChoice();
      this.scrollEle('day');
    },
    choiceYear: function choiceYear(year) {
      if (!year.undo) {
        this.setChoice();
        this.year = year.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice-date', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceMonth: function choiceMonth(month) {
      if (!month.undo) {
        this.setChoice();
        this.month = month.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice-date', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceDay: function choiceDay(day) {
      if (!day.undo) {
        this.setChoice();
        this.day = day.num;
        this.$emit('choice-date', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    setWeekChoice: function setWeekChoice() {
      var _this3 = this;

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
        var nowYear = _this3.year ? _this3.year : year;
        var nowMonth = _this3.month ? _this3.month : month;
        var nowDate = new Date(nowYear + '/' + nowMonth + '/' + tday.num);
        var nowWeek = nowDate.getDay() + 1;
        tday.undo = !_this3.weekChoices.every(function (wc) {
          return wc !== nowWeek;
        });
      });
      this.day = _time2.default.loopChoice(this.days, this.day);
    },
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
          min.undo = hourIsStart && min.num < startTime[1] || hourIsEnd && min.num > endTime[1];
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
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceMinute: function choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.setTimeChoice();
        this.$emit('choice-time', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceSecond: function choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.setTimeChoice();
        this.$emit('choice-time', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    toggle: function toggle() {
      this.status = !this.status;
      this.refreshIscroll();
      if (this.canSetNow) {
        this.setNow();
      }

      this.scrollEle('year');
      this.scrollEle('month');
      this.scrollEle('day');
      this.scrollEle('hour');
      if (this.exact === 'minute' || this.exact === 'second') {
        this.scrollEle('minute');
      }
      if (this.exact === 'second') {
        this.scrollEle('second');
      }
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
      this.canSetNow = false;
      this.close(true);
      this.$emit('ok', this.datetime);
      this.$emit('input', this.datetime);
    },
    cancel: function cancel() {
      this.canSetNow = true;
      this.choiced = false;
      this.year = '';
      this.month = '';
      this.day = '';
      this.$emit('cancel', this.datetime);
      this.$emit('input', this.datetime);
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
      }
    }
  }
};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      directives: [{
        name: "emfe-documentclick",
        rawName: "v-emfe-documentclick",
        value: _vm.close,
        expression: "close"
      }],
      staticClass: "emfe-datetime-m"
    }, [!_vm.open && !_vm.disabled ? _c('button', {
      staticClass: "emfe-datetime-m-btn",
      on: {
        "click": _vm.toggle
      }
    }, [_c('span', {
      staticClass: "emfe-datetime-m-btn-text",
      class: {
        'emfe-datetime-m-btn-text-choice': _vm.choiced
      }
    }, [_vm._v(_vm._s(_vm.datetime))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "rili",
        "className": "emfe-datetime-m"
      },
      on: {
        "icon-click": _vm.toggle
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-datetime-m"
      },
      on: {
        "icon-click": _vm.cancel
      }
    })], 1) : _vm._e(), _vm._v(" "), !_vm.open && _vm.disabled ? _c('button', {
      staticClass: "emfe-datetime-m-btn emfe-datetime-m-btn-disabled"
    }, [_c('span', {
      staticClass: "emfe-datetime-m-btn-text"
    }, [_vm._v(_vm._s(_vm.date))]), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.choiced,
        expression: "!choiced"
      }],
      attrs: {
        "type": "rili",
        "className": "emfe-datetime-m"
      }
    }), _vm._v(" "), _c('emfe-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.choiced,
        expression: "choiced"
      }],
      attrs: {
        "type": "shanchu",
        "className": "emfe-datetime-m"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c('emfe-transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.status,
        expression: "status"
      }],
      staticClass: "emfe-datetime-m-box",
      class: {
        'emfe-datetime-m-box-position': !_vm.open
      }
    }, [_vm.confirm ? _c('div', {
      staticClass: "emfe-datetime-m-footer"
    }, [_c('button', {
      staticClass: "emfe-datetime-m-ok",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.ok($event);
        }
      }
    }, [_vm._v("确定")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "emfe-datetime-m-main"
    }, [_c('emfe-iscroll', {
      ref: "iscroll1",
      staticClass: "emfe-datetime-m-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-datetime-m-list"
    }, _vm._l(_vm.years, function (yearLoop) {
      return !yearLoop.undo ? _c('li', {
        ref: "listItem1",
        refInFor: true,
        staticClass: "emfe-datetime-m-list-item",
        class: {
          'emfe-datetime-m-list-item-on': yearLoop.num === _vm.year, 'emfe-datetime-m-list-item-disable': yearLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceYear(yearLoop);
          }
        }
      }, [_vm._v(_vm._s(yearLoop.num))]) : _vm._e();
    }))]), _vm._v(" "), _c('emfe-iscroll', {
      ref: "iscroll2",
      staticClass: "emfe-datetime-m-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-datetime-m-list"
    }, _vm._l(_vm.months, function (monthLoop) {
      return !monthLoop.undo ? _c('li', {
        ref: "listItem2",
        refInFor: true,
        staticClass: "emfe-datetime-m-list-item",
        class: {
          'emfe-datetime-m-list-item-on': monthLoop.num === _vm.month, 'emfe-datetime-m-list-item-disable': monthLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceMonth(monthLoop);
          }
        }
      }, [_vm._v(_vm._s(monthLoop.num))]) : _vm._e();
    }))]), _vm._v(" "), _c('emfe-iscroll', {
      ref: "iscroll3",
      staticClass: "emfe-datetime-m-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-datetime-m-list"
    }, _vm._l(_vm.days, function (dayLoop, dayIndex) {
      return !dayLoop.undo ? _c('li', {
        ref: "listItem3",
        refInFor: true,
        staticClass: "emfe-datetime-m-list-item",
        class: {
          'emfe-datetime-m-list-item-on': dayLoop.num === _vm.day, 'emfe-datetime-m-list-item-disable': dayLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceDay(dayLoop);
          }
        }
      }, [_vm._v(_vm._s(dayLoop.num))]) : _vm._e();
    }))]), _vm._v(" "), _c('emfe-iscroll', {
      ref: "iscroll4",
      staticClass: "emfe-datetime-m-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-datetime-m-list"
    }, _vm._l(_vm.hours, function (hourLoop) {
      return !hourLoop.undo ? _c('li', {
        ref: "listItem4",
        refInFor: true,
        staticClass: "emfe-datetime-m-list-item",
        class: {
          'emfe-datetime-m-list-item-on': hourLoop.num === _vm.hour, 'emfe-datetime-m-list-item-disable': hourLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceHour(hourLoop);
          }
        }
      }, [_vm._v(_vm._s(hourLoop.num))]) : _vm._e();
    }))]), _vm._v(" "), _vm.exact === 'minute' || _vm.exact === 'second' ? _c('emfe-iscroll', {
      ref: "iscroll5",
      staticClass: "emfe-datetime-m-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-datetime-m-list"
    }, _vm._l(_vm.minutes, function (minuteLoop) {
      return !minuteLoop.undo ? _c('li', {
        ref: "listItem5",
        refInFor: true,
        staticClass: "emfe-datetime-m-list-item",
        class: {
          'emfe-datetime-m-list-item-on': minuteLoop.num === _vm.minute, 'emfe-datetime-m-list-item-disable': minuteLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceMinute(minuteLoop);
          }
        }
      }, [_vm._v(_vm._s(minuteLoop.num))]) : _vm._e();
    }))]) : _vm._e(), _vm._v(" "), _vm.exact === 'second' ? _c('emfe-iscroll', {
      ref: "iscroll6",
      staticClass: "emfe-datetime-m-item",
      class: _vm.itemName,
      attrs: {
        "options": _vm.Contant.ISCROLL_CONFIG
      }
    }, [_c('ul', {
      staticClass: "emfe-datetime-m-list"
    }, _vm._l(_vm.seconds, function (secondLoop, secondIndex) {
      return !secondLoop.undo ? _c('li', {
        ref: "listItem6",
        refInFor: true,
        staticClass: "emfe-datetime-m-list-item",
        class: {
          'emfe-datetime-m-list-item-on': secondLoop.num === _vm.second, 'emfe-datetime-m-list-item-disable': secondLoop.undo
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            _vm.choiceSecond(secondLoop);
          }
        }
      }, [_vm._v(_vm._s(secondLoop.num))]) : _vm._e();
    }))]) : _vm._e()], 1)])])], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeLink = __webpack_require__(244);

var _EmfeLink2 = _interopRequireDefault(_EmfeLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeLink2.default.install = function (Vue) {
  Vue.component(_EmfeLink2.default.name, _EmfeLink2.default);
};

exports.default = _EmfeLink2.default;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(245),
  /* template */
  __webpack_require__(246),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'emfe-link',
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    routers: {
      type: Object,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    click: {
      type: Function,
      default: function _default() {}
    }
  },
  computed: {
    linkName: function linkName() {
      return this.className ? this.className + '-link' : '';
    },
    emptyRouters: function emptyRouters() {
      return _o2.default.empty(this.routers);
    },
    hasUrl: function hasUrl() {
      var emptyJson = true;
      if (!this.emptyRouters) {
        emptyJson = _o2.default.hOwnProperty(this.routers, 'url');
      }
      return emptyJson;
    }
  },
  methods: {
    clickFn: function clickFn() {
      this.click();
      this.$emit('click');
    }
  }
};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _vm.hasUrl || _vm.emptyRouters ? _c('a', {
      staticClass: "emfe-link",
      class: _vm.linkName,
      attrs: {
        "href": _vm.emptyRouters ? 'javascript:;' : _vm.routers.url
      },
      on: {
        "click": _vm.clickFn
      }
    }, [_vm._t("default")], 2) : _c('router-link', {
      staticClass: "emfe-link",
      class: _vm.linkName,
      attrs: {
        "tag": _vm.tag,
        "to": _vm.routers
      }
    }, [_vm._t("default")], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeSwitch = __webpack_require__(248);

var _EmfeSwitch2 = _interopRequireDefault(_EmfeSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeSwitch2.default.install = function (Vue) {
  Vue.component(_EmfeSwitch2.default.name, _EmfeSwitch2.default);
};

exports.default = _EmfeSwitch2.default;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(249),
  /* template */
  __webpack_require__(250),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'switch';
exports.default = {
  name: 'EmfeSwitch',
  props: {
    className: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Boolean, String],
      default: false
    },
    interceptor: {
      type: Boolean,
      default: true
    },
    change: {
      type: Function,
      default: function _default() {}
    },
    modelChange: Boolean },
  data: function data() {
    return {
      currentValue: this.value,
      interceptorDefault: this.interceptor
    };
  },

  computed: {
    switchName: function switchName() {
      var _ref;

      return ['emfe-' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, this.className + '-' + prefixCls, !!this.className), (0, _defineProperty3.default)(_ref, prefixCls + '-checked', !!this.currentValue), (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', !!this.disabled), _ref)];
    },
    innerClass: function innerClass() {
      return [(0, _defineProperty3.default)({}, this.className + '-' + prefixCls + '-inner', !!this.className)];
    }
  },
  methods: {
    toggle: function toggle() {
      if (!this.disabled) {
        if (this.interceptorDefault) {
          this.changeValue();
        }
        this.$emit('toggle', this.currentValue);
        this.$emit('change', this.currentValue);
        this.change(this.currentValue);
      }
    },
    changeValue: function changeValue() {
      this.currentValue = !this.currentValue;
      this.$emit('input', this.currentValue);
    }
  },
  watch: {
    interceptor: function interceptor(val, oldVal) {
      if (val !== oldVal && val) {
        this.changeValue();
      }
    },
    value: function value(val, oldVal) {
      if (val !== oldVal && (val || this.modelChange)) {
        this.currentValue = val;
      }
    }
  }
};

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('span', {
      class: _vm.switchName,
      attrs: {
        "disabled": _vm.disabled
      },
      on: {
        "click": _vm.toggle
      }
    }, [_c('span', {
      staticClass: "emfe-switch-inner",
      class: _vm.innerClass
    }, [_vm.currentValue ? _vm._t("open") : _vm._e(), _vm._v(" "), !_vm.currentValue ? _vm._t("close") : _vm._e()], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTitle = __webpack_require__(252);

var _EmfeTitle2 = _interopRequireDefault(_EmfeTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTitle2.default.install = function (Vue) {
  Vue.component(_EmfeTitle2.default.name, _EmfeTitle2.default);
};

exports.default = _EmfeTitle2.default;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(253),
  /* template */
  __webpack_require__(254),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'title';

exports.default = {
  name: 'EmfeTitle',
  props: {
    className: {
      type: String,
      default: ''
    },
    tip: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  computed: {
    titleName: function titleName() {
      return [(0, _defineProperty3.default)({}, this.className + '-' + prefixCls, !!this.className)];
    }
  }
};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-title",
      class: _vm.titleName
    }, [_c('div', {
      staticClass: "emfe-title-panel"
    }, [_vm._t("default"), _vm._v(" "), _vm.tip ? _c('emfe-tooltip', {
      attrs: {
        "className": "emfe-title",
        "theme": "light",
        "placement": _vm.placement
      }
    }, [_c('emfe-icon', {
      attrs: {
        "type": "tishi"
      },
      slot: "render"
    }), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.tip)
      },
      slot: "tip"
    })], 1) : _vm._e()], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTitleC = __webpack_require__(256);

var _EmfeTitleC2 = _interopRequireDefault(_EmfeTitleC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTitleC2.default.install = function (Vue) {
  Vue.component(_EmfeTitleC2.default.name, _EmfeTitleC2.default);
};

exports.default = _EmfeTitleC2.default;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(257),
  /* template */
  __webpack_require__(258),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'title-c';

exports.default = {
  name: 'EmfeTitleC',
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    titleName: function titleName() {
      return [(0, _defineProperty3.default)({}, this.className + '-' + prefixCls, !!this.className)];
    }
  }
};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-title-c",
      class: _vm.titleName
    }, [_c('div', {
      staticClass: "emfe-title-c-panel"
    }, [_vm._t("default")], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeRadio = __webpack_require__(260);

var _EmfeRadio2 = _interopRequireDefault(_EmfeRadio);

var _EmfeRadioGroup = __webpack_require__(263);

var _EmfeRadioGroup2 = _interopRequireDefault(_EmfeRadioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeRadio2.default.install = function (Vue) {
  Vue.component(_EmfeRadio2.default.name, _EmfeRadio2.default);
};

_EmfeRadioGroup2.default.install = function (Vue) {
  Vue.component(_EmfeRadioGroup2.default.name, _EmfeRadioGroup2.default);
};

exports.default = {
  EmfeRadio: _EmfeRadio2.default,
  EmfeRadioGroup: _EmfeRadioGroup2.default
};

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(261),
  /* template */
  __webpack_require__(262),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeRadio',
  data: function data() {
    var base1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAf9JREFUOBGVVEsvA1EUPnfaqXp0YUGj4hmPNbFRG03EUmLjBxASsWFjxc6K2BLFRpDgH4iEjdpgSdgIoqIbi3rUnc695pu6zWTGSJ1kOrfnnO+7d875zmXkYy3rMsrzxqBkLIoUJuVLKKgf3o2zl98gzO2MJY14RJOLXFBPolHL1VdROXKe3ujz+EGEQwG6yHI2m57UT93Y4v/GNT7ducGz21emaZjSY/DtXJtm3cqXbE3y0SLQuWjbzA81J3k+/ebBexyZDymRi42dHBRbNfqwCxJKNWyI06MUINPwE9Hl0nIiKGrsasBD9PxONHVkUteWYT9Yw6esrpJoPh6oQD3hY+gOSeP+dkwvC9q0BZKBfYNec1Lh7Hd1mNHRiE4ggeUFUcem8UVMb9LQ4v4GLadIkLBwZnpI4AcxYsqAQWfBYS1ZbX2k0GKVkEpbW/mYOwZ5QGs/H+OD+ofbIpKZpyx9OjHxmD+/OwahQvUaZH/yKMIonLK53gChsG6DDzFlwNhqtzg0zE5Io/O9G1GkQlfQneH2AEUrmf1g7ewYyA5uhbCwl8X5g6ggrlJUrQQL8ULEELM6of1uXuMzkH0p6saGyPWdNwTaNvj7rjWYfkOLgcbp3XPmqSiOipGxrpFuCFVpDJ1FU1DPrLCukQk95fwkD5EKqosNgi34ZOavi+0b/CrFwfT9aVgAAAAASUVORK5CYII=';
    var base2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jY2TsW9SURTGf/ddLiyCW6V9eYOYxkZMMHFhYahpKl38E5hgUCf+kTrpIHWQP8HEpCSEpQuLiSStqWlsNORZdBMwhnc5PAfgQdIW/bZ7v+87+e4956gwDFlGrS73gDKwB9yeXZ8Dh8BBpaQ/LevVvECtLnFgP5EIn25tiuOmhVRyyvUHCr+nOT3Tk9FI1YBqpaT/RAVm5veeKzv5hxZjuBLWQvuDoevrFrBXKenAmXEvvA3ZKeSvNwMYA4W8xXPlEbAPoF6/HWcTibDz5PFIz82DoeLjcYzeTw1Aek14cH9M8kYYJXnXSMhopHIOUL57RyJzf6BotOJ0fY21U3HX1zRacfoDFSXZ2hQNlB2g6G5IFLNzEiOw6lL8wCo6J7Ho7KYFoOgAmZvJRSvnsa/CxY8FN+tQxrlW/Q9MJtNgDnD+a7CInF6TayywfmvBDX8rgG8OcOh/X0TLZcfETXjJHDchuew4Ovs9DdB0gDefv2ixdkqkkiG72wGeK5gYmBh4rrC7HUSTaS2cnmkBDuaT+NJz5Vkhb//r/UdtQ9fXryol/Xz+idWur5tHbYNdUcPayNwCqrBqmdaF1Gzy+kOFf7FimZZRq0sWqABFIAMEwFegyXSdj5f1fwFPwdJkoZv1fwAAAABJRU5ErkJggg==';
    var base3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfElEQVQ4jY3TP0iWURQG8F+vH4lIfxSdg0QUDGqTpogGQbTBCNpMrAhpacxoEmx0MDJQFAdxsBQ0ggIdWtpFIkRcaglMP2yoRPka7n3x+uEnHri8977Pec695znnnOla7ldmbXiIDlxGCZv4gEl8TZ2zZF+DN1jBFu7hPC7EfRGfMIrqnFSI37N4jx00Y7fsVatxvcI0ltCJ/fwFI/GGu8eQUyuiB3/xMk/hSvzZF/OFFszHYEW8RVPEDnAfvWgu4AFeJze34gsuJjffwQ20C4JuYxwDmaD2YuI8XEbOrQFDyXkJNzOhVN8S4FZlCY5gm7iUVfI8hZWwl8VIrQmwfAIpxZrwI8NH3E6AQUH5cvuFF8m5C58zTGBA6DqCHtexgN9Cdd45rADU4xHGClgTaj4pNFIpBumpkEYVpoSOXM9FfIo6zOFcBSJhLuaFuXnG4TDtxZy2sIHnuIbauK4K2qzhO7qxnwaAP3gs1LoRM/gpDNis0EgdeIJ/Oek/3CpVomZK2VMAAAAASUVORK5CYII=';
    var base4 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAABgklEQVQ4jX3Uz4uNURwG8M99ZyzGXUwzCwsyopnUrEgpWaiJyaixtDGT2FDclFJWsiQrsdCQxH9gJprJhpQVs5iaMlMUUTaUuBaXxuJ8T0632/usvufH83x/vM95G621ji6M4ByOYTf68BGLuI/lbkJVxH24hrcRn8UwmpjGeyzgAQZKkUZRySPswgl86c4WaOJu3DuCdllJK0qfrBGAX5jFKm6X7QzjKmayMrbhIb7hJ55iTyF2MRLuyyKz0tDW48IWvMYpDEULU3iVSZHsFs5nkQnMF1muYHuPVpq4Wazng6vCDrwrDg/3EMg4hE0Rf5Ds0KjQQX8NsQ4dbFT4hLHi4HkN6UUQYSc+k9p5Kbkz40YId6ONy8V6OkRVksmOYjQOv+JA7H+XvPEMB/Em7gxIn/kO/x3bwklp2tkrdbgnPY0zuRKS+9awhK015M14jHFcyJvlAzwtDXUF17Efg1H6OC5Jhvwj2aDdS+Sv9Ir3YgNz0i/gB55IMzseyX6X5f0Dyy5Sl+7I6QoAAAAASUVORK5CYII=';
    var base5 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAABfUlEQVQ4jX3Uv0uXURQG8M/3tQb7DpFDQ5FhJIJTEATREISGCa4tJqGLRkkQBE3RWDRFEYEWUX+CYRQtitBUDUGQglJR0KJLuRjYcM/Vyzd7n+ncH+c5zznvc9/G5kOt6MQEBtGDNnzFK0zjQ2tCVcRtuIX3EY+jA00MYRkv8ATtJUmjUPIMR3AeP/7Rl9DEo7jXj/VSyWRIP1tDAL8xgk+4X7bTgZu4kJlxEE+xil+YxbGC7GoUPJ5JRqShLcWF/XiLi9gXLZzDQk6KYvdwOZOcwUxR5QYO7dBKE3eL9UzkqnAYn4vDvh0IMk5jd8Qrkh0aFTawqyaxDhvYrPAN3cXBm5qkuUiELnwntTMvuTPjThC3Yh3Xi/VQkKokkw3gaBz+xMnYX5O88RKn8C7utEuf+QHbjp3EsDTt7JU6TElPYywrIblvEa9xoCZ5D56jF1fyZvkAR6WhfsRtnMDekN6La5Ih/0g22FLc+M+v4JLk0q6o/iVUPrY9ly38BWpZTo1+XZ+/AAAAAElFTkSuQmCC';
    return {
      status: this.statu,
      backgUrl: {
        bule: base1,
        purple: base2,
        green: base3,
        lightBlue: base4,
        orange: base5
      }
    };
  },

  props: {
    slideShow: {
      type: Boolean,
      default: false
    },
    index: {
      tyep: String,
      required: true
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    statu: {
      tyep: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    inline: String,
    change: Function,
    tip: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    styleIndex: {
      type: String,
      default: 'bule'
    }
  },
  computed: {
    labelClass: function labelClass() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, this.className + '-radio', !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-radio-inline', this.inline), (0, _defineProperty3.default)(_ref, 'emfe-radio-disabled', this.disabled), _ref)];
    },
    inputClass: function inputClass() {
      return this.className ? this.className + '-radio-input' : '';
    },
    textClass: function textClass() {
      var _ref2;

      return [(_ref2 = {}, (0, _defineProperty3.default)(_ref2, this.className + '-radio-input-text', !!this.className), (0, _defineProperty3.default)(_ref2, 'emfe-radio-text-notip', !this.tip), (0, _defineProperty3.default)(_ref2, this.className + '-radio-input-text-checked', !!this.className && this.status), _ref2)];
    },
    baseStyle: function baseStyle() {
      var style = {};
      if (this.status) {
        style.backgroundImage = 'url(' + this.backgUrl[this.styleIndex] + ')';
      } else {
        style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAWFJREFUOBGdVM1OhDAQpoVE5UzYo0B4AuNJ7xx9iH0CPbgPoW/EfT2tPgF/HpdwopHVBFjn25SVBYmVScrQ6XzfNNN+ZdqEJUmyoKWABjxsSyP0PA9+ZGwYybLspm3bJ4pfm6b5aRjGBXLqut5VVXXOGHttmmbl+/56iD3O4zi+p52Isiyb/YRhLYqiPeUuj8D+DxHc0aDC9QTFTxg5yEXhPodGFW5RRYWko5NkAq0AGcdH1/Vn27Zb8pgqGXItyzJlPzVGW8SpvLuue6bEMEhK0/SLQpfYUYDTGawrTyU2AJHdHbEyupcosYtDj3rx2b8gyukEdnMZJHYLohA3di6RxIZcamcjhGj/SwYMSeYNHIcecc5XRVFUpCFlLuTmec7JP56A6Lo/zJDI8oSkm0CIdME+/hItFRRDnY2eEegOkiFNXf32jFDRDVrhOM5LtwH4EVG3KKWDh82WsZz85MP2DRyubnWoFdQHAAAAAElFTkSuQmCC)';
      }
      return style;
    }
  },
  methods: {
    changeFn: function changeFn() {
      var _this = this;

      console.log(1111);
      var index = 0;
      this.$parent.$children.forEach(function (element) {
        element.status = _this.index === element.index;
        if (element.status) {
          index = element.index;
        }
      });
      if (this.change) {
        this.change(index);
      }
      this.$emit('change', index);
    }
  },
  watch: {
    statu: function statu(val, oldVal) {
      if (val !== oldVal) {
        this.status = val;
      }
    }
  }
};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-radio clearfix",
      class: [{
        'emfe-radio-checked': _vm.status
      }, _vm.labelClass],
      on: {
        "click": _vm.changeFn
      }
    }, [_c('i', {
      staticClass: "emfe-radio-img",
      class: {
        'emfe-radio-img-checked': _vm.status, 'emfe-radio-img-disabled': _vm.disabled
      },
      style: _vm.baseStyle
    }), _vm._v(" "), _c('input', {
      staticClass: "emfe-radio-input",
      class: _vm.inputClass,
      attrs: {
        "type": "radio",
        "name": _vm.name,
        "disabled": _vm.disabled
      },
      on: {
        "change": _vm.changeFn
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-radio-text",
      class: _vm.textClass
    }, [_vm._t("default")], 2), _vm._v(" "), _vm.tip ? _c('emfe-tooltip', {
      attrs: {
        "className": "emfe-radio",
        "theme": "light",
        "placement": _vm.placement
      }
    }, [_c('emfe-icon', {
      attrs: {
        "type": "tishi",
        "className": "emfe-radio-tip"
      },
      slot: "render"
    }), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.tip)
      },
      slot: "tip"
    })], 1) : _vm._e(), _vm._v(" "), _vm.slideShow ? _c('div', {
      staticClass: "emfe-radio-slide"
    }, [_c('transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.status,
        expression: "status"
      }],
      staticClass: "emfe-radio-slide-wrap"
    }, [_vm._t("slide")], 2)])], 1) : _vm._e()], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(264),
  /* template */
  __webpack_require__(265),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeRadioGroup'
};

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-radio-group"
    }, [_vm._t("default")], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeRadioC = __webpack_require__(267);

var _EmfeRadioC2 = _interopRequireDefault(_EmfeRadioC);

var _EmfeRadioGroupC = __webpack_require__(270);

var _EmfeRadioGroupC2 = _interopRequireDefault(_EmfeRadioGroupC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeRadioC2.default.install = function (Vue) {
  Vue.component(_EmfeRadioC2.default.name, _EmfeRadioC2.default);
};

_EmfeRadioGroupC2.default.install = function (Vue) {
  Vue.component(_EmfeRadioGroupC2.default.name, _EmfeRadioGroupC2.default);
};

exports.default = {
  EmfeRadioC: _EmfeRadioC2.default,
  EmfeRadioGroupC: _EmfeRadioGroupC2.default
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(268),
  /* template */
  __webpack_require__(269),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeRadioC',
  data: function data() {
    return {
      status: this.statu
    };
  },

  props: {
    slideShow: {
      type: Boolean,
      default: false
    },
    index: {
      tyep: String,
      required: true
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    statu: {
      tyep: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    inline: String,
    change: Function
  },
  computed: {
    labelClass: function labelClass() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, this.className + '-radio', !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-radio-inline', this.inline), _ref)];
    },
    inputClass: function inputClass() {
      return this.className ? this.className + '-radio-input' : '';
    },
    textClass: function textClass() {
      return this.className ? this.className + '-radio-input-text' : '';
    }
  },
  methods: {
    changeFn: function changeFn() {
      var _this = this;

      var index = 0;
      this.$parent.$children.forEach(function (element) {
        element.status = _this.index === element.index;
        if (element.status) {
          index = element.index;
        }
      });
      if (this.change) {
        this.change(index);
      }
      this.$emit('change', index);
    }
  },
  watch: {
    statu: function statu(val, oldVal) {
      if (val !== oldVal) {
        this.status = val;
      }
    }
  }
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('label', {
      staticClass: "emfe-radio-c clearfix",
      class: [{
        'emfe-radio-c-checked': _vm.status
      }, _vm.labelClass]
    }, [_c('i', {
      staticClass: "emfe-radio-c-img",
      class: {
        'emfe-radio-c-img-checked': _vm.status, 'emfe-radio-c-img-disabled': _vm.disabled
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "emfe-radio-c-input",
      class: _vm.inputClass,
      attrs: {
        "type": "radio",
        "name": _vm.name,
        "disabled": _vm.disabled
      },
      on: {
        "change": _vm.changeFn
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-radio-c-text",
      class: _vm.textClass
    }, [_vm._t("default")], 2), _vm._v(" "), _vm.slideShow ? _c('div', {
      staticClass: "emfe-radio-c-slide"
    }, [_c('transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.status,
        expression: "status"
      }],
      staticClass: "emfe-radio-c-slide-wrap"
    }, [_vm._t("slide")], 2)])], 1) : _vm._e()]);
  }, staticRenderFns: [] };

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(271),
  /* template */
  __webpack_require__(272),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeRadioGroupC'
};

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-radio-group-c"
    }, [_vm._t("default")], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeButton = __webpack_require__(274);

var _EmfeButton2 = _interopRequireDefault(_EmfeButton);

var _EmfeButtonGroup = __webpack_require__(277);

var _EmfeButtonGroup2 = _interopRequireDefault(_EmfeButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeButton2.default.install = function (Vue) {
  Vue.component(_EmfeButton2.default.name, _EmfeButton2.default);
};

_EmfeButtonGroup2.default.install = function (Vue) {
  Vue.component(_EmfeButtonGroup2.default.name, _EmfeButtonGroup2.default);
};

exports.default = {
  EmfeButton: _EmfeButton2.default,
  EmfeButtonGroup: _EmfeButtonGroup2.default
};

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(275),
  /* template */
  __webpack_require__(276),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeButton',
  data: function data() {
    return {
      status: false
    };
  },

  props: {
    theme: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['default', 'primary']);
      },

      default: 'default'
    },
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    index: {
      tyep: String
    },
    statu: {
      tyep: Boolean
    },
    group: Boolean
  },
  created: function created() {
    this.status = this.statu;
  },

  computed: {
    buttonName: function buttonName() {
      var _ref;

      var group = this.group ? '-group-button' : '';
      var btnName = this.className ? group : '-button';
      return ['emfe-button' + group, (_ref = {}, (0, _defineProperty3.default)(_ref, 'emfe-button-' + this.theme, !!this.theme), (0, _defineProperty3.default)(_ref, this.className + '-button' + btnName, !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-button' + group + '-on', !!this.status), _ref)];
    },
    iconName: function iconName() {
      var _ref2;

      return [(_ref2 = {}, (0, _defineProperty3.default)(_ref2, 'emfe-button-' + this.theme + '-icon', !!this.theme), (0, _defineProperty3.default)(_ref2, this.className + '-button-icon', !!this.className), _ref2)];
    },
    textName: function textName() {
      return [(0, _defineProperty3.default)({}, this.className + '-button-text', !!this.className)];
    }
  },
  methods: {
    change: function change() {
      var _this = this;

      var index = this.index ? this.index : 0;
      this.$parent.$children.forEach(function (element) {
        if (_this.index) {
          element.status = _this.index === element.index;
        }
      });
      this.$emit('click', index);
    }
  },
  watch: {
    statu: function statu(val, oldVal) {
      if (val !== oldVal) {
        this.status = val;
      }
    }
  }
};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('button', {
      class: _vm.buttonName,
      attrs: {
        "disabled": _vm.disabled
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.change($event);
        }
      }
    }, [_vm.type ? _c('emfe-icon', {
      staticClass: "emfe-button-icon",
      class: _vm.iconName,
      attrs: {
        "type": _vm.type
      }
    }) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "emfe-button-text",
      class: _vm.textName
    }, [_vm._t("default")], 2)], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(278),
  /* template */
  __webpack_require__(279),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeButtonGroup'
};

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-button-group"
    }, [_vm._t("default")], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeButtonC = __webpack_require__(281);

var _EmfeButtonC2 = _interopRequireDefault(_EmfeButtonC);

var _EmfeButtonGroupC = __webpack_require__(284);

var _EmfeButtonGroupC2 = _interopRequireDefault(_EmfeButtonGroupC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeButtonC2.default.install = function (Vue) {
  Vue.component(_EmfeButtonC2.default.name, _EmfeButtonC2.default);
};

_EmfeButtonGroupC2.default.install = function (Vue) {
  Vue.component(_EmfeButtonGroupC2.default.name, _EmfeButtonGroupC2.default);
};

exports.default = {
  EmfeButtonC: _EmfeButtonC2.default,
  EmfeButtonGroupC: _EmfeButtonGroupC2.default
};

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(282),
  /* template */
  __webpack_require__(283),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeButtonC',
  data: function data() {
    return {
      status: false
    };
  },

  props: {
    theme: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['default', 'primary', 'secondary']);
      }
    },
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    index: {
      tyep: String
    },
    statu: {
      tyep: Boolean
    },
    group: Boolean
  },
  created: function created() {
    this.status = this.statu;
  },

  computed: {
    buttonName: function buttonName() {
      var _ref;

      var group = this.group ? '-group-button' : '';
      var btnName = this.className ? group : '-button';
      return ['emfe-button-c' + group, (_ref = {}, (0, _defineProperty3.default)(_ref, 'emfe-button-c-' + this.theme, !!this.theme), (0, _defineProperty3.default)(_ref, this.className + '-button-c' + btnName, !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-button-c' + group + '-on', !!this.status), _ref)];
    },
    textName: function textName() {
      return [(0, _defineProperty3.default)({}, this.className + '-button-text', !!this.className)];
    }
  },
  methods: {
    change: function change() {
      var _this = this;

      var index = this.index ? this.index : 0;
      this.$parent.$children.forEach(function (element) {
        if (_this.index) {
          element.status = _this.index === element.index;
        }
      });
      this.$emit('click', index);
    }
  },
  watch: {
    statu: function statu(val, oldVal) {
      if (val !== oldVal) {
        this.status = val;
      }
    }
  }
};

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('button', {
      class: _vm.buttonName,
      attrs: {
        "disabled": _vm.disabled
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.change($event);
        }
      }
    }, [_vm.type ? _c('emfe-icon', {
      staticClass: "emfe-button-icon",
      attrs: {
        "type": _vm.type
      }
    }) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "emfe-button-c-text",
      class: _vm.textName
    }, [_vm._t("default")], 2)], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(285),
  /* template */
  __webpack_require__(286),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeButtonGroupC'
};

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-button-group-c"
    }, [_vm._t("default")], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfePagination = __webpack_require__(288);

var _EmfePagination2 = _interopRequireDefault(_EmfePagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfePagination2.default.install = function (Vue) {
  Vue.component(_EmfePagination2.default.name, _EmfePagination2.default);
};

exports.default = _EmfePagination2.default;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(289),
  /* template */
  __webpack_require__(290),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    pageCount: {
      type: Number,
      default: 1
    },
    curPage: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      curPageOn: this.curPage
    };
  },

  computed: {
    middlePages: function middlePages() {
      var num = void 0;
      if (this.pageCount <= 2) {
        num = 0;
      } else if (this.pageCount > 2 && this.pageCount <= 6) {
        num = this.pageCount - 2;
      } else {
        num = this.curPageOn > 999 ? 2 : 5;
      }
      return num;
    },
    bigLimit: function bigLimit() {
      return this.middlePages > 5 ? this.pageCount - 6 : this.pageCount - 3;
    },
    offset: function offset() {
      var curNum = void 0;
      var m = void 0;
      var n = this.pageCount - this.curPageOn;
      if (n === 1 || n === 0) {
        n = 2;
      }
      if (this.bigLimit === 3) {
        m = 1;
      } else {
        m = 2;
      }
      if (this.curPageOn <= 5) {
        curNum = 2;
      } else if (this.curPageOn >= this.bigLimit) {
        curNum = this.bigLimit > 5 ? this.bigLimit - n : this.bigLimit - m;
      } else {
        curNum = this.middlePages > 5 ? this.curPageOn - 3 : this.curPageOn - 2;
      }
      return curNum;
    }
  },
  methods: {
    page: function page(indexPage) {
      this.$emit('togglePage', indexPage);
      this.$emit('change', indexPage);
      this.curPageOn = indexPage;
    },
    prevPage: function prevPage() {
      if (this.curPageOn !== 1) {
        this.page(this.curPageOn - 1);
      }
    },
    nextPage: function nextPage() {
      if (this.curPageOn !== this.pageCount) {
        this.page(this.curPageOn + 1);
      }
    }
  },
  watch: {
    pageCount: function pageCount() {
      this.curPageOn = this.curPage;
    }
  }
};

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-pagination"
    }, [_c('ul', [_vm.pageCount > 1 ? _c('li', {
      staticClass: "emfe-pagination-item",
      class: {
        disabled: _vm.curPageOn == 1
      },
      on: {
        "click": _vm.prevPage
      }
    }, [_vm._v("上一页")]) : _vm._e(), _vm._v(" "), _c('li', {
      staticClass: "emfe-pagination-item",
      class: {
        'emfe-pagination-item-on': _vm.curPageOn == 1
      },
      on: {
        "click": function click($event) {
          _vm.page(1);
        }
      }
    }, [_vm._v("1")]), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.curPageOn > 5 && _vm.pageCount > 6 && _vm.bigLimit != 4,
        expression: "curPageOn > 5 && pageCount > 6  && bigLimit != 4"
      }],
      staticClass: "emfe-pagination-item"
    }, [_vm._v("...")]), _vm._v(" "), _vm._l(_vm.middlePages, function (item, index) {
      return _c('li', {
        staticClass: "emfe-pagination-item",
        class: {
          'emfe-pagination-item-on': _vm.curPageOn == index + _vm.offset
        },
        on: {
          "click": function click($event) {
            _vm.page(index + _vm.offset);
          }
        }
      }, [_vm._v(_vm._s(index + _vm.offset))]);
    }), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.curPageOn <= _vm.bigLimit && _vm.pageCount > 6 && _vm.bigLimit != 4,
        expression: "curPageOn <= bigLimit && pageCount > 6  && bigLimit != 4"
      }],
      staticClass: "emfe-pagination-item"
    }, [_vm._v("...")]), _vm._v(" "), _vm.pageCount > 1 ? _c('li', {
      staticClass: "emfe-pagination-item",
      class: {
        'emfe-pagination-item-on': _vm.curPageOn == _vm.pageCount
      },
      on: {
        "click": function click($event) {
          _vm.page(_vm.pageCount);
        }
      }
    }, [_vm._v(_vm._s(_vm.pageCount))]) : _vm._e(), _vm._v(" "), _vm.pageCount > 1 ? _c('li', {
      staticClass: "emfe-pagination-item",
      class: {
        disabled: _vm.curPageOn == _vm.pageCount
      },
      on: {
        "click": _vm.nextPage
      }
    }, [_vm._v("下一页")]) : _vm._e()], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfePaginationC = __webpack_require__(292);

var _EmfePaginationC2 = _interopRequireDefault(_EmfePaginationC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfePaginationC2.default.install = function (Vue) {
  Vue.component(_EmfePaginationC2.default.name, _EmfePaginationC2.default);
};

exports.default = _EmfePaginationC2.default;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(293),
  /* template */
  __webpack_require__(294),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    pageCount: {
      type: Number,
      default: 1
    },
    curPage: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      curPageOn: this.curPage
    };
  },

  computed: {
    middlePages: function middlePages() {
      var num = void 0;
      if (this.pageCount <= 2) {
        num = 0;
      } else if (this.pageCount > 2 && this.pageCount <= 6) {
        num = this.pageCount - 2;
      } else {
        num = this.curPageOn > 999 ? 2 : 5;
      }
      return num;
    },
    bigLimit: function bigLimit() {
      return this.middlePages > 5 ? this.pageCount - 6 : this.pageCount - 3;
    },
    offset: function offset() {
      var curNum = void 0;
      var m = void 0;
      var n = this.pageCount - this.curPageOn;
      if (n === 1 || n === 0) {
        n = 2;
      }
      if (this.bigLimit === 3) {
        m = 1;
      } else {
        m = 2;
      }
      if (this.curPageOn <= 5) {
        curNum = 2;
      } else if (this.curPageOn >= this.bigLimit) {
        curNum = this.bigLimit > 5 ? this.bigLimit - n : this.bigLimit - m;
      } else {
        curNum = this.middlePages > 5 ? this.curPageOn - 3 : this.curPageOn - 2;
      }
      return curNum;
    }
  },
  methods: {
    page: function page(indexPage) {
      this.$emit('togglePage', indexPage);
      this.$emit('change', indexPage);
      this.curPageOn = indexPage;
    },
    prevPage: function prevPage() {
      if (this.curPageOn !== 1) {
        this.page(this.curPageOn - 1);
      }
    },
    nextPage: function nextPage() {
      if (this.curPageOn !== this.pageCount) {
        this.page(this.curPageOn + 1);
      }
    }
  },
  watch: {
    pageCount: function pageCount() {
      this.curPageOn = this.curPage;
    }
  }
};

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-pagination-c"
    }, [_c('ul', [_vm.pageCount > 1 ? _c('li', {
      staticClass: "emfe-pagination-c-item",
      class: {
        disabled: _vm.curPageOn == 1
      },
      on: {
        "click": _vm.prevPage
      }
    }, [_vm._v("上一页")]) : _vm._e(), _vm._v(" "), _c('li', {
      staticClass: "emfe-pagination-c-item",
      class: {
        'emfe-pagination-c-item-on': _vm.curPageOn == 1
      },
      on: {
        "click": function click($event) {
          _vm.page(1);
        }
      }
    }, [_vm._v("1")]), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.curPageOn > 5 && _vm.pageCount > 6 && _vm.bigLimit != 4,
        expression: "curPageOn > 5 && pageCount > 6  && bigLimit != 4"
      }],
      staticClass: "emfe-pagination-c-item"
    }, [_vm._v("...")]), _vm._v(" "), _vm._l(_vm.middlePages, function (item, index) {
      return _c('li', {
        staticClass: "emfe-pagination-c-item",
        class: {
          'emfe-pagination-c-item-on': _vm.curPageOn == index + _vm.offset
        },
        on: {
          "click": function click($event) {
            _vm.page(index + _vm.offset);
          }
        }
      }, [_vm._v(_vm._s(index + _vm.offset))]);
    }), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.curPageOn <= _vm.bigLimit && _vm.pageCount > 6 && _vm.bigLimit != 4,
        expression: "curPageOn <= bigLimit && pageCount > 6  && bigLimit != 4"
      }],
      staticClass: "emfe-pagination-c-item"
    }, [_vm._v("...")]), _vm._v(" "), _vm.pageCount > 1 ? _c('li', {
      staticClass: "emfe-pagination-c-item",
      class: {
        'emfe-pagination-c-item-on': _vm.curPageOn == _vm.pageCount
      },
      on: {
        "click": function click($event) {
          _vm.page(_vm.pageCount);
        }
      }
    }, [_vm._v(_vm._s(_vm.pageCount))]) : _vm._e(), _vm._v(" "), _vm.pageCount > 1 ? _c('li', {
      staticClass: "emfe-pagination-c-item",
      class: {
        disabled: _vm.curPageOn == _vm.pageCount
      },
      on: {
        "click": _vm.nextPage
      }
    }, [_vm._v("下一页")]) : _vm._e()], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeSelect = __webpack_require__(296);

var _EmfeSelect2 = _interopRequireDefault(_EmfeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeSelect2.default.install = function (Vue) {
  Vue.component(_EmfeSelect2.default.name, _EmfeSelect2.default);
};

exports.default = _EmfeSelect2.default;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(297),
  /* template */
  __webpack_require__(298),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Select',
  data: function data() {
    return {
      opened: false,
      checkList: [],
      flagCheck: false,
      checkVal: this.checkVals,
      newListVal: '',
      newDisabled: this.disabled,
      checkedNow: -1
    };
  },

  props: {
    type: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['default', 'checkbox', 'icon']);
      },

      default: 'default'
    },
    seleStu: {
      type: String,
      default: ''
    },
    news: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    datas: {
      type: Array,
      required: true
    },
    addText: {
      type: String,
      default: '添加标签'
    },
    selectText: {
      type: [String, Number],
      default: '选择标签'
    },
    errOk: {
      type: [Boolean],
      default: false
    },
    checkVals: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    className: String,
    direction: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['top', 'bottom']);
      },

      default: 'bottom'
    },
    getDefData: {
      type: Function,
      default: function _default() {}
    },
    change: {
      type: Function,
      default: function _default() {}
    },
    close: {
      type: Function,
      default: function _default() {}
    },
    addDataCheck: {
      type: Function,
      default: function _default() {}
    },
    addDataRadio: {
      type: Function,
      default: function _default() {}
    },
    add: {
      type: Function,
      default: function _default() {}
    },
    delopt: {
      type: Function,
      default: function _default() {}
    },
    checkedopt: {
      type: Function,
      default: function _default() {}
    },
    getAllData: {
      type: Function,
      default: function _default() {}
    },
    clickInput: {
      type: Function,
      default: function _default() {}
    },
    click: {
      type: Function,
      default: function _default() {}
    },
    tip: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    selectName: function selectName() {
      return [(0, _defineProperty3.default)({}, this.className + '-select', !!this.className)];
    },
    inputName: function inputName() {
      return [(0, _defineProperty3.default)({}, this.className + '-select-input', !!this.className)];
    },
    addErrorText: function addErrorText() {
      return [(0, _defineProperty3.default)({}, this.className + '-select-error', !!this.className)];
    }
  },
  methods: {
    inpcheck: function inpcheck() {
      var _this = this;

      this.checkList = this.datas;
      this.checkList.forEach(function (cl) {
        if (!_o2.default.hOwnProperty(cl, 'checked')) {
          cl.checked = false;
        }
        if (_this.checkVals.length > 0) {
          _this.checkVals.forEach(function (cVal) {
            if (cl.name === cVal) {
              cl.checked = true;
            }
          });
        }
      });

      this.flagCheck = !this.flagCheck;
      this.opened = !this.opened;
      this.clickInput();
      this.click();
      this.$emit('clickInput');
      this.$emit('click');
    },
    newListBtn: function newListBtn() {
      var newdata = this.newListVal;
      this.$emit('addDataCheck', newdata, this.datas);
      this.$emit('addDataRadio', newdata, this.datas);
      this.$emit('add', newdata, this.datas);
      this.newListVal = '';
      this.addDataCheck(newdata, this.datas);
      this.addDataRadio(newdata, this.datas);
      this.add(newdata, this.datas);
    },
    spanTxt: function spanTxt(item, index) {
      if (item.disabled !== 'disabled' && !item.disabled) {
        this.checkVal = item.name;
        this.flagCheck = false;
        this.$emit('getDefData', this.checkVal, item, this.datas, index);
        this.$emit('change', this.checkVal, item, this.datas, index);
        this.getDefData(this.checkVal, item, this.datas, index);
        this.change(this.checkVal, item, this.datas, index);
      }
    },
    closeFn: function closeFn() {
      if (this.opened) {
        this.opened = false;
        this.checkList = [];
        this.flagCheck = false;
        this.close(this.checkVal);
      }
    },
    getdata: function getdata(item, index) {
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
        this.$emit('delopt', item.name, item, this.datas, index);
        this.delopt(item.name, item, this.datas, index);
      } else {
        this.$emit('checkedopt', item.name, item, this.datas, index);
        this.checkedopt(item.name, item, this.datas, index);
      }
      this.$emit('getAllData', va, item, this.datas, index);
      this.getAllData(va, item, this.datas, index);
      this.$emit('change', va, item, this.datas, index);
      this.change(va, item, this.datas, index);
    }
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
    }
  }
};

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      class: [_vm.selectName, {
        'emfe-select-selectBox': _vm.tip
      }]
    }, [_c('div', {
      directives: [{
        name: "emfe-documentclick",
        rawName: "v-emfe-documentclick",
        value: _vm.closeFn,
        expression: "closeFn"
      }],
      staticClass: "emfe-select",
      class: [{
        'emfe-select-selectBox-tipSelect': _vm.tip
      }, "emfe-select-" + _vm.direction]
    }, [_c('input', {
      staticClass: "emfe-select-input",
      class: [_vm.inputName, {
        'emfe-select-input-error': _vm.errOk
      }],
      attrs: {
        "type": "text",
        "disabled": _vm.newDisabled || !this.datas.length && _vm.seleStu !== 'newList',
        "readonly": "",
        "placeholder": _vm.selectText
      },
      domProps: {
        "value": _vm.checkVal
      },
      on: {
        "click": _vm.inpcheck
      }
    }), _vm._v(" "), _vm.errOk ? _c('div', {
      staticClass: "emfe-select-error",
      class: _vm.addErrorText
    }, [_vm._t("error")], 2) : _vm._e(), _vm._v(" "), _vm.flagCheck ? _c('div', {
      staticClass: "emfe-select-flag",
      class: "emfe-select-flag-" + _vm.direction
    }, [_vm.seleStu === 'newList' || _vm.news ? _c('div', {
      staticClass: "emfe-select-custab"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newListVal,
        expression: "newListVal"
      }],
      staticClass: "emfe-select-input",
      attrs: {
        "type": "text",
        "placeholder": _vm.addText
      },
      domProps: {
        "value": _vm.newListVal
      },
      on: {
        "input": function input($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.newListVal = $event.target.value;
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-select-custab-btn",
      on: {
        "click": _vm.newListBtn
      }
    }, [_vm._v("保存")])]) : _vm._e(), _vm._v(" "), _c('div', {
      class: {
        'emfe-select-flag-scroll': _vm.checkList.length > 5
      }
    }, [_vm._l(_vm.checkList, function (item, itemIndex) {
      return _vm.type === 'checkbox' ? _c('label', {
        key: item.id,
        staticClass: "emfe-select-label",
        class: {
          'emfe-select-label-disabled': item.disabled
        }
      }, [_c('span', {
        staticClass: "emfe-select-text"
      }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
        staticClass: "emfe-select-checkout-box"
      }, [_c('i', {
        staticClass: "emfe-select-checkout-inner",
        class: {
          'emfe-select-checkout-inner-checked': item.checked
        }
      }), _vm._v(" "), _c('input', {
        key: item.id,
        staticClass: "emfe-select-checkout-status",
        attrs: {
          "disabled": item.disabled,
          "type": "checkbox"
        },
        on: {
          "change": function change($event) {
            _vm.getdata(item, itemIndex);
          }
        }
      })])]) : _vm._e();
    }), _vm._v(" "), _vm._l(_vm.checkList, function (item, checkind) {
      return _vm.type === 'default' ? _c('label', {
        key: checkind,
        staticClass: "emfe-select-label emfe-select-delabel",
        attrs: {
          "title": item.name,
          "disabled": item.disabled
        },
        on: {
          "click": function click($event) {
            _vm.spanTxt(item, checkind);
          }
        }
      }, [_c('span', {
        staticClass: "emfe-select-label-text",
        class: {
          'emfe-select-label-disabled': item.disabled
        }
      }, [_vm._v(_vm._s(item.name))])]) : _vm._e();
    }), _vm._v(" "), _vm._l(_vm.checkList, function (item, checkindex) {
      return _vm.type === 'icon' ? _c('div', {
        key: checkindex,
        staticClass: "emfe-select-label emfe-select-delabel",
        class: {
          'disabled': item.disabled
        },
        attrs: {
          "disabled": item.disabled
        },
        on: {
          "click": function click($event) {
            _vm.spanTxt(item, checkindex);
          }
        }
      }, [_c('img', {
        staticClass: "emfe-select-icon",
        attrs: {
          "src": item.icon,
          "alt": item.name
        }
      }), _vm._v(" "), _c('span', {
        staticClass: "emfe-select-icon-piece"
      }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
        staticClass: "emfe-select-icon-tel"
      }, [_vm._v(_vm._s(item.tel))])]) : _vm._e();
    })], 2)]) : _vm._e()]), _vm._v(" "), _vm.tip ? _c('emfe-tooltip', {
      attrs: {
        "className": "emfe-select",
        "theme": "light",
        "placement": _vm.placement
      }
    }, [_c('emfe-icon', {
      attrs: {
        "type": "tishi",
        "className": "emfe-select-tip"
      },
      slot: "render"
    }), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.tip)
      },
      slot: "tip"
    })], 1) : _vm._e()], 1);
  }, staticRenderFns: [] };

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeModal = __webpack_require__(300);

var _EmfeModal2 = _interopRequireDefault(_EmfeModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeModal2.default.install = function (Vue) {
  Vue.component(_EmfeModal2.default.name, _EmfeModal2.default);
};

exports.default = _EmfeModal2.default;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(301),
  /* template */
  __webpack_require__(302),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeModal',
  data: function data() {
    return {
      footerFlg: true
    };
  },

  props: {
    show: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 440
    },
    title: {
      type: String,
      default: '提示'
    },
    className: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelFlg: {
      type: [String, Boolean],
      default: true
    },
    okFlg: {
      type: [String, Boolean],
      default: true
    },
    tip: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    if (!this.cancelFlg && !this.okFlg) {
      this.footerFlg = false;
    }
  },

  computed: {
    mainName: function mainName() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, this.className + '-modal-main', !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-modal-main-tip', this.tip), _ref)];
    }
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
    }
  }
};

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _vm.show ? _c('div', {
      staticClass: "emfe-modal"
    }, [_c('div', {
      staticClass: "emfe-modal-mask"
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-modal-wrap",
      style: {
        width: _vm.width + "px"
      }
    }, [_c('div', {
      staticClass: "emfe-modal-header"
    }, [_c('div', {
      staticClass: "emfe-modal-header-inner"
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
      staticClass: "emfe-modal-header-close",
      on: {
        "click": _vm.closeModal
      }
    }, [_vm._v("＋")])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-modal-main",
      class: _vm.mainName
    }, [_vm._t("modal-main")], 2), _vm._v(" "), _vm.footerFlg ? _c('div', {
      staticClass: "emfe-modal-footer"
    }, [_vm.cancelFlg ? _c('emfe-button', {
      attrs: {
        "className": "emfe-modal"
      },
      on: {
        "click": _vm.cancel
      }
    }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), _vm._v(" "), _vm.okFlg ? _c('emfe-button', {
      attrs: {
        "theme": "primary"
      },
      on: {
        "click": _vm.ok
      }
    }, [_vm._v(_vm._s(_vm.okText))]) : _vm._e()], 1) : _vm._e()])]) : _vm._e();
  }, staticRenderFns: [] };

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeModalC = __webpack_require__(304);

var _EmfeModalC2 = _interopRequireDefault(_EmfeModalC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeModalC2.default.install = function (Vue) {
  Vue.component(_EmfeModalC2.default.name, _EmfeModalC2.default);
};

exports.default = _EmfeModalC2.default;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(305),
  /* template */
  __webpack_require__(306),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeModalC',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 440
    },
    title: String,
    className: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelFlg: {
      type: [String, Boolean],
      default: true
    },
    okFlg: {
      type: [String, Boolean],
      default: true
    }
  },
  computed: {
    mainName: function mainName() {
      return [(0, _defineProperty3.default)({}, this.className + '-modal-main', !!this.className)];
    }
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
    }
  }
};

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _vm.show ? _c('div', {
      staticClass: "emfe-modal-c"
    }, [_c('div', {
      staticClass: "emfe-modal-c-mask"
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-modal-c-wrap",
      style: {
        width: _vm.width + "px"
      }
    }, [_c('div', {
      staticClass: "emfe-modal-c-header"
    }, [_c('div', {
      staticClass: "emfe-modal-c-header-inner"
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
      staticClass: "emfe-modal-c-header-close",
      on: {
        "click": _vm.closeModal
      }
    }, [_vm._v("＋")])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-modal-c-main",
      class: _vm.mainName
    }, [_vm._t("modal-main")], 2), _vm._v(" "), _c('div', {
      staticClass: "emfe-modal-c-footer"
    }, [_vm.cancelFlg ? _c('div', {
      staticClass: "emfe-modal-c-btn emfe-modal-c-btn-cancel",
      on: {
        "click": _vm.cancel
      }
    }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), _vm._v(" "), _vm.okFlg ? _c('div', {
      staticClass: "emfe-modal-c-btn emfe-modal-c-btn-ok",
      on: {
        "click": _vm.ok
      }
    }, [_vm._v(_vm._s(_vm.okText))]) : _vm._e()])])]) : _vm._e();
  }, staticRenderFns: [] };

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeCheckout = __webpack_require__(308);

var _EmfeCheckout2 = _interopRequireDefault(_EmfeCheckout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeCheckout2.default.install = function (Vue) {
  Vue.component(_EmfeCheckout2.default.name, _EmfeCheckout2.default);
};

exports.default = _EmfeCheckout2.default;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(309),
  /* template */
  __webpack_require__(310),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeCheckout',
  data: function data() {
    return {
      checkoutStatus: this.value,
      newtitle: this.title
    };
  },

  props: {
    theme: {
      validator: function validator(value) {
        return _lodash2.default.has(value, ['left', 'right']);
      },

      default: 'left'
    },
    slideShow: {
      type: Boolean,
      default: false
    },
    stop: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    },
    tip: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    className: String,
    disable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: String,
    inline: String,
    change: {
      type: Function,
      default: function _default() {}
    },
    index: [Number, String],
    name: String,
    checkedForever: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    innerName: function innerName() {
      return [{
        'emfe-checkout-inner-disable': this.disable || this.disabled, 'emfe-checkout-inner-checked': this.checkoutStatus, 'emfe-checkout-inner-right': this.theme === 'right'
      }];
    },
    checkedName: function checkedName() {
      return [{
        'emfe-checkout-inner-checked-disabled': this.checkedForever || this.disable || this.disabled
      }];
    },
    checkoutName: function checkoutName() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, this.className + '-checkout', !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-checkout-inline', this.inline), _ref)];
    },
    boxName: function boxName() {
      var _ref2;

      return [(_ref2 = {}, (0, _defineProperty3.default)(_ref2, this.className + '-checkout-box', !!this.className), (0, _defineProperty3.default)(_ref2, 'emfe-checkout-box-forever', this.checkedForever || this.disable || this.disabled), _ref2)];
    },
    openName: function openName() {
      return [(0, _defineProperty3.default)({}, this.className + '-slide-wrap-open', !!this.className)];
    },
    textName: function textName() {
      var _ref4;

      return [(_ref4 = {}, (0, _defineProperty3.default)(_ref4, this.className + '-text', !!this.className), (0, _defineProperty3.default)(_ref4, 'emfe-checkout-text-notip', !this.tip), (0, _defineProperty3.default)(_ref4, 'emfe-checkout-text-right', this.theme === 'right'), _ref4)];
    }
  },
  methods: {
    alocked: function alocked(e) {
      var checked = this.checkedForever || this.disable || this.disabled ? false : e.target.checked;
      this.setValue(checked);
      this.$emit('input', this.checkoutStatus);
      this.$emit('checked', this.checkoutStatus, this.title, this.index);
      this.$emit('change', this.checkoutStatus, this.title, this.index);
      this.change(this.checkoutStatus, this.title, this.index);
    },
    setValue: function setValue() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

      this.checkoutStatus = checked;
    },
    click: function click() {
      this.$emit('click', this.checkoutStatus);
    }
  },
  watch: {
    title: function title(val, oldVal) {
      if (val !== oldVal) {
        this.newtitle = val;
      }
    },
    value: function value() {
      this.setValue();
    }
  }
};

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-checkout",
      class: _vm.checkoutName
    }, [_c('div', {
      class: {
        'emfe-checkout-wrap': _vm.tip
      }
    }, [_c('label', {
      staticClass: "emfe-checkout-box",
      class: _vm.boxName
    }, [_c('i', {
      staticClass: "emfe-checkout-inner",
      class: [_vm.innerName, _vm.checkedName]
    }), _vm._v(" "), _vm.stop ? _c('input', {
      staticClass: "emfe-checkout-status",
      class: {
        'emfe-checkout-box-forever': _vm.checkedForever || _vm.disable || _vm.disabled, 'emfe-checkout-status-right': this.theme === 'right'
      },
      attrs: {
        "type": "checkbox",
        "name": _vm.name,
        "disabled": _vm.disable || _vm.disabled
      },
      domProps: {
        "checked": _vm.checkoutStatus
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          _vm.click($event);
        },
        "change": _vm.alocked
      }
    }) : _c('input', {
      staticClass: "emfe-checkout-status",
      class: {
        'emfe-checkout-box-forever': _vm.checkedForever || _vm.disable || _vm.disabled, 'emfe-checkout-status-right': this.theme === 'right'
      },
      attrs: {
        "type": "checkbox",
        "name": _vm.name,
        "disabled": _vm.disable || _vm.disabled
      },
      domProps: {
        "checked": _vm.checkoutStatus
      },
      on: {
        "change": _vm.alocked
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-checkout-text",
      class: _vm.textName
    }, [_vm._v(_vm._s(_vm.newtitle))])]), _vm._v(" "), _vm.tip ? _c('emfe-tooltip', {
      attrs: {
        "className": "emfe-checkout",
        "theme": "light",
        "placement": _vm.placement
      }
    }, [_c('emfe-icon', {
      attrs: {
        "className": "emfe-checkout",
        "type": "tishi"
      },
      slot: "render"
    }), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.tip)
      },
      slot: "tip"
    })], 1) : _vm._e()], 1), _vm._v(" "), _vm.slideShow ? _c('div', {
      staticClass: "emfe-checkout-slide"
    }, [_c('transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.checkoutStatus,
        expression: "checkoutStatus"
      }],
      staticClass: "emfe-checkout-slide-wrap",
      class: _vm.openName
    }, [_vm._t("slide")], 2)])], 1) : _vm._e()]);
  }, staticRenderFns: [] };

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeCheckoutC = __webpack_require__(312);

var _EmfeCheckoutC2 = _interopRequireDefault(_EmfeCheckoutC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeCheckoutC2.default.install = function (Vue) {
  Vue.component(_EmfeCheckoutC2.default.name, _EmfeCheckoutC2.default);
};

exports.default = _EmfeCheckoutC2.default;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(313),
  /* template */
  __webpack_require__(314),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeCheckoutC',
  data: function data() {
    return {
      checkoutStatus: this.value,
      newtitle: this.title
    };
  },

  props: {
    slideShow: {
      type: Boolean,
      default: false
    },
    stop: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    },
    className: String,
    disable: {
      type: Boolean,
      default: false
    },
    title: String,
    inline: String,
    change: {
      type: Function,
      default: function _default() {}
    },
    index: [Number, String],
    name: String
  },
  computed: {
    innerName: function innerName() {
      return [{
        'emfe-checkout-c-inner-disable': this.disable, 'emfe-checkout-c-inner-checked': this.checkoutStatus
      }];
    },
    checkoutName: function checkoutName() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, this.className + '-checkout', !!this.className), (0, _defineProperty3.default)(_ref, 'emfe-checkout-inline', this.inline), _ref)];
    },
    openName: function openName() {
      return [(0, _defineProperty3.default)({}, this.className + '-slide-wrap-open', !!this.className)];
    },
    textName: function textName() {
      return [(0, _defineProperty3.default)({}, this.className + '-text', !!this.className)];
    }
  },
  methods: {
    alocked: function alocked(e) {
      this.setValue(e.target.checked);
      this.$emit('input', this.checkoutStatus);
      this.$emit('checked', this.checkoutStatus, this.title, this.index);
      this.$emit('change', this.checkoutStatus, this.title, this.index);
      this.change(this.checkoutStatus, this.title, this.index);
    },
    setValue: function setValue() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

      this.checkoutStatus = checked;
    }
  },
  watch: {
    title: function title(val, oldVal) {
      if (val !== oldVal) {
        this.newtitle = val;
      }
    },
    value: function value() {
      this.setValue();
    }
  }
};

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-checkout-c",
      class: _vm.checkoutName
    }, [_c('label', {
      staticClass: "emfe-checkout-c-box"
    }, [_c('i', {
      staticClass: "emfe-checkout-c-inner",
      class: _vm.innerName
    }), _vm._v(" "), _vm.stop ? _c('input', {
      staticClass: "emfe-checkout-c-status",
      attrs: {
        "type": "checkbox",
        "name": _vm.name,
        "disabled": _vm.disable
      },
      domProps: {
        "checked": _vm.checkoutStatus
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
        },
        "change": _vm.alocked
      }
    }) : _c('input', {
      staticClass: "emfe-checkout-c-status",
      attrs: {
        "type": "checkbox",
        "name": _vm.name,
        "disabled": _vm.disable
      },
      domProps: {
        "checked": _vm.checkoutStatus
      },
      on: {
        "change": _vm.alocked
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-checkout-c-text",
      class: _vm.textName
    }, [_vm._v(_vm._s(_vm.newtitle))])]), _vm._v(" "), _vm.slideShow ? _c('div', {
      staticClass: "emfe-checkout-c-slide"
    }, [_c('transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.checkoutStatus,
        expression: "checkoutStatus"
      }],
      staticClass: "emfe-checkout-c-slide-wrap",
      class: _vm.openName
    }, [_vm._t("slide")], 2)])], 1) : _vm._e()]);
  }, staticRenderFns: [] };

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeDrop = __webpack_require__(316);

var _EmfeDrop2 = _interopRequireDefault(_EmfeDrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeDrop2.default.install = function (Vue) {
  Vue.component(_EmfeDrop2.default.name, _EmfeDrop2.default);
};

exports.default = _EmfeDrop2.default;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(317),
  /* template */
  __webpack_require__(318),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(12);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refPos = {
  y: 0,
  x: 0
};

var hrBorderSize = 1;

var otherConstant = 0;

var lastHrIndex = -1;

var dragWidth = -1;

exports.default = {
  name: 'EmfeDrop',
  data: function data() {
    return {
      datas: [],
      lastHrStatus: false,
      lastHit: -1,
      lastDrag: -1
    };
  },

  props: {
    opationsData: {
      type: Array,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    swap: {
      type: Function,
      default: function _default() {}
    }
  },
  mounted: function mounted() {
    this.handleData();
  },

  methods: {
    handleData: function handleData() {
      var _this = this;

      this.datas = [];
      this.opationsData.forEach(function (od, odIndex) {
        var newOd = {
          title: od.title,
          style: {},
          hrStatus: false,
          index: odIndex
        };
        _this.datas.push(newOd);
      });
    },
    testHit: function testHit(one, two) {
      var hit = false;
      var twoTop = (0, _assist.getElementTop)(two) - this.scrollTop;
      var twoBottom = twoTop + two.clientHeight;
      var oneTop = (0, _assist.getElementTop)(one) - this.scrollTop;
      var oneBottom = oneTop + one.clientHeight;

      var twoLeft = (0, _assist.getElementLeft)(two) - this.scrollLeft;
      var twoRight = twoLeft + two.clientWidth;
      var oneLeft = (0, _assist.getElementLeft)(one) - this.scrollLeft;
      var oneRight = oneLeft + one.clientWidth;
      if (oneTop <= twoBottom && oneBottom >= twoTop && oneLeft <= twoRight && oneRight >= twoLeft) {
        hit = true;
      }
      return hit;
    },
    down: function down(e, index, item) {
      this.scrollTop = document.body.scrollTop;
      this.scrollLeft = document.body.scrollLeft;
      this.elTop = e.target.offsetTop - otherConstant;
      this.elLeft = e.target.offsetLeft - otherConstant;
      refPos.y = e.pageY;
      refPos.x = e.pageX;
      dragWidth = e.target.clientWidth + hrBorderSize * 2;
      document.addEventListener('mousemove', this.move, false);
      document.addEventListener('mouseup', this.up, false);
      item.style = {
        width: dragWidth + 'px',
        position: 'absolute',
        left: this.elLeft + 'px',
        top: this.elTop + 'px'
      };
      item.hrStatus = true;
      this.lastDrag = index;
      this.$emit('down', this.datas[this.lastDrag], this.opationsData[this.lastDrag]);
      return false;
    },
    move: function move(e) {
      var _this2 = this;

      var hits = this.$refs.hits;
      var _datas$lastDrag = this.datas[this.lastDrag],
          index = _datas$lastDrag.index,
          style = _datas$lastDrag.style;

      var disPosY = e.pageY - refPos.y;
      var disPosX = e.pageX - refPos.x;
      style.top = this.elTop + disPosY + 'px';
      style.left = this.elLeft + disPosX + 'px';
      hits.forEach(function (hit, hitIndex) {
        if (hitIndex !== index) {
          var isHit = _this2.testHit(hits[index], hit);
          if (isHit) {
            _this2.getHitIndex(hitIndex);
            _this2.moveDragHr();
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
        var opationsData = this.opationsData,
            datas = this.datas,
            lastHit = this.lastHit,
            lastDrag = this.lastDrag;

        _lodash2.default.exchangeAttrValue(datas[lastDrag], datas[lastHit], 'index');
        _lodash2.default.swap(this.datas, this.lastHit, this.lastDrag);
        _lodash2.default.swap(opationsData, lastHit, lastDrag);
        this.$emit('swap', datas[lastDrag], lastHit, lastDrag, opationsData[lastDrag]);
        this.swap(datas[lastDrag], lastHit, lastDrag, opationsData[lastDrag]);
      }
    },
    plus: function plus(index) {
      var obj = {
        other: false,
        hrStatus: false,
        style: {}
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
        noPlus: true
      };
      if (this.clickFlg) {
        this.datas.splice(this.datas.length, 0, obj);
        this.opationsData.splice(this.datas.length, 0, '');
      }
      this.clickFlg = false;
      this.$emit('otherplus', this.datas[this.datas.length - 1], this.datas.length - 1);
    }
  },
  watch: {
    opationsData: function opationsData() {
      this.handleData();
    }
  }
};

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-drop",
      class: _vm.className
    }, [_vm._l(_vm.datas, function (item, index) {
      return [item.hrStatus ? _c('div', {
        staticClass: "emfe-drop-hr",
        class: [_vm.className + "-drag"],
        style: {
          width: item.style.width
        }
      }) : _vm._e(), _vm._v(" "), _c('span', {
        key: index,
        ref: "hits",
        refInFor: true,
        class: [_vm.className + "-drag"],
        style: item.style,
        attrs: {
          "index": index
        },
        on: {
          "mousedown": function mousedown($event) {
            $event.stopPropagation();
            _vm.down($event, index, item);
          }
        }
      }, [_vm._v(_vm._s(item.title))])];
    }), _vm._v(" "), _vm.lastHrStatus ? _c('div', {
      staticClass: "emfe-drop-hr"
    }) : _vm._e()], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTable = __webpack_require__(320);

var _EmfeTable2 = _interopRequireDefault(_EmfeTable);

var _EmfeTableHead = __webpack_require__(323);

var _EmfeTableHead2 = _interopRequireDefault(_EmfeTableHead);

var _EmfeTableBody = __webpack_require__(326);

var _EmfeTableBody2 = _interopRequireDefault(_EmfeTableBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTable2.default.install = function (Vue) {
  Vue.component(_EmfeTable2.default.name, _EmfeTable2.default);
};

_EmfeTableHead2.default.install = function (Vue) {
  Vue.component(_EmfeTableHead2.default.name, _EmfeTableHead2.default);
};

_EmfeTableBody2.default.install = function (Vue) {
  Vue.component(_EmfeTableBody2.default.name, _EmfeTableBody2.default);
};

exports.default = {
  EmfeTable: _EmfeTable2.default,
  EmfeTableHead: _EmfeTableHead2.default,
  EmfeTableBody: _EmfeTableBody2.default
};

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(321),
  /* template */
  __webpack_require__(322),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeTable',
  data: function data() {
    return {
      newObject: {}
    };
  },

  props: {
    hover: {
      type: [String, Boolean],
      default: false
    },
    border: {
      type: [String, Boolean],
      default: false
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    nothingStatus: Boolean,
    nothingText: {
      type: String,
      default: '暂无数据'
    },
    classAddName: {
      type: String,
      default: ''
    },
    className: String,
    flex: String,
    flexColumns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    flexData: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    boxName: function boxName() {
      return this.classAddName || this.className ? (this.classAddName || this.className) + '-box' : '';
    },
    tableName: function tableName() {
      return this.classAddName || this.className ? (this.classAddName || this.className) + '-table' : '';
    },
    tbodyName: function tbodyName() {
      return this.classAddName || this.className ? (this.classAddName || this.className) + '-table-tbody' : '';
    },
    flexName: function flexName() {
      return this.flex ? 'emfe-table-fixbox-' + this.flex : '';
    },
    flexItemName: function flexItemName() {
      return this.flex ? 'emfe-table-fixbox-' + this.flex + '-item-name' : '';
    },
    flexTableName: function flexTableName() {
      return this.flex ? 'emfe-table-tablebox-' + this.flex : '';
    }
  }
};

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-table-box",
      class: [_vm.boxName, {
        'emfe-table-box-flex': _vm.flex
      }]
    }, [_c('div', {
      class: [_vm.flexTableName, {
        'emfe-table-tablebox': _vm.flex
      }]
    }, [_vm.columns.length ? _c('table', {
      staticClass: "emfe-table",
      class: [_vm.tableName]
    }, [_vm._t("head"), _vm._v(" "), _c('tbody', {
      class: _vm.tbodyName
    }, [!_vm.data.length ? _c('tr', [_c('td', {
      staticClass: "emfe-table-tr-td emfe-table-nothing-td",
      attrs: {
        "colspan": _vm.columns.length
      }
    }, [_c('div', {
      staticClass: "emfe-table-nothing"
    }, [_vm._v(_vm._s(_vm.nothingText))])])]) : _vm._e(), _vm._v(" "), _vm._t("body", null, {
      else: ""
    })], 2)], 2) : _vm._e()]), _vm._v(" "), _vm.flex ? _c('div', {
      staticClass: "emfe-table-fixbox",
      class: _vm.flexName
    }, _vm._l(_vm.flexColumns, function (flexItem, flexIndex) {
      return _c('div', {
        staticClass: "emfe-table-fixbox-item"
      }, [_c('div', {
        staticClass: "emfe-table-fixbox-item-title"
      }, [_c('div', {
        staticClass: "emfe-table-fixbox-item-title-name",
        class: _vm.flexItemName
      }, [_vm._v("\n          " + _vm._s(flexItem.title) + "\n        ")])]), _vm._v(" "), _c('div', {
        staticClass: "emfe-table-fixbox-item-main"
      }, _vm._l(flexItem.opation, function (opationItem, opationIndex) {
        return _c('div', {
          staticClass: "emfe-table-fixbox-item-main-name",
          class: _vm.flexItemName
        }, [_vm._v("\n          " + _vm._s(opationItem.name) + "\n        ")]);
      }))]);
    })) : _vm._e()]);
  }, staticRenderFns: [] };

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(324),
  /* template */
  __webpack_require__(325),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeTableHead',
  data: function data() {
    return {
      tableName: this.$parent.tableName,
      border: this.$parent.border
    };
  },

  props: {
    checked: {
      type: Number,
      default: -1
    }
  },
  computed: {
    classHead: function classHead() {
      return [(0, _defineProperty3.default)({}, this.$parent.tableName + '-thead', !!this.tableName)];
    },
    classTr: function classTr() {
      return [(0, _defineProperty3.default)({}, this.$parent.tableName + '-thead-tr', !!this.tableName)];
    },
    classTh: function classTh() {
      var _ref3;

      return [(_ref3 = {}, (0, _defineProperty3.default)(_ref3, this.$parent.tableName + '-thead-tr-th', !!this.tableName), (0, _defineProperty3.default)(_ref3, 'emfe-table-border', !!this.border), _ref3)];
    }
  },
  methods: {
    jump: function jump(index) {
      this.$emit('thJump', index);
      this.$emit('click', index);
    }
  }
};

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('thead', {
      staticClass: "emfe-table-head",
      class: _vm.classHead
    }, [_c('tr', {
      staticClass: "emfe-table-head-tr",
      class: _vm.classTr
    }, [_vm._l(this.$parent.columns, function (item, index) {
      return _c('th', {
        key: index,
        staticClass: "emfe-table-head-tr-th",
        class: [_vm.classTh, {
          'emfe-table-head-tr-th-checked': _vm.checked === index
        }],
        on: {
          "click": function click($event) {
            _vm.jump(index);
          }
        }
      }, [_c('div', {
        staticClass: "emfe-table-head-tr-th-div"
      }, [_vm._v(_vm._s(item.title))])]);
    })], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(327),
  /* template */
  __webpack_require__(328),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeTableBody',
  data: function data() {
    return {
      tableName: this.$parent.tableName,
      column: this.$parent.columns,
      data: this.$parent.data,
      border: this.$parent.border,
      current: 0,
      columnCopy: []
    };
  },

  props: {
    dataList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    ind: {
      type: Number,
      default: 0
    },
    checked: {
      type: Number,
      default: -1
    }
  },
  computed: {
    dataSlice: function dataSlice() {
      if (this.$parent.columns[0].type === 'selection') {
        return this.column.slice(1, this.column.length);
      }
      return this.column;
    },
    unHover: function unHover() {
      return [{
        'emfe-table-tr-hover': !!this.$parent.hover
      }];
    },
    classTr: function classTr() {
      return [(0, _defineProperty3.default)({}, this.$parent.tableName + '-tbody-tr', !!this.tableName), 'emfe-table-border-bottom'];
    },
    classTd: function classTd() {
      var _ref2;

      return [(_ref2 = {}, (0, _defineProperty3.default)(_ref2, this.$parent.tableName + '-tbody-tr-td', !!this.tableName), (0, _defineProperty3.default)(_ref2, 'emfe-table-border', !!this.border), _ref2)];
    },
    divName: function divName() {
      return [(0, _defineProperty3.default)({}, this.$parent.tableName + '-tr-td-div', !!this.tableName)];
    },
    requiredName: function requiredName() {
      return [(0, _defineProperty3.default)({}, this.$parent.tableName + '-table-tr-td-div-required', !!this.tableName)];
    },
    rowSpan: function rowSpan() {
      for (var o = 0; o < this.column.length; o++) {
        for (var i = 0; i < this.data.length; i++) {
          if (this.data[i][this.column[o].key].row) {
            this.current++;
            this.$parent.newObject[this.column[o].key] = this.current;
          }
        }
      }
      var arrList = (0, _keys2.default)(this.$parent.newObject);
      for (var j = arrList.length; j > 0; j--) {
        var li = this.$parent.newObject[arrList[j]] - this.$parent.newObject[arrList[j - 1]];
        this.$parent.newObject[arrList[j]] = li;
      }
      return this.$parent.newObject;
    }
  },
  methods: {
    jump: function jump(i) {
      this.$emit('jump', i);
      this.$emit('click', i);
    }
  }
};

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('tr', {
      staticClass: "emfe-table-tr",
      class: [_vm.classTr, _vm.unHover, {
        'emfe-table-tr-disabled': _vm.dataList.disabled
      }],
      on: {
        "click": function click($event) {
          _vm.jump(_vm.ind);
        }
      }
    }, [_vm._l(_vm.dataSlice, function (list, index) {
      return !_vm.dataList[list.key].hebing ? _c('td', {
        key: index,
        staticClass: "emfe-table-tr-td",
        class: [_vm.classTd, {
          'emfe-table-tr-td-checked': _vm.checked === index
        }],
        attrs: {
          "rowspan": _vm.dataList[list.key].row ? _vm.rowSpan[list.key] : ''
        }
      }, [_vm.dataList[list.key].slot === 'a' ? _vm._t("a") : _vm._e(), _vm._v(" "), _vm.dataList[list.key].slot === 'b' ? _vm._t("b") : _vm._e(), _vm._v(" "), _vm.dataList[list.key].slot === 'c' ? _vm._t("c") : _vm._e(), _vm._v(" "), _vm.dataList[list.key].slot === 'd' ? _vm._t("d") : _vm._e(), _vm._v(" "), _vm.dataList[list.key].slot === 'e' ? _vm._t("e") : _vm._e(), _vm._v(" "), _vm.dataList[list.key].slot === 'f' ? _vm._t("f") : _vm._e(), _vm._v(" "), _vm.dataList[list.key].slot === 'g' ? _vm._t("g") : _vm._e(), _vm._v(" "), _vm.dataList[list.key].slot === 'h' ? _vm._t("h") : _vm._e(), _vm._v(" "), _vm.dataList[list.key].slot === 'i' ? _vm._t("i") : _vm._e(), _vm._v(" "), !_vm.dataList[list.key].slot ? _c('div', [_vm.dataList[list.key].required ? _c('div', {
        staticClass: "emfe-table-tr-td-div",
        class: _vm.divName
      }, [_vm.dataList[list.key].required ? _c('span', {
        staticClass: "emfe-table-tr-td-div-required",
        class: _vm.requiredName
      }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _c('span', {
        domProps: {
          "innerHTML": _vm._s(_vm.dataList[list.key].text)
        }
      })]) : _c('div', {
        staticClass: "emfe-table-tr-td-div",
        class: _vm.divName,
        style: {
          'color': _vm.dataList[list.key].color
        },
        domProps: {
          "innerHTML": _vm._s(_vm.dataList[list.key].text)
        }
      })]) : _vm._e()], 2) : _vm._e();
    })], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTextarea = __webpack_require__(330);

var _EmfeTextarea2 = _interopRequireDefault(_EmfeTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTextarea2.default.install = function (Vue) {
  Vue.component(_EmfeTextarea2.default.name, _EmfeTextarea2.default);
};

exports.default = _EmfeTextarea2.default;

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(331),
  /* template */
  __webpack_require__(332),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeTextarea',
  props: {
    className: {
      type: String,
      default: ''
    },
    change: {
      type: Function,
      default: function _default() {}
    },
    blur: {
      type: Function,
      default: function _default() {}
    },
    focus: {
      type: Function,
      default: function _default() {}
    },
    value: String
  },
  computed: {
    textereaName: function textereaName() {
      return (0, _defineProperty3.default)({}, this.className + '-textarea', !!this.className);
    }
  },
  methods: {
    changeFn: function changeFn(val) {
      this.$emit('input', val.target.value.trim());
      this.$emit('change', val.target.value.trim());
      this.change(val.target.value.trim());
    },
    blurFn: function blurFn(val) {
      this.$emit('blur', val.target.value.trim());
      this.blur();
    },
    focusFn: function focusFn(val) {
      this.$emit('focus', val.target.value.trim());
      this.focus();
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.$refs.textarea.value = val;
      }
    }
  }
};

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('textarea', {
      ref: "textarea",
      staticClass: "emfe-textarea",
      class: _vm.textereaName,
      on: {
        "input": _vm.changeFn,
        "blur": _vm.blurFn,
        "focus": _vm.focusFn
      }
    }, [_vm._v(_vm._s(_vm.value))]);
  }, staticRenderFns: [] };

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeDatapanel = __webpack_require__(334);

var _EmfeDatapanel2 = _interopRequireDefault(_EmfeDatapanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeDatapanel2.default.install = function (Vue) {
  Vue.component(_EmfeDatapanel2.default.name, _EmfeDatapanel2.default);
};

exports.default = _EmfeDatapanel2.default;

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(335),
  /* template */
  __webpack_require__(336),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeDatapanel',
  props: {
    className: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    contentText: {
      type: [String, Number],
      default: ''
    },
    companyText: {
      type: String,
      default: ''
    },
    iconFlg: {
      type: [String, Boolean]
    },
    icon: String,
    theme: {
      type: String,
      default: 'dark'
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    type: {
      type: String,
      default: 'set'
    },
    linkText: {
      type: String,
      default: ''
    }
  },
  computed: {
    datapanelName: function datapanelName() {
      return [(0, _defineProperty3.default)({}, this.className + '-datapanel', !!this.className)];
    },
    tipName: function tipName() {
      return [(0, _defineProperty3.default)({}, this.className + '-tip', !!this.className)];
    }
  },
  methods: {
    link: function link() {
      this.$emit('link');
    }
  }
};

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-datapanel",
      class: _vm.datapanelName
    }, [_c('div', {
      staticClass: "emfe-datapanel-box"
    }, [_c('div', {
      staticClass: "emfe-datapanel-title"
    }, [_c('span', {
      staticClass: "emfe-datapanel-title-text"
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _vm.icon || _vm.iconFlg ? _c('emfe-tooltip', {
      attrs: {
        "className": "emfe-datapanel",
        "styles": _vm.styles,
        "theme": _vm.theme,
        "placement": _vm.placement,
        "type": _vm.icon || _vm.type
      }
    }, [_vm.icon || _vm.iconFlg ? _c('emfe-icon', {
      attrs: {
        "type": _vm.icon || _vm.type,
        "className": "emfe-datapanel-mark"
      },
      slot: "render"
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "emfe-datapanel-tip",
      class: _vm.tipName,
      slot: "tip"
    }, [_vm._t("tipText")], 2)], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "emfe-datapanel-main"
    }, [_c('span', {
      staticClass: "emfe-datapanel-main-content"
    }, [_vm._v(_vm._s(_vm.contentText))]), _vm._v(" "), _vm.companyText ? _c('span', {
      staticClass: "emfe-datapanel-main-company"
    }, [_vm._v(_vm._s(_vm.companyText))]) : _vm._e(), _vm._v(" "), _vm.linkText ? _c('span', {
      staticClass: "emfe-datapanel-main-link",
      on: {
        "click": _vm.link
      }
    }, [_vm._v(_vm._s(_vm.linkText))]) : _vm._e()])])]);
  }, staticRenderFns: [] };

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTag = __webpack_require__(338);

var _EmfeTag2 = _interopRequireDefault(_EmfeTag);

var _EmfeTagParent = __webpack_require__(341);

var _EmfeTagParent2 = _interopRequireDefault(_EmfeTagParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTag2.default.install = function (Vue) {
  Vue.component(_EmfeTag2.default.name, _EmfeTag2.default);
};

_EmfeTagParent2.default.install = function (Vue) {
  Vue.component(_EmfeTagParent2.default.name, _EmfeTagParent2.default);
};

exports.default = {
  EmfeTag: _EmfeTag2.default,
  EmfeTagParent: _EmfeTagParent2.default
};

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(339),
  /* template */
  __webpack_require__(340),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'emfe-tag';
exports.default = {
  name: 'EmfeTag',
  props: {
    disable: {
      type: [String, Boolean],
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    active: {
      type: [Boolean, String],
      default: false
    },
    index: {
      type: [String, Number],
      required: true
    },
    click: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      activeOk: this.active,
      className: this.$parent.className,
      addName: this.$parent.addClass,
      skin: this.$parent.skin
    };
  },

  computed: {
    classList: function classList() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.className + '-disable', this.disable), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.className, !this.disable), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.className + '-active', this.activeOk && !this.skin), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.className + '-' + this.skin, !!this.skin), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.className + '-' + this.skin + '-active', this.activeOk && !!this.skin), (0, _defineProperty3.default)(_ref, this.addName + '-tag', !!this.addName), _ref)];
    }
  },
  methods: {
    activeClass: function activeClass() {
      if (this.disable) {
        return;
      }
      this.$parent.getIndex(this.index);
      this.$emit('tag', this.index, this.activeOk);
      this.$emit('click', this.index, this.activeOk);
      this.click(this.index, this.activeOk);
    }
  },
  watch: {
    active: function active(val, oldVal) {
      if (val !== oldVal) {
        this.activeOk = this.active;
      }
    }
  }
};

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-tag",
      class: _vm.classList,
      on: {
        "click": _vm.activeClass
      }
    }, [_vm.type ? _c('emfe-icon', {
      attrs: {
        "type": _vm.type,
        "className": "icon-page"
      }
    }) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), !!_vm.skin ? _c('span') : _vm._e()], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(342),
  /* template */
  __webpack_require__(343),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeTagParent',
  props: {
    className: {
      type: String,
      required: true
    },
    addClass: {
      type: String,
      default: ''
    },
    skin: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      childrens: []
    };
  },

  computed: {
    classNames: function classNames() {
      return [(0, _defineProperty3.default)({}, '' + this.addClass, !!this.addClass)];
    }
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
    }
  }
};

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-tag-parent",
      class: _vm.classNames
    }, [_vm._t("default")], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfePanel = __webpack_require__(345);

var _EmfePanel2 = _interopRequireDefault(_EmfePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfePanel2.default.install = function (Vue) {
  Vue.component(_EmfePanel2.default.name, _EmfePanel2.default);
};

exports.default = _EmfePanel2.default;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(346),
  /* template */
  __webpack_require__(347),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'panel',
  props: {
    className: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    type: {
      type: String,
      default: ''
    },
    switchOk: {
      type: [String, Boolean],
      default: false
    },
    switchType: {
      type: Boolean,
      default: false
    },
    switchState: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle: function toggle(index, item, status) {
      this.$emit('switch-toogle', status, index, item);
      this.$emit('change', status, index, item);
    },
    iconClick: function iconClick(index, item) {
      this.$emit('icon-click', index, item);
      this.$emit('click', index, item);
    }
  },
  computed: {
    classList: function classList() {
      return [(0, _defineProperty3.default)({}, this.className + '-panel', !!this.className)];
    },
    boxName: function boxName() {
      return [(0, _defineProperty3.default)({}, this.className + '-panel-box', !!this.className)];
    },
    leftName: function leftName() {
      return [(0, _defineProperty3.default)({}, this.className + '-panel-box-left', !!this.className)];
    },
    rightName: function rightName() {
      return [(0, _defineProperty3.default)({}, this.className + '-panel-box-right', !!this.className)];
    }
  }
};

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-panel",
      class: _vm.classList
    }, _vm._l(_vm.data, function (item, index) {
      return _c('div', {
        staticClass: "emfe-panel-box",
        class: _vm.boxName
      }, [_c('div', {
        staticClass: "emfe-panel-box-left",
        class: _vm.leftName
      }, [_vm._v(_vm._s(item.text))]), _vm._v(" "), _c('div', {
        staticClass: "emfe-panel-box-right",
        class: _vm.rightName
      }, [_c('span', {
        staticClass: "emfe-panel-box-right-text"
      }, [_vm._v(_vm._s(item.cont))]), _vm._v(" "), !!item.type || !!_vm.type ? _c('emfe-icon', {
        attrs: {
          "type": item.type || _vm.type,
          "className": "emfe-panel-box"
        },
        on: {
          "icon-click": function iconClick($event) {
            _vm.iconClick(index, item);
          }
        }
      }) : _vm._e(), _vm._v(" "), item.switchOk || _vm.switchOk ? _c('emfe-switch', {
        staticClass: "emfe-panel-box-switch",
        attrs: {
          "value": item.switchState || item.switchType || _vm.switchState || _vm.switchType,
          "change": _vm.toggle.bind(this, index, item)
        }
      }, [_c('span', {
        slot: "open"
      }, [_vm._v("ON")]), _vm._v(" "), _c('span', {
        slot: "close"
      }, [_vm._v("OFF")])]) : _vm._e()], 1)]);
    }));
  }, staticRenderFns: [] };

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfePanelC = __webpack_require__(349);

var _EmfePanelC2 = _interopRequireDefault(_EmfePanelC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfePanelC2.default.install = function (Vue) {
  Vue.component(_EmfePanelC2.default.name, _EmfePanelC2.default);
};

exports.default = _EmfePanelC2.default;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(350),
  /* template */
  __webpack_require__(351),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfePanelC',
  data: function data() {
    return {
      logo: '',
      isguoqi: ''
    };
  },

  props: {
    headImg: {
      type: String,
      required: true
    },
    memberlogo: {
      type: String,
      required: true
    },
    memberlogoNoVip: {
      type: String,
      required: true
    },
    nickName: {
      type: String,
      required: true
    },
    levelName: {
      type: String,
      required: true
    },
    code: {
      type: Number,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    isMember: {
      type: Number,
      required: true
    },
    openMember: {
      type: Number,
      requireed: true
    },
    isVip: {
      type: Number,
      required: true
    },
    openVip: {
      type: Number,
      required: true
    },
    memberDeadline: {
      type: String,
      required: true
    },
    growth: {
      type: Number,
      required: true
    },
    integral: {
      type: Number,
      required: true
    },
    couponNum: {
      type: Number,
      required: true
    },
    balance: {
      type: Number,
      required: true
    },
    pendingPaymentNum: {
      type: Number,
      required: true
    },
    pendingReceiveNum: {
      type: Number,
      required: true
    },
    pendingAuditNum: {
      type: Number,
      required: true
    },
    pendingShipmentNum: {
      type: Number,
      required: true
    },
    telRouters: {
      type: Object,
      required: true
    },
    infoRouters: {
      type: Object,
      required: true
    },
    walletRouters: {
      type: Object,
      required: true
    },
    uploadAction: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle: function toggle(status) {
      this.$emit('switch-toogle', status);
    },
    iconClick: function iconClick(index) {
      this.$emit('icon-click', index);
    },
    uploadSuccess: function uploadSuccess(res) {
      this.$emit('uploadSuccess', res);
    },
    pendingPays: function pendingPays() {
      this.$emit('pendingPay');
    },
    pendingAudits: function pendingAudits() {
      this.$emit('pendingAudit');
    },
    pendingShipments: function pendingShipments() {
      this.$emit('pendingShipment');
    },
    pendingDelivered: function pendingDelivered() {
      this.$emit('pendingDelivered');
    },
    renews: function renews() {
      this.$emit('renew');
    },
    freeLevels: function freeLevels() {
      this.$emit('freeLevel');
    },
    couponClick: function couponClick() {
      this.$emit('couponClick');
    },
    integalClick: function integalClick() {
      this.$emit('integalClick');
    },
    balanceClick: function balanceClick() {
      this.$emit('balanceClick');
    },
    growthClick: function growthClick() {
      this.$emit('growthClick');
    }
  },
  computed: {
    classList: function classList() {
      return [(0, _defineProperty3.default)({}, this.className + '-panel-c-main', !!this.className)];
    },
    boxName: function boxName() {
      return [(0, _defineProperty3.default)({}, this.className + '-panel-c-main-box', !!this.className)];
    },
    leftName: function leftName() {
      return [(0, _defineProperty3.default)({}, this.className + '-panel-c-main-box-left', !!this.className)];
    },
    rightName: function rightName() {
      return [(0, _defineProperty3.default)({}, this.className + '-panel-c-main-box-right', !!this.className)];
    },
    showPhone: function showPhone() {
      return this.phone.toString().replace(/^(\d{3})\d{4}(\d+)/, '$1****$2');
    },
    memberDeadlines: function memberDeadlines() {
      return this.memberDeadline.slice(0, 10);
    },
    timeJudge: function timeJudge() {
      var myDate = new Date();
      var endTime = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate() + ' ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();
      if (this.memberDeadline === '') {
        return '';
      } else if (this.memberDeadline !== '' && new Date(endTime).getTime() > new Date(this.memberDeadline).getTime()) {
        return 1;
      }
      return 2;
    },
    showNickName: function showNickName() {
      if (this.nickName.length > 5) {
        return this.nickName.substring(5, 0) + '...';
      }
      return this.nickName;
    },
    greeting: function greeting() {
      var myDate = new Date();
      var myhours = myDate.getHours();
      if (myhours >= 0 && myhours < 12) {
        return '早上好';
      } else if (myhours >= 12 && myhours < 13) {
        return '中午好';
      } else if (myhours >= 13 && myhours < 18) {
        return '下午好';
      }
      return '晚上好';
    },
    couponNums: function couponNums() {
      var a = this.couponNum.toString().indexOf('.');
      if (a !== -1) {
        if (this.couponNum.toString().split('.')[0].length >= 5) {
          return (Math.round(this.couponNum) * 0.001).toFixed(1) + 'k';
        }
        return this.couponNum;
      }
      if (this.couponNum.toString().length >= 5) {
        return this.couponNum * 0.001 + 'k';
      }
      return this.couponNum;
    },
    integrals: function integrals() {
      var a = this.integral.toString().indexOf('.');
      if (a !== -1) {
        if (this.integral.toString().split('.')[0].length >= 5) {
          return (Math.round(this.integral) * 0.001).toFixed(1) + 'k';
        }
        return this.integral;
      }
      if (this.integral.toString().length >= 5) {
        return this.integral * 0.001 + 'k';
      }
      return this.integral;
    },
    balances: function balances() {
      var a = this.balance.toString().indexOf('.');
      if (a !== -1) {
        if (this.balance.toString().split('.')[0].length >= 5) {
          return (Math.round(this.balance) * 0.001).toFixed(1) + 'k';
        }
        return this.balance;
      }
      if (this.balance.toString().length >= 5) {
        return this.balance * 0.001 + 'k';
      }
      return this.balance;
    },
    growths: function growths() {
      var a = this.growth.toString().indexOf('.');
      if (a !== -1) {
        if (this.growth.toString().split('.')[0].length >= 5) {
          return (Math.round(this.growth) * 0.001).toFixed(1) + 'k';
        }
        return this.growth;
      }
      if (this.growth.toString().length >= 5) {
        return this.growth * 0.001 + 'k';
      }
      return this.growth;
    }
  }
};

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-panel-c"
    }, [_c('div', {
      staticClass: "emfe-panel-c-main"
    }, [_c('div', {
      staticClass: "emfe-panel-c-main-logobox"
    }, [_c('emfe-upload', {
      attrs: {
        "className": "emfe-panel-c-main",
        "action": _vm.uploadAction,
        "url": _vm.headImg
      },
      on: {
        "success": _vm.uploadSuccess
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "emfe-panel-c-main-infobox"
    }, [_c('div', {
      staticClass: "emfe-panel-c-main-infobox-about"
    }, [_c('span', {
      staticClass: "emfe-panel-c-main-infobox-about-texts"
    }, [_c('i', {
      staticClass: "emfe-panel-c-main-infobox-about-texts-i"
    }, [_vm._v(_vm._s(_vm.greeting) + "\n      ")]), _vm._v("，" + _vm._s(_vm.showNickName))]), _vm._v(" "), _c('span', {
      staticClass: "emfe-panel-c-main-infobox-about-father"
    }, [_vm.openMember === 1 || _vm.openVip === 1 ? _c('div', {
      staticClass: "emfe-panel-c-main-infobox-member"
    }, [_c('span', {
      staticClass: "emfe-panel-c-main-infobox-about-text"
    }, [_vm.isVip === 2 && _vm.openVip === 1 ? _c('img', {
      staticClass: "emfe-panel-c-main-infobox-about-novip",
      attrs: {
        "src": _vm.memberlogoNoVip
      },
      on: {
        "click": _vm.renews
      }
    }) : _vm._e(), _vm._v(" "), !(_vm.openMember === 2 && _vm.openVip === 1 && _vm.isVip === 2) ? _c('img', {
      staticClass: "emfe-panel-c-main-infobox-about-img",
      attrs: {
        "src": _vm.memberlogo
      },
      on: {
        "click": _vm.freeLevels
      }
    }) : _vm._e()]), _vm._v(" "), _vm.isVip === 2 && _vm.openVip === 1 && _vm.timeJudge === '' ? _c('a', {
      staticClass: "emfe-panel-c-main-infobox-youhui"
    }, [_vm._v("开通会员享优惠 !"), _c('i', {
      staticClass: "emfe-panel-c-main-infobox-youhui-i"
    })]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.openMember === 1 || _vm.openVip === 1 ? [_vm.isVip === 2 && _vm.openVip === 1 && _vm.timeJudge === 1 ? _c('span', {
      staticClass: "emfe-panel-c-main-infobox-about-overdue"
    }, [_vm._v(_vm._s(_vm.memberDeadlines) + "到期啦 !"), _c('i', {
      staticClass: "emfe-panel-c-main-infobox-about-overdue-i"
    })]) : _vm._e(), _vm._v(" "), _vm.openVip === 1 && _vm.isVip === 1 || _vm.timeJudge === 1 ? _c('emfe-link', {
      staticClass: "emfe-panel-c-main-infobox-about-link",
      attrs: {
        "routers": {}
      },
      on: {
        "click": _vm.renews
      }
    }, [_vm._v("续费")]) : _vm._e()] : _vm._e()], 2)]), _vm._v(" "), _c('div', {
      staticClass: "emfe-panel-c-main-infobox-info"
    }, [_c('span', {
      staticClass: "emfe-panel-c-main-infobox-info-text"
    }, [_vm._v("账号 : (+" + _vm._s(_vm.code) + ")" + _vm._s(_vm.showPhone))])])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-panel-c-main-orderbox"
    }, [_c('div', {
      staticClass: "emfe-panel-c-main-orderbox-item",
      on: {
        "click": _vm.pendingPays
      }
    }, [_c('img', {
      staticClass: "emfe-panel-c-main-orderbox-img",
      attrs: {
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNTIgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7mlK/ku5goMSk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MTIuMDAwMDAwLCAtMzI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5pSv5LuYKDEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MDguMDAwMDAwLCAzMjYuNTAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUG9seWdvbiIgZmlsbD0iI0ZGREJDRSIgcG9pbnRzPSIzMCAwLjUgNTUuOTgwNzYyMSAxNS41IDU1Ljk4MDc2MjEgNDUuNSAzMCA2MC41IDQuMDE5MjM3ODkgNDUuNSA0LjAxOTIzNzg5IDE1LjUiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00My4yODY5MTI3LDI1LjA0MjUyODkgTDQzLjI4NjkxMjcsMjEuODUwMDQzOCBDNDMuMjg2OTEyNywxOS43MzQxOTk5IDQxLjU0MjE3MDUsMTguMDE5MDU1OSAzOS4zOTAwMjAxLDE4LjAxOTA1NTkgTDE5LjkwNTgyNSwxOC4wMTkwNTU5IEMxNy43NTM2NzQ2LDE4LjAxOTA1NTkgMTYuMDA5MDUxNSwxOS43MzQxOTk5IDE2LjAwOTA1MTUsMjEuODUwMDQzOCBMMTYuMDA5MDUxNSwzOS4wODk0NDU3IEMxNi4wMDkwNTE1LDQxLjIwNTI4OTYgMTcuNzUzNjc0Niw0Mi45MjA0MzM3IDE5LjkwNTgyNSw0Mi45MjA0MzM3IEwzOS4zODk5OTAzLDQyLjkyMDQzMzcgQzQxLjU0MjE0MDgsNDIuOTIwNDMzNyA0My4yODY4ODMsNDEuMjA1Mjg5NiA0My4yODY4ODMsMzkuMDg5NDQ1NyBMNDMuMjg2ODgzLDM1LjI1ODQ4NyBDNDQuNzIxNjQsMzUuMjU4NDg3IDQ1Ljg4NDc2MTcsMzQuMTE0OTg5NCA0NS44ODQ3NjE3LDMyLjcwNDQxNyBMNDUuODg0NzYxNywyNy41OTY0NTI2IEM0NS44ODQ3OTE1LDI2LjE4NTkzODcgNDQuNzIxNjY5OCwyNS4wNDI1Mjg5IDQzLjI4NjkxMjcsMjUuMDQyNTI4OSBaIE00MS45ODc5NTg1LDM5LjA4OTQ3NSBDNDEuOTg3OTU4NSw0MC40OTk5ODg4IDQwLjgyNDgwNjksNDEuNjQzMzk4NiAzOS4zODk5OTAzLDQxLjY0MzM5ODYgTDE5LjkwNTkxNDQsNDEuNjQzMzk4NiBDMTguNDcxMDk3OCw0MS42NDMzOTg2IDE3LjMwODAzNTYsNDAuNDk5OTg4OCAxNy4zMDgwMzU2LDM5LjA4OTQ3NSBMMTcuMzA4MDM1NiwyMS44NDk5NTYgQzE3LjMwODAzNTYsMjAuNDM5NDQyMiAxOC40NzEwOTc4LDE5LjI5NTk3MzggMTkuOTA1OTE0NCwxOS4yOTU5NzM4IEwzOS4zOTAwMjAxLDE5LjI5NTk3MzggQzQwLjgyNDgzNjcsMTkuMjk1OTczOCA0MS45ODc5ODgyLDIwLjQzOTQ3MTUgNDEuOTg3OTg4MiwyMS44NDk5NTYgTDQxLjk4Nzk4ODIsMjUuMDQyNDk5NiBMMzUuNDkzMjQ2NiwyNS4wNDI0OTk2IEMzNC4wNTg0MywyNS4wNDI0OTk2IDMyLjg5NTM2NzgsMjYuMTg1OTM4NyAzMi44OTUzNjc4LDI3LjU5NjQyMzMgTDMyLjg5NTM2NzgsMzIuNzA0NDE3IEMzMi44OTUzNjc4LDM0LjExNDk4OTQgMzQuMDU4NDMsMzUuMjU4NDg3IDM1LjQ5MzI0NjYsMzUuMjU4NDg3IEw0MS45ODc5NTg1LDM1LjI1ODQ4NyBMNDEuOTg3OTU4NSwzOS4wODk0NzUgWiBNNDQuNTg1ODY3LDMyLjcwNDQ0NjMgQzQ0LjU4NTg2NywzMy40MDk3MTc4IDQ0LjAwNDI3NjQsMzMuOTgxNTEwNSA0My4yODY5MTI3LDMzLjk4MTUxMDUgTDM1LjQ5MzI0NjYsMzMuOTgxNTEwNSBDMzQuNzc1ODUzMiwzMy45ODE1MTA1IDM0LjE5NDI5MjMsMzMuNDA5NzQ3MSAzNC4xOTQyOTIzLDMyLjcwNDQ0NjMgTDM0LjE5NDI5MjMsMjcuNTk2NDUyNiBDMzQuMTk0MjkyMywyNi44OTEyMzk2IDM0Ljc3NTgyMzQsMjYuMzE5NDQ2OCAzNS40OTMyNDY2LDI2LjMxOTQ0NjggTDQzLjI4NjkxMjcsMjYuMzE5NDQ2OCBDNDQuMDA0MjQ2NiwyNi4zMTk0NDY4IDQ0LjU4NTg2NywyNi44OTEyMTAzIDQ0LjU4NTg2NywyNy41OTY0NTI2IEw0NC41ODU4NjcsMzIuNzA0NDQ2MyBaIE0zNy40NDE2NDgzLDI4Ljg3MzUxNjkgQzM2LjcyNDI1NDksMjguODczNTE2OSAzNi4xNDI2OTQsMjkuNDQ1MjIxOCAzNi4xNDI2OTQsMzAuMTUwNTIyNiBDMzYuMTQyNjk0LDMwLjg1NTgyMzQgMzYuNzI0MjI1MSwzMS40Mjc0NDA1IDM3LjQ0MTY0ODMsMzEuNDI3NDQwNSBDMzguMTU5MDQxNywzMS40Mjc0NDA1IDM4Ljc0MDYwMjUsMzAuODU1Nzk0MSAzOC43NDA2MDI1LDMwLjE1MDUyMjYgQzM4Ljc0MDYwMjUsMjkuNDQ1MjUxMSAzOC4xNTkwNzE0LDI4Ljg3MzUxNjkgMzcuNDQxNjQ4MywyOC44NzM1MTY5IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZDNjIyNiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "emfe-panel-c-main-orderbox-text"
    }, [_vm._v("待支付 (" + _vm._s(_vm.pendingPaymentNum) + ") ")])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-panel-c-main-orderbox-item",
      on: {
        "click": _vm.pendingAudits
      }
    }, [_c('img', {
      staticClass: "emfe-panel-c-main-orderbox-img",
      attrs: {
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNTIgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lvoXlrqHmoLg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OTQuMDAwMDAwLCAtMzI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5b6F5a6h5qC4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTAuMDAwMDAwLCAzMjcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUG9seWdvbi1Db3B5IiBmaWxsPSIjQkVGRUQ2IiBwb2ludHM9IjMwIDAgNTUuOTgwNzYyMSAxNSA1NS45ODA3NjIxIDQ1IDMwIDYwIDQuMDE5MjM3ODkgNDUgNC4wMTkyMzc4OSAxNSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LjU5MTAxMzQsNDIuODI0MzA5IEMxOC41MzkxNTAzLDQyLjUzODgxNzUgMTcuNjA3NzU5Miw0MS42Mzk4Nzg1IDE3LjIyMDQzNTIsNDAuNTM2NDU3MSBDMTcuMDUxMzg1OCw0MC4wNTMwMTYxIDE3LjAyMzUzNDgsMzguNTg4OTczOCAxNy4wMjM1MzQ3LDI5Ljk3OTE1MDggQzE3LjAyMzUzNDcsMTguODAyNTE3MyAxNi45ODY2MTU5LDE5LjI4NTk1ODMgMTcuOTQxOTcxOSwxOC4xOTI5ODk3IEMxOC4yMjI0MjU1LDE3Ljg3Mjg3MzQgMTguNzI3NjMwNywxNy40NzM3MDc5IDE5LjA2NTcyOTYsMTcuMzA2NDYzNCBMMTkuNjc5MTAwNSwxNy4wMDIwMjYyIEwzOC42MTAwNDU1LDE3LjAwMjAyNjIgTDM5LjM3ODIxNjUsMTcuMzk2NjE4NiBDMzkuOTcyMTU2NCwxNy43MDIzNjI0IDQwLjI2NDI2ODYsMTcuOTYzNjgxOSA0MC42NjQ1NDY2LDE4LjU0OTAzNzUgTDQxLjE4MjcwNTgsMTkuMzA2ODYzOSBMNDEuMjI0ODA2MiwyMS4xNzUyOTgxIEM0MS4yNzI3MzU5LDIzLjMzMzE0MzUgNDEuMjAwODQxMywyMy41ODQwMTAyIDQwLjUzODI0NTMsMjMuNTg0MDEwMiBDMzkuODIxODkwMywyMy41ODQwMTAyIDM5LjY5Mjk5ODEsMjMuMjY0NTQ3MiAzOS42OTI5OTgyLDIxLjQ4ODg4MTQgQzM5LjY5Mjk5ODIsMTkuODI3NTQyOSAzOS41NTU2ODYsMTkuNDQ0MDU2NiAzOC43NDQxMTkyLDE4LjgzODQ0ODggQzM4LjM4MTQwNzgsMTguNTY3OTgzMSAzOC4zMTAxNjA5LDE4LjU2NjAyMzIgMjkuMjIyOTQ0NiwxOC41NjYwMjMyIEMyMC4yNjkxNTQyLDE4LjU2NjAyMzIgMjAuMDU4MDA0NCwxOC41NzE5MDI5IDE5LjYxNDMzMDYsMTguODI5OTU1OSBDMTkuMzQ2MTgzMiwxOC45ODYwOTQzIDE5LjA0MjQxMjQsMTkuMzI5MDc2MSAxOC44Njk0NzY4LDE5LjY3MjA1NzggTDE4LjU3ODAxMjMsMjAuMjUwODgwNSBMMTguNTc4MDEyMywzOS42OTEwODg2IEwxOC44Njk0NzY4LDQwLjI2OTkxMTIgQzE5LjM4MjQ1NDMsNDEuMjg3NzUwNSAxOS42NDU0MjAxLDQxLjM2NjE0NjQgMjIuODI1NjIyLDQxLjQ0MTI3NTcgQzI1LjgxMTUxNDIsNDEuNTExODMyIDI1LjgyNjQxMTIsNDEuNTE1NzUxOCAyNS44MzA5NDUxLDQyLjI0ODA5OTYgQzI1LjgzNDE4MzYsNDIuOTMxNDUgMjUuNTI1MjMxMiw0My4wMDU5MjYgMjIuNzI3MTcxOCw0Mi45OTY3Nzk4IEMyMS4xMjczNTUzLDQyLjk5MDkwMDIgMTkuOTc0NDUxMiw0Mi45Mjc1MzAyIDE5LjU5MTAxMzQsNDIuODIzNjU1NyBMMTkuNTkxMDEzNCw0Mi44MjQzMDkgWiBNNDEuODk1MTc0Niw0Mi45MTU3NzA4IEM0MS43ODgzMDQzLDQyLjg3Nzg3OTUgNDAuODUyMzc5Myw0MS45OTk4NDYxIDM5LjgxNDc2NTYsNDAuOTY0MzY3NyBMMzcuOTI4MDE4NSwzOS4wODI4Njc2IEwzNi44MTIwMzMyLDM5Ljc4Nzc3NjggQzM2LjE2NDMzNDIsNDAuMTk2NzQxOCAzNS4yMTczOTg0LDQwLjY1MDEzMSAzNC41NTM1MDcsNDAuODY5NjM5NCBDMzMuNTAyOTM5Miw0MS4yMTU4ODc3IDMzLjI1ODEwOSw0MS4yNDU5Mzk0IDMxLjUzMTk5MTMsNDEuMjQzMzI2MiBDMjkuNzYzNzczMiw0MS4yNDAwNTk3IDI5LjU4Njk1MTQsNDEuMjE1ODg3NyAyOC41MTg4OTU4LDQwLjgzNDM2MTMgQzI2LjkwODcxNjIsNDAuMjU5NDU4NCAyNi4wNTUwNDksMzkuNzEwNjg3NiAyNC43OTU5MjIyLDM4LjQ0MjYzNDkgQzIzLjU1MjM0MDIsMzcuMTg5NjA4IDIyLjg3NjE0MjUsMzYuMTE4ODUxNiAyMi4zNjgzNDY1LDM0LjU5ODYyNTYgQzIyLjA1MTYyMTcsMzMuNjUxMzQyNSAyMi4wMTk4ODQ1LDMzLjM3NzYxMDQgMjIuMDE5ODg0NSwzMS42MDEyOTE0IEMyMi4wMTk4ODQ1LDI5LjgyNDMxOSAyMi4wNTIyNjk0LDI5LjU1MDU4NjkgMjIuMzY4MzQ2NSwyOC42MDI2NTA1IEMyMi44NzYxNDI1LDI3LjA4NDM4NDQgMjMuNTUyMzQwMiwyNi4wMTI5NzQ2IDI0Ljc5NTkyMjIsMjQuNzU3MzM0NiBDMjYuMDM3NTYxMSwyMy41MDQ5NjExIDI3LjA5NTI1MzUsMjIuODMwMTAzNiAyOC42MTczNDYsMjIuMzE3MjY0MSBDMjkuNTU2NTA5NSwyMi4wMDE3MjA4IDI5LjgzNTAyMDEsMjEuOTY5MDU1OSAzMS41OTY3NjEyLDIxLjk2OTA1NTkgQzMzLjM1ODUwMjQsMjEuOTY5MDU1OSAzMy42MzcwMTMsMjIuMDAxNzIwOCAzNC41NzYxNzY0LDIyLjMxNzI2NDEgQzM2LjEwMjE1NTIsMjIuODMwNzU2OSAzNy4xNTY2MDkxLDIzLjUwNDMwNzggMzguMzk3NjAwMywyNC43NTk5NDc4IEM0MC4yODk1Mjg5LDI2LjY3NDExMjkgNDEuMTE1OTkyOCwyOC41MzQwNTQyIDQxLjIyMDkyLDMxLjExNDU4MzggQzQxLjMxNDE4ODcsMzMuNDIzOTk0NiA0MC44NDEzNjg0LDM1LjE5MjQ3NDEgMzkuNjUyMTkzMSwzNi45ODEyMDU4IEwzOS4wMTIyNjY2LDM3Ljk0MzUxNDcgTDQwLjk3MjIwMzYsMzkuOTMwMTk1OSBDNDIuMjUyMDU2Nyw0MS4yMjgzMDA0IDQyLjkzMTQ5Myw0Mi4wMTIyNTg3IDQyLjkzMTQ5MjksNDIuMTkxMjYyNiBDNDIuOTMxNDkyOSw0Mi4zNDE1MjEzIDQyLjc3Nzk4ODMsNDIuNTg3MTYxNiA0Mi41OTAxNTU2LDQyLjczNTQ2MDQgQzQyLjIzMTMzMDQsNDMuMDE5NjQ1MyA0Mi4yMDU0MjI0LDQzLjAyNjgzMTYgNDEuODk1MTc0Niw0Mi45MTU3NzA4IFogTTMzLjI4MDc3ODUsMzkuNTUxOTM2IEMzNS45OTc4NzU2LDM4Ljk3OTY0NjQgMzguMjI1MzEyMywzNy4wMDg2NDQzIDM5LjI0NjA4NTksMzQuMjczMjgyOSBDMzkuNTcxMjMwOCwzMy4zOTk4MjI2IDM5LjYxMTM4ODEsMzMuMTIxNTE3MyAzOS42MTkxNjA1LDMxLjY2NjYyMTIgQzM5LjYyNjkzMjksMzAuMjA3MTUyIDM5LjU5MDAxNCwyOS45MjU1ODAzIDM5LjI2NDIyMTUsMjguOTcxMTExIEMzOC42MDY4MDcsMjcuMDQzODc5OSAzNy4xOTgwNjE4LDI1LjM4MjU0MTQgMzUuNDMxMTM5LDI0LjQ0ODMyNDMgQzM0LjIwNjk4OCwyMy44MDE1NTg3IDMzLjQ5MDYzMywyMy41OTE4NDk4IDMyLjE3OTY5MDMsMjMuNDk4NDI4MSBDMzAuNjAxMjQ3OSwyMy4zODYwNjA3IDI5LjQxMjcyMDMsMjMuNjIxOTAxNSAyOC4wMjQ3MDE1LDI0LjMyMDkzMTEgQzI2LjY1Mjg3NTEsMjUuMDExNDY3OCAyNS42NjcwNzczLDI1Ljg4NDkyODEgMjQuODIyNDc3OSwyNy4xNTQ5NDA3IEMyMy44Nzk0MjgyLDI4LjU3MzkwNTQgMjMuNTY1OTQxOSwyOS42ODMyMDY1IDIzLjU2NTk0MTksMzEuNjAxMjkxNCBDMjMuNTY1OTQxOSwzMi45NzUxNzg0IDIzLjYwOTMzNzcsMzMuMjk0NjQxNSAyMy45Mjg2NTMzLDM0LjIzMDE2NTEgQzI0LjYxNTYxNTUsMzYuMjQxNDI4MiAyNi4wNjE3NTIsMzcuODk3OTgwMiAyNy45NTI4MDY5LDM4LjgzOTg0MDUgQzI5LjY5NzA2MDIsMzkuNzA2MTE0NSAzMS40NDEzMTM1LDM5LjkzOTM0MjEgMzMuMjgwNzc4NSwzOS41NTE5MzYgWiBNMzEuMTcyNTE4NCwzNy44NTAwOTMgQzMwLjgzNzY1ODEsMzcuNjE0MjUyMiAzMC43ODM4OTksMzYuOTk5NDk4MiAzMS4wNzIxMjUxLDM2LjcwOTQzMzUgQzMxLjE3NTc1NjksMzYuNjA1NTU5MSAzMS41OTY3NjEyLDM2LjQ3ODE2NTggMzIuMDA5MzQ1NSwzNi40MjY1NTUyIEMzMy4xNjQ4NDA0LDM2LjI4MDg2OTYgMzQuMDQ3MDA2NCwzNS44ODc1ODM4IDM0LjgyOTQyNjcsMzUuMTY4MzAyIEMzNS42ODk1NzA5LDM0LjM3NzE1NzQgMzYuMTUzMzIzNCwzMy40NjkwNzIyIDM2LjM4NjQ5NSwzMi4xMTg3MDM5IEMzNi41NzQzMjc3LDMxLjAzMDMwODMgMzYuNjk5OTgxMywzMC44NjMwNjM5IDM3LjI5MjYyNTgsMzAuOTE1MzI3NyBDMzcuOTI4MDE4NSwzMC45NzE1MTE0IDM4LjA5OTAxMSwzMS40NDEyMzMyIDM3LjkwNTk5NjcsMzIuNjAyMTQ0OSBDMzcuNDY4MTUyMywzNS4yMzY4OTg0IDM1LjUxOTIyNjEsMzcuMzIyMjI3NyAzMi45OTE5MDQ4LDM3Ljg2MTE5OTEgQzMxLjg2NTU1NjMsMzguMTAxNjEzIDMxLjUyNjE2MiwzOC4wOTk2NTMxIDMxLjE3MTg3MDcsMzcuODUwMDkzIEwzMS4xNzI1MTg0LDM3Ljg1MDA5MyBaIE0yNS45ODYzOTI5LDI5Ljk2NjczODEgQzI1LjYyMzAzMzgsMjkuNjI1NzE2MiAyNS42MzAxNTg1LDI5LjQ1NzE2NTEgMjYuMDQwMTUxOSwyOC42NDE4NDg0IEMyNi42Njk3MTUzLDI3LjM5MDc4MTUgMjguNDc3NDQzMSwyNS44MDU4Nzg5IDI5LjI3NzM1MTMsMjUuODAxOTU5MiBDMjkuNjY3MjY2LDI1Ljc5OTk5OTMgMzAuMDA0NzE3MiwyNi4yMzExNzY0IDI5Ljk1NDg0NDQsMjYuNjY2MjczMyBDMjkuOTIyNDU5NCwyNi45NDcxOTE3IDI5Ljc0MTEwMzcsMjcuMTQ3NzU0NCAyOS4xODA4NDQxLDI3LjUyMDEzNDYgQzI4LjQyNDk3OTQsMjguMDIyNTIxMyAyNy43MDY2ODEzLDI4LjgxMTA1MjggMjcuMzM2ODQ1MiwyOS41NDQwNTM5IEMyNi45ODE5MDYyLDMwLjI0NzY1NjUgMjYuNDYwNTA4NSwzMC40MTA5ODEyIDI1Ljk4NjM5MjksMjkuOTY2NzM4MSBaIiBpZD0iU2hhcGUiIGZpbGw9IiMxM0NFNjYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "emfe-panel-c-main-orderbox-text"
    }, [_vm._v("待审核 (" + _vm._s(_vm.pendingAuditNum) + ") ")])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-panel-c-main-orderbox-item",
      on: {
        "click": _vm.pendingDelivered
      }
    }, [_c('img', {
      staticClass: "emfe-panel-c-main-orderbox-img",
      attrs: {
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNTIgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lvoXlj5HotKc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NjkuMDAwMDAwLCAtMzI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5b6F5Y+R6LSnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OTUuNTAwMDAwLCAzNTcuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC04OTUuNTAwMDAwLCAtMzU3LjAwMDAwMCkgdHJhbnNsYXRlKDg2NS4wMDAwMDAsIDMyNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQb2x5Z29uLUNvcHktMiIgZmlsbD0iI0JCRTNGRiIgcG9pbnRzPSIzMC45ODk5MjY2IDAgNTYuOTcwNjg4NyAxNSA1Ni45NzA2ODg3IDQ1IDMwLjk4OTkyNjYgNjAgNS4wMDkxNjQ0NSA0NSA1LjAwOTE2NDQ1IDE1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1Ljk4OTkyNywgMTcuMDAwMDAwKSIgZmlsbD0iIzM3QURGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuOTY2ODg5MiwwLjAwMTkxMjAzMTgyIEw5LjY4NzY5NTEsMC4wMDE5MTIwMzE4MiBDOC4wMzYxODA0LDAuMDAxOTEyMDMxODIgNi42OTgyODQ1NiwxLjI5NjIwNDM0IDYuNjk4Mjg0NTYsMi44OTA5NTczOCBMNi42OTgyODQ1Niw3LjY2OTgxODI1IEwwLjMxMDg0ODUzLDExLjI0MDMxODQgTDAuMzE4NTUyMDE4LDExLjI1Mjk1NDIgQzAuMTQ0MjU1MTk4LDExLjM3NTk5MzYgMC4wMjQwMDY1MDMxLDExLjU2NjAxMDggMC4wMjM1OTQ1NTM1LDExLjc5MDg1NjUgTDAuMDIzNTk0NTUzNSwyMS40OTI4MTA2IEwwLjAyMzU5NDU1MzUsMjEuNDk0MzcwMSBDMC4wMjM1OTQ1NTM1LDIxLjkxMzk1MTQgMC4zMzcyMTM0NDUsMjIuMjU2Mjc4MyAwLjcyNTIzMDgyOSwyMi4yNTYyNzgzIEMxLjExMjc5NTA4LDIyLjI1NjI3ODMgMS40MjY0MTM5NywyMS45MTM5NTE0IDEuNDI2NDEzOTcsMjEuNDk0MzcwMSBMMS40MjY0MTM5NywyMS40OTI4MTA2IEwxLjQyNjQxMzk3LDEyLjE3OTY4OCBMNy43NDQzOTQ5NSw4LjY0Nzc3NTA2IEM4LjA0OTkzOTU4LDguNTQyODg5NzMgOC4yNzEzMjI0OSw4LjI2OTE4MDE3IDguMjcxMzIyNDksNy45Mzc5Njk2MiBDOC4yNzEzMjI0OSw3LjkzNjM3MDE2IDguMjcwOTUxNzMsNy45MzU1NzA0MyA4LjI3MDk1MTczLDcuOTM0NzcwNyBMOC4yNzEzMjI0OSw3LjkzNDc3MDcgTDguMjcxMzIyNDksMy4wNDMxODcwOSBDOC4yNzEzMjI0OSwyLjIwNDAyNDM4IDguOTc2MjEzMTgsMS41MjMyODkzMSA5Ljg0NDg1NDc0LDEuNTIzMjg5MzEgTDI2LjgwOTE5NDEsMS41MjMyODkzMSBDMjcuNjc4NzAwNywxLjUyMzI4OTMxIDI4LjM4MjMxNDQsMi4yMDM5ODQzNiAyOC4zODIzMTQ0LDMuMDQzMTg3MDkgTDI4LjM4MjMxNDQsMTkuMTY0NSBDMjguMzgyMzE0NCwxOS4xNjYwNTk0IDI4LjM4MjMxNDQsMTkuMTY3NjE4OSAyOC4zODIzMTQ0LDE5LjE2NzYxODkgQzI4LjM4MjMxNDQsMTkuNTg3MjgwMyAyOC43MzQ5ODYzLDE5LjkyNzk2NzcgMjkuMTY5NzE5LDE5LjkyNzk2NzcgQzI5LjYwNDQxMDYsMTkuOTI3OTY3NyAyOS45NTYyNTg2LDE5LjU4NzI4MDIgMjkuOTU2MjU4NiwxOS4xNjc2MTg5IEMyOS45NTYyNTg2LDE5LjE2NzYxODkgMjkuOTU2MjU4NiwxOS4xNjYwNTk0IDI5Ljk1NjI1ODYsMTkuMTY0NSBMMjkuOTU2MjU4NSwyLjg5MDkxNzQgQzI5Ljk1NjI1ODUsMS4yOTYxNjQzNyAyOC42MTgwMzMyLDAuMDAxOTEyMDMxODIgMjYuOTY2ODg5MiwwLjAwMTkxMjAzMTgyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjU4NDY5NjUsMTQuMzY0NDA2MSBDNS4xNjk0NDkxMiwxNC4zNjU5MjU2IDQuODMxODU0NiwxNC42OTI0OTc3IDQuODMxODU0NiwxNS4wOTMxNjUzIEM0LjgzMTg1NDYsMTUuNDkzODcyOCA1LjE2OTQ0OTA4LDE1LjgyMDQwNSA1LjU4NTQ3OTIyLDE1LjgyMDQwNSBDNS41ODc5NTA5MSwxNS44MjA0MDUgNS41OTExNjQxNCwxNS44MTg4MDU1IDUuNTkzNTk0NjUsMTUuODE4ODA1NSBMOS41NTM1MjI0MSwxNS44MTg4MDU1IEMxMS4xNDk3OTQ0LDE1LjgyNjY4MjkgMTEuMDU4ODM1NCwxNC4zNjQ0NDYxIDExLjA1ODgzNTQsMTQuMzY0NDQ2MSBMMTEuMDU4ODM1NCwxMS4zMzY1MjY2IEMxMS4wNTg4MzU0LDEwLjkzNTA1OTMgMTAuNzIxNjExNywxMC42MDkzNjY5IDEwLjMwNjM2NDMsMTAuNjA5MzY2OSBDOS44OTAzMzQyMSwxMC42MDkzNjY5IDkuNTUzMTkyODcsMTAuOTM1MDU5MyA5LjU1MzE5Mjg3LDExLjMzNjUyNjYgQzkuNTUzMTkyODcsMTEuMzM4MTI2MSA5LjU1MzUyMjQxLDExLjMzOTcyNTUgOS41NTM1MjI0MSwxMS4zNDEyODUgTDkuNTUzNTIyNDEsMTQuMzY0NDQ2MSBMNS41ODQ2OTY1LDE0LjM2NDQ0NjEgTDUuNTg0Njk2NSwxNC4zNjQ0MDYxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy4zNDc4MTA0LDE4LjI5NjkwNjYgQzIxLjM1Mjk3NSwxOC4yOTY5MDY2IDE5LjcxOTc5MjIsMTkuNzUxMjY2MSAxOS40NzgzODg0LDIxLjYxNzM2OTQgTDExLjU4MDA3OCwyMS42MTQyNTA0IEMxMS4zMzcxNSwxOS43NDk3NDY1IDkuNzA0MjU1NTUsMTguMjk2OTA2NiA3LjcxMDI4NTMyLDE4LjI5NjkwNjYgQzUuNTQ5NzYyOTgsMTguMjk2OTA2NiAzLjc5MTM4Nzk2LDE5Ljk5NTc4NTIgMy43OTEzODc5NiwyMi4wODQyOTUxIEMzLjc5MTM4Nzk2LDI0LjE3MTIwNTUgNS41NDk3NjI5OCwyNS44NzAxMjQxIDcuNzEwMjg1MzIsMjUuODcwMTI0MSBDOS41ODAzODE2NCwyNS44NzAxMjQxIDExLjE0NDYwMzgsMjQuNTk1NjI1MyAxMS41MzIxMjY4LDIyLjg5OTg2NTYgTDE5LjUyNzk0NjIsMjIuOTAyOTg0NiBDMTkuOTE3MTU4MywyNC41OTcxNDQ3IDIxLjQ3OTg1NjIsMjUuODcwMTI0MSAyMy4zNDc4NTE1LDI1Ljg3MDEyNDEgQzI1LjUwOTIzOSwyNS44NzAxMjQxIDI3LjI2NjcwNzcsMjQuMTcxMjQ1NSAyNy4yNjY3MDc3LDIyLjA4NDI5NTEgQzI3LjI2NjY2NjUsMTkuOTk1ODI1MiAyNS41MDkxOTc4LDE4LjI5NjkwNjYgMjMuMzQ3ODEwNCwxOC4yOTY5MDY2IFogTTcuNzEwMjg1MzIsMjQuMjY1ODk0MiBDNi40NjU0OTA2MiwyNC4yNjU4OTQyIDUuNDUyNjI0NzUsMjMuMjg2Mjk3OSA1LjQ1MjYyNDc0LDIyLjA4NDI5NTEgQzUuNDUyNjI0NzQsMjAuODgwNjkyOCA2LjQ2NTQ0OTQsMTkuOTAyNzM2IDcuNzEwMjg1MzIsMTkuOTAyNzM2IEM4Ljk1NTEyMTI0LDE5LjkwMjczNiA5Ljk2ODM5OTAzLDIwLjg4MDY5MjggOS45NjgzOTkwMywyMi4wODQyOTUxIEM5Ljk2ODM5OTA3LDIzLjI4NjI5NzkgOC45NTUwODAwNiwyNC4yNjU4OTQyIDcuNzEwMjg1MzIsMjQuMjY1ODk0MiBaIE0yMy4zNDc4MTA0LDI0LjI2NTg5NDIgQzIyLjEwMjkzMzMsMjQuMjY1ODk0MiAyMS4wOTA0Nzk0LDIzLjI4NjI5NzkgMjEuMDkwNDc5NCwyMi4wODQyOTUxIEMyMS4wOTA0Nzk0LDIwLjg4MDY5MjggMjIuMTAyOTMzMywxOS45MDI3MzYgMjMuMzQ3ODEwNCwxOS45MDI3MzYgQzI0LjU5MjY4NzUsMTkuOTAyNzM2IDI1LjYwNTg0MTcsMjAuODgwNjkyOCAyNS42MDU4NDE3LDIyLjA4NDI5NTEgQzI1LjYwNTg4MjksMjMuMjg2Mjk3OSAyNC41OTI2ODc1LDI0LjI2NTg5NDIgMjMuMzQ3ODEwNCwyNC4yNjU4OTQyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "emfe-panel-c-main-orderbox-text"
    }, [_vm._v("待发货 (" + _vm._s(_vm.pendingShipmentNum) + ") ")])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-panel-c-main-orderbox-item",
      on: {
        "click": _vm.pendingShipments
      }
    }, [_c('img', {
      staticClass: "emfe-panel-c-main-orderbox-img",
      attrs: {
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNTIgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lvoXmlLbotKcgKDEpPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTUwLjAwMDAwMCwgLTMyNy4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuW+heaUtui0py0oMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk0NS41MDAwMDAsIDMyNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQb2x5Z29uLUNvcHktMyIgZmlsbD0iI0NCQ0JGRSIgcG9pbnRzPSIzMC41IDAgNTYuNDgwNzYyMSAxNSA1Ni40ODA3NjIxIDQ1IDMwLjUgNjAgNC41MTkyMzc4OSA0NSA0LjUxOTIzNzg5IDE1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDMuNTI0Mjg0OCwyMy42MjcwMjc1IEw0MS43NjMwMTMzLDE5LjMwNDM3MzQgQzQxLjIzODczOSwxOC4wMTc3MDc0IDM5LjkwNjc0NTEsMTcuMDA2OTc1MyAzOC43MzMxMTc5LDE3LjAwNjk3NTMgTDIyLjgxMjIxMjIsMTcuMDA2OTc1MyBDMjEuNjM4NTU1OCwxNy4wMDY5NzUzIDIwLjMwNjU2MiwxOC4wMTc2MzU5IDE5Ljc4MjI4NzYsMTkuMzA0MzczNCBMMTguMDIxMDE2MSwyMy42MjcwMjc1IEMxNy44MzQxMTI2LDI0LjA4NTcxMyAxNy43NzIzNzQ5LDI0LjU1MjE5NjUgMTcuODA4ODExMiwyNC45ODk1MjcxIEwxNy43OTc3MDU1LDI0Ljk4OTUyNzEgTDE3Ljc5NzcwNTUsNDEuODEzNzY3MyBMMTcuNzk5Mjc5NSw0MS44MTM3NjczIEwxNy43OTkyNzk1LDQxLjk5ODM3OSBDMTcuNzk5Mjc5NSw0Mi41MzEwMDIyIDE4LjE1MDkwNDIsNDIuOTYyNDY2NCAxOC41ODQ4NzQ5LDQyLjk2MjQ2NjQgTDQyLjk0Nzc3NTQsNDIuOTYyNDY2NCBDNDMuMzgxNzQ2MSw0Mi45NjI0NjY0IDQzLjczMzM0MTYsNDIuNTMwOTY2NSA0My43MzMzNDE2LDQxLjk5ODM3OSBMNDMuNzMzMzQxNiw0MS44MTM3NjczIEw0My43NDkxNjk1LDQxLjgxMzc2NzMgTDQzLjc0OTE2OTUsMjQuOTg5NTI3MSBMNDMuNzM2NTE4OSwyNC45ODk1MjcxIEM0My43NzI5NTUyLDI0LjU1MjE5NjUgNDMuNzExMTg4NCwyNC4wODU3MTMgNDMuNTI0MzE0LDIzLjYyNzAyNzUgTDQzLjUyNDI4NDgsMjMuNjI3MDI3NSBaIE0xOS40MTk1NTcyLDI2Ljc4NzM1NCBDMTkuNDg5MjUyNSwyNi43OTUxNTIgMTkuNTU0MjU0OCwyNi44MTQ2MTExIDE5LjYyNzA2OTEsMjYuODE0NjExMSBMNDEuOTE4MjMxOSwyNi44MTQ2MTExIEM0MS45OTExMDQ0LDI2LjgxNDYxMTEgNDIuMDU2MTA2OCwyNi43OTUxNTIgNDIuMTI3MzQ3LDI2Ljc4NzM1NCBMNDIuMTI3MzQ3LDI5Ljg3MTk1NDIgTDM2LjQ0OTIwNDQsMjkuODcxOTU0MiBDMzYuMDAwOTc5OSwyOS44NzE5NTQyIDM1LjYzODI0OTQsMzAuMzE3MDgyNyAzNS42MzgyNDk0LDMwLjg2NzA5MDQgQzM1LjYzODI0OTQsMzEuNDE3MTY5NiAzNi4wMDA5NTA3LDMxLjg2MjI2MjQgMzYuNDQ5MjA0NCwzMS44NjIyNjI0IEw0Mi4xMjczMTc4LDMxLjg2MjI2MjQgTDQyLjEyNzMxNzgsMzMuODUyNjA2MyBMMzEuNTgzNTMyNiwzMy44NTI2MDYzIEMzMS4xMzUzNjY0LDMzLjg1MjYwNjMgMzAuNzcyNjA2OCwzNC4yOTc2NjMyIDMwLjc3MjYwNjgsMzQuODQ3NzQyNSBDMzAuNzcyNjA2OCwzNS4zOTc3ODU5IDMxLjEzNTMzNzIsMzUuODQyOTE0NCAzMS41ODM1MzI2LDM1Ljg0MjkxNDQgTDQyLjEyNzMxNzgsMzUuODQyOTE0NCBMNDIuMTI3MzQ3LDQxLjAzNDM2MzIgTDE5LjQxOTU1NzIsNDEuMDM0MzYzMiBMMTkuNDE5NTU3MiwyNi43ODczNTQgWiBNMTkuNDcxODUwNSwyNC41MTcyMTMgTDIxLjIzMzA5MjksMjAuMTk0NTU4OSBDMjEuNDg4MDg4NiwxOS41Njg2ODE5IDIyLjI0MDQyNDksMTguOTk3MjQ3NiAyMi44MTIyMTIyLDE4Ljk5NzI0NzYgTDM4LjczMzExNzksMTguOTk3MjQ3NiBDMzkuMzA0ODQ2OSwxOC45OTcyNDc2IDQwLjA1NzIxMjQsMTkuNTY4NjgxOSA0MC4zMTIyMDgxLDIwLjE5NDU1ODkgTDQyLjA3MzQ3OTYsMjQuNTE3MjEzIEM0Mi4xMzk5OTc2LDI0LjY4NDMzMjkgNDIuMTQ5NTAwMiwyNC43Njk4OTYgNDIuMTUyNjQ4MywyNC43Njc5NjQ0IEM0Mi4xMzgzNjUzLDI0Ljc4MTU1NzIgNDIuMDYzOTQ3OCwyNC44MjQzMDMgNDEuOTE4MjAyNywyNC44MjQzMDMgTDE5LjYyNzA2OTEsMjQuODI0MzAzIEMxOS41MDUxMDk2LDI0LjgyNDMwMyAxOS40MzM4NDAyLDI0Ljc5MzE4MjYgMTkuNDE0ODY0MiwyNC43OTMxODI2IEMxOS40MTAxMTI5LDI0Ljc5MzE4MjYgMTkuNDA4NTM4OSwyNC43OTcwODE2IDE5LjQwODUzODksMjQuNzk5MDEzMiBDMTkuNDA1MzMyNSwyNC43Nzc2NTgyIDE5LjQwNjkwNjUsMjQuNjc2NTcwNyAxOS40NzE4NTA1LDI0LjUxNzIxMyBaIiBpZD0iU2hhcGUiIGZpbGw9IiM5MjZERkMiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2Ljk0NDk2MTIsMjkuODcxOTU0MiBDMjYuNDk2NzY1OCwyOS44NzE5NTQyIDI2LjEzNDAzNTMsMzAuMzE3MDgyNyAyNi4xMzQwMzUzLDMwLjg2NzA5MDQgTDI2LjEzNDAzNTMsMzUuODQyODc4NiBMMjIuMDc5NDA2LDM1Ljg0Mjg3ODYgQzIxLjYzMTE1MjMsMzUuODQyODc4NiAyMS4yNjg0MjE4LDM2LjI4Nzk3MTQgMjEuMjY4NDIxOCwzNi44MzgwMTQ4IEMyMS4yNjg0MjE4LDM3LjM4ODA5NDEgMjEuNjMxMTUyMywzNy44MzMxODY4IDIyLjA3OTM3NjksMzcuODMzMTg2OCBMMjYuOTQ0OTkwMywzNy44MzMxODY4IEMyNy4zOTMyMTQ5LDM3LjgzMzE4NjggMjcuNzU1OTE2MiwzNy4zODgxMjk4IDI3Ljc1NTkxNjIsMzYuODM4MDUwNiBMMjcuNzU1OTE2MiwzMC44NjcxNjE5IEMyNy43NTU5MTYyLDMwLjMxNzA4MjcgMjcuMzkzMjE0OSwyOS44NzE5NTQyIDI2Ljk0NDk5MDMsMjkuODcxOTU0MiBMMjYuOTQ0OTYxMiwyOS44NzE5NTQyIFoiIGlkPSJTaGFwZSIgZmlsbD0iIzkyNkRGQyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "emfe-panel-c-main-orderbox-text"
    }, [_vm._v("待收货 (" + _vm._s(_vm.pendingReceiveNum) + ") ")])])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-panel-c-main-border"
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-panel-c-main-others",
      class: {
        'emfe-panel-c-main-othersTwo': !(_vm.openVip === 1 && _vm.isVip === 1 || _vm.openMember === 1) && !(_vm.openVip === 1 && _vm.isVip === 2 && _vm.openMember === 1 || _vm.openMember === 1 && _vm.isVip === 2)
      }
    }, [_c('span', {
      staticClass: "emfe-panel-c-main-others-text"
    }, [_c('img', {
      staticClass: "emfe-panel-c-main-others-text-img",
      attrs: {
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTUgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7kvJjmg6DliLgoMik8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MTkuMDAwMDAwLCAtNDI3LjAwMDAwMCkiIGZpbGw9IiMyM0ZFREMiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSLkvJjmg6DliLgoMikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxOS44NjMyODEsIDQyNy42NDQ4NzQpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy41MDk3MDc5LDYuNzk2MTkyIEMxMi43MTEyNTU4LDYuNDIxNDcyIDEyLjQ3MTcwMzEsNi4xMjE2OCAxMi40NzE3MDMxLDUuNTIyMTEyIEMxMi40NzE3MDMxLDQuOTYwMDggMTIuNzExMjU1OCw0LjY2MDI4OCAxMy41MDk3MDc5LDQuMjQ4MDk2IEMxMy45NDg4Mzk2LDMuOTg1NzYgMTMuOTg4NzYyMiwzLjc2MDkxMiAxMy45ODg3NjIyLDMuMzg2MTkyIEwxMy45ODg3NjIyLDEuMjUwMjcyIEMxMy45ODg3NjIyLDAuNTc1ODI0IDEzLjM4OTg4OSwwLjAxMzcxMiAxMi42NzEzNTAzLDAuMDEzNzEyIEwxLjMzMzIyNzc2LDAuMDEzNzEyIEMwLjYxNDY4OTAyNywwLjAxMzcxMiAwLjAxNTgxNTgzODMsMC41NzU4MjQgMC4wMTU4MTU4MzgzLDEuMjUwMjcyIEwwLjAxNTgxNTgzODMsMy4zODYxNzYgQzAuMDE1ODE1ODM4MywzLjcyMzQ0IDAuMDU1NzIxMzk4Myw0LjAyMzIzMiAwLjQ5NDg3MDA2OSw0LjI0ODA4IEMwLjgxNDI2Nzk2Nyw0LjM5Nzk1MiAxLjUzMjg3NDg4LDQuNzcyNjU2IDEuNTMyODc0ODgsNS41MjIwOTYgQzEuNTMyODc0ODgsNi4zNDY0NDggMS4wMTM5MTUwOSw2LjYwODc4NCAwLjUzNDc3NTYyOSw2Ljc1ODY0IEwwLjQ5NDg3MDA2OSw2Ljc1ODY0IEMwLjA1NTcyMTM5ODMsNy4wMjA5NzYgMC4wMTU4MTU4MzgzLDcuNDMzMTUyIDAuMDE1ODE1ODM4Myw3LjYyMDU0NCBMMC4wMTU4MTU4MzgzLDkuNzU2NDggQzAuMDE1ODE1ODM4MywxMC40MzA5OTIgMC42MTQ2ODkwMjcsMTAuOTkzMDI0IDEuMzMzMjI3NzYsMTAuOTkzMDI0IEwxMi42NzEzNTAzLDEwLjk5MzAyNCBDMTMuMzg5ODg5LDEwLjk5MzAyNCAxMy45ODg3NjIyLDEwLjQzMDk3NiAxMy45ODg3NjIyLDkuNzU2NDggTDEzLjk4ODc2MjIsNy42MjA1NiBDMTMuOTg4NzYyMiw3LjIwODM4NCAxMy44MjkxMDU4LDcuMDU4NDQ4IDEzLjUwOTcwNzksNi43OTYxOTIgWiBNOS4xMTgxNTMwNiw2LjA0Njc1MiBDOS4zNTc3Mzk4Myw2LjA0Njc1MiA5LjU1NzM4Njk2LDYuMjM0MDggOS41NTczODY5Niw2LjQ1ODk0NCBDOS41NTczODY5Niw2LjY4MzcyOCA5LjM1NzczOTgzLDYuODcxMTIgOS4xMTgxNTMwNiw2Ljg3MTEyIEw3LjQ0MTQzNzY4LDYuODcxMTIgTDcuNDQxNDM3NjgsOC40NDQ5MjggQzcuNDQxNDM3NjgsOC42Njk3NzYgNy4yNDE4NTg3NCw4Ljg1NzEwNCA3LjAwMjI4OTAxLDguODU3MTA0IEM2Ljc2MjczNjMyLDguODU3MTA0IDYuNTYzMTU3MzgsOC42Njk3NzYgNi41NjMxNTczOCw4LjQ0NDkyOCBMNi41NjMxNTczOCw2Ljg3MTEyIEw0Ljg4NjQyNDk2LDYuODcxMTIgQzQuNjQ2ODcyMjgsNi44NzExMiA0LjQ0NzIwODEsNi42ODM3MjggNC40NDcyMDgxLDYuNDU4OTQ0IEM0LjQ0NzIwODEsNi4yMzQwNjQgNC42NDY4NTUyMyw2LjA0Njc1MiA0Ljg4NjQyNDk2LDYuMDQ2NzUyIEw2LjU2MzE1NzM4LDYuMDQ2NzUyIEw2LjU2MzE1NzM4LDUuMDcyNDY0IEw0Ljc2NjYwNiw1LjA3MjQ2NCBDNC41MjcxMjE1LDUuMDcyNDY0IDQuMzI3NDc0MzgsNC44ODUwNzIgNC4zMjc0NzQzOCw0LjY2MDI4OCBDNC4zMjc0NzQzOCw0LjQzNTQwOCA0LjUyNzEyMTUsNC4yNDgwOTYgNC43NjY2MDYsNC4yNDgwOTYgTDYuMDg0MTAzMTUsNC4yNDgwOTYgTDQuNjg2Nzc3ODQsMi45MzY1NDQgQzQuNTI3MTM4NTUsMi43ODY3MDQgNC41MjcxMzg1NSwyLjUyNDM2OCA0LjY4Njc3Nzg0LDIuMzc0NDMyIEM0Ljg0NjQ1MTIyLDIuMjI0NTkyIDUuMTI1OTI2NTEsMi4yMjQ1OTIgNS4yODU2NTEwMiwyLjM3NDQzMiBMNy4wMDIyODkwMSwzLjk4NTc2IEw4LjcxODkyNjk5LDIuMzc0NDE2IEM4Ljg3ODY2ODU2LDIuMjI0NTc2IDkuMTU4MTYwODksMi4yMjQ1NzYgOS4zMTc4MDAxOCwyLjM3NDQxNiBDOS40Nzc0NzM1NiwyLjUyNDM1MiA5LjQ3NzQ3MzU2LDIuNzg2Njg4IDkuMzE3ODAwMTgsMi45MzY1MjggTDcuOTIwNDkxOTEsNC4yNDgwOCBMOS4xOTgwNjY0NSw0LjI0ODA4IEM5LjQzNzU2OCw0LjI0ODA4IDkuNjM3MjE1MTIsNC40MzU0MDggOS42MzcyMTUxMiw0LjY2MDI3MiBDOS42MzcyMTUxMiw0Ljg4NTA1NiA5LjQzNzU2OCw1LjA3MjQ0OCA5LjE5ODA2NjQ1LDUuMDcyNDQ4IEw3LjQwMTUxNTA3LDUuMDcyNDQ4IEw3LjQwMTUxNTA3LDYuMDQ2NzM2IEw5LjExODE1MzA2LDYuMDQ2NzM2IEw5LjExODE1MzA2LDYuMDQ2NzUyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
      },
      on: {
        "click": _vm.couponClick
      }
    }), _vm._v("\n      优惠券"), _c('em', {
      staticClass: "emfe-panel-c-main-others-text-em"
    }, [_vm._v(": " + _vm._s(_vm.couponNums) + "张")])]), _vm._v(" "), _vm.openVip === 1 && _vm.isVip === 1 || _vm.openMember === 1 ? _c('span', {
      staticClass: "emfe-panel-c-main-others-text"
    }, [_c('img', {
      staticClass: "emfe-panel-c-main-others-text-img",
      attrs: {
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMTUgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7np6/liIYoMSk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NTMuMDAwMDAwLCAtNDI2LjAwMDAwMCkiIGZpbGw9IiNGRkE5NkEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSLnp6/liIYoMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1My44NzUwMDAsIDQyNi4xNDQ4NzQpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjAwMjY1NDYyLDAuMDE0MTA1MTA4OCBDMy4xNDE3MjM0MywwLjAxNDEwNTEwODggMC4wMTE5MTI0MDQxLDMuMTQ0MDIwMTMgMC4wMTE5MTI0MTg3LDcuMDA0ODQ3MzIgQzAuMDExOTEyNDMzMiwxMC44NjU2NzQ1IDMuMTQxNzIzNDUsMTMuOTk1NTg5NSA3LjAwMjY1NDYyLDEzLjk5NTU4OTUgQzEwLjg2MzQ5NjcsMTMuOTk1NTg5NSAxMy45OTM0MTE3LDEwLjg2NTY3NDUgMTMuOTkzNDExNyw3LjAwNDg0NzMyIEMxMy45OTM0MTE3LDMuMTQ0MDIwMTMgMTAuODYzNDk2NywwLjAxNDEwNTEwODggNy4wMDI2NTQ2MiwwLjAxNDEwNTEwODggWiBNMi41NjczMTIyMiwxMC4xOTU5ODEyIEMyLjUzMTY0NjM2LDEwLjIxOTY0ODggMi40ODk3ODgzLDEwLjIzMjI2MyAyLjQ0Njk4NDAxLDEwLjIzMjI0MzEgQzIuMzc2MTUzNzcsMTAuMjMyMjQzMSAyLjMwNjYwMTA5LDEwLjE5Nzg5NzUgMi4yNjQ1NzUzNSwxMC4xMzQzMTY3IEMxLjY0ODM0NjM2LDkuMjAzMDk1MTcgMS4zMjI2NzI4Niw4LjEyMTA0NzQ1IDEuMzIyNjcyODYsNy4wMDQ4MzI0NyBDMS4zMjI2NzI4Niw2LjQ5Mzg4MzIzIDEuMzk1NzMxMzksNS45NzUxNDk4IDEuNTM5OTYxODQsNS40NjMxMzA5OCBDMS41NzI3MDMsNS4zNDY5NjIyNiAxLjY5MzY2OTk5LDUuMjc5MDEzOTYgMS44MDk0MDc5LDUuMzEyMDk2NzkgQzEuOTI1NTYxNzcsNS4zNDQ3MzM5NyAxLjk5MzE5ODExLDUuNDY1Mzc0MTMgMS45NjA0NDIxLDUuNTgxNTQyODUgQzEuODI3MjA0Niw2LjA1NTA1NjY0IDEuNzU5NTgzMTEsNi41MzM4ODg2NCAxLjc1OTU4MzExLDcuMDA0ODQ3MzIgQzEuNzU5NTgzMTEsOC4wMzUwNzk2MyAyLjA2MDE4MDgxLDkuMDMzNzE0NjQgMi42Mjg5NDcsOS44OTMyNzQwMiBDMi42OTU1Mjg2MSw5Ljk5Mzc1NTUgMi42Njc4OTc2OCwxMC4xMjk0MjkzIDIuNTY3MzEyMjIsMTAuMTk1OTgxMiBaIE0xMS42NDUxNjk1LDEwLjI3MTA4OTcgQzEwLjU3OTc0NDksMTEuNzgyMzk3MiA4Ljg0NDIxMTAzLDEyLjY4NDgyOTEgNy4wMDI2NTQ2MiwxMi42ODQ4MjkxIEM2LjAwNzIxMzUsMTIuNjg0ODI5MSA1LjAyMjk1ODQ1LDEyLjQxODU2MjEgNC4xNTYzNzI1LDExLjkxNTA4NTEgQzQuMDUyMDU4MzQsMTEuODU0NTA1IDQuMDE2NjQzMjMsMTEuNzIwOTU1NiA0LjA3NzIyMzI4LDExLjYxNjQxODYgQzQuMTM3OTA3MzIsMTEuNTEyMzEyNCA0LjI3MTU3NTYyLDExLjQ3Njg5NzMgNC4zNzU4ODk3OSwxMS41Mzc0OTIyIEM1LjE3NTkwODk4LDEyLjAwMjEyMjUgNi4wODQyMjM1NiwxMi4yNDc5MDQgNy4wMDI2Mzk3NiwxMi4yNDc5MDQgQzguNzAyMzI3NzIsMTIuMjQ3OTA0IDEwLjMwNDMxMjIsMTEuNDE0ODE2OCAxMS4yODgwMTc2LDEwLjAxOTMzNjQgQzExLjM1NzM2MjMsOS45MjA3NzEyNCAxMS40OTM0NjY4LDkuODk2ODgzODcgMTEuNTkyMjQsOS45NjY2NDQ1MiBDMTEuNjkwODIsMTAuMDM2MTk3MiAxMS43MTQ3MjIyLDEwLjE3MjUyNDYgMTEuNjQ1MTY5NSwxMC4yNzEwODk3IFogTTcuNDU0MzE2MjIsNy42OTU0MjcyNyBMNi4yMDU2MjEzNiw3LjM3MDk0MjE5IEM1LjgyMjc4NDUyLDcuMjc2ODQ4NDkgNS41NDE0ODM5Miw3LjExODExOTI1IDUuMzYxNjQ1MjMsNi44OTQ1NDY0NiBDNS4xODE4MDY1NSw2LjY3MTE4MTY1IDUuMDkxODcyMzUsNi4zNzM3Nzc4NSA1LjA5MTg3MjM1LDYuMDAxOTMzOTYgQzUuMDkxODcyMzUsNS41MjY4MzA2NSA1LjI1OTAyNDU3LDUuMTM4NzY0NzUgNS41OTM0MzMwMSw0LjgzNzczNjI1IEM1Ljg4MDkxMzQ1LDQuNTc4ODM3NDkgNi4yNzkyMTQ2OSw0LjQzMTk2Mjc5IDYuNzg2NzYyMDQsNC4zOTU2ODYwNSBDNi43ODY0NTAwOCw0LjM5MTQyMjU3IDYuNzg0MjA2OTIsNC4zODc2NzkwMiA2Ljc4NDIwNjkzLDQuMzgzMzExNTYgTDYuNzg0MjA2OTMsMy45NDYzODY0NiBDNi43ODQyMDY5MywzLjgyNTY0MjMxIDYuODgyMDE0NDYsMy43Mjc5MjM5IDcuMDAyNjY5NDcsMy43Mjc5MjM5MiBMNy40Mzk1OTQ1NywzLjcyNzkyMzkyIEM3LjU2MDEzMDc2LDMuNzI3OTIzOTIgNy42NTgwNTcxMywzLjgyNTYyNzQ1IDcuNjU4MDU3MTMsMy45NDYzODY0NiBMNy42NTgwNTcxMyw0LjM4MzMxMTU2IEM3LjY1ODA1NzEzLDQuNDA1NzEzNCA3LjY1MTQ0NjUxLDQuNDI2MTk4OTEgNy42NDUyNjY2OSw0LjQ0NjY4NDQyIEM3Ljk1NTQ2MDkzLDQuNTE0MzA1OSA4LjIyMDQyMDY4LDQuNjM4Njg5NjIgOC40NDAxNzU2NSw0LjgyMDAyODY5IEM4Ljc5MDY4NzI2LDUuMTA5MzIxNDcgOC45ODQ0MDA4Miw1LjUyOTE3NzggOS4wMjEzMDE0Nyw2LjA3OTU5NzY3IEw3Ljk5NzQ4NjY3LDYuMDc5NTk3NjcgQzcuOTIxMzIzMzYsNS41NDgxNzc3NyA3LjU4MjMyNDYzLDUuMjgyMzU2NDIgNi45ODA0OTA0Niw1LjI4MjM1NjQyIEM2LjcwNjAyMzMsNS4yODIzNTY0MiA2LjQ4NjkyMTk2LDUuMzM2MzI1ODYgNi4zMjMyOTA0Niw1LjQ0NDUwMjM5IEM2LjE2MTc4MzI3LDUuNTUyODcyMDUgNi4wODExNDg1LDUuNzAwOTM1MTggNi4wODExNDg1LDUuODg5MTA3NyBDNi4wODExNDg1LDYuMDI1NjQzMDkgNi4xMjI2Mzk0NSw2LjEzOTU2ODY1IDYuMjA1NjM2MjEsNi4yMzEzMDAzMyBDNi4yOTA5ODAxMSw2LjMyMzAzMjAyIDYuNDI3MDg0NjksNi4zOTI1ODQ3IDYuNjEzODYwODEsNi40Mzk1Mjc1NyBMNy44NTE5OTM1Miw2Ljc0OTk0NDY0IEM4LjM2MTg1ODMxLDYuODc0NzQ0MzEgOC43MTExMDcyMyw3LjA0OTkwMzU2IDguOTAwMzM0NSw3LjI3NTYxNTUgQzkuMDkxNDc4MDksNy41MDE1NTAyOSA5LjE4NzI4MDEzLDcuNzk2ODAwMDYgOS4xODcyODAxMyw4LjE2MTE4NjU2IEM5LjE4NzI4MDEzLDguNjYyMzE2NDIgOS4wMTIxMjA4OCw5LjA2OTE1OTQ3IDguNjYxNDAxMjgsOS4zODE5MjM2OSBDOC40MDg1NzgzNCw5LjYwNzYzNTY1IDguMDcxMDgsOS43NTAxNTc3MiA3LjY1MTQ0NjUxLDkuODExNTg0NTMgQzcuNjUzMTU0ODcsOS44MjMxMTIyNyA3LjY1ODA1NzEzLDkuODMzMTM5NjIgNy42NTgwNTcxMyw5Ljg0NDg3NTM0IEw3LjY1ODA1NzEzLDEwLjI4MTc4NTYgQzcuNjU4MDU3MTMsMTAuNDAyNTQ0NiA3LjU2MDEzMDc2LDEwLjUwMDI2MyA3LjQzOTU5NDU3LDEwLjUwMDI2MyBMNy4wMDI2Njk0NywxMC41MDAyNjMgQzYuODgyMDI5MywxMC41MDAyNjMgNi43ODQyMDY5MiwxMC40MDI1NDQ2IDYuNzg0MjA2OTMsMTAuMjgxNzg1NiBMNi43ODQyMDY5Myw5Ljg0NDg3NTM0IEM2Ljc4NDIwNjkzLDkuODM4OTAzNDkgNi43ODcwODg4Nyw5LjgzNDIwOTIxIDYuNzg3NTE5NjYsOS44MjgyMzczNiBDNi4zMjcwMTkxNCw5Ljc4MTI5NDUxIDUuOTM4NTM3MjksOS42NDA0ODA3OSA1LjYyNDQ4MDY2LDkuNDAzMjcwODEgQzUuMjMyNDYzMjQsOS4xMDQ2MDQzMiA1LjAzNjUyMTM3LDguNjY5Mzg3NTggNS4wMzY1MjEzNyw4LjA5NzgyODU3IEw2LjA2MDMzNjE4LDguMDk3ODI4NTcgQzYuMDkwMzE0MjQsOC42NjcwMjU1NyA2LjQ1NDY4NTg4LDguOTUxNjM4OTIgNy4xNTM0ODA4NCw4Ljk1MTYzODkyIEM3LjgyNjc4NDAzLDguOTUxNjM4OTIgOC4xNjM0MzU2Miw4LjczMTY3NTk5IDguMTYzNDM1NjIsOC4yOTE3NjQ5NiBDOC4xNjM0NTA0Nyw4LjAxMTgxNjE3IDcuOTI3MDcyMzgsNy44MTMxODU0OSA3LjQ1NDMxNjIyLDcuNjk1NDI3MjcgWiBNMTIuMzY3NzQ3OCw4LjIzMDA1NTkgQzEyLjM1NDUxMTcsOC4yMzAwNTU5IDEyLjM0MTA2NzcsOC4yMjg5ODYzMiAxMi4zMjc0MzA1LDguMjI2NDMxMTkgQzEyLjIwODgxMDYsOC4yMDQyMzczMiAxMi4xMzA3MTYxLDguMDkwMTAzNzkgMTIuMTUyOTEsNy45NzE0ODM5NSBDMTIuMjE1MTk4NCw3LjYzNjU0MDczIDEyLjI0NTcxMTMsNy4zMjAzNzQ2NCAxMi4yNDU3MTEzLDcuMDA0ODQ3MzIgQzEyLjI0NTcxMTMsNC4xMTM4NjU1IDkuODkzNjIxNTgsMS43NjE3OTA2NyA3LjAwMjY1NDYyLDEuNzYxNzkwNjcgQzUuNDcyMDUwMDcsMS43NjE3OTA2NyA0LjAyMDc4Nzg3LDIuNDMxNTczMTQgMy4wMjEwODMyNywzLjU5OTI5MTU3IEMyLjk0MjU3MjgyLDMuNjkwOTE5MjggMi44MDQ3NDUwMywzLjcwMTU4NTQxIDIuNzEzMDEzMzQsMy42MjMxNzg5NSBDMi42MjEzODU2NCwzLjU0NDY2ODUgMi42MTA3MTk1MSwzLjQwNjc1MTU5IDIuNjg5MTI1OTYsMy4zMTUxMjM4OCBDMy43NzIwMzUyOSwyLjA1MDMyNTg0IDUuMzQ0MjQ5NjIsMS4zMjQ4NjU1NyA3LjAwMjY1NDYyLDEuMzI0ODY1NTcgQzEwLjEzNDcwODgsMS4zMjQ4NjU1NyAxMi42ODI2MzY0LDMuODcyODk3MTIgMTIuNjgyNjM2NCw3LjAwNDg0NzMyIEMxMi42ODI2MzY0LDcuMzQyNzc2NDggMTIuNjQ4NzIxNyw3LjY5NTAxMTMxIDEyLjU4MjE1NDksOC4wNTE3MTc2IEMxMi41NjI1MzEsOC4xNTY4OTMzOCAxMi40NzA3OTkzLDguMjMwMDU1OSAxMi4zNjc3NDc4LDguMjMwMDU1OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
      },
      on: {
        "click": _vm.integalClick
      }
    }), _vm._v("\n      积   分"), _c('em', {
      staticClass: "emfe-panel-c-main-others-text-em"
    }, [_vm._v(": " + _vm._s(_vm.integrals))])]) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "emfe-panel-c-main-others-text"
    }, [_c('img', {
      staticClass: "emfe-panel-c-main-others-text-img",
      attrs: {
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMTUgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7pkrHooos8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03ODkuMDAwMDAwLCAtNDI0LjAwMDAwMCkiIGZpbGw9IiNGRkI5NzQiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSLpkrHooosiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4OS41NzgxMjUsIDQyNC42NDQ4NzQpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjkxMDkyMTk0LDEzLjkzODk4ODkgQzIuMDQ5NzYyNzcsMTMuOTM4OTg4OSAwLjAxMTUyNDY1MzQsMTIuMzg0MDAxMiAwLjAxMTUyNDY1MzQsOS4xODczNDg3OCBDMC4wMTE1MjQ2NTM0LDYuNTM4NDk1NzkgMi4zMjI5NDg2OSwzLjc3NTIyOSA1LjEyNjQ5NDg0LDIuOTAzMjU3MTEgTDguNjk1MzQ5MDQsMi45MDMyNTcxMSBDMTEuNDk2OTU3NywzLjc3NTIyOSAxMy44MTAzMTkyLDYuNTM4NDk1NzkgMTMuODEwMzE5Miw5LjE4NzM0ODc4IEMxMy44MTAzMTkyLDEyLjM4NDAwMTIgMTEuNzcwMTQzNiwxMy45Mzg5ODg5IDYuOTEwOTIxOTQsMTMuOTM4OTg4OSBaIE04LjgyMzIyMzI5LDguNjg2MzU0OTkgQzkuMTQ0ODQ2NDEsOC42ODQ2MjE0NSA5LjQwNjQwNzM4LDguNDQ4ODU5NjYgOS40MDY0MDczOCw4LjE2MTA5MTYgQzkuNDA2NDA3MzgsNy44NzE1OSA5LjE0NDg0NjQxLDcuNjM3NTYxNzYgOC44MjMyMjMyOSw3LjYzNTgyODIyIEw4LjgyMzIyMzI5LDcuNjM0MDk0NjggTDcuNjM5NDE3NjksNy42MzQwOTQ2OCBDNy42NDEzNTUxNyw3LjYyMTk1OTg4IDcuNjM3NDgwMjEsNy42MTE1NTg2MyA3LjYzOTQxNzY5LDcuNTk5NDIzODQgTDkuMDI2NjU5NjEsNi4zMzA0NzA3MSBDOS4yNTMzNDU3OCw2LjEwMTY0MzA5IDkuMTM3MDk2NDYsNS45MTQ0MjA1IDguOTA4NDcyNzksNS43MDYzOTU0IEM4LjY3NzkxMTYzLDUuNDk4MzcwMzEgOC4zMDIwMzg4Miw1LjQ1NTAzMTczIDguMTE2MDM5OTEsNS42MzUzMjAxNiBMNi45MjQ0ODQzNSw2Ljc3MjUyNDA2IEw1LjYzNjA1NDM2LDUuNjE5NzE4MjkgQzUuNDczMzA1MzEsNS40NzQxMDA3MSA1LjE1NTU1NzE2LDUuNTIwOTA2MzYgNC45MjY5MzM1LDUuNzI1NDY0MzkgQzQuNjk4MzA5ODMsNS45MzAwMjI0MSA0LjY0NTk5NzY0LDYuMjE0MzIzMzcgNC44MDg3NDY2OCw2LjM1OTk0MDk0IEw2LjEyNjIzOTAxLDcuNTM4NzQ5ODcgQzYuMTAxMDUxNjYsNy41NjY0ODY1NSA2LjA4NTU1MTc0LDcuNTk3NjkwMzIgNi4wNzU4NjQzLDcuNjMyMzYxMTYgTDUuMDA0NDMzMDQsNy42MzIzNjExNiBMNS4wMDQ0MzMwNCw3LjYzNDA5NDcgTDUuMDAyNDk1NTYsNy42MzQwOTQ2OCBDNC42Nzg5MzQ5NCw3LjYzNDA5NDY4IDQuNDE1NDM2NDgsNy44Njk4NTY0NiA0LjQxNTQzNjQ4LDguMTU5MzU4MDcgQzQuNDE1NDM2NDgsOC40NDg4NTk2NyA0LjY3ODkzNDk0LDguNjg0NjIxNDUgNS4wMDI0OTU1Niw4LjY4NDYyMTQ1IEM1LjAwMjQ5NTU2LDguNjg0NjIxNDUgNS4wMDQ0MzMwNCw4LjY4NDYyMTQ1IDUuMDA2MzcwNTQsOC42ODQ2MjE0NSBMNS4wMDYzNzA1NCw4LjY4NjM1NDk5IEw2LjE4MDQ4ODY5LDguNjg2MzU0OTkgTDYuMTgwNDg4NjksOS4yMDk4ODQ4MyBMNS4wMDYzNzA1NCw5LjIwOTg4NDgzIEw1LjAwNjM3MDU0LDkuMjExNjE4MzcgTDUuMDAyNDk1NTYsOS4yMTE2MTgzOSBDNC42Nzg5MzQ5NCw5LjIxMTYxODM5IDQuNDE1NDM2NDgsOS40NDczODAxNyA0LjQxNTQzNjQ4LDkuNzM2ODgxNzcgQzQuNDE1NDM2NDgsMTAuMDI2MzgzNCA0LjY3ODkzNDk0LDEwLjI2MjE0NTIgNS4wMDI0OTU1NiwxMC4yNjIxNDUyIEM1LjAwMjQ5NTU2LDEwLjI2MjE0NTIgNS4wMDQ0MzMwNCwxMC4yNjIxNDUyIDUuMDA2MzcwNTQsMTAuMjYyMTQ1MiBMNi4xODA0ODg2OSwxMC4yNjIxNDUyIEw2LjE4MDQ4ODY5LDEwLjc5MDg3NTYgTDYuMTkyMTEzNjIsMTAuNzkwODc1NiBDNi4xODI0MjYxNywxMC44MzI0ODA2IDYuMTc4NTUxMTksMTAuODc0MDg1NyA2LjE3ODU1MTE5LDEwLjkxOTE1NzggQzYuMTc4NTUxMTksMTEuMjgxNDY4MSA2LjUwNzkyNDI3LDExLjU3NjE3MDQgNi45MTI4NTk0LDExLjU3NjE3MDQgQzcuMzE3Nzk0NTQsMTEuNTc2MTcwNCA3LjY0NzE2NzYyLDExLjI4MTQ2ODEgNy42NDcxNjc2MiwxMC45MTkxNTc4IEM3LjY0NzE2NzYyLDEwLjg3NTgxOTIgNy42NDEzNTUxNSwxMC44MzI0ODA2IDcuNjMxNjY3NzEsMTAuNzkwODc1NiBMNy42Mzk0MTc2NSwxMC43OTA4NzU2IEw3LjYzOTQxNzY1LDEwLjI2MjE0NTIgTDguODI1MTYwNzUsMTAuMjYyMTQ1MiBDOS4xNDY3ODM4NywxMC4yNjA0MTE2IDkuNDA4MzQ0ODQsMTAuMDI2MzgzNCA5LjQwODM0NDg0LDkuNzM2ODgxNzcgQzkuNDA4MzQ0ODQsOS40NDczODAxNyA5LjE0Njc4Mzg3LDkuMjEzMzUxOTIgOC44MjUxNjA3NSw5LjIxMTYxODM5IEw4LjgyNTE2MDc1LDkuMjA5ODg0ODUgTDcuNjM3NDgwMjEsOS4yMDk4ODQ4MyBMNy42Mzc0ODAyMSw4LjY4NjM1NDk5IEw4LjgyMzIyMzI5LDguNjg2MzU0OTkgWiBNOS42OTg5NjgyLDAuODA1NjcwNjY2IEw5LjU3NDk2ODkxLDAuOTQ0MzU0MDc1IEM5LjU3MzAzMTQzLDAuOTQ2MDg3NjExIDkuNTcxMDkzOTMsMC45NDk1NTQ3IDkuNTY3MjE4OTcsMC45NTMwMjE3OSBMOC41MjI5MTI1NSwyLjExOTY5NTkxIEw1LjAwMjQ5NTU2LDIuMTE5Njk1ODkgTDMuOTYwMTI2NjMsMC45NTQ3NTUzMDkgQzMuOTUyMzc2NjksMC45NDc4MjExNDcgMy45NDY1NjQyLDAuOTM5MTUzNDMyIDMuOTQwNzUxNzQsMC45MzIyMTkyNTMgTDMuODI4Mzc3NCwwLjgwNTY3MDY0OSBMMy44NDc3NTIzLDAuNzY5MjY2MjUyIEMzLjgzODA2NDg1LDAuNzM2MzI4OTQ1IDMuODI0NTAyNDQsMC43MDUxMjUxNzMgMy44MjQ1MDI0NCwwLjY3MDQ1NDMzIEMzLjgyNDUwMjQ0LDAuNTA0MDM0MjM5IDMuOTQyNjg5MjYsMC4zNjE4ODM3NTggNC4xMDczNzU3OSwwLjMwNDY3Njg1OCBMNC4xMjA5MzgyMiwwLjI4MDQwNzI2NiBDNC4xMjA5MzgyMiwwLjI4MDQwNzI2NiA1LjU2NDM2NzMxLDAuMDIyMTA5NDMxNCA2Ljc2MzY3MjgyLDAuMDE2OTA4ODA1NyBDOC4wMTkxNjU1MSwwLjAxMTcwODE4IDkuNDA2NDA3NDIsMC4yODA0MDcyNjYgOS40MDY0MDc0MiwwLjI4MDQwNzI2NiBMOS40MTk5Njk4NSwwLjMwNDY3Njg1OCBDOS41ODI3MTg5LDAuMzYxODgzNzU4IDkuNzAwOTA1NzIsMC41MDQwMzQyNTYgOS43MDA5MDU3MiwwLjY3MDQ1NDMzIEM5LjcwMDkwNTcyLDAuNzA1MTI1MTczIDkuNjg3MzQzMjksMC43MzQ1OTU0MDggOS42Nzk1OTMzNCwwLjc2NzUzMjcxNiBMOS42OTg5NjgyLDAuODA1NjcwNjY2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
      },
      on: {
        "click": _vm.balanceClick
      }
    }), _vm._v("\n       余   额"), _c('em', {
      staticClass: "emfe-panel-c-main-others-text-em"
    }, [_vm._v(": ￥" + _vm._s(_vm.balances))])]), _vm._v(" "), _vm.openVip === 1 && _vm.isVip === 2 && _vm.openMember === 1 || _vm.openMember === 1 && _vm.isVip === 2 ? _c('span', {
      staticClass: "emfe-panel-c-main-others-text"
    }, [_c('img', {
      staticClass: "emfe-panel-c-main-others-text-img",
      attrs: {
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMTMgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7moJHoi5c8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MjQuMDAwMDAwLCAtNDI3LjAwMDAwMCkiIGZpbGw9IiMyMEZCODEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSLmoJHoi5ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyNC4wMDAwMDAsIDQyNy42NDQ4NzQpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC4wNzQ0NDM5LDEuMDU3NzE1NDkgQzEwLjU2NjM4NzEsMS4wMDUyNDU3OCAxMC45OTU1ODI1LDEuMDQ3MjIxNTUgMTEuMzYyMDMsMS4xODM2NDI3OCBDMTEuNzI4NDc3NSwxLjMyMDA2NDAyIDEyLjAzNDY4NzEsMS41MTE1Nzg0NCAxMi4yODA2NTg3LDEuNzU4MTg2MDYgQzEyLjUyNjYzMDMsMi4wMDQ3OTM2OCAxMi43MDQ4MzQzLDIuMjkwNzUzNTggMTIuODE1MjcwNSwyLjYxNjA2NTc1IEMxMi45MjU3MDY3LDIuOTQxMzc3OTMgMTIuOTYzMzU1NSwzLjI2NDA2NjYyIDEyLjkyODIxNjcsMy41ODQxMzE4MyBDMTIuODkzMDc3OSwzLjkwNDE5NzAzIDEyLjc4NzY2MTQsNC4yMDg1MjEzMyAxMi42MTE5Njc0LDQuNDk3MTA0NzEgQzEyLjQzNjI3MzQsNC43ODU2ODgwOSAxMi4xODI3NzIxLDUuMDEzOTMxMzIgMTEuODUxNDYzMyw1LjE4MTgzNDM3IEMxMS40MDk3MTg0LDUuNDEyNzAxMDggMTAuOTc4MDEzMSw1LjYxOTk1NjQyIDEwLjU1NjM0NzUsNS44MDM2MDAzOSBDMTAuMTM0NjgxOCw1Ljk4NzI0NDM2IDkuNzMwNTg1NTgsNi4xMzk0MDY1MSA5LjM0NDA1ODc1LDYuMjYwMDg2ODMgQzguOTU3NTMxOTEsNi4zODA3NjcxNiA4LjU5ODYxNDE0LDYuNDYyMDk1MiA4LjI2NzMwNTQyLDYuNTA0MDcwOTYgQzcuOTM1OTk2NzEsNi41NDYwNDY3MyA3LjYzOTgyNjgsNi41MzU1NTI3OSA3LjM3ODc5NTY5LDYuNDcyNTg5MTQgQzcuMjQ4MjgwMTMsNy4xMDIyMjU2MSA3LjEzNzg0MzksNy43OTIyMDIyNSA3LjA0NzQ4Njk3LDguNTQyNTE5MDQgQzYuOTU3MTMwMDUsOS4yOTI4MzU4NCA2LjkxMTk1MTU5LDEwLjA2MTUxNyA2LjkxMTk1MTU5LDEwLjg0ODU2MjYgQzYuOTExOTUxNTksMTEuMjE1ODUwNiA2LjkxOTQ4MTMzLDExLjU4MzEzODUgNi45MzQ1NDA4MiwxMS45NTA0MjY0IEM2Ljk0OTYwMDMxLDEyLjMxNzcxNDQgNi45NjcxNjk3MSwxMi42NTM1MjA1IDYuOTg3MjQ5MDMsMTIuOTU3ODQ0OCBDNy4wMDczMjgzNCwxMy4zMDQxNDQ5IDcuMDMyNDI3NDksMTMuNjM5OTUxIDcuMDYyNTQ2NDYsMTMuOTY1MjYzMiBMNC44NjM4NjEzNSwxMy45NjUyNjMyIEM0Ljg3MzkwMTAxLDEzLjc2NTg3ODMgNC44ODg5NjA1LDEzLjUwMzUyOTcgNC45MDkwMzk4MiwxMy4xNzgyMTc2IEM0LjkxOTA3OTQ3LDEyLjkwNTM3NTEgNC45MjkxMTkxMywxMi41NDg1ODExIDQuOTM5MTU4NzksMTIuMTA3ODM1NiBDNC45NDkxOTg0NSwxMS42NjcwOSA0Ljk1NDIxODI4LDExLjEyNjY1MjEgNC45NTQyMTgyOCwxMC40ODY1MjE2IEM0Ljk1NDIxODI4LDkuNjY3OTk0MjMgNS4wMDQ0MTY1Nyw4Ljg4NjE5NTYxIDUuMTA0ODEzMTUsOC4xNDExMjU3OSBDNS4yMDUyMDk3Myw3LjM5NjA1NTk3IDUuMzIwNjY1NzksNi43MjQ0NDM3MyA1LjQ1MTE4MTM1LDYuMTI2Mjg5MDggQzUuMDU5NjM0NjksNi4yMjA3MzQ1NSA0LjY0Mjk4ODg4LDYuMjE1NDg3NTggNC4yMDEyNDM5Myw2LjExMDU0ODE3IEMzLjc1OTQ5ODk3LDYuMDA1NjA4NzYgMy4zMTc3NTQwMiw1LjgyOTgzNTI0IDIuODc2MDA5MDcsNS41ODMyMjc2MiBDMi40MzQyNjQxMSw1LjMzNjYyMDAxIDIuMDA3NTc4NjUsNS4wMzIyOTU3MSAxLjU5NTk1MjY3LDQuNjcwMjU0NzQgQzEuMTg0MzI2NjksNC4zMDgyMTM3NyAwLjgxNzg3OTE3MiwzLjkxNzMxNDQ2IDAuNDk2NjEwMTE1LDMuNDk3NTU2ODEgQzAuMjg1Nzc3Mjk3LDMuMjI0NzE0MzQgMC4xNDUyMjIwODUsMi45NTE4NzE4NyAwLjA3NDk0NDQ3ODQsMi42NzkwMjk0IEMwLjAwNDY2Njg3MjI4LDIuNDA2MTg2OTMgLTAuMDA3ODgyNzAwMjQsMi4xMzg1OTE0MyAwLjAzNzI5NTc2MDksMS44NzYyNDI5IEMwLjA4MjQ3NDIyMiwxLjYxMzg5NDM3IDAuMTcyODMxMTQ0LDEuMzY3Mjg2NzUgMC4zMDgzNjY1MjcsMS4xMzY0MjAwNSBDMC40NDM5MDE5MTEsMC45MDU1NTMzMzkgMC42MDIwMjY1MjUsMC42OTU2NzQ1MTUgMC43ODI3NDAzNjksMC41MDY3ODM1NzQgQzAuOTQzMzc0ODk3LDAuMzQ5Mzc0NDU2IDEuMTM0MTI4NCwwLjIyODY5NDEzMiAxLjM1NTAwMDg4LDAuMTQ0NzQyNjAzIEMxLjU3NTg3MzM1LDAuMDYwNzkxMDczNCAxLjgxNDMxNTIzLDAuMDEzNTY4MzM4IDIuMDcwMzI2NTEsMC4wMDMwNzQzOTY4MyBDMi4zMjYzMzc3OSwtMC4wMDc0MTk1NDQzNiAyLjU4NzM2ODksMC4wMTM1NjgzMzggMi44NTM0MTk4NCwwLjA2NjAzODA0NCBDMy4xMTk0NzA3NywwLjExODUwNzc1IDMuMzc3OTkxOTcsMC4yMDI0NTkyNzkgMy42Mjg5ODM0MiwwLjMxNzg5MjYzMyBDMy44Nzk5NzQ4NywwLjQ0MzgxOTkyNyA0LjE0ODUzNTcyLDAuNjE0MzQ2NDcxIDQuNDM0NjY1OTcsMC44Mjk0NzIyNjYgQzQuNzIwNzk2MjMsMS4wNDQ1OTgwNiA0Ljk5Njg4NjgyLDEuMjkxMjA1NjggNS4yNjI5Mzc3NiwxLjU2OTI5NTEyIEM1LjUyODk4ODcsMS44NDczODQ1NiA1Ljc3NDk2MDMyLDIuMTQzODM4NCA2LjAwMDg1MjYzLDIuNDU4NjU2NjQgQzYuMjI2NzQ0OTMsMi43NzM0NzQ4NyA2LjQxNDk4ODUyLDMuMDg4MjkzMTEgNi41NjU1ODMzOSwzLjQwMzExMTM0IEM2LjcyNjIxNzkyLDMuMTA5MjgwOTkgNi45MzcwNTA3NCwyLjgyODU2ODA2IDcuMTk4MDgxODQsMi41NjA5NzI1NiBDNy40NTkxMTI5NSwyLjI5MzM3NzA2IDcuNzQ3NzUzMTIsMi4wNTQ2Mzk5IDguMDY0MDAyMzUsMS44NDQ3NjEwOCBDOC4zODAyNTE1OCwxLjYzNDg4MjI1IDguNzExNTYwMjksMS40NTkxMDg3NCA5LjA1NzkyODQ5LDEuMzE3NDQwNTMgQzkuNDA0Mjk2NywxLjE3NTc3MjMyIDkuNzQzMTM1MTUsMS4wODkxOTczMSAxMC4wNzQ0NDM5LDEuMDU3NzE1NDkgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
      },
      on: {
        "click": _vm.growthClick
      }
    }), _vm._v("\n      成长值"), _c('em', {
      staticClass: "emfe-panel-c-main-others-text-em"
    }, [_vm._v(": " + _vm._s(_vm.growths))])]) : _vm._e()])])]);
  }, staticRenderFns: [] };

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeSlide = __webpack_require__(353);

var _EmfeSlide2 = _interopRequireDefault(_EmfeSlide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeSlide2.default.install = function (Vue) {
  Vue.component(_EmfeSlide2.default.name, _EmfeSlide2.default);
};

exports.default = _EmfeSlide2.default;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(354),
  /* template */
  __webpack_require__(355),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'emfe-slide';
exports.default = {
  name: 'EmfeSlide',
  data: function data() {
    return {
      progress: '',
      movePercent: '',
      moveValue: '',
      slideBarWidth: 0
    };
  },

  props: {
    className: {
      type: String,
      default: ''
    },
    percent: {
      type: Number,
      default: ''
    },
    maxPercent: {
      type: String,
      default: ''
    },
    slideWidth: String,
    slideLeft: {
      type: String,
      default: ''
    },
    slideRight: {
      type: String,
      default: ''
    }
  },
  computed: {
    slideName: function slideName() {
      return [(0, _defineProperty3.default)({}, prefixCls + '-' + this.className, !!this.className)];
    }
  },
  mounted: function mounted() {
    this.initData(this.percent);
  },

  methods: {
    initData: function initData(val) {
      var slideBar = this.$refs.slideBar;

      this.slideBarWidth = this.slideWidth ? this.slideWidth : slideBar.clientWidth;
      var slideBarL = this.slideBarWidth / this.maxPercent * val - 26;
      this.progress = 'left: ' + slideBarL + 'px';
      this.movePercent = val + '%';
      this.moveValue = val;
      this.BarW = this.$children[0].$el.clientWidth;
    },
    drag: function drag(ev, left) {
      var iLeft = left + this.BarW / 2;
      var iScale = iLeft / this.slideBarWidth;
      var moveLeft = Math.round(iScale * this.maxPercent);
      this.moveValue = moveLeft;
      this.movePercent = moveLeft + '%';
      this.$emit('change', moveLeft);
    }
  },
  watch: {
    percent: function percent(val, oldVal) {
      if (val !== oldVal) {
        this.initData(val);
      }
    }
  }
};

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-slide",
      class: _vm.slideName
    }, [_c('div', {
      staticClass: "emfe-slide-main"
    }, [_c('div', {
      staticClass: "emfe-slide-describe"
    }, [_vm._v(_vm._s(_vm.slideLeft))]), _vm._v(" "), _c('div', {
      staticClass: "emfe-slide-progress"
    }, [_c('progress', {
      ref: "slideBar",
      staticClass: "emfe-slide-progress-bar",
      attrs: {
        "value": _vm.moveValue,
        "max": _vm.maxPercent
      }
    }), _vm._v(" "), _c('emfe-drag', {
      attrs: {
        "className": "emfe-slide-progress",
        "limit": "true",
        "limitPosition": "center",
        "dragDiyStyle": _vm.progress,
        "direction": "horizontal"
      },
      on: {
        "drag": _vm.drag
      }
    }, [_c('span', {
      staticClass: "emfe-slide-progress-drag-left"
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-slide-progress-drag-right"
    })])], 1), _vm._v(" "), _c('div', {
      staticClass: "emfe-slide-describe"
    }, [_vm._v(_vm._s(_vm.slideRight))])])]);
  }, staticRenderFns: [] };

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeHottip = __webpack_require__(357);

var _EmfeHottip2 = _interopRequireDefault(_EmfeHottip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeHottip2.default.install = function (Vue) {
  Vue.component(_EmfeHottip2.default.name, _EmfeHottip2.default);
};

exports.default = _EmfeHottip2.default;

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(358),
  /* template */
  __webpack_require__(359),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'hottip',
  data: function data() {
    return {
      showInfo: false
    };
  },

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change: function change() {
      this.showInfo = !this.showInfo;
      this.$emit('change', this.showInfo);
    }
  }
};

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-hottip"
    }, [_vm.open ? [_c('a', {
      staticClass: "emfe-hottip-btn",
      attrs: {
        "href": "javascript:;"
      }
    }, [_c('emfe-icon', {
      class: {
        'emfe-hottip-deg': _vm.showInfo
      },
      attrs: {
        "type": "tishixinxizhankai"
      },
      on: {
        "click": _vm.change
      }
    })], 1), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showInfo,
        expression: "showInfo"
      }]
    }, [_vm._t("no1")], 2), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.showInfo,
        expression: "!showInfo"
      }]
    }, [_vm._t("no2")], 2)] : [_vm._t("default")]], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeCrumb = __webpack_require__(361);

var _EmfeCrumb2 = _interopRequireDefault(_EmfeCrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeCrumb2.default.install = function (Vue) {
  Vue.component(_EmfeCrumb2.default.name, _EmfeCrumb2.default);
};

exports.default = _EmfeCrumb2.default;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(362),
  /* template */
  __webpack_require__(363),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeCrumb',
  props: {
    routers: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    linkText: {
      type: String,
      required: true
    },
    className: String
  },
  computed: {
    crumbName: function crumbName() {
      return this.className ? this.className + '-crumb' : '';
    },
    leftName: function leftName() {
      return this.className ? this.className + '-crumb-left' : '';
    },
    txtName: function txtName() {
      return this.className ? this.className + '-crumb-left-txt' : '';
    },
    rightName: function rightName() {
      return this.className ? this.className + '-crumb-right' : '';
    },
    linkName: function linkName() {
      return this.title ? 'emfe-crumb-title' : 'emfe-crumb';
    }
  },
  methods: {
    click: function click() {
      this.$emit('click');
    }
  }
};

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-crumb",
      class: _vm.crumbName
    }, [_c('div', {
      staticClass: "emfe-crumb-left",
      class: _vm.leftName
    }, [_c('emfe-link', {
      attrs: {
        "className": _vm.linkName,
        "routers": _vm.routers
      },
      on: {
        "click": _vm.click
      }
    }, [_vm._v(_vm._s(_vm.linkText))]), _vm._v(" "), _vm.title ? _c('span', {
      staticClass: "emfe-crumb-left-txt",
      class: _vm.txtName
    }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "emfe-crumb-right",
      class: _vm.rightName
    }, [_vm._t("default")], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeCrumbC = __webpack_require__(365);

var _EmfeCrumbC2 = _interopRequireDefault(_EmfeCrumbC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeCrumbC2.default.install = function (Vue) {
  Vue.component(_EmfeCrumbC2.default.name, _EmfeCrumbC2.default);
};

exports.default = _EmfeCrumbC2.default;

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(366),
  /* template */
  __webpack_require__(367),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeCrumbC',
  props: {
    routers: {
      type: Object,
      required: true
    },
    format: {
      type: String,
      default: '>'
    },
    datas: {
      type: Array,
      required: true
    },
    linkText: {
      type: String,
      required: true
    }
  },
  methods: {
    click: function click() {
      this.$emit('click');
    }
  }
};

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-crumb-c"
    }, [_c('span', {
      staticClass: "emfe-crumb-c-title"
    }, [_vm._v("您的位置：")]), _vm._v(" "), _vm._l(_vm.datas, function (data) {
      return [_c('span', {
        staticClass: "emfe-crumb-c-title"
      }, [_vm._v(_vm._s(data))]), _vm._v(" "), _c('i', {
        staticClass: "emfe-crumb-c-format"
      }, [_vm._v(_vm._s(_vm.format))])];
    }), _vm._v(" "), _c('emfe-link', {
      attrs: {
        "className": "emfe-crumb-c",
        "routers": _vm.routers
      },
      on: {
        "click": _vm.click
      }
    }, [_vm._v(_vm._s(_vm.linkText))])], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeEdit = __webpack_require__(369);

var _EmfeEdit2 = _interopRequireDefault(_EmfeEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeEdit2.default.install = function (Vue) {
  Vue.component(_EmfeEdit2.default.name, _EmfeEdit2.default);
};

exports.default = _EmfeEdit2.default;

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(370),
  /* template */
  __webpack_require__(371),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeEdit',
  data: function data() {
    return {
      oneReduceFlg: true,
      twoReduceFlg: true,
      openFlg: -1
    };
  },

  props: {
    className: {
      type: String,
      default: ''
    },
    oneList: {
      type: Array
    },
    onePlaceholder: {
      type: String,
      default: '选项'
    },
    twoPlaceholder: {
      type: String,
      default: '二级选项'
    },
    addOneObj: {
      type: Object
    },
    addTwoObj: {
      type: Object
    }
  },
  computed: {
    editBox: function editBox() {
      return [(0, _defineProperty3.default)({}, this.className + '-edit', !!this.className)];
    }
  },
  methods: {
    openTwoList: function openTwoList(index) {
      this.openFlg = index;
    },
    addOneList: function addOneList(index) {
      var _this = this;

      var newAddObj = _o2.default.copy(this.addOneObj);
      this.oneList.splice(index + 1, 0, newAddObj);
      this.openTwoList(index + 1);
      this.oneReduceFlg = true;
      setTimeout(function () {
        _this.$refs.inputFocus[index + 1].querySelector('input').focus();
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
      this.oneList[index].sub_choices.splice(ind + 1, 0, _o2.default.copy(this.addTwoObj));
      this.twoReduceFlg = true;
    },
    reduceTwoList: function reduceTwoList(index, ind) {
      if (this.oneList[index].sub_choices.length >= 2) {
        this.oneList[index].sub_choices.splice(ind, 1);
      }
      if (this.oneList[index].sub_choices.length <= 1) {
        this.twoReduceFlg = false;
      }
    }
  }
};

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-edit",
      class: _vm.editBox
    }, _vm._l(_vm.oneList, function (one, index) {
      return _c('div', {
        key: index,
        staticClass: "emfe-edit-wrap"
      }, [_c('div', {
        staticClass: "emfe-edit-left",
        on: {
          "click": function click($event) {
            _vm.openTwoList(index);
          }
        }
      }, [_c('div', {
        ref: "inputFocus",
        refInFor: true,
        staticClass: "emfe-edit-left-one",
        class: {
          'emfe-edit-left-one-open': _vm.openFlg === index
        }
      }, [_c('emfe-input', {
        attrs: {
          "placeholder": _vm.onePlaceholder,
          "className": "emfe-edit-left-one"
        },
        model: {
          value: one.name,
          callback: function callback($$v) {
            one.name = $$v;
          },
          expression: "one.name"
        }
      })], 1), _vm._v(" "), _vm._l(one.sub_choices, function (two, ind) {
        return _c('div', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.openFlg === index,
            expression: "openFlg === index"
          }],
          staticClass: "emfe-edit-left-two"
        }, [_c('div', {
          staticClass: "emfe-edit-left-two-text"
        }, [_c('emfe-input', {
          attrs: {
            "placeholder": _vm.twoPlaceholder,
            "className": "emfe-edit-left-two"
          },
          model: {
            value: two.name,
            callback: function callback($$v) {
              two.name = $$v;
            },
            expression: "two.name"
          }
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "emfe-edit-left-two-btn",
          on: {
            "click": function click($event) {
              _vm.addTwoList(index, ind);
            }
          }
        }, [_vm._v("+")]), _vm._v(" "), _c('div', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.twoReduceFlg,
            expression: "twoReduceFlg"
          }],
          staticClass: "emfe-edit-left-two-btn",
          on: {
            "click": function click($event) {
              _vm.reduceTwoList(index, ind);
            }
          }
        }, [_vm._v("-")])]);
      })], 2), _vm._v(" "), _c('div', {
        staticClass: "emfe-edit-right"
      }, [_c('div', {
        staticClass: "emfe-edit-right-btn",
        on: {
          "click": function click($event) {
            _vm.addOneList(index);
          }
        }
      }, [_vm._v("+")]), _vm._v(" "), _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.oneReduceFlg,
          expression: "oneReduceFlg"
        }],
        staticClass: "emfe-edit-right-btn",
        staticStyle: {
          "line-height": "11px"
        },
        on: {
          "click": function click($event) {
            _vm.reduceOneList(index);
          }
        }
      }, [_vm._v("-")])])]);
    }));
  }, staticRenderFns: [] };

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeOpations = __webpack_require__(373);

var _EmfeOpations2 = _interopRequireDefault(_EmfeOpations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeOpations2.default.install = function (Vue) {
  Vue.component(_EmfeOpations2.default.name, _EmfeOpations2.default);
};

exports.default = _EmfeOpations2.default;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(374),
  /* template */
  __webpack_require__(375),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assist = __webpack_require__(12);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refPos = {
  y: 0
};

var itemMarginBottom = 16;

var hrBorderSize = 1;

var otherConstant = itemMarginBottom / 2 - hrBorderSize;

var lastHrIndex = -1;

exports.default = {
  name: 'EmfeOpations',
  data: function data() {
    return {
      opationsData: [],
      clickFlg: !this.other,
      datas: [],
      lastHrStatus: false,
      lastHit: -1,
      lastDrag: -1,
      inputTexts: [],
      otherMin: this.other
    };
  },

  props: {
    className: {
      type: String,
      default: ''
    },
    dataPlaceholder: {
      type: String,
      default: '选项'
    },
    otherPlaceholder: {
      type: String,
      default: '其他'
    },
    value: {
      type: Array,
      required: true
    },

    other: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    opationsName: function opationsName() {
      return [(0, _defineProperty3.default)({}, this.className + '-opations', !!this.className)];
    },
    minusFlg: function minusFlg() {
      return this.datas.length >= 2 + (this.clickFlg ? 0 : 1);
    }
  },
  mounted: function mounted() {
    this.handleData(this.value);
  },

  methods: {
    handleData: function handleData(val) {
      var _this = this;

      this.datas = [];
      this.inputTexts = [];
      this.opationsData = val.slice();
      this.opationsData.forEach(function (od, odIndex) {
        var other = !_this.clickFlg && _this.other && odIndex === _this.opationsData.length - 1;

        var newOd = {
          style: {},
          hrStatus: false,
          index: odIndex,
          other: other,
          noPlus: other
        };
        _this.datas.push(newOd);
        _this.inputTexts.push(od === _this.dataPlaceholder || od === _this.otherPlaceholder ? '' : od);
      });
    },
    testHit: function testHit(one, two) {
      var hit = false;
      var twoTop = (0, _assist.getElementTop)(two) - this.scrollTop;
      var twoBottom = twoTop + two.clientHeight;
      var oneTop = (0, _assist.getElementTop)(one) - this.scrollTop;
      var oneBottom = oneTop + one.clientHeight;
      if (oneTop <= twoBottom && oneBottom >= twoTop) {
        hit = true;
      }
      return hit;
    },
    down: function down(e, index, item) {
      this.scrollTop = document.body.scrollTop;
      this.elTop = e.target.offsetTop - otherConstant;
      refPos.y = e.pageY;
      document.addEventListener('mousemove', this.move, false);
      document.addEventListener('mouseup', this.up, false);
      item.style = {
        position: 'absolute',
        left: 0,
        top: this.elTop + 'px'
      };
      item.hrStatus = true;
      this.lastDrag = index;
      this.$emit('down', this.datas[this.lastDrag], this.opationsData[this.lastDrag]);
      return false;
    },
    move: function move(e) {
      var _this2 = this;

      var dragBox = this.$refs.dragBox;

      var hits = dragBox.querySelectorAll('.emfe-opations-main');
      var _datas$lastDrag = this.datas[this.lastDrag],
          index = _datas$lastDrag.index,
          style = _datas$lastDrag.style;

      var disPosY = e.pageY - refPos.y;
      style.top = this.elTop + disPosY + 'px';
      hits.forEach(function (hit, hitIndex) {
        if (hitIndex !== index) {
          var isHit = _this2.testHit(hits[index], hit);
          if (isHit) {
            _this2.getHitIndex(hitIndex);
            _this2.moveDragHr();
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
        var opationsData = this.opationsData,
            datas = this.datas,
            lastHit = this.lastHit,
            lastDrag = this.lastDrag;

        _lodash2.default.exchangeAttrValue(datas[lastDrag], datas[lastHit], 'index');
        _lodash2.default.swap(this.datas, this.lastHit, this.lastDrag);
        _lodash2.default.swap(opationsData, lastHit, lastDrag);
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
        index: index + 1
      };
      this.datas.splice(index + 1, 0, obj);
      this.inputTexts.splice(index + 1, 0, '');
      this.opationsData.splice(index + 1, 0, '');

      this.updataIndex();
      this.$emit('input', this.opationsData);
      this.$emit('plus', this.datas[index], index);
    },
    minus: function minus(index, item) {
      if (!this.clickFlg && item.other) {
        this.clickFlg = true;
      }
      this.datas.splice(index, 1);
      this.inputTexts.splice(index, 1);
      this.opationsData.splice(index, 1);
      this.$emit('input', this.opationsData);
      this.$emit('minus', this.datas[index], index);
    },
    otherPlus: function otherPlus() {
      var obj = {
        hrStatus: false,
        other: true,
        style: {},
        noPlus: true
      };
      if (this.clickFlg) {
        this.datas.splice(this.datas.length, 0, obj);
        this.inputTexts.splice(this.datas.length, 0, '');
        this.opationsData.splice(this.datas.length, 0, '');
      }
      this.clickFlg = false;
      this.$emit('otherplus', this.datas[this.datas.length - 1], this.datas.length - 1);
    },
    updataIndex: function updataIndex() {
      this.datas.forEach(function (data, dIndex) {
        data.index = dIndex;
      });
    },
    textChange: function textChange(index, val) {
      this.opationsData.splice(index, 1, val);
      this.$emit('input', this.opationsData);
    }
  },
  watch: {
    other: function other(val, oldVal) {
      if (val !== oldVal) {
        this.clickFlg = !val;
        this.otherMin = val;
      }
    },
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.handleData(val);
      }
    }
  }
};

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      ref: "dragBox",
      staticClass: "emfe-opations",
      class: _vm.opationsName
    }, [_vm._l(_vm.datas, function (item, index) {
      return [item.hrStatus ? _c('div', {
        staticClass: "emfe-opations-hr"
      }) : _vm._e(), _vm._v(" "), _c('div', {
        key: index,
        ref: "hits",
        refInFor: true,
        staticClass: "emfe-opations-main",
        style: item.style
      }, [_c('i', {
        staticClass: "emfe-opations-icon emfe-opations-radio"
      }), _vm._v(" "), _c('emfe-input', {
        attrs: {
          "placeholder": item.other && !_vm.clickFlg ? _vm.otherPlaceholder : _vm.dataPlaceholder,
          "className": "emfe-opations",
          "change": _vm.textChange.bind(this, index)
        },
        model: {
          value: _vm.inputTexts[index],
          callback: function callback($$v) {
            var $$exp = _vm.inputTexts,
                $$idx = index;
            if (!Array.isArray($$exp)) {
              _vm.inputTexts[index] = $$v;
            } else {
              $$exp.splice($$idx, 1, $$v);
            }
          },
          expression: "inputTexts[index]"
        }
      }), _vm._v(" "), _c('i', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !item.noPlus,
          expression: "!item.noPlus"
        }],
        staticClass: "emfe-opations-icon emfe-opations-plus",
        class: {
          'emfe-opations-margin-right': !_vm.minusFlg
        },
        on: {
          "click": function click($event) {
            _vm.plus(index);
          }
        }
      }), _vm._v(" "), _c('i', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: item.other ? _vm.otherMin : _vm.minusFlg,
          expression: "item.other ? otherMin : minusFlg"
        }],
        staticClass: "emfe-opations-icon emfe-opations-minus",
        class: {
          'emfe-opations-margin-left': item.noPlus, 'emfe-opations-margin-right': item.noPlus
        },
        on: {
          "click": function click($event) {
            _vm.minus(index, item);
          }
        }
      }), _vm._v(" "), _c('i', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !item.noPlus,
          expression: "!item.noPlus"
        }],
        staticClass: "emfe-opations-icon emfe-opations-drag",
        on: {
          "mousedown": function mousedown($event) {
            $event.stopPropagation();
            _vm.down($event, index, item);
          }
        }
      })], 1)];
    }), _vm._v(" "), _vm.lastHrStatus ? _c('div', {
      staticClass: "emfe-opations-hr"
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "emfe-opations-operation"
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.clickFlg,
        expression: "clickFlg"
      }],
      staticClass: "emfe-opations-operation-other",
      on: {
        "click": _vm.otherPlus
      }
    }, [_vm._v("其他选项")])])], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeCountdown = __webpack_require__(377);

var _EmfeCountdown2 = _interopRequireDefault(_EmfeCountdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeCountdown2.default.install = function (Vue) {
  Vue.component(_EmfeCountdown2.default.name, _EmfeCountdown2.default);
};

exports.default = _EmfeCountdown2.default;

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(378)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(383),
  /* template */
  __webpack_require__(384),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2e436780",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(379);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(381)("57e2342f", content, true);

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(380)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 380 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(382)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 382 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _time = __webpack_require__(18);

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timer0 = null;
var timer = null;

exports.default = {
  name: 'emfe-countdown',
  data: function data() {
    return {
      newTime: '',
      step: 0
    };
  },
  props: {
    time: {
      type: String,
      required: true
    },
    className: String,
    end: {
      type: Function,
      default: function _default() {}
    }
  },
  computed: {
    hour: function hour() {
      var day = Math.floor(this.step / 1000 / 60 / 60 / 24) * 24;
      var hour = _time2.default.zeroFill(Math.floor(this.step / 1000 / 60 / 60 % 24) + day);
      return hour.toString();
    },
    minute: function minute() {
      var minute = _time2.default.zeroFill(Math.floor(this.step / 1000 / 60 % 60));
      return minute.toString();
    },
    second: function second() {
      var second = _time2.default.zeroFill(Math.floor(this.step / 1000 % 60));
      return second.toString();
    }
  },
  created: function created() {
    this.handleTime();
    timer0 = setTimeout(this.handleTime, 1000);
  },

  methods: {
    handleTime: function handleTime() {
      var times = this.time.split(' ');
      var oneDay = times[0];
      var oneTime = times[1];
      var aDay2 = oneDay.split('-');
      var aTime2 = oneTime.split(':');
      this.newTime = new Date(aDay2[0], aDay2[1] - 1, aDay2[2], aTime2[0], aTime2[1], aTime2[2]);
      var now = new Date();
      var newTimeMsec = this.newTime.getTime();
      var nowMsec = now.getTime();
      this.step = newTimeMsec - nowMsec;
      if (this.step <= 0) {
        clearTimeout(timer);
        clearTimeout(timer0);
        this.step = 0;
        this.$emit('end');
        this.end();
      } else {
        timer = setTimeout(this.handleTime, 1000);
      }
    }
  }
};

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-countdown",
      class: _vm.className ? [_vm.className + "-countdown"] : ''
    }, [_vm._l(_vm.hour, function (newHour) {
      return _c('span', {
        staticClass: "emfe-countdown-time",
        class: _vm.className ? [_vm.className + "-countdown-time"] : ''
      }, [_vm._v(_vm._s(newHour))]);
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-countdown-symbol",
      class: _vm.className ? [_vm.className + "-countdown-symbol"] : ''
    }, [_vm._v(":")]), _vm._v(" "), _vm._l(_vm.minute, function (min) {
      return _c('span', {
        staticClass: "emfe-countdown-time",
        class: _vm.className ? [_vm.className + "-countdown-time"] : ''
      }, [_vm._v(_vm._s(min))]);
    }), _vm._v(" "), _c('span', {
      staticClass: "emfe-countdown-symbol",
      class: _vm.className ? [_vm.className + "-countdown-symbol"] : ''
    }, [_vm._v(":")]), _vm._v(" "), _vm._l(_vm.second, function (sec) {
      return _c('span', {
        staticClass: "emfe-countdown-time",
        class: _vm.className ? [_vm.className + "-countdown-time"] : ''
      }, [_vm._v(_vm._s(sec))]);
    })], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeLogin = __webpack_require__(386);

var _EmfeLogin2 = _interopRequireDefault(_EmfeLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeLogin2.default.install = function (Vue) {
  Vue.component(_EmfeLogin2.default.name, _EmfeLogin2.default);
};

exports.default = _EmfeLogin2.default;

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(387),
  /* template */
  __webpack_require__(389),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

var _ajax = __webpack_require__(388);

var _ajax2 = _interopRequireDefault(_ajax);

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeLogin',
  data: function data() {
    return {
      title: '登录',
      telNow: {
        name: ' ',
        tel: '',
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg'
      },
      telsData: [{
        name: '中国',
        tel: '',
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg'
      }, {
        name: '香港',
        tel: '',
        prefix: '852',
        url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg'
      }],
      data: {
        code: '',
        phone: '',
        password: '',
        img_code: '',
        module_name: 'blogin',
        auto_login: 1
      },
      telError: '',
      pwdError: '',
      codeError: '',
      telFlg: false,
      pwdFlg: false,
      imgNow: '',
      imgSrc: '',
      codeNow: false,
      autoLogin: false,
      weixin: false,
      imgAction: 'http://gateway.inner.evente.cn:8000/public/verify/generate/blogin'
    };
  },

  props: {
    className: {
      type: String,
      default: ''
    },
    show: {
      type: [Boolean, String],
      default: false
    },
    referrerUrl: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    forgotName: {
      type: String,
      required: true
    },
    registerName: {
      type: String,
      required: true
    },
    loginClose: {
      type: Function,
      default: function _default() {}
    }
  },
  created: function created() {
    this.imgClick();
  },

  computed: {
    loginName: function loginName() {
      return this.className ? this.className + '-login' : '';
    }
  },
  methods: {
    close: function close() {
      this.loginClose(false);
    },
    imgClick: function imgClick() {
      var _this = this;

      (0, _ajax2.default)({
        headers: this.headers,
        type: 'GET',
        action: this.imgAction,
        onSuccess: function onSuccess(res) {
          if (res.code === _contant2.default.AJAX_SUCCESS) {
            _this.imgSrc = res.data;
          }
        },
        onError: function onError(err, response) {
          console.log(err, response);
        }
      });
    },
    login: function login() {
      var _this2 = this;

      if (this.autoLogin) {
        this.data.auto_login = 2;
      } else {
        this.data.auto_login = 1;
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
      this.data.img_code = this.imgNow;
      if (this.telFlg && this.pwdFlg) {
        (0, _ajax2.default)({
          headers: this.headers,
          type: 'POST',
          data: (0, _stringify2.default)(this.data),
          action: this.action,
          onSuccess: function onSuccess(res) {
            if (res.code === _contant2.default.AJAX_SUCCESS) {
              window.location.href = _this2.referrerUrl;
              var Rtoken = res.data.token;
              var autoData = 'Bearer ' + Rtoken;
              var callBack = res.data.call_back_url;
              callBack.forEach(function (url) {
                (0, _ajax2.default)({
                  headers: _this2.headers,
                  type: 'GET',
                  action: url
                });
              });
              window.$cookie.set('Authorization', autoData, res.data.expires);
            } else if (res.code === 2012023) {
              _this2.codeNow = true;
              _this2.codeError = '';
              _this2.pwdError = res.message;
              _this2.imgClick();
            } else if (res.code === 8003002) {
              _this2.codeNow = true;
              _this2.codeError = res.message;
              _this2.pwdError = '';
              _this2.imgClick();
            } else if (res.code === 8003004) {
              _this2.codeNow = true;
              _this2.codeError = res.message;
              _this2.pwdError = '';
              _this2.imgClick();
            } else {
              _this2.telError = res.message;
            }
          },
          onError: function onError(err, response) {
            console.log(err, response);
          }
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
        new window.WxLogin({
          id: 'login_weixin',
          appid: 'wx0fc7f448c3ed4e4e',
          scope: 'snsapi_login',
          redirect_uri: 'http%3a%2f%2f192.168.1.184%3a8180%2fweixin',
          state: 'blogin',
          style: '',
          href: ''
        });
      }
    }
  }
};

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

exports.default = upload;

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getError(action, option, xhr) {
  var msg = 'fail to post ' + action + ' ' + xhr.status + '\'';
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

var guidS4 = function guidS4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
};
var getGuid = function getGuid() {
  return guidS4() + guidS4() + guidS4() + guidS4() + guidS4() + guidS4() + guidS4() + guidS4();
};
var guid = window.$cookie.get('X-Session-Id') || getGuid();
window.$cookie.set('X-Session-Id', guid);

function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  var xhr = new XMLHttpRequest();
  var action = option.action;

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr), getBody(xhr));
    }

    return option.onSuccess(getBody(xhr));
  };
  if (option.type === 'POST') {
    xhr.open('post', action, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  } else {
    xhr.open('get', action, true);
  }

  xhr.setRequestHeader('X-Session-Id', guid);

  var headers = option.headers || {};

  (0, _keys2.default)(headers).forEach(function (item) {
    if (_o2.default.hOwnProperty(headers, item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  });

  if (option.type === 'POST') {
    xhr.send(option.data);
  } else {
    xhr.send();
  }
}

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _vm.show ? _c('div', {
      staticClass: "emfe-login",
      class: _vm.loginName
    }, [_c('div', {
      staticClass: "emfe-login-mask"
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-wrap"
    }, [_c('div', {
      staticClass: "emfe-login-header"
    }, [_c('div', {
      staticClass: "emfe-login-header-inner"
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-header-close",
      on: {
        "click": _vm.close
      }
    }, [_vm._v("＋")])]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.weixin,
        expression: "!weixin"
      }],
      staticClass: "emfe-login-main"
    }, [_c('emfe-tel', {
      attrs: {
        "className": "emfe-login",
        "datas": _vm.telsData,
        "placeholder": "请输入手机号"
      },
      model: {
        value: _vm.telNow,
        callback: function callback($$v) {
          _vm.telNow = $$v;
        },
        expression: "telNow"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-main-tips"
    }, [_vm._v(_vm._s(_vm.telError))]), _vm._v(" "), _c('emfe-input', {
      attrs: {
        "className": "emfe-login",
        "type": "password",
        "placeholder": "请输入密码"
      },
      model: {
        value: _vm.data.password,
        callback: function callback($$v) {
          _vm.data.password = $$v;
        },
        expression: "data.password"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-main-tips emfe-login-main-tips-two"
    }, [_vm._v(_vm._s(_vm.pwdError))]), _vm._v(" "), _c('emfe-imgcode', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.codeNow,
        expression: "codeNow"
      }],
      attrs: {
        "className": "emfe-login",
        "src": _vm.imgSrc
      },
      on: {
        "click": _vm.imgClick
      },
      model: {
        value: _vm.imgNow,
        callback: function callback($$v) {
          _vm.imgNow = $$v;
        },
        expression: "imgNow"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-main-tips emfe-login-main-tips-three"
    }, [_vm._v(_vm._s(_vm.codeError))]), _vm._v(" "), _c('emfe-button', {
      attrs: {
        "theme": "primary",
        "className": "emfe-login"
      },
      on: {
        "click": _vm.login
      }
    }, [_vm._v("登录")]), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-handle"
    }, [_c('emfe-checkout', {
      attrs: {
        "className": "emfe-login-handle",
        "title": "下次自动登录"
      },
      model: {
        value: _vm.autoLogin,
        callback: function callback($$v) {
          _vm.autoLogin = $$v;
        },
        expression: "autoLogin"
      }
    }), _vm._v(" "), _c('emfe-link', {
      attrs: {
        "className": "emfe-login-handle",
        "routers": {}
      },
      on: {
        "click": _vm.forgot
      }
    }, [_vm._v("忘记密码？")]), _vm._v(" "), _c('emfe-link', {
      attrs: {
        "className": "emfe-login-handle-child",
        "routers": {}
      },
      on: {
        "click": _vm.register
      }
    }, [_vm._v("注册登录")])], 1), _vm._v(" "), _c('emfe-titleline', {
      attrs: {
        "title": "微信登录"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-type"
    }, [_c('emfe-icon', {
      attrs: {
        "type": "weixin",
        "className": "emfe-login-type-weixin",
        "click": _vm.toggleType
      }
    })], 1)], 1), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.weixin,
        expression: "weixin"
      }],
      staticClass: "emfe-login-weixin"
    }, [_vm._m(0), _vm._v(" "), _c('emfe-titleline', {
      attrs: {
        "title": "账户登录"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-type"
    }, [_c('emfe-icon', {
      attrs: {
        "type": "xingming",
        "className": "emfe-login-type-account",
        "click": _vm.toggleType
      }
    })], 1)], 1)])]) : _vm._e();
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-login-weixin-code",
      attrs: {
        "id": "login_weixin"
      }
    }, [_c('img', {
      staticClass: "emfe-login-weixin-code-img",
      attrs: {
        "src": "https://static.evente.cn/evente/img/flag/v1/zg.jpg",
        "alt": "微信登录"
      }
    })]);
  }] };

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeLoginC = __webpack_require__(391);

var _EmfeLoginC2 = _interopRequireDefault(_EmfeLoginC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeLoginC2.default.install = function (Vue) {
  Vue.component(_EmfeLoginC2.default.name, _EmfeLoginC2.default);
};

exports.default = _EmfeLoginC2.default;

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(392),
  /* template */
  __webpack_require__(397),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

var _ajax = __webpack_require__(393);

var _ajax2 = _interopRequireDefault(_ajax);

var _loginedpc = __webpack_require__(394);

var _loginedpc2 = _interopRequireDefault(_loginedpc);

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeLoginC',
  data: function data() {
    return {
      title: '登录',
      now: {
        name: '中国',
        tel: '',
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg'
      },
      data1: [{
        name: '中国',
        tel: '',
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg'
      }, {
        name: '香港',
        tel: '',
        prefix: '852',
        url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg'
      }],
      sendData: {
        country_code: '',
        mobile: '',
        origin: 'c-login'
      },
      loginData: {
        org_id: '',
        code: '',
        phone: '',
        moudle_name: 'c-login',
        sms_code: ''
      },
      model: '',
      start: false,
      phoneError: '',
      phoneErrorFlg: false,
      phoneFlg: false,
      codeError: '',
      codeErrorFlg: false,
      codeFlg: false
    };
  },

  props: {
    className: {
      type: String,
      default: ''
    },
    show: {
      type: [Boolean, String],
      default: false
    },
    orgid: {
      type: Number,
      required: true
    },
    loginAction: {
      type: String,
      required: true
    },
    sendAction: {
      type: String,
      required: true
    },
    weixinAction: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    loginClose: {
      type: Function,
      default: function _default() {}
    }
  },
  computed: {
    loginName: function loginName() {
      return this.className ? this.className + '-login' : '';
    }
  },
  created: function created() {
    this.loginData.org_id = this.orgid;
  },

  methods: {
    close: function close() {
      this.loginClose(false);
    },
    phoneBlur: function phoneBlur() {
      if (this.now.tel === '') {
        this.phoneError = '请输入手机号';
        this.phoneFlg = false;
        this.phoneErrorFlg = true;
      } else if (this.$EmfeFormTest.phone(this.now.tel)) {
        this.phoneError = '';
        this.phoneFlg = true;
        this.phoneErrorFlg = false;
        this.sendData.mobile = this.now.tel;
        this.sendData.country_code = this.now.prefix;
        this.loginData.phone = this.now.tel;
        this.loginData.code = this.now.prefix;
      } else {
        this.phoneError = '请输入正确手机号';
        this.phoneFlg = false;
        this.phoneErrorFlg = true;
      }
    },
    codeBlur: function codeBlur() {
      if (this.model === '') {
        this.codeFlg = false;
        this.codeErrorFlg = true;
        this.codeError = '请输入验证码';
      } else {
        this.codeFlg = true;
        this.codeError = '';
        this.codeErrorFlg = false;
        this.loginData.sms_code = this.model;
      }
    },
    sendCode: function sendCode() {
      var _this = this;

      if (this.phoneFlg) {
        this.start = true;
        (0, _ajax2.default)({
          headers: this.headers,
          type: 'POST',
          data: (0, _stringify2.default)(this.sendData),
          action: this.sendAction,
          onSuccess: function onSuccess(res) {
            if (res.code === _contant2.default.AJAX_SUCCESS) {
              _this.phoneError = '';
            } else {
              _this.phoneError = res.message;
            }
          },
          onError: function onError(err, response) {
            console.log(err, response);
          }
        });
      } else {
        this.phoneBlur();
      }
    },
    login: function login() {
      var _this2 = this;

      if (this.codeFlg && this.phoneFlg) {
        (0, _ajax2.default)({
          headers: this.headers,
          type: 'POST',
          data: (0, _stringify2.default)(this.loginData),
          action: this.loginAction,
          onSuccess: function onSuccess(res) {
            if (res.code === _contant2.default.AJAX_SUCCESS) {
              (0, _loginedpc2.default)(res, res.data.org_id, _this2, function () {
                _this2.$emit('loginSuccess');
              });
            } else {
              _this2.phoneError = res.message;
              _this2.phoneErrorFlg = true;
            }
          },
          onError: function onError(err, response) {
            console.log(err, response);
          }
        });
      } else {
        this.phoneBlur();
        this.codeBlur();
      }
    },
    timeEnd: function timeEnd(val) {
      this.start = val;
    },
    weixinLogin: function weixinLogin() {
      (0, _ajax2.default)({
        headers: this.headers,
        type: 'GET',
        action: this.weixinAction + '/member/user/getWechatLoginUrl?scope=pc&state=' + this.loginData.org_id,
        onSuccess: function onSuccess(res) {
          if (res.code === _contant2.default.AJAX_SUCCESS) {
            window.location.href = res.data.url;
          }
        },
        onError: function onError(err, response) {
          console.log(err, response);
        }
      });
    }
  }
};

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

exports.default = upload;

var _o = __webpack_require__(3);

var _o2 = _interopRequireDefault(_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getError(action, option, xhr) {
  var msg = 'fail to post ' + action + ' ' + xhr.status + '\'';
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

var guidS4 = function guidS4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
};
var getGuid = function getGuid() {
  return guidS4() + guidS4() + guidS4() + guidS4() + guidS4() + guidS4() + guidS4() + guidS4();
};
var guid = window.$cookie.get('X-Session-Id') || getGuid();
window.$cookie.set('X-Session-Id', guid);

function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  var xhr = new XMLHttpRequest();
  var action = option.action;

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr), getBody(xhr));
    }

    return option.onSuccess(getBody(xhr));
  };
  if (option.type === 'POST') {
    xhr.open('post', action, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  } else {
    xhr.open('get', action, true);
  }

  xhr.setRequestHeader('X-Session-Id', guid);

  var headers = option.headers || {};

  (0, _keys2.default)(headers).forEach(function (item) {
    if (_o2.default.hOwnProperty(headers, item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  });

  if (option.type === 'POST') {
    xhr.send(option.data);
  } else {
    xhr.send();
  }
}

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emJsonp = __webpack_require__(395);

var _emJsonp2 = _interopRequireDefault(_emJsonp);

var _contant = __webpack_require__(5);

var _contant2 = _interopRequireDefault(_contant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var afterLogin = function afterLogin(callbackUrl, inow, self, callback) {
  var theIndex = inow;
  var urlSplit = callbackUrl[theIndex].split('?');
  var newUrl = urlSplit[0];
  var data = urlSplit[1];
  data = data.replace(/=/g, '":"').replace(/&/g, '","');
  data = JSON.parse('{"' + data + '"}');
  window.$jsonp({
    url: newUrl,
    data: data,
    success: function success(res) {
      if (res.code === _contant2.default.AJAX_SUCCESS) {
        if (theIndex === 0) {
          callback();
        } else {
          afterLogin(callbackUrl, --theIndex, self, callback);
        }
      } else {
        self.$EmfeMessage.error({
          content: '登录失败'
        });
      }
    },
    error: function error() {
      self.$EmfeMessage.error({
        content: '登录失败'
      });
    }
  });
};

exports.default = function (result, orgId, self, callback) {
  afterLogin(result.data.call_back_url, result.data.call_back_url.length - 1, self, function () {
    window.$cookie.set(_contant2.default.EVENT_TOKE + '?org_id=' + orgId, _contant2.default.COOKIE_PERFIX_TOKEN + ' ' + result.data.token, result.data.expires);
    window.$cookie.set('userInfo', result.data.real_name, result.data.expires);
    callback();
  });
};

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_o__ = __webpack_require__(396);


/*
 * url: string 请求地址
 * callback: string 回调的方法名 默认 callback
 * success: function 请求成功的回调
 * error: function 请求失败的回调
 * data: string 附加参数
 * time: number 超时时间
*/
function jsonp(params) {
  //创建script标签并加入到页面中
  var callbackName = params.callback || 'callback';
  var head = document.getElementsByTagName('head')[0];
  // 设置传递给后台的回调参数名
  var data = __WEBPACK_IMPORTED_MODULE_0__tools_o__["a" /* default */].formatParams(params.data || {}, callbackName);
  var script = document.createElement('script');
  head.appendChild(script);
  //创建jsonp回调函数
  window[callbackName] = function(json) {
    head.removeChild(script);
    clearTimeout(script.timer);
    window[callbackName] = null;
    if (params.success) {
      params.success(json);
    }
  };
  //发送请求
  script.src = params.url + '?' + data;
  //为了得知此次请求是否成功，设置超时处理
  if (params.time) {
    script.timer = setTimeout(function() {
      window[callbackName] = null;
      head.removeChild(script);
      if (params.error) {
        params.error({
          message: '超时',
        });
      }
    }, params.time);
  }
}

var VueJsonp = {
  install: function(Vue) {
    if (!Vue.prototype.$jsonp) {
      Object.defineProperties(Vue.prototype, {
        $jsonp: {
          get: function() {
            return VueJsonp;
          },
        },
      });
    }
  },
  jsonp: jsonp,
};

/* harmony default export */ __webpack_exports__["default"] = (VueJsonp);

if(typeof window!=='undefined' && !window.$jsonp){
  window.$jsonp = jsonp;
}


/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  hOwnProperty: function(item, attr) {
    return Object.prototype.hasOwnProperty.call(item, attr);
  },
  //格式化参数
  formatParams: function(data, callbackName) {
    var arr = [];
    Object.keys(data).forEach(function(dataKey) {
      arr.push(encodeURIComponent(dataKey) + '=' + encodeURIComponent(data[dataKey]));
    });
    // 添加一个随机数，防止缓存
    if (!this.hOwnProperty(data, 'callback')) {
      arr.push('callback=' + callbackName);
    }
    arr.push('v=' + this.random());
    return arr.join('&');
  },
  random: function() {
    return Math.floor((Math.random() * 10000) + 500);
  },
});


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _vm.show ? _c('div', {
      staticClass: "emfe-login-c",
      class: _vm.loginName
    }, [_c('div', {
      staticClass: "emfe-login-c-mask"
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-c-wrap"
    }, [_c('div', {
      staticClass: "emfe-login-c-header"
    }, [_c('div', {
      staticClass: "emfe-login-c-header-inner"
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-c-header-close",
      on: {
        "click": _vm.close
      }
    }, [_vm._v("＋")])]), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-c-main"
    }, [_c('emfe-tel', {
      attrs: {
        "errOk": _vm.phoneErrorFlg,
        "datas": _vm.data1,
        "placeholder": "请输入手机号",
        "className": "emfe-login-c"
      },
      on: {
        "blur": _vm.phoneBlur
      },
      model: {
        value: _vm.now,
        callback: function callback($$v) {
          _vm.now = $$v;
        },
        expression: "now"
      }
    }, [_c('div', {
      slot: "error"
    }, [_vm._v(_vm._s(_vm.phoneError))])]), _vm._v(" "), _c('emfe-smscode-c', {
      attrs: {
        "errOk": _vm.codeErrorFlg,
        "className": "emfe-login-c",
        "timeStart": _vm.start,
        "end": _vm.timeEnd,
        "click": _vm.sendCode,
        "disabled": false
      },
      on: {
        "blur": _vm.codeBlur
      },
      model: {
        value: _vm.model,
        callback: function callback($$v) {
          _vm.model = $$v;
        },
        expression: "model"
      }
    }, [_c('div', {
      slot: "error"
    }, [_vm._v(_vm._s(_vm.codeError))])]), _vm._v(" "), _c('p', {
      staticClass: "emfe-login-c-main-tipsText"
    }, [_vm._v("首次登录的手机号会自动为您创建账号")]), _vm._v(" "), _c('emfe-button-c', {
      attrs: {
        "theme": "primary",
        "className": "emfe-login-c",
        "disabled": false
      },
      on: {
        "click": _vm.login
      }
    }, [_vm._v("登录")]), _vm._v(" "), _c('emfe-titleline', {
      attrs: {
        "title": "微信登录"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "emfe-login-c-type"
    }, [_c('emfe-icon', {
      attrs: {
        "type": "weixin",
        "className": "emfe-login-c-type-weixin",
        "click": _vm.weixinLogin
      }
    })], 1)], 1)])]) : _vm._e();
  }, staticRenderFns: [] };

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeTitleLine = __webpack_require__(399);

var _EmfeTitleLine2 = _interopRequireDefault(_EmfeTitleLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeTitleLine2.default.install = function (Vue) {
  Vue.component(_EmfeTitleLine2.default.name, _EmfeTitleLine2.default);
};

exports.default = _EmfeTitleLine2.default;

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(400),
  /* template */
  __webpack_require__(401),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'emfe-titleline',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-titleline"
    }, [_vm._v(_vm._s(_vm.title))]);
  }, staticRenderFns: [] };

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeIscroll = __webpack_require__(403);

var _EmfeIscroll2 = _interopRequireDefault(_EmfeIscroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeIscroll2.default.install = function (Vue) {
  Vue.component(_EmfeIscroll2.default.name, _EmfeIscroll2.default);
};

exports.default = _EmfeIscroll2.default;

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(404),
  /* template */
  __webpack_require__(407),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iscroll = __webpack_require__(406);

var _iscroll2 = _interopRequireDefault(_iscroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EmfeIscroll',
  props: {
    options: {
      type: Object,
      default: function _default() {}
    },
    wrapperClass: {
      type: [Array, Object],
      default: function _default() {}
    },
    wrapperStyle: {
      type: Object,
      default: function _default() {}
    },
    scrollerClass: {
      type: [Array, Object],
      default: function _default() {}
    },
    scrollerStyle: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    registPullEvents: function registPullEvents() {
      var _this = this;

      var iscroll = this.iscroll;

      iscroll.on('scrollEnd', function (e) {
        if (iscroll.y <= iscroll.maxScrollY) {
          _this.$emit('pullUp', e, iscroll);
        } else if (iscroll.y >= 0) {
          _this.$emit('pullDown', e, iscroll);
        }
      });
    },
    zoom: function zoom() {
      var _this2 = this,
          _arguments = arguments;

      this.$nextTick(function () {
        return _this2.iscroll.zoom.apply(_this2.iscroll, _arguments);
      });
    },
    goToPage: function goToPage() {
      var _this3 = this,
          _arguments2 = arguments;

      this.$nextTick(function () {
        return _this3.iscroll.goToPage.apply(_this3.iscroll, _arguments2);
      });
    },
    next: function next() {
      var _this4 = this,
          _arguments3 = arguments;

      this.$nextTick(function () {
        return _this4.iscroll.next.apply(_this4.iscroll, _arguments3);
      });
    },
    prev: function prev() {
      var _this5 = this,
          _arguments4 = arguments;

      this.$nextTick(function () {
        return _this5.iscroll.prev.apply(_this5.iscroll, _arguments4);
      });
    },
    scrollToElement: function scrollToElement() {
      var _this6 = this,
          _arguments5 = arguments;

      this.$nextTick(function () {
        return _this6.iscroll.scrollToElement.apply(_this6.iscroll, _arguments5);
      });
    },
    scrollBy: function scrollBy() {
      var _this7 = this,
          _arguments6 = arguments;

      this.$nextTick(function () {
        return _this7.iscroll.scrollBy.apply(_this7.iscroll, _arguments6);
      });
    },
    scrollTo: function scrollTo() {
      var _this8 = this,
          _arguments7 = arguments;

      this.$nextTick(function () {
        return _this8.iscroll.scrollTo.apply(_this8.iscroll, _arguments7);
      });
    },
    refresh: function refresh() {
      var _this9 = this,
          _arguments8 = arguments;

      this.$nextTick(function () {
        return _this9.iscroll.refresh.apply(_this9.iscroll, _arguments8);
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.iscroll && this.iscroll.destroy();
    this.iscroll = null;
  },
  mounted: function mounted() {
    var _this10 = this;

    var events = ['beforeScrollStart', 'scrollCancel', 'scrollStart', 'scrollEnd', 'scroll', 'flick', 'zoomStart', 'zoomEnd'];
    setTimeout(function () {
      var key = void 0;
      var value = void 0;
      var attributes = _this10.$refs.scrollView.attributes;
      _this10.$refs.scrollView.scrollTop = 0;
      for (key in attributes) {
        value = attributes[key];
        if (value instanceof global.Attr && value.name.indexOf('data-v-') > -1) {
          _this10.$refs.scroller.attributes.setNamedItem(document.createAttribute(value.name));
        }
      }
      try {
        global.location.hash && _this10.iscroll.scrollToElement(global.location.hash, 0);
      } catch (e) {}
    }, 0);
    this.$nextTick(function () {
      _this10.iscroll = new _iscroll2.default(_this10.$refs.scrollView, _this10.options);
      events.forEach(function (event) {
        _this10.iscroll.on(event, function () {
          return _this10.$emit(event, _this10.iscroll);
        });
      });
      _this10.registPullEvents();
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(405)))

/***/ }),
/* 405 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ?
			'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	/*
	This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	- galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
	me.isBadAndroid = (function() {
		var appVersion = window.navigator.appVersion;
		// Android browser is not a chrome browser.
		if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
			var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
			if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
				return parseFloat(safariVersion[1]) < 535.19;
			} else {
				return true;
			}
		} else {
			return false;
		}
	})();

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();
function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS
		disablePointer : !utils.hasPointer,
		disableTouch : utils.hasPointer || !utils.hasTouch,
		disableMouse : utils.hasPointer || utils.hasTouch,
		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true,
		bindToWrapper: typeof window.onmousedown === "undefined"
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

	// Some defaults
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.2.0',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);
		clearTimeout(this.resizeTimeout);
 		this.resizeTimeout = null;
		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
		  // for button property
		  // http://unixpapa.com/js/mouse.html
		  var button;
	    if (!e.which) {
	      /* IE case */
	      button = (e.button < 2) ? 0 :
	               ((e.button == 4) ? 1 : 2);
	    } else {
	      /* All others */
	      button = e.button;
	    }
			if ( button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this._transitionTime();
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}

/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;
		var transitionType = this.options.useTransition && easing.style;
		if ( !time || transitionType ) {
				if(transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		var durationProp = utils.style.transitionDuration;
		this.scrollerStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.scrollerStyle[durationProp] === '0.0001ms') {
					self.scrollerStyle[durationProp] = '0s';
				}
			});
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},
	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			if (that.indicators) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = null;
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			if(!that.options.snap) {
				that._execEvent('scrollEnd');
			}
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
		this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( this.enabled && !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		var durationProp = utils.style.transitionDuration;
		this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
		// remove 0.0001ms
		var self = this;
		if(utils.isBadAndroid) {
			rAF(function() {
				if(self.wrapperStyle[durationProp] === '0.0001ms') {
					self.wrapperStyle[durationProp] = '0s';
				}
			});
		}
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.fadeScrollbars ) {
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
		}
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		this.indicatorStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.indicatorStyle[durationProp] === '0.0001ms') {
					self.indicatorStyle[durationProp] = '0s';
				}
			});
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( true ) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return IScroll; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      ref: "scrollView",
      class: _vm.wrapperClass,
      style: _vm.wrapperStyle
    }, [_c('div', {
      ref: "scroller",
      class: _vm.scrollerClass,
      style: _vm.scrollerStyle
    }, [_vm._t("default")], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeChangecount = __webpack_require__(409);

var _EmfeChangecount2 = _interopRequireDefault(_EmfeChangecount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeChangecount2.default.install = function (Vue) {
  Vue.component(_EmfeChangecount2.default.name, _EmfeChangecount2.default);
};

exports.default = _EmfeChangecount2.default;

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(410),
  /* template */
  __webpack_require__(411),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var itemHeight = 28;exports.default = {
  name: 'EmfeChangecount',
  props: {
    count: {
      type: Number,
      default: 0
    },
    time: {
      type: Number,
      default: 0.3
    },
    className: String
  },
  computed: {
    changecountName: function changecountName() {
      return this.className ? this.className + '-changecount' : '';
    },
    boxName: function boxName() {
      return this.className ? this.className + '-changecount-box' : '';
    },
    countName: function countName() {
      return this.className ? this.className + '-changecount-box-count' : '';
    }
  },
  data: function data() {
    return {
      countArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      countList: [],
      currentIndex: []
    };
  },
  created: function created() {
    this.init();
    this.move();
  },

  methods: {
    init: function init() {
      var _this = this;

      this.countList = this.count.toString().split('');
      this.countList.forEach(function () {
        return _this.currentIndex.push(0);
      });
    },
    move: function move() {
      var _this2 = this;

      setTimeout(function () {
        _this2.currentIndex = [];

        for (var k = 0; k < _this2.countList.length; k++) {
          _this2.currentIndex.push(_this2.countList[k] * itemHeight);
        }
      }, 0);
    }
  },
  watch: {
    count: function count(val, oldval) {
      if (val !== oldval) {
        this.count = val;
        this.init();
        this.move();
      }
    }
  }
};

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "emfe-changecount",
      class: _vm.changecountName
    }, _vm._l(_vm.countList, function (l, i) {
      return _c('div', {
        staticClass: "emfe-changecount-box",
        class: _vm.boxName,
        style: {
          transform: "translate3d(0, " + -_vm.currentIndex[i] + "px, 0)",
          'transition-duration': _vm.time + "s"
        }
      }, _vm._l(_vm.countArr, function (item, index) {
        return _c('span', {
          staticClass: "emfe-changecount-box-count",
          class: _vm.countName
        }, [_vm._v(_vm._s(item))]);
      }));
    }));
  }, staticRenderFns: [] };

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeSwiper = __webpack_require__(413);

var _EmfeSwiper2 = _interopRequireDefault(_EmfeSwiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeSwiper2.default.install = function (Vue) {
  Vue.component(_EmfeSwiper2.default.name, _EmfeSwiper2.default);
};

exports.default = _EmfeSwiper2.default;

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(414),
  /* template */
  __webpack_require__(417),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addClass = __webpack_require__(415);

var _addClass2 = _interopRequireDefault(_addClass);

var _betterScroll = __webpack_require__(416);

var _betterScroll2 = _interopRequireDefault(_betterScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data: function data() {
    return {
      dots: [],
      currentPageIndex: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.setSliderWidth();
      _this.initDots();
      _this.initSlider();

      if (_this.autoPlay) {
        _this.play();
      }
    }, 20);

    window.addEventListener('resize', function () {
      if (!_this.slider || !_this.slider.enabled) {
        return;
      }
      clearTimeout(_this.resizeTimer);
      _this.resizeTimer = setTimeout(function () {
        if (_this.slider.isInTransition) {
          _this.onScrollEnd();
        } else {
          if (_this.autoPlay) {
            _this.play();
          }
        }
        _this.refresh();
      }, 60);
    });
  },
  activated: function activated() {
    this.slider.enable();
    var pageIndex = this.slider.getCurrentPage().pageX;
    this.slider.goToPage(pageIndex, 0, 0);
    this.currentPageIndex = pageIndex;
    if (this.autoPlay) {
      this.play();
    }
  },
  deactivated: function deactivated() {
    this.slider.disable();
    clearTimeout(this.timer);
  },
  beforeDestroy: function beforeDestroy() {
    this.slider.disable();
    clearTimeout(this.timer);
  },

  methods: {
    refresh: function refresh() {
      if (this.slider) {
        this.setSliderWidth(true);
        this.slider.refresh();
      }
    },
    setSliderWidth: function setSliderWidth(isResize) {
      this.children = this.$refs.swiperGroup.children;

      var width = 0;
      var sliderWidth = this.$refs.swiper.clientWidth;
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        (0, _addClass2.default)(child, 'emfe-swiper-group-item');

        child.style.width = sliderWidth + 'px';
        width += sliderWidth;
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth;
      }
      this.$refs.swiperGroup.style.width = width + 'px';
    },
    initSlider: function initSlider() {
      var _this2 = this;

      this.slider = new _betterScroll2.default(this.$refs.swiper, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      });

      this.slider.on('scrollEnd', this.onScrollEnd);

      this.slider.on('touchend', function () {
        if (_this2.autoPlay) {
          _this2.play();
        }
      });

      this.slider.on('beforeScrollStart', function () {
        if (_this2.autoPlay) {
          clearTimeout(_this2.timer);
        }
      });
    },
    onScrollEnd: function onScrollEnd() {
      var pageIndex = this.slider.getCurrentPage().pageX;
      this.currentPageIndex = pageIndex;
      if (this.autoPlay) {
        this.play();
      }
    },
    initDots: function initDots() {
      this.dots = new Array(this.children.length);
    },
    play: function play() {
      var _this3 = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this3.slider.next();
      }, this.interval);
    }
  }
};

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el, className) {
  return el.classList.add(className);
};

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * better-normal-scroll v1.10.3
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function eventMixin(BScroll) {
  BScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  BScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    function magic() {
      this.off(type, magic);

      fn.apply(context, arguments);
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn;

    this.on(type, magic);
  };

  BScroll.prototype.off = function (type, fn) {
    var _events = this._events[type];
    if (!_events) {
      return;
    }

    var count = _events.length;
    while (count--) {
      if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
        _events[count][0] = undefined;
      }
    }
  };

  BScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}

function extend(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; i++) {
    var source = rest[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

function isUndef(v) {
  return v === undefined || v === null;
}

var elementStyle = inBrowser && document.createElement('div').style;

var vendor = function () {
  if (!inBrowser) {
    return false;
  }
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend';
    }
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture });
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture });
}

function offset(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left -= el.offsetLeft;
    top -= el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
}

var transform = prefixStyle('transform');

var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransform = transform !== false;
var hasTransition = inBrowser && prefixStyle('transition') in elementStyle;

var style = {
  transform: transform,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionProperty: prefixStyle('transitionProperty'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = 1;
var MOUSE_EVENT = 2;

var eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
};

function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
}

function preventDefaultException(el, exceptions) {
  for (var i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true;
    }
  }
  return false;
}

function tap(e, eventName) {
  var ev = document.createEvent('Event');
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

function click(e) {
  var eventSource = void 0;
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0];
  }
  var posSrc = {};
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0;
    posSrc.screenY = eventSource.screenY || 0;
    posSrc.clientX = eventSource.clientX || 0;
    posSrc.clientY = eventSource.clientY || 0;
  }
  var ev = void 0;
  var event = 'click';
  var bubbles = true;
  var cancelable = true;
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, extend({
        bubbles: bubbles,
        cancelable: cancelable
      }, posSrc));
    } catch (e) {
      createEvent();
    }
  } else {
    createEvent();
  }

  function createEvent() {
    ev = document.createEvent('Event');
    ev.initEvent(event, bubbles, cancelable);
    extend(ev, posSrc);
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true;
  ev._constructed = true;
  e.target.dispatchEvent(ev);
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

function removeChild(el, child) {
  el.removeChild(child);
}

var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.001,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  /**
   * for mouse wheel
   * mouseWheel: {
   *   speed: 20,
   *   invert: false,
   *   easeTime: 300
   * }
   */
  mouseWheel: false,
  stopPropagation: false
};

function initMixin(BScroll) {
  BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    if (this.options.observeDOM) {
      this._initDOMObserver();
    }

    if (this.options.autoBlur) {
      this._handleAutoBlur();
    }

    this.refresh();

    if (!this.options.snap) {
      this.scrollTo(this.options.startX, this.options.startY);
    }

    this.enable();
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options);

    this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && hasTransition;
    this.options.useTransform = this.options.useTransform && hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  BScroll.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._handleDOMEvents = function (eventOperation) {
    var target = this.options.bindToWrapper ? this.wrapper : window;
    eventOperation(window, 'orientationchange', this);
    eventOperation(window, 'resize', this);

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, style.transitionEnd, this);
  };

  BScroll.prototype._initExtFeatures = function () {
    if (this.options.snap) {
      this._initSnap();
    }
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
    if (this.options.wheel) {
      this._initWheel();
    }
    if (this.options.mouseWheel) {
      this._initMouseWheel();
    }
  };

  BScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return;
    }
    var me = this;
    var isInTransition = false;
    Object.defineProperty(this, 'isInTransition', {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        // fix issue #359
        var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
        var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
        for (var i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents;
        }
      }
    });
  };

  BScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', function () {
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur();
      }
    });
  };

  BScroll.prototype._initDOMObserver = function () {
    var _this = this;

    if (typeof MutationObserver !== 'undefined') {
      var timer = void 0;
      var observer = new MutationObserver(function (mutations) {
        // don't do any refresh during the transition, or outside of the boundaries
        if (_this._shouldNotRefresh()) {
          return;
        }
        var immediateRefresh = false;
        var deferredRefresh = false;
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];
          if (mutation.type !== 'attributes') {
            immediateRefresh = true;
            break;
          } else {
            if (mutation.target !== _this.scroller) {
              deferredRefresh = true;
              break;
            }
          }
        }
        if (immediateRefresh) {
          _this.refresh();
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (!_this._shouldNotRefresh()) {
              _this.refresh();
            }
          }, 60);
        }
      });
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      observer.observe(this.scroller, config);

      this.on('destroy', function () {
        observer.disconnect();
      });
    } else {
      this._checkDOMUpdate();
    }
  };

  BScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > 0 || this.x < this.maxScrollX || this.y > 0 || this.y < this.maxScrollY;

    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };

  BScroll.prototype._checkDOMUpdate = function () {
    var scrollerRect = getRect(this.scroller);
    var oldWidth = scrollerRect.width;
    var oldHeight = scrollerRect.height;

    function check() {
      if (this.destroyed) {
        return;
      }
      scrollerRect = getRect(this.scroller);
      var newWidth = scrollerRect.width;
      var newHeight = scrollerRect.height;

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh();
      }
      oldWidth = newWidth;
      oldHeight = newHeight;

      next.call(this);
    }

    function next() {
      var _this2 = this;

      setTimeout(function () {
        check.call(_this2);
      }, 1000);
    }

    next.call(this);
  };

  BScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        break;
      case 'touchmove':
      case 'mousemove':
        this._move(e);
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        this._end(e);
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'click':
        if (this.enabled && !e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        break;
      case 'wheel':
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e);
        break;
    }
  };

  BScroll.prototype.refresh = function () {
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = getRect(this.scroller);
    this.scrollerWidth = scrollerRect.width;
    this.scrollerHeight = scrollerRect.height;

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex || 0;
      }
      this.options.startY = -this.selectedIndex * this.itemHeight;
      this.maxScrollX = 0;
      this.maxScrollY = -this.itemHeight * (this.items.length - 1);
    } else {
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = 0;
      this.scrollerWidth = this.wrapperWidth;
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = 0;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.wrapperOffset = offset(this.wrapper);

    this.trigger('refresh');

    this.resetPosition();
  };

  BScroll.prototype.enable = function () {
    this.enabled = true;
  };

  BScroll.prototype.disable = function () {
    this.enabled = false;
  };
}

var ease = {
	// easeOutQuint
	swipe: {
		style: 'cubic-bezier(0.23, 1, 0.32, 1)',
		fn: function fn(t) {
			return 1 + --t * t * t * t * t;
		}
	},
	// easeOutQuard
	swipeBounce: {
		style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		fn: function fn(t) {
			return t * (2 - t);
		}
	},
	// easeOutQuart
	bounce: {
		style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
		fn: function fn(t) {
			return 1 - --t * t * t * t;
		}
	}
};

function momentum(current, start, time, lowerMargin, wrapperSize, options) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;

  var deceleration = options.deceleration,
      itemHeight = options.itemHeight,
      swipeBounceTime = options.swipeBounceTime,
      wheel = options.wheel,
      swipeTime = options.swipeTime;

  var duration = swipeTime;
  var rate = wheel ? 4 : 15;

  var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight;
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > 0) {
    destination = wrapperSize ? Math.min(wrapperSize / 4, wrapperSize / rate * speed) : 0;
    duration = swipeBounceTime;
  }

  return {
    destination: Math.round(destination),
    duration: duration
  };
}

var DEFAULT_INTERVAL = 100 / 60;

function noop() {}

var requestAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

var DIRECTION_UP = 1;
var DIRECTION_DOWN = -1;
var DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = -1;

var PROBE_DEBOUNCE = 1;

var PROBE_REALTIME = 3;

function warn(msg) {
  console.error('[BScroll warn]: ' + msg);
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error('[BScroll] ' + msg);
  }
}

function coreMixin(BScroll) {
  BScroll.prototype._start = function (e) {
    var _eventType = eventType[e.type];
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.moved = false;
    this.distX = 0;
    this.distY = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.movingDirectionX = 0;
    this.movingDirectionY = 0;
    this.directionLocked = 0;

    this._transitionTime();
    this.startTime = getNow();

    if (this.options.wheel) {
      this.target = e.target;
    }

    this.stop();

    var point = e.touches ? e.touches[0] : e;

    this.startX = this.x;
    this.startY = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.trigger('beforeScrollStart');
  };

  BScroll.prototype._move = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var point = e.touches ? e.touches[0] : e;
    var deltaX = point.pageX - this.pointX;
    var deltaY = point.pageY - this.pointY;

    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

    var timestamp = getNow();

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked && !this.options.freeScroll) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h'; // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v'; // lock vertically
      } else {
        this.directionLocked = 'n'; // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false;
        return;
      }
      deltaY = 0;
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false;
        return;
      }
      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;
    this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    var top = false;
    var bottom = false;
    var left = false;
    var right = false;
    // Slow down or stop if outside of the boundaries
    var bounce = this.options.bounce;
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top;
      bottom = bounce.bottom === undefined ? true : bounce.bottom;
      left = bounce.left === undefined ? true : bounce.left;
      right = bounce.right === undefined ? true : bounce.right;
    }
    if (newX > 0 || newX < this.maxScrollX) {
      if (newX > 0 && left || newX < this.maxScrollX && right) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > 0 ? 0 : this.maxScrollX;
      }
    }
    if (newY > 0 || newY < this.maxScrollY) {
      if (newY > 0 && top || newY < this.maxScrollY && bottom) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > 0 ? 0 : this.maxScrollY;
      }
    }

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if (this.options.probeType === PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    if (this.options.probeType > PROBE_DEBOUNCE) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    }

    var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    var pX = this.pointX - scrollLeft;
    var pY = this.pointY - scrollTop;

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
      this._end(e);
    }
  };

  BScroll.prototype._end = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    });

    this.isInTransition = false;

    // ensures that the last position is rounded
    var newX = Math.round(this.x);
    var newY = Math.round(this.y);

    var deltaX = newX - this.absStartX;
    var deltaY = newY - this.absStartY;
    this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.directionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return;
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel');
      return;
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }

    this.scrollTo(newX, newY);

    this.endTime = getNow();
    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

    // flick
    if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
      this.trigger('flick');
      return;
    }

    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var top = false;
      var bottom = false;
      var left = false;
      var right = false;
      var bounce = this.options.bounce;
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top;
        bottom = bounce.bottom === undefined ? true : bounce.bottom;
        left = bounce.left === undefined ? true : bounce.left;
        right = bounce.right === undefined ? true : bounce.right;
      }
      var wrapperWidth = this.directionX === DIRECTION_RIGHT && left || this.directionX === DIRECTION_LEFT && right ? this.wrapperWidth : 0;
      var wrapperHeight = this.directionY === DIRECTION_DOWN && top || this.directionY === DIRECTION_UP && bottom ? this.wrapperHeight : 0;
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, wrapperWidth, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, wrapperHeight, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = Math.round(newY / this.itemHeight) * this.itemHeight;
        time = this.options.wheel.adjustTime || 400;
      }
    }

    var easing = ease.swipe;
    if (this.options.snap) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = this.options.snap.easing || ease.bounce;
    }

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    if (this.options.wheel) {
      this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight));
    }
    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  BScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    var preventClick = this.stopFromTransition && !this.pulling;
    this.stopFromTransition = false;

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (this.options.wheel) {
        if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
          var index = Math.abs(Math.round(this.y / this.itemHeight));
          var _offset = Math.round((this.pointY + offset(this.target).top - this.itemHeight / 2) / this.itemHeight);
          this.target = this.items[index + _offset];
        }
        this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
        return true;
      } else {
        if (!preventClick) {
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
            click(e);
          }
          return true;
        }
        return false;
      }
    }
    return false;
  };

  BScroll.prototype._resize = function () {
    var _this = this;

    if (!this.enabled) {
      return;
    }
    // fix a scroll problem under Android condition
    if (isAndroid) {
      this.wrapper.scrollTop = 0;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  BScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer);
    this.probeTimer = requestAnimationFrame(probe);

    var me = this;

    function probe() {
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos);
        return;
      }
      me.probeTimer = requestAnimationFrame(probe);
    }
  };

  BScroll.prototype._transitionProperty = function () {
    var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

    this.scrollerStyle[style.transitionProperty] = property;
  };

  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[style.transitionDuration] = time + 'ms';

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionDuration] = time + 'ms';
      }
    }

    if (this.indicators) {
      for (var _i = 0; _i < this.indicators.length; _i++) {
        this.indicators[_i].transitionTime(time);
      }
    }
  };

  BScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[style.transitionTimingFunction] = easing;

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionTimingFunction] = easing;
      }
    }

    if (this.indicators) {
      for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
        this.indicators[_i2].transitionTimingFunction(easing);
      }
    }
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

    this._transitionTime();
    var needReset = !this.pulling || this.movingDirectionY === DIRECTION_UP;
    if (needReset && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false;
      if (this.options.probeType !== PROBE_REALTIME) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
    }
  };

  BScroll.prototype._translate = function (x, y) {
    assert(!isUndef(x) && !isUndef(y), 'Oops! translate x or y is null or undefined. please check your code.');
    if (this.options.useTransform) {
      this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }

    if (this.options.wheel) {
      var _options$wheel$rotate = this.options.wheel.rotate,
          rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

      for (var i = 0; i < this.items.length; i++) {
        var deg = rotate * (y / this.itemHeight + i);
        this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
      }
    }

    this.x = x;
    this.y = y;

    if (this.indicators) {
      for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
        this.indicators[_i3].updatePosition();
      }
    }
  };

  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startTime = getNow();
    var destTime = startTime + duration;

    function step() {
      var now = getNow();

      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY);

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;

      me._translate(newX, newY);

      if (me.isAnimating) {
        me.animateTimer = requestAnimationFrame(step);
      }

      if (me.options.probeType === PROBE_REALTIME) {
        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });
      }
    }

    this.isAnimating = true;
    cancelAnimationFrame(this.animateTimer);
    step();
  };

  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    x = this.x + x;
    y = this.y + y;

    this.scrollTo(x, y, time, easing);
  };

  BScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

    if (!time || this.options.useTransition) {
      this._transitionProperty();
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);

      if (time && this.options.probeType === PROBE_REALTIME) {
        this._startProbe();
      }

      if (this.options.wheel) {
        if (y > 0) {
          this.selectedIndex = 0;
        } else if (y < this.maxScrollY) {
          this.selectedIndex = this.items.length - 1;
        } else {
          this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
        }
      }
    } else {
      this._animate(x, y, time, easing.fn);
    }
  };

  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    if (this.options.wheel && el.className !== this.options.wheel.wheelItemClass) {
      return;
    }

    var pos = offset(el);
    pos.left -= this.wrapperOffset.left;
    pos.top -= this.wrapperOffset.top;

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
    }

    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

    if (this.options.wheel) {
      pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };

  BScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

    var x = this.x;
    var roundX = Math.round(x);
    if (!this.hasHorizontalScroll || roundX > 0) {
      x = 0;
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    var roundY = Math.round(y);
    if (!this.hasVerticalScroll || roundY > 0) {
      y = 0;
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY;
    }

    if (x === this.x && y === this.y) {
      return false;
    }

    this.scrollTo(x, y, time, easeing);

    return true;
  };

  BScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    if (this.options.useTransform) {
      matrix = matrix[style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return {
      x: x,
      y: y
    };
  };

  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[Math.round(-pos.y / this.itemHeight)];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');

    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}

function snapMixin(BScroll) {
  BScroll.prototype._initSnap = function () {
    var _this = this;

    this.currentPage = {};
    var snap = this.options.snap;

    if (snap.loop) {
      var children = this.scroller.children;
      if (children.length > 1) {
        prepend(children[children.length - 1].cloneNode(true), this.scroller);
        this.scroller.appendChild(children[1].cloneNode(true));
      } else {
        // Loop does not make any sense if there is only one child.
        snap.loop = false;
      }
    }

    var el = snap.el;
    if (typeof el === 'string') {
      el = this.scroller.querySelectorAll(el);
    }

    this.on('refresh', function () {
      _this.pages = [];

      if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
        return;
      }

      var stepX = snap.stepX || _this.wrapperWidth;
      var stepY = snap.stepY || _this.wrapperHeight;

      var x = 0;
      var y = void 0;
      var cx = void 0;
      var cy = void 0;
      var i = 0;
      var l = void 0;
      var m = 0;
      var n = void 0;
      var rect = void 0;
      if (!el) {
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);

        while (x > -_this.scrollerWidth) {
          _this.pages[i] = [];
          l = 0;
          y = 0;

          while (y > -_this.scrollerHeight) {
            _this.pages[i][l] = {
              x: Math.max(x, _this.maxScrollX),
              y: Math.max(y, _this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        l = el.length;
        n = -1;

        for (; i < l; i++) {
          rect = getRect(el[i]);
          if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
            m = 0;
            n++;
          }

          if (!_this.pages[m]) {
            _this.pages[m] = [];
          }

          x = Math.max(-rect.left, _this.maxScrollX);
          y = Math.max(-rect.top, _this.maxScrollY);
          cx = x - Math.round(rect.width / 2);
          cy = y - Math.round(rect.height / 2);

          _this.pages[m][n] = {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            cx: cx,
            cy: cy
          };

          if (x > _this.maxScrollX) {
            m++;
          }
        }
      }

      _this._checkSnapLoop();

      var initPageX = snap._loopX ? 1 : 0;
      var initPageY = snap._loopY ? 1 : 0;
      _this._goToPage(_this.currentPage.pageX || initPageX, _this.currentPage.pageY || initPageY, 0);

      // Update snap threshold if needed.
      var snapThreshold = snap.threshold;
      if (snapThreshold % 1 === 0) {
        _this.snapThresholdX = snapThreshold;
        _this.snapThresholdY = snapThreshold;
      } else {
        _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
        _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
      }
    });

    this.on('scrollEnd', function () {
      if (snap.loop) {
        if (snap._loopX) {
          if (_this.currentPage.pageX === 0) {
            _this._goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
          }
          if (_this.currentPage.pageX === _this.pages.length - 1) {
            _this._goToPage(1, _this.currentPage.pageY, 0);
          }
        } else {
          if (_this.currentPage.pageY === 0) {
            _this._goToPage(_this.currentPage.pageX, _this.pages[0].length - 2, 0);
          }
          if (_this.currentPage.pageY === _this.pages[0].length - 1) {
            _this._goToPage(_this.currentPage.pageX, 1, 0);
          }
        }
      }
    });

    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

        _this._goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
      });
    }

    this.on('destroy', function () {
      if (snap.loop) {
        var _children = _this.scroller.children;
        if (_children.length > 2) {
          removeChild(_this.scroller, _children[_children.length - 1]);
          removeChild(_this.scroller, _children[0]);
        }
      }
    });
  };

  BScroll.prototype._checkSnapLoop = function () {
    var snap = this.options.snap;

    if (!snap.loop || !this.pages || !this.pages.length) {
      return;
    }

    if (this.pages.length > 1) {
      snap._loopX = true;
    }
    if (this.pages[0] && this.pages[0].length > 1) {
      snap._loopY = true;
    }
    if (snap._loopX && snap._loopY) {
      warn('Loop does not support two direction at the same time.');
    }
  };

  BScroll.prototype._nearestSnap = function (x, y) {
    if (!this.pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0;
    // Check if we exceeded the snap threshold
    if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
      return this.currentPage;
    }

    if (x > 0) {
      x = 0;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > 0) {
      y = 0;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    var l = this.pages.length;
    for (; i < l; i++) {
      if (x >= this.pages[i][0].cx) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    var m = 0;
    for (; m < l; m++) {
      if (y >= this.pages[0][m].cy) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if (i === this.currentPage.pageX) {
      i += this.directionX;

      if (i < 0) {
        i = 0;
      } else if (i >= this.pages.length) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if (m === this.currentPage.pageY) {
      m += this.directionY;

      if (m < 0) {
        m = 0;
      } else if (m >= this.pages[0].length) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  };

  BScroll.prototype._goToPage = function (x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments[2];
    var easing = arguments[3];

    var snap = this.options.snap;

    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    easing = easing || snap.easing || ease.bounce;

    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (!this.pages[x]) {
      return;
    }

    if (y >= this.pages[x].length) {
      y = this.pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    var posX = this.pages[x][y].x;
    var posY = this.pages[x][y].y;

    time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };
    this.scrollTo(posX, posY, time, easing);
  };

  BScroll.prototype.goToPage = function (x, y, time, easing) {
    var snap = this.options.snap;
    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    if (snap.loop) {
      var len = void 0;
      if (snap._loopX) {
        len = this.pages.length - 2;
        if (x >= len) {
          x = len - 1;
        } else if (x < 0) {
          x = 0;
        }
        x += 1;
      } else {
        len = this.pages[0].length - 2;
        if (y >= len) {
          y = len - 1;
        } else if (y < 0) {
          y = 0;
        }
        y += 1;
      }
    }
    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.next = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x++;
    if (x >= this.pages.length && this.hasVerticalScroll) {
      x = 0;
      y++;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.prev = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x--;
    if (x < 0 && this.hasVerticalScroll) {
      x = 0;
      y--;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.getCurrentPage = function () {
    var snap = this.options.snap;
    if (!snap) {
      return null;
    }

    if (snap.loop) {
      var currentPage = void 0;
      if (snap._loopX) {
        currentPage = extend({}, this.currentPage, {
          pageX: this.currentPage.pageX - 1
        });
      } else {
        currentPage = extend({}, this.currentPage, {
          pageY: this.currentPage.pageY - 1
        });
      }
      return currentPage;
    }
    return this.currentPage;
  };
}

function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function () {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (this.options.wheel) {
      this.y = -index * this.itemHeight;
      this.scrollTo(0, this.y);
    }
  };

  BScroll.prototype.getSelectedIndex = function () {
    return this.options.wheel && this.selectedIndex;
  };

  BScroll.prototype._initWheel = function () {
    var wheel = this.options.wheel;
    if (!wheel.wheelWrapperClass) {
      wheel.wheelWrapperClass = 'wheel-scroll';
    }
    if (!wheel.wheelItemClass) {
      wheel.wheelItemClass = 'wheel-item';
    }
    if (wheel.selectedIndex === undefined) {
      wheel.selectedIndex = 0;
      warn('wheel option selectedIndex is required!');
    }
  };
}

var INDICATOR_MIN_LEN = 8;

function scrollbarMixin(BScroll) {
  BScroll.prototype._initScrollbar = function () {
    var _this = this;

    var _options$scrollbar = this.options.scrollbar,
        _options$scrollbar$fa = _options$scrollbar.fade,
        fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa,
        _options$scrollbar$in = _options$scrollbar.interactive,
        interactive = _options$scrollbar$in === undefined ? false : _options$scrollbar$in;

    this.indicators = [];
    var indicator = void 0;

    if (this.options.scrollX) {
      indicator = {
        el: createScrollbar('horizontal'),
        direction: 'horizontal',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);

      this.indicators.push(new Indicator(this, indicator));
    }

    if (this.options.scrollY) {
      indicator = {
        el: createScrollbar('vertical'),
        direction: 'vertical',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);
      this.indicators.push(new Indicator(this, indicator));
    }

    this.on('refresh', function () {
      for (var i = 0; i < _this.indicators.length; i++) {
        _this.indicators[i].refresh();
      }
    });

    if (fade) {
      this.on('scrollEnd', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollCancel', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true);
        }
      });

      this.on('beforeScrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true, true);
        }
      });
    }

    this.on('destroy', function () {
      _this._removeScrollBars();
    });
  };

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].destroy();
    }
  };
}

function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

  scrollbar.style.cssText += ';overflow:hidden';
  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator(scroller, options) {
  this.wrapper = options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;
  this.direction = options.direction;
  if (options.fade) {
    this.visible = 0;
    this.wrapperStyle.opacity = '0';
  } else {
    this.visible = 1;
  }

  this.sizeRatioX = 1;
  this.sizeRatioY = 1;
  this.maxPosX = 0;
  this.maxPosY = 0;
  this.x = 0;
  this.y = 0;

  if (options.interactive) {
    this._addDOMEvents();
  }
}

Indicator.prototype.handleEvent = function (e) {
  switch (e.type) {
    case 'touchstart':
    case 'mousedown':
      this._start(e);
      break;
    case 'touchmove':
    case 'mousemove':
      this._move(e);
      break;
    case 'touchend':
    case 'mouseup':
    case 'touchcancel':
    case 'mousecancel':
      this._end(e);
      break;
  }
};

Indicator.prototype.refresh = function () {
  if (this._shouldShow()) {
    this.transitionTime();
    this._calculate();
    this.updatePosition();
  }
};

Indicator.prototype.fade = function (visible, hold) {
  var _this2 = this;

  if (hold && !this.visible) {
    return;
  }

  var time = visible ? 250 : 500;

  visible = visible ? '1' : '0';

  this.wrapperStyle[style.transitionDuration] = time + 'ms';

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

Indicator.prototype.updatePosition = function () {
  if (this.direction === 'vertical') {
    var y = Math.round(this.sizeRatioY * this.scroller.y);

    if (y < 0) {
      this.transitionTime(500);
      var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = height + 'px';
      y = 0;
    } else if (y > this.maxPosY) {
      this.transitionTime(500);
      var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = _height + 'px';
      y = this.maxPosY + this.indicatorHeight - _height;
    } else {
      this.indicatorStyle.height = this.indicatorHeight + 'px';
    }
    this.y = y;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.top = y + 'px';
    }
  } else {
    var x = Math.round(this.sizeRatioX * this.scroller.x);

    if (x < 0) {
      this.transitionTime(500);
      var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = width + 'px';
      x = 0;
    } else if (x > this.maxPosX) {
      this.transitionTime(500);
      var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = _width + 'px';
      x = this.maxPosX + this.indicatorWidth - _width;
    } else {
      this.indicatorStyle.width = this.indicatorWidth + 'px';
    }

    this.x = x;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
    }
  }
};

Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  this.indicatorStyle[style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[style.transitionTimingFunction] = easing;
};

Indicator.prototype.destroy = function () {
  this._removeDOMEvents();
  this.wrapper.parentNode.removeChild(this.wrapper);
};

Indicator.prototype._start = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  this.transitionTime();

  this.initiated = true;
  this.moved = false;
  this.lastPointX = point.pageX;
  this.lastPointY = point.pageY;

  this.startTime = getNow();

  this._handleMoveEvents(addEvent);
  this.scroller.trigger('beforeScrollStart');
};

Indicator.prototype._move = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  if (!this.moved) {
    this.scroller.trigger('scrollStart');
  }

  this.moved = true;

  var deltaX = point.pageX - this.lastPointX;
  this.lastPointX = point.pageX;

  var deltaY = point.pageY - this.lastPointY;
  this.lastPointY = point.pageY;

  var newX = this.x + deltaX;
  var newY = this.y + deltaY;

  this._pos(newX, newY);
};

Indicator.prototype._end = function (e) {
  if (!this.initiated) {
    return;
  }
  this.initiated = false;

  e.preventDefault();
  e.stopPropagation();

  this._handleMoveEvents(removeEvent);

  var snapOption = this.scroller.options.snap;
  if (snapOption) {
    var speed = snapOption.speed,
        _snapOption$easing = snapOption.easing,
        easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;

    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

    var time = speed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

    if (this.scroller.x !== snap.x || this.scroller.y !== snap.y) {
      this.scroller.directionX = 0;
      this.scroller.directionY = 0;
      this.scroller.currentPage = snap;
      this.scroller.scrollTo(snap.x, snap.y, time, easing);
    }
  }

  if (this.moved) {
    this.scroller.trigger('scrollEnd', {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};

Indicator.prototype._pos = function (x, y) {
  if (x < 0) {
    x = 0;
  } else if (x > this.maxPosX) {
    x = this.maxPosX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > this.maxPosY) {
    y = this.maxPosY;
  }

  x = Math.round(x / this.sizeRatioX);
  y = Math.round(y / this.sizeRatioY);

  this.scroller.scrollTo(x, y);
  this.scroller.trigger('scroll', {
    x: this.scroller.x,
    y: this.scroller.y
  });
};

Indicator.prototype._shouldShow = function () {
  if (this.direction === 'vertical' && this.scroller.hasVerticalScroll || this.direction === 'horizontal' && this.scroller.hasHorizontalScroll) {
    this.wrapper.style.display = '';
    return true;
  }
  this.wrapper.style.display = 'none';
  return false;
};

Indicator.prototype._calculate = function () {
  if (this.direction === 'vertical') {
    var wrapperHeight = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.height = this.indicatorHeight + 'px';

    this.maxPosY = wrapperHeight - this.indicatorHeight;

    this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var wrapperWidth = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.width = this.indicatorWidth + 'px';

    this.maxPosX = wrapperWidth - this.indicatorWidth;

    this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};

Indicator.prototype._addDOMEvents = function () {
  var eventOperation = addEvent;
  this._handleDOMEvents(eventOperation);
};

Indicator.prototype._removeDOMEvents = function () {
  var eventOperation = removeEvent;
  this._handleDOMEvents(eventOperation);
  this._handleMoveEvents(eventOperation);
};

Indicator.prototype._handleMoveEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(window, 'touchmove', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(window, 'mousemove', this);
  }
};

Indicator.prototype._handleDOMEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(this.indicator, 'touchstart', this);
    eventOperation(window, 'touchend', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(this.indicator, 'mousedown', this);
    eventOperation(window, 'mouseup', this);
  }
};

function pullDownMixin(BScroll) {
  BScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;
  };

  BScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    // check if a real pull down action

    if (this.directionY !== DIRECTION_DOWN || this.y < threshold) {
      return false;
    }

    if (!this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);

    return this.pulling;
  };

  BScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, ease.bounce);
  };

  BScroll.prototype.openPullDown = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullDownRefresh = config;
    this._initPullDown();
  };

  BScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false;
  };
}

function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  BScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return;
    }
    this.pullupWatching = true;
    this.on('scroll', this._checkToEnd);
  };

  BScroll.prototype._checkToEnd = function (pos) {
    var _this = this;

    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

    if (this.movingDirectionY === DIRECTION_UP && pos.y <= this.maxScrollY + threshold) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', function () {
        _this.pullupWatching = false;
      });
      this.trigger('pullingUp');
      this.off('scroll', this._checkToEnd);
    }
  };

  BScroll.prototype.finishPullUp = function () {
    var _this2 = this;

    if (this.pullupWatching) {
      this.once('scrollEnd', function () {
        _this2._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };

  BScroll.prototype.openPullUp = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullUpLoad = config;
    this._initPullUp();
  };

  BScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false;
    if (!this.pullupWatching) {
      return;
    }
    this.pullupWatching = false;
    this.off('scroll', this._checkToEnd);
  };
}

function mouseWheelMixin(BScroll) {
  BScroll.prototype._initMouseWheel = function () {
    var _this = this;

    this._handleMouseWheelEvent(addEvent);

    this.on('destroy', function () {
      clearTimeout(_this.mouseWheelTimer);
      _this._handleMouseWheelEvent(removeEvent);
    });

    this.firstWheelOpreation = true;
  };

  BScroll.prototype._handleMouseWheelEvent = function (eventOperation) {
    eventOperation(this.wrapper, 'wheel', this);
    eventOperation(this.wrapper, 'mousewheel', this);
    eventOperation(this.wrapper, 'DOMMouseScroll', this);
  };

  BScroll.prototype._onMouseWheel = function (e) {
    var _this2 = this;

    if (!this.enabled) {
      return;
    }
    e.preventDefault();

    if (this.firstWheelOpreation) {
      this.trigger('scrollStart');
    }
    this.firstWheelOpreation = false;

    clearTimeout(this.mouseWheelTimer);
    this.mouseWheelTimer = setTimeout(function () {
      if (!_this2.options.snap) {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }
      _this2.firstWheelOpreation = true;
    }, 400);

    var _options$mouseWheel = this.options.mouseWheel,
        _options$mouseWheel$s = _options$mouseWheel.speed,
        speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
        _options$mouseWheel$i = _options$mouseWheel.invert,
        invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i,
        _options$mouseWheel$e = _options$mouseWheel.easeTime,
        easeTime = _options$mouseWheel$e === undefined ? 300 : _options$mouseWheel$e;

    var wheelDeltaX = void 0;
    var wheelDeltaY = void 0;

    switch (true) {
      case 'deltaX' in e:
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * speed;
          wheelDeltaY = -e.deltaY * speed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
        break;
      case 'wheelDeltaX' in e:
        wheelDeltaX = e.wheelDeltaX / 120 * speed;
        wheelDeltaY = e.wheelDeltaY / 120 * speed;
        break;
      case 'wheelDelta' in e:
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * speed;
        break;
      case 'detail' in e:
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * speed;
        break;
      default:
        return;
    }

    var direction = invert ? -1 : 1;
    wheelDeltaX *= direction;
    wheelDeltaY *= direction;

    if (!this.hasVerticalScroll) {
      wheelDeltaX = wheelDeltaY;
      wheelDeltaY = 0;
    }

    var newX = void 0;
    var newY = void 0;
    if (this.options.snap) {
      newX = this.currentPage.pageX;
      newY = this.currentPage.pageY;

      if (wheelDeltaX > 0) {
        newX--;
      } else if (wheelDeltaX < 0) {
        newX++;
      }

      if (wheelDeltaY > 0) {
        newY--;
      } else if (wheelDeltaY < 0) {
        newY++;
      }

      this._goToPage(newX, newY);
      return;
    }

    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

    this.movingDirectionX = this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
    this.movingDirectionY = this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

    if (newX > 0) {
      newX = 0;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > 0) {
      newY = 0;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    this.scrollTo(newX, newY, easeTime, ease.swipe);
    this.trigger('scroll', {
      x: this.x,
      y: this.y
    });
  };
}

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.');
  }
  this.scroller = this.wrapper.children[0];
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.');
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style;

  this._init(el, options);
}

initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);
mouseWheelMixin(BScroll);

BScroll.Version = '1.10.3';

/* harmony default export */ __webpack_exports__["default"] = (BScroll);


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      ref: "swiper",
      staticClass: "emfe-swiper"
    }, [_c('div', {
      ref: "swiperGroup",
      staticClass: "emfe-swiper-group"
    }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
      staticClass: "emfe-swiper-dots"
    }, _vm._l(_vm.dots, function (item, index) {
      return _c('span', {
        staticClass: "emfe-swiper-dots-dot",
        class: {
          active: _vm.currentPageIndex === index
        }
      });
    }))]);
  }, staticRenderFns: [] };

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmfeHeaderActive = __webpack_require__(419);

var _EmfeHeaderActive2 = _interopRequireDefault(_EmfeHeaderActive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EmfeHeaderActive2.default.install = function (Vue) {
  Vue.component(_EmfeHeaderActive2.default.name, _EmfeHeaderActive2.default);
};

exports.default = _EmfeHeaderActive2.default;

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(420),
  /* template */
  __webpack_require__(421),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'EmfeHeaderActive',
  data: function data() {
    return {
      src: '',
      erweimaSrc: ''
    };
  },

  props: {
    user: {
      type: String
    },
    loginFlg: {
      type: Boolean,
      required: true
    },
    imgLogo: {
      type: String
    }
  },
  created: function created() {
    var url = 'data:image/png;base64,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';
    this.src = this.imgLogo ? this.imgLogo : url;
    this.erweimaSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXCAYAAAEGz+n6AAAAAXNSR0IArs4c6QAAMSJJREFUeAHN3Qe0XVXVL/CV5NIFFMWuXIgVxS42lIgFxd67Yu+996jYeyexgF3E3rEAggqiInbFi8GKdAgBAoTs9//N6zrZnFxQvvG+N94aY2efs/cqc801y3/Otc5Na5emfOtb35pL/eGa17zm8Mc//nHw+QEPeMBw+ctffnjd6143bLLJJsNee+01LFq0aFi8+eabt1ve8pbtJje5SXvZy17WzjzzzHab29ymnXPOOW1mZqb94Ac/aKecckq7xS1u0WbOPffctnr16rZkyZJ24oknth122KGtW7eunXTSSe28885rt771rdu73/3udq973au1733ve3PXuta1huOOO26YnZ0dvv71rw8XXnjhoJx66qnD7373u2HNmjX1feb8889vf/vb39qRRx7Zrna1q7Vly5a1LT95cttx6yXtmL22bn/961/bD3/4w5aOmoo1we2333444YQThvXr1w83/fIpwyuPnu/tSle6Uk34yle+8rAY8S960Yva/e9//3bjG9+4nXzyye3g3Ze0+6z/Q1uxYkX75z//2cKJ9ohHPKI1rMMWdKE1ww6Z9PCvf/1r2GyzzYaQWez0fpHKX/jCF5Z+97vfbd/5znfazW52s/bJT36y3fnOd26//e1v2y9/+cuGYz5Xz4sXL65F0TMOuLte//rX16L4bC6XZrGbFRve/OY3F12YaZSs3rDNNtsMW2yxxZAFqndPeMIThhm0KZlM++Y3v9kuuOCCtssuu9Qq4v+f/vSnEodf/epXra1atWp42tOeVqv3kY98pHpJ5SETGm5+85sPe+yxx3DGGWcM1qEZ1qTWrl073Pe+961lPfvss+uOhIMOOqgmi5WLsSvsa6QvYlok7Xno2rpn9dqee+5ZkheZaSRusJTXuMY1hk984hPV485fOqXunluwa1/72vV9SR4sf/SjH9223nrr9tnPfraFzrbPHkurZ2J6/PHHl7gapVj30pe+tJj+4Ac/uFhnYpe5zGWGP//5z0Okcbjc5S5XTFhy2mmnLacVBOZGN7pRy9K3NGqHH354izy0293udu1d73pXzWmyKBagL/Ouu+5ai4JTUbdaGLSXbFj3LMBgNSmuz9G54alPferw97//vb7ToIjwcNZZZ9Va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';
  },

  watch: {
    loginFlg: function loginFlg(val, oldVal) {
      if (val !== oldVal) {
        this.loginFlg = val;
      }
    }
  },
  methods: {
    logout: function logout() {
      this.$emit('logout');
    },
    myRegis: function myRegis() {
      this.$emit('myRegis');
    },
    release: function release() {
      this.$emit('release');
    },
    organizer: function organizer() {
      this.$emit('organizer');
    },
    login: function login() {
      this.$emit('login');
    }
  }
};

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('header', {
      staticClass: "emfe-header-active"
    }, [_c('div', {
      staticClass: "emfe-header-active-main"
    }, [_c('div', {
      staticClass: "emfe-header-active-eye"
    }, [_c('img', {
      staticClass: "emfe-header-active-eye-img",
      attrs: {
        "src": _vm.src
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-active-info"
    }, [_c('emfe-link', {
      attrs: {
        "className": "emfe-header-active",
        "routers": {}
      },
      on: {
        "click": _vm.myRegis
      }
    }, [_vm._v("我的报名")]), _vm._v(" "), _c('emfe-link', {
      attrs: {
        "className": "emfe-header-active",
        "routers": {}
      },
      on: {
        "click": _vm.organizer
      }
    }, [_vm._v("主办方管理")]), _vm._v(" "), _c('emfe-tooltip', {
      staticStyle: {
        "position": "relative"
      },
      attrs: {
        "styles": {
          'left': '-28px',
          'top': '50px',
          'position': 'absolute'
        },
        "theme": "light",
        "placement": "bottom"
      }
    }, [_c('emfe-link', {
      attrs: {
        "className": "emfe-header-active",
        "routers": {}
      },
      slot: "render"
    }, [_vm._v("下载App")]), _vm._v(" "), _c('div', {
      staticClass: "emfe-header-active-erweima",
      slot: "tip"
    }, [_c('img', {
      staticClass: "emfe-header-active-erweima-img",
      attrs: {
        "src": _vm.erweimaSrc,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "emfe-header-active-erweima-text"
    }, [_vm._v("扫一扫，下载App")])])], 1), _vm._v(" "), _c('emfe-button', {
      attrs: {
        "className": "emfe-header-active",
        "theme": "primary",
        "type": "fabu"
      },
      on: {
        "click": _vm.release
      }
    }, [_vm._v("免费发活动")]), _vm._v(" "), _vm.loginFlg ? _c('emfe-link', {
      staticClass: "emfe-header-active-logout",
      attrs: {
        "routers": {}
      },
      on: {
        "click": _vm.logout
      }
    }, [_vm._v("退出")]) : _vm._e()], 1)])]);
  }, staticRenderFns: [] };

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  ip: function ip(val) {
    var ipPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    return ipPattern.test(val);
  },
  web: function web(val) {
    var webPattern = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    return webPattern.test(val);
  },
  card: function card(val) {
    var cardPattern = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

    return cardPattern.test(val);
  },
  phone: function phone(val) {
    var phonePattern = /^1[345789]\d{9}$/;

    return phonePattern.test(val);
  },
  email: function email(val) {
    var emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    return emailPattern.test(val);
  },
  num: function num(val) {
    var numPattern = /^-?\d*\.?\d+$/;

    return numPattern.test(val);
  },
  numInt: function numInt(val) {
    var numPattern = /^-?\d+$/;

    return numPattern.test(val);
  },
  negativeInt: function negativeInt(val) {
    var numPattern = /^-\d+$/;

    return numPattern.test(val);
  },
  negative: function negative(val) {
    var numPattern = /^-\d*\.?\d+$/;

    return numPattern.test(val);
  },
  positiveInt: function positiveInt(val) {
    var numPattern = /^\d+$/;

    return numPattern.test(val);
  },
  positive: function positive(val) {
    var numPattern = /^\d*\.?\d+$/;

    return numPattern.test(val);
  },
  qq: function qq(val) {
    var qqPattern = /^[1-9][0-9]{4,10}$/;

    return qqPattern.test(val);
  },
  password: function password(val) {
    var pwdPattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,20}$/;

    return pwdPattern.test(val);
  },
  money: function money(val) {
    var moneyPattern = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;

    return moneyPattern.test(val);
  },
  childAccount: function childAccount(val) {
    var childAccountPattern = /^(1[345789][0-9]{9}):(1[345789][0-9]{9})$/;

    return childAccountPattern.test(val);
  }
};

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  bind: function bind(el, binding) {
    var documentHandler = function documentHandler(e) {
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
  }
};

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inserted: function inserted(el, value) {
    if (value.value) {
      el.focus();
    }
  }
};

/***/ })
/******/ ]);
});