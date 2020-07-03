import * as React from "react";
import {Col, Container, Row} from "reactstrap";


const Posts = (props) => {

    let posts = props.posts.map(post =>
        <Row key={post.id}>
            <Col>
                <span>{post.title}</span>
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