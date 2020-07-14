import React from "react";
import {Col, Row} from "reactstrap";


const Profile = (props) => {

    return (
        <Row>
            <Col>
                <h3>{props.profile.username}</h3>
                <h5>{props.profile.email}</h5>
                <h5>{props.profile.created}</h5>
            </Col>
        </Row>
    )
}

export default Profile;