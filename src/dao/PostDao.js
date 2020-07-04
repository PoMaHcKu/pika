import {BaseDao} from "./BaseDao";

export class PostDao extends BaseDao {

    getPosts = (sort = "id", page = 0, size = 10) => {
        return this.baseRequest
            .get(`post?page=${page}&size=${size}&sort=${sort}`)
            .then(response => response)
            .catch(response => response);
    }
}