import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const ExhibitionInfo = () => {
    const { key } = useParams();
    const { title, date, keyword } = useLocation().state; //state
    console.log(title + " " + date + " " + keyword)
    return (
        //console.log(parms.key)
        < Container className="landing-container" >

        </Container >

    )
}

export default ExhibitionInfo;
