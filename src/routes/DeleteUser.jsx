import React , { Component } from 'react';



class DeleteUser extends Component {

    constructor(props){

        super(props);
        this.state = {
            userEmail: '',
            temp: [{email: 's',
                password: 'a',
                address1: 'n',
                address2: 't',
                city: 'a',
                state: ''}],
            deleteButtonVisibility: 'hidden'

        }

    }

    back(){
        this.props.history.push("/delete_expression");
    }

    fieldChange(event){
        const userEm = this.state;
        userEm.userEmail = event.target.value;
        userEm.deleteButtonVisibility = 'hidden'
        this.setState(userEm);
        console.log(userEm)
    }

    search(e){
        console.log('Seaching');
        const visibilityy = this.state;
        visibilityy.deleteButtonVisibility = "visible";
        this.setState({visibilityy});
    }

    render(){
        const expressions = this.state.temp.map((current) => {
            return (
                <label>Email: {current.email}, Address: {current.address1}, {current.address2}, {current.city}</label>
                
            )
        })
        return (
            <div>
                <div className="form-group col-md-4">
                    <label>Search by useremail: </label>
                    <input type="email" 
                        className="form-control"  
                        id="inputEmail4" 
                        placeholder="Email"
                        value={this.state.userEmail}
                        onChange={ (e) => this.fieldChange(e)}/> 
                    <button type="submit" 
                        className="btn btn-primary"
                        onClick={ (e) => this.search(e)}>
                        Search
                    </button>
                    <button type="submit" 
                        hidden
                        className="btn btn-primary"
                        onClick={ (e) => this.dletete(e)}>
                        Delete
                    </button>
                </div>
                <div>
                    <label >
                       He/she is it
                    </label>
                </div>
                <div>
                    {expressions}
                </div>
            </div>
        )
    }
}

export default DeleteUser;