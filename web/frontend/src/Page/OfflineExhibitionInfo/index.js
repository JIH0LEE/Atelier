import React, { useEffect, useState } from 'react'
import {
  Button,
  Container,
  Figure,
  Row,
  Col,
  Badge,
  FormLabel,
} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import './style.css'
const OfflineExhibitionInfo = () => {
  const { id } = useParams()
  console.log(id)
  useEffect(() => {}, [])

  return (
    //console.log(parms.key)
    <Container>
      <Container
        className="exhibitionInfo-container"
        style={{ padding: '5px', display: 'block' }}
      ></Container>
    </Container>
  )
}

export default OfflineExhibitionInfo
