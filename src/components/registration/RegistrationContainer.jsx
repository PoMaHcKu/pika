import * as React from 'react'
import RegistrationForm from './RegistrationForm'
import {connect} from 'react-redux'
import {registrationUser} from '../../redux/RegistrationReducer'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/WithRedirectToMain'
import Preloader from '../common/preloader/Preloader'
import {Col, Row} from 'reactstrap'

const RegistrationContainer = (props) => {

    const registration = (form) => {
        let user = {
            username: form.username,
            email: form.email,
            password: form.password
        }
        props.registrationUser(user)
    }

    return (
        <Row className='justify-content-center bg-dark text-light p-2 pb-4'>
            <Col className='col-xs-12 col-sm-10 col-md-8'>
                <h3>Registration</h3>
                {props.isProcess ?
                    <Preloader/> :
                    <RegistrationForm onSubmit={registration}
                                      isProcess={props.isProcess}/>
                }
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => ({
    isProcess: state.registrationState.isProcess,
})

const mapDispatchToProps = {
    registrationUser,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(RegistrationContainer)