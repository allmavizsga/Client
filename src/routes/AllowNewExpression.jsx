import React , { Component } from 'react';


//  this is just a temporary div. If you don't wanna to use styled components, you can 
//  adjust your own components with explicit css files, using the 'className' attribute of the tags.
//  In this case u should can the import in the second row



class AllowNewExpression extends Component {
 
    constructor(props){
        super(props);

        this.state = {
            request: 'asdasfasfaF'
        }
    }

    refuse(){
        console.log("Visszautasitva")
    }

    accept(){
        console.log("Elfogadva")
    }

    render(){
        return (
            <form>
                <div className="form-group col-md-8">
                    <label>{this.state.request}</label>
                </div>
                <button type="submit" 
                    className="btn btn-primary"
                    onClick={ () => this.accept()}>
                    Accept
                </button>
                <button type="submit" 
                    className="btn btn-primary"
                    onClick={ () => this.refuse()}>
                    Refuse
                </button>    
            </form>
        )
    }
}

export default AllowNewExpression;