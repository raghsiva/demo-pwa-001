import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginScreen from './LoginScreen'
import MyDevices from './MyDevices.js'
import Location from './Location'
import Cameraview from './Cameraview'
import Selectscreen from './Selectscreen'

const Router = () => {
    var flag = window.localStorage.getItem('rememberMe')
    console.log(flag)
    return (
    <div>
        <BrowserRouter>
        <Switch>
            {console.log(localStorage.getItem("rememberMe"))}
            {localStorage.getItem("rememberMe") !== "yes" ?
            <Route exact path = "/" component = {LoginScreen}/> : <Route exact path = "/" component = {Selectscreen} />}
            <Route exact path = "/myDevices" component = {MyDevices} />
            <Route exact path = "/cameraview" component = {Cameraview} />
            <Route exact path = "/location" component = {Location} />
            <Route exact path = "/selectScreen" component = {Selectscreen} />
        </Switch></BrowserRouter>
    </div>
    );
}

export default Router;