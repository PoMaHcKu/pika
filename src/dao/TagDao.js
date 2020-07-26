import {BaseDao} from "./BaseDao";

export class TagDao extends BaseDao {

    getTags = () => {
        return this.baseRequest
            .get(`tag?count=30`)
            .then(response => response)
            .catch(response => response.error);
    }

    getAllTags = (page = 0) => {
        return this.baseRequest
            .patch(`tag?${page}`)
    }
}