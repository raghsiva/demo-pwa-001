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

    render(){
        return(
            <div>
                <Camera/> <br/> <br /> <br />
                <button>Sign in</button>
            </div>
        );
    }
}

export default Cameraview;