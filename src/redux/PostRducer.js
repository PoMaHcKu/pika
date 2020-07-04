import {PostDao} from "../dao/PostDao";

const SET_POSTS = "SET";
const CHANGE_LOAD_STATUS = "LOAD";

const defaultState = {
    posts: [],
    openedPost: null,
    isLoading: false
}

const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: JSON.parse(JSON.stringify(action.posts)),
            }
        case CHANGE_LOAD_STATUS:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state;
    }
}

export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})

export const changeLoadingStatus = () => ({
    type: CHANGE_LOAD_STATUS
})

const postDao = new PostDao();

export const getPosts = () => {
    return (dispatch) => {
        dispatch(changeLoadingStatus());
        postDao
            .getPosts()
            .then(response => {
                dispatch(changeLoadingStatus());
                dispatch(setPosts(response.data.content));
            });
    }
}

export default postReducer;