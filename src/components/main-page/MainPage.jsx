import * as React from 'react'
import Tags from '../posts/tags/Tags'
import {Col, Row} from 'reactstrap'
import PostsContainer from '../posts/PostsContainer'
import {Button} from '../common/button/Button'

export const MainPage = (props) => {

    return (
        <div>
            <Row>
                <Col>
                    <h3>TAGS</h3>
                </Col>
            </Row>
            <Row>
                <Col className='p-5 border border-light'>
                    <Tags getByTag={props.getByTag} tags={props.tags}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button lable={'GET MORE TAGS'} onClick={() => props.getAllTags()}/>
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