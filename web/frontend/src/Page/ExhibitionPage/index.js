import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import './style.css'

const ExhibitionPage = () => {
  const location = useLocation()
  const [id, setId] = useState(location.state.id)
  console.log(id)
  return (
    <Container className="exhibition-container">
      <Container className="inner"></Container>
    </Container>
  )
}

export default ExhibitionPage
