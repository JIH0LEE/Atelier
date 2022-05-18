import React from 'react'

import {
    Container,
    Image,
} from 'react-bootstrap'
import background2 from '../../images/exhibitionBackground/background2.jpg'

const BackgroundTwo = () => {
    return (<>
        <Container
            style={{
                backgroundImage: `url(${background2})`,
            }}
            className="preview"
        >
            <Container className="background1">
                <Image className="background1-img" src="./loopy.png"></Image>
            </Container>
        </Container>
    </>)
}

export default BackgroundTwo