import registrationReducer from "./RegistrationReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thankMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import authenticationReducer from "./AuthenticationReducer";
import postReducer from "./PostRducer";
import commentaryReducer from "./CommentaryReducer";
import userReducer from "./UsersReducer";

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
        console.log(err);
    }
};

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

let reducers = combineReducers(
    {
        registrationState: registrationReducer,
        authenticationState: authenticationReducer,
        postsState: postReducer,
        commentariesState: commentaryReducer,
        usersState: userReducer,
        form: formReducer
    }
);

const oldState = loadState();

export let store = createStore(reducers, oldState, applyMiddleware(thankMiddleWare));

store.subscribe(() => {
    saveState(store.getState());
});

