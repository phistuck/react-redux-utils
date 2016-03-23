"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createActionTypes;
function createActionTypes(types) {
    return types.reduce(function (previousValue, currentValue) {
        previousValue[currentValue] = currentValue;
        return previousValue;
    }, {});
}