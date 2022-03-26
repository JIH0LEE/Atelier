import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal, Figure, Form, Container } from 'react-bootstrap'
import { button_theme_mid, button_theme_long } from '../../Style/theme'
import { header, header_media } from '../../config'

const ModalButtonImage = props => {
  const [show, setShow] = useState(false)
  const [curImage, setcurImage] = useState(props.profile)
  const [uploadFile, setuploadFile] = useState()
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setcurImage(props.profile)
    setShow(true)
  }
  const saveFileImage = e => {
    setcurImage(URL.createObjectURL(e.target.files[0]))
    setuploadFile(e.target.files[0])
  }

  const submit = () => {
    const formData = new FormData()
    formData.append('profile', uploadFile)
    axios.post('/api/user/change-profile', formData, header).then(res => {
      if (uploadFile.name === res.data) {
        console.log(res)
      }
    })
  }
  return (
    <>
      <Button style={button_theme_long} onClick={handleShow}>
        Change Profile Image
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>프로필 이미지 변경</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: 'Auto' }}>
          <Container style={{ border: 'solid' }}>
            <Figure>
              <Figure.Image
                width={300}
                src={curImage ? curImage : './logo192.png'}
              />
            </Figure>
          </Container>
          <Form.Control type="file" accept="image/*" onChange={saveFileImage} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submit} style={button_theme_mid}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalButtonImage
