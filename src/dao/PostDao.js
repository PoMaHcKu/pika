import {BaseDao} from "./BaseDao";

export class PostDao extends BaseDao {

    getPosts = (sort = "created", page = 0, size = 7) => {
        return this.baseRequest
            .get(`post?page=${page}&size=${size}&sortBy=${sort}`);
    }

    getByTag = (tag, sort = "created", page = 0, size = 7) => {
        return this.baseRequest
            .get(`post/tags?tag=${tag}&page=${page}&size=${size}&sortBy=${sort}`);
    }
    getByGenre = (genre, sort = "created", page = 0, size = 7) => {
        return this.baseRequest
            .get(`post/genre?genre=${genre}&page=${page}&size=${size}&sortBy=${sort}`);
    }

    createPost = (post) => {
        return this.baseRequest
            .post("/post", post);
    }

    likeSection = (id) => {
        return this.baseRequest
            .get(`/section/${id}`);
    }

    dislikeSection = (id) => {
        return this.baseRequest
            .delete(`/section/${id}`);
    }
}