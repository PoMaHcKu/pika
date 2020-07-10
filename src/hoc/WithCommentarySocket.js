import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import SockJsClient from "react-stomp";
import {addCommentary} from "../redux/CommentaryReducer";

let mapStateToProps = (state) => ({
    postId: state.postsState.openedPost.id,
});

export const WithCommentarySocket = Component => {

    class WebSocketComponent extends React.Component {

        sendMessage = (msg) => {
            this.clientRef.sendMessage(`/app/commentary/${this.props.postId}`, JSON.stringify(msg));
        }

        postId = this.props.postId;

        render() {
            return (
                <div>
                    <SockJsClient url="https://pikachy.herokuapp.com/commentary-messaging"
                                  topics={[`/topic/commentary/${this.postId}`]}
                                  onMessage={msg => this.props.addCommentary(msg)}
                                  ref={client => this.clientRef = client}/>
                    <Component addCommentary={this.sendMessage}/>
                </div>
            )
        }
    }

    return compose(
        connect(mapStateToProps, {addCommentary})
    )(WebSocketComponent);
};