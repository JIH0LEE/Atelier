import axios from 'axios'
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
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [poster, setPoster] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/get-offline-info?id=${id}`)
      setTitle(res.data.title)
      setDescription(res.data.descript)
      setLink(res.data.link)
      setPoster(res.data.poaster)
    }

    fetchData()
  }, [])

  return (
    <Container className="offline-exhibitionInfo-container">
      <Container className="title">{title}</Container>
      <Container className="body">
        <Container className="poaster"></Container>
        <Container className="descript"></Container>
      </Container>
      <Container className="link">{link}</Container>
    </Container>
  )
}

export default OfflineExhibitionInfo
