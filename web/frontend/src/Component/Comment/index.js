import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import './style.css'
const Comment = ({ comment }) => {
  // #daa520 #f3ca4d
  return (
    <Container
      style={{
        width: '80%',
        marginTop: '5px',
        marginBottom: '5px',
        borderBottom: '3px #daa520 solid',
        borderRadius: '0px',
        padding: '5px',
      }}
    >
      <Row>
        <Col style={{ display: 'flex' }}>
          <Col xs={1} style={{ marginLeft: '10px', marginRight: '10px' }}>
            <Row>
              <Container
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Figure className="comment-img-container">
                  <Figure.Image className="img" src={comment.profile} />
                </Figure>
              </Container>
            </Row>
          </Col>
          <Col xs={10} style={{ textAlign: 'left', marginLeft: '10px' }}>
            <Container>
              <Row style={{ fontStyle: 'oblique', fontWeight: 'bold' }}>
                {comment.nickname}
              </Row>
              <Row>{comment.description}</Row>
            </Container>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Comment
