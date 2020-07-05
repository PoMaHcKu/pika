import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import SectionsContainer from "./sections/SectionsContainer";
import style from "./Post.module.css"

const Post = (props) => {
    return (
        <Container className={style.postContainer}>
            <Row>
                <Col className={style.title}>
                    {props.post.title}
                </Col>
            </Row>
            <Row>
                <Col className={style.sections}>
                    <SectionsContainer sections={props.post.sections}/>
                </Col>
            </Row>
            <Row className={style.mark}>
                <Col>
                    {props.post.mark}
                </Col>
                <Col>
                    {props.post.created}
                </Col>
            </Row>
        </Container>
    )
}

export default Post;