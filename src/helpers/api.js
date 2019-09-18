export const get = url => {
  return new Promise(
    (resolve, reject) => {
      fetch(url)
      .then(response => {
        if(response.ok) {
          response.json()
          .then(json => resolve(json));
        } else {
          reject(response);//works as throw
        }
      })
    } 
  ).catch(err => {
    console.log(`There has been a problem with your fetch operation: ${err}`);
  });
}

export const post = (url, token) => {
  return new Promise(
    (resolve, reject) => apiCall(url, 'POST', token, resolve, reject)
  ).catch(err => {
    console.log(`There has been a problem with your fetch operation: ${err}`);
  });
}

export const apiCall = (url, method, token, resolve, reject) =>
  fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${token}`
    },
  })
  .then(response => {
    if(response.ok) {
      response.json()
        .then(json => {
          resolve(json)
        })
    } else {
      reject(response);
    }
})
















