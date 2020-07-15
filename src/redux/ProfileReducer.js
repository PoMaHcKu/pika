import {UserDao} from "../dao/UserDao";

const SET_PROFILE = "SET-PROFILE";

const defaultState = {
    profile: null,
    posts: [],
}

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                profile: {
                    username: action.user.username,
                    email: action.user.email
                },
                posts: JSON.parse(JSON.stringify(action.user.posts)),
            }
        default:
            return state;
    }
}

const setProfile = (user) => ({
    type: SET_PROFILE,
    user,
})

const userDao = new UserDao();

export const getProfile = (id) => dispatch => {
    return userDao.getUser(id)
        .then(response => {
            dispatch(setProfile(response.data))
        });

}

export default profileReducer;