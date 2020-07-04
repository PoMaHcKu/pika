import * as React from "react";
import {getPosts, setSort} from "../../redux/PostRducer";
import {connect} from "react-redux";
import Posts from "./Posts";


class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.getPosts(this.props.sort);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.sort !== prevProps.sort) {
            this.setState(this.state);
        }
    }

    render() {
        return (
            <Posts posts={this.props.posts}
                   setSort={this.props.setSort}
                   isLoading={this.props.isLoading}/>
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
    setSort
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);