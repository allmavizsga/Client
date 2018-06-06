import React , { Component } from 'react';
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

class Favorite extends Component {

    constructor(props){
        super(props);
        this.state = {
            temp: [ {english: 'én', hungarian: 'I'},{english: 'te', hungarian: 'you'},{english: 'ő', hungarian: 'he'},{english: 'mi', hungarian: 'we'},{english: 'ti', hungarian: 'you'},{english: 'ők', hungarian: 'they'} ],
            modalIsOpen: false
        }
    }

    componentDidMount(){
        this.donthavefavorite();
      }

    donthavefavorite(){
        const temp = this.state;
        if( temp.temp.english ===''){ 
            temp.modalIsOpen = true;
        }
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
                    <td className="rowsGame" >{current.hungarian}</td>
                </tr>
                
            )
        })
        return (
            <form>
                <div>
                <table className="table table-sm">
                        <thead>
                            <tr>
                            <th className="tHeader" scope="col">Number</th>
                            <th className="tHeader" scope="col">Hungarian word</th>
                            <th className="tHeader" scope="col">English word</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expressions}
                        </tbody>
                    </table>
                </div>
                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        //onAfterOpen={this.afterOpenModal()}
                        style={customStyles}
                        contentLabel="Error">
                        <h3 ref={subtitle => this.subtitle = subtitle}>You dont have favorite!</h3>
                        <form>
                        <button onClick={() => this.back()}> Oke </button>
                        </form>
                    </Modal>
                </div>
            </form>
        )
    }
}

export default Favorite;