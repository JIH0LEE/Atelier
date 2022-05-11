import React, { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  InputGroup,
  FormControl,
  Figure,
} from 'react-bootstrap'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import ExhibitionPosting from '../../Component/ExhibitionPosting'
import PostList from './PostList'
import './style.css'
import { DragDropContext } from 'react-beautiful-dnd'

const ExhibitionMake2stepPage = ({ id }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const [ID, setID] = useState(location.state.id)
  //console.log(ID)

  const [postList, setPostList] = useState([
    { id: 0, link: '', description: '' },
  ])
  console.log(postList)
  const [IDList, setIDList] = useState([0])
  const [fileList, setFileList] = useState([undefined])
  const [descriptionList, setDescriptionList] = useState([''])



  useEffect(() => {
    axios.defaults.headers.common['Authorization'] =
      window.localStorage.getItem('token')
    axios.get(`/api/user/make-exhibition-step2?id=${ID}`) //, { params: { id: ID } }
      .then(({ data }) => {
        console.log(data)
        setPostList(data.contentDtoList)
        setIDList(data.idlist)
        setFileList(data.fileList)
        setDescriptionList(data.descriptionList)
        //setData(data.contentDtoList)
        //console.log(postList)
      })
      .catch(e => {
        console.log(e)

      })

  }, [])




  const formData = new FormData()
  formData.append('id', 0)
  formData.append('link', './logo192.png')
  formData.append('description', '')
  formData.append('contentType', '0')


  const getPostList = (newPostList, list1, list2, list3) => {
    setPostList(newPostList)
    setIDList(list1)
    setFileList(list2)
    setDescriptionList(list3)
  }

  const save = () => {
    axios.defaults.headers.common['Authorization'] =
      window.localStorage.getItem('token')

    var formData = new FormData()


    for (let i = 0; i < fileList.length; i++) {
      formData.append('IDList', IDList[i])
      formData.append('fileList', fileList[i])
      formData.append('descriptionList', descriptionList[i])
    }
    formData.append('ID', ID)
    axios.post('/api/user/make-exhibition-step2/file', formData).then(res => {
      console.log(res)
    })

  }

  const next = () => {
    axios.defaults.headers.common['Authorization'] =
      window.localStorage.getItem('token')

    var formData = new FormData()

    for (let i = 0; i < fileList.length; i++) {
      formData.append('IDList', IDList[i])
      formData.append('fileList', fileList[i])
      formData.append('descriptionList', descriptionList[i])
    }
    formData.append('ID', ID)
    axios.post('/api/user/make-exhibition-step2/file', formData).then(res => {
      console.log(res)
    })

    navigate(`/make-exhibition-bgm`, {
      state: {
        id: ID,
      },
    })
  }

  return (
    <Container className="exhibition_make-container2">
      <Container className="inner">
        <Container id="elem1">
          <Col>
            <ListGroup horizontal>
              <ListGroup.Item>Step1</ListGroup.Item>
              <ListGroup.Item active>Step2</ListGroup.Item>
              <ListGroup.Item>Step3</ListGroup.Item>
              <ListGroup.Item>Step4</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <div className="title">게시물 올리기</div>
          </Col>
          <Col></Col>
        </Container>

        <Container id="elem3">
          <ExhibitionPosting
            postList={postList}
            func={getPostList}
          ></ExhibitionPosting>
        </Container>
        <Container id="elem4">
          <Button style={{ float: 'left' }}>Previous</Button>
          <Button onClick={save} style={{ float: 'right' }}>
            Save
          </Button>
          <Button onClick={next} style={{ float: 'right' }}>
            Next
          </Button>
        </Container>
      </Container>
    </Container>
  )
}

export default ExhibitionMake2stepPage
