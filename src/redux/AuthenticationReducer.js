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

const setAuthenticatedUser = (user) => ({
    type: LOGIN,
    user
});

const deleteAuthenticatedUser = () => ({
    type: LOGOUT
})

const authenticatedDao = new RegistrationDao();

export const authenticate = () => dispatch => {
    dispatch(changeProcessStatus(true));
    return authenticatedDao.authentication()
        .then(data => {
            dispatch(changeProcessStatus(false));
            if (data.id) {
                dispatch(setAuthenticatedUser(data));
            } else {
                dispatch(setAuthenticatedUser(null));
            }
        });
}

export const login = (user) => dispatch => {
    dispatch(changeProcessStatus(true));
    authenticatedDao.login(user)
        .then(() => {
            dispatch(authenticate());
        });
}

export const logout = () => {
    return (dispatch) => {
        authenticatedDao.logout()
            .then(response => {
                if (!response.error) {
                    dispatch(deleteAuthenticatedUser());
                }
            });
    }
}

export default authenticationReducer;