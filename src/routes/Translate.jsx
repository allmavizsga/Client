import React, {Component} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../style/Translate.css';

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

class Translate extends Component {

    constructor(props){
        super(props);
        this.state = {
            word: 'szia',
            translated: 'hello',
            wordId: '',
            told: '',
            tolds: [],
            userEmail: 'dezsotokos@yahoo.com',
            modalIsOpen: false,
            favoriteButton: true,
            favorite: true,
            quastion: ''
        }
    }

    componentDidMount(){
        this.loadTolds();
    }

    loadTolds(){
        axios.get(`http://localhost:8080/told/tolds/1`)
            .then(res => {
                if(res.data[0] != null){
                const temp = this.state;
                temp.tolds = res.data.map( obj => obj.told);
                this.setState(temp);
                }
    })
    }

    wordChange(event){
        const newState = Object.assign(this.state, {
            ['word']: event.target.value, ['translated']: '', ['tolds']: []
        });
        newState.favorite = false;
        newState.favoriteButton = false;
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
        const url = `http://localhost:8080/word/hu/`+this.state.word;  
        axios.get(url)
            .then(res => {
                console.log(res.data[0].wordId);
                if(res.data[0] != null){
                    console.log("fordit");
                    const temp = this.state;
                    temp.favoriteButton = true;
                    temp.wordId = res.data[0].wordId;
                    temp.translated = res.data[0].english;
                    this.toldsForWord();
                    this.favorite();
                    this.setState(temp);
                    console.log(temp);}
            })

    }

    toldsForWord(){
        axios.get(`http://localhost:8080/told/tolds/`+this.state.wordId)
            .then(res => {
                if(res.data[0] !=null){
                    console.log(res.data);
                    const temp = this.state;
                    temp.tolds = res.data.map( obj => obj.told);
                    this.setState(temp);
                    console.log(temp);
                }
                     
        })
                
    }

    favorite(){
        axios.get(`http://localhost:8080/favorite/`+this.state.userEmail+'/'+this.state.wordId)
            .then(res => {
                if(res.data !=null){
                    console.log(res.data);
                    const temp = this.state;
                    temp.favorite = true;
                    this.setState(temp);
                }
                     
        })
    }

    onSubmitNewTold(e){
        if(this.state.told != ''){
            axios.get(`http://localhost:8080/told/newtold`,this.state.told,+this.state.wordId)
                .then(res => {
                    if(res.data !=null){
                        console.log("Beszurva a szo");
                    }
                        
            })
        }else{
            console.log("ures mondat");
        }
    }

    onSubmitFavorite(){
        const temp = this.state;
        if (temp.favoriteButton){
            temp.modalIsOpen = true;
            if(temp.favorite){
                temp.quastion = 'Do you want to delete the word in favorites?'
            } else{
                temp.quastion = 'Do you want to add the word to favorites?'
            }
        }
        this.setState(temp);
    }

    onSubminYes(){
        const temp = this.state;
        if (temp.favorite){
            temp.favorite = false;
            console.log("Delete in favorite");
            const url = `http://localhost:8080/favorite/`+this.state.userEmail+'/'+this.state.wordId;  
            axios.delete(url)
                .then(res => {})
        } else {
            temp.favorite = true;
            console.log("Add to favorite");
            const url = `http://localhost:8080/favorite/`+this.state.userEmail+'/'+this.state.wordId;  
            axios.get(url)
                .then(res => {})
        }
        this.setState(temp);
    }

    onSubminNo(){
        console.log("Do nothing");
    }

    render(){
        const expresson = this.state.tolds.map((current) => {
            return ( 
                <label> {current} </label>
            )
        })
        return(
        <form>
            <div>
                <div className="form-row">
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className="translateLabel" for="inputWord">Word:</label>
                        <input type="text" 
                            className="form-control" 
                            id="inputWord" 
                            placeholder="Write the word!"
                            value={this.state.word}
                            onChange={ (e) => this.wordChange(e)}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="translateLabel" for="inputWord">Translated:</label>
                        {/* <div>
                            <label for="inputTranslated">{[this.state.translated]}</label>
                        </div> */}
                        <input type="text"
                            readonly
                            className="form-control"
                            value={[this.state.translated]}/>
                    </div>
                    <div>
                        <button type="button" 
                            className="btn btn-primary"
                            onClick={ (e) => this.onSubmitTranslation(e)}>
                            Translation
                        </button>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <button type="button" 
                            className="btn btn-primary"
                            onClick={ () => this.onSubmitFavorite()}>
                            <i className="fa fa-star" aria-hidden="false"></i>
                        </button>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="translateLabel">Tolds:</label>
                        <div>
                            {expresson} 
                        </div>
                    </div>
                </div>
                <div className="form-row">
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className="translateLabel" for="inputAddNew">Told:</label>
                        <input type="text" 
                            className="form-control" 
                            id="inputAddNew" 
                            placeholder="Write the told!"
                            value={this.state.told}
                            onChange={ (e) => this.addNewChange(e)}/>
                    </div>
                    <div>
                        <button type="button" 
                            className="btn btn-primary"
                            onClick={ (e) => this.onSubmitNewTold(e)}>
                            <i className="fa fa-edit" aria-hidden="false"></i>
                            Add new
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={this.state.modalIsOpen}
                style={customStyles}
                contentLabel="Results">
                <h3 ref={subtitle => this.subtitle = subtitle}>{this.state.quastion}</h3>
                <form>
                <button type="submit" onClick={() => this.onSubminNo()}> No </button>
                <button onClick={() => this.onSubminYes()}> Yes </button>
                </form>
            </Modal>
        </form>
        )
    }

}

export default Translate;