import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    ListGroup,
    InputGroup,
    FormControl,
    Figure,
} from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ExhibitionPosting from '../../Component/ExhibitionPosting'
import PostList from './PostList'
import './style.css'
import { DragDropContext } from 'react-beautiful-dnd'

const ExhibitionMake2stepPage = () => {
    const [postList, setPostList] = useState([
        { id: 0, post: '', description: '' },
    ])

    return (
        <Container className="exhibition_make-container2">
            <Container className="inner">
                <Container id="elem1">
                    <Col>
                        <ListGroup horizontal>
                            <ListGroup.Item>Step1</ListGroup.Item>
                            <ListGroup.Item active>Step2</ListGroup.Item>
                            <ListGroup.Item>Step3</ListGroup.Item>
                            <ListGroup.Item>Step4</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <div className="title">게시물 올리기</div>
                    </Col>
                    <Col></Col>
                </Container>

                <Container id="elem3">
                    <ExhibitionPosting postList={postList}></ExhibitionPosting>
                </Container>
                <Container id="elem4">
                    <Button>Save</Button>
                    <Button>Next</Button>
                </Container>
            </Container>
        </Container>
    )
}

export default ExhibitionMake2stepPage
