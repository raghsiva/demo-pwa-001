import React from 'react';
import './App.css';
import './Button.css';

class Location extends React.Component{
    constructor (){
        super();
        this.state = {
            latitude : '',
            longitude : ''
        }
    }

    getMyLocation = () => {
        const location = window.navigator && window.navigator.geolocation
        
        if (location) {
          location.getCurrentPosition((position) => {
            this.setState({
                latitude : position.coords.latitude,
                longitude : position.coords.longitude
            })
          }, (error) => {
            this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
          })
        }
    
      }

      
    render(){
        return(
            <div>
                <button onClick = {this.getMyLocation}> Click </button>
                <div>
                    {this.state.latitude}<br/>
                    {this.state.longitude}
                </div>
            </div>
        );
    }
}

export default Location