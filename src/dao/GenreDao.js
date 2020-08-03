import baseRequest from './BaseRequest'

export const getGenresRequest = () => {
    return baseRequest()
        .get(`genre`)
        .then(response => response)
        .catch(response => response.error)
}