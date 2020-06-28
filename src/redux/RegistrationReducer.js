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
                isProcess: !state.isProcess
            }
        default:
            return state;
    }
}

export const changeProcessStatus = () => ({
    type: CHANGE_PROCESS
})

const registration = (user) => ({
    type: REGISTRATION,
    user
});

const registrationDao = new RegistrationDao();

export const registrationUser = (user) => {
    return (dispatch) => {
        registrationDao.registration(user)
            .then(data => {
                dispatch(changeProcessStatus());
                if (data && data.id != null) {
                    dispatch(registration(data));
                    alert("Successful. Now you can log in.");
                    return data.id;
                }
            });
    }
}

export default registrationReducer;