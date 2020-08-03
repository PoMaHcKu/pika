import {login as log_in} from '../dao/AuthenticationDao'

const LOGIN = 'LOG-IN'
const LOGOUT = 'LOG-OUT'
const CHANGE_PROCESS = 'CHANG'

const defaultState = {
    currentUser: {
        username: null,
        token: null
    },
    isProcess: false
}

const authenticationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                currentUser: {
                    username: action.data.username,
                    token: action.data.token
                }
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: null
            }
        case CHANGE_PROCESS:
            return {
                ...state,
                isProcess: action.isProcess
            }
        default:
            return state
    }
}

export const changeProcessStatus = (isProcess) => ({
    type: CHANGE_PROCESS,
    isProcess
})

const setAuthenticatedUser = (data) => {
    return {
        type: LOGIN,
        data
    }
}

const deleteAuthenticatedUser = () => ({
    type: LOGOUT
})

export const login = (user) => dispatch => {
    dispatch(changeProcessStatus(true))
    return log_in(user)
        .then(data => {
            dispatch(changeProcessStatus(false))
            if (data) {
                dispatch(setAuthenticatedUser(data))
            }
        })
}

export const logout = () => dispatch => {
    dispatch(deleteAuthenticatedUser())
}

export default authenticationReducer