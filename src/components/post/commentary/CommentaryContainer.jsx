import * as React from "react";
import Commentary from "./Commentary";
import {addCommentary, getCommentaries} from "../../../redux/CommentaryReducer";
import {connect} from "react-redux";
import SockJsClient from 'react-stomp';

class CommentaryContainer extends React.Component {

    componentDidMount() {
        this.props.getCommentaries(this.props.postId);
    }

    sendMessage = (msg) => {
        this.clientRef.sendMessage("/app/commentary", JSON.stringify(msg));
    }

    render() {
        return (
            <div>
                <SockJsClient url="http://pikachy.herokuapp.com/commentary-messaging" topics={["/chat/commentaries"]}
                              onMessage={msg => this.props.addCommentary(msg)}
                              ref={client => this.clientRef = client}/>
                <Commentary commentaries={this.props.commentaries}
                            sendComment={this.sendMessage}
                            postId={this.props.postId}
                            isAuth={this.props.isAuth}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    commentaries: state.commentariesState.commentaries,
    isLoading: state.commentariesState.isLoading,
    isAuth: state.authenticationState.authenticatedUser !== null,
})

const mapDispatchToProps = {
    getCommentaries,
    addCommentary,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentaryContainer);