import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Figure, Carousel } from 'react-bootstrap'

const PosterShow = () => {
    const navigate = useNavigate()
    const [exhibitions, setExhibitions] = useState(null)
    //const navigate = useNavigate()
    useEffect(() => {
        axios.get("/api/get-top-exhibition").then(res => {
            setExhibitions(res.data)
            console.log(res.data)
        })

    }, [])

    const ToExhibitionPage = (parms, username) => {
        console.log(parms)

        //const navigate = useNavigate()
        navigate(`/exhibition/${parms.id}`, {
            state: {
                id: parms.id,
                title: parms.title,
                date: parms.endDate,
                keyword: [parms.tag1, parms.tag2, parms.tag3],
                poaster: parms.poster,
                description: parms.description,
                like: parms.like_count,
                author: username,//parms.author,
            },
        })

    }

    return (<>
        <Container>
            <Carousel>
                {exhibitions ?
                    exhibitions.map(exhibition => (
                        <Carousel.Item onClick={() => ToExhibitionPage(exhibition.onlineExhibition, exhibition.username)}>
                            <Container className="content">
                                <Container><Figure.Image src={exhibition.onlineExhibition.poster}></Figure.Image></Container>
                            </Container>
                        </Carousel.Item>
                    ))
                    : <></>}

            </Carousel>
        </Container>
    </>)

}
export default PosterShow