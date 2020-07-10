import * as React from "react";
import {Col, Row} from "reactstrap";
import style from "./Commentaries.module.css";

let Commentary = (props) => {
    return (
        <Row key={props.commentary.id} className={style.commentary}>
                <Col className={`col-12 ${style.author}`}>
                    <span>Author: {props.commentary.author}</span>
                </Col>
                <Col className={`col-12 ${style.text}`}>
                    <span>{props.commentary.textCommentary}</span>
                </Col>
                <Col className={`col-12 ${style.created}`}>
                    <span>Sent: {props.commentary.created}</span>
                </Col>
        </Row>
    )
}

export default Commentary;