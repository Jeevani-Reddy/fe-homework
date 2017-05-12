
const initialState = {
  users: []
}

let homeReducer = (state = initialState, action = null) => {
  switch (action.type) {
  case 'RECEIVE_CREATE_USER_RESPONSE':
    return Object.assign({}, state,{ 
      users: action.users 
    })

  case 'UPDATE_USER_RESPONSE':
    return Object.assign({}, state, {
      users: action.users
    })

  default:
    return state
  }
};

export default homeReducer
