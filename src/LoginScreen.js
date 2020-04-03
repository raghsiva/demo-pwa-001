import React from 'react';
import './App.css';
import './Button.css';

class LoginScreen extends React.Component{
    constructor () {
        super ();
        this.state = {
            mofuleLinks : []
        }
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
                            <input type = "text" name = "username" style = {{width : "100%", height : "40px", "borderRadius" : "15px"}}/><br /> <br /> <br /> <br />
                            <div class = "div1">
                                <label> Password</label>
                            </div>
                            <input type = "password" name = "username" style = {{width : "100%", height : "40px", "borderRadius" : "15px"}}/><br /> <br /> <br /> <br />
                            
                        </form>
                    </div>    
                    <button align = "center" class = "button">Sign In</button>
                </div>
            </div>
        )
    }
}

export default LoginScreen;