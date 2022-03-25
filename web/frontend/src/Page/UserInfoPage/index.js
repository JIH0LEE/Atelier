import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import isLogin from '../../utils/isLogin'
import { header } from '../../config'
import {
  Col,
  Container,
  Figure,
  Row,
  Button,
  FormLabel,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import './style.css'
import { button_theme_long } from '../../Style/theme'
import ModalButton from './ModalButton'
const UserInfoPage = () => {
  const [username, setUsername] = useState('')
  const [nickname, setNickname] = useState('')
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    if (isLogin()) {
      //로컬 storage를 이용한 방법
      // axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');
      axios.get('/api/user/user-info', header).then(res => {
        setUsername(res.data.username)
        setNickname(res.data.nickname)
      })
    }
  }, [])

  if (!isLogin()) {
    alert('로그인이 필요합니다')
    return (
      <Navigate
        to={{
          pathname: '/sign-in',
          state: {
            from: '/',
          },
        }}
      />
    )
  }
  const changeNickname = newNickname => {
    setNickname(newNickname)
  }

  return (
    <Container className="mt-5 UserInfo">
      <div style={{ fontSize: '50px', color: '#F3CA4D' }}>User Info</div>
      <Container className="inner1">
        <Row className="row">
          <Col className="col1">
            <Figure>
              <Figure.Image
                width={300}
                height={300}
                src={profile ? profile : './logo192.png'}
              />
            </Figure>
            <Button style={button_theme_long}>Edit Profile Image</Button>
          </Col>
          <Col className="my-3 col2">
            <FormLabel
              className="mt-2"
              style={{ fontSize: '30px', color: '#F3CA4D' }}
            >
              email
            </FormLabel>
            <InputGroup size="lg" className="mb-5 mt-2">
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder={username}
                disabled={true}
              />
            </InputGroup>
            <FormLabel
              className="mt-2"
              style={{ fontSize: '30px', color: '#F3CA4D' }}
            >
              nickname
            </FormLabel>
            <InputGroup size="lg" className="mb-1 mt-2">
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder={nickname}
                disabled={true}
              />
            </InputGroup>
            <div>
              <ModalButton func={changeNickname}></ModalButton>
            </div>
          </Col>
        </Row>
        <div style={{ fontSize: '50px', opacity: '1', color: '#F3CA4D' }}>
          My Gallery
        </div>
      </Container>
      <Container className="inner2"></Container>
    </Container>
  )
}

export default UserInfoPage
