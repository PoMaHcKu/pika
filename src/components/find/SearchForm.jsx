import React from "react";
import {Field, reduxForm} from "redux-form";

const SearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-row m-0 align-items-center bg-dark pt-1 pb-1">
                <div className="col-xs-9 col-sm-10">
                    <Field className="form-control form-control-sm bg-dark text-light"
                           name="text"
                           placeholder="Search..."
                           component="input"/>
                </div>
                <div className="col-xs-3 col-sm-2">
                    <button className="form-control form-control-sm bg-dark text-light"
                           value="arch"
                    >Search</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: "searchForm",
})(SearchForm);