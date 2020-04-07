import React from 'react'

class Camera extends React.Component{
    constructor() {
        super();
    }

    render(){
        return(
            <div>
                <input type="file" accept="image/*" capture="camera" />
            </div>
        );
    }
}

export default Camera;