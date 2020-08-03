import * as React from 'react'
import {login} from '../../redux/AuthenticationReducer'
import {connect} from 'react-redux'
import LoginForm from './LoginForm'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/WithRedirectToMain'
import Preloader from '../common/preloader/Preloader'

const Login = (props) => {
    const authentication = (form) => {
        let user = {
            username: form.username,
            password: form.password
        }
        props.login(user)
    }

    return (
        <div className='justify-content-center text-light p-2 pb-4'>
            <h3>Sign in</h3>
            {props.isProcess ? <Preloader/> :
                <LoginForm onSubmit={authentication}
                           isProcess={props.isProcess}/>
            }
        </div>
    )
}

let mapStateToProps = (state) => ({
    isProcess: state.authenticationState.isProcess,
})

let mapDispatchToProps = {
    login
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Login)