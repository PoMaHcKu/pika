import React from "react";
import {Container} from "reactstrap";
import style from "./Sections.module.css"

const Sections = (props) => {
    let sections = props.sections.map(section =>
        <div key={section.id}>
            <div className={`${style.title}`}>
                {section.title}
            </div>
            <div className={`${style.article}`}>
                {section.article}
            </div>
            <div className={`${style.likes}`}>
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