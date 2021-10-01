import React from 'react';
import {userSession} from '../../auth';
import { Storage } from '@stacks/storage';
import { Container,Table,input } from 'react-bootstrap';

const storage = new Storage({ userSession });
const options = {
    encrypt: true,
};
const decoptions = {
  decrypt: true,
};
export default class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            obj: []
        };
    }

    componentDidMount() {

        storage.getFile('formsList.json', decoptions) 
        .then(fileData => {
            console.log(JSON.parse(fileData));
            this.setState({obj:JSON.parse(fileData)})
            return;
        });
        
    }

    render(){
            return( 
                <Container style={{width:'75vw'}}> 
                    <h1 className="h3 p-5">Forms And Surveys</h1>
        
                    <div className="mb-2">
                        <input type="search" class="form-control" id="searchbox" placeholder="Search for a form ..."></input>
                    </div>
        
                        <Table   hover size="sm">
                        <thead>
                            <tr>
                            <th style={{ width:'30vw'}} className='p-4'>Title</th>
                            <th style={{ width:'10vw'}} className='p-4'>Status</th>
                            {/* <th style={{ width:'10vw'}} className='p-4'>Created</th> */}
                            <th style={{ width:'20vw'}} className='p-4'>Last Modified</th>
                            <th style={{ width:'20vw'}} className='p-4'>Link</th>
                            </tr>
                        </thead>                        
                        <tbody>
                            {this.state.obj.map(item =>
                            <tr>
                                <td> <a href='/details/:id'>{item.title}</a></td>
                                <td> OPEN </td>
                                <td> {item.time}</td>
                                <td> {item.url}</td>
                            </tr>      
                            )}
                        </tbody>
                        </Table>
                </Container>

            );
    }
    
}