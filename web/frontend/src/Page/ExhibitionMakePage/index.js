import React from 'react'
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
import ModalPosterButton from './ModalButtonPoster'
import './style.css'
const ExhibitionMakePage = () => {
  return (
    <Container className="exhibition_make-container">
      <Container className="inner">
        <Container id="elem1">
          <Col>
            <ListGroup horizontal>
              <ListGroup.Item active>Step1</ListGroup.Item>
              <ListGroup.Item>Step2</ListGroup.Item>
              <ListGroup.Item>Step3</ListGroup.Item>
              <ListGroup.Item>Step4</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <div className="title">시작하기</div>
          </Col>
          <Col></Col>
        </Container>
        <Container id="elem2">
          <Row>
            <InputGroup>
              <FormControl placeholder="title" />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <FormControl placeholder="tag1" />
              <FormControl placeholder="tag2" />
              <FormControl placeholder="tag3" />
            </InputGroup>
          </Row>
        </Container>
        <Container id="elem3">
          <Col>
            <Figure className="image-container">
              <Figure.Image />
            </Figure>
            <ModalPosterButton></ModalPosterButton>
          </Col>
          <Col>
            <textarea
              maxLength={400}
              placeholder="Description"
              style={{ width: '80%', height: '80%' }}
            ></textarea>
            <Container
              style={{ textAlign: 'right', width: '80%', fontSize: '20px' }}
            >
              0/400
            </Container>
          </Col>
        </Container>
        <Container id="elem4">
          <Button>Save</Button>
          <Button>Next</Button>
        </Container>
      </Container>
    </Container>
  )
}

export default ExhibitionMakePage
