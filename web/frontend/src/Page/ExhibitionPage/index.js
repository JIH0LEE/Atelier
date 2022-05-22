import React, { useState, useEffect } from 'react'
import { Container, Button, Carousel } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Background from '../ExhibitionMake4stepPage/Background'
import background1 from '../../images/exhibitionBackground/background1.jpg'
import background2 from '../../images/exhibitionBackground/background2.jpg'
import background3 from '../../images/exhibitionBackground/background3.jpg'
import background4 from '../../images/exhibitionBackground/background4.jpg'
import axios from 'axios'

import './style.css'

const ExhibitionPage = () => {
  const location = useLocation()
  const [id, setId] = useState(location.state.id)
  const [contents, setContents] = useState([])
  const [theme, setTheme] = useState(0)
  const [currentOrder, setCurrentOrder] = useState(0)

  const backgroundList = [
    {
      id: 0,
      imgSrc: background1,
      classNameParm: 'background1',
    },
    {
      id: 1,
      imgSrc: background2,
      classNameParm: 'background2',
    },
    {
      id: 2,
      imgSrc: background3,
      classNameParm: 'background3',
    },
    {
      id: 3,
      imgSrc: background4,
      classNameParm: 'background4',
    },
  ]
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/select-online-exhibition?id=${id}`)
      setContents(res.data.contents)
      setTheme(parseInt(res.data.theme))
    }

    fetchData()
  }, [])

  console.log(id)
  return (
    <Container className="exhibition-show-container">
      <Container className="inner">
        <Carousel>
          {contents.map(content => (
            <Carousel.Item>
              <Container className="content">
                <Background
                  backgroundSrc={backgroundList[theme].imgSrc}
                  classNameParm={backgroundList[theme].classNameParm}
                  content={content}
                ></Background>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  )
}

export default ExhibitionPage
