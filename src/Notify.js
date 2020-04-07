import React from 'react';
import ReactDom from 'react-dom';
import Notification  from 'react-web-notification';

//allow react dev tools work
window.React = React;

class Notify extends React.Component {
    constructor () {
        super ();
    }
    handleButtonClick2 = () => {
        this.props.swRegistration.getNotifications({}).then(function(notifications) {
          console.log(notifications);
        });
      }
    render () {
        return (
            <div>
            <button onClick = {this.handleButtonClick2}></button>    
            <Notification />
            </div>
        )
    }
}


export default Notify;