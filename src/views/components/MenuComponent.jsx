import React, { Component, PropTypes } from 'react';

export default class MenuComponent extends Component {
    static contextTypes = {
        context: PropTypes.object.isRequired,
    };

    render() {
        return <div className="menu">
            <ul>
                <li><a href={this.context.context.urlGenerator('defaultSimple', { controller: 'module1' })}>Module 1</a></li>
                <li><a href={this.context.context.urlGenerator('defaultSimple', { controller: 'module2' })}>Module 2</a></li>
            </ul>
        </div>;
    }
}
