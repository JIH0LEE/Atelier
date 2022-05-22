import React from 'react'
import { Button, Figure } from 'react-bootstrap'


const ExhibitionPost = ({ picture, discription, open, close }) => {
    return (<>
        <div className={open ? 'openModal modal' : 'modal'}>
            {
                open ? (
                    <section>
                        <header><Button onClick={close}>&times;</Button></header>
                        <main>
                            <Figure.Image src={picture} />
                            <div>{discription}</div>
                        </main>
                        <footer><Button onClick={close}></Button></footer>
                    </section>
                ) : null
            }
        </div>
    </>)
}

export default ExhibitionPost