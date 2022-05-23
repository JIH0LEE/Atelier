import React from 'react'
import { Container, Figure, Row, Col, FormLabel, Badge } from 'react-bootstrap'
import './style.css'
import { useNavigate, Link } from 'react-router-dom'
import { testColor } from '../../Style/theme'
import axios from 'axios'
import './style.css'

const OfflineExhibition = ({
  id,
  title,

  poaster,

  description,
}) => {
  return (
    <Container className="exhibition-container">
      <Row>
        <Col className="row1-col2" xs={4}>
          <Figure className="img-container1">
            <Figure.Image className="img" src={poaster} />
          </Figure>
        </Col>
        <Col className="row1-col2" xs={8}>
          <Container className="title-label-container">
            <Badge className="title-badge" bg="None">
              {title}
            </Badge>
          </Container>
          <Container className="author-label-container">
            <FormLabel
              style={{
                marginBottom: '0px',
                fontSize: '20px',
                color: 'black',
                float: 'right',
              }}
            >
              {'익명'} 님의 작품
            </FormLabel>
          </Container>
          <Container className="description-label-container">
            <FormLabel
              style={{
                fontSize: '15px',
                color: 'black',
                float: 'left',
                textAlign: 'left',
              }}
            >
              {description}
            </FormLabel>
          </Container>
          <Container className="tag-label-container">
            <FormLabel
              style={{ fontSize: '30px', color: 'black', float: 'right' }}
            ></FormLabel>
          </Container>

          <Container>
            <FormLabel
              style={{
                fontSize: '30px',
                color: 'pink',
                float: 'left',
                fontWeight: 'bold',
              }}
            ></FormLabel>
            <FormLabel
              style={{ fontSize: '30px', color: 'black', float: 'right' }}
            ></FormLabel>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default OfflineExhibition
