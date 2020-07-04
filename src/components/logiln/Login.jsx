import * as React from "react";
import {authenticate} from "../../redux/AuthenticationReducer";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithRedirectToMain";
import Preloader from "../common/preloader/Preloader";

class Login extends React.Component {

    authentication = (form) => {
        let user = {
            username: form.username,
            password: form.password
        }
        this.props.authenticate(user);
    }

    render() {
        return (
            <div>
                <h3>Sign in</h3>
                {this.props.isProcess ? <Preloader/> :
                    <LoginForm onSubmit={this.authentication}
                               isProcess={this.props.isProcess}/>
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isProcess: state.authenticationState.isProcess,
});

let mapDispatchToProps = {
    authenticate
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Login);