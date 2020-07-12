import React from "react";
import {Container} from "reactstrap";
import style from "./Sections.module.css";
import like from "../../../resources/pictures/like.png";
import dislike from "../../../resources/pictures/dislike.png";

const Sections = (props) => {
    let sections = props.sections.map(section =>
        <div key={section.id}>
            <div className={`${style.title}`}>
                {section.title}
            </div>
            <div className={`${style.article}`}>
                {section.article}
            </div>
            <div className={section.liked ? style.like : style.dislike}>
                <img src={section.liked ? like : dislike}
                     onClick={!section.liked ?
                         () => props.likeSection(section.id) :
                         () => props.dislikeSection(section.id)}
                     alt={"dislike"}/>
                {section.countLike}
            </div>
        </div>
    )

    return (
        <Container className={style.sectionsContainer}>
            {sections}
        </Container>
    )
}

export default Sections;