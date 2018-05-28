import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import DeleteExpression from './routes/DeleteExpression';
import AddNewExpression from './routes/AddNewExpression';
import PageNotFound from './routes/PageNotFound';

class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ () => <Home />}/>
                    <Route exact path="/sign_in" render={ (props) => <SignIn {...props}/>} />
                    <Route exact path="/sign_up" render={ (props) => <SignUp {...props}/>} />
                    <Route exact path="/new_expression" render={ (props) => <AddNewExpression {...props} />} />
                    <Route exact path="/delete_expression" render={ (props) => <DeleteExpression {...props}/>} />
                    <Route render={ (props) => <PageNotFound {...props}/>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;