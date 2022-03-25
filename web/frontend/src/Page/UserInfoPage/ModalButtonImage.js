import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal, Figure, Form } from 'react-bootstrap'
import { button_theme_mid, button_theme_long } from '../../Style/theme'
import { header } from '../../config'

const ModalButtonImage = props => {
  const [show, setShow] = useState(false)
  const [curImage, setcurImage] = useState(props.profile)
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setcurImage(props.profile)
    setShow(true)
  }
  const saveFileImage = e => {
    setcurImage(URL.createObjectURL(e.target.files[0]))
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
          <Figure>
            <Figure.Image
              width={300}
              height={300}
              src={curImage ? curImage : './logo192.png'}
            />
          </Figure>
          <Form.Control type="file" accept="image/*" onChange={saveFileImage} />
        </Modal.Body>
        <Modal.Footer>
          <Button style={button_theme_mid}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalButtonImage
