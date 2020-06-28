import React from "react";
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"username"} placeholder={"username"} required={true} component={"input"}/>
            </div>
            <div>
                <Field name={"password"} type={"password"} placeholder={"password"} required={true} component={"input"}/>
            </div>
            <button disabled={props.isProcess}>Sign in</button>
        </form>
    )
}

LoginForm = reduxForm({
    form: "loginForm"
})(LoginForm);

export default LoginForm;