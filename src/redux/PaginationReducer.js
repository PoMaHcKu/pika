const SET_COUNT_PAGE = "SET-COUNT-PAGE";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";

let defaultState = {
    pageCount: null,
    currentPage: null,
    sort: "created"
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