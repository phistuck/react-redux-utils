export default function(types) {
    return types.reduce((previousValue, currentValue) => {
        previousValue[currentValue] = currentValue;
        return previousValue;
    }, {});
};
