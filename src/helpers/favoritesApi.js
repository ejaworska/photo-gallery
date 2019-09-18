import { photoUrl, getLikedPhotosUrl } from './routes';
import { post, apiCall } from './api';

export const postLikedPhoto = (id, token) => {
  return post(photoUrl(id), token);
}

export const getLikedPhotos = (username, page, perPage, orderBy, token) => {
  const url = getLikedPhotosUrl(username, page, perPage, orderBy);
  return new Promise(
    (resolve, reject) => apiCall(url, 'GET', token, resolve, reject)
  ).catch(err => {
    console.log(`There has been a problem with your fetch operation: ${err}`);
  });
}

// const call = (url, method, token, resolve, reject) =>
//   fetch(url, {
//     method: method,
//     headers: {
//       'Authorization': `Bearer ${token}`
//     },
//   })
//   .then(response => {
//     if(response.ok) {
//       console.log('response in call ok')
//       response.json()
//         .then(json => {
//           console.log('json in call' + json)
//           resolve(json)
//         })
//     } else {
//       reject(response);
//     }
// })

// export const apiCall = (url, method, token, resolve, reject) =>
//   fetch(url, {
//     method: method,
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//       'Authorization': `Bearer ${token}`
//     },
//   })
//   .then(response => {
//     if(response.ok) {
//       console.log('response ok')
//       response.json()
//         .then(json => {
//           console.log('json' + json)
//           resolve(json)
//         })
//     } else {
//       reject(response);
//     }
// })

export const deleteImage = (id, token) => {
  return new Promise(
    (resolve, reject) => apiCall(photoUrl(id), 'DELETE', token, resolve, reject)
  ).catch(err => {
    console.log(`There has been a problem with your fetch operation: ${err}`);
  });
}






