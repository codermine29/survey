import React from "react";
import { Container,Row,Col,Nav , Button } from "react-bootstrap";
import  Title  from './title.js';
import Submit from './submit.js';
import ThankYou from "./thankyou.js";
export default class CreateSurvey extends React.Component{

    constructor(props){
        super(props);
        this.state= { active:{name:'Title And Description'} };
        this.someFunct = this.someFunct.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
    }
    buttons = [
        'Title And Description',
        'Submit Screen',
        'Thank You For Your Time',
    ];
    editPreview = 
        {
            'Title And Description': <Title></Title>,
            'Submit Screen':<Submit></Submit>,
            'Thank You For Your Time':<ThankYou></ThankYou>
        }
    

    someFunct(name1) {
        this.setState({ active: {name :name1 } })
    }
    renderButtons(){
       return this.buttons.map( (name, index)=>{
            return <Button variant="outline-dark" active = {this.state.active.name === name ? true:false} onClick={() => this.someFunct(name)} size="lg">{name}</Button>
       })
    }
    render(){
        return(
                <Container variant='light'>
                    <br/>
                    <Row>
                        <Nav variant="tabs">
                          <Col>                          
                            <Nav.Item>
                                <Button variant = "outline-dark" active={true}>Design</Button>
                            </Nav.Item>
                          </Col>
                          <Col>                          
                            <Nav.Item>
                                <Button variant = "outline-dark" active={false}>Preview</Button>
                            </Nav.Item>
                          </Col>
                          <Col>                          
                            <Nav.Item>
                                <Button variant = "outline-dark" active={false}>Share</Button>
                            </Nav.Item>
                          </Col>
                          <Col>                          
                            <Nav.Item>
                                <Button variant = "outline-dark" active={false}>Integrate</Button>
                            </Nav.Item>
                          </Col>
                          <Col>                          
                            <Nav.Item>
                                <Button variant = "outline-dark" active={false}>Responses</Button>
                            </Nav.Item>
                          </Col>
                          <Col>                          
                            <Nav.Item>
                                <Button variant = "outline-dark" active={false}>Analytics</Button>
                            </Nav.Item>
                          </Col>                                                                                                                                                         
                        </Nav>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <div className="d-grid gap-2">
                                {this.renderButtons()}
                            </div>
                        </Col>
                        {this.editPreview[this.state.active.name]}
                    </Row>
                </Container>

        );
    }
}