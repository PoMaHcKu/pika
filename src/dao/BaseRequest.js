import axios from "axios"

const baseRequest = (token = null) => {
    const authHeader = {
        baseURL: 'http://pikachy.herokuapp.com/',
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
        }
    }

    return {
        get: (url, options = {}) => axios.get(url, {...authHeader, ...options}),
        post: (url, data, options = {}) => axios.post(url, data, {...authHeader, ...options}),
        put: (url, data, options = {}) => axios.put(url, data, {...authHeader, ...options}),
        patch: (url, data, options = {}) => axios.patch(url, data, {...authHeader, ...options}),
        delete: (url, options = {}) => axios.delete(url, {...authHeader, ...options}),
    }
}

export default baseRequest;