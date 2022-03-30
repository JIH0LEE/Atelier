import React, { useState } from 'react'
import { Container, Figure } from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import HeartImg from "./heart.png"
import EmptyHeartImg from "./heart-2.png"

const ExhibitionInfo = () => {
    const { key } = useParams();
    const { title, date, keyword } = useLocation().state; //state
    //console.log(title + " " + date + " " + keyword)
    const [favorite, setFavorite] = React.useState(false)
    const onHeartClick = () => {
        //if (heart == HeartImg) {
        //    setHeart(EmptyHeartImg)
        //} else {
        //    setHeart(HeartImg)
        //}
        setFavorite(!favorite)
        console.log("clicked")
    }
    return (
        //console.log(parms.key)
        <div>
            < Container className="landing-container" >
                <Figure.Image
                    width={200}
                    height={200}
                    src="https://cataas.com/cat/60b73094e04e18001194a309/says/react"
                />
                <ul style={{ textAlign: "left" }}>
                    <div>{title}</div>
                    <div>{date}</div>
                    <div>#{keyword[0]} #{keyword[1]} #{keyword[2]}</div>
                    <img src={favorite ? HeartImg : EmptyHeartImg} style={{ width: "3vw" }} onClick={onHeartClick}></img>
                </ul>

            </Container >
        </div>

    )
}

export default ExhibitionInfo;
