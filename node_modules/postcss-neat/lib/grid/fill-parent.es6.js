'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _variablesEs = require('../core/variables.es6.js');

var _variablesEs2 = _interopRequireDefault(_variablesEs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Forces the element to fill its parent container.
//
// @example - PostCSS Usage
//   .element {
//     @neat-fill-parent;
//   }
//
// @example - CSS Output
//   .element {
//     box-sizing: border-box;
//     width: 100%;
//   }
//

var fillParent = function fillParent() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _variablesEs2.default;

  return {
    'box-sizing': 'border-box',
    'width': '100%'
  };
};

exports.default = fillParent;
//# sourceMappingURL=../grid/fill-parent.es6.js.map