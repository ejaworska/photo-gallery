import { apiCall } from './api';
import { accessTokenUrl, currentUserUrl } from '../helpers/routes';

export const postForToken = (code) => {
  const url = accessTokenUrl(code);
  return new Promise(
    (resolve, reject) => call(url, resolve, reject)
  ).catch(err => {
    console.log(`There has been a problem with your fetch operation: ${err}`);
  });
}

const call = (url, resolve, reject) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
  })
  .then(response => {
    if(response.ok) {
      response.json()
        .then(json => resolve(json))
    } else {
      reject(response.status);
    }
})


export const getCurrentUser = (token) => {
  return new Promise(
    (resolve, reject) => apiCall(currentUserUrl, 'GET', token, resolve, reject)
  ).catch(err => {
    console.log(`There has been a problem with your fetch operation: ${err}`);
  });
}

