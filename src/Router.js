import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginScreen from './LoginScreen'


const Router = () => {
    return (
    <div>
        <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {LoginScreen}/>
        </Switch></BrowserRouter>
    </div>
    );
}

export default Router;