import isShowForm from './isShowForm';
import sort from './sort';
import items from './items';
import search from './search';
import itemSelected from './itemSelected';

import { combineReducers } from 'redux';
// ket hop 2 reducer tro len dung combine
// const defaultStore = {
//     items: [],
//     isShowForm: true,
//     strSearch: "",
//     orderBy: "name",
//     orderDir: "asc",
//     itemSelected: null,
// };

// const appReducers = (state = defaultStore, action) => {
//     switch (action.type) {
//         case "CLOSE_FORM":
//             state.isShowForm = false;
//             break;
//         case "OPEN_FORM":
//             state.isShowForm = true;
//             break;
//         case "TOOGLE_FORM":
//             state.isShowForm = !state.isShowForm;
//             break;
//         case "SORT_ITEM":
//         // console.log(action);
//             state.orderBy = action.orderBy;
//             state.orderDir = action.orderDir;
//             break;
//         default:
//             return state;
//     }
//     return state;
// };

const appReducers = combineReducers({
    isShowForm,
    sort, 
    items,
    search,
    itemSelected
})
export default appReducers;
