import * as sidebarActionTypes from "./sidebarActionTypes";

export function toggleSidebar(open) {
    return {
      type: sidebarActionTypes.TOGGLE_SIDEBAR,
      open
    }
}