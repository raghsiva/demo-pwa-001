import React from 'react';
import './App.css';
import './Button.css';
import Geocode from "react-geocode";
import axios from 'axios'

import MapGL, {GeolocateControl } from 'react-map-gl'
class Location extends React.Component{
    constructor (){
        super();
        this.state = {
            latitude : '',
            longitude : '',
            location : ''
        }
    }
    geolocateStyle = {
        float: 'left',
        margin: '50px',
        padding: '10px'
      }
    getMyLocation = () => {
        const location = window.navigator && window.navigator.geolocation
        var lat  = ''
        var lon = ''
        if (location) {
          location.getCurrentPosition((position) => {  
            console.log(lat)
            this.setState({
                latitude : position.coords.latitude,
                longitude : position.coords.longitude
            })
            var lat = position.coords.latitude
            var lon = position.coords.longitude
            console.log("https://api.opencagedata.com/geocode/v1/json?q="+ lat + "+" + lon  + "&key=a112aca1e309483293e13e2d13ed6046")
            axios.get("https://api.opencagedata.com/geocode/v1/json?q="+ lat + "+" + lon  + "&key=a112aca1e309483293e13e2d13ed6046")
            .then(res => {
                const persons = res.data;
                this.setState({
                    location : persons.results[0].formatted
                })
      })      
          }, (error) => {
            this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
          })
        }
        console.log(lat + lon)
        
    
      }
    openMaps = () => {
        window.open("https://google.com/maps/@" + this.state.latitude + "," + this.state.longitude)
    }  
    render(){
        return(
            <div height = "100%">
                <nav class = "navbar navbar-default" style = {{height : 30, fontWeight : "bold"}}>
                    <h4 style = {{fontWeight : "bold"}}>Store Locator</h4>
                </nav><hr />
                <div class = "App">
                    {this.state.location?<h1>Your nearest store location is : <br/></h1>:<div></div>}
                   <p style = {{fontWeight : "bold"}}>{this.state.location}</p>
                </div>
                <br /> <br /> <br /> <br /> 
                <button class = "button" align = "center" style = {{postion: "absolute", bottom : "5%", right : "25%", left : "27%", marginTop : "250px" }}onClick = {this.getMyLocation}> Locate </button>
            </div>
        );
    }
}

export default Location