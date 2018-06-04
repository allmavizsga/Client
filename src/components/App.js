import React, { Component } from 'react';
import Router from '../Router';
import NavigationBar from './NavigationBar';
import GoToTop from './GoToTop';

class App extends Component {
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
