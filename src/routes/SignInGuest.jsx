import React, { Component } from 'react';
import '../style/SignIn.css'
import axios from 'axios'
import Modal from 'react-modal';

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




class SignInGuest extends Component {

    constructor(props){
        super(props);

        this.state = {
            guestname: '',
            modalIsOpen: false
        }
    }

    componentDidMount(){
        localStorage.setItem('signout',"");
    }
    
    fieldChange(field, event){
        const newState = Object.assign(this.state, {
            [field]: event.target.value
        });
        this.setState(newState);
        console.log(newState);
    }

    onSubmit(e){
        console.log("The submit button was clicked!");
        console.log("The submit button was clicked!");
        if(this.state.guestname !== ""){
            const url = `http://localhost:8080/guest/`+this.state.guestname;  
            axios.post(url)
                .then(res => {
                console.log(res.data);
                if(res.data.id != null){
                    localStorage.setItem('guest',res.data.name);
                    localStorage.setItem('reloadsignout',"");
                    localStorage.setItem('signout',"true");
                    this.props.history.push("/translate");
                } else{
                    const temp = Object.assign(this.state,{modalIsOpen:true});
                    this.setState(temp);
                }
            })
        } else{
            const temp = Object.assign(this.state,{modalIsOpen:true});
            this.setState(temp);
        }
        
    }

    closeModal(){
        const temp = Object.assign(this.state,{modalIsOpen:false});
            this.setState(temp);
    }

    pagenotfound(){
        this.props.history.push("/pagenotfound");
    }

    render(){
        if(localStorage.getItem('guest') === "" && localStorage.getItem('email') === "" ){
            return(
                <form>
                    <div className="form-rowIn">
                    </div>
                    <div className="form-rowIn">
                        <div className="form-group col-md-4">
                            <label >Name</label>
                            <input type="text" 
                                className="form-control"  
                                id="inputname" 
                                placeholder="Name"
                                value={this.state.guestname}
                                onChange={ (e) => this.fieldChange('guestname',e)}/>
                        </div>
                    </div>
                    <div className="form-rowIn">
                    </div>
                    <div className="form-rowIn">
                        <div>
                            <button type="button" 
                                className="signinguest btn-primary"
                                onClick={ (e) => this.onSubmit(e)}>
                                Sign in
                            </button>
                        </div>
                    </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        //onAfterOpen={this.afterOpenModal()}
                        style={customStyles}
                        contentLabel="Error">
                        <h3 ref={subtitle => this.subtitle = subtitle}>Incorrect sign in! Try it again!</h3>
                        <form>
                        <button onClick={() => this.closeModal()}> Oke </button>
                        </form>
                    </Modal>
                </form>
            )
        } else {
            this.pagenotfound();
            return(
                <div></div>
            )
        }
    }
}

export default SignInGuest;