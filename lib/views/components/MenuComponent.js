'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MenuComponent extends _react.Component {

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'menu' },
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: this.context.context.urlGenerator('defaultSimple', { controller: 'module1' }) },
                        'Module 1'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: this.context.context.urlGenerator('defaultSimple', { controller: 'module2' }) },
                        'Module 2'
                    )
                )
            )
        );
    }
}
exports.default = MenuComponent;
MenuComponent.contextTypes = {
    context: _react.PropTypes.object.isRequired
};
//# sourceMappingURL=MenuComponent.js.map
