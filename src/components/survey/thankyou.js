import React from 'react'
import { Container,Row,Col,Nav , Button , Form} from "react-bootstrap";

export default class ThankYou extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>

                <Row>
                    <Col>
                         <h1 variant='outline-danger'> {this.props.formThankyou.thanks}</h1>
                    </Col>
                    <Col>
                        <p>Powered By Survey</p>
                        <img className='me-auto' src="/assets/images/logo.png" width="15%"></img>
                    </Col>
                </Row>
            </>
        );
    }
}