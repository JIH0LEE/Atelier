import React, { useState } from 'react'
import { Button, Container, Figure, Row, Col } from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import HeartImg from './heart.png'
import EmptyHeartImg from './heart-2.png'
import Comment from '../../Component/Comment'

const ExhibitionInfo = () => {
  const { key } = useParams()
  const { title, date, keyword } = useLocation().state //state
  //console.log(title + " " + date + " " + keyword)
  const [favorite, setFavorite] = React.useState(false)
  const onHeartClick = () => {
    //if (heart == HeartImg) {
    //    setHeart(EmptyHeartImg)
    //} else {
    //    setHeart(HeartImg)
    //}
    setFavorite(!favorite)
    console.log('clicked')
  }
  return (
    //console.log(parms.key)
    <Container>
      <Container className="landing-container" style={{ padding: "5px", display: "block" }}>
        <Row>
          <Col>
            <Figure.Image
              width={300}
              height={300}
              src="https://cataas.com/cat/60b73094e04e18001194a309/says/react"
            /></Col>
          <Col xs={6} style={{ textAlign: "left" }}>
            <div>{title}</div>
            <div>{date}</div>
            <div>
              #{keyword[0]} #{keyword[1]} #{keyword[2]}
            </div>
            <img
              src={favorite ? HeartImg : EmptyHeartImg}
              style={{ width: '3vw', padding: "5px" }}
              onClick={onHeartClick}
            ></img>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Button style={{ width: "50vw", marginTop: "5px", marginBottom: "5px" }}>전시회 바로 이동</Button>
          <Col></Col>
        </Row>
        <Row>
          <Comment></Comment>
        </Row>
      </Container>
    </Container>


  )
}

export default ExhibitionInfo
