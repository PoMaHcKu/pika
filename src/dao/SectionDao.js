import baseRequest from './BaseRequest'
import {getToken} from '../redux/selector/authSelector'

export const getSectionRequest = (id) => {
    return baseRequest(getToken())
        .get(`section?id=${id}`)
}

export const likeSectionRequest = (id) => {
    return baseRequest(getToken())
        .get(`section/${id}`)
}

export const dislikeSectionRequest = (id) => {
    return baseRequest(getToken())
        .delete(`section/${id}`)
}