import { Component } from "react";

class HomePage extends Component{
    state={generated_number:null}

    generateNumber = ()=>{
        const new_number = Math.random() 
        const modified_number = Math.ceil(new_number*100)
       
        this.setState({generated_number:modified_number})
    }

    render(){
        const {generated_number} = this.state
        return <div id="main-container">
            <div className="mini-container">
                <h2>Random Number</h2>
                <p>Generate a random number in the range of 0 to 100</p>
                <button type="button" onClick={this.generateNumber}>Generate</button>
                <h1>{generated_number}</h1>
            </div>
        </div>
    }

}

export default HomePage