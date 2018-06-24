import React , { Component } from 'react';
import styled from 'styled-components';



const TemporaryMessage = styled.div `
    text-align: center;
    font-size: 50px;
    padding-top: 350px;
`


class Home extends Component {

    componentDidMount(){
      if(localStorage.getItem('guest') === "" && localStorage.getItem('email') === "" )
        localStorage.setItem('signout',"");
    }
    render() {
      return (
        <div>
          <TemporaryMessage> Welcome in our page!</TemporaryMessage>
        </div>
      );
    }
}

export default Home;