let requestCreateUser = () => ({type: 'REQUEST_CREATE_USER'})

let receiveCreateUserResponse = (users) => ({
    type: 'RECEIVE_CREATE_USER_RESPONSE',
    users: users
})

let requestUpdateUser = () => ({type: 'REQUEST_UPDATE_USER'})

let receiveUpdateUserResponse = (users) => ({
    type: 'RECEIVE_UPDATE_USER_RESPONSE',
    users: users
})

export function createUser(firstName, lastName, email){
        return function(dispatch,getState) {
            dispatch(requestCreateUser())
            const newUser = {
                id: parseInt((Math.random() * 100), 10),
                firstName: firstName,
                lastName: lastName,
                email: email
            }
            let users = getState().home.users
            users.push(newUser)
            dispatch(receiveCreateUserResponse(users))
        }
    }

export function updateUser(userId, firstName, lastName, email){
        return function(dispatch,getState) {
            dispatch(requestUpdateUser())
            let users = getState().home.users
            let index = users.findIndex(user => user.id === userId)
            users[index].firstName = firstName
            users[index].lastName = lastName
            users[index].email = email
            dispatch(receiveUpdateUserResponse(users))
        }
    }