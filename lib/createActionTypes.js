export default function (types) {
    return types.reduce((previousValue, currentValue) => {
        return previousValue[currentValue] = Symbol(previousValue);
    }, {});
};