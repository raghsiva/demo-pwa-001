import React from 'react';
import './App.css';
import './Button.css';
import Geocode from "react-geocode";
import axios from 'axios'
class Location extends React.Component{
    constructor (){
        super();
        this.state = {
            latitude : '',
            longitude : '',
            location : ''
        }
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

      
    render(){
        return(
            <div>
                <button onClick = {this.getMyLocation}> Click </button>
                <div>
                    {this.state.latitude}<br/>
                    {this.state.longitude} <br />
                    {this.state.location}
                </div>
            </div>
        );
    }
}

export default Location