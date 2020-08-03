import baseRequest from './BaseRequest'

export const getTagsRequest = () => {
    return baseRequest()
        .get(`tag?count=30`)
        .then(response => response)
        .catch(response => response.error)
}

export const getAllTagsRequest = (page = 0) => {
    return baseRequest
        .patch(`tag?${page}`)
}