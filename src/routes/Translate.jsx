import React, {Component} from 'react';

class Translate extends Component {

    constructor(props){
        super(props);
        this.state = {
            word: '',
            translated: 'asd',
            told: '',
            tolds: '123'
        }
    }


    wordChange(event){
        const newState = Object.assign(this.state, {
            ['word']: event.target.value, ['translated']: '', ['tolds']: ''
        });
        this.setState(newState);
        console.log(newState);
    } 

    addNewChange(event){
        const newState = Object.assign(this.state, {
            ['told']: event.target.value
        });
        this.setState(newState);
        console.log(newState);
    }

    onSubmitTranslation(e){
        console.log("The translation button was clicked!");   
    }

    onSubmitNewTold(e){
        console.log("The add new button was clicked!");
    }

    render(){
        return(
        <form>
            <div>
                <div className="form-group col-md-4">
                    <label for="inputWord">Word:</label>
                    <input type="text" 
                        className="form-control" 
                        id="inputWord" 
                        placeholder="Write the word!"
                        value={this.state.word}
                        onChange={ (e) => this.wordChange(e)}/>
                </div>
                <div className="form-group col-md-4">
                    <label>Translated:</label>
                    <label for="inputTranslated">{[this.state.translated]}</label>
                </div>
                <div>
                    <button type="submit" 
                        className="btn btn-primary"
                        onClick={ (e) => this.onSubmitTranslation(e)}>
                        Translation
                    </button>
                </div>
            </div>
            <div>
                <div className="form-group col-md-4">
                    <label>Tolds:</label>
                    <label for="inputTolds">{[this.state.tolds]}</label>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputAddNew">Told:</label>
                    <input type="text" 
                        className="form-control" 
                        id="inputAddNew" 
                        placeholder="Write the told!"
                        value={this.state.told}
                        onChange={ (e) => this.addNewChange(e)}/>
                </div>
                <div>
                    <button type="submit" 
                        className="btn btn-primary"
                        onClick={ (e) => this.onSubmitNewTold(e)}>
                        Add new
                    </button>
                </div>
            </div>
        </form>
        )
    }

}

export default Translate;