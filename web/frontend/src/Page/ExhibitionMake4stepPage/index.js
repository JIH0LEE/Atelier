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
    Image
} from 'react-bootstrap'

import './style.css'



const ExhibitionMake4stepPage = () => {
    return (
        <Container className="exhibition_make-container3">
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

                <div style={{ backgroundImage: "url(/background1.jpg)" }}>

                </div>
                <Container id="elem4">
                    <Button style={{ float: 'left' }}>
                        Previous
                    </Button>

                    <Button style={{ float: 'right' }}>
                        Next
                    </Button>
                    <Button style={{ float: 'right' }}>
                        Save
                    </Button>
                </Container>
            </Container>
        </Container>
    )
}

export default ExhibitionMake4stepPage