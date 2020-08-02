import {BaseDao} from "./BaseDao"

export class AuthenticationDao extends BaseDao {

    login = (user) => {
        return this.baseRequest
            .post("login", user)
            .then(response => () => {
                let token = response.data.token
                if (token) {
                    this.baseRequest.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    return response.data.username
                } else {
                    this.baseRequest.defaults.headers.common['Authorization'] = null
                    return null
                }
            })
    }

    logout = () => {
        return this.baseRequest.defaults.headers.common['Authorization'] = null
    }
}