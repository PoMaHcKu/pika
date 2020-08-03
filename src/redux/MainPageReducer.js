import {getAllTagsRequest, getTagsRequest} from '../dao/TagDao'
import {getPosts as posts} from './PostReducer'

const SET_TAGS = 'SET-TAGS'
const SET_POSTS = 'SET-POSTS'

let defaultState = {
    tags: [],
    posts: null
}

const mainPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TAGS:
            return {
                ...state,
                tags: [...action.tags]
            }
        case SET_POSTS:
            return {
                ...state,
                posts: JSON.parse(JSON.stringify(action.posts))
            }
        default:
            return state
    }
}

const setTags = (tags) => ({
    type: SET_TAGS,
    tags
})

const setPosts = posts => ({
    type: SET_POSTS,
    posts
})

export const getTags = () => dispatch => {
    getTagsRequest()
        .then(response => {
            if (response && response.data) {
                dispatch(setTags(response.data))
            }
        })
}
export const getAllTags = (page) => dispatch => {
    getAllTagsRequest(page)
        .then(response => {
            if (response && response.data) {
                dispatch(setTags(response.data))
            }
        })
}

export const getPosts = (sort, page, size) => dispatch => {
    dispatch(posts(sort, page, size)
        .then(response => {
            if (response.data) {
                dispatch(setPosts(response.data.content))
            }
        }))
}

export default mainPageReducer