import * as types from './../contants/ActionType';
const defaultState = '';

const search = (state = defaultState, action) => {
    switch (action.type) {
        case types.CHANGE_SEARCH:
            return action.search;
        case types.CLEAR_SEARCH:
            state = '';
            return state;
        default:
            return state;
    }
};


export default search;
