import React from 'react'
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className='form-group'>
                <Field className={'form-control'}
                       name={'username'}
                       placeholder={'username'}
                       maxLength={20}
                       required={true}
                       component={'input'}/>
            </div>
            <div className='form-group'>
                <Field
                    className={'form-control'}
                    name={'password'}
                    type={'password'}
                    placeholder={'password'}
                    maxLength={35}
                    required={true}
                    component={'input'}/>
            </div>
            <button className={`btn btn-dark`} disabled={props.isProcess}>Sign in</button>
        </form>
    )
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm)