import React, {Component} from 'react';
import styled from 'styled-components';
import '../style/SignUp.css'
import axios from 'axios'

const label = styled.div`
    background-color:lightblue;
    color:white
`;



class SignUp extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            address1: '',
            address2: '',
            city: '',
            state: 'Romania',
            checkmeout: false
        }
    }

    componentDidMount(){
        this.setLocalStorage();
    }

    setLocalStorage(){
        localStorage.setItem('signout',"");
        localStorage.setItem('user',"");
        localStorage.setItem("admin",false);
    }

    fieldChange(field, event){
        if (field === 'checkmeout'){
            const newState1 = Object.assign(this.state, {
                [field]: event.target.checked
            });
            this.setState(newState1);
            //console.log(newState1);
        } else {
            const newState2 = Object.assign(this.state, {
                [field]: event.target.value
            });
            this.setState(newState2);
            //console.log(newState2);
        }
    }

    onSubmit(e){
        const temp= {
            allowUserEmail: this.state.email,
            allowUserpassword: this.state.password,
            allowUserAddress: this.state.address1+ ', ' + this.state.address2,
            allowUserTown: this.state.city,
            allowUserState: this.state.state,
            allowUserAdmin: this.state.checkmeout
        }
        //console.log(temp);
        const url = `http://localhost:8080/allowuser/new`;  
        axios.post(url,temp)
            .then(res => {
            //console.log(res.data)
        });

        const reset = this.state;
        reset.email = '';
        reset.password = '';
        reset.address1 = '';
        reset.address2 = '';
        reset.city = '';
        reset.state = 'Romania';
        reset.checkmeout = false;
        this.setState(reset);

    }

    pagenotfound(){
        this.props.history.push("/pagenotfound");
    }
    
    render(){
        if(localStorage.getItem('email') === "") {
            return (
                    <form>
                        <div className="form-row ">
                        </div>
                        <div className="form-row ">
                            <div className="form-group col-md-4">
                                <label className="primaryLabel">Email</label>
                                <input type="email" 
                                    className="form-control"  
                                    id="inputEmail4" 
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={ (e) => this.fieldChange('email',e)}/>
                            </div>
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
                        <div className="form-row">
                        <div className="form-group  col-md-4">
                            <label>Address</label>
                            <input type="text" 
                                className="form-control" 
                                id="inputAddress" 
                                placeholder="1234 Main St"
                                value={this.state.address1}
                                onChange={ (e) => this.fieldChange('address1',e)}/>
                        </div>
                        <div className="form-group  col-md-4">
                            <label>Address 2</label>
                            <input type="text" 
                                className="form-control" 
                                id="inputAddress2" 
                                placeholder="Apartment, studio, or floor"
                                value={this.state.address2}
                                onChange={ (e) => this.fieldChange('address2', e)}/>
                        </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>City</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="inputCity"
                                    placeholder = "City"
                                    value={this.state.city}
                                    onChange={ (e) => this.fieldChange('city', e)}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label>State</label>
                                <select id="inputState" className="form-control">
                                    <option selected value='romania'>Romania</option>
                                    <option  value='magyarorszag'>Magyarorszag</option>
                                    <option  value='other'>Other</option>
                                </select>
                            </div>
                            {/* <div className="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="inputZip"
                                    value={this.state.zip}
                                    onChange={ (e) => this.fieldChange('zip', e)}/>
                            </div> */}
                            
                        </div>
                        <div className="checkMe">
                                <div className="form-check">
                                    <label></label>
                                    <input className="form-check-input" 
                                        type="checkbox" 
                                        id="gridCheck"
                                        checked={this.state.checkmeout}
                                        onChange={ (e) => this.fieldChange('checkmeout', e)}/>
                                    <label className="form-check-label">
                                        Check me out
                                    </label>
                                </div>
                        </div>
                        <div className="div_Button">
                        <button type="button" 
                                className="btn btn-primary"
                                onClick={ (e) => this.onSubmit(e)}>
                                Sign up
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

export default SignUp;