import React, { Component } from 'react';
import styled from 'styled-components';

const Arrow = styled.img.attrs({
    src: "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronUpCircle-512.png",
    alt: "TOP"
})`
    position: fixed;
    width: 70px;
    height: 70px;
    bottom: 2%;
    right: 1%;

    @media only screen and (max-width: 500px){
        width: 40px;
        height: 40px;
    }
`;

const Corner = styled.div `
    position: relative;
`;

class GoToTop extends Component {

    onClick() {
        window.scrollTo(0, 0);
        console.log('go to top');
    }

    render(){
        return ( 
            <Corner onClick={() => this.onClick()}>
                <Arrow />
            </Corner>
        )
    }
}

export default GoToTop;