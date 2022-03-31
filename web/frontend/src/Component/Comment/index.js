import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'

const Comment = () => {
    return (
        <Container style={{ width: "60vw" }}>
            <Row>
                <Col style={{ display: "flex" }}>
                    <Col>
                        <Figure.Image width={50} height={50} src="https://cataas.com/cat/60b73094e04e18001194a309/says/react" />
                    </Col>
                    <Col>
                        <Row>사용자 이름</Row>
                        <Row>30, August 2016</Row>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col></Col>댓글을 이렇게 한 번 달아볼게요! 잘 보고 갑니다~<Col></Col>
            </Row>
        </Container>
    )
}

export default Comment