import React , { Component } from 'react';



class DeleteTold extends Component {

    constructor(props){

        super(props);
        this.state = {
            toldIn: '',
            toldOut: 'The pig eat.',
            deleteButtonVisibility: false

        }

    }

    back(){
        this.props.history.push("/delete_expression");
    }

    fieldChange(event){
        const told = this.state;
        
        told.toldIn = event.target.value;
        told.deleteButtonVisibility = false;
        this.setState(told);
        console.log(told)
    }

    search(e){
        console.log('Seaching');
        const visibilityy = this.state;
        visibilityy.deleteButtonVisibility = true;
        this.setState({visibilityy});
    }

    delete(){
        console.log('Delete');
    }

    render(){

        return (
            <div>
                <div className="form-row">
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className="delLabHeader">Search by told: </label>
                        <input type="email" 
                            className="form-control"  
                            id="inputEmail4" 
                            placeholder="Told"
                            value={this.state.toldIn}
                            onChange={ (e) => this.fieldChange(e)}/> 
                    </div>
                    <div className="form-group col-md-8">
                        <div>
                            <label className="delLabHeader">
                            It is:
                            </label>
                        </div>
                        <div>
                            <label> {this.state.toldOut}</label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                </div>
                <div className="form-row">
                    <button type="submit" 
                        className="deletBut btn-primary"
                        onClick={ (e) => this.search(e)}>
                        Search
                    </button>
                    <button type="submit"   
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
        )
    }
}

export default DeleteTold;