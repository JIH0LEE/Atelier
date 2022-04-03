import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'

const Comment = () => {
    // #daa520 #f3ca4d
    return (
        <Container style={{ width: "60vw", marginTop: "5px", marginBottom: "5px", borderBottom: "3px #daa520 solid", borderRadius: "0px", padding: "5px" }}>
            <Row>
                <Col style={{ display: "flex" }}>
                    <Col xs={1} style={{ marginLeft: "10px", marginRight: "10px" }}>
                        <Row>
                            <Container>
                                <Figure.Image src="https://cataas.com/cat/60b73094e04e18001194a309/says/react" />

                            </Container>
                        </Row>
                    </Col>
                    <Col xs={8} style={{ textAlign: "left", marginLeft: "10px" }}>
                        <Row style={{ fontStyle: "oblique", fontWeight: "bold" }}>User name 사용자이름</Row>
                        <Row></Row>
                        <Row>댓글을 이렇게 한 번 달아볼게요! 잘 보고 갑니다~</Row>
                    </Col>
                    <Col>
                        30, August 2016
                    </Col>
                </Col>
            </Row>

        </Container >
    )
}

export default Comment