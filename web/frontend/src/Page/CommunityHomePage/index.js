import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Exhibition from '../../Component/Exhibition'

const CommunityHomePage = () => {
    return (
        <div>
            <Container className="landing-container">
                <ul>
                    <Exhibition></Exhibition>
                    <Exhibition></Exhibition>
                    <Exhibition></Exhibition>
                </ul>
            </Container>
        </div>

    )
}

export default CommunityHomePage