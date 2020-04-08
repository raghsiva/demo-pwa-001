import React from 'react';
import './App.css';
import './Button.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom'
class LoginScreen extends React.Component{
    constructor () {
        super ();
        this.state = {
            mofuleLinks : [],
            username : "",
            password : ""
        }
    }

    check = () =>{
            if(this.state.username === "verizon" && this.state.password === "verizon"){
                window.localStorage.setItem('rememberMe', "yes")
                window.open("/selectScreen", "_self")
            }
            else {
                alert('Invalid Credentials')
            }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div className = "App">
                <div className = "App" style = {{margin : 30}}>
                    <div>
                        <h1 align = "left" style = {{fontWeight : "bold", fontSize :40}}>A better app for a better network</h1>
                        <hr style = {{height : 5, backgroundColor : "black"}} /> <br />
                    </div>
                    <div><br /> <br />
                        <form class = "form">
                            <div class = "div1">
                                <label> Username or mobile number</label>
                            </div>
                            <input type = "text" name = "username" onChange = {this.handleChange} style = {{width : "100%", height : "40px", "borderRadius" : "15px"}}/><br /> <br /> <br /> <br />
                            <div class = "div1">
                                <label> Password</label>
                            </div>
                            <input type = "password" name = "password" onChange = {this.handleChange} style = {{width : "100%", height : "40px", "borderRadius" : "15px"}}/><br /> <br /> <br /> <br />
                            
                        </form>
                    </div>    
                    <button align = "center" onClick = {this.check} class = "button">Sign In</button>
                </div>
            </div>
        )
    }
}

export default LoginScreen;