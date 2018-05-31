import React , { Component } from 'react';

class Game extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            word: ['en','te','o'],
            translated: ''
        }
    }

    translatedChange(i,e){
        const newState = Object.assign(this.state, {
            ['translated']: e.target.value
        });
        this.setState(newState);
        console.log(newState);
    }

    onSubmitNextWord(e){
        console.log("The next word button was clicked!");
    }

    render(){
        return (
            <from>
                {/* <div>
                    <div className="form-group col-md-4">
                        <label>Word:</label>
                        <label for="inputWord">{[this.word]}</label>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputTranslated">Translated:</label>
                        <input type="text" 
                            className="form-control" 
                            id="inputTranslated" 
                            placeholder="Write the word!"
                            value={this.state.translated}
                            onChange={ (e) => this.translatedChange(e)}/>
                    </div>
                    <div>
                        <button type="submit" 
                            className="btn btn-primary"
                            onClick={ (e) => this.onSubmitNextWord(e)}>
                            Next word
                        </button>
                    </div>
                </div> */}
                <table className="table table-sm">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Word</th>
                        <th scope="col">Translated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{this.state.word[0]}</td>
                            <td>
                                <input type="text" 
                                    className="form-control" 
                                    id="inputTranslated" 
                                    placeholder="Write the word!"
                                    value={this.state.translated}
                                    onChange={ (e) => this.translatedChange(0,e)}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{this.state.word[1]}</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td >{this.state.word[2]}</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button type="submit" 
                        className="btn btn-primary"
                        onClick={ (e) => this.onSubmitNextWord(e)}>
                        Next word
                    </button>
                </div>
            </from>
        )
    }
}

export default Game;