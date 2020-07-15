import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {withoutAuthRedirect} from "../../hoc/WithoutAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            id = this.props.authenticatedUser.id;
        }
        debugger;
        this.props.getProfile(id);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Profile userProfile={this.props.userProfile}/>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profileState.userProfile,
    authenticatedUser: state.authenticationState.authenticatedUser
})
const mapDispatchToProps = {
    getProfile,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withoutAuthRedirect
)(ProfileContainer);