import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Figure, Carousel } from 'react-bootstrap'

const PosterShow = () => {
    const [exhibitions, setExhibitions] = useState(null)

    useEffect(() => {
        axios.get("/api/get-top-exhibition").then(res => {
            setExhibitions(res.data)
            console.log(res.data)
        })
    }, [])

    return (<>
        <Container>
            <Carousel>
                {exhibitions ?
                    exhibitions.map(exhibition => (
                        <Carousel.Item>
                            <Container className="content">
                                <Container><Figure.Image src={exhibition.poster}></Figure.Image></Container>
                            </Container>
                        </Carousel.Item>
                    ))
                    : <></>}

            </Carousel>
        </Container>
    </>)

}
export default PosterShow