
const defaultStore = {
    orderBy: "name",
    orderDir: "asc",
};

const sort = (state = defaultStore, action) => {
    let { orderBy, orderDir} = action;
    switch (action.type) {
        case "SORT_ITEM":
            // console.log(action);
            // state.orderBy = action.orderBy;
            // state.orderDir = action.orderDir;
            return {orderBy, orderDir};
        default:
            return state;
    }
};

export default sort;
