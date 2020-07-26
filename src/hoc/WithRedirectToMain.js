import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


let mapStateToProps = (state) => ({
    isAuth: state.authenticationState.authenticatedUser != null,
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) {
                return <Redirect to={"/"}/>
            }
            return <Component {...this.props}/>
        }
    }

    return compose(
        connect(mapStateToProps)
    )(RedirectComponent);
};