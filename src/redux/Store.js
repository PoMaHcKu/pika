import registrationReducer from "./RegistrationReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thankMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import authenticationReducer from "./AuthenticationReducer";

let reducers = combineReducers(
    {
        registrationState: registrationReducer,
        authenticationState: authenticationReducer,
        form: formReducer
    }
);

export let store = createStore(reducers, applyMiddleware(thankMiddleWare));

