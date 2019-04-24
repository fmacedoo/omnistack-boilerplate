import { SHOW_LOADER, HIDE_LOADER } from "./loaderActionTypes";

export function toggleLoader(show) {
    return {
        type: show ? SHOW_LOADER : HIDE_LOADER
    }
}