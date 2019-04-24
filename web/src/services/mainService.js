import axios from 'axios';

const URL = 'http://localhost:3000';

export default class MainService {

  constructor(token) {
    this._axios = axios.create({
      baseURL: URL,
      timeout: 2000,
      headers: token ? { 'Authorization': token } : {}
    });
  }

  setAuthorization = (token) => {
    this._axios.defaults.headers.common['Authorization'] = token;
  }

  token = async (request) => {
    try {
      // Use common axios, not authorized.
      const response = await axios.post(`${URL}/token`, request);
      this.setAuthorization(response.data.token);
      return response;
    }
    catch (error) {
      console.log('token', error);
      return onError(error);
    }
  }

  session = async () => {
    try {
      return await this._axios.get(`${URL}/session`);
    }
    catch (error) {
      console.log('session', error);
      return onError(error);
    }
  }

  getMessages = async (payload) => {
    try {
      return await this._axios.get(`${URL}/api/demandas`);
    }
    catch (error) {
      console.log('getMessages', error);
      return onError(error);
    }
  }

  newMessage = async (demandaId, payload) => {
    try {
      const request = {
        content: payload.message,
      };

      return await this._axios.post(`${URL}/api/messages/`, request);
    }
    catch (error) {
      console.log('newMessage', error);
      return onError(error);
    }
  }

}

const onError = function (error) {
  if (error.response) {
    switch ((error.response && error.response.status) || 0) {
      case 400:
        return Promise.reject(Object.values(error.response.data));
      case 401:
        throw new Error('Unauthorized');
      case 404:
        throw new Error('Request not found');
      case 500:
        throw new Error(`Internal Error: ${error.response.data.message}`);
      default:
        return Promise.reject([error.response]);
    }
  } else {
    throw error;
  }
}