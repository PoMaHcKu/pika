import * as React from "react";
import style from "./Posts.module.css"
import {Col, Container, Row} from "reactstrap";
import Preloader from "../common/preloader/Preloader";
import SortButtons from "./sort-button/SortButtons";
import Sections from "./section/Sections";

const Posts = (props) => {

    let posts = props.posts.map(post =>
        <Row key={post.id} className={`${style.post} col-12`}>
            <Col className={"col-5"}>
                <Row>
                    <Col className={style.title}>
                        <span>{post.title}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className={style.like}>
                        <span>Like: {post.mark}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className={style.created}>
                        <span>Created: {post.created}</span>
                    </Col>
                </Row>
            </Col>
            <Col className={`col-7 ${style.article}`}>
                <Sections sections={post.sections}/>
            </Col>
        </Row>
    )

    return (
        <Container className={style.postContainer}>
            <SortButtons getPosts={props.getPosts}/>
            {props.isLoading ? <Preloader/> : posts}
        </Container>
    )
}

export default Posts;