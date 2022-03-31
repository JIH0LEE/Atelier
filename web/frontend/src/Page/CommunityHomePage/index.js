import React, { useState, useEffect } from 'react'
import {
  Button,
  Container,
  FormControl,
  Row,
  Col,
  FormLabel,
} from 'react-bootstrap'
import axios from 'axios'
import Exhibition from '../../Component/Exhibition'
import NavDropdown from 'react-bootstrap/NavDropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import './style.css'
const CommunityHomePage = () => {
  const [onlineExhibition, setOnlineExhibition] = useState([])
  useEffect(() => {
    axios.get('/api/online-exhibition').then(res => {
      setOnlineExhibition(res.data)
    })
  }, [])
  console.log(onlineExhibition)
  return (
    <>
      <Container className="communityPage">
        <Container className="community-main">
          <FormLabel
            style={{ fontSize: '30px', color: '#DD9700', marginTop: '8px' }}
          >
            지금 나에게 맞는 전시회를 찾아보세요!
          </FormLabel>
          <Row>
            <InputGroup className="align-text">
              <InputGroup.Text>키워드를 입력하세요</InputGroup.Text>
              <FormControl
                aria-label="first keyword"
                placeholder="1st keyword"
              />
              <FormControl
                aria-label="second keyword"
                placeholder="2nd keyword"
              />
              <FormControl
                aria-label="third keyword"
                placeholder="3rd keyword"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <NavDropdown
                title="Dropdown"
                id="nav-dropdown"
                style={{ float: 'right' }}
              >
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
          <Container>
            {onlineExhibition.map(exhibition => (
              <Exhibition
                id={exhibition.id}
                title={exhibition.title}
                date={exhibition.startDate}
                keyword={[exhibition.tag1, exhibition.tag2, exhibition.tag3]}
              ></Exhibition>
            ))}
          </Container>
          <Container>
            <Exhibition
              id={1}
              title={'title1'}
              date={'22.3.30'}
              keyword={['봄', '사과', '글로벌']}
            ></Exhibition>
            <Exhibition
              id={2}
              title={'title1'}
              date={'22.3.30'}
              keyword={['방송', '아시아', '휴대폰']}
            ></Exhibition>
            <Exhibition
              id={3}
              title={'title1'}
              date={'22.3.30'}
              keyword={['펜싱', '마스크', '잔디']}
            ></Exhibition>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default CommunityHomePage
