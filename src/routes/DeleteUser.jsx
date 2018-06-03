import React , { Component } from 'react';
import '../style/Delete.css'


class DeleteUser extends Component {

    constructor(props){

        super(props);
        this.state = {
            userEmail: '',
            temp: [{email: 'asdjlfjasljas@sjkfsf.asd',
                password: 'sfasfafafsa',
                address1: 'sfasfasdasddasasdn',
                address2: 'asdasdasdasdasdt',
                city: 'aasdasdasdasda',
                state: 'sdadasdsd   '}],
            deleteButtonVisibility: false
            
        }

    }

    back(){
        this.props.history.push("/delete_expression");
    }

    fieldChange(event){
        const userEm = this.state;
        userEm.userEmail = event.target.value;
        userEm.deleteButtonVisibility = false;
        this.setState(userEm);
        console.log(userEm)
    }

    search(e){
        console.log('Seaching');
        const visibilityy = this.state;
        visibilityy.deleteButtonVisibility = true;
        this.setState(visibilityy);
        console.log(visibilityy);
    }

    delete(){
        console.log("Delete user");
    }



    render(){
        const expressions = this.state.temp.map((current) => {
            return (
                <label>Email: {current.email}, Address: {current.address1}, {current.address2}, {current.city}</label>
                
            )
        })
        return (
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
                            {expressions}
                        </div>
                    </div>
                </div>
                <div className="form-row ">
                </div>
                <div>
                    <button type="submit" 
                        className="deletBut btn-primary"
                        onClick={ (e) => this.search(e)}>
                        Search
                    </button>
                    <button type="submit" 
                        className="deletBut btn-primary"
                        onClick={ (e) => this.delete(e)}>
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
        )
    }
}

export default DeleteUser;