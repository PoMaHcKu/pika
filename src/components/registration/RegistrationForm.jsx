import React from "react";
import {Field, reduxForm} from "redux-form";

let RegistrationForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"username"} placeholder={"username"} required={true} component={"input"}/>
            </div>
            <div>
                <Field name={"email"} type={"email"} placeholder={"email"} required={true} component={"input"}/>
            </div>
            <div>
                <Field name={"password"} type={"password"} placeholder={"password"} required={true} component={"input"}/>
            </div>
                <button disabled={props.isProcess}>Registration</button>
        </form>
    )
}

RegistrationForm = reduxForm({
    form: "registrationForm"
})(RegistrationForm);

export default RegistrationForm;