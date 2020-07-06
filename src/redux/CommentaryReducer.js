import {CommentaryDao} from "../dao/CommentaryDao";

const SET_COMMENTARIES = "SET-COMMENTARIES";
const ADD_COMMENTARY = "ADD-COMMENTARY";
const CHANGE_STATUS = "CHANGE-LOADING-STATUS";

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
                    ...state.commentaries,
                    action.commentary,
                ]
            }
        case CHANGE_STATUS:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

const setCommentaries = (commentaries) => ({
    type: SET_COMMENTARIES,
    commentaries
})
const addCommentary = (commentary) => ({
    type: ADD_COMMENTARY,
    commentary
})
const changeLoadingStatus = (isLoading) => ({
    type: CHANGE_STATUS,
    isLoading
})

const commentaryDao = new CommentaryDao();

export const getCommentaries = (postId, sort, page, size) => {
    return (dispatch) => {
        dispatch(changeLoadingStatus(true));
        commentaryDao.getCommentaries(postId, sort, page, size)
            .then(response => {
                dispatch(changeLoadingStatus(false));
                dispatch(setCommentaries(response.data.content));
            })
    }
}

export default commentaryReducer;