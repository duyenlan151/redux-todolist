import * as types from './../contants/ActionType';
// import { v4 as uuidv4 } from 'uuid';

let defaultState = [
    { id: '', name: '', level: 0}
];

const itemSelected = (state = defaultState, action) => {
    switch(action.type){
        case types.SELECTED_ITEM:
            return action.item;
        case types.UNSELECTED_ITEM:
            return action;
        default:
            return state;
    }
};


export default itemSelected;