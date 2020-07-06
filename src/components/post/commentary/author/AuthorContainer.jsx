import * as React from "react";
import Author from "./Author";
import {getAuthorPost} from "../../../../redux/UsersReducer";
import {connect} from "react-redux";

class AuthorContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthorPost(this.props.userId);
    }

    render() {
        return (
            <Author author={this.props.author}/>
        )
    }
}

const mapStateToProps = (state) => ({
    author: state.usersState.authorPost,
})
const mapDispatchToProps = {
    getAuthorPost,
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorContainer);