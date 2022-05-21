import React from 'react'

import { Container, Image } from 'react-bootstrap'
import background1 from '../../images/exhibitionBackground/background1.jpg'
import background2 from '../../images/exhibitionBackground/background2.jpg'
import background3 from '../../images/exhibitionBackground/background3.jpg'
import background4 from '../../images/exhibitionBackground/background4.jpg'

const Background = ({ backgroundSrc, classNameParm, content }) => {
  const imgSrc = content ? content.link : './loopy.png'
  const test = () => {
    if (content) {
      alert('hi')
    }
  }
  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${backgroundSrc})`,
        }}
        className="preview"
      >
        <Container onClick={test} className={classNameParm}>
          <Image className="background-img" src={imgSrc}></Image>
        </Container>
      </Container>
    </>
  )
}

export default Background
