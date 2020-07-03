import {BaseDao} from "./BaseDao";

export class PostDao extends BaseDao {

    getPosts = (page = 0, size = 10) => {
        return this.baseRequest
            .get(`post?page=${page}&size=${size}`)
            .then(response => response)
            .catch(response => response);
    }
}