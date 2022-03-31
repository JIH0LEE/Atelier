import React from 'react'
import { Button, Container, FormControl } from 'react-bootstrap'
import Exhibition from '../../Component/Exhibition'
import NavDropdown from 'react-bootstrap/NavDropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

const CommunityHomePage = () => {
  return (
    <div>
      <Container className="landing-container">
        <div className="community-main">
          <div className="align-text">
            지금 나에게 맞는 전시회를 찾아보세요!
          </div>
          <InputGroup className="align-text">
            <InputGroup.Text>키워드를 입력하세요</InputGroup.Text>
            <FormControl aria-label="first keyword" placeholder="1st keyword" />
            <FormControl
              aria-label="second keyword"
              placeholder="2nd keyword"
            />
            <FormControl aria-label="third keyword" placeholder="3rd keyword" />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
          <div>
            <NavDropdown
              title="Dropdown"
              id="nav-dropdown"
              style={{ float: 'right' }}
            >
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </div>
          <Container>
            <Exhibition
              id={1}
              title={'title1'}
              date={'22.3.30'}
              keyword={['봄', '사과', '글로벌']}
            ></Exhibition>
            <Exhibition
              id={2}
              title={'title1'}
              date={'22.3.30'}
              keyword={['방송', '아시아', '휴대폰']}
            ></Exhibition>
            <Exhibition
              id={3}
              title={'title1'}
              date={'22.3.30'}
              keyword={['펜싱', '마스크', '잔디']}
            ></Exhibition>
          </Container>
          {/* <ul className="align-text">
            <Exhibition
              id={1}
              title={'title1'}
              date={'22.3.30'}
              keyword={['봄', '사과', '글로벌']}
            ></Exhibition>
            <Exhibition
              id={2}
              title={'title1'}
              date={'22.3.30'}
              keyword={['방송', '아시아', '휴대폰']}
            ></Exhibition>
            <Exhibition
              id={3}
              title={'title1'}
              date={'22.3.30'}
              keyword={['펜싱', '마스크', '잔디']}
            ></Exhibition>
          </ul> */}
        </div>
      </Container>
    </div>
  )
}

export default CommunityHomePage
