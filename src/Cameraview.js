import React from 'react'
import Camera from 'react-html5-camera-photo'
class Cameraview extends React.Component{
    constructor() {
        super();
    }

    render(){
        return(
            <div>
                <Camera />
            </div>
        );
    }
}

export default Cameraview;