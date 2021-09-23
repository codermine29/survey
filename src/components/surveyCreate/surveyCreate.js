import React from "react";
import { Storage } from '@stacks/storage';
import { Container,Row,Col,Nav , Button, Alert } from "react-bootstrap";
import { Redirect } from 'react-router-dom';

import {userSession} from '../../auth';
import  Title  from './title.js';
import Submit from './submit.js';
import ThankYou from "./thankyou.js";


const storage = new Storage({ userSession });

export default class CreateSurvey extends React.Component{

    constructor(props){
        super(props);
        this.state= { 
            active: {name:'Title And Description'},
                formTitle:{
                    title:'',
                    description:''
                },
                formSubmit:{
                    submit:'Submit',
                    description:''
                },
                formThankyou:{
                    thanks:'Thank you for your time!'
                },
                link:''
        };
        this.someFunct = this.someFunct.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
        this.renderTopButtons = this.renderTopButtons.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleThankYouChange = this.handleThankYouChange.bind(this);
        this.handlEditPreview = this.handlEditPreview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.storageSession = this.storageSession.bind(this);
        this.displayLink = this.displayLink.bind(this);
    }
    
    storageSession(){

    }


    buttons = [
        'Title And Description',
        'Submit Screen',
        'Thank You For Your Time',
    ];
    topButtons = [
        'Design',        
    ]


    handlEditPreview(){
            let editPreview = 
                {
                    'Title And Description': <Title formTitle = {this.state.formTitle} handleTitleChange={this.handleTitleChange}></Title>,
                    'Submit Screen':<Submit formSubmit = {this.state.formSubmit} handleSubmitChange={this.handleSubmitChange}></Submit>,
                    'Thank You For Your Time':<ThankYou formThankyou = {this.state.formThankyou} handleThankYouChange={this.handleThankYouChange}></ThankYou>
                }
            return editPreview;
        }

        
        handleTitleChange(title1,description1){
    
            this.setState({formTitle:{
                title:title1,
                description:description1
            }});
            
        }

        handleSubmitChange(submit1,description1){
    
            this.setState({formSubmit:{
                submit:submit1,
                description:description1
            }});
            
        }

        handleThankYouChange(thanks1){
            this.setState({formThankyou:{
                thanks:thanks1
            }});
            
        }

        someFunct(name1) {
            this.setState({ active: {name :name1 } })
        }

        renderButtons(){
            return this.buttons.map( (name, index)=>{
                return <Button variant="outline-dark" active = {this.state.active.name === name ? true:false} onClick={() => this.someFunct(name)} size="lg">{name}</Button>
            })
        }
 
        
    renderTopButtons(){
        return this.topButtons.map((name,index)=>{
            return(
                <Col>                          
                <Nav.Item>
                    <Button variant = "outline-dark" active={true}>{name}</Button>
                </Nav.Item>
              </Col>
            )
        })

    }

    async handleSubmit(){
        console.log('time to submit');
        let form = {
            title:this.state.formTitle,
            thannkyou:this.state.formThankyou,
            submit:this.state.formThankyou
        }
        const options = {
            encrypt: false,
          };
        let url ;
        let fileUrl = storage.putFile('forms.json', JSON.stringify(form), options).then((c) => {
            console.log(c);
            url = c;
            this.setState({link:c});
        });
        

    }
    displayLink(){
        return(
                <Row> 
                    <Alert variant='warning'>
                            {this.state.link}
                    </Alert>
                </Row>
        )
    }
    render(){
        return(
                <Container variant='light'>
                    <br/>
                    {this.state.link != '' ? this.displayLink() : ' '}
                    <Row>
                        
                        <Nav variant="tabs">
                            {this.renderTopButtons()}
                            <Col>                          
                                <Nav.Item>
                                    <Button variant = "outline-warning" onClick={this.handleSubmit} active={false}>Submit</Button>
                                </Nav.Item>
                            </Col>
                        </Nav>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <div className="d-grid gap-2">
                                {this.renderButtons()}
                            </div>
                        </Col>
                        {this.handlEditPreview()[this.state.active.name]}
                    </Row>
                </Container>

        );
    }
}