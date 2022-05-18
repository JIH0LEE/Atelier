import React from 'react'

import {
    Container,
    Image,
} from 'react-bootstrap'
import background1 from '../../images/exhibitionBackground/background1.jpg'

const BackgroundOne = () => {
    return (<>
        <Container
            style={{
                backgroundImage: `url(${background1})`,
            }}
            className="preview"
        >
            <Container className="background1">
                <Image className="background1-img" src="./loopy.png"></Image>
            </Container>
        </Container>
    </>)
}

export default BackgroundOne