import {Component} from 'react';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value});
    }

    handleClick = () => {
        this.props.filterFn(this.state.userInput);
    }

    handleClear = () => {
        this.setState({userInput: ''});
        this.props.resetFn();
    }

    render(){
        console.log(this.state)
        return (
            <div className="SearchBar">
                <div className="Inputs">
                    <input value={this.state.userInput} onChange={(e) => this.handleChange(e)}/>
                    <button onClick={() => this.handleClick()}>search</button>
                    <button onClick={() => this.handleClear()}>clear search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;