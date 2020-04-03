import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginScreen from './LoginScreen'
import MyDevices from './MyDevices.js'

const Router = () => {
    return (
    <div>
        <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {LoginScreen}/>
            <Route exact path = "/myDevices" component = {MyDevices} />
        </Switch></BrowserRouter>
    </div>
    );
}

export default Router;