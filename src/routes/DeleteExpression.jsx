import React , { Component } from 'react';
import styled from 'styled-components';


const TemporaryMessage = styled.div `
    text-align: center;
    font-size: 40px;
    padding-top: 100px;
`

class DeleteExpression extends Component {

    deleteUser(e){
        //console.log("The delete user was clicked!");
        this.props.history.push("/delete_expression/user");
    }

    deleteWord(e){
        //console.log("The delete word was clicked!");
        this.props.history.push("/delete_expression/word");
    }

    deleteTold(e){
        //console.log("The delete told was clicked!");
        this.props.history.push("/delete_expression/told");
    }

    back(e){
        this.props.history.push("/");
    }
 
    pagenotfound(){
        this.props.history.push("/pagenotfound");
    }

    render(){
        if(localStorage.getItem('admin') === "true" ){
            return (
                <form>
                    <div>
                        <TemporaryMessage> What do you want to delete?</TemporaryMessage>
                    </div>
                    <div>
                        <div className="form-row">
                        </div>
                        <div className="form-row">
                            <button type="submit" 
                                className="deletebutton btn-primary"
                                onClick={ (e) => this.deleteUser(e)}>
                                User
                            </button>
                            {/* <button type="submit" 
                                className="deletebutton btn-primary"
                                onClick={ (e) => this.deleteWord(e)}>
                                Word
                            </button> */}
                            <button type="submit" 
                                className="deletebutton btn-primary"
                                onClick={ (e) => this.deleteTold(e)}>
                                Told
                            </button>
                            <button type="submit" 
                                className="deletebutton btn-primary"
                                onClick={ (e) => this.back(e)}>
                                Back
                            </button>
                        </div>
                        <div className="form-row">
                            
                        </div>
                    </div>
                </form>
            )
        } else {
            this.pagenotfound();
            return(
                <div></div>
            )
        }
    }
}

export default DeleteExpression;