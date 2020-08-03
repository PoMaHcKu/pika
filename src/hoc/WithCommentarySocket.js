import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import SockJsClient from 'react-stomp'
import {addCommentary} from '../redux/CommentaryReducer'

let mapStateToProps = (state) => ({
    postId: state.postsState.openedPost.id,
})

export const WithCommentarySocket = Component => {

    class WebSocketComponent extends React.Component {

        sendMessage = (msg) => {
            this.clientRef.sendMessage(`/app/commentary/${this.props.postId}`, JSON.stringify(msg))
        }

        render() {
            return (
                <div>
                    <SockJsClient url='http://localhost:8080/commentary-messaging'
                                  topics={[`/topic/commentary/${this.props.postId}`]}
                                  onMessage={msg => this.props.addCommentary(msg)}
                                  ref={client => this.clientRef = client}/>
                    <Component {...this.props} addCommentary={this.sendMessage}/>
                </div>
            )
        }
    }

    return compose(
        connect(mapStateToProps, {addCommentary})
    )(WebSocketComponent)
}