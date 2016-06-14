'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App1View = require('./App1View');

Object.defineProperty(exports, 'View', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App1View).default;
  }
});

var _reducers = require('./reducers');

Object.defineProperty(exports, 'reducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reducers).default;
  }
});

var _controllers = require('./controllers');

Object.defineProperty(exports, 'controllers', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_controllers).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const identifier = exports.identifier = 'module1';
//# sourceMappingURL=index.js.map
