import * as React from "react";
import Commentary from "./Commentary";
import {addCommentary, getCommentaries} from "../../../redux/CommentaryReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithCommentarySocket} from "../../../hoc/WithCommentarySocket";

class CommentaryContainer extends React.Component {

    componentDidMount() {
        this.props.getCommentaries(this.props.postId);
    }

    render() {
        return (
            <Commentary commentaries={this.props.commentaries}
                        sendComment={this.sendMessage}
                        postId={this.props.postId}
                        isAuth={this.props.isAuth}
            />
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithCommentarySocket
)(CommentaryContainer);