import React, {Component} from 'react';
import styled from 'styled-components';

const form = styled.form`
    background-image: url('../../public/owl.png');
`

class SignOut extends Component {

    back(){
        this.props.history.push("/");
    }

    signIn(){
        this.props.history.push("/sign_in_user");
    }

    render(){
        return(
        <form className="from_out" >
            <div className="form-rowIn">
            </div>
            <div className="form-rowIn">
                <label className="outLabrl">You sign out! Go to the home side!</label>
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
    }

}

export default SignOut;