import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

const renderField = ({input, label, type}) => (
    <div>
        <input {...input} type={type} placeholder={label} className={"form-control"}/>
    </div>
)

const sections = ({fields}) => (
    <div className={"form-group m-3"}>
        {fields.map((section, index) => (
            <div key={index}>
                <Row className={"row-sm-12 m-4 justify-content-center"}>
                    <Col className={"col-sm-9 pt-1"}>SECTION {index + 1}</Col>
                    {index > 0 ?
                        <input type="button"
                               className={"btn btn-danger form-control col-sm-3"}
                               onClick={() => fields.remove(index)}
                               value={"DROP SECTION"}/> : null}
                </Row>
                <Field name={`${section}.title`}
                       component={renderField}
                       label="Section Title"
                       maxLength={50}
                       required={true}
                       minLength={3}/>
                <Field name={`${section}.article`}
                       className={"form-control"}
                       rows={3}
                       component={"textarea"}
                       maxLength={2000}
                       required={true}
                       minLength={3}/>
                <Field type={"hidden"}
                       name={`${section}.placeNumber`}
                       value={index}
                       component={"input"}/>
            </div>
        ))}
        <div>
            <button type="button" className={"btn btn-light border-dark mt-3"} onClick={() => fields.push({})}>
                Add Section
            </button>
        </div>
    </div>
)

const NewPostForm = props => {
    const {pristine, reset, submitting} = props

    let randomKey = 0;

    const options = props.genres.map(genre =>
        <option key={randomKey++}>{genre}</option>
    )

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="title"
                   className={"form-control form-control-lg"}
                   component={"input"}
                   placeholder="Post title"
                   required={true}
                   maxLength={50}
                   minLength={3}/>
            <Field name="description"
                   className={"form-control"}
                   rows={2}
                   component={"textarea"}
                   placeholder={"Post description"}
                   maxLength={300}/>
            <FieldArray name="sections" component={sections}/>
            <Field name={"genre"}
                   component={"select"}
                   className={"form-control"}>
                {options}
            </Field>
            <br/>
            <Field name={"tags"}
                   component={"input"}
                   className={"form-control"}
            placeholder={"Type several tags separated by commas"}/>
            <div>
                <button type="submit" className={"btn btn-light border-dark m-1"} disabled={submitting}>
                    CREATE POST
                </button>
                <button type="button" className={"btn btn-light border-dark m-1"} disabled={pristine || submitting}
                        onClick={reset}>
                    CLEAR FORM
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'newPostForm',
})(NewPostForm)