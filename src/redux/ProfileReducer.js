import {UserDao} from "../dao/UserDao";

const SET_PROFILE = "SET-PROFILE";
const CHANGE_LOAD_STATUS = "LOADING-PROFILE";

const defaultState = {
    isLoading: false,
    userProfile: null,
    posts: [],
}

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOAD_STATUS:
            return {
                ...state,
                isLoading: action.status
            }
        case SET_PROFILE:
            return {
                ...state,
                userProfile: {
                    username: action.user.username,
                    email: action.user.email
                },
                posts: JSON.parse(JSON.stringify(action.user.posts)),
            }
        default:
            return state;
    }
}

const changeLoadingStatus = (status) => ({
    type: CHANGE_LOAD_STATUS,
    status
})

const setProfile = (user) => ({
    type: SET_PROFILE,
    user,
})

const userDao = new UserDao();

export const getProfile = (id) => dispatch => {
    dispatch(changeLoadingStatus(true));
    return userDao.getUser(id)
        .then(response => {
            dispatch(changeLoadingStatus(false));
            dispatch(setProfile(response.data))
        });

}

export default profileReducer;