import React from 'react'
import { Container, Figure, Row, Col, FormLabel, Button } from 'react-bootstrap'
import './style.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const Exhibition = ({ id, title, date, keyword, poaster }) => {
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
          <Figure className="img-container1">
            <Figure.Image className="img" src={poaster} />
          </Figure>
        </Col>
        <Col className="row1-col2" xs={8}>
          <Container className="label-container1">
            <FormLabel
              style={{
                fontSize: '30px',
                color: 'black',
                textAlign: 'left',
                margin: '0px',
              }}
            >
              {title}
            </FormLabel>
          </Container>
          <Container>
            <FormLabel style={{ fontSize: '30px', color: 'black' }}>
              {date}
            </FormLabel>
          </Container>
          <Container>
            <FormLabel style={{ fontSize: '30px', color: 'black' }}>
              #{keyword[0]} #{keyword[1]} #{keyword[2]}
            </FormLabel>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Exhibition
