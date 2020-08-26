import {store} from "../Store";

export const isAuth = (state) => {
    return state.authenticationState.currentUser !== null
}

export const getToken = () => {
    return store.getState().authenticationState.currentUser ?
        store.getState().authenticationState.currentUser.token : null
}

export const getRefreshToken = () => {
    return store.getState().authenticationState.currentUser ?
        store.getState().authenticationState.currentUser.refreshToken : null
}