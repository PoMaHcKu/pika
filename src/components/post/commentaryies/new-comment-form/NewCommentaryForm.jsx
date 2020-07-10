import * as React from "react";
import {Field, reduxForm} from "redux-form";

let NewCommentaryForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={"form-group"}>
                <Field
                    className={"form-control"}
                    name={"textCommentary"}
                    required={true}
                    component={"textarea"}
                    rows={3}
                />
            </div>
            <button className={"btn btn-dark"}>SEND</button>
        </form>
    )
}

NewCommentaryForm = reduxForm({
    form: "newCommentaryForm"
})(NewCommentaryForm);

export default NewCommentaryForm;