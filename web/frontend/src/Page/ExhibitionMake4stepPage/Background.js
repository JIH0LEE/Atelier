import React from 'react'

import {
    Container,
    Image,
} from 'react-bootstrap'
import background1 from '../../images/exhibitionBackground/background1.jpg'
import background2 from '../../images/exhibitionBackground/background2.jpg'
import background3 from '../../images/exhibitionBackground/background3.jpg'
import background4 from '../../images/exhibitionBackground/background4.jpg'

const Background = ({ imgSrc, classNameParm }) => {
    return (<>
        <Container
            style={{
                backgroundImage: `url(${imgSrc})`,
            }}
            className="preview"
        >
            <Container className={classNameParm}>
                <Image className="background1-img" src="./loopy.png"></Image>
            </Container>
        </Container>
    </>)
}

export default Background