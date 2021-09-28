import React from 'react'
import { Container, Row, Col, Nav, Button, Form} from "react-bootstrap";

export default class Question extends React.Component{

    constructor(props){
        super(props);
       // this.onThanksChange = this.onThanksChange.bind(this);
    }

//    onThanksChange(event){
//        this.props.handleThankYouChange(event.target.value)
//    }

    render(){
        return(
            <>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="Text" placeholder="Enter Question Name" />
                            <Form.Control size="sm" type="text" placeholder="Option 1"/>
                            <Form.Control size="sm" type="text" placeholder="Option 2"/>
                            <Form.Control size="sm" type="text" placeholder="Option 3"/>
                            <Form.Control size="sm" type="text" placeholder="Option 4"/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Col>
                         <h1 variant='outline-danger'>Sample Question</h1>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Check
                                type="radio"
                                label="first radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="third radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                        </Form>
                    </Col>
                    <Col>
                    </Col>
                </Col>
            </>
        );
    }
}