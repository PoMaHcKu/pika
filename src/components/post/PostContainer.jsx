import * as React from "react";
import {Col, Row} from "reactstrap";
import Post from "./Post";
import {connect} from "react-redux";

const PostContainer = (props) => {

    return (
        <Row>
            <Col>
                <Post post={props.post}/>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => ({
    post: state.postsState.openedPost,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);