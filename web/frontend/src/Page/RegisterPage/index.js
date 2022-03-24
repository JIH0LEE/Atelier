import axios from 'axios'
import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import './style.css'
const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [nickname, setNickname] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate()
  const register = () => {
    var body = {
      username: username,
      nickname: nickname,
      password1: password1,
      password2: password2,
    }
    axios
      .post('/api/sign-up', body)

      .then(res => {
        if (res.data.success) {
          navigate('/email-send')
        } else {
          alert(res.data.message)
        }
      })
  }
  const usernameChange = e => {
    setUsername(e.target.value)
  }

  const nicknameChange = e => {
    //console.log(e.target.value)
    setNickname(e.target.value)
  }

  const passwordChange1 = e => {
    setPassword1(e.target.value)
  }
  const passwordChange2 = e => {
    setPassword2(e.target.value)
  }

  const autoPress = e => {
    if (e.key === 'Enter') {
      register()
    }
  }

  const buttonCondition =
    username === '' || nickname === '' || password1 === '' || password2 === ''
      ? true
      : false

  return (
    <Container className="LoginContainer">
      <div>Sign-up</div>
      <input
        onChange={usernameChange}
        onKeyPress={autoPress}
        type="email"
        placeholder="Email Address"
        style={{ margin: '10px' }}
      />
      <input
        onChange={nicknameChange}
        onKeyPress={autoPress}
        type="text"
        placeholder="Nick Name"
        style={{ margin: '10px' }}
      />
      <input
        onChange={passwordChange1}
        onKeyPress={autoPress}
        type="password"
        placeholder="Password"
        style={{ margin: '10px' }}
      />
      <input
        onChange={passwordChange2}
        onKeyPress={autoPress}
        type="password"
        placeholder="Confirm Password"
        style={{ margin: '10px' }}
      />
      <Button
        onClick={register}
        style={{ margin: '10px' }}
        disabled={buttonCondition}
      >
        Sign Up
      </Button>
      <Link to="/sign-in">이미 계정이 있으신가요?</Link>
    </Container>
  )
}

export default LoginPage
