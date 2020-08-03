import * as React from 'react'
import style from './Posts.module.css'
import {Col, Container, Row} from 'reactstrap'
import Preloader from '../common/preloader/Preloader'
import SortButtons from './sort-button/SortButtons'
import Sections from './section/Sections'
import {NavLink} from 'react-router-dom'
import Pagination from '../pagination/Pagination'
import Genre from './genre/Genre'
import Tags from './tags/Tags'
import {ReadRating} from '../post/rating/Rating'

const Posts = (props) => {
    const selectPost = (post) => {
        props.getPost(post.id)
    }

    let posts = props.posts.map(post =>
        <Row className={`${style.post} bg-dark text-light mb-2 p-2`} key={post.id}>
            <Col className={'col-5'}>
                <NavLink onClick={() => selectPost(post)} to={`/post/${post.id}`}>
                    <Row>
                        <Col className={style.title}>
                            <span>{post.title}</span>
                        </Col>
                    </Row>
                </NavLink>
                <Row>
                    <Col className={style.like}>
                        <NavLink to={'/posts'}>
                            <Genre genre={post.genre} getByGenre={props.getByGenre}/>
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col className={style.like}>
                        <ReadRating postId={post.id} currentRate={post.rating}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={style.created}>
                        <span>Created: {post.created}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className={style.tagContainer}>
                        <Tags tags={post.tags} getByTag={props.getByTag}/>
                    </Col>
                </Row>
            </Col>
            <Col className={`col-7`}>
                <Sections sections={post.sections}/>
            </Col>
        </Row>
    )

    return (
        <Container className={style.postContainer}>
            <SortButtons getPosts={props.getPosts}/>
            <Pagination onChangePage={props.getPosts}/>
            {props.isLoading ? <Preloader/> : posts}
            <Pagination onChangePage={props.getPosts}/>
        </Container>
    )
}

export default Posts