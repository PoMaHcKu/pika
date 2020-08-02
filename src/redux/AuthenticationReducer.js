import {AuthenticationDao} from "../dao/AuthenticationDao";

const LOGIN = "LOG-IN";
const LOGOUT = "LOG-OUT";
const CHANGE_PROCESS = "CHANG";

const defaultState = {
    currentUser: null,
    isProcess: false
}

const authenticationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                currentUser: action.username
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
            return state;
    }
}

export const changeProcessStatus = (isProcess) => ({
    type: CHANGE_PROCESS,
    isProcess
})

const setAuthenticatedUser = (username) => ({
    type: LOGIN,
    username
});

const deleteAuthenticatedUser = () => ({
    type: LOGOUT
})

const authenticatedDao = new AuthenticationDao();

export const login = (user) => dispatch => {
    dispatch(changeProcessStatus(true));
    authenticatedDao.login(user)
        .then(username => {
            if (username) {
                dispatch(setAuthenticatedUser(username));
            } else {
                dispatch(setAuthenticatedUser(null));
            }
        });
}

export const logout = () => dispatch => {
    return () => {
        authenticatedDao.logout()
        dispatch(deleteAuthenticatedUser())
    }
}

export default authenticationReducer;