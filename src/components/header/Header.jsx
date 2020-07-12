import React from "react";
import {Col, Row} from "reactstrap";

const Header = () => {
    return (
        <Row className="jumbotron text-light bg-dark text-center m-auto">
            <Col>
                <h1>PIKACHY</h1>
                <p>There are can read and write about some things...</p>
            </Col>
        </Row>
    )
}

export default Header;