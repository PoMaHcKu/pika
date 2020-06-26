import * as axios from "axios";

export class BaseDao {

    baseRequest;

    constructor() {
        this.baseRequest = axios.create({
            withCredentials: true,
            baseURL: "https://pikachy.herokuapp.com/"
        })
    }

}