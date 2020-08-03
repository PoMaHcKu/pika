import * as React from 'react'
import {useCallback, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getAuthor} from '../../../../redux/CommentaryReducer'
import Commentary from './Commentary'

const CommentaryContainer = props => {

    const [, setAuthor] = useState(props.commentary.author)
    const [comment] = useState(props.commentary)
    const {getAuthor} = props

    const getUser = useCallback(comment => {
        setAuthor(getAuthor(comment))
    }, [getAuthor])

    useEffect(() => {
        getUser(comment)
    }, [getUser, comment])

    return <Commentary commentary={comment}/>
}

const mapDispatchToProps = {
    getAuthor,
}
export default connect(null, mapDispatchToProps)(CommentaryContainer)