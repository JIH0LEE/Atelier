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

const ExhibitionMake4stepPage = () => {
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
        <Container
          id="elem3"
          style={{
            backgroundImage: `url(${background4})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '800px',
          }}
        >
          <Container
            style={{
              width: '512px',
              height: '305px',
              marginBottom: '160px',
              padding: '0px',
              overflow: 'hidden',
              border: 'solid'
            }}
          >
            <Image
              src="./loopy.png"
              style={{
                objectFit: 'cover',
                width: '512px',
                maxHeight: '305px',
              }}
            ></Image>
          </Container>
          {/* case1 */}
          {/* <Container
            style={{
              width: '690px',
              height: '432px',
              marginBottom: '357px',
              padding: '0px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="./loopy.png"
              style={{
                objectFit: 'cover',
                width: '690px',
                maxHeight: '432px',
              }}
            ></Image>
            
          </Container> */}
          {/* case2 */}
          {/* <Container
            style={{
              width: '580px',
              height: '350px',
              marginBottom: '300px',
              padding: '0px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="./loopy.png"
              style={{
                objectFit: 'cover',
                width: '580px',
                maxHeight: '350px',
              }}
            ></Image>
          </Container> */}

          {/* case3 */}
          {/* 
          <Container
            style={{
              width: '627px',
              height: '350px',
              marginBottom: '400px',
              padding: '0px',
              overflow: 'hidden',
              border: 'solid'
            }}
          >
            <Image
              src="./loopy.png"
              style={{
                objectFit: 'cover',
                width: '627px',
                maxHeight: '350px',
              }}
            ></Image>
          </Container>
          */}
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
