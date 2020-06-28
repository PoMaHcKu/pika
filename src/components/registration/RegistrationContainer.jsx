import * as React from "react";
import RegistrationForm from "./RegistrationForm";
import {connect} from "react-redux";
import {changeProcessStatus, registrationUser} from "../../redux/RegistrationReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithRedirectToMain";

class RegistrationContainer extends React.Component {

    registration = (form) => {
        this.props.changeProcessStatus();
        let user = {
            username: form.username,
            email: form.email,
            password: form.password
        }
        this.props.registrationUser(user);
    }

    render() {
        return (
            <div>
                <h3>Registration</h3>
                <RegistrationForm onSubmit={this.registration}
                                  isProcess={this.props.isProcess}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isProcess: state.registrationState.isProcess,
})

const mapDispatchToProps = {
    registrationUser,
    changeProcessStatus
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(RegistrationContainer);