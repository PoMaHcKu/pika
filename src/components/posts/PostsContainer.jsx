import * as React from "react";
import {getByGenre, getByTag, getPosts, setOpenedPost} from "../../redux/PostReducer";
import {connect} from "react-redux";
import Posts from "./Posts";

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <Posts posts={this.props.posts}
                   getPosts={this.props.getPosts}
                   isLoading={this.props.isLoading}
                   setOpendPost={this.props.setOpenedPost}
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
    setOpenedPost,
    getByTag,
    getByGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);