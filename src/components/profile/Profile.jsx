import {Col, Row} from "react-bootstrap";
import React from "react";

let Profile = (props) => {
    return (
        <Row>
            <Col>
                <h3>{props.userProfile.username}</h3>
            </Col>
            <Col>
                <h5>{props.userProfile.email}</h5>
            </Col>
        </Row>
    )
}

export default Profile;
