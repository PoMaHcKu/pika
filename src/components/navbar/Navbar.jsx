import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/AuthenticationReducer";
import {Col, Row} from "reactstrap";

const Navbar = (props) => {
    return (
        <Row className="mt-1">
            <Col>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-1">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/main">Main</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/posts">Posts</NavLink>
                            </li>
                        </ul>
                    </div>
                    {props.isAuth ?
                        <div className="navbar-nav">
                            <div className="nav-item">
                                <NavLink className="nav-link" to="/login" onClick={props.logout}>Sign out</NavLink>
                            </div>
                        </div>
                        :
                        <div className="navbar-nav">
                            <div className="nav-item">
                                <NavLink className="nav-link" to="/registration">Registration</NavLink>
                            </div>
                            <div className="nav-item">
                                <NavLink className="nav-link" to="/login">Sign in</NavLink>
                            </div>
                        </div>
                    }
                </nav>
            </Col>
        </Row>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.authenticationState.authenticatedUser != null
})

let mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);