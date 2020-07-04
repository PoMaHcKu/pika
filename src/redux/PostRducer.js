import {PostDao} from "../dao/PostDao";

const SET_POSTS = "SET-POSTS";
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
                isLoading: action.status
            }
        default:
            return state;
    }
}

const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})

const changeLoadingStatus = (status) => ({
    type: CHANGE_LOAD_STATUS,
    status
})

const postDao = new PostDao();

export const getPosts = (sort = defaultState.sort, page = 0, size = 10) => {
    return (dispatch) => {
        dispatch(changeLoadingStatus(true));
        postDao
            .getPosts(sort, page, size)
            .then(response => {
                dispatch(changeLoadingStatus(false));
                dispatch(setPosts(response.data.content));
            });
    }
}

export default postReducer;