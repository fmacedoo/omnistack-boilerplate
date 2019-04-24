import * as alertActionTypes from "./alertActionTypes";

const initialState = {
    alert: null
}

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case alertActionTypes.OPEN_ALERT:
        return { ...state, alert: { title: 'Ops!', messages: action.messages } };
    case alertActionTypes.CLOSE_ALERT:
        return { ...state, alert: null };
    default:
        return state
  }
}
