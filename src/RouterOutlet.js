import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from './pages/login';

const RouterOutlet = (props)  =>{
    return(
        <Switch>
            <Route path="/login/:formType" render={(props) => <Login {...props}/>} />
            <Route path="/" render={(props) => <Login {...props}/>} />
        </Switch>
        
    )
}
export default RouterOutlet;