import React from 'react'
import { Container,Row,Col,Nav , Button , Form} from "react-bootstrap";
export default class Submit extends React.Component {
    constructor(props){
        super(props);


    }

    render(){
        return(
            <Row>
                    <Col>
                     <Button variant='outline-danger'> {this.props.formSubmit.submit} </Button>
                    </Col>
                    <Col>
                        <p>
                            {this.props.formSubmit.description}
                        </p>
                    </Col>
                    <Col>
                    </Col>
            </Row>
        );
    }
}