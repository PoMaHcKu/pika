import {authenticate} from "./AuthenticationReducer";

const SET_INITIALIZED = "SET-INIT";

const defaultState = {
    isInitialized: false
}

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            }

        default:
            return state;
    }
}

const setInitializedSuccess = () => ({
    type: SET_INITIALIZED,
})

export const initializeApp = () => dispatch => {
    let promise = dispatch(authenticate());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess());
        });
}

export default appReducer;