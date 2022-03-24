import { Row, Col, Nav, Navbar, Container } from 'react-bootstrap'
import React from 'react'
const Navigation = () => {
  return (
    <Row>
      <Navbar style={{ placeContent: 'center' }} bg="primary" variant="dark">
        <Col className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="#home">메뉴1</Nav.Link>
          </Nav>
        </Col>

        <Col className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="#home">메뉴2</Nav.Link>
          </Nav>
        </Col>

        <Col className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="#home">메뉴3</Nav.Link>
          </Nav>
        </Col>
      </Navbar>
    </Row>
  )
}

export default Navigation
