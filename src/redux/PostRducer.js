import {PostDao} from "../dao/PostDao";

const SET_POSTS = "SET-POSTS";
const SET_SORT = "SET-SORT";
const CHANGE_LOAD_STATUS = "LOAD";

const defaultState = {
    posts: [],
    sort: "id",
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
        case SET_SORT:
            return {
                ...state,
                sort: action.sort,
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

const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})
export const setSort = (sort) => ({
    type: SET_SORT,
    sort
})

const changeLoadingStatus = () => ({
    type: CHANGE_LOAD_STATUS
})

const postDao = new PostDao();

export const getPosts = (sort = defaultState.sort, page = 0, size = 10) => {
    return (dispatch) => {
        dispatch(changeLoadingStatus());
        postDao
            .getPosts(sort, page, size)
            .then(response => {
                dispatch(changeLoadingStatus());
                dispatch(setPosts(response.data.content));
            });
    }
}

export default postReducer;