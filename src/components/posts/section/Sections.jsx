import * as React from "react";
import {Col, Row} from "reactstrap";
import style from "../Posts.module.css";

let Sections = (props) => {
    let sections = props.sections.map(section => {
            return (
                <Row key={section.id}>
                    <Col className={style.article}>
                        {section.article}
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