import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainLayout from '../../views/layouts/MainLayout';
import Counter from './components/Counter';
import { add } from './actions/counter';

class View1View extends Component {
    static contextTypes = {
        setTitle: PropTypes.func.isRequired,
        context: PropTypes.object.isRequired,
    };

    static propTypes = {
        name: PropTypes.string,
    };

    render() {
        const dispatch = this.context.context.store.dispatch;
        const title = 'View1';
        this.context.setTitle(title);
        const { count } = this.props;
        return <MainLayout>
            <div>
                <Counter count={count} add={() => dispatch(add())}></Counter>
            </div>
        </MainLayout>;
    }
}

export default connect(({ counter }) => ({ count: counter }))(View1View);
