import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import Post from './Post'
import { useEffect } from 'react'
import axios from 'axios'
import './style.css'

const ExhibitionMakeSavedPage = () => {
  const [onlineExhibition, setOnlineExhibition] = useState([])
  const [change, setChange] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      axios.defaults.headers.common['Authorization'] =
        window.localStorage.getItem('token')
      const res = await axios.get('/api/user/get-saved-exhibition')

      setOnlineExhibition(res.data)
      const _change = !change
      setChange(_change)
    }

    fetchData()
  }, [])
  return (
    <Container className="saved-container">
      <Container className="inner">
        <Post posts={onlineExhibition}></Post>
      </Container>
    </Container>
  )
}

export default ExhibitionMakeSavedPage
