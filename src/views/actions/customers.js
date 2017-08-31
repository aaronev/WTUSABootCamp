 // will eventually fetch the user from the api
 import fetch from 'isomorphic-fetch';

export function fetchCustomer() {
  return {
        type: 'FETCH_CUSTOMER',
        payload: {
          id: 1,
          username: 'jhallman5'
        }
      }
    }

export function fetchAll() {
  return {
    type: 'FETCH_ALL_CUSTOMERS',
    payload: new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/dashboard/users/all`)
        .then(response => response.json())
        .then(json => resolve(json))
    })
  }
}

export function fetchSteven(){
  return {
        type: 'FETCH_CUSTOMER',
        payload: {
          id: 2,
          username: 'steven4'
        }
      }
}

export function fetchLisa(){
  return {
        type: 'FETCH_CUSTOMER',
        payload: {
          id: 3,
          username: 'lisa3'
        }
      }
}

export function fetchJohn(){
  return {
        type: 'FETCH_CUSTOMER',
        payload: new Promise((resolve, reject) => {
          fetch('http://localhost:3000/dashboard/john')
          .then(response => response.json())
          .then(json => resolve(json))
        })
      }
}