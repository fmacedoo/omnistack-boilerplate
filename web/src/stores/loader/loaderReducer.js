import { SHOW_LOADER, HIDE_LOADER } from './loaderActionTypes';

export const loaderReducer = (state = { show: false }, { type }) => {
    switch (type) {
        case SHOW_LOADER:
            return { show: true }
        case HIDE_LOADER:
            return { show: false }
        default:
            return state
    }
}