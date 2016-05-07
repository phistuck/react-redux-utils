import React, {Component, Children, PropTypes} from 'react';

export default class Policy extends Component {
    static get DOM_MARKER() {
        return 'data-policy-id';
    }

    static get contextTypes() {
        return {
            permissions: PropTypes.object
        };
    }

    static get DISABLED() {
        return 'disabled';
    }

    static get HIDDEN() {
        return 'hidden';
    }

    processAuth(child) {
        let result = child;

        if ((typeof this.props.authenticated !== 'undefined') && !this.props.authenticated) {
            result = null;
        }

        return result;
    }

    processPermissions(child, permissions) {
        let result = child;

        if ((child !== null) && permissions.length !== 0) {
            if (permissions.indexOf(Policy.HIDDEN) >= 0) {
                result = null;
            } else if (permissions.indexOf(Policy.DISABLED) >= 0) {
                result = React.cloneElement(child, {
                    disabled: true
                });
            }
        }

        return result;
    }

    augment(child) {
        let result = child;

        if (child !== null) {
            result = React.cloneElement(child, {
                [Policy.DOM_MARKER]: this.props.id
            });
        }

        return result;
    }

    process(child, permissions = []) {
        let result = this.processAuth(child, permissions);
        result = this.processPermissions(result, permissions);
        result = this.augment(result, permissions);        

        return result;
    }

    render() {
        const permissions = this.context.permissions[this.props.id];
        const child = Children.only(this.props.children);

        return this.process(child, permissions);
    }
}
