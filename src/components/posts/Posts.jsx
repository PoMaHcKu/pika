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
        <NavLink to={`/post/${post.id}`} onClick={() => selectPost(post)} key={post.id} >
            <Row className={`col-12 ${style.post}`}>
                <Col className={"col-5"}>
                    <Row>
                        <Col className={style.title}>
                            <span>{post.title}</span>
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
            </Row>
        </NavLink>
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