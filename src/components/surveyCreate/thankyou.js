import React from 'react'
import { Container,Row,Col,Nav , Button , Form} from "react-bootstrap";
export default class ThankYou extends React.Component {
    constructor(props){
        super(props);
        this.onThanksChange = this.onThanksChange.bind(this);
    }
    onThanksChange(event){
        this.props.handleThankYouChange(event.target.value)
    }

    render(){
        return(
            <>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="Text" placeholder="Thank You Text" onChange={this.onThanksChange}/>
                        </Form.Group>

                    </Form>
                </Col>
                <Col>
                    <Col>
                         <h1 variant='outline-danger'> {this.props.formThankyou.thanks}</h1>
                    </Col>
                    <Col>
                        <p>Powered By Survey</p>
                        <img className='me-auto' src="/assets/images/logo.png" width="15%"></img>
                    </Col>
                    <Col>
                    </Col>
                </Col>
            </>
        );
    }
}