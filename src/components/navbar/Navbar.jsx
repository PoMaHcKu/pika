import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css";
import {connect} from "react-redux";

const Navbar = (props) => {
    return (
        <nav className={style.navbar}>
            <div className={style.item}>
                <NavLink to={"/main"} activeClassName={style.active}>Main</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/posts"} activeClassName={style.active}>Posts</NavLink>
            </div>
            {props.isAuth ?
                <div className={style.item}>
                    <NavLink to={"/logout"} activeClassName={style.active}>Log out</NavLink>
                </div>
                :
                <div>
                    <div className={style.item}>
                        <NavLink to="/registration" activeClassName={style.active}>Registration</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to={"/login"} activeClassName={style.active}>Sign in</NavLink>
                    </div>
                </div>
            }
        </nav>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.authenticationState.authenticatedUser != null
})

export default connect(mapStateToProps)(Navbar);