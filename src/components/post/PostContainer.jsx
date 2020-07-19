import * as React from "react";
import {Col, Row} from "reactstrap";
import Post from "./Post";
import {connect} from "react-redux";
import {getByGenre, getByTag} from "../../redux/PostReducer";

const PostContainer = (props) => {

    return (
        <Row>
            <Col>
                <Post post={props.post}
                      getByGenre={props.getByGenre}
                      getByTag={props.getByTag}/>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => ({
    post: state.postsState.openedPost,
})

const mapDispatchToProps = {
    getByGenre,
    getByTag
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);