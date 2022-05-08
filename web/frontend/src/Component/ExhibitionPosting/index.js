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
    Collapse,
} from 'react-bootstrap'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { button_theme_mid, button_theme_small_right } from '../../Style/theme'

import './style.css'
import ModalButtonPosting from "./ModalButtonPosting"
import Post from "./Post"

const ExhibitionPosting = ({ postList }) => {
    const [post, setPost] = useState(null)
    const [newPostList, setPostList] = useState(postList)
    const [description, setDescription] = useState()
    const [tempList, setTempList] = useState([])
    console.log(newPostList)
    const addPost = () => {
        setPostList([...newPostList, { id: newPostList.length, post: './logo192.png', description: "" }])
    }

    const getPost = (id, picture, description) => {
        //newPostList[id][post] = picture
        //newPostList[id][description] = description
        const findIndex = newPostList.findIndex(element => element.id == id)
        let arr = [...newPostList]
        //console.log('hi')
        //console.log(arr[findIndex])
        arr[findIndex] = { id: id, post: picture, description: description }
        setPostList(arr)
        //console.log(newPostList)
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Button style={{ width: "10vw", marginBottom: "50px", button_theme_mid, background: "#daa520", borderColor: "#daa520" }} onClick={addPost}>추가하기</Button>
            </Row>
            {newPostList.map((e) => (
                <Post id={e.id} post={e.post} des={e.description} func={getPost}></Post>
            ))}
        </Container>
    )
}

export default ExhibitionPosting