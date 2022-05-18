import React from 'react'

import {
    Container,
    Image,
} from 'react-bootstrap'
import background4 from '../../images/exhibitionBackground/background4.jpg'

const BackgroundFour = () => {
    return (<>
        <Container
            style={{
                backgroundImage: `url(${background4})`,
            }}
            className="preview"
        >
            <Container className="background1">
                <Image className="background1-img" src="./loopy.png"></Image>
            </Container>
        </Container>
    </>)
}

export default BackgroundFour