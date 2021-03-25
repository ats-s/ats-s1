import React, { Component } from 'react'
import { Navbar, Nav, Form } from "react-bootstrap";
import { FaSearch,FaUserCog } from 'react-icons/fa';

export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dash: {
                hovering: false,
                clicked: false
            },
            search: {
                hovering: false,
                clicked: false
            },
            interviews: {
                hovering: false,
                clicked: false
            },
            assessment: {
                hovering: false,
                clicked: false
            },
            reports: {
                hovering: false,
                clicked: false
            },
            searchicon: {
                clicked: true
            }
        }
    }
    render() {
        return (
            <>

                <Navbar expand="lg" className="navigation"
                    style={{
                        backgroundColor: "black",
                        fontFamily: '"Droid Sans",sans-serif',
                        height: 70,
                        fontSize: 15,
                        fontWeight: 'normal',
                    }}
                >

                    <Navbar.Brand href="#home" style={{
                        color: "white",
                        fontSize: "2rem"
                    }}>Alien-aits</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto classic">
                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.dash.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.dash.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    dash: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    dash: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    dash: {
                                        clicked: true
                                    }

                                })}
                            >Dashboard</Nav.Link>

                            


                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.search.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.search.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    search: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    search: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    search: {
                                        clicked: true
                                    }

                                })}
                            >Search Resume</Nav.Link>

                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.interviews.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.interviews.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    interviews: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    interviews: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    interviews: {
                                        clicked: true
                                    }

                                })}
                            >Interviews</Nav.Link>

                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.assessment.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.assessment.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    assessment: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    assessment: {
                                        hovering: false
                                    }

                                })}t
                                onClick={() => this.setState({
                                    assessment: {
                                        clicked: true
                                    }
                                })
                                }
                            >Assessments</Nav.Link>
                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.reports.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.reports.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    reports: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    reports: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    reports: {
                                        clicked: !this.state.reports.clicked
                                    }

                                })}
                            >Reports
                            </Nav.Link>

                        </Nav>


                    </Navbar.Collapse>
                    {
                        this.state.searchicon.clicked ?
                        <div style={{
                            // backgroundColor:"white"
                        }}>
                            <button style={{
                                backgroundColor:"transparent",
                                border:"0px solid black"
                            }}>
                                <FaUserCog style={{
                                    fontSize: "1rem",
                                    color: 'white',
                                    marginRight:"1rem"
                                }}/> 
                            </button>
                        
                            <FaSearch style={{
                                fontSize: "1.5rem",
                                color: 'red'
                            }} onClick={() => {
                                this.setState({
                                    searchicon: {
                                        clicked: !this.state.searchicon.clicked
                                    }
                                })
                            }} />
                        </div>
                            :
                            <>
                                <Form style={{
                                    float: "right",
                            
                                    marginTop:"0.9rem",
                                    
                                    justifyContent: 'space-evenly'
                                }}>
                                    <Form.Group controlId="formBasicEmail">

                                        <Form.Control type="text" placeholder="Search Candiadate" />

                                    </Form.Group>

                                </Form>
                                <button style={
                                    {
                                        fontSize:"1.5rem",
                                        marginLeft:"0.5rem",
                                        backgroundColor:"transparent",
                                        border:"0px",
                                        // textDecorationColor:"white"
                                        color:"white"
                                    }
                                }
                                onClick={()=>{
                                    this.setState({
                                        searchicon:{
                                            clicked:!this.state.searchicon.clicked
                                        }
                                    })
                                }}
                                >
                                    X
                                </button>
                            </>
                    }
                </Navbar>
            </>

        )
    }
}
