import React from 'react'
import { Container, Row, Col, Nav, Button, Form} from "react-bootstrap";

export default class Question extends React.Component{

    constructor(props){
        super(props);
        this.state={
            question:this.props.question.question,
            options:this.props.question.options
        }
        console.log(this.state);
       // this.onThanksChange = this.onThanksChange.bind(this);
     //  this.renderOptions = this.renderOptions.bind(this);
       this.onQuestionChange = this.onQuestionChange.bind(this);
       this.onOption1Change = this.onOption1Change.bind(this);
       this.onOption2Change = this.onOption2Change.bind(this);
    }

//    onThanksChange(event){
//        this.props.handleThankYouChange(event.target.value)
//    }

    onQuestionChange(event){
        let q= {
            question:event.target.value,
            option1:this.state.options[0],
            option2:this.state.options[1]
        }
        this.props.handleQuestionChange(q,this.props.index)
    }
    onOption1Change(event){
        let q = {
            question:this.state.question,
            option1:event.target.value,
            option2:this.state.options[1]
        }
        this.props.handleQuestionChange(q,this.props.index)
    }
    onOption2Change(event){
        let q = {
            question:this.state.question,
            option1:this.state.options[1],
            option2:event.target.value,
        }
        this.props.handleQuestionChange(q,this.props.index)
    }
    render(){
        return(
            <>
                <Col>
                    <Form.Row>
                        <Form.Group as={Col} sm={12} className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="Text" placeholder="Enter Question" value={this.state.question} onChange={this.onQuestionChange}/>
                            <Form.Control onChange= {this.onOption1Change} size="sm" type="text" value={this.state.options[0]} />
                            <Form.Control onChange={this.onOption2Change} size="sm" type="text" value={this.state.options[1]} />
                        </Form.Group>
                    </Form.Row>
                </Col>
            </>
        );
    }
}