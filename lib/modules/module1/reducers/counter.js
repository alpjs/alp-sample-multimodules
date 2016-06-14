'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = counter;

var _counter = require('../actions/counter');

function counter() {
    let state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    let action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    switch (action.type) {
        case _counter.ADD:
            return state + 1;
        default:
            return state;
    }
}
//# sourceMappingURL=counter.js.map
