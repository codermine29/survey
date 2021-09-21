import React from 'react'
import { Container,Row,Col,Nav , Button , Form} from "react-bootstrap";
export default class Submit extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:'Submit',
            description:''
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }
    onTitleChange(event){
        this.setState({title:event.target.value});
    }
    onDescriptionChange(event){
        this.setState({description:event.target.value});
    }
    render(){
        return(
            <>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="Text" placeholder="Submit Button Text" onChange={this.onTitleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="description Text" onChange={this.onDescriptionChange}/>
                        </Form.Group>

                    </Form>
                </Col>
                <Col>
                    <Col>
                     <Button variant='outline-danger'> {this.state.title} </Button>
                    </Col>
                    <Col>
                        <p>
                            {this.state.description}
                        </p>
                    </Col>
                    <Col>
                    </Col>
                </Col>
            </>
        );
    }
}