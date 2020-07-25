import {GenreDao} from "../dao/GenreDao"
import {PostDao} from "../dao/PostDao"
import {setOpenedPost} from "./PostReducer"

const SET_GENRES = "SET-GENRES"
const CHANGE_LOAD_STATUS = "CHANGE-LOAD-STATUS"

const defaultState = {
    isLoading: false,
    genres: [],
}

const newPostReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOAD_STATUS:
            return {
                ...state,
                isLoading: action.status,
            }
        case SET_GENRES:
            return {
                ...state,
                genres: [...action.genres],
            }
        default:
            return state
    }
}

const changeLoadStatus = (status) => ({
    type: CHANGE_LOAD_STATUS,
    status
})

export const setGenres = (genres) => ({
    type: SET_GENRES,
    genres
})

const genreDao = new GenreDao()
const postDao = new PostDao()

export const getGenres = () => dispatch => {
    return genreDao.getGenres()
        .then(response => {
            if (response.data) {
                dispatch(setGenres(response.data))
            } else {
                alert(response)
            }
        })
}

export const createPost = (post) => dispatch => {
    dispatch(changeLoadStatus(true))
    return postDao.createPost(post)
        .then(response => {
            if (response && response.data) {
                debugger
                dispatch(setOpenedPost(response.data))
                dispatch(changeLoadStatus(false))
            } else {
                alert(response)
            }
        })
}

export default newPostReducer