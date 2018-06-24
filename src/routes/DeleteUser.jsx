import React , { Component } from 'react';
import '../style/Delete.css'
import axios from 'axios'


class DeleteUser extends Component {

    constructor(props){

        super(props);
        this.state = {
            userEmail: '',
            text: '',
            deleteButtonVisibility: false,
            respons: false
            
        }

    }

    back(){
        this.props.history.push("/delete_expression");
    }

    fieldChange(event){
        const userEm = this.state;
        userEm.userEmail = event.target.value;
        userEm.text= '';
        userEm.deleteButtonVisibility = false;
        this.setState(userEm);
        //console.log(userEm)
    }

    search(){
        //console.log('Seaching');
        const url = `http://localhost:8080/users/`+this.state.userEmail;
        axios.get(url)
            .then(res => {
                //console.log(res.data);
                if(res.data.email != null) {
                    const temp = this.state;
                    temp.text = 'Email: '+res.data.email+' Address: '+res.data.address+', '+res.data.town;+', '+res.data.state;
                    temp.respons = true,
                    temp.deleteButtonVisibility = true;
                    this.setState(temp);
                    //console.log(temp);
                }else{
                    const temp = this.state;
                    temp.text = 'This user do not exist!';
                    temp.respons = false;
                    temp.deleteButtonVisibility = false;
                    this.setState(temp);
                }

            })
    }

    delete(){
        //console.log("Delete user");
        if(this.state.deleteButtonVisibility){
            const url = `http://localhost:8080/users/`+this.state.userEmail;
            axios.delete(url)
                .then(res => {
                    const temp = this.state;
                    temp.deleteButtonVisibility = false;
                    temp.userEmail = '';
                    temp.text = '';
                    this.setState(temp);
                })
        }
    }


    pagenotfound(){
        this.props.history.push("/pagenotfound");
    }

    render(){
        if(localStorage.getItem('admin') === "true" ){
            return (
                <form>
                <div>
                    <div className="form-row ">
                    </div>
                    <div className="form-row ">
                        <div className="form-group col-md-4">
                            <label className="delLabHeader">Search by useremail: </label>
                            <input type="email" 
                                className="form-control"  
                                id="inputEmail4" 
                                placeholder="Email"
                                value={this.state.userEmail}
                                onChange={ (e) => this.fieldChange(e)}/> 
                        </div>
                        <div className="form-group col-md-8">
                            <div>
                                <label className="delLabHeader">
                                He/she is it:
                                </label>
                            </div>
                            <div>
                                <label>{this.state.text}</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row ">
                    </div>
                    <div>
                        <button type="button" 
                            className="deletBut btn-primary"
                            onClick={ () => this.search()}>
                            Search
                        </button>
                        <button type="button" 
                            className="deletBut btn-primary"
                            onClick={ () => this.delete()}>
                            <i className="fa fa-trash" aria-hidden="false"></i>
                            Delete
                        </button>
                        <button type="submit" 
                            className="deletBut btn-primary"
                            onClick={ () => this.back()}>
                            Back
                        </button>
                    </div>
                    
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

export default DeleteUser;