import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './style.css'

const ExhibitionMakeReadyPage = () => {
  const navigate = useNavigate()

  const makeNew = () => {
    navigate(`/make-exhibition-start`, {
      state: {
        id: null,
      },
    })
  }
  return (
    <Container className="exhibition_ready-container">
      <Container className="inner">
        <Button onClick={makeNew}>새로 만들기</Button>

        <Button href="/saved-exhibition">불러오기</Button>
      </Container>
    </Container>
  )
}

export default ExhibitionMakeReadyPage
