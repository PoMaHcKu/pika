import React from "react";
import Sections from "./Sections";
import {dislikeSection, likeSection} from "../../../redux/PostReducer";
import {connect} from "react-redux";

const SectionsContainer = (props) => {
    return <Sections sections={props.sections}
                     likeSection={props.likeSection}
                     dislikeSection={props.dislikeSection}/>
}

const mapStateToProps = (state) => ({
    sections: state.postsState.openedPost.sections
})

const mapDispatchToProps = {
    likeSection,
    dislikeSection,
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContainer);