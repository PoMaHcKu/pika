import * as React from "react";
import {Col, Row} from "reactstrap";
import {Button} from "../../common/button/Button";

const POPULAR = "mark";
const LATEST = "updated";


let SortButtons = (props) => {

    return (
        <Row>
            <Col>
                <Button lable={"POPULAR"} onClick={() => props.getPosts(POPULAR)}/>
            </Col>
            <Col>
                <Button lable={"LATEST"} onClick={() => props.getPosts(LATEST)}/>
            </Col>
        </Row>
    )

}

export default SortButtons;