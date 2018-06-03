import React, { Component } from 'react';
import '../style/SignIn.css'

//  this is just a temporary div. If you don't wanna to use styled components, you can 
//  adjust your own components with explicit css files, using the 'className' attribute of the tags.


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
                        <label for="inputEmail4">Email</label>
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
                        <label for="inputPassword4">Password</label>
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
                <div>
                     <button type="submit" 
                        className="btn-primary"
                        onClick={ (e) => this.onSubmit(e)}>
                        Sign in
                    </button>
                </div>
            </form>
        )
    }
}

export default SignInUser;


