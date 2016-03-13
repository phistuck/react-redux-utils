export default function (types) {
    return types.reduce((previousValue, currentValue) => {
        previousValue[currentValue] = Symbol(currentValue);
        return previousValue;
    }, {});
};