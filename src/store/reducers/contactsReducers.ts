const initialState = {
  contacts: [
    {
      id: 1,
      fullName: 'Nelson Carvalho',
      email: 'nelson@example.com',
      phone: '123456789'
    }
  ]
}

const contactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, { id: Date.now(), ...action.payload }]
      }
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact: any) => contact.id !== action.payload.id
        )
      }
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact: any) =>
          contact.id === action.payload.id
            ? { ...contact, ...action.payload.updatedContact }
            : contact
        )
      }
    default:
      return state
  }
}

export default contactsReducer
