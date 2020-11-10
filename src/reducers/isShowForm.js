import * as types from './../contants/ActionType';
const defaultState = false;

const isShowForm = (state = defaultState, action) => {
    switch (action.type) {
        case types.CLOSE_FORM:
            state = false;
            break;
        case types.OPEN_FORM:
            state = true;
            break;
        case types.TOGGLE_FORM:
            state = !state;
            break;
        default:
            return state;
    }
    return state;
};


export default isShowForm;
