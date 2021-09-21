import React from 'react'
import { Container,Row,Col,Nav , Button , Form} from "react-bootstrap";
export default class ThankYou extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:'Thank you for your time!',
            description:''
        }
        this.onTitleChange = this.onTitleChange.bind(this);
    }
    onTitleChange(event){
        this.setState({title:event.target.value});
    }

    render(){
        return(
            <>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="Text" placeholder="Thank You Text" onChange={this.onTitleChange}/>
                        </Form.Group>

                    </Form>
                </Col>
                <Col>
                    <Col>
                         <h1 variant='outline-danger'> {this.state.title}</h1>
                         <img  src="/assets/images/logo.png" width="15%"></img>
                    </Col>
                    <Col>
                        <p>Powered By Survey </p>
                    </Col>
                    <Col>
                    </Col>
                </Col>
            </>
        );
    }
}