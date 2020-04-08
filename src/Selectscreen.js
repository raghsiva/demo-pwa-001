import React from 'react'
import './App.css';
import './Button.css';

class Selectscreen extends React.Component {
    constructor () {
        super ();
    }

    openCamera = () =>{
        window.open("/cameraview", "_self")
    }

    openDeviceDetails = () => {
        window.open("/myDevices", "_self")
    }

    Location = () =>  {
        window.open("/location", "_self")
    }

    signOut = () => {
        localStorage.setItem("rememberMe", "no")
        window.open("/", "_self")
    }

    render () {
        return (
            <div className = "App">
                <nav class = "navbar navbar-default" style = {{height : 30, fontWeight : "bold"}}>
                    <h4 style = {{fontWeight : "bold"}}>Select Option</h4>
                </nav><hr />
            <div className = "App" style = {{margin : 30}}>
            <div style = {{marginBottom : 15}} onClick = {this.openDeviceDetails}>
                <h4 align = "left" style = {{fontWeight : "bold", margin : 0, padding :0}}> Device Details</h4>
                <hr />
            </div>
            <div style = {{marginBottom : 15}} onClick = {this.openCamera}>
                <h4 align = "left" style = {{fontWeight : "bold", margin : 0, padding :0}}> Camera</h4>
                <hr />
            </div>
            <div style = {{marginBottom : 15}} onClick = {this.Location}>
                <h4 align = "left" style = {{fontWeight : "bold", margin : 0, padding :0}}> Location</h4>
                <hr />
            </div>
            <div style = {{marginBottom : 15}} onClick = {this.signOut}>
                <h4 align = "left" style = {{fontWeight : "bold", margin : 0, padding :0}}> Sign Out</h4>
                <hr />
            </div>
            </div>
            </div>
        );
    }
}

export default Selectscreen;