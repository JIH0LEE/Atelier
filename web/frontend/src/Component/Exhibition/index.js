import React from 'react'
import { Container, Figure, } from 'react-bootstrap'
import './style.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const Exhibition = ({ title, date, keyword }) => {
    const navigate = useNavigate()
    const onClick = () => {

        navigate("/")
    }


    return (
        <Container className="exhibition-container" onClick={onClick} >
            <Figure>
                <Figure.Image
                    width={50}
                    height={50}
                    src='./logo192.png'
                />
            </Figure>
            <ul style={{ textAlign: 'left' }}>
                <div>{title}</div>
                <div>{date}</div>
                <div>#{keyword[0]} #{keyword[1]} #{keyword[2]}</div>
            </ul>
        </Container >
    )
}

export default Exhibition