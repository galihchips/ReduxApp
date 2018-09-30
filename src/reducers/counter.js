const initialState={
  fetching: false,
  fetched: false,
  error: null,
  contacts: [],
  contact: {}
}

const contact = function(state = initialState, action){
  switch (action.type) {
    case 'FETCH_CONTACTS_PENDING':
      return {...state, fetching: true};
      break;
    case 'FETCH_CONTACTS_FULFILLED':
      return {...state, fetching: false, fetched: true, contacts: action.payload.data};
      break;
    case 'FETCH_CONTACTS_REJECTED':
      return {...state, fetching: false, error: action.payload };
      break;
    case 'GET_CONTACT_PENDING':
      return {...state, fetching: true};
      break;
    case 'GET_CONTACT_FULFILLED':
      return {...state, fetching: false, fetched: true, contact: action.payload.data};
      break;
    case 'GET_CONTACT_REJECTED':
      return {...state, fetching: false, error: action.payload };
      break;
    default:
     return state;
  }
}

export default contact;
