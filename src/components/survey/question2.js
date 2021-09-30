import React from 'react'
import { Container,Row,Col,Nav , Button , Form} from "react-bootstrap";
export default class Question extends React.Component {
    constructor(props){
        super(props);


    }

    render(){
        return( 
            <>

                <Row>
                        <h1>
                            {this.props.formQuestion.title}
                        </h1>
                        <p>
                            {this.props.formQuestion.option1}
                        </p>
                        <p>{this.props.formQuestion.option2}</p>
                </Row>
            </>
        );
    }
}