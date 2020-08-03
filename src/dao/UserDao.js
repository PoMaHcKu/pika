import baseRequest from './BaseRequest'

export const getUserRequest = (id) => {
    return baseRequest()
        .get(`user/${id}`)
        .then(response => {
            return response
        })
        .catch(response => response);
}