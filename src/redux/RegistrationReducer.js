import {RegistrationDao} from "../dao/RegistrationDao";

const REGISTRATION = "REGISTRATION";
const CHANGE_PROCESS = "CHANG";


const defaultState = {
    registeredUser: null,
    isProcess: false
}

const registrationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTRATION:
            return {
                ...state,
                registeredUser: action.user
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

const registration = (user) => ({
    type: REGISTRATION,
    user
});

const registrationDao = new RegistrationDao();

export const registrationUser = (user) => {
    return (dispatch) => {
        dispatch(changeProcessStatus(true));
        registrationDao.registration(user)
            .then(data => {
                dispatch(changeProcessStatus(false));
                if (data && data.id != null) {
                    dispatch(registration(data));
                    alert("Successful. Now you can log in.");
                    return data.id;
                }
            });
    }
}

export default registrationReducer;