const SET_COUNT_PAGE = "SET-COUNT-PAGE";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_SORT = "SET-SORT";
const SET_SIZE = "SET-SIZE";

let defaultState = {
    pageCount: null,
    currentPage: 0,
    size: 10,
    sort: "created",
}

const paginationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_COUNT_PAGE:
            return {
                ...state,
                pageCount: action.countPage
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_SORT:
            return {
                ...state,
                sort: action.sort
            }
        case SET_SIZE:
            return {
                ...state,
                size: action.size
            }
        default:
            return state;
    }
}

export const setCountPage = (countPage) => ({
    type: SET_COUNT_PAGE,
    countPage
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const onClick = (action) => dispatch => {
    dispatch(action());
}

export default paginationReducer;