import {BaseDao} from "./BaseDao";

export class CommentaryDao extends BaseDao {

    getCommentaries = (sort = "created", page = 0, size = 10, postId) => {
        return this.baseRequest
            .get(`commentary?page=${page}&size=${size}&sort=${sort}&postId=${postId}`)
            .then(response => response)
            .catch(response => response);
    }
}