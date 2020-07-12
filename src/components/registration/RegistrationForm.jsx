import React from "react";
import {Field, reduxForm} from "redux-form";

let RegistrationForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <Field className="form-control" name="username" placeholder="username" required={true} component="input"/>
            </div>
            <div className="form-group">
                <Field className="form-control" name="email" type="email" placeholder="email" required={true} component="input"/>
            </div>
            <div className="form-group">
                <Field className="form-control" name="password" type="password" placeholder="password" required={true} component="input"/>
            </div>
                <button className="btn btn-dark" disabled={props.isProcess}>Registration</button>
        </form>
    )
}

RegistrationForm = reduxForm({
    form: "registrationForm"
})(RegistrationForm);

export default RegistrationForm;