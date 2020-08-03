import baseRequest from './BaseRequest'

export const registrationRequest = (user) => {
    return baseRequest()
        .post('registration', user)
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err.response.data.error)
            alert(err.response.data.error)
        })
}