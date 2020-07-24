import * as React from "react";
import {Col, Row} from "reactstrap";
import style from "../Posts.module.css";
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";

let Sections = (props) => {
    let sections = props.sections.map(section => {
            return (
                <Row key={section.id} className="mb-2">
                    <Col className={style.sectionTitle}>
                        {section.title}
                        {section.imageId ?
                            <CloudinaryContext cloudName="dimo51hgd">
                                <Image publicId={section.imageId}>
                                    <Transformation width="150" height="150" crop="fill" effect="sepia" radius="20"/>
                                </Image>
                            </CloudinaryContext> :
                            section.article}
                    </Col>
                </Row>
            )
        }
    )

    return (
        <Row>
            <Col>
                {sections}
            </Col>
        </Row>
    )
}

export default Sections;