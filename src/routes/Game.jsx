import React , { Component } from 'react';
import axios from 'axios'
import Modal from 'react-modal';
import '../style/Game.css'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


class Game extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            dictionary: [],
            color: [],
            hungarianExp: [],
            modalIsOpen: false,
            result: [],
            results: 0,
            question: 0,
            numberOfFavoriteInGame: 10,
            resultVisibil: '',
            modalFavorite: false,
            userEmail: localStorage.getItem('email')
        }
    }

    componentDidMount(){
        this.loadGame();
      }

    loadGame(){
        const url = `http://localhost:8080/favorite/game/`+this.state.userEmail+'/'+this.state.numberOfFavoriteInGame;  
        axios.get(url)
            .then(res => {
            //console.log(res.data);
            if(res.data[0] !=null){
                const temp = this.state;
                temp.results = 0;
                temp.question = 0;
                temp.dictionary = res.data.map( obj => obj.word);
                this.setState(temp);
                //console.log(temp);
                
            } else{
                const temp = Object.assign(this.state,{modalFavorite:true});
                this.setState(temp);
            }
      })
    }

    send(e){
        const temp = this.state;
        temp.color = temp.dictionary.map( (object, index) => {
            //console.log(object.hungarian+' '+this.state.hungarianExp[index]+' '+index);
            if(object.hungarian === this.state.hungarianExp[index]){
                temp.results = temp.results +1;
                temp.question = temp.question +1;
                temp.result[index] = "It is good";
                return '#00FF00'
            } else {
                temp.result[index] = object.hungarian;
                temp.question = temp.question +1;
                return '#FF0000'
            }
            
        })
        temp.results = temp.results+' in '+temp.question;
        temp.resultVisibil = "Result";
        temp.modalIsOpen = true;
        this.setState(temp);
        // const openChange = Object.assign(this.state, {modalIsOpen: true});
        // this.setState(openChange);
        
    }

    onChangeSolution(event, index){
        //console.log('index: ', index);
        const temp = this.state.hungarianExp;
        temp[index] = event.target.value;
        this.setState({hungarianExp: temp});
        //console.log(this.state.hungarianExp)
    }
    closeModal() {
        const temp = Object.assign(this.state, {modalIsOpen: false});
        this.setState(temp);
        //this.props.historypush("/game");
        
    }
  
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
  
    newGame() {
        const temp = this.state;
        temp.hungarianExp = [];
        temp.dictionary = [];
        temp.result = [];
        temp.hungarianExp = [];
        temp.color = [];
        temp.resultVisibil = '';
        temp.results = 0;
        this.setState(temp);
        this.loadGame();
        
    }

    back(){
        this.props.history.push("/translate");
    }

    pagenotfound(){
        this.props.history.push("/pagenotfound");
    }

    render(){
        /*setTimeout(() =>{},1000) */
        if(localStorage.getItem('email') !== "" ){
            const expressions = this.state.dictionary.map((current, index) => {
                return (
                    <tr>
                        <th className="rowsGame" scope="row">{index+1}</th>
                        <td className="rowsGame" >{current.english}</td>
                        <td className="rowsGame" >
                            <input type="text" 
                                className="form-control-game" 
                                id="inputTranslated" 
                                placeholder="Translated word!"
                                key={index}
                                value={this.state.hungarianExp[index]}
                                onChange={ (e) => this.onChangeSolution(e, index)}/>
                        </td>
                        <td id="resulr"
                            className="rowsGame"  
                            align="center"  
                            visibility="hidden"
                            bgcolor = {this.state.color[index]}>
                            {this.state.result[index]}
                        </td>
                    </tr>
                    
                )
            })
            return (
                <from>
                    <div>
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                <th className="tHeader" scope="col">Number</th>
                                <th className="tHeader" scope="col">Word</th>
                                <th className="tHeader" scope="col">Translated</th>
                                <th className="tHeader" id="result" align="center" >{this.state.resultVisibil}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expressions}
                            </tbody>
                        </table>
                        <div>
                            <a className='game btn-primary' 
                                onClick={() =>this.send()}> Send 
                            </a>
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                //onAfterOpen={this.afterOpenModal()}
                                style={customStyles}
                                contentLabel="Results">
                                <h3 ref={subtitle => this.subtitle = subtitle}>Your result</h3>
                                <div>{this.state.results}</div>
                                <form>
                                <button onClick={() => this.closeModal()}> Close </button>
                                <button onClick={() => this.back()}> End game </button>
                                </form>
                            </Modal>
                            <Modal
                                isOpen={this.state.modalFavorite}
                                //onAfterOpen={this.afterOpenModal()}
                                style={customStyles}
                                contentLabel="Error">
                                <h3 ref={subtitle => this.subtitle = subtitle}>You dont have favorite!</h3>
                                <form>
                                <button onClick={() => this.back()}> Oke </button>
                                </form>
                            </Modal>
                            <a href={`/game`}
                                className='game btn-primary'> New Game </a>
                            <a href={`/translate`}
                                className='gamedanger btn-danger'> Close </a>
                        </div>
                    </div>
                </from>
            )
        } else {
            this.pagenotfound();
            return(
                <div></div>
            )
        }
    }
}

export default Game;