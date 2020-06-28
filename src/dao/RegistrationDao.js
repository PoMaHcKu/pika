import {BaseDao} from "./BaseDao";

const getBase64AuthData = (user) => {
    return btoa(encodeURIComponent(`${user.username}:${user.password}`)
        .replace(
            /%([0-9A-F]{2})/g,
            (match, p1) => String.fromCharCode(parseInt(p1, 16))
        ));
}

export class RegistrationDao extends BaseDao {

    registration = (user) => {
        return this.baseRequest
            .post("registration", user)
            .then(response => {
                return response.data
            })
            .catch(err => {
                console.log(err.response.data.error);
                alert(err.response.data.error);
            });
    }

    authentication = (user) => {
        return this.baseRequest
            .get("sign-in", {headers: {"Authorization": "Basic " + getBase64AuthData(user)}})
            .then(response => response.data)
            .catch(err => {
            console.log(err.response.data.error);
            alert(err.response.data.error);
        });
    }

    logout = () => {
        return this.baseRequest
            .get("logout");
    }
}