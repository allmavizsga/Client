import React , { Component } from 'react';
import swal from 'sweetalert2-react';
import Modal from 'react-modal';

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
            temp: [ {english: 'how are you', hungarian: 'hogy vagy'},{english: 'how are you', hungarian: 'hogy vagy'} ],
            hungarianExp: [],
            modalIsOpen: false,
            result: '18/20 '
        }
    }

    send(e){
        console.log("The next word button was clicked!");
        const temp = this.state.temp;
        temp.hungarian = this.state.hungarianExp;
        const openChange = Object.assign(this.state, {modalIsOpen: false});
        this.setState(openChange);
    }

    onChangeSolution(event, index){
        console.log('index: ', index)
        const temp = this.state.hungarianExp;
        temp[index] = event.target.value;
        this.setState({hungarianExp: temp});
        console.log(this.state.hungarianExp)
    }

    openModal() {
        const temp = Object.assign(this.state, {modalIsOpen: true});
        this.setState(temp);
    }
  
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
  
    newGame() {
        const temp = this.state;
        temp.hungarianExp = [];
        this.setState(temp);
        
    }

    back(){
        this.props.history.push("/translate");
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
                <div>
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
                        
                        <button onClick={() =>this.send()}>Send</button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            //onAfterOpen={this.afterOpenModal()}
                            //onRequestClose={this.closeModal()}
                            style={customStyles}
                            contentLabel="Example Modal">
                            <h3 ref={subtitle => this.subtitle = subtitle}>Your result</h3>
                            <div>{this.state.result}</div>
                            <form>
                            <button onClick={() => this.closeModal()}>close</button>
                            <button onClick={() => this.back()}>End game</button>
                            </form>
                        </Modal>
                        <button onClick={() =>this.newGame()}>New Game</button>
                        <a href={`/translate`}
                        className='btn btn-danger'><i className="fa fa-trash" aria-hidden="true"></i> Close</a>
                    </div>
                </div>
            </from>
        )
    }
}

export default Game;