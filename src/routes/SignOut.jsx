import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import '../style/SignOut.css'

class SignOut extends Component {

    componentDidMount(){
        this.loadOut();
        this.reload();
      }
    
    loadOut(){
        if(localStorage.getItem('guest') !== ""){
            axios.delete(`http://localhost:8080/guest/`+localStorage.getItem('guest'))
                .then(res => {
                    //console.log("Torol vendeg");
                        
            })
        }
        localStorage.setItem('email', "");
        localStorage.setItem('guest', "");
        localStorage.setItem('admin', "false");
        localStorage.setItem('reload', "");
    }

    reload(){
        if(localStorage.getItem('reloadsignout') === ""){
            localStorage.setItem('reloadsignout', "true");
            window.location.reload();
        }
      }
    

    back(){
        localStorage.setItem('reloadsignout',"");
        this.props.history.push("/");
    }

    signIn(){
        localStorage.setItem('reloadsignout',"");
        this.props.history.push("/sign_in_user");
    }

    pagenotfound(){
        this.props.history.push("/pagenotfound");
    }

    render(){
        if(localStorage.getItem('signout') === "true"){
            return(
            <form className="from_out" >
                <div className="form-rowIn">
                </div>
                <div className="form-rowIn">
                    {/* <TemporaryMessage> You sign out! Go to the home side! </TemporaryMessage> */}
                    <div className="outLabrl">You sign out! Go to the home side!</div>
                </div>
                <div className="form-rowIn">
                </div>
                <div className="form-rowIn">
                    <button type="submit" 
                        className="out btn-primary"
                        onClick={ () => this.back()}>
                        To Home
                    </button>
                    <button type="submit" 
                        className="out btn-primary"
                        onClick={ () => this.signIn()}>
                        Sign In
                    </button>
                </div>
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

export default SignOut;