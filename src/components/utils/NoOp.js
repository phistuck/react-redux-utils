import React, {Component, Children, PropTypes} from 'react';

export default (props) => {
    const child = Children.only(props.children);
    return child;
};
