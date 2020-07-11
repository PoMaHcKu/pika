import {BaseDao} from "./BaseDao";

export class PostDao extends BaseDao {

    getPosts = (sort = "created", page = 0, size = 7) => {
        return this.baseRequest
            .get(`post?page=${page}&size=${size}&sortBy=${sort}`)
            .then(response => response)
            .catch(response => response);
    }

    createPost = (post) => {
        return this.baseRequest
            .post("/post", post)
            .then(response => {
                debugger;
                return response
            })
            .catch(reason => {
                debugger;
                alert(reason);
            });
    }
}