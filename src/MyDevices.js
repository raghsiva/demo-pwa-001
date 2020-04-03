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
                </nav><hr />
            <div className = "App" style = {{margin : 30}}>
                <h1 align = "left" style = {{fontWeight : "bold"}}>Here's your device's technical info</h1>
                <hr style = {{height : 5, backgroundColor : "black"}}/> <br />
            <div style = {{marginBottom : 15}}>
                <h4 align = "left" style = {{fontWeight : "bold", margin : 0, padding :0}}> SIM ID</h4>
                <div class = "div1"><h5 algin = "left" style = {{fontWeight : "normal", margin : 0, padding : 0}}>8914800000016996499</h5></div><br />
                <hr />
            </div>
            <div style = {{marginBottom : 15}}>
                <h4 align = "left" style = {{fontWeight : "bold", margin : 0, padding :0}}> IMEI</h4>
                <div class = "div1"><h5 algin = "left" style = {{fontWeight : "normal", margin : 0, padding : 0}}>352833087459695</h5></div><br />
                <hr />
            </div>
            <div style = {{marginBottom : 15}}>
                <h4 align = "left" style = {{fontWeight : "bold", margin : 0, padding :0}}> Device Model</h4>
                <div class = "div1"><h5 algin = "left" style = {{fontWeight : "normal", margin : 0, padding : 0}}>Apple iPhone 7 256GB in silver</h5></div><br />
                <hr />
            </div>
            </div>
            </div>
        );
    }
}

export default MyDevices;