import React from 'react'
import Camera from 'react-html5-camera-photo'
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
                <input type="file" accept="image/*" capture="camera" />
            </div>
        );
    }
}

export default Cameraview;