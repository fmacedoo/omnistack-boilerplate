import * as alertActionTypes from './alertActionTypes';

export function handleErrors(errors) {
  return {
    type: alertActionTypes.HANDLE_ERRORS,
    errors
  }
}

export function openAlert(messages) {
  return {
    type: alertActionTypes.OPEN_ALERT,
    messages
  }
}

export function closeAlert() {
  return {
    type: alertActionTypes.CLOSE_ALERT,
  }
}
