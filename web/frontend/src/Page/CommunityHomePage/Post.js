import React from 'react'
import { Container } from 'react-bootstrap'
import Exhibition from '../../Component/Exhibition'

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>...loading</h2>
  }
  return (
    <Container>
      {posts.map(exhibition => (
        <Exhibition
          id={exhibition.id}
          title={exhibition.title}
          date={exhibition.startDate}
          keyword={[exhibition.tag1, exhibition.tag2, exhibition.tag3]}
          poaster={exhibition.poster}
        ></Exhibition>
      ))}
    </Container>
  )
}

export default Post
