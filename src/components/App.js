import React, { Component } from 'react';
import Router from '../Router';
import NavigationBar from './NavigationBar';
import GoToTop from './GoToTop';

class App extends Component {
  
  componentDidMount(){
    this.loadApp();
  }

  loadApp(){

    localStorage.setItem('email', localStorage.getItem('email') || "");
    localStorage.setItem('guest', localStorage.getItem('guest') || "");
    localStorage.setItem('admin', localStorage.getItem('admin') || "false");
    localStorage.setItem('reload', localStorage.getItem('reload') || "");
    localStorage.setItem('reloadsignout', localStorage.getItem('reloadsignout') || "");
    localStorage.setItem('signout', localStorage.getItem('signout') || "");

    console.log(localStorage.getItem('email'));
  }

  render() {
    return (
      <div>
         <NavigationBar />
         <Router />
         <GoToTop/> 
      </div>
    );
  }
}

export default App;
