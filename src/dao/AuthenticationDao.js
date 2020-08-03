import baseRequest from './BaseRequest'

export const login = (user) => {
    return baseRequest()
        .post('login', user)
        .then(response => {
            if (response.data) {
                return response.data
            }
        })
}