import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import {compose} from "redux";
import {connect} from "react-redux";
import {createPost, getGenres} from "../../redux/NewPostReducer";
import NewPostForm from "./NewPostForm";
import {withRouter} from "react-router-dom";
import {withoutAuthRedirect} from "../../hoc/WithRedirectToLogin";

class NewPost extends React.Component {

    componentDidMount() {
        this.props.getGenres();
    }

    addPost = (data) => {
        let post = {
            title: data.title,
            description: data.description,
            sections: data.sections,
            genre: data.genre,
            tags: data.tags.split(",")
        }
        if (!post.sections) {
            alert("Count of sections can't be less one!");
            return;
        }
        this.props.createPost(post);
        this.props.history.push("/post");
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Creating new post</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewPostForm genres={this.props.genres}
                                     onSubmit={this.addPost}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    genres: state.newPostState.genres,
})
const mapDispatchToProps = {
    getGenres,
    createPost
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withoutAuthRedirect
)(NewPost);