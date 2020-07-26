import * as React from "react";
import {getByGenre, getByTag, getPost, getPosts} from "../../redux/PostReducer";
import {connect} from "react-redux";
import Posts from "./Posts";

class PostsContainer extends React.Component {

    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.props.getPosts();
        }
    }

    render() {
        return (
            <Posts posts={this.props.posts}
                   getPosts={this.props.getPosts}
                   isLoading={this.props.isLoading}
                   getPost={this.props.getPost}
                   getByTag={this.props.getByTag}
                   getByGenre={this.props.getByGenre}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.postsState.posts,
    isLoading: state.postsState.isLoading,
})

const mapDispatchToProps = {
    getPosts,
    getPost,
    getByTag,
    getByGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);