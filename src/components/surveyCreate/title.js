import React from 'react'
import { Container,Row,Col,Nav , Button , Form} from "react-bootstrap";
export default class Title extends React.Component {
    constructor(props){
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }
    onTitleChange(event){
        this.props.handleTitleChange(event.target.value,this.props.formTitle.description)
    }
    onDescriptionChange(event){
        this.props.handleTitleChange(this.props.formTitle.title,event.target.value)
    }
    render(){
        return( 
            <>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="Text" placeholder="Enter Title" onChange={this.onTitleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="description" onChange={this.onDescriptionChange}/>
                        </Form.Group>

                    </Form>
                </Col>
                <Col>
                        <h1>
                            {this.props.formTitle.title}
                        </h1>
                        <p>
                            {this.props.formTitle.description}
                        </p>
                        <Button variant='outline-danger'> Start </Button>
                </Col>
            </>
        );
    }
}