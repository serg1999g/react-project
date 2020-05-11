import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {routesByName} from "../constants/routes";


export const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('token')
                ? <Redirect to={routesByName.home}/>
                : <Component {...props}/>
        )}/>
    );
};