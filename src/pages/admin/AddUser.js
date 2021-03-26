import React, { Component } from 'react'
import media from "../query/media"
export default class AddUser extends Component {
    constructor(){
        super()
        this.state ={
            clicked_on_view_password :false,
            error_hai:false,
            password_changing:true
        }
    }
    render() {
        return (
            <div style=
            {{
                margin:"1rem",
                display:'flex',
                flexDirection:"column"

            }}>
                
                <div style={{
                    textAlign:'center',
                    flex:1
                }}>
                    <p>
                        Add User
                    </p>
                    
                </div>
                <div style={{
                    flex:1,
                    // backgroundColor:"red",
                    display:'flex',
                    flexDirection:'column'
                }}>
                    <form autoComplete="off">
                        <div style={styles.inputdiv}>
                            <input placeholder="Name" style={styles.input(this.state.error_hai,media.matches)}/>
                            <p>Error</p>
                        </div>
                        <div style={styles.inputdiv}>
                            <input placeholder="Email"style={styles.input(this.state.error_hai,media.matches)}/>
                            <p>Error</p>
                        </div>
                        <div style={styles.inputdiv}>
                            <input type={this.state.clicked_on_view_password?"text":"password"} 
                                placeholder="Password"
                                style={styles.passwordinput(this.state.error_hai,media.matches)}
                            />
                            <p>Error</p>
                        </div>
                        <div style={styles.inputdiv}>
                            <input placeholder="confirm password"
                                style={styles.passwordinput(this.state.error_hai,media.matches)}
                            />
                            <p>Error</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const styles= {
    inputdiv:{
        flex:1,
        margin:"1rem"
    },
    input(val,q =false){
        return {
            width:`${q?"100%":"80%"}`,
            border:`${val?"2px solid red":"1px solid black"}`,
            marginBottom:"0.5rem"
        }
        

    },
    passwordinput(val,q=false){
        return {
            border:`${val?"2px solid red":"1px solid black"}`,
            width:`${
                q?"80%":"20%"
            }`,
            marginBottom:"0.5rem"
        }
        
    }
}