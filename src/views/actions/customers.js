import fetch from 'isomorphic-fetch';

export function fetchCustomer() {
  return {
    type: 'FETCH_CUSTOMER',
    payload: {
      id: 1,
      username: 'jhallman5',
    },
  };
}

export function fetchAll() {
  return {
    type: 'FETCH_ALL_CUSTOMERS',
    payload: new Promise((resolve) => {
      fetch('/api/dashboard/customers/all')
        .then(response => response.json())
        .then(json => resolve(json));
    }),
  };
}
