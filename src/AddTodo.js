//class based component
import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''                 //so the input field clears out after submitting
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo;