
const initialState = {
    users: []
}

let homeReducer = (state = initialState, action = null) => {
    switch (action.type) {
        case 'GET_USERS_DATA':
            return Object.assign(
                {},
                state,
                {
                    users: action.users
                }
            );

        default:
            return state;
    }
};

export default homeReducer;