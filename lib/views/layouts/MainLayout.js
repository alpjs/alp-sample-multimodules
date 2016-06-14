'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuComponent = require('../components/MenuComponent');

var _MenuComponent2 = _interopRequireDefault(_MenuComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MainLayout extends _react.Component {

    render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(_MenuComponent2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'content' },
                this.props.children
            )
        );
    }
}
exports.default = MainLayout;
MainLayout.propTypes = {
    children: _react.PropTypes.element.isRequired
};
//# sourceMappingURL=MainLayout.js.map
