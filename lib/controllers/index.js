'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _controllers = require('../common/controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _controllers2.default;


['module1', 'module2'].forEach(key => {
    const moduleControllers = require('../modules/' + key + '/controllers/').default;
    moduleControllers.forEach((controller, key) => {
        if (_controllers2.default.has(key)) {
            throw new Error(`${ key } already exists in controllers !`);
        }

        _controllers2.default.set(key, controller);
    });
});

// todo combineControllers
//# sourceMappingURL=index.js.map
