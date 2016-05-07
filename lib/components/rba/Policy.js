'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Policy = function (_Component) {
    _inherits(Policy, _Component);

    function Policy() {
        _classCallCheck(this, Policy);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Policy).apply(this, arguments));
    }

    _createClass(Policy, [{
        key: 'processAuth',
        value: function processAuth(child) {
            var result = child;

            if (typeof this.props.authenticated !== 'undefined' && !this.props.authenticated) {
                result = null;
            }

            return result;
        }
    }, {
        key: 'processPermissions',
        value: function processPermissions(child, permissions) {
            var result = child;

            if (child !== null && permissions.length !== 0) {
                if (permissions.indexOf(Policy.HIDDEN) >= 0) {
                    result = null;
                } else if (permissions.indexOf(Policy.DISABLED) >= 0) {
                    result = _react2.default.cloneElement(child, {
                        disabled: true
                    });
                }
            }

            return result;
        }
    }, {
        key: 'augment',
        value: function augment(child) {
            var result = child;

            if (child !== null) {
                result = _react2.default.cloneElement(child, _defineProperty({}, Policy.DOM_MARKER, this.props.id));
            }

            return result;
        }
    }, {
        key: 'process',
        value: function process(child) {
            var permissions = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

            var result = this.processAuth(child, permissions);
            result = this.processPermissions(result, permissions);
            result = this.augment(result, permissions);

            return result;
        }
    }, {
        key: 'render',
        value: function render() {
            var permissions = this.context.permissions[this.props.id];
            var child = _react.Children.only(this.props.children);

            return this.process(child, permissions);
        }
    }], [{
        key: 'DOM_MARKER',
        get: function get() {
            return 'data-policy-id';
        }
    }, {
        key: 'contextTypes',
        get: function get() {
            return {
                permissions: _react.PropTypes.object
            };
        }
    }, {
        key: 'DISABLED',
        get: function get() {
            return 'disabled';
        }
    }, {
        key: 'HIDDEN',
        get: function get() {
            return 'hidden';
        }
    }]);

    return Policy;
}(_react.Component);

exports.default = Policy;