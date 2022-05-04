import React, { useState, useEffect } from 'react'
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
import { Link, useParams } from 'react-router-dom'
import { button_theme_mid, button_theme_small_right } from '../../Style/theme'

import './style.css'
import ModalButtonPosting from "./ModalButtonPosting"
const ExhibitionPosting = ({ postList }) => {
    const [showingPost, setShowingPost] = useState('./logo192.png')
    const [post, setPost] = useState(null)
    const [newPostList, setPostList] = useState(postList)
    const [description, setDescription] = useState()

    const onChangeDes = (e) => {
        setDescription(e.target.value)
    }

    const postChange = (file, url) => {
        setPost(file)
        setShowingPost(url)
        setPostList([...newPostList, { post: showingPost, description: "" }])
    }

    //useEffect(()=>{
    //
    //  }, [showingPost])

    const mapFunc = (post) => {
        //setDescription(post.description)
        return (
            <Row>
                <Col xs={4}>
                    <Row style={{ justifyContent: "center" }}>
                        <Figure className="image-container" style={{ height: '50%' }}>
                            <Figure.Image src={showingPost}></Figure.Image>
                        </Figure>
                    </Row>
                    <Row style={{ justifyContent: "center" }}><ModalButtonPosting func={postChange} post={showingPost}></ModalButtonPosting></Row>
                </Col>
                <Col xw={10}>
                    <input
                        //onChange={descriptionChange}
                        maxLength={400}
                        placeholder="Description"
                        style={{ width: '100%', height: '80%' }}
                        value={description}
                        onChange={onChangeDes}
                    ></input>
                </Col>
            </Row>)
    }

    const addPost = () => {
        setPostList([...newPostList, { post: showingPost, description: "" }])
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Button style={{ width: "10vw", marginBottom: "50px", button_theme_mid }} onClick={addPost}>추가하기</Button>
            </Row>
            {postList.map((post) => (

                mapFunc(post)
            ))}

        </Container >
    )
}

export default ExhibitionPosting