import React , { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import swal from 'sweetalert-react';
import styled from 'styled-components';
import Modal from 'react-modal';


//  this is just a temporary div. If you don't wanna to use styled components, you can 
//  adjust your own components with explicit css files, using the 'className' attribute of the tags.
//  In this case u should can the import in the second row

const TemporaryMessage = styled.div `
    text-align: center;
    font-size: 50px;
    padding-top: 350px;
`
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


class Home extends Component {

    constructor(props){
        super(props);
    
    this.state = {
        modalIsOpen: false
      };
  
     
    }
  
    openModal() {
        const temp = Object.assign(this.state, {modalIsOpen: true});
        this.setState(temp);
    }
  
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
  
    closeModal() {
        const temp = Object.assign(this.state, {modalIsOpen: false});
        this.setState(temp);
    }
  
    render() {
      return (
        <div>
          <button onClick={() =>this.openModal()}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            //onAfterOpen={this.afterOpenModal()}
            //onRequestClose={this.closeModal()}
            style={customStyles}
            contentLabel="Example Modal"
          >
  
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={() => this.closeModal()}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      );
    }
}

export default Home;