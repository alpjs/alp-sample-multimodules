'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Counter extends _react.Component {

    render() {
        var _props = this.props;
        const count = _props.count;
        const add = _props.add;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                null,
                count
            ),
            _react2.default.createElement(
                'button',
                { onClick: () => {
                        return add();
                    } },
                '+1'
            )
        );
    }
}
exports.default = Counter;
Counter.propTypes = {
    count: _react.PropTypes.number.isRequired,
    add: _react.PropTypes.func.isRequired
};
//# sourceMappingURL=Counter.js.map
