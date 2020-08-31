import baseRequest from './BaseRequest'

export const getPostsRequest = (sort = 'created', page = 0, size = 10) => {
    return baseRequest()
        .get(`post?page=${page}&size=${size}&sortBy=${sort}`)
}

export const getPostRequest = (postId) => {
    return baseRequest()
        .get(`post/${postId}`)
}

export const getByTagRequest = (tag, sort = 'created', page = 0, size = 7) => {
    return baseRequest()
        .get(`post/tags?tag=${tag}&page=${page}&size=${size}&sortBy=${sort}`)
}
export const getByGenreRequest = (genre, sort = 'created', page = 0, size = 7) => {
    return baseRequest()
        .get(`post/genre?genre=${genre}&page=${page}&size=${size}&sortBy=${sort}`)
}

export const createPostRequest = (post) => {
    return baseRequest()
        .post('post', post)
}

export const searchPostRequest = (text) => {
    return baseRequest()
        .get(`post/search/${text}`)
}

export const ratePostRequest = (mark, postId) => {
    return baseRequest()
        .get(`rate?mark=${mark}&postId=${postId}`)
}