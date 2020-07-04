import * as React from "react";
import {getPosts} from "../../redux/PostRducer";
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
            />
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.postsState.posts,
    isLoading: state.postsState.isLoading,
    sort: state.postsState.sort
})

const mapDispatchToProps = {
    getPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);