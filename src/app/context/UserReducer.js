import { types } from "../types/types"

export const UserReducer = (state = {}, action) => {
    switch (action.type) {

        case types.readUser:
            return action.payload

        case types.removeUser:

            return {
                ...state,
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
            }

        case types.addUser:

            return {
                ...state,
                users: [action.payload, ...state.users]
            }


        case types.editUser:
            const updateUser = action.payload;

            const updateUsers = state.users.map(user => {
                if(user.id === updateUser.id) {
                    return updateUser
                }

                return user;
            })

            return {
                ...state,
                users: updateUsers
            }


        default:
            return state
    }
}
