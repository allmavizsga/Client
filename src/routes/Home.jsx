import React , { Component } from 'react';
import styled from 'styled-components';


//  this is just a temporary div. If you don't wanna to use styled components, you can 
//  adjust your own components with explicit css files, using the 'className' attribute of the tags.
//  In this case u should can the import in the second row

const TemporaryMessage = styled.div `
    text-align: center;
    font-size: 50px;
    padding-top: 350px;
`


class Home extends Component {

    render() {
      return (
        <div>
          <TemporaryMessage> Wlcome in our page!</TemporaryMessage>
        </div>
      );
    }
}

export default Home;