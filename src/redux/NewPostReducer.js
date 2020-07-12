import {GenreDao} from "../dao/GenreDao";
import {PostDao} from "../dao/PostDao";
import {setOpenedPost} from "./PostReducer";

const SET_GENRES = "SET-GENRES";

const defaultState = {
    genres: [],
}

const newPostReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {
                ...state,
                genres: [...action.genres],
            }
        default:
            return state;
    }
}

export const setGenres = (genres) => ({
    type: SET_GENRES,
    genres
})

const genreDao = new GenreDao();
const postDao = new PostDao();

export const getGenres = () => dispatch => {
    return genreDao.getGenres()
        .then(response => {
            if (response.data) {
                dispatch(setGenres(response.data));
            } else {
                alert(response);
            }
        });
}

export const createPost = (post) => dispatch => {
    return postDao.createPost(post)
        .then(response => {
            if (response && response.data) {
                dispatch(setOpenedPost(response));
            } else {
                alert(response);
            }
        });
}

export default newPostReducer;