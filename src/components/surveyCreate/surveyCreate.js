import React from "react";
import { Storage } from '@stacks/storage';
import { Container,Row,Col,Nav , Button, Alert, Form } from "react-bootstrap";
import {userSession} from '../../auth';
import  Title  from './title.js';
import Submit from './submit.js';
import ThankYou from "./thankyou.js";
import Question from './question2';
import { v4 as uuidv4 } from 'uuid';



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
                formQuestion:{
                    title:'',
                    option1:'',
                    option2:''
                },               
                link:''
        };
        this.someFunct = this.someFunct.bind(this);
 //       this.addQuestion = this.addQuestion.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
        this.renderTopButtons = this.renderTopButtons.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
  //      this.renderQuestionButtons = this.renderQuestionButtons.bind(this);
        this.handleThankYouChange = this.handleThankYouChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handlEditPreview = this.handlEditPreview.bind(this);
        this.storageSession = this.storageSession.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayLink = this.displayLink.bind(this);

    }
    
    storageSession(){

    }


    buttons = [
        'Title And Description',
        'Submit Screen',
        'Thank You For Your Time',
        'Question'
    ];
    topButtons = [
        'Design',        
    ]


    handlEditPreview(){
            let editPreview = 
                {
                    'Title And Description': <Title formTitle = {this.state.formTitle} handleTitleChange={this.handleTitleChange}></Title>,
                    'Submit Screen':<Submit formSubmit = {this.state.formSubmit} handleSubmitChange={this.handleSubmitChange}></Submit>,
                    'Thank You For Your Time':<ThankYou formThankyou = {this.state.formThankyou} handleThankYouChange={this.handleThankYouChange}></ThankYou>,
                    'Question': <Question formQuestion = {this.state.formQuestion} handleQuestionChange={this.handleQuestionChange}></Question>,

                }
            return editPreview;
        }

        
        handleTitleChange(title1,description1){
    
            this.setState({formTitle:{
                title:title1,
                description:description1
            }});
            
        }
        handleQuestionChange(title1,option11,option22){
    
            this.setState({formQuestion:{
                title:title1,
                option1:option11,
                option2:option22
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
            submit:this.state.formThankyou,
            question:this.state.formQuestion
        }
        // options
        const options = {
            encrypt: false,
          };
          const decoptions = {
            decrypt: false,
          };
        
        // check if forms list is already present
        // let filepresent = false;
        // storage.listFiles((filename) => {
        //     if (filename === 'formsList.json') {
        //         console.log(filename);
        //         filepresent = true;
        //       return false;
        //     } else {
        //         console.log(filename);
        //       return true;
        //     }
        //   });
        
        // // add emty formslist file
        // if(! (filepresent)) {
        //     storage.putFile('formsList.json', JSON.stringify([]), options).then((c) => {
        //     });
        // }


        await storage.getFile('formsList.json', decoptions)   // getting previous data from formslist
        .then(fileData => {
            console.log('data'+fileData);
        })
        .catch( (err)=>{
            console.log('Creating file');
            storage.putFile('formsList.json', JSON.stringify([]), options).then((c) => {console.log('Formslist file added')});
        }).catch(err=>{
            console.log('the un handled error');
        });


        let url ;
        let filename = uuidv4() + '.json';
        storage.putFile(filename, JSON.stringify(form), options) // adding form data in a file
        .then((c) => {
            // console.log(c);
            url = c;
            storage.getFile('formsList.json', decoptions)   // getting previous data from formslist
            .then(fileData => {


                let formlistdata = {
                    title:this.state.formTitle,
                    url:c,
                    fileName:filename
                }                
                console.log('before' + JSON.stringify(fileData));
                let obj = JSON.parse(fileData);
                obj.push(formlistdata);
                console.log('obj' + JSON.stringify(obj));
                
                storage.putFile('formsList.json', JSON.stringify(obj), options) // adding data to formslist
                .then((c) => { 
                    storage.getFile('formsList.json', decoptions) // checking if data is added?
                    .then(fileData => {
                        console.log('after' +  JSON.stringify(fileData));
                        return;
                    });
                });  
            });
            
            let url2 = 'http://localhost:3000/survey/'+url.slice(32);
            this.setState({link:url2});
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
/*    addQuestion(){
        let q = {
            question: '',
            options: ['',''],
        }
        let qs = this.state.formQuestions.concat(q);
        this.setState({formQuestions:qs})
    }
    renderQuestionButtons(){
        console.log(this.state.formQuestions.length)
            return this.state.formQuestions.map((obj,index)=>{
              return(  
                    <Question handleQuestionChange={this.handleQuestionChange} question = {obj} index = {index}> </Question>
              )
            
        })
    }
   handleQuestionChange(qestionObj, index){

        let q = {
            question: qestionObj.question,
            options: [qestionObj.option1,qestionObj.option2]
        }
        console.log(q);
        let ref = JSON.parse(JSON.stringify(this.state.formQuestions));
        ref.index=q;
        this.setState({formQuestions:ref})
        console.log(this.state.formQuestions);

    } 
*/
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
{                        <br/>
 /*                       <hr/>
                        <br/>
                        <Row>
                           <Col variant='warning'>  
                                            <h4>No Of Questions?</h4>
                                            <i style={{cursor:'pointer'}} onClick={this.addQuestion} class="fas fa-plus-square"></i>
                                                <h3>{this.state.formQuestions.length}</h3>
                                            <i style={{cursor:'pointer'}} class="fas fa-minus-square"></i>
                                    </Col>
                            <Col>    
                                {this.renderQuestionButtons()}
                            </Col>
                        </Row>
                    
                */}
                </Container>


        );
    }
}