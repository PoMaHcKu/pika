import {BaseDao} from "./BaseDao";

export class PostDao extends BaseDao {

    getPosts = (sort = "created", page = 0, size = 10) => {
        return this.baseRequest
            .get(`post?page=${page}&size=${size}&sortBy=${sort}`)
            .then(response => response)
            .catch(response => response);
    }
}