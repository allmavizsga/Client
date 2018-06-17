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


class SignInUser extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            modalIsOpen: false
        }
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
        const url = `http://localhost:8080/users/`+this.state.email+'/'+this.state.password;  
        axios.get(url)
            .then(res => {
            console.log(res.data);
            if(res.data.email != null){
                this.props.history.push("/translate");
                if (res.data.admin){
                    if (localStorage.getItem('user') !== ""){
                        localStorage.setItem('user', res.data)
                    }
                }
            } else{
                const temp = Object.assign(this.state,{modalIsOpen:true});
                this.setState(temp);
            }
      })
    }

    closeModal(){
        const temp = Object.assign(this.state,{modalIsOpen:false});
        this.setState(temp);

    }

    render(){
        return(
            <form>
                <div className="form-rowIn">
                </div>
                <div className="form-rowIn">
                    <div className="form-group col-md-4">
                        <label>Email</label>
                        <input type="email" 
                               className="form-control"  
                               id="inputEmail4" 
                               placeholder="Email"
                               value={this.state.email}
                               onChange={ (e) => this.fieldChange('email',e)}/>
                    </div>
                </div>
                <div className="form-rowIn">
                    <div className="form-group col-md-4">
                        <label >Password</label>
                        <input type="password" 
                               className="form-control" 
                               id="inputPassword4" 
                               placeholder="Password"
                               value={this.state.password}
                               onChange={ (e) => this.fieldChange('password',e)}/>
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
                    <h3 ref={subtitle => this.subtitle = subtitle}>Email or password is incorrect!</h3>
                    <form>
                    <button onClick={() => this.closeModal()}> Oke </button>
                    </form>
                </Modal>
            </form>
        )
    }
}

export default SignInUser;


