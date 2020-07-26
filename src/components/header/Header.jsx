import React from "react";
import {Col, Row} from "reactstrap";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Row className="jumbotron text-light bg-dark text-center m-auto ">
            <Col>
                <NavLink to={"/"}>
                    <h1>PIKACHY</h1>
                </NavLink>
                <p>Here you can read and write about some things...</p>
            </Col>
        </Row>
    )
}

export default Header;