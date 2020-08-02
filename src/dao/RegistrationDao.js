import {BaseDao} from "./BaseDao"

export class RegistrationDao extends BaseDao {

    registration = (user) => {
        return this.baseRequest
            .post("registration", user)
            .then(response => {
                return response.data
            })
            .catch(err => {
                console.log(err.response.data.error)
                alert(err.response.data.error)
            })
    }
}