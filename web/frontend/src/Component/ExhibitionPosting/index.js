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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

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
        const findIndex = newPostList.findIndex(element => element.id == id)
        let arr = [...newPostList]
        arr[findIndex] = { id: id, post: picture, description: description }
        setPostList(arr)
    }

    const handleChange = (result) => {
        if (!result.destination) return
        const arr = [...newPostList]
        const [reorderedItem] = arr.splice(result.source.index, 1)
        arr.splice(result.destination.index, 0, reorderedItem)

        setPostList(arr)
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Button style={{ width: "10vw", marginBottom: "50px", button_theme_mid, background: "#daa520", borderColor: "#daa520" }} onClick={addPost}>추가하기</Button>
            </Row>
            <DragDropContext onDragEnd={handleChange}>
                <Droppable droppableId="posts">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                newPostList.map((e) => (
                                    <Draggable key={e.id} draggableId={"draggable" + e.id} index={e.id}>
                                        {(provided) =>
                                            <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                                <Post id={e.id} post={e.post} des={e.description} func={getPost}  ></Post>
                                            </div>
                                        }
                                    </Draggable>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                    }
                </Droppable>
            </DragDropContext>
        </Container>
    )
}

export default ExhibitionPosting