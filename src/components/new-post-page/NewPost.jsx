import * as React from 'react'
import {useCallback, useEffect} from 'react'
import {Col, Container, Row} from 'reactstrap'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {createPost, getGenres} from '../../redux/NewPostReducer'
import NewPostForm from './NewPostForm'
import {withRouter} from 'react-router-dom'
import {withoutAuthRedirect} from '../../hoc/WithRedirectToLogin'

const NewPost = (props) => {

    const {getGenres} = props

    const genres = useCallback(() => getGenres(), [getGenres])

    useEffect(() => {
        genres()
    }, [genres])

    const addPost = (data) => {
        let post = {
            title: data.title,
            description: data.description,
            sections: data.sections,
            genre: data.genre,
            tags: data.tags.split(',')
        }
        if (!post.sections) {
            alert('Count of sections can\'t be less one!')
            return
        }
        props.createPost(post)
        props.history.push('/post')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Creating new post</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewPostForm genres={props.genres}
                                 onSubmit={addPost}/>
                </Col>
            </Row>
        </Container>
    )
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
)(NewPost)