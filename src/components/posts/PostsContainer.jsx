import * as React from 'react'
import {useEffect} from 'react'
import {getByGenre, getByTag, getPost, getPosts} from '../../redux/PostReducer'
import {connect} from 'react-redux'
import Posts from './Posts'

const PostsContainer = (props) => {

    useEffect(() => {
            if (props.posts.length === 0) {
                props.getPosts()
            }
        }
    )

    return (
        <Posts posts={props.posts}
               getPosts={props.getPosts}
               isLoading={props.isLoading}
               getPost={props.getPost}
               getByTag={props.getByTag}
               getByGenre={props.getByGenre}
        />
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)