'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React, {Component} from 'react';
// import {match, RouterContext} from 'react-router';

// export default class Match extends Component {
//     constructor() {
//         super();
//         this.state = {children: null};
//     }

//     componentWillReceiveProps() {
//         const {routes, location} = this.props;

//         match({routes, location}, (err, redirectLocation, renderProps) => {
//             this.setState({
//                 children: <RouterContext {...renderProps}/>
//             });
//         });
//     }

//     render() {
//         return this.state.children;
//     }
// }

// import React, {Component} from 'react';
// // import {render} from 'react-dom';
// import {RouterContext} from 'react-router';

// export default class Match extends Component {
//     static get contextTypes() {
//         return {
//             router:
//         }
//     }

//     render() {
//         return (
//             <RouterContext {...this.props}/>
//         );
//     }
// }

// import React from 'react';
// import {RouterContext, match} from 'react-router';

// export default ({routes, location}) => {
//     return match({routes, location}, (err, redirectLocation, renderProps) => {
//         return (<RouterContext {...renderProps} />);
//     });
// };

var Match = function (_Component) {
    _inherits(Match, _Component);

    function Match() {
        _classCallCheck(this, Match);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Match).apply(this, arguments));
    }

    _createClass(Match, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            var _this2 = this;

            var _props = this.props;
            var routes = _props.routes;
            var location = _props.location;


            (0, _reactRouter.match)({ routes: routes, location: location }, function (err, redirectLocation, renderProps) {
                (0, _reactDom.render)(_react2.default.createElement(_reactRouter.RouterContext, renderProps), _this2.refs.root);
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this3 = this;

            var _props2 = this.props;
            var routes = _props2.routes;
            var location = _props2.location;


            (0, _reactRouter.match)({ routes: routes, location: location }, function (err, redirectLocation, renderProps) {
                (0, _reactDom.render)(_react2.default.createElement(_reactRouter.RouterContext, renderProps), _this3.refs.root);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { ref: 'root' });
        }
    }]);

    return Match;
}(_react.Component);

exports.default = Match;