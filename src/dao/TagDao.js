import baseRequest from './BaseRequest'
import {getToken} from "../redux/selector/authSelector"

export const getTagsRequest = () => {
    return baseRequest()
        .get(`tag?count=30`)
        .then(response => response)
        .catch(response => response.error)
}

export const getAllTagsRequest = (page = 0) => {
    return baseRequest(getToken())
        .patch(`tag?page=${page}`)
}