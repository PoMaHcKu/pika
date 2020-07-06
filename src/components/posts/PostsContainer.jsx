import * as React from "react";
import {getPosts, setOpenedPost} from "../../redux/PostRducer";
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
    setOpenedPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);