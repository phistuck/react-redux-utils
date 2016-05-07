import React, {Component, PropTypes, Children} from 'react';

export default class ConfigProvider extends Component {
    static get childContextTypes() {
        return {
            config: PropTypes.object
        };
    }

    getChildContext() {
        return {config: this.props.config};
    }

    render() {
        const {children} = this.props;
        return Children.only(children);
    }
}
