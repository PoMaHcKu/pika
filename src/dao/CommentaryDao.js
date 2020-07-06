import {BaseDao} from "./BaseDao";

export class CommentaryDao extends BaseDao {

    getCommentaries = (postId, sort = "created", page = 0, size = 10) => {
        return this.baseRequest
            .get(`commentary?postId=${postId}&page=${page}&size=${size}&sort=${sort}`)
            .then(response => response)
            .catch(response => response);
    }
}