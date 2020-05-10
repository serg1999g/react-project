import React, {useEffect} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {routesByName} from 'constants/routes';
import HomePage from 'modules/pages/HomePage';
import Page404 from 'modules/pages/Page404';
import SignUpContainer from 'modules/auth/signUp/SignUpContainer';
import SignInComponent from "./modules/auth/signIn/signInComponent";
import Header from "components/partials/Header";
import Footer from "components/partials/Footer";
import {PrivateRoute} from "./routers/PrivateRoute";
import {setUser} from "./modules/auth/store/actions";
import isEmpty from 'lodash/isEmpty';

function App() {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!isEmpty(user) && isEmpty(token)) {
            return;
        }
        dispatch(setUser());
    }, []);

    return (
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage}/>

                    <Route exact path={routesByName.signUp} component={SignUpContainer}/>
                    <Route exact path={routesByName.signIn} component={SignInComponent}/>
                    <Route exact path={'*'} component={Page404}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
