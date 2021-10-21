import React from 'react'
import { Container,Row,Col,Nav , Button , Form} from "react-bootstrap";
export default class Question extends React.Component {
    constructor(props){
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onOption1Change = this.onOption1Change.bind(this);
        this.onOption2Change = this.onOption2Change.bind(this);

    }
    onTitleChange(event){
        this.props.handleQuestionChange(event.target.value,this.props.formQuestion.option1,this.props.formQuestion.option2)
    }
    onOption1Change(event){
        this.props.handleQuestionChange(this.props.formQuestion.question,event.target.value,this.props.formQuestion.option2)
    }
    onOption2Change(event){
        this.props.handleQuestionChange(this.props.formQuestion.question,this.props.formQuestion.option1,event.target.value)
    }
    render(){
        return( 
            <>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="Text" placeholder="Enter question" onChange={this.onTitleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="option" onChange={this.onOption1Change}/>
                            <Form.Control type="text" placeholder="option" onChange={this.onOption2Change}/>                            
                        </Form.Group>

                    </Form>
                </Col>
                <Col>
                        <h1>
                            {this.props.formQuestion.question}
                        </h1>
                            <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {this.props.formQuestion.option1}
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2"> {this.props.formQuestion.option2} </label>
                    </div>
                </Col>
            </>
        );
    }
}