import React, { useState } from 'react'
import {
  Container,
  Tab,
  Col,
  Button,
  ListGroup,
  Tabs,
  Row,
} from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'

const ExhibitionMakeBGMPage = () => {
  const cuteBGM = [
    {
      name: 'Jay Jay - Kevin MacLeod',
      src: 'http://docs.google.com/uc?export=open&id=1PyIHSBI2juBwoub3P6m9j65fjP02OhhV',
    },
    {
      name: 'Jigsaw Puzzle - The Green Orbs',
      src: 'http://docs.google.com/uc?export=open&id=1offo2TGHUXksn3ok6cVDrQPKhoKH8ahz',
    },
    {
      name: 'Lovable Clown Sit Com - Sir Cubworth',
      src: 'http://docs.google.com/uc?export=open&id=1OpZSwINyehkj5Sqg0is2XVYusLwAz2mL',
    },
    {
      name: 'Springtime Family Band - The Green Orbs',
      src: 'http://docs.google.com/uc?export=open&id=14OobcKwHB27HTUKAyrGlceGgfVNmsd1k',
    },
  ]
  const calmBGM = [
    {
      name: 'Arms of Heaven - Aakash Gandhi',
      src: 'http://docs.google.com/uc?export=open&id=10bWZZmjaWL9BN5MCpmYzIHUuP0r69ubd',
    },
    {
      name: 'Beseeched - Asher Fulero',
      src: 'http://docs.google.com/uc?export=open&id=1DEjWLrY3ZZfjy8ADRHc9jQoMXG4vz-jd',
    },
    {
      name: 'Kiss the Sky - Aakash Gandhi',
      src: 'http://docs.google.com/uc?export=open&id=1H4byx9DXMjeQg0X6dvh7R0oC1QOePcPS',
    },
    {
      name: 'One Step Closer - Aakash Gandhi',
      src: 'http://docs.google.com/uc?export=open&id=1lRtla5YKHDrvTQITu3LNE5WOhIz2gPnL',
    },
  ]
  const excitingBGM = [
    {
      name: 'Alternate - Vibe Tracks',
      src: 'http://docs.google.com/uc?export=open&id=1TpxtKMk9O-l4j3lu2a48TiUhgnr5A7NU',
    },
    {
      name: 'Beat Your Competition - Vibe Tracks',
      src: 'http://docs.google.com/uc?export=open&id=1-m6M-5Ep2V_B90ljaXQB19ZB4RD9rBQH',
    },
    {
      name: 'Classique - Francis Preve',
      src: 'http://docs.google.com/uc?export=open&id=1fNCsN6smff1u0aPm1LRivlljHAtKSiYk',
    },
    {
      name: 'Down with Paradise - Norma Rockwell.',
      src: 'http://docs.google.com/uc?export=open&id=1GCTJ0wiJ9oBgFR8hAHhUYNqgq6CjABgZ',
    },
  ]
  const bightBGM = [
    {
      name: 'Bike Rides - The Green Orbs',
      src: 'http://docs.google.com/uc?export=open&id=12GbzjUB0f99yZy7JJhWHdPXLwaKUq8Ra',
    },
    {
      name: 'Cha Cappella - Jimmy Fontanez_Media Right Productions',
      src: 'http://docs.google.com/uc?export=open&id=1ke-cmTZRGpEtDwjOQv1pfh8CKbNhqzLY',
    },
    {
      name: 'If I Had a Chicken - Kevin MacLeod',
      src: 'http://docs.google.com/uc?export=open&id=1AZofsqr9BHZbMIXAz2-vNaWWeazF1YNd',
    },
    {
      name: 'Payday - Jason Farnham',
      src: 'http://docs.google.com/uc?export=open&id=1Vmm672LVzoRFaShOwt1WGujDh0_87Kp0',
    },
  ]
  const changeBGM = e => {
    console.log(e.target.key)
  }

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
        <Container id="elem2">
          <audio
            controls
            id="bgm"
            loop
            src={
              'http://docs.google.com/uc?export=open&id=1PyIHSBI2juBwoub3P6m9j65fjP02OhhV'
            }
            autoPlay={true}
          ></audio>
        </Container>
        <Container id="elem5">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <Container className="inner1">
                  <ListGroup>
                    <ListGroup.Item action eventKey="#1">
                      귀여운
                    </ListGroup.Item>
                    <ListGroup.Item action eventKey="#2">
                      잔잔한
                    </ListGroup.Item>
                    <ListGroup.Item action eventKey="#3">
                      신나는
                    </ListGroup.Item>
                    <ListGroup.Item action eventKey="#4">
                      밝은
                    </ListGroup.Item>
                  </ListGroup>
                </Container>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#1">
                    <ListGroup>
                      {cuteBGM.map(bgm => (
                        <ListGroup.Item onClick={changeBGM}>
                          {bgm.name}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#2">2</Tab.Pane>
                  <Tab.Pane eventKey="#3">3</Tab.Pane>
                  <Tab.Pane eventKey="#4">4</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
        <Container id="elem4">
          <Button>Save</Button>
          <Button>Next</Button>
        </Container>
      </Container>
    </Container>
  )
}

export default ExhibitionMakeBGMPage
