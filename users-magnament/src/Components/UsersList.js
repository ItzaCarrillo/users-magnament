import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';  
import axios from 'axios';
import { useState, useEffect } from 'react' 

function UsersList(props){
    const [data, setData] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const resp = await axios('https://reqres.in/api/unknown')
            setData(resp,data);
        };

        GetData();
    },[]);
        const DeletUser = (id) => {
            debugger;
            axios.delete('https://reqres.in/api/users/id' + {id})
            .then((resp) => {
                props.history.push('/UsersList')
            });
        }
        const EditUsers = (id) => {  
                props.history.push({  
                  pathname: '/edit/' + id  
                });  
              };  

              return (  
                <div className="animated fadeIn">  
                    <Row>  
                        <Col>  
                            <Card>  
                                <CardHeader>  
                                     <i className="fa fa-align-justify"></i> Users List  
                                </CardHeader>  
                                <CardBody>  
                                    <Table hover bordered striped responsive size="sm">  
                                        <thead>  
                                            <tr>  
                                                <th>id</th>
                                                <th>email</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                            </tr>  
                                        </thead>   
                                            {
                                                data.map((item, id) => {
                                                    return 
                                                    <tr>
                                                        <td>{item.id}</td>  
                                                        <td>{item.email}</td> 
                                                        <td>{item.firstName}</td> 
                                                        <td>{item.lastName}</td> 
                                                        <td>  
                                                            <div class="btn-group">  
                                                                <button className="btn btn-warning" onClick={() => { EditUsers(item.Id) }}>Edit</button>  
                                                                <button className="btn btn-warning" onClick={() => { DeletUser(item.Id) }}>Delete</button>  
                                                            </div>  
                                                        </td>  
                                                    </tr> 
                                                })}    
                                    </Table>  
                                </CardBody>                
                            </Card> 
                        </Col>                      
                    </Row>  
                </div>  
            )  
        
        }  
export default UsersList

