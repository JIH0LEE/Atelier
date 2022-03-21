import { Button } from "react-bootstrap";
import React from "react";
import { removeToken } from "../../utils/cookies";
import isLogin from "../../utils/isLogin";
import { useState } from "react";
const LandingPage = () => {


  const [num, setNum] = useState(0);
  const logout = () => {
    window.localStorage.setItem('isLogin', false);

    window.localStorage.removeItem('token');
    removeToken();
    setNum(num + 1);




  }

  return (
    <div >
      <div style={{ fontSize: "50px" }}>Atelier</div>
      <div style={{ display: "inline-block", float: "right" }}>
        {/* <Button href='/sign-up' variant="outline-primary" style={{ margin: "10px" }}>Sign-up</Button>
        <Button href='/sign-in' variant="outline-primary" style={{ margin: "10px" }}>Sign-in</Button>
        <Button href='/user-info' variant="outline-primary" style={{ margin: "10px" }}>유저 정보</Button> */}
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


    </div>
  );
};

export default LandingPage;