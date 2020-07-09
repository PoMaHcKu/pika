import * as React from "react";
import {Container} from "reactstrap";
import style from "./Commentaries.module.css"
import NewCommentaryForm from "./new-comment-form/NewCommentaryForm";
import CommentaryContainer from "./commentary/CommentaryContainer";
import Pagination from "../../pagination/Pagination";

let Commentaries = (props) => {

    let commentaries = props.commentaries.map(comment =>
        <CommentaryContainer key={comment.id} commentary={comment}/>
    )

    const addCommentary = (form) => {
        let commentary = {
            textCommentary: form.textCommentary,
            post: props.postId
        }
        props.sendComment(commentary);
        form.textCommentary = "";
    }

    return (
        <Container className={style.commentaryContainer}>
            {props.isAuth ? <NewCommentaryForm onSubmit={addCommentary}/> : null}
            <Pagination postId={props.postId}/>
            {commentaries}
            <Pagination postId={props.postId}/>
        </Container>
    )
}

export default Commentaries;