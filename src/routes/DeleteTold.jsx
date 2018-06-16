import React , { Component } from 'react';
import axios from 'axios'



class DeleteTold extends Component {

    constructor(props){

        super(props);
        this.state = {
            toldId: '',
            toldIn: '',
            toldOut: '',
            deleteButtonVisibility: false

        }

    }

    back(){
        this.props.history.push("/delete_expression");
    }

    fieldChange(field,event){
        const newState = Object.assign(this.state, {
            [field]: event.target.value, deleteButtonVisibility: false
        });
        
        this.setState(newState);
        console.log(newState)
    }

    search(e){
        console.log('Seaching');
        const url = `http://localhost:8080/told/ptold`;
        axios.post(url,this.state.toldIn)
            .then(res => {
                console.log(res.data);
                if(res.data.told != null) {
                    const temp = this.state;
                    temp.toldId = res.data.toldId;
                    temp.toldOut = res.data.told;
                    temp.deleteButtonVisibility = true;
                    this.setState(temp);
                    console.log(temp);
                }else{
                    const temp = this.state;
                    temp.toldOut = 'This told do not exist!';
                    temp.deleteButtonVisibility = false;
                    this.setState(temp);
                }

            })
    }

    delete(){
        if(this.state.deleteButtonVisibility){
            const url = `http://localhost:8080/told/`+this.state.toldId;
            axios.delete(url)
                .then(res => {
                    const temp = this.state;
                    temp.deleteButtonVisibility = false;
                    temp.toldOut = '';
                    temp.toldIn = '';
                    this.setState(temp);
                })
        }
    }

    render(){

        return (
            <div>
                <div className="form-row">
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className="delLabHeader">Search told: </label>
                        <input type="text" 
                            className="form-control"  
                            id="inputEmail4" 
                            placeholder="Told"
                            value={this.state.toldIn}
                            onChange={ (e) => this.fieldChange('toldIn',e)}/> 
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