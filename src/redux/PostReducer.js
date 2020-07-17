import {PostDao} from "../dao/PostDao";
import {setCountPage, setCurrentPage} from "./PaginationReducer";

const SET_POSTS = "SET-POSTS";
const CHANGE_LOAD_STATUS = "LOAD";
const SET_OPENED_POST = "OPEN";
const UPDATE_SECTION = "UPDATE-SECTION";

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
        case SET_OPENED_POST:
            return {
                ...state,
                openedPost: {
                    ...action.post,
                    sections: [
                        ...action.post.sections
                    ]
                }
            }
        case UPDATE_SECTION:
            return {
                ...state,
                openedPost: {
                    ...state.openedPost,
                    sections: state.openedPost.sections.map(section => {
                        if (section.id === action.section.id) {
                            return action.section;
                        }
                        return section;
                    })
                }
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

export const setOpenedPost = (post) => ({
    type: SET_OPENED_POST,
    post
})

const postDao = new PostDao();

const updateSection = (section) => ({
    type: UPDATE_SECTION,
    section
})

export const getPosts = (sort, page, size) => dispatch => {
    dispatch(changeLoadingStatus(true));
    return postDao
        .getPosts(sort, page, size)
        .then(response => {
            dispatch(changeLoadingStatus(false));
            dispatch(setPosts(response.data.content));
            dispatch(setCountPage(response.data.totalPages));
            dispatch(setCurrentPage(response.data.number));
        });
}

export const likeSection = (id) => dispatch => {
    return postDao
        .likeSection(id)
        .then(response => {
            if (response.data) {
                dispatch(updateSection(response.data));
            }
        })
}

export const dislikeSection = (id) => dispatch => {
    return postDao
        .dislikeSection(id)
        .then(response => {
            if (response.data) {
                dispatch(updateSection(response.data));
            }
        })
}

export const getByTag = (tag) => dispatch => {
    return postDao
        .getByTag(tag)
        .then(response => {
            if (response.data) {
                dispatch(setPosts(response.data.content));
            }
        })
}

export default postReducer;