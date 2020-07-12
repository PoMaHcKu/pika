import * as React from "react";
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
        <div className={"mt-2 justify-content-center"}>
            {props.isAuth ? <NewCommentaryForm onSubmit={addCommentary}/> : null}
            <Pagination parrentId={props.postId} onChangePage={props.getCommentaries}/>
            {commentaries}
            <Pagination parrentId={props.postId} onChangePage={props.getCommentaries}/>
        </div>
    )
}

export default Commentaries;