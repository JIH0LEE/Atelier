import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
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
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/select-online-exhibition?id=${id}`)
      setContents(res.data.contents)
    }

    fetchData()
  }, [])

  console.log(id)
  return (
    <Container className="exhibition-show-container">
      <Container className="inner">
        <Background
          imgSrc={background4}
          classNameParm={'background4'}
        ></Background>
      </Container>
    </Container>
  )
}

export default ExhibitionPage
