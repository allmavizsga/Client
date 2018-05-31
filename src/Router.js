import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './routes/Home';
import SignInUser from './routes/SignInUser';
import SignInGuest from './routes/SignInGuest';
import SignUp from './routes/SignUp';
import SignOut from './routes/SignOut';
import Translate from './routes/Translate';
import Game from './routes/Game';
import DeleteExpression from './routes/DeleteExpression';
import AllowNewExpression from './routes/AllowNewExpression';
import PageNotFound from './routes/PageNotFound';

class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ () => <Home />}/>
                    <Route exact path="/sign_in_user" render={ (props) => <SignInUser {...props}/>} />
                    <Route exact path="/sign_in_guest" render={ (props) => <SignInGuest {...props}/>} />
                    <Route exact path="/sign_up" render={ (props) => <SignUp {...props}/>} />
                    <Route exact path="/sign_out" render={ (props) => <SignOut {...props}/>} />
                    <Route exact path="/new_expression" render={ (props) => <AllowNewExpression {...props} />} />
                    <Route exact path="/delete_expression" render={ (props) => <DeleteExpression {...props}/>} />
                    <Route exact path="/translate" render={ (props) => <Translate {...props}/>} />
                    <Route exact path="/game" render={ (props) => <Game {...props}/>} />
                    <Route render={ (props) => <PageNotFound {...props}/>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;