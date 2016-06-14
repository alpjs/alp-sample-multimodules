'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _MainLayout = require('../../views/layouts/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _Counter = require('./components/Counter');

var _Counter2 = _interopRequireDefault(_Counter);

var _counter = require('./actions/counter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class View1View extends _react.Component {

    render() {
        const dispatch = this.context.context.store.dispatch;
        const title = 'View1';
        this.context.setTitle(title);
        const count = this.props.count;

        return _react2.default.createElement(
            _MainLayout2.default,
            null,
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Counter2.default, { count: count, add: () => {
                        return dispatch((0, _counter.add)());
                    } })
            )
        );
    }
}

View1View.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired,
    context: _react.PropTypes.object.isRequired
};
View1View.propTypes = {
    name: _react.PropTypes.string
};
exports.default = (0, _reactRedux.connect)(_ref => {
    let counter = _ref.counter;
    return { count: counter };
})(View1View);
//# sourceMappingURL=App1View.js.map
