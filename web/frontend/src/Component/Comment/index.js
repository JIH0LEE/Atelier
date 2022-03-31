import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'

const Comment = () => {
    return (
        <Container style={{ width: "60vw", marginTop: "5px", marginBottom: "5px", border: "3px #f3ca4d solid", borderRadius: "10px", padding: "5px" }}>
            <Row>
                <Col style={{ display: "flex" }}>
                    <Col xs={1} style={{ margin: "auto" }}>
                        <Row>
                            <Figure.Image width={"5 %"} src="https://cataas.com/cat/60b73094e04e18001194a309/says/react" />
                            <div>사용자 이름</div>
                        </Row>
                    </Col>
                    <Col xs={10} style={{ textAlign: "left", margin: "auto" }}>
                        댓글을 이렇게 한 번 달아볼게요! 잘 보고 갑니다~
                    </Col>

                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>30, August 2016</Col>
            </Row>
        </Container >
    )
}

export default Comment