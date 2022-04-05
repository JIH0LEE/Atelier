import React, { useEffect, useState } from 'react'
import { Button, Container, Figure, Row, Col, Form } from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import HeartImg from './heart.png'
import EmptyHeartImg from './heart-2.png'
import Comment from '../../Component/Comment'
import isLogin from '../../utils/isLogin'
import axios from 'axios'
import { header } from '../../config'

const ExhibitionInfo = () => {
  const { id, title, date, keyword, poaster, description, like } =
    useLocation().state //state
  const { key } = useParams()
  //const { id, title, date, keyword, poaster, description, like } = useLocation().state //state
  //console.log(title + " " + date + " " + keyword)
  const [favorite, setFavorite] = React.useState(false)
  const [comment, setComment] = React.useState('')
  const [commentList, setCommentList] = useState([])
  const commentChange = e => {
    setComment(e.target.value)
  }
  const onHeartClick = () => {
    setFavorite(!favorite)
  }

  //댓글 등록
  const onCommentClick = () => {
    var body = {
      comment: comment,
    }
    axios.post('', body).then(res => {
      if (res.data.success) {
      } else {
      }
    })
  }

  useEffect(() => {
    if (isLogin()) {
      axios.get('/api/user/likes', { params: { id: id } }, header).then(res => {
        //console.log(res.data)
        setFavorite(res.data)
      })
    }
    //댓글 가져오기
    axios.get('/api/comment', { params: { id: id } }).then(res => {
      setCommentList(res.data)
    })
  }, [])

  useEffect(() => {
    if (isLogin()) {
      //console.log(favorite)
      var body = {
        id: id,
        clicked: favorite
      }
      //console.log(body)


      async function post() {
        axios
          .post('/api/user/likes', body, header)
          .then(res => {
            console.log(res.data)
            if (res.data) {
              console.log("update success")
            } else {
              console.log("update fail")
            }
          })
      }

      post()
    }
  }, [favorite])

  return (
    //console.log(parms.key)
    <Container>
      <Container
        className="landing-container"
        style={{ padding: '5px', display: 'block' }}
      >
        <Row style={{ marginTop: '20px' }}>
          <Col>
            <Figure.Image width={300} height={300} src={poaster} />
          </Col>
          <Col xs={6} style={{ textAlign: 'left', fontSize: '20px' }}>
            <div style={{ margin: 'auto' }}>{title}</div>
            <div style={{ marginTop: '5px' }}>{date}</div>
            <div style={{ marginTop: '5px', fontStyle: 'italic' }}>
              #{keyword[0]} #{keyword[1]} #{keyword[2]}
            </div>
            <Container style={{ display: 'flex', marginTop: '5px' }}>
              <img
                src={favorite ? HeartImg : EmptyHeartImg}
                style={{ width: '3vw', padding: '5px' }}
                onClick={onHeartClick}
              ></img>
              <Row>
                <div></div>
                <div style={{ justifyItems: 'center' }}>{like}</div>
                <div></div>
              </Row>
            </Container>
            <div style={{ marginTop: '20px' }}>{description}</div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Button
            style={{
              width: '80%',
              marginTop: '40px',
              marginBottom: '40px',
              background: '#daa520',
              border: '#daa520',
            }}
          >
            전시회 바로 이동
          </Button>
          <Col></Col>
        </Row>
        <Row>
          {commentList.map(comment => (
            <Comment comment={comment}></Comment>
          ))}
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Container>
            <Row
              style={{
                fontStyle: 'oblique',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              <Container style={{ width: '70%' }}>
                User name 사용자이름
              </Container>
            </Row>
            <Row>
              <Container>
                <input
                  placeholder="댓글을 남겨보세요"
                  type="text"
                  style={{ width: '70%' }}
                  onChange={commentChange}
                ></input>
                <Button style={{ background: '#daa520', border: '#daa520' }}>
                  게시
                </Button>
              </Container>
            </Row>
          </Container>
        </Row>
      </Container>
    </Container>
  )
}

export default ExhibitionInfo
