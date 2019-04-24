import * as authenticationActionTypes from './authenticationActionTypes';

const initialAuthenticationForm = {
  email: 'fmacedoo@gmail.com',
  password: '123456'
}

const initialAuthenticationInfo = {
  token: null,
  user: null
}

const initialState = {
  authenticationForm: initialAuthenticationForm,
  authenticationInfo: initialAuthenticationInfo
}

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticationActionTypes.STORE_AUTHENTICATION:
      return storeAuthentication(state, action.data);
    case authenticationActionTypes.STORE_USER:
      return storeUser(state, action.data);
    case authenticationActionTypes.LOGOFF:
      return logoff(state, action.data);
    default:
      return state;
  }
}

function storeAuthentication(state, data) {
  return {
    ...state,
    authenticationForm: initialAuthenticationForm,
    authenticationInfo: {
      ...state.authenticationInfo,
      token: data.token
    }
  };
}

function storeUser(state, data) {
  return {
    ...state,
    authenticationInfo: {
      ...state.authenticationInfo,
      user: data
    }
  };
}

function logoff(state, data) {
  return initialState;
}