import React , { Component } from 'react';



class DeleteTold extends Component {

    constructor(props){

        super(props);
        this.state = {
            toldIn: '',
            toldOut: 'asds',
            deleteButtonVisibility: 'hidden'

        }

    }

    back(){
        this.props.history.push("/delete_expression");
    }

    fieldChange(event){
        const told = this.state;
        
        told.toldIn = event.target.value;
        told.deleteButtonVisibility = 'hidden'
        this.setState(told);
        console.log(told)
    }

    search(e){
        console.log('Seaching');
        const visibilityy = this.state;
        visibilityy.deleteButtonVisibility = "visible";
        this.setState({visibilityy});
    }

    render(){

        return (
            <div>
                <div className="form-group col-md-4">
                    <label>Search by told: </label>
                    <input type="email" 
                        className="form-control"  
                        id="inputEmail4" 
                        placeholder="Email"
                        value={this.state.toldIn}
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
                       It is
                    </label>
                </div>
                <div>
                    <label> {this.state.toldOut}</label>
                </div>
                <div>
                    <button type="submit" 
                        hidden
                        className="btn btn-primary"
                        onClick={ () => this.back()}>
                        Back
                    </button>
                </div>
            </div>
        )
    }
}

export default DeleteTold;