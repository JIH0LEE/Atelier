import React from 'react'
import {
  Container,
  Figure,
  Row,
  Col,
  FormLabel,
  Badge,
  CloseButton,
} from 'react-bootstrap'
import './style.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const SavedExhibition = ({
  id,
  title,
  date,
  keyword,
  poaster,
  author,
  likes,
  description,
}) => {
  const navigate = useNavigate()
  const onClick = () => {
    alert('Hi')
  }
  const onDelete = () => {
    axios.defaults.headers.common['Authorization'] =
      window.localStorage.getItem('token')
    axios.delete(`/api/user/delete-online?id=${id}`).then(res => {
      console.log(res.data)
    })
  }
  return (
    <Container className="exhibition-container">
      <Row>
        <Col className="row1-col2" xs={4}>
          <Figure className="img-container1">
            <Figure.Image className="img" src={poaster} />
          </Figure>
        </Col>
        <Col className="row1-col2" xs={8}>
          <Container className="title-label-container">
            <Badge className="title-badge" bg="None">
              {title}
            </Badge>
            <CloseButton
              style={{ float: 'right' }}
              onClick={onDelete}
            ></CloseButton>
          </Container>
          <Container className="author-label-container">
            <FormLabel
              style={{
                marginBottom: '0px',
                fontSize: '20px',
                color: 'black',
                float: 'right',
              }}
            >
              {author} 님의 작품
            </FormLabel>
          </Container>
          <Container className="description-label-container">
            <FormLabel
              style={{ fontSize: '25px', color: 'black', float: 'left' }}
            >
              {description}
            </FormLabel>
          </Container>
          <Container className="tag-label-container">
            <FormLabel
              style={{ fontSize: '30px', color: 'black', float: 'right' }}
            >
              <Badge className="tag-badge" bg="None" pill>
                #{keyword[0]}
              </Badge>
              <Badge className="tag-badge" bg="None" pill>
                #{keyword[1]}
              </Badge>
              <Badge className="tag-badge" bg="None" pill>
                #{keyword[2]}
              </Badge>
            </FormLabel>
          </Container>

          <Container>
            <FormLabel
              style={{
                fontSize: '30px',
                color: 'pink',
                float: 'left',
                fontWeight: 'bold',
              }}
            >
              {likes} likes
            </FormLabel>
            <FormLabel
              style={{ fontSize: '30px', color: 'black', float: 'right' }}
            >
              {date}
            </FormLabel>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default SavedExhibition
