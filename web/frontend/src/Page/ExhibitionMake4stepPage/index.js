import React, { useState, useEffect } from 'react'

import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  InputGroup,
  FormControl,
  Figure,
  Image,
} from 'react-bootstrap'
import background1 from '../../images/exhibitionBackground/background1.jpg'
import background2 from '../../images/exhibitionBackground/background2.jpg'
import background3 from '../../images/exhibitionBackground/background3.jpg'
import background4 from '../../images/exhibitionBackground/background4.jpg'

import './style.css'
import Background from './Background'

const ExhibitionMake4stepPage = () => {
  const [index, setIndex] = useState(0)

  const maxId = 4
  const backgroundList = [
    {
      id: 0,
      imgSrc: background1,
      classNameParm: 'background1',
    },
    {
      id: 1,
      imgSrc: background2,
      classNameParm: 'background2',
    },
    {
      id: 2,
      imgSrc: background3,
      classNameParm: 'background3',
    },
    {
      id: 3,
      imgSrc: background4,
      classNameParm: 'background4',
    },
  ]
  const nextTheme = () => {
    let nextId = index + 1
    if (nextId >= maxId) {
      setIndex(0)
    } else {
      setIndex(nextId)
    }
    console.log(index)
  }
  const previousTheme = () => {
    let prevId = index - 1
    if (prevId < 0) {
      setIndex(maxId - 1)
    } else {
      setIndex(prevId)
    }
    console.log(index)
  }
  const changeBackground = () => {}
  return (
    <Container className="exhibition_make-container4">
      <Container className="inner">
        <Container id="elem1">
          <Col>
            <ListGroup horizontal>
              <ListGroup.Item>Step1</ListGroup.Item>
              <ListGroup.Item>Step2</ListGroup.Item>
              <ListGroup.Item>Step3</ListGroup.Item>
              <ListGroup.Item active>Step4</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <div className="title">전시하기</div>
          </Col>
          <Col></Col>
        </Container>
        <Container style={{ margin: '10px', display: 'flex' }}>
          <Button
            style={{
              marginRight: 'auto',
              backgroundColor: '#daa520',
              borderColor: '#daa520',
              fontSize: '30px',
            }}
            onClick={previousTheme}
          >
            previous
          </Button>

          <Button
            style={{
              backgroundColor: '#daa520',
              borderColor: '#daa520',
              fontSize: '30px',
            }}
            onClick={nextTheme}
          >
            {' '}
            next{' '}
          </Button>
        </Container>
        <Container id="elem3">
          <Background
            imgSrc={backgroundList[index].imgSrc}
            classNameParm={backgroundList[index].classNameParm}
          ></Background>
        </Container>

        <Container id="elem4">
          <Button style={{ float: 'left' }}>Previous</Button>

          <Button style={{ float: 'right' }}>Next</Button>
          <Button style={{ float: 'right' }}>Save</Button>
        </Container>
      </Container>
    </Container>
  )
}

export default ExhibitionMake4stepPage
