import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


let mapStateToProps = (state) => ({
    isAuth: state.authenticationState.authenticatedUser != null,
});

export const withoutAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={"/login"}/>
            }
            return <Component {...this.props}/>
        }
    }

    return compose(
        connect(mapStateToProps)
    )(RedirectComponent);
};