import React, {Component} from 'react';

class SignOut extends Component {

    back(){
        this.props.history.push("/");
    }

    render(){
        return(
        <form>
            <div>
                <label>You sign out! Go to the home side!</label>
                <button type="submit" 
                    hidden
                    className="btn btn-primary"
                    onClick={ () => this.back()}>
                    To Home
                </button>
            </div>
        </form>
        )
    }

}

export default SignOut;