import {getGenresRequest} from '../dao/GenreDao'
import {setOpenedPost} from './PostReducer'
import {createPostRequest} from '../dao/PostDao'

const SET_GENRES = 'SET-GENRES'
const CHANGE_LOAD_STATUS = 'CHANGE-LOAD-STATUS'

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

export const getGenres = () => dispatch => {
    return getGenresRequest()
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
    return createPostRequest(post)
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