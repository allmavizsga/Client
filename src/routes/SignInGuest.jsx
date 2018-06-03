import React, { Component } from 'react';
import '../style/SignIn.css'


//  this is just a temporary div. If you don't wanna to use styled components, you can 
//  adjust your own components with explicit css files, using the 'className' attribute of the tags.


class SignInGuest extends Component {

    constructor(props){
        super(props);

        this.state = {
            guestname: ''
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
                <div className="form-row">
                </div>
                <div className="form-rowIn">
                    <div className="form-group col-md-4">
                        <label for="inputname">Name</label>
                        <input type="text" 
                               className="form-control"  
                               id="inputname" 
                               placeholder="Name"
                               value={this.state.username}
                               onChange={ (e) => this.fieldChange('username',e)}/>
                    </div>
                </div>
                <div className="form-row">
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

export default SignInGuest;