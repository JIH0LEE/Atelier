import React from 'react'
import { Container, Figure, } from 'react-bootstrap'
import './style.css'

const Exhibition = () => {
    return (
        <Container className="exhibition-container" >
            <Figure>
                <Figure.Image
                    width={50}
                    height={50}
                    src='./logo192.png'
                />
            </Figure>
            <ul style={{ textAlign: 'left' }}>
                <div>전시 제목</div>
                <div>전시 일자</div>
                <div>#키워드1 #키워드2 #키워드3</div>
            </ul>
        </Container>
    )
}

export default Exhibition