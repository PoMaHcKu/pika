import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import SectionsContainer from "./sections/SectionsContainer";
import style from "./Post.module.css"
import CommentaryContainer from "./commentaryies/CommentariesContainer";
import GoBack from "../common/go-back/GoBack";
import Tags from "../posts/tags/Tags";
import {NavLink} from "react-router-dom";
import Genre from "../posts/genre/Genre";
import Rating from "./rating/Rating";

const Post = (props) => {
    return (
        <Container className={style.postContainer}>
            <Row>
                <Col className={style.title}>
                    {props.post.title}
                </Col>
            </Row>
            <Row>
                <Col className={style.description}>
                    {props.post.description}
                </Col>
            </Row>
            <Row>
                <Col className={style.sections}>
                    <SectionsContainer/>
                </Col>
            </Row>
            <Row>
                <Col className={style.genre}>
                    <NavLink to={"/posts"}>
                        <Genre genre={props.post.genre} getByGenre={props.getByGenre}/>
                    </NavLink>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tags tags={props.post.tags} getByTag={props.getByTag}/>
                </Col>
            </Row>
            <Row className={style.mark}>
                <Col>
                    {props.post.mark}
                </Col>
                <Col>
                    {props.post.created}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Rating currentRate={props.post.rating} postId={props.post.id}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GoBack/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CommentaryContainer postId={props.post.id}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Post;