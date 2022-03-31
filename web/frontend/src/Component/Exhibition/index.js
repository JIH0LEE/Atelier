import React from 'react'
import { Container, Figure, Row, Col } from 'react-bootstrap'
import './style.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Exhibition = ({ id, title, date, keyword }) => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate(`/exhibition/${id}`, {
      state: { title: title, date: date, keyword: keyword },
    }) // { state: title }
  }

  return (
    <Container className="exhibition-container" onClick={onClick}>
      <Row>
        <Col>
          <Figure>
            <Figure.Image width={50} height={50} src="./logo192.png" />
          </Figure>
        </Col>
        <Col>
          <ul style={{ textAlign: 'left' }}>
            <div>{title}</div>
            <div>{date}</div>
            <div>
              #{keyword[0]} #{keyword[1]} #{keyword[2]}
            </div>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Exhibition
