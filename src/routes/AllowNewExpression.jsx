import React , { Component } from 'react';
import axios from  'axios'
import '../style/AllowNew.css'



class AllowNewExpression extends Component {
 
    constructor(props){
        super(props);

        this.state = {
            requestUser: [{
                email: '',
                password: '',
                address: '',
                city: '',
                town:'',
                admin: false}
            ],
            requestTold:[{
                toldId: '',
                told: '',
                wordId:'',
                useremail: ''}
            ],
            user:'',
            userAllow: false,
            toldAllow: false
        }
    }

    componentDidMount(){
        this.newUserRequest();
        this.newToldRequest();
      }

    newUserRequest(){
        axios.get(`http://localhost:8080/allowuser/first`)
        .then(res => {
            const temp = this.state;
            console.log(res.data);
            if(res.data.email != null){
                console.log(res.data);
                temp.userAllow = true;
                temp.requestUser.email = res.data.email;
                temp.user = res.data.email + " " + res.data.address + " " + res.data.town + " " + res.data.state;

            }else{
                temp.user = "Don't have any request!";
                temp.userAllow = false;
            }
            this.setState(temp);
        })
    
    }

    newToldRequest(){
        axios.get(`http://localhost:8080/allowtold/first`)
        .then(res => {       
            const temp = this.state;
            if(res.data.allowToldId != null){
                temp.toldAllow = true;
                temp.requestTold.toldId = res.data.allowToldId;
                temp.requestTold.told = res.data.allowTold;
            }else{
                temp.requestTold.told = "Don't have any request!";
                temp.toldAllow = false;
            }
            this.setState(temp);
      })
      if(this.state.toldAllow == false){
          const temp = this.state;
          temp.requestTold.told= "Don't have any request!";
          this.setState(temp);
      }

    }

    refuseUser(){
        
        if(this.state.userAllow){
            const url = `http://localhost:8080/allowuser/`+this.state.requestUser.email;
            axios.delete(url)
                .then(res => { 
                    this.newUserRequest();
                })
            
        }else{
            console.log("Visszautasitva user HIBA");
        }
    }

    acceptUser(){
        if(this.state.userAllow){
            const url = `http://localhost:8080/allowuser/`+this.state.requestUser.email;
            axios.post(url)
                .then(res => { 
                    console.log(res.data);
                    this.newUserRequest();
                })
        }else{
            console.log("Elfogadasi user HIBA");
        }
    }

    refuseTold(){
        if(this.state.toldAllow){
            const url = `http://localhost:8080/allowtold/`+this.state.requestTold.toldId;
            axios.delete(url)
                .then(res => { 
                    this.newToldRequest();
                })
        }else{
            console.log("Visszautasitva user HIBA");
        }
    }
    
    acceptTold(){
        if(this.state.toldAllow){
            const url = `http://localhost:8080/allowtold/`+this.state.requestTold.toldId;
            axios.post(url)
                .then(res => { 
                    this.newToldRequest();
                })
        }else{
            console.log("Elfogadasi user HIBA");
        }
    }


    render(){
        return (
            <form>
                <div className="form-row">
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="allowLabel">Sign up user:</label>
                        <div>
                            <label >{this.state.user}</label>
                        </div>
                    </div>
                    </div>
                <div className="form-row">
                    <button type="button" 
                        className="allowBut btn-primary"
                        onClick={ () => this.acceptUser()}>
                        Accept
                    </button>
                    <button type="button" 
                        className="allowBut btn-primary"
                        onClick={ () => this.refuseUser()}>
                        Refuse
                    </button> 
                </div> 
                <div className="form-row">
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="allowLabel">Told proposal:</label>
                        <div>
                            <label>{this.state.requestTold.told}</label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <button type="button" 
                        className="allowBut btn-primary"
                        onClick={ () => this.acceptTold()}>
                        Accept
                    </button>
                    <button type="button" 
                        className="allowBut btn-primary"
                        onClick={ () => this.refuseTold()}>
                        Refuse
                    </button> 
                </div>
            </form>
        )
    }
}

export default AllowNewExpression;