import React, {Component, PropTypes} from 'react';

export default class ConfigProvider extends Component {
    static get childContextTypes() {
        return {
            config: PropTypes.object
        };
    }

    getChildContext() {
        return { store: this.store };
    }

    constructor(props, context) {
        super(props, context);
        this.store = props.store;
    }

    render() {
        const { children } = this.props;
        return Children.only(children);
    }
}
