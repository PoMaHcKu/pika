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
                console.log(err);
                alert("Username or email already exists")
            });
    }

    authentication = (user) => {
        return this.baseRequest
            .get("login", {headers: {"Authorization": "Basic " + getBase64AuthData(user)}})
            .then(response => response)
            .catch(response => {
                console.log(response);
                alert("Incorrect username or password");
            });
    }

    logout = () => {
        return this.baseRequest
            .get("logout");
    }
}