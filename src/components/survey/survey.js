import React from 'react'
import { useParams } from "react-router-dom";
import { Storage } from '@stacks/storage';
import  Title  from './title';
import Question from './question2';
import ThankYou from './thankyou';
import Submit from './submit';
import { Container } from 'react-bootstrap';
export default function Survey(){
    let { id,id2 } = useParams()

    return(<>
        <Survey2 id ={id} id2={id2}></Survey2>
    </>
    )

}
//async function file(id,id2){

  //  let file = await fetch('https://gaia.blockstack.org/hub/'+id+'/'+id2)
    //.then(response => response.json())
   // .then(data => console.log(data));
   // return file;
//}

class Survey2 extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            file:{ 
            "title":{"title":"","description":""},
            "thannkyou":{"thanks":""},
            "submit":{"thanks":""},
            "question":{"question":"","option1":"","option2":""}
            }
        }
       this.file = this.file.bind(this); 
       this.file(this.props.id,this.props.id2);
    }
    async file(id,id2){
        let file = fetch('https://gaia.blockstack.org/hub/'+id+'/'+id2)
        .then(response => response.json())
        .then(data =>{
            this.setState({file:data}) 
            console.log(data)
        });
        
    }
    render(){
        return(
            <Container style={{width:'75vw'}} className="justify-content-center">
                <Title className="h3 p-5 justify-content-center" formTitle ={this.state.file['title']}></Title>
                <br/>
                <Question  className="h3 p-5 justify-content-center" formQuestion={this.state.file['question']}></Question>
                <br/>
                <ThankYou className="h3 p-5 justify-content-center" formThankyou = {this.state.file.thannkyou}></ThankYou>
                <br/>
                <Submit className="h3 p-5 justify-content-center" formSubmit={this.state.file.submit}></Submit>
            </Container>
        )
    }
}