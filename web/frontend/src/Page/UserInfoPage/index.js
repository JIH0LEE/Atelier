import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import isLogin from '../../utils/isLogin'
import { header } from '../../config'
import { Col, Container, Figure, Row, Button, FormLabel } from 'react-bootstrap'
import './style.css'
const UserInfoPage = () => {
  const [username, setUsername] = useState('')
  const [nickname, setNickname] = useState('')
  useEffect(() => {
    if (isLogin()) {
      //로컬 storage를 이용한 방법
      // axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');
      axios.get('/api/user/user-info', {}, header).then(res => {
        console.log(res.data)
        setUsername(res.data.username)
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

  return (
    <Container className="mt-5 UserInfo">
      <Container style={{ fontSize: '50px' }}>User Info</Container>
      <Container className="inner1">
        <Row className="row">
          <Col className="col1">
            <Figure>
              <Figure.Image width={300} height={300} src="./logo192.png" />
            </Figure>
            <Button style={{ width: '300px' }}>사진 수정하기</Button>
          </Col>
          <Col className="my-3 col2">
            <FormLabel>email</FormLabel>
            <input className="mt-1 mb-5 h-10  w-75"></input>

            <FormLabel>nickname</FormLabel>
            <input
              style={{ alignContent: 'center' }}
              className="mt-1 mb-5 h-10 w-75"
            ></input>
          </Col>
        </Row>
        <Container style={{ fontSize: '50px' }}>My Gallery</Container>
      </Container>
      <Container className="inner2"></Container>
    </Container>
  )
}

export default UserInfoPage
