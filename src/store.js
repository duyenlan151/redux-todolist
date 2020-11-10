import { createStore } from "redux";
// import { 
//     actCloseForm, 
//     actOpenForm, 
//     actToogleForm,
//     actSort 
// } from './actions/index';

import appReducers from './reducers/index';


const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.getState());


// // let action = {type: 'CLOSE_FORM'};
// // CLOSE_FORM
// store.dispatch(actCloseForm());
// console.log('Close form: ', store.getState());


// // // OPEN FORM 
// store.dispatch(actOpenForm());
// console.log('Open form: ', store.getState());

// // // TOOGLE FOR,
// store.dispatch(actToogleForm());
// console.log('Toogle form: ', store.getState());

// // SORT ITEM
// store.dispatch(actSort('level', 'desc'));
// console.log('Sort item: ', store.getState());

export default store;