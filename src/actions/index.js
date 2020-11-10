import * as types from '../contants/ActionType';

/** Form */
export const actCloseForm = () => {
    return {
        'type' : types.CLOSE_FORM
    }
}

export const actOpenForm = () => {
    return {
        'type' : types.OPEN_FORM
    }
}

export const actToggleForm = () => ({
        'type' : types.TOGGLE_FORM
})

export const actSubmitForm = (task) => {
    return {
        'type' : types.SUBMIT_FORM,
        task
    }
}
/** Item */
export const actSort = (orderBy, orderDir) => {
    return {
        'type' : types.SORT_ITEM,
        'orderBy' : orderBy,
        'orderDir' : orderDir
    }
}

export const actEdit = () => ({
    'type' : types.EDIT_ITEM
})

export const actDelete = (id) => ({
    'type' : types.DELETE_ITEM, 
    id
})

/** Search */
export const actSearch = (search) => ({
    search,
    'type' : types.CHANGE_SEARCH
})

export const actClearSearch = () => ({
    'type' : types.CLEAR_SEARCH
})

/** item selected */
export const actSelectedItem = (item) => ({
    'type' : types.SELECTED_ITEM,
    item
})
export const actUnSelectedItem = () => ({
    'type' : types.UNSELECTED_ITEM
})
