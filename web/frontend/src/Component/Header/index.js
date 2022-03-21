import { Button,Row,Col } from "react-bootstrap";
import React from "react";
import { removeToken } from "../../utils/cookies";
import isLogin from "../../utils/isLogin";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
const Header = () => {

  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  const logout = () => {
    window.localStorage.setItem('isLogin', false);
    window.localStorage.removeItem('token');
    removeToken();
    setNum(num + 1);
  }

  const goToMain=()=>{
    navigate("/");
  }

  return (
    <div >
      <Row>
        <Col/>
        <Col>
          <div onClick={goToMain} style={{ fontSize: "50px" }}>Atelier</div>
        </Col>
        <Col>
      <div style={{ display: "inline-block", float: "right" }}>
        {
          isLogin()
            ? <>
              <Button href='/user-info' variant="outline-primary" style={{ margin: "10px" }}>유저 정보</Button>
              <Button onClick={logout} style={{ margin: "10px" }}>로그아웃</Button>
              </>
            : <>
              <Button href='/sign-up' variant="outline-primary" style={{ margin: "10px" }}>Sign-up</Button>
              <Button href='/sign-in' variant="outline-primary" style={{ margin: "10px" }}>Sign-in</Button>
              </>
        }
      </div>
      </Col>
      </Row>


    </div>
  );
};

export default Header;