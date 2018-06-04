import React, { Component } from 'react';
import '../style/SignIn.css'


class SignInUser extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
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
                        <button type="submit" 
                            className="signinguest btn-primary"
                            onClick={ (e) => this.onSubmit(e)}>
                            Sign in
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SignInUser;


