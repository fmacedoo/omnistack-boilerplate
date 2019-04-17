import * as alertActionTypes from './alertActionTypes';

export function handleError(errors) {
    return {
      type: alertActionTypes.HANDLE_ERROR,
      errors
    }
  }
  