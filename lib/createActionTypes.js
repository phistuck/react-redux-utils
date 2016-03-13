export default function (types) {
    return types.reduce((previousValue, currentValue) => {
        previousValue[currentValue] = Symbol(previousValue);
        return previousValue;
    }, {});
};