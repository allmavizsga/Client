import React, {Component} from 'react';

class SignUp extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            checkmeout: false
        }
    }

    fieldChange(field, event){
        if (field === 'checkmeout'){
            const newState1 = Object.assign(this.state, {
                [field]: event.target.checked
            });
            this.setState(newState1);
            console.log(newState1);
        } else {
            const newState2 = Object.assign(this.state, {
                [field]: event.target.value
            });
            this.setState(newState2);
            console.log(newState2);
        }
    }

    onSubmit(e){
        console.log("The submit button was clicked!");   
    }

    render(){
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" 
                               className="form-control"  
                               id="inputEmail4" 
                               placeholder="Email"
                               value={this.state.email}
                               onChange={ (e) => this.fieldChange('email',e)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" 
                               className="form-control" 
                               id="inputPassword4" 
                               placeholder="Password"
                               value={this.state.password}
                               onChange={ (e) => this.fieldChange('password',e)}/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" 
                        className="form-control" 
                        id="inputAddress" 
                        placeholder="1234 Main St"
                        value={this.state.address1}
                        onChange={ (e) => this.fieldChange('address1',e)}/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" 
                        className="form-control" 
                        id="inputAddress2" 
                        placeholder="Apartment, studio, or floor"
                        value={this.state.address2}
                        onChange={ (e) => this.fieldChange('address2', e)}/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" 
                            className="form-control" 
                            id="inputCity"
                            value={this.state.city}
                            onChange={ (e) => this.fieldChange('city', e)}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" 
                            className="form-control" 
                            id="inputZip"
                            value={this.state.zip}
                            onChange={ (e) => this.fieldChange('zip', e)}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="checkbox" 
                            id="gridCheck"
                            checked={this.state.checkmeout}
                            onChange={ (e) => this.fieldChange('checkmeout', e)}/>
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" 
                        className="btn btn-primary"
                        onClick={ (e) => this.onSubmit(e)}>
                        Sign in
                </button>
            </form>
        )
    }
}

export default SignUp;