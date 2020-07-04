import * as React from "react";
import style from "./Posts.module.css"
import {Col, Container, Row} from "reactstrap";
import Preloader from "../common/preloader/Preloader";
import {NavLink, Route} from "react-router-dom";

const POPULAR = "mark";
const LATEST = "updated";


const Posts = (props) => {

    let posts = props.posts.map(post =>
        <Row key={post.id} className={style.post}>
            <Col className={`${style.title} col-5`}>
                <span>{post.title}</span>
            </Col>
            <Col className={`col-7 ${style.article}`}>
                <span> dslkgfj dresg asjg;lt jgjaslgkj</span>
            </Col>
            <Col className={`${style.like} col-5`}>
                <span>Like: {post.mark}</span>
            </Col>
        </Row>
    )

    const setSort = (sort) => {
        props.setSort(0, 10, sort);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <NavLink to={"/posts/popular"} activeClassName={style.active} onClick={() => setSort(POPULAR)}>POPULAR</NavLink>
                </Col>
                <Col>
                    <NavLink to={"/posts/latest"} activeClassName={style.active} onClick={() => setSort(LATEST)}>LATEST</NavLink>
                </Col>
            </Row>
            <Route path={"/posts/popular"} render={() => props.isLoading ? <Preloader/> : posts}/>
            <Route path={"/posts/latest"} render={() => props.isLoading ? <Preloader/> : posts}/>
        </Container>
    )
}

export default Posts;