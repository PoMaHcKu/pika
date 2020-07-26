import * as React from "react"
import {connect} from "react-redux"
import {getAllTags, getTags} from "../../redux/MainPageReducer"
import Tags from "../posts/tags/Tags";
import {Col, Row} from "reactstrap";
import PostsContainer from "../posts/PostsContainer";
import {Button} from "../common/button/Button";

class MainPageContainer extends React.Component {

    componentDidMount() {
        this.props.getTags();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h3>TAGS</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="p-5 border border-light">
                        <Tags tags={this.props.tags}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button lable={"GET MORE TAGS"} onClick={() => getAllTags()}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>POSTS</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PostsContainer/>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tags: state.mainPageState.tags,
    posts: state.mainPageState.posts
})

const mapDispatchToProps = {
    getTags,
    getAllTags
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)