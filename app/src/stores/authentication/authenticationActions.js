import * as authenticationActionsTypes from './authenticationActionTypes';

export function authenticate(payload) {
  return {
    type: authenticationActionsTypes.ASYNC_AUTHENTICATE,
    payload
  }
}

export function storeAuthentication(data) {
  return {
    type: authenticationActionsTypes.STORE_AUTHENTICATION,
    data
  }
}

export function storeUser(data) {
  return {
    type: authenticationActionsTypes.STORE_USER,
    data
  }
}

export function logoff() {
  return {
    type: authenticationActionsTypes.LOGOFF,
  }
}
