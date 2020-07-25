import * as React from "react";
import {Col, Row} from "reactstrap";
import Post from "./Post";
import {getByGenre, getByTag} from "../../redux/PostReducer";
import Preloader from "../common/preloader/Preloader";
import {connect} from "react-redux";

const PostContainer = (props) => {

    return (
        props.creatingNewPost ? <Preloader/> :
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
    creatingNewPost: state.newPostState.isLoading
})

const mapDispatchToProps = {
    getByGenre,
    getByTag
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);