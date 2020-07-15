import {Col, Row} from "react-bootstrap";
import React from "react";

const Profile = (props) => {
    return (
        <Row>
            <Col>
                <h3>{props.profile.username}</h3>
            </Col>
            <Col>
                <h5>{props.profile.email}</h5>
            </Col>
        </Row>
    )
}

export default Profile;
