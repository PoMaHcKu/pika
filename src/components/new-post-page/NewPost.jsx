import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import {compose} from "redux";
import {connect} from "react-redux";
import {createPost, getGenres} from "../../redux/NewPostReducer";
import NewPostForm from "./NewPostForm";
import {withRouter} from "react-router-dom";

class NewPost extends React.Component {

    componentDidMount() {
        this.props.getGenres();
    }

    addPost = (data) => {
        let post = {
            title: data.title,
            sections: data.sections,
            genre: data.genre
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
    withRouter
)(NewPost);