import { Row, Col, Nav, Navbar } from 'react-bootstrap'
import React from 'react'

const Navigation = () => {
  return (
    <Row>
      <Navbar style={{ placeContent: 'center', backgroundColor: '#F3CA4D' }}>
        <Col className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="/community-home">Exhibition Info</Nav.Link>
          </Nav>
        </Col>
        <Col className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="#home">Nav 2</Nav.Link>
          </Nav>
        </Col>
        <Col className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="#home">Nav 3</Nav.Link>
          </Nav>
        </Col>
      </Navbar>
    </Row>
  )
}

export default Navigation
