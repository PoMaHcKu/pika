import {BaseDao} from "./BaseDao";

export class SectionDao extends BaseDao {

    getSection = (id) => {
        return this.baseRequest
            .get(`section?id=${id}`)
    }
}