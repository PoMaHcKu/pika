import * as React from "react";
import Commentary from "./Commentary";
import {getCommentaries} from "../../../redux/CommentaryReducer";
import {connect} from "react-redux";

class CommentaryContainer extends React.Component {

    componentDidMount() {
        this.props.getCommentaries(this.props.postId);
    }

    render() {
        return (
            <Commentary commentaries={this.props.commentaries}/>
        )
    }
}

const mapStateToProps = (state) => ({
    commentaries: state.commentariesState.commentaries,
    isLoading: state.commentariesState.isLoading
})

const mapDispatchToProps = {
    getCommentaries,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentaryContainer);