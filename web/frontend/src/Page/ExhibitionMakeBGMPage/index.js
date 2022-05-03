import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  InputGroup,
  FormControl,
  Figure,
} from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ExhibitionMakeBGMPage = () => {
  return (
    <Container className="exhibition_make-container">
      <Container className="inner">
        <Container id="elem1">
          <Col>
            <ListGroup horizontal>
              <ListGroup.Item>Step1</ListGroup.Item>
              <ListGroup.Item>Step2</ListGroup.Item>
              <ListGroup.Item active>Step3</ListGroup.Item>
              <ListGroup.Item>Step4</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <div className="title">bgm 설정하기</div>
          </Col>
          <Col></Col>
        </Container>
        <Container id="elem2"></Container>
        <Container id="elem3"></Container>
        <Container id="elem4">
          <Button>Save</Button>
          <Button>Next</Button>
        </Container>
      </Container>
    </Container>
  )
}

export default ExhibitionMakeBGMPage
