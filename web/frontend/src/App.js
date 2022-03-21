
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './Page/LandingPage';
import LoginPage from './Page/LoginPage';
import UserInfoPage from './Page/UserInfoPage';
import RegisterPage from './Page/RegisterPage';
import EmailSend from './Page/EmailSend';
import EmailOk from './Page/EmailOk';
import Header from './Component/Header';
import Navigation from './Component/Navigation';
function App() {
  useEffect(() => {
    if (window.localStorage.getItem('isLogin')) {
      if (JSON.parse(window.localStorage.getItem('isLogin'))) {
        axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');
      }
    }
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/sign-in" element={<LoginPage/>} />
        <Route path="/sign-up" element={<RegisterPage/>} />
        <Route path="/email-send" element={<EmailSend/>} />
        <Route path="/welcome" element={<EmailOk/>} />
        <Route exact path="/user-info" element={<UserInfoPage/>} />
      </Routes>
    </div>
  );
}

export default App;
