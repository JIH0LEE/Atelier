import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import './style.css'

const ExhibitionMakeReadyPage = () => {
  return (
    <Container className="exhibition_ready-container">
      <Container className="inner">
        <Button href="/make-exhibition-start">새로 만들기</Button>

        <Button href="/saved-exhibition">불러오기</Button>
      </Container>
    </Container>
  )
}

export default ExhibitionMakeReadyPage
