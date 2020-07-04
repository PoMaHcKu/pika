import * as React from "react";
import {Col, Row} from "reactstrap";

let Sections = (props) => {
    let sections = props.sections.map(section => {
            return (
                <Row key={section.id}>
                    <Col>
                        <h6>{section.article}</h6>
                    </Col>
                </Row>
            )
        }
    )

    return (
        <Row>
            <Col>
                {sections}
            </Col>
        </Row>
    )
}

export default Sections;