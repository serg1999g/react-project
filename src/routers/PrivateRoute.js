import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {routesByName} from "../constants/routes";


export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Component {...props}/>
            : <Redirect to={routesByName.signIn}/>
    )}/>
);