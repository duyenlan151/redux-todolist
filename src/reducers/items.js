import * as types from './../contants/ActionType';
import { v4 as uuidv4 } from 'uuid';
import {remove, reject } from 'lodash';

let defaultState = [
    { id: uuidv4(), name: 'Coding', level: 1},
    { id: uuidv4(), name: 'Do homework', level: 0},
    { id: uuidv4(), name: 'Playing tennis', level: 2},
    { id: uuidv4(), name: 'Listen to music', level: 0},
    { id: uuidv4(), name: 'Go shopping', level: 1},
];

let tasks = JSON.parse(localStorage.getItem('task'));
defaultState = (tasks !== null && tasks.length > 0) ? tasks : defaultState;

const items = (state = defaultState, action) => {
    switch(action.type){
        case types.DELETE_ITEM:
            console.log(action);
            remove(state, (task)=> {
                return task.id === action.id;
            });
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        case types.SUBMIT_FORM:
            let id = null;
            if(action.task.id !== '') { //edit
                state = reject(state, { id: action.task.id});
                id = action.task.id
            } else { // add
                id = uuidv4()
            }
            state.push({
                id,
                name: action.task.name,
                level: +action.task.level
            })

            localStorage.setItem('task', JSON.stringify([...state]));
            return [...state];
        default:
            return state;
    }
};


export default items;