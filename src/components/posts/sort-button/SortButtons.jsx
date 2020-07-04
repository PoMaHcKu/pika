import * as React from "react";
import style from "./SortButtons.module.css"
import {Col, Row} from "reactstrap";

const POPULAR = "mark";
const LATEST = "updated";


let SortButtons = (props) => {

    return (
        <Row>
            <Col>
                <div className={`btn ${style.sortButton}`} onClick={() => props.getPosts(POPULAR)}>POPULAR</div>
            </Col>
            <Col>
                <div className={`btn ${style.sortButton}`} onClick={() => props.getPosts(LATEST)}>LATEST</div>
            </Col>
        </Row>
    )

}

export default SortButtons;