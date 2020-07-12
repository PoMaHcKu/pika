import * as React from "react";
import RegistrationForm from "./RegistrationForm";
import {connect} from "react-redux";
import {registrationUser} from "../../redux/RegistrationReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithRedirectToMain";
import Preloader from "../common/preloader/Preloader";
import {Row, Col} from "reactstrap";

class RegistrationContainer extends React.Component {

    registration = (form) => {
        let user = {
            username: form.username,
            email: form.email,
            password: form.password
        }
        this.props.registrationUser(user);
    }

    render() {
        return (
            <Row className="justify-content-center bg-dark text-light p-2 pb-4">
                <Col className="col-xs-12 col-sm-10 col-md-8">
                    <h3>Registration</h3>
                    {this.props.isProcess ?
                        <Preloader/> :
                        <RegistrationForm onSubmit={this.registration}
                                          isProcess={this.props.isProcess}/>
                    }
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    isProcess: state.registrationState.isProcess,
})

const mapDispatchToProps = {
    registrationUser,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(RegistrationContainer);