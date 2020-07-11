import {BaseDao} from "./BaseDao";

export class GenreDao extends BaseDao {

    getGenres = () => {
        return this.baseRequest
            .get(`genre`)
            .then(response => response)
            .catch(response => response.error);
    }
}