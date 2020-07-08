import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import SockJsClient from "react-stomp";
import {addCommentary} from "../redux/CommentaryReducer";

export const WithCommentarySocket = Component => {

    class WebSocketComponent extends React.Component {

        sendMessage = (msg) => {
            this.clientRef.sendMessage("/app/commentary", JSON.stringify(msg));
        }

        render() {
            return (
                <div>
                    <SockJsClient url="https://pikachy.herokuapp.com/commentary-messaging"
                                  topics={["/chat/commentaries"]}
                                  onMessage={msg => this.props.addCommentary(msg)}
                                  ref={client => this.clientRef = client}/>
                    <Component {...this.props} addCommentary={this.sendMessage}/>
                </div>
            )
        }
    }

    return compose(
        connect(null, {addCommentary})
    )(WebSocketComponent);
};