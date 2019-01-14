export default function entityReducer(state = {}, action) {
    if (action.payload && action.payload.entities) {
        return {
            ...state,
            ...action.payload.entities,
        };
    }
    return state;
}
