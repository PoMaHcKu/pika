import {Col, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import React from "react";

const FindPost = () => {
    return(
        <Row className="mt-2">
            <Col className="col-xs-6">Search some posts...</Col>
            <Col className="col-xs-3">Button find</Col>
            <Col className="col-xs-3">
                <NavLink to="/new">
                    <button className="btn btn-sm btn-primary">NEW POST</button>
                </NavLink>
            </Col>
        </Row>
    )
}

export default FindPost;