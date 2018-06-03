import React , { Component } from 'react';


//  this is just a temporary div. If you don't wanna to use styled components, you can 
//  adjust your own components with explicit css files, using the 'className' attribute of the tags.
//  In this case u should can the import in the second row



class AllowNewExpression extends Component {
 
    constructor(props){
        super(props);

        this.state = {
            requestUser: 'asdasfasfaF',
            requestTold: "poijmadks",
            userAllow: false,
            toldAllow: false
        }
    }

    refuseUser(){
        
        if(this.state.userAllow){
            console.log("Visszautasitva user");
        }else{
            console.log("Visszautasitva user HIBA");
        }
    }

    acceptUser(){
        if(this.state.userAllow){
            console.log("Elfogadva user");
        }else{
            console.log("Elfogadva user HIBA");
        }
    }

    refuseTold(){
        if(this.state.toldAllow){
            console.log("Visszautasitva told");
        }else{
            console.log("Visszautasitva told HIBA");
        }
    }

    acceptTold(){
        if(this.state.toldAllow){
            console.log("Elfogadva tld")
        }else{
            console.log("Elfogadva tld HIBA")
        }
    }


    render(){
        return (
            <form>
                <div className="form-row">
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label className="allowLabel">Sign up user:</label>
                        <div>
                            <label>{this.state.requestUser}</label>
                        </div>
                    </div>
                    <button type="submit" 
                        className="allowBut btn-primary"
                        onClick={ () => this.acceptUser()}>
                        Accept
                    </button>
                    <button type="submit" 
                        className="allowBut btn-primary"
                        onClick={ () => this.refuseUser()}>
                        Refuse
                    </button>   
                </div> 
                <div className="form-row">
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label className="allowLabel">Told proposal:</label>
                        <div>
                            <label>{this.state.requestTold}</label>
                        </div>
                    </div>
                    <button type="submit" 
                        className="allowBut btn-primary"
                        onClick={ () => this.acceptTold()}>
                        Accept
                    </button>
                    <button type="submit" 
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