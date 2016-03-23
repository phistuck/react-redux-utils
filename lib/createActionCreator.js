'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createActionCreator;
function createActionCreator(type) {
    return function (payload) {
        var action = { type: type };

        if (typeof payload !== 'undefined') {
            action.payload = payload;
        }

        if (payload instanceof Error) {
            action.error = true;
        }

        return action;
    };
};