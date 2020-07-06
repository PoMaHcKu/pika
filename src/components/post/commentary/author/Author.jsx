import * as React from "react";
import {Col} from "reactstrap";

let Author = (props) => {
        return (
            <Col>
                <span>Author: {props.author.username}</span>
            </Col>
        )
}

export default Author;