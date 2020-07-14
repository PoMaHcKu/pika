import {compose} from "redux";
import {connect} from "react-redux";
import React from "react";
import {getProfile} from "../../redux/ProfileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.id);
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }

}

const mapStateToProps = (state) => ({
    profile: state.profileState.profile,
})
const mapDispatchToProps = {
    getProfile
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);