import React, { Component } from 'react'
// import Navigation from "../components/Navigation";
import { Card, Button } from "react-bootstrap";
// import "./test.css"
import { FaAngleRight,FaUserFriends,FaRegEnvelope,FaUserCheck,FaRegCalendarAlt } from 'react-icons/fa';
import {GrDocumentUser} from 'react-icons/gr'
import media from "./query/media"
// const media  =window.matchMedia('(max-width:500px)')// key to make it respoonsive
export default class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            recentjobs:{
                jobspublished:1,
                
            },
            interviews:{
                no_of_interviews_today:0
            }
            
        }
    }
    render() {
        console.log(media.matches)
        return (
            <div className ="maincontainer">
                {/* <Navigation /> */}
                <div className = "cardcontainer" style={{
                    display: 'flex',
                    flexDirection: `${media.matches?"column": "row"}`,
                    marginLeft: "1.2rem",
                    height: "100%",
                    marginRight:"1.2rem"
                    // width: "100%",
                    // "@media (":

                }}>
                    <div className  = "leftcardcontainer" style={{
                        width: "100%"
                    }}>
                        <Card style={{
                            // width: "75%",
                            marginTop: 30,
                        }}>
                            <Card.Body>
                                <div>
                                    <Card.Title>
                                        <p style={{
                                            color: "red",
                                            display: 'inline-block',

                                        }}>
                                            Good Evening, Shankar!
                                        </p>
                                        <Button variant="primary" style={styles.postjobbutton()}>
                                            Post Job
                                        </Button>
                                    </Card.Title>
                                </div>


                                <div  style={
                                    styles.statscard()
                                }>
                                    <div style={
                                        styles.statsinfo()
                                    
                                    }>
                                        <p style={{ color: "red", fontSize: 30 }}>
                                            1
                                    </p>
                                        <p>Active jobs</p>
                                        <div style={{
                                            marginTop:"2.5rem"
                                        }}>
                                            <FaUserFriends style={styles.iconstyle}/>
                                        </div>
                                        
                                        
                                    </div>
                                    <div style={
                                        styles.statsinfo()
                                    }>
                                        <p style={{ color: "red", fontSize: 30 }}>
                                            0
                                    </p>
                                        <p>New Applications</p>
                                        <div style={{
                                            marginTop:"2.5rem"
                                        }}>
                                        <FaRegEnvelope style={styles.iconstyle}/>
                                        </div>
                                    </div>
                                        
                                    <div style={styles.statsinfo()}>
                                        <p style={{ color: "red", fontSize: 30 }}>
                                            0
                                    </p>
                                        <p>Candidates to be reviewed</p>
                                        <GrDocumentUser style={styles.iconstyle}/>
                                    </div>
                                    <div style={styles.statsinfo()}>
                                        <p style={{ color: "red", fontSize: 30 }}>
                                            1
                                    </p>
                                        <p>Shortlisted candidates to be interviewed</p>
                                        <FaUserCheck style={styles.iconstyle}/>
                                    </div>
                                    <div style={styles.statsinfo()}>
                                        <p style={{ color: "red", fontSize: 30 }}>
                                            0
                                    </p>
                                        <p>Interviews scheduled for today</p>
                                        <FaRegCalendarAlt style={styles.iconstyle}/>
                                    </div>

                                </div>

                            </Card.Body>
                        </Card>
                        {/* </div> */}
                    

                        <div className ="downcardcontainer" style={styles.downcardsection()}>
                            {/* //TODO:linne 129 */}
                            <div style={styles.overview()}>
                                <p style={{
                                    marginTop:"2.5rem",
                                    // display: 'inline-block',
                                    fontWeight:"bold",
                                    color:"black"
                                }}> Overview of Active Jobs</p>
                                <Card style={{
                                    // width: "60%",
                                    // marginTop: 5,
                                }}>
                                    <Card.Body>
                                        <div>
                                            <Card.Title>
                                                <p style={{
                                                    color: "red",
                                                    display: 'inline-block'
                                                }}>Its your overview section</p>
                                                 
                                            </Card.Title>
                                        </div>


                                        <Card.Text>
                                                <p>
                                                Its your overview section
                                                </p>
                                                <p>
                                                Its your overview section
                                                </p>
                                                <p>
                                                Its your overview section
                                                </p>
                                                <p>
                                                Its your overview section
                                                </p>
                                                <p>
                                                Its your overview section
                                                </p>
                                                <p>
                                                Its your overview section
                                                </p>
                                                
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                                <p  style={{
                                    marginTop:"2.5rem",
                                    // display: 'inline-block',
                                    fontWeight:"bold",
                                    color:"black"
                                }}>
                                    Recent jobs
                                </p>
                                <Card>
                                    <Card.Title>
                                        <div style={{
                                            // backgroundColor:'black'
                                            border:"1px solid",
                                            width:"95%",
                                            marginLeft:"0.6rem",
                                            marginTop:"0.6rem",
                                            height:"1.8rem",
                                            borderBottomColor:"black",
                                            justifyContent:'center',
                                            borderTopColor:"white",
                                            borderLeftColor:"white",
                                            borderRightColor:"white",
                                        }}>
                                            <p style={{
                                                fontWeight:"bold",
                                                color:"#2a3252",
                                                fontSize:'1rem',
                                                display:"inline-block",
                                                // marginTop:"0.5rem"
                                            }}>Jobs Published({this.state.recentjobs.jobspublished})</p>
                                            <a href="https://www.w3schools.com/tags/tag_a.asp">
                                                <div style={{
                                                    display:"inline-block", 
                                                    float:"right",
                                                    // border:`${this.state.recentjobs.seeall.hovering?"1px solid":"0px"}`
                                                }}>
                                                    <p style={{
                                                    color:"red",
                                                    fontSize:'1rem'
                                                    }}
                                                    
                                                    >
                                                        see all <FaAngleRight/>
                                                    </p>
                                                </div>
                                                
                                                
                                            </a>
                                        </div>
                                        
                                    </Card.Title>

                                </Card>
                                <p style={{
                                    marginTop:"2.5rem",
                                    // display: 'inline-block',
                                    fontWeight:"bold",
                                    color:"black"
                                }}>
                                    
                                    Hirinig for other roles
                                </p>
                                <Card>
                                    <a>
                                        <p>
                                            a tag
                                        </p>
                                    </a>
                                    <a>
                                        <p>
                                            a tag
                                        </p>
                                    </a>
                                    <a>
                                        <p>
                                            a tag
                                        </p>
                                    </a>
                                    <a>
                                        <p>
                                            a tag 🔥
                                        </p>
                                    </a>
                                    <a>
                                        <p>
                                            a tag
                                        </p>
                                    </a>

                                </Card>
                            </div>
                            <div style={{
                                marginLeft: "1.2rem",
                                width:`${media.matches?"100%":"40%"}`,
                                fontWeight:"bold",
                                color:"black"
                            }}>
                                <p style={{
                                    marginTop:"2.5rem",
                                    display: 'inline-block',
                                    
                                }}> Upcoming Interviews</p>
                                <Card
                                    style={{
                                        
                                        
                                    }}
                                >
                                    <div style={{
                                        fontWeight:"normal",
                                        marginTop:"1.7rem",
                                        marginLeft:"1rem",
                                        fontSize:"1.2rem"
                                    }}>
                                    <Card.Title style={{
                                        fontWeight:"bold",
                                    }}>
                                        {this.state.interviews.no_of_interviews_today} interviews scheduled
                                    </Card.Title>
                                    <Card.Text>
                                        <div>
                                            <p>
                                                some haeding just to fill space
                                            </p>
                                        </div>
                                    </Card.Text>
                                    
                                
                                    </div>
                                </Card>
                                <p style={{
                                    marginTop:"2.5rem",
                                    display: 'inline-block',
                                    
                                }}>Explore</p>
                                <Card>
                                    <Card.Title>
                                        explore ecplore   
                                    </Card.Title>
                                </Card>
                            </div>

                        </div>
                                   
                    </div>
                    
                    
                    
                </div>
             </div>            

        )
    }
}


