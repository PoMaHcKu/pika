import axios from "axios"
import {getToken} from "../redux/selector/authSelector";
import {store} from "../redux/Store";

const instance = axios.create()
instance.defaults.baseURL = 'https://pikachy.herokuapp.com/'
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.interceptors.response.use(
    res => res,
    error => {
        if (error.response.status === 401) {
            store.getState().authenticationState.currentUser = null
            window.location.replace('/login')
        }
        debugger
        return Promise.reject(error);
    }
)

const baseRequest = () => {
    let token = getToken()
    if (token) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + getToken()
    }
    return instance
}
export default baseRequest