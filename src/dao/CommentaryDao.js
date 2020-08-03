import baseRequest from './BaseRequest'

export const getCommentRequest = (sort = 'created', page = 0, size = 10, postId) => {
    return baseRequest()
        .get(`commentary?page=${page}&size=${size}&sort=${sort}&postId=${postId}`)
        .then(response => response)
        .catch(response => response)
}