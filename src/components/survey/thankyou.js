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
                         <h1 variant='outline-danger'> {this.props.formThankyou.thanks}</h1>
                        <p>Powered By Survey   <img  style={{width:'3vw',block:'inline'}}  src="/assets/images/logo.png" width="15%"></img></p>
                       
                </Row>
            </>
        );
    }
}