import React, { Component } from 'react';
import '../style/SignIn.css'




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
                <div className="form-rowIn">
                </div>
                <div className="form-rowIn">
                    <div className="form-group col-md-4">
                        <label >Name</label>
                        <input type="text" 
                               className="form-control"  
                               id="inputname" 
                               placeholder="Name"
                               value={this.state.username}
                               onChange={ (e) => this.fieldChange('username',e)}/>
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
            </form>
        )
    }
}

export default SignInGuest;