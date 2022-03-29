import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Page/LandingPage'
import LoginPage from './Page/LoginPage'
import UserInfoPage from './Page/UserInfoPage'
import RegisterPage from './Page/RegisterPage'
import EmailSend from './Page/EmailSend'
import EmailOk from './Page/EmailOk'
import Header from './Component/Header'
import Navigation from './Component/Navigation'

import TestPage from './Page/Test/TestPage'
import background from './images/background.jpg'
import { Container } from 'react-bootstrap'
import CommunityHomePage from './Page/CommunityHomePage'
function App() {
  useEffect(() => {
    if (window.localStorage.getItem('isLogin')) {
      if (JSON.parse(window.localStorage.getItem('isLogin'))) {
        axios.defaults.headers.common['Authorization'] =
          window.localStorage.getItem('token')
      }
    }
  }, [])
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '2000px',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Header></Header>
      <Navigation></Navigation>
      <Container className="main-container">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/email-send" element={<EmailSend />} />
          <Route path="/welcome" element={<EmailOk />} />
          <Route exact path="/user-info" element={<UserInfoPage />} />
          <Route path="/test" element={<TestPage></TestPage>}></Route>
          <Route path="/community-home" element={<CommunityHomePage></CommunityHomePage>} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
