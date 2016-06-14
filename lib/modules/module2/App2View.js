'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _MainLayout = require('../../views/layouts/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class View2View extends _react.Component {

    render() {
        // const dispatch = this.context.context.store.dispatch;
        const title = 'View2';
        this.context.setTitle(title);
        return _react2.default.createElement(
            _MainLayout2.default,
            null,
            _react2.default.createElement(
                'div',
                null,
                'View2'
            )
        );
    }
}

View2View.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired,
    context: _react.PropTypes.object.isRequired
};
View2View.propTypes = {
    name: _react.PropTypes.string
};
exports.default = (0, _reactRedux.connect)(state => {
    return {};
})(View2View);
//# sourceMappingURL=App2View.js.map
