import {RegistrationDao} from "../dao/RegistrationDao";

const LOGIN = "LOG-IN";
const LOGOUT = "LOG-OUT";
const CHANGE_PROCESS = "CHANG";


const defaultState = {
    authenticatedUser: null,
    isProcess: false
}

const authenticationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                authenticatedUser: action.user
            }
        case LOGOUT:
            return {
                ...state,
                authenticatedUser: null
            }
        case CHANGE_PROCESS:
            return {
                ...state,
                isProcess: !state.isProcess
            }
        default:
            return state;
    }
}

export const changeProcessStatus = () => ({
    type: CHANGE_PROCESS
})

const setAuthenticatedUser = (user) => ({
    type: LOGIN,
    user
});

const authenticatedDao = new RegistrationDao();

export const authenticate = (user) => {
    return (dispatch) => {
        authenticatedDao.authentication(user)
            .then(data => {
                dispatch(changeProcessStatus());
                if (data && data.id != null) {
                    dispatch(setAuthenticatedUser(data));
                } else (alert(data));
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        authenticatedDao.logout();
    }
}

export default authenticationReducer;