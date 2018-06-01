import React , { Component } from 'react';
import swal from 'sweetalert2-react';

class Game extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            word: ['en','te','o'],
            temp: [ {english: 'how are you', hungarian: 'hogy vagy'},{english: 'how are you', hungarian: 'hogy vagy'} ],
            actualTransleted: '',
            hungarianExp: []
        }
    }

    onSubmitNextWord(e){
        console.log("The next word button was clicked!");
        const temp = this.state.temp;
        temp.hungarian = this.state.hungarianExp;
    }

    onChangeSolution(event, index){
        console.log('index: ', index)
        const temp = this.state.hungarianExp;
        temp[index] = event.target.value;
        this.setState({hungarianExp: temp});
        console.log(this.state.hungarianExp)
    }


    render(){
        const expressions = this.state.temp.map((current, index) => {
            return (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{current.english}</td>
                    <td>
                        <input type="text" 
                            className="form-control" 
                            id="inputTranslated" 
                            key={index}
                            value={this.state.hungarianExp[index]}
                            onChange={ (e) => this.onChangeSolution(e, index)}/>
                    </td>
                </tr>
                
            )
        })
        return (
            <from>
                <table className="table table-sm">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Word</th>
                        <th scope="col">Translated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expressions}
                    </tbody>
                </table>
                <div>
                    <button type="submit" 
                        className="btn btn-primary"
                        onClick={ (e) => this.onSubmitNextWord(e)}>
                        Send
                    </button>
                </div>
                <div className="inline">
                    <a href={`/translate`}
                    className='btn btn-danger'><i className="fa fa-trash" aria-hidden="true"></i> Close</a>
                </div>
            </from>
        )
    }
}

export default Game;