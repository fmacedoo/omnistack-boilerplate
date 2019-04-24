import * as sidebarActionTypes from "./sidebarActionTypes";

const initialState = {
    open: false
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case sidebarActionTypes.TOGGLE_SIDEBAR:
            return toggleSidebar(state, action);
        default:
            return state
    }
}

function toggleSidebar(state, action) {
    return {
        ...state,
        open: action.open
    }
}