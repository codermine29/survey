import React from 'react'
import { Container,Row,Col,Nav , Button , Form} from "react-bootstrap";
export default class Submit extends React.Component {
    constructor(props){
        super(props);

        this.onSubmitChange = this.onSubmitChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }
    onSubmitChange(event){
        this.props.handleSubmitChange(event.target.value,this.props.formSubmit.description)
    } 
    onDescriptionChange(event){
        this.props.handleSubmitChange(this.props.formSubmit.submit,event.target.value)

    }
    render(){
        return(
            <>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="Text" placeholder="Submit Button Text" onChange={this.onSubmitChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="description Text" onChange={this.onDescriptionChange}/>
                        </Form.Group>

                    </Form>
                </Col>
                <Col>
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
                </Col>
            </>
        );
    }
}