import * as React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) {
            if (!this.props.id) {
                return this.props.history.push("/login");
            } else {
                userId = this.props.id;
            }
        }
        this.props.getProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profileState.profile,
    id: state.authenticationState.authenticatedUser ?
        state.authenticationState.authenticatedUser.id : false
})

const mapDispatchToProps = {
    getProfile
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer);