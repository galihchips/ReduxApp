const createContact = (contact) => {
  return {
    type: 'CREATE_NEW_CONTACT',
    payload: contact
  }
}

const removeContact = (contact) => {
  return {
    type: 'REMOVE_CONTACT',
    payload: contact
  }
}

export {
  createContact,
  removeContact
}