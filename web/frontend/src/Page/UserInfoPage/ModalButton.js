import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { button_theme_mid, button_theme_small_right } from '../../Style/theme'
import { header } from '../../config'

const ModalButton = props => {
  const [show, setShow] = useState(false)
  const [curNick, setCurNick] = useState('')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const nicknameChange = e => {
    setCurNick(e.target.value.trim())
  }
  const submitNickname = () => {
    // axios.get('/api/user/user-info', header).then(res => {

    // })
    props.func(curNick)
    handleClose()
  }
  const buttonCondition = curNick.trim() === '' ? true : false
  return (
    <>
      <Button style={button_theme_small_right} onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>닉네임 변경</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            onChange={nicknameChange}
            placeholder="새로운 닉네임을 입력하세요"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={button_theme_mid}
            onClick={submitNickname}
            disabled={buttonCondition}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalButton
