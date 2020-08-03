import * as React from 'react'
import {useCallback, useEffect} from 'react'
import Commentaries from './Commentaries'
import {getCommentaries} from '../../../redux/CommentaryReducer'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {WithCommentarySocket} from '../../../hoc/WithCommentarySocket'
import {isAuth} from '../../../redux/selector/authSelector'

const CommentariesContainer = props => {

    const {postId, getCommentaries} = props

    const getComment = useCallback(id => getCommentaries(undefined, undefined, undefined, id),
        [getCommentaries])

    useEffect(() => {
        getComment(postId)
    }, [getComment, postId])

    return (
        <Commentaries commentaries={props.commentaries}
                      sendComment={props.addCommentary}
                      getCommentaries={props.getCommentaries}
                      postId={props.postId}
                      isAuth={props.isAuth}
        />
    )
}

const mapStateToProps = (state) => ({
    commentaries: state.commentariesState.commentaries,
    isAuth: isAuth(state)
})

const mapDispatchToProps = {
    getCommentaries,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithCommentarySocket
)(CommentariesContainer)