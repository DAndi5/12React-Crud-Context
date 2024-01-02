'use client'
import {createContext, useEffect, useReducer} from 'react';
import {types} from '../types/types';
import {UserReducer} from './UserReducer';
import {useLocalStorage} from "react-use";

const initialState = {
    users: []
}

export const UserContext = createContext();

export const UserProvider = ({children}) => {


    const [state, dispatch] = useReducer(UserReducer, [])

    const [persistentData, setPersistentData] = useLocalStorage("u", {users: []});

    useEffect(() => {
        if (persistentData) {
            dispatch({
                type: types.readUser,
                // payload: persistentData.users
                payload: persistentData
            })
        }
    }, []);

    useEffect(() => {
        setPersistentData(state);
    }, [state]);


    const removeUser = (id) => {
        dispatch({
            type: types.removeUser,
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: types.addUser,
            payload: user,
        })
    }

    const editUser = (user) => {
        dispatch({
            type: types.editUser,
            payload: user
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </UserContext.Provider>
    )

}
