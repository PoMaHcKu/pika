import {CommentaryDao} from "../dao/CommentaryDao";
import {UserDao} from "../dao/UserDao";
import {setCountPage, setCurrentPage} from "./PaginationReducer";

const SET_COMMENTARIES = "SET-COMMENTARIES";
const ADD_COMMENTARY = "ADD-COMMENTARY";
const CHANGE_STATUS = "CHANGE-LOADING-STATUS";
const SET_AUTHOR = "SET-AUTHOR";

let defaultState = {
    commentaries: [],
    isLoading: false,
}

const commentaryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_COMMENTARIES:
            return {
                ...state,
                commentaries: [...action.commentaries]
            }
        case ADD_COMMENTARY:
            return {
                ...state,
                commentaries: [
                    action.commentary,
                    ...state.commentaries,
                ]
            }
        case CHANGE_STATUS:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_AUTHOR:
            return {
                ...state,
                commentaries: state.commentaries.map(commentary => {
                    if (commentary.id === action.commentaryId) {
                        commentary = {
                            ...commentary,
                            author: action.user.username
                        }
                    }
                    return commentary;
                })
            }
        default:
            return state;
    }
}

const setCommentaries = (commentaries) => ({
    type: SET_COMMENTARIES,
    commentaries
})
export const addCommentary = (commentary) => ({
    type: ADD_COMMENTARY,
    commentary
})
const changeLoadingStatus = (isLoading) => ({
    type: CHANGE_STATUS,
    isLoading
})

const setAuthor = (commentaryId, user) => ({
    type: SET_AUTHOR,
    commentaryId,
    user
})

const commentaryDao = new CommentaryDao();
const userDao = new UserDao();

export const getCommentaries = (sort, page, size, postId) => dispatch => {
    dispatch(changeLoadingStatus(true));
    commentaryDao.getCommentaries(sort, page, size, postId)
        .then(response => {
            dispatch(changeLoadingStatus(false));
            dispatch(setCommentaries(response.data.content));
            dispatch(setCountPage(response.data.totalPages));
            dispatch(setCurrentPage(response.data.number));
        });
}

export const getAuthor = (commentary) => dispatch => {
    userDao.getUser(commentary.user)
        .then(response => {
            dispatch(setAuthor(commentary.id, response.data));
        });
}

export default commentaryReducer;