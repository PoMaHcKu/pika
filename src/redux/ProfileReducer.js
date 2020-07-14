import {UserDao} from "../dao/UserDao";

const SET_PROFILE = "SET-PROFILE";

const defaultState = {
    user: null,
    posts: [],
}

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                user: {...action.user},
                posts: JSON.stringify(JSON.parse(action.user.posts)),
            }
        default:
            return state;
    }
}

const setProfile = (user) => ({
    type: SET_PROFILE,
    user
})

const userDao = new UserDao();

export const getProfile = (id) => dispatch => {
    userDao.getUser(id)
        .then(response => {
            dispatch(setProfile(response.data))
        });
}

export default profileReducer;