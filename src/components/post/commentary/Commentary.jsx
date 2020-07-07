import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import style from "./Commentary.module.css"
import AuthorContainer from "./author/AuthorContainer";
import NewCommentaryForm from "./new-comment-form/NewCommentaryForm";

let Commentary = (props) => {

    let commentaries = props.commentaries.map(comment =>
        <Row key={comment.id} className={`col-12 ${style.commentary}`}>
            <Row className={"col-12"}>
                <Col className={`col-12 ${style.author}`}>
                    <AuthorContainer userId={comment.user}/>
                </Col>
                <Col className={`col-12 ${style.text}`}>
                    <span>{comment.textCommentary}</span>
                </Col>
                <Col className={`col-12 ${style.created}`}>
                    <span>Sent: {comment.created}</span>
                </Col>
            </Row>
        </Row>
    )

    const addCommentary = (form) => {
        let commentary = {
            textCommentary: form.textCommentary,
            post: props.postId
        }
        props.sendComment(commentary)
        form.textCommentary = "";
    }

    return (
        <Container className={style.commentaryContainer}>
            {props.isAuth ? <NewCommentaryForm onSubmit={addCommentary}/> : null}
            {commentaries}
        </Container>
    )
}

export default Commentary;