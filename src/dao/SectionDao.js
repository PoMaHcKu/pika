import baseRequest from './BaseRequest'

export const getSectionRequest = (id) => {
    return baseRequest()
        .get(`section?id=${id}`)
}

export const likeSectionRequest = (id) => {
    return baseRequest()
        .get(`section/${id}`)
}

export const dislikeSectionRequest = (id) => {
    return baseRequest()
        .delete(`section/${id}`)
}