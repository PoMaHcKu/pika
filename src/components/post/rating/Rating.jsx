import React from 'react'
import Rate from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import {ratePost} from '../../../redux/PostReducer'
import {connect} from 'react-redux'
import {isAuth} from '../../../redux/selector/authSelector'

const Rating = (props) => {
    return (
        <div>
            <Box component='fieldset' mb={3} borderColor='transparent'>
                <Rate name='simple-controlled'
                      value={props.currentRate}
                      readOnly={props.readOnly}
                      onChange={(event, newValue) => {
                          props.ratePost(newValue, props.postId)
                      }}
                />
            </Box>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: isAuth(state)
})

export default connect(mapStateToProps, {ratePost})(Rating)