const styles = {
    statscard(){
        if (media.matches ){
            return {
                display:"block",
                marginLeft: "1rem",
                // marginLeft: "1rem",
                // flexDirection: "column",


            }
        }else{
            return {
                                    
                    marginLeft: "1rem",
                    flexDirection: "row",
                    display: 'flex',
                }
        }
    },
    statsinfo(){
        if (media.matches){
            return{
                width:"50%",
                border: "1px solid white",
                borderRightColor: "black",
                borderBottomColor:"black",
                display:"inline-block",
                textAlign: 'center',
                alignItems: "center"
            }
        }else{
            return{
                flex:1,
                border: "1px solid white",
                borderRightColor: "black",
                // borderBottomColor:"black",
                textAlign: 'center',
                alignItems: "center"
            }
        }
    },
    postjobbutton(){
        if (media.matches){
            return{
            backgroundColor: "red",
            float: "left"
            }
        }else{
            return{
                backgroundColor: "red",
                float: "right"
                }
        }
    },
    overview(){
        if (media.matches){
            return{
            display:"block",
            width:"100%"
            }
        }else{
            return{
                width:"60%"
                }
        }
    },
    downcardsection(){
        if (media.matches){
            return{
            display:"block"
            }
        }else{
            return{
                display:"flex",
                flexDirection:"row"
                }
        }
    },
    iconstyle:{
        fontSize:"2rem",
        
    }
}