import React from 'react'
import './App.css'
import './Button.css'

class MyDevices extends React.Component{
    constructor (){
        super();
    }
    render () {
        return (
            <div className = "App">
                <nav class = "navbar navbar-default" style = {{height : 30, fontWeight : "bold"}}>
                    <h4 style = {{fontWeight : "bold"}}>Device Details</h4>
                </nav>
            <div className = "App" style = {{margin : 30}}>
                <h1 align = "left" style = {{fontWeight : "bold"}}>Here's your device's technical info</h1>
                <hr style = {{height : 5, backgroundColor : "black"}}/> <br />
            </div>
            <div style = {{marginBottom : 15}}>
                <h4 align = "left" style = {{fontWeight : "bold"}}> SIM ID</h4>
                <h5 algin = "left" style = {{fontWeight : "normal"}}>8914800000016996499</h5>
                <hr />
            </div>
            </div>
        );
    }
}

export default MyDevices;