import * as React from "react";
import {Col, Row} from "reactstrap";
import Post from "./Post";
import {getByGenre, getByTag, ratePost} from "../../redux/PostReducer";
import Preloader from "../common/preloader/Preloader";
import {connect} from "react-redux";
import {isAuth} from "../../redux/selector/authSelector";

const PostContainer = (props) => {

    return (
        (props.creatingNewPost || props.isLoadingPost) ? <Preloader/> :
            <Row>
                <Col>
                    <Post post={props.post}
                          getByGenre={props.getByGenre}
                          getByTag={props.getByTag}
                          rate={props.ratePost}
                          isAuth={props.isAuth}/>
                </Col>
            </Row>
    )
}

const mapStateToProps = (state) => ({
    post: state.postsState.openedPost,
    creatingNewPost: state.newPostState.isLoading,
    isLoadingPost: state.postsState.isLoading,
    isAuth: isAuth(state)
})

const mapDispatchToProps = {
    getByGenre,
    getByTag,
    ratePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);