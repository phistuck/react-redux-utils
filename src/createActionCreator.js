export default function createActionCreator(type) {
    return function(payload) {
        const action = {type};

        if (typeof payload !== 'undefined') {
            action.payload = payload;            
        }

        if (payload instanceof Error) {
            action.error = true;
        }

        return action;
    };
};