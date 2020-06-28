import * as React from "react";
import {authenticate, changeProcessStatus} from "../../redux/AuthenticationReducer";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithRedirectToMain";

class Login extends React.Component {

    authentication = (form) => {
        this.props.changeProcessStatus();
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
                <LoginForm onSubmit={this.authentication}
                           isProcess={this.props.isProcess}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isProcess: state.authenticationState.isProcess,
});

let mapDispatchToProps = {
    authenticate,
    changeProcessStatus
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Login);