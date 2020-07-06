import {UserDao} from "../dao/UserDao";

const SET_AUTHOR_POST = "SET-AUTHOR-POST";
const CHANGE_PROCESS = "CHANG";


const defaultState = {
    authorPost: null,
    isProcess: false
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTHOR_POST:
            return {
                ...state,
                authorPost: {...action.user},
            }
        default:
            return state;
    }
}

export const changeProcessStatus = () => ({
    type: CHANGE_PROCESS
})

const setAuthorPost = (user) => ({
    type: SET_AUTHOR_POST,
    user
});

const userDao = new UserDao();

export const getAuthorPost = (id) => {
    return (dispatch) => {
        userDao.getUser(id)
            .then(response => {
                if (response.data) {
                    dispatch(setAuthorPost(response.data));
                }
            });
    }
}

export default userReducer;