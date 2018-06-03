import React , { Component } from 'react';
import '../style/Delete.css'



class DeleteWord extends Component {

    constructor(props){

        super(props);
        this.state = {
            wordIn: '',
            wordOut: 'asds',
            deleteButtonVisibility: false

        }

    }

    back(){
        this.props.history.push("/delete_expression");
    }

    fieldChange(event){
        const word = this.state;
        word.wordIn = event.target.value;
        word.deleteButtonVisibility = false
        this.setState(word);
        console.log(word)
    }

    search(e){
        console.log('Seaching');
        const visibilityy = this.state;
        visibilityy.deleteButtonVisibility = true;
        this.setState({visibilityy});
    }

    render(){

        return (
            <div>
                <div className="form-row ">
                </div>
                <div className="form-row ">
                    <div className="form-group col-md-4">
                        <label className="delLabHeader">Search word: </label>
                        <input type="email" 
                            className="form-control"  
                            id="inputEmail4" 
                            placeholder="Word"
                            value={this.state.wordIn}
                            onChange={ (e) => this.fieldChange(e)}/>
                    </div>
                    <div className="form-group col-md-8">
                        <div>
                            <label className="delLabHeader">
                            It is:
                            </label>
                        </div>
                        <div>
                            <label> {this.state.wordOut}</label>
                        </div>
                    </div> 
                </div>
                <div className="form-row ">
                </div>
                <div className="form-row ">
                        <button type="submit" 
                            className="deletBut btn-primary"
                            onClick={ (e) => this.search(e)}>
                            Search
                        </button>
                        <button type="submit" 
                            className="deletBut btn-primary"
                            onClick={ (e) => this.dletete(e)}>
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

export default DeleteWord;