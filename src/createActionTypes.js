export default function createActionTypes(types) {
    return types.reduce((previousValue, currentValue) => {
        previousValue[currentValue] = currentValue;
        return previousValue;
    }, {});
};
