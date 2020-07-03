import {PostDao} from "../dao/PostDao";

const SET_POSTS = "SET";

const defaultState = {
    posts: [],
    openedPost: null,
    isProcess: false
}

const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: JSON.parse(JSON.stringify(action.posts)),
            }
        default:
            return state;
    }
}

export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})

const postDao = new PostDao();

export const getPosts = () => {
    return (dispatch) => {
        postDao
            .getPosts()
            .then(response => {
                dispatch(setPosts(response.data.content));
            });
    }
}

export default postReducer;