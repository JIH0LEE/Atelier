import React from 'react'
import { Container, Figure, Row, Col, FormLabel, Button } from 'react-bootstrap'
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
        <Col className="row1-col2" xs={4}>
          <Figure
            width={150}
            height={150}
            style={{
              marginBottom: '0',
            }}
          >
            <Figure.Image
              width={200}
              height={200}
              style={{
                border: 'solid',
                marginBottom: '10px',
                marginTop: '10px',
              }}
              src="./logo192.png"
            />
          </Figure>
        </Col>
        <Col className="row1-col2" xs={8}>
          <FormLabel
            style={{ fontSize: '30px', color: 'white', textAlign: 'left' }}
          >
            {title}
          </FormLabel>
          <FormLabel
            style={{ fontSize: '30px', color: 'white', textAlign: 'left' }}
          >
            {date}
          </FormLabel>
          <FormLabel
            style={{ fontSize: '30px', color: 'white', textAlign: 'left' }}
          >
            #{keyword[0]} #{keyword[1]} #{keyword[2]}
          </FormLabel>
        </Col>
      </Row>
    </Container>
  )
}

export default Exhibition
