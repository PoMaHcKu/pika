import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import SockJsClient from 'react-stomp'
import {addCommentary} from '../redux/CommentaryReducer'
import {getToken} from "../redux/selector/authSelector";

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
                    <SockJsClient url='https://pikachy.herokuapp.com/commentary-messaging'
                                  headers={{'X-Authorization': getToken()}}
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