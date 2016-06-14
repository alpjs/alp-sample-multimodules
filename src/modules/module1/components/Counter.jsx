import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        add: PropTypes.func.isRequired,
    };

    render() {
        const { count, add } = this.props;
        return <div>
            <span>{count}</span>
            <button onClick={() => add()}>+1</button>
        </div>;
    }
}
