import React from 'react'
import {Camera} from 'react-cam'
class Cameraview extends React.Component{
    constructor() {
        super();
    }
    
    showView = () => {
        if (navigator.getUserMedia) {
            // Request the camera.
            navigator.getUserMedia(
              // Constraints
              {
                video: true
              },
          
              // Success Callback
              function(localMediaStream) {
          
              },
          
              // Error Callback
              function(err) {
                // Log the error to the console.
                console.log('The following error occurred when trying to use getUserMedia: ' + err);
              }
            );
          
          } else {
            alert('Sorry, your browser does not support getUserMedia');
          }
    }

    handleClick = () => {
      window.open("/selectScreen", "_self")
    }

    render(){
        return(
            <div>
                <nav class = "navbar navbar-default" style = {{height : 30, fontWeight : "bold"}}>
                    <h4 style = {{fontWeight : "bold"}}>Camera</h4>
                </nav><hr />
                <Camera front={false} width = "100%" heigth = "50%"/> <br/> <br /> <br />
                
                <button onClick = {this.handleClick}>Back</button>
            </div>
        );
    }
}

export default Cameraview;