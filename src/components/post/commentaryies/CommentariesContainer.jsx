import * as React from "react";
import Commentaries from "./Commentaries";
import {getCommentaries} from "../../../redux/CommentaryReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithCommentarySocket} from "../../../hoc/WithCommentarySocket";

class CommentariesContainer extends React.Component {

    componentDidMount() {
        this.props.getCommentaries(this.props.postId);
    }

    render() {
        return (
            <Commentaries commentaries={this.props.commentaries}
                          sendComment={this.props.addCommentary}
                          getCommentaries={this.props.getCommentaries}
                          postId={this.props.postId}
                          isAuth={this.props.isAuth}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    commentaries: state.commentariesState.commentaries,
    isAuth: state.authenticationState.authenticatedUser !== null,
})

const mapDispatchToProps = {
    getCommentaries,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithCommentarySocket
)(CommentariesContainer);