import * as React from "react";
import style from "./Posts.module.css"
import {Col, Container, Row} from "reactstrap";
import Preloader from "../common/preloader/Preloader";
import SortButtons from "./sort-button/SortButtons";
import Sections from "./section/Sections";
import {NavLink} from "react-router-dom";
import Pagination from "../pagination/Pagination";

const Posts = (props) => {

    const selectPost = (post) => {
        props.setOpendPost(post);
    }

    let posts = props.posts.map(post =>
        <Row className={`${style.post} bg-dark text-light mb-2 p-2`} key={post.id}>
            <Col className={"col-5"}>
                <NavLink to={`/post/${post.id}`} onClick={() => selectPost(post)}>
                    <Row>
                        <Col className={style.title}>
                            <span>{post.title}</span>
                        </Col>
                    </Row>
                </NavLink>
                <Row>
                    <Col className={style.like}>
                        <NavLink to={"/posts"}>
                            <span onClick={() => props.getByGenre(post.genre)}>{post.genre}</span>
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col className={style.like}>
                        <span>Like: {post.mark}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className={style.created}>
                        <span>Created: {post.created}</span>
                    </Col>
                </Row>
            </Col>
            <Col className={`col-7`}>
                <Sections sections={post.sections}/>
            </Col>
            <Row className='col-auto'>
                <Col>
                    {post.tags.map(tag =>
                        <NavLink to={"/posts"} key={tag}>
                            <span className={style.tag} onClick={() => props.getByTag(tag)}>{tag} </span>
                        </NavLink>
                    )}
                </Col>
            </Row>
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

export default Posts;