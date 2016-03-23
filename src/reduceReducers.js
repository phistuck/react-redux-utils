export default function reduceReducers(...reducers) {
    return (previous, current) => {
        return reducers.reduce((p, r) => r(p, current), previous);
    };
}
