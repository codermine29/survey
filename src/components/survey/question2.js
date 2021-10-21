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
                </Row>
            </>
        );
    }
}