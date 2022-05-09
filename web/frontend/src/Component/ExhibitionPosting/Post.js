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
    Modal,
    Form
} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import { button_theme_long, button_theme_mid, button_theme_small_right } from '../../Style/theme'

const Post = ({ id, post, des, func, deleteFun }) => {
    const [show, setShow] = useState(false)
    const [curImage, setcurImage] = useState(post ? post : './logo192.png')
    const [uploadFile, setuploadFile] = useState()
    const [picture, setPicture] = useState(post ? post : './logo192.png')
    const [description, setDescription] = useState(des)
    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
    }

    const saveFileImage = e => {
        setcurImage(URL.createObjectURL(e.target.files[0]))
        setuploadFile(e.target.files[0])
    }

    const submit = () => {
        //props.func(uploadFile, curImage)
        setPicture(curImage)
        handleClose()
    }

    const onChangeDes = (e) => {
        setDescription(e.target.value)
    }

    const passToUpComponent = (e) => {
        func(id, picture, description)
    }

    const passDelete = (e) => {
        deleteFun(id)
    }

    return (
        <>
            <Row style={{ padding: "10px", margin: "10px", border: "solid #daa520", borderRadius: "30px" }}>
                <Col xs={4}>
                    <Row style={{ justifyContent: "center" }}>
                        <Figure className="image-container" style={{ height: '50%' }}>
                            <Figure.Image src={picture}></Figure.Image>
                        </Figure>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>

                        <Button style={button_theme_long} onClick={handleShow}>Post upload</Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>게시물 업로드</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ margin: 'Auto' }}>
                                <Container>
                                    <Figure className="image-container">
                                        <Figure.Image
                                            className="img"
                                            src={curImage ? curImage : './logo192.png'}
                                        />
                                    </Figure>
                                </Container>
                                <Form.Control type="file" accept="image/*" onChange={saveFileImage} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={submit}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </Row>
                </Col>
                <Col xs={8}>
                    <Row style={{ justifyContent: "center" }}>
                        <input
                            maxLength={400}
                            placeholder="Description"
                            style={{ width: '90%', height: "25vh" }}
                            value={post.description}
                            onChange={onChangeDes}
                        ></input>
                    </Row>
                    <Row style={{ margin: "10px" }}>
                        <Col xs={8}></Col>
                        <Col><Button style={{ width: "100%", background: "#daa520", borderColor: "#daa520", fontSize: "20px" }} onClick={passToUpComponent}>save</Button></Col>
                        <Col><Button style={{ width: "100%", background: "#daa520", borderColor: "#daa520", fontSize: "20px" }} onClick={passDelete}>delete</Button></Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Post;