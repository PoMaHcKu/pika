import baseRequest from './BaseRequest'
import {getRefreshToken} from "../redux/selector/authSelector";

export const login = (user) => {
    return baseRequest()
        .post('login', user)
        .then(response => response.data)
}

export const refreshLogin = () => {
    return baseRequest()
        .get('login/refresh', {
            header: {
                'Refresh': getRefreshToken()
            }
        })
        .then(response => response.data)
}