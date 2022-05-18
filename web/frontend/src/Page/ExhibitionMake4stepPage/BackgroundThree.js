import React from 'react'

import {
    Container,
    Image,
} from 'react-bootstrap'
import background3 from '../../images/exhibitionBackground/background3.jpg'

const BackgroundThree = () => {
    return (<>
        <Container
            style={{
                backgroundImage: `url(${background3})`,
            }}
            className="preview"
        >
            <Container className="background1">
                <Image className="background1-img" src="./loopy.png"></Image>
            </Container>
        </Container>
    </>)
}

export default BackgroundThree