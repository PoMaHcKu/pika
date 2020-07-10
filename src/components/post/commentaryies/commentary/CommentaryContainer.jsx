import * as React from "react";
import {connect} from "react-redux";
import {getAuthor} from "../../../../redux/CommentaryReducer";
import Commentary from "./Commentary";

class CommentaryContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthor(this.props.commentary);
    }

    render() {
        return <Commentary commentary={this.props.commentary}/>;
    }
}

const mapDispatchToProps = {
    getAuthor,
}
export default connect(null, mapDispatchToProps)(CommentaryContainer);