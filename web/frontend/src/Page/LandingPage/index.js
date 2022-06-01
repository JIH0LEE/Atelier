import axios from 'axios'
import React, { useState } from 'react'

import {
  Button,
  Container,
  FormControl,
  Row,
  Col,
  FormLabel,
  Dropdown,
  InputGroup,
} from 'react-bootstrap'
import OfflineExhibition from '../../Component/OfflineExhibition'
import PosterShow from './PosterShow'

const LandingPage = () => {
  const [keyword1, setKeyword1] = useState('1st keyword')
  const [keyword2, setKeyword2] = useState('2nd keyword')
  const [keyword3, setKeyword3] = useState('3rd keyword')
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [poster, setPoster] = useState('')
  const [description, setDescription] = useState('')

  const keyword1Change = e => {
    setKeyword1(e.target.value)
  }

  const keyword2Change = e => {
    setKeyword2(e.target.value)
  }

  const keyword3Change = e => {
    setKeyword3(e.target.value)
  }

  const inputKeyword = () => {
    axios
      .post('/api/get-recommended-exhibition-without-db', {
        //id, title, poaster, description
        tag1: keyword1,
        tag2: keyword2,
        tag3: keyword3,
      })
      .then(res => {
        console.log(res)
        setId(res.data.id)
        setTitle(res.data.title)
        setPoster(res.data.poster)
        setDescription(res.data.descript)
      })
  }

  return (
    <>
      <Container className="landing-container">
        <Container className="top-container">
          <Container className="explain-container">
            <Container className="header"> Atelier는?</Container>
            <Container className="body">
              Atelier는 올인원 전시회 플랫폼 입니다
            </Container>
          </Container>

          <Container className="top5-container">
            <Container className="title">Top5</Container>

            <PosterShow></PosterShow>
          </Container>
        </Container>
        <Container className="recommend-container">
          <Container className="title">
            지금 나에게 맞는 전시회를 찾아보세요!
          </Container>
          <Container className="search">
            <Row>
              <InputGroup>
                <InputGroup.Text>키워드를 입력하세요</InputGroup.Text>
                <FormControl
                  aria-label="first keyword"
                  placeholder="1st keyword"
                  onChange={keyword1Change}
                />
                <FormControl
                  aria-label="second keyword"
                  placeholder="2nd keyword"
                  onChange={keyword2Change}
                />
                <FormControl
                  aria-label="third keyword"
                  placeholder="3rd keyword"
                  onChange={keyword3Change}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={inputKeyword}
                >
                  입력
                </Button>
              </InputGroup>
            </Row>
          </Container>
          <Container className="recommend">
            {id == '' ? null : (
              <OfflineExhibition
                id={id}
                title={title}
                poaster={poster}
                description={description}
              ></OfflineExhibition>
            )}
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default LandingPage
