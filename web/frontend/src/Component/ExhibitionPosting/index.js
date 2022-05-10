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

const ExhibitionPosting = ({ postList, func }) => {
    const [post, setPost] = useState(null)
    const [newPostList, setPostList] = useState(postList)
    const [description, setDescription] = useState()
    const [tempList, setTempList] = useState([])
    //console.log(newPostList)
    const addPost = () => {
        setPostList([...newPostList, { id: newPostList.length, link: './logo192.png', description: "", contentType: "1" }])
    }

    const getPost = (id, picture, description, contentType) => {
        const findIndex = newPostList.findIndex(element => element.id == id)
        let arr = [...newPostList]
        arr[findIndex] = { id: id, post: picture, description: description, contentType: "1" }
        setPostList(arr)
    }

    const getDeletePost = (id) => {
        const index = newPostList.findIndex(function (item) { return item.id === id })
        let arr = [...newPostList]
        if (index > -1) arr.splice(index, 1)
        setPostList(arr)


    }

    const handleChange = (result) => {
        if (!result.destination) return
        const arr = [...newPostList]
        const [reorderedItem] = arr.splice(result.source.index, 1)
        arr.splice(result.destination.index, 0, reorderedItem)

        setPostList(arr)
    }

    useEffect(() => {
        func(newPostList)
    }, [newPostList])


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
                                                <Post id={e.id} post={e.link} des={e.description} func={getPost} deleteFun={getDeletePost} ></Post>
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