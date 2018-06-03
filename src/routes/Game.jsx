import React , { Component } from 'react';
import swal from 'sweetalert2-react';
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
            temp: [ {english: 'how are you', hungarian: 'hogy vagy', result:'Good'},{english: 'how are you', hungarian: 'hogy vagy', result:'Good'} ],
            color: ['#FF0000',"#00FF00"],
            hungarianExp: [],
            modalIsOpen: false,
            results: '18/20 ',
            resultVisibil: ''
        }
    }

    send(e){
        console.log("The next word button was clicked!");
        const temp = this.state.temp;
        temp.hungarian = this.state.hungarianExp;
        temp.resultVisibil = "Result";
        temp.modalIsOpen = true;
        this.setState(temp);
        // const openChange = Object.assign(this.state, {modalIsOpen: true});
        // this.setState(openChange);
        
    }

    onChangeSolution(event, index){
        console.log('index: ', index)
        const temp = this.state.hungarianExp;
        temp[index] = event.target.value;
        this.setState({hungarianExp: temp});
        console.log(this.state.hungarianExp)
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
        temp.temp.english = [];
        temp.temp.result = [];
        this.setState(temp);
        
    }

    back(){
        this.props.history.push("/translate");
    }


    render(){
        const expressions = this.state.temp.map((current, index) => {
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
                        {current.result}
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
                        <a href={`/game`}
                            className='game btn-primary'> New Game </a>
                        <a href={`/translate`}
                            className='game btn-danger'> Close </a>
                    </div>
                </div>
            </from>
        )
    }
}

export default Game;