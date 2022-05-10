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
import { useParams, useLocation } from 'react-router-dom'
import ExhibitionPosting from '../../Component/ExhibitionPosting'
import PostList from './PostList'
import './style.css'
import { DragDropContext } from 'react-beautiful-dnd'


const ExhibitionMake2stepPage = ({ id }) => {
    const location = useLocation()

    const [ID, setID] = useState(location.state.id)
    const [postList, setPostList] = useState([
        { id: 0, link: "./logo192.png", description: '', contentType: "0" },
    ])
    //console.log(postList)
    const getPostList = (posts) => {
        setPostList(posts)
    }

    const save = () => {
        axios.defaults.headers.common['Authorization'] =
            window.localStorage.getItem('token')
        axios.post('/api/user/make-exhibition-step2', { id: ID, contentList: postList }).then(res => {
            console.log(res)
        })
    }

    const next = () => { }

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
                    <ExhibitionPosting postList={postList} func={getPostList}></ExhibitionPosting>
                </Container>
                <Container id="elem4">
                    <Button onClick={save}>Save</Button>
                    <Button onClick={next}>Next</Button>
                </Container>
            </Container>
        </Container>
    )
}

export default ExhibitionMake2stepPage
