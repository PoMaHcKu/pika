import {composeWithDevTools} from 'redux-devtools-extension/index'
import {persistCombineReducers, persistStore} from 'redux-persist'
import {applyMiddleware, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import storage from 'redux-persist/lib/storage'
import authenticationReducer from './AuthenticationReducer'
import registrationReducer from './RegistrationReducer'
import commentaryReducer from './CommentaryReducer'
import paginationReducer from './PaginationReducer'
import mainPageReducer from './MainPageReducer'
import newPostReducer from './NewPostReducer'
import userReducer from './UsersReducer'
import postReducer from './PostReducer'
import appReducer from './AppReduser'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root-boot',
    storage,
}

let reducers = persistCombineReducers(
    persistConfig,
    {
        authenticationState: authenticationReducer,
        registrationState: registrationReducer,
        commentariesState: commentaryReducer,
        paginationState: paginationReducer,
        mainPageState: mainPageReducer,
        newPostState: newPostReducer,
        postsState: postReducer,
        usersState: userReducer,
        appState: appReducer,
        form: formReducer
    }
)

export let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export let persistedStore = persistStore(store)