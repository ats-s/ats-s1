import React, { Component } from 'react'
import { FaSearch } from "react-icons/fa";
import { Form, InputGroup,Table } from "react-bootstrap";
import { AiOutlineUserAdd,AiOutlineUserDelete } from "react-icons/ai";
import data from "./user"
const List=(d)=>{
    return (
            d.map((item)=>{
                return (
                    <tr>
                        <td>
                            {item.id}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.email}
                        </td>
                        <td>
                            {item.password}
                        </td>
                        <td>
                            {/* <button  style={{
                                // color:"black",
                                border:"0px"
                            }}> */}
                                <AiOutlineUserDelete style={{
                                color:"red",
                                fontSize:"2rem"
                            }}/>
                            {/* </button> */}
                            
                        </td>
                    </tr>
                )
            })
    )
}
export default class UserList extends Component {
    render() {
        return (
            <div className="userlistcontainer" style={styles.container}>
                <div style={{
                    flex: 1,
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontWeight:"bold"
                    }}>User List</p>
                    {/* {List(data)} */}
                </div>
                {/* serach bar  haeding and add user space  */}
                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: 'row',
                    alignContent: 'center',
                    height: 60
                }}>

                    {/* serach */}
                    <div style={{
                        flex: 9,
                        textAlign: 'center',

                    }}>


                        <Form style={{
                            height: "100%"
                        }}>
                            <Form.Group controlId="formBasicEmail">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <FaSearch />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="text" placeholder="Search Candiadate" />
                                </InputGroup>

                            </Form.Group>

                        </Form>
                    </div>
                    {/* Add user */}
                    <div style={{
                        flex: 1,
                        textAlign: 'center',

                    }}>
                        <p><AiOutlineUserAdd style={{
                            fontSize: "2rem"
                        }} /></p>
                    </div>
                </div>
                <div>
                    <div>
                        {
                            console.log(data)
                        }
                        <Table responsive striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                    {List(data)}

                                {/* <List/> */}
                                {/* <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>ok</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>ok</td>
                                </tr> */}
                                
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        margin: 10,
    },
    element: {
        flex: 1,
        textAlign: 'center',
        border: "1px solid white",
        borderRightColor: "green",
    }
}