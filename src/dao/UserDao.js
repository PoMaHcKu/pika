import {BaseDao} from "./BaseDao";

export class UserDao extends BaseDao {
    getUser = (id) => {
        return this.baseRequest
            .get(`user/${id}`)
            .then(response => response)
            .catch(response => response);
    }
}