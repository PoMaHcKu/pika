import * as React from "react";
import {Field, reduxForm} from "redux-form";

let NewCommentaryForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"textCommentary"} required={true} component={"textarea"} cols={50} rows={3}/>
            <br/>
            <button typeof={"button"} className={"btn btn-light"}>SEND</button>
        </form>
    )
}

NewCommentaryForm = reduxForm({
    form: "newCommentaryForm"
})(NewCommentaryForm);

export default NewCommentaryForm;