import * as React from "react";
import style from "./Posts.module.css"
import {Col, Container, Row} from "reactstrap";


const Posts = (props) => {

    let posts = props.posts.map(post =>
        <Row key={post.id} className={style.post}>
            <Col className={`${style.title} col-5`}>
                <span>{post.title}</span>
            </Col>
            <Col className={`col-7 ${style.article}`}>
                <span> dslkgfj dresg asjg;lt jgjaslgkj</span>
            </Col>
            <Col className={`${style.like} col-5`}>
                <span>Like: {post.mark}</span>
            </Col>
        </Row>
    )


    return (
        <Container>
            {posts}
        </Container>
    )
}

export default Posts;