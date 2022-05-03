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
import ModalPosterButton from './ModalButtonPoster'
import './style.css'

const ExhibitionMakePage3 = () => {
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
            <div className="title">BGM 설정</div>
          </Col>
          <Col></Col>
        </Container>
        <Container id="elem2">
          <Row>
            <InputGroup>
              <FormControl
                onChange={titleChange}
                maxLength={20}
                placeholder="title"
              />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <FormControl
                onChange={tag1Change}
                maxLength={5}
                placeholder="tag1"
              />
              <FormControl
                onChange={tag2Change}
                maxLength={5}
                placeholder="tag2"
              />
              <FormControl
                onChange={tag3Change}
                maxLength={5}
                placeholder="tag3"
              />
            </InputGroup>
          </Row>
        </Container>
        <Container id="elem3">
          <Col>
            <Figure className="image-container">
              {isWider(showingPoster) ? (
                <Figure.Image className="img1" src={showingPoster} />
              ) : (
                <Figure.Image className="img2" src={showingPoster} />
              )}
            </Figure>
            <ModalPosterButton
              func={posterChange}
              poster={showingPoster}
            ></ModalPosterButton>
          </Col>
          <Col>
            <textarea
              onChange={descriptionChange}
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
          <Button onClick={save}>Save</Button>
          <Button onClick={next}>Next</Button>
        </Container>
      </Container>
    </Container>
  )
}

export default ExhibitionMakePage3
