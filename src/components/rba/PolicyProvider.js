import React, {Component, PropTypes, Children} from 'react';
import Policy from './Policy';

export default class PolicyProvider extends Component {
    static get childContextTypes() {
        return {
            policy: PropTypes.func,
            permissions: PropTypes.object
        };
    }

    getChildContext() {
        const {policy = Policy, permissions = {}} = this.props;

        return {
            policy: policy,
            permissions: permissions
        };
    }

    render() {
        const {children} = this.props;
        return Children.only(children);
    }
}